import { IWord } from './Word';
import { ICategory } from './Category';

export const DefaultConfig: { words: IWord[], categories: ICategory[], nextWordId: number } = {
    words: [
        {
            id: 1,
            text: 'отивам на училище',
            categories: [1],
            imageAsset: 'assets/images/otivam_na_uchilishte.png',
            audioAsset: 'assets/audio/otivam_na_uchilishte.mp3'
        },
        {
            id: 2,
            text: 'прибирам се вкъщи',
            categories: [1],
            imageAsset: 'assets/images/pribiram_se_vkyshti.jpg',
            audioAsset: 'assets/audio/pribiram_se_vkyshti.mp3'
        },
        {
            id: 3,
            text: 'отивам до тоалетна',
            categories: [1],
            imageAsset: 'assets/images/otivam_do_toaletna.jpg',
            audioAsset: 'assets/audio/otivam_do_toaletna.mp3'
        },
        {
            id: 5,
            text: 'отивам в планината',
            categories: [1],
            imageAsset: 'assets/images/otivam_v_planinata.jpg',
            audioAsset: 'assets/audio/otivam_v_planinata.mp3'
        },
        {
            id: 7,
            text: 'почивам',
            categories: [2],
            imageAsset: 'assets/images/pochivam.jpg',
            audioAsset: 'assets/audio/pochivam.mp3'
        },
        {
            id: 10,
            text: 'корни',
            categories: [3],
            imageAsset: 'assets/images/corny.jpg',
            audioAsset: 'assets/audio/corny.mp3'
        },
        {
            id: 11,
            text: 'домати',
            categories: [3],
            imageAsset: 'assets/images/domati.jpg',
            audioAsset: 'assets/audio/domati.mp3'
        },
        {
            id: 12,
            text: 'бонбони "Фереро Роше"',
            categories: [3],
            imageAsset: 'assets/images/ferrero.jpg',
            audioAsset: 'assets/audio/bonboni_ferero_roshe.mp3'
        },
        {
            id: 13,
            text: 'кашкавал',
            categories: [3],
            imageAsset: 'assets/images/kashkaval.jpg',
            audioAsset: 'assets/audio/kashkaval.mp3'
        },
        {
            id: 14,
            text: 'боли ме глава',
            categories: [4],
            imageAsset: 'assets/images/boli_glava.jpg',
            audioAsset: 'assets/audio/boli_me_glava.mp3'
        },
        {
            id: 15,
            text: 'боли ме гърло',
            categories: [4],
            imageAsset: 'assets/images/boli_garlo.jpg',
            audioAsset: 'assets/audio/boli_me_gyrlo.mp3'
        },
        {
            id: 16,
            text: 'боли ме стомах',
            categories: [4],
            imageAsset: 'assets/images/boli_korem.jpg',
            audioAsset: 'assets/audio/boli_me_stomah.mp3'
        },
        {
            id: 18,
            text: 'луканка',
            categories: [3],
            imageAsset: 'assets/images/lukanka.jpg',
            audioAsset: 'assets/audio/lukanka.mp3'
        },
        {
            id: 19,
            text: 'брецел',
            categories: [3],
            imageAsset: 'assets/images/bretzel.jpg',
            audioAsset: 'assets/audio/bretzel.mp3'
        },
        {
            id: 20,
            text: 'стоян',
            categories: [5],
            imageAsset: 'assets/images/asen2.jpg',
            audioAsset: 'assets/audio/stoyan.mp3'
        }
    ],
    categories: [
        { id: 1, text: 'отивам', icon: 'walk' },
        { id: 2, text: 'правя', icon: 'thumbs-up' },
        { id: 3, text: 'храна', icon: 'nutrition' },
        { id: 4, text: 'боли ме', icon: 'medkit' },
        { id: 5, text: 'хора', icon: 'happy' }
    ],
    nextWordId: 3
};
