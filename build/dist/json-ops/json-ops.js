"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonOps = void 0;
class JsonOps {
    constructor() {
        this.cloneJson = (json) => {
            return JSON.parse(JSON.stringify(json));
        };
    }
}
exports.JsonOps = JsonOps;
//# sourceMappingURL=json-ops.js.map