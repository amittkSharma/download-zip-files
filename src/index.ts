import { DirectoryOps } from './directory-ops/directory-ops'
import { FileNames } from './file-names'
import { JsonOps } from './json-ops'

export class FileFacilitator {
  // public download = new Download()
  public directoryOps = new DirectoryOps()
  public fileNames = new FileNames()
  public jsonOps = new JsonOps()
}
