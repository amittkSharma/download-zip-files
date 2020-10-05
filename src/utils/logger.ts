import * as pino from 'pino'

export const log = pino({
  prettyPrint: {
    translateTime: true,
    colorize: true,
  },
})
