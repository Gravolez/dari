import { Component } from '@angular/core';
import { Url } from 'url';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { WordProvider } from 'src/providers/WordProvider';
import { File } from '@ionic-native/file';

@Component({
    selector: 'app-add',
    templateUrl: 'add.page.html',
    styleUrls: ['add.page.less'],
})
export class AddPage {
    imageUrl: string;
    audioUrl: string;
    imageText: string;
    audioText: string;
    text: string;
    categories: number[];

    constructor(private words: WordProvider) {
        this.imageText = 'Изберете изображение';
        this.audioText = 'Няма';
        this.text = '';
    }

    public addImage() {
        this.openGallery();
    }

    public save() {
        this.saveBase64(this.imageUrl, this.text).then((result) => {
            this.words.addWord({ text: this.text, imageUrl: result, categories: this.categories });
        });
    }

    private openGallery(): void {
        const options: CameraOptions = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        };

        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            this.imageUrl = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }

    b64toBlob(b64Data, contentType) {
        contentType = contentType || '';
        const sliceSize = 512;
        const byteCharacters = atob(b64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }

    public saveBase64(base64: string, name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const realData = base64.split(',')[1];
            const blob = this.b64toBlob(realData, 'image/jpeg');

            File.writeFile('images/', name, blob)
                .then(() => {
                    resolve('images/' + name);
                })
                .catch((err) => {
                    console.log('error writing blob');
                    reject(err);
                });
        });
    }
}
