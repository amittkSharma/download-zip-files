import { DirectoryOps } from './directory-ops/directory-ops';
import { FileNames } from './file-names';
import { JsonOps } from './json-ops';
declare class FileFacilitator {
    directoryOps: DirectoryOps;
    fileNames: FileNames;
    jsonOps: JsonOps;
}
export declare const fileFacilitator: FileFacilitator;
export {};
