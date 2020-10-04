import { DataUrlConfig, ResponseType } from "../models";
declare class Download {
    private getMimeType;
    downloadFileFromUrl: (downloadUrl: string, responseType: ResponseType, fileName: string) => void;
    downloadFileFromCanvas: (canvas: HTMLCanvasElement, fileName: string, dataUrlConfig: DataUrlConfig) => void;
    private downloadSingleFile;
}
export declare const download: Download;
export {};
