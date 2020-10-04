import { DataUrlConfig, ResponseType } from "../models";
// tslint:disable-next-line: no-var-requires
const axios = require("axios");

export class Download {
  private getMimeType(responseType: ResponseType): any {
    switch (responseType) {
      case "application/json":
        return "application/json";
      case "image/jpeg":
        return "image/jpeg";
      case "video/mp4":
        return "video/mp4";
      default:
        return "application/json";
    }
  }
  downloadFileFromUrl(
    downloadUrl: string,
    responseType: ResponseType,
    fileName: string
  ) {
    const type = this.getMimeType(responseType);

    axios
      .request({
        downloadUrl,
        crossDomain: true,
        method: "GET",
        responseType:
          responseType === "application/json" ? "application/json" : "blob",
      })
      .then((response: any) => {
        const responseData =
          responseType === "application/json"
            ? JSON.stringify(response.data, null, 2)
            : response.data;
        const hrefUrl = window.URL.createObjectURL(
          new Blob([responseData], { type })
        );
        const link = document.createElement("a");
        link.href = hrefUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        link.remove();
      });
  }

  downloadFileFromCanvas(
    canvas: HTMLCanvasElement,
    fileName: string,
    dataUrlConfig: DataUrlConfig
  ) {
    const dataUrl = canvas.toDataURL(dataUrlConfig.type, dataUrlConfig.quality);
    this.downloadSingleFile(dataUrl, fileName);
  }

  private downloadSingleFile(uri: string, name: string) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link.remove();
  }
}
