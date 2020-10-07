"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileNames = void 0;
class FileNames {
    constructor() {
        this.generateFileNameWithCurrentDateTime = (fileName) => {
            const d = new Date();
            const dformat = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}T${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
            return `${fileName}_${dformat}.json`;
        };
    }
    getFileNameWithNoExtenstion(fileName) {
        const fileNameWithNoExt = fileName.split('.').slice(0, -1).join('.');
        return fileNameWithNoExt.toLowerCase();
    }
}
exports.FileNames = FileNames;
//# sourceMappingURL=file-names.js.map