export class JsonOps {
  cloneJson = (json: JSON): object => {
    return JSON.parse(JSON.stringify(json))
  }
}
