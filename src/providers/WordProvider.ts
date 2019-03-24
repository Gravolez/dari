import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DefaultConfig } from '../data/DefaultConfig';
import { IWord } from 'src/data/Word';

@Injectable({
    providedIn: 'root',
})
export class WordProvider {
    private words = null;

    constructor(private storage: Storage) {
        this.storage.length().then((length) => {
            if (length === 0) {
                this.storage.set('config', DefaultConfig);
                this.words = DefaultConfig;
            } else {
                this.storage.get('config').then((result) => {
                    this.words = result;
                });
            }
        });
    }

    public getWords() {
        return this.words.words;
    }

    public addWord(word: IWord) {
        if (word.id == null) {
            word.id = this.words.nextWordId++;
        }
        this.words.words.push(word);

        return this.saveWords(this.words);
    }

    public saveWords(config: any) {
        return this.storage.set('config', config);
    }
}
