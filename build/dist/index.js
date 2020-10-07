"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFacilitator = void 0;
const directory_ops_1 = require("./directory-ops/directory-ops");
const file_names_1 = require("./file-names");
const json_ops_1 = require("./json-ops");
class FileFacilitator {
    constructor() {
        // public download = new Download()
        this.directoryOps = new directory_ops_1.DirectoryOps();
        this.fileNames = new file_names_1.FileNames();
        this.jsonOps = new json_ops_1.JsonOps();
    }
}
exports.fileFacilitator = new FileFacilitator();
//# sourceMappingURL=index.js.map