import * as fs from 'fs'
import { glob } from 'glob'
import { log } from '../utils'
import path = require('path')

export class DirectoryOps {
  createCoachEditorConfigDirectory(dirName: string): void {
    const directoryPath = path.join(__dirname, dirName)
    if (!fs.existsSync(directoryPath)) {
      log.info(`Directory will be created at location: ${directoryPath}`)
      fs.mkdirSync(directoryPath)
    } else {
      log.info(`Directory is already present at location: ${directoryPath}`)
    }
  }

  globSort(fileExt: string, dir: string) {
    return glob
      .sync(`**/*${fileExt}`, { cwd: dir, nosort: false, ignore: 'Configs/*' })
      .sort((first, second) => first.localeCompare(second, 'en', { numeric: true }))
  }
}
