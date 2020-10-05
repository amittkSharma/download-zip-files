"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const pino = require("pino");
exports.log = pino({
    prettyPrint: {
        translateTime: true,
        colorize: true,
    },
});
//# sourceMappingURL=logger.js.map