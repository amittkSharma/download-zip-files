"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectoryOps = void 0;
const fs = require("fs");
const glob_1 = require("glob");
const utils_1 = require("../utils");
const path = require("path");
class DirectoryOps {
    createCoachEditorConfigDirectory(dirName) {
        const directoryPath = path.join(__dirname, dirName);
        if (!fs.existsSync(directoryPath)) {
            utils_1.log.info(`Directory will be created at location: ${directoryPath}`);
            fs.mkdirSync(directoryPath);
        }
        else {
            utils_1.log.info(`Directory is already present at location: ${directoryPath}`);
        }
    }
    globSort(fileExt, dir) {
        return glob_1.glob
            .sync(`**/*${fileExt}`, { cwd: dir, nosort: false, ignore: 'Configs/*' })
            .sort((first, second) => first.localeCompare(second, 'en', { numeric: true }));
    }
}
exports.DirectoryOps = DirectoryOps;
//# sourceMappingURL=directory-ops.js.map