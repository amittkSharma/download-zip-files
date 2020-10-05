import { DataUrlConfig, ResponseType } from '../models';
export declare class Download {
    private getMimeType;
    downloadFileFromUrl(url: string, responseType: ResponseType, fileName: string): void;
    downloadFileFromCanvas(canvas: HTMLCanvasElement, fileName: string, dataUrlConfig: DataUrlConfig): void;
    private downloadSingleFile;
}
