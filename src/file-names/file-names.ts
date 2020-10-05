export class FileNames {
  generateFileNameWithCurrentDateTime = (fileName: string) => {
    const d = new Date()
    const dformat = `${d.getFullYear()}${
      d.getMonth() + 1
    }${d.getDate()}T${d.getHours()}${d.getMinutes()}${d.getSeconds()}`
    return `${fileName}_${dformat}.json`
  }

  removeFileExtension(fileName: string) {
    const fileNameWithNoExt = fileName.split('.').slice(0, -1).join('.')
    return fileNameWithNoExt.toLowerCase()
  }
}
