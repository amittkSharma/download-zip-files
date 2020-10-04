"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Download = void 0;
// tslint:disable-next-line: no-var-requires
const axios = require("axios");
class Download {
    getMimeType(responseType) {
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
    downloadFileFromUrl(downloadUrl, responseType, fileName) {
        const type = this.getMimeType(responseType);
        axios({
            downloadUrl,
            method: "GET",
            responseType: responseType === "application/json" ? "application/json" : "blob",
        }).then((response) => {
            const responseData = responseType === "application/json"
                ? JSON.stringify(response.data, null, 2)
                : response.data;
            const hrefUrl = window.URL.createObjectURL(new Blob([responseData], { type }));
            const link = document.createElement("a");
            link.href = hrefUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            link.remove();
        });
    }
    downloadFileFromCanvas(canvas, fileName, dataUrlConfig) {
        const dataUrl = canvas.toDataURL(dataUrlConfig.type, dataUrlConfig.quality);
        this.downloadSingleFile(dataUrl, fileName);
    }
    downloadSingleFile(uri, name) {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        link.remove();
    }
}
exports.Download = Download;
//# sourceMappingURL=download.js.map