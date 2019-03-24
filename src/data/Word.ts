export interface IWord {
    id?: number;
    text: string;
    imageUrl?: string;
    audioUrl?: string;
    categories: number[];
    imageAsset?: string;
    audioAsset?: string;
}
