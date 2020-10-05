"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFacilitator = void 0;
const directory_ops_1 = require("./directory-ops/directory-ops");
const file_names_1 = require("./file-names");
class FileFacilitator {
    constructor() {
        // public download = new Download()
        this.directoryOps = new directory_ops_1.DirectoryOps();
        this.fileNames = new file_names_1.FileNames();
    }
}
exports.FileFacilitator = FileFacilitator;
//# sourceMappingURL=index.js.map