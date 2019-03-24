import { Component, ViewChild, OnDestroy } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { NativeAudio } from '@ionic-native/native-audio';

import { DefaultConfig } from './../../data/DefaultConfig';
import { IWord } from 'src/data/Word';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.less'],
})
export class HomePage implements OnDestroy {
    @ViewChild(IonSlides) slides: IonSlides;
    categoriesView: any;
    defaults: any = DefaultConfig;
    currentSegment: number;
    loadedAudioIds: string[] = [];
    loadedSegments: number[] = [];
    slideOpts = {
        effect: 'flip',
        isBeginning: true,
        zoom: false
    };
    isPlaying = false;
    selectedWord: IWord;

    constructor() {
        this.categoriesView = this.defaults.categories.map((c) => {
            return {
                id: c.id,
                text: c.text,
                icon: c.icon,
                words: this.defaults.words.filter((word) => {
                    return word.categories.some((id) => id === c.id);
                })
            };
        });

        this.loadedSegments = this.categoriesView.map((category) => category.id);
        this.currentSegment = this.loadedSegments[0];

        this.defaults.words.forEach(word => {
            NativeAudio.preloadSimple(word.id.toString(), word.audioAsset).then(() => {
                this.loadedAudioIds.push(word.id.toString());
            });
        });
    }

    ngOnDestroy() {
        if (this.loadedAudioIds.length) {
            this.loadedAudioIds.forEach((id) => { NativeAudio.unload(id); });
        }
    }

    onCategoryClick(value) {
        // tslint:disable-next-line:radix
        this.slides.slideTo(this.loadedSegments.indexOf(value), 500);
    }

    slideChanged() {
        this.slides.getActiveIndex().then((value) => {
            this.currentSegment = this.loadedSegments[value];
        });
    }

    onImgClick(word) {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.selectedWord = word;
            NativeAudio.play(word.id.toString(), () => this.isPlaying = false)
            .catch(() => {
                this.isPlaying = false;
            });
        }
    }
}
