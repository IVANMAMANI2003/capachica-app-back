"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownController = void 0;
const common_1 = require("@nestjs/common");
const countdown_service_1 = require("./countdown.service");
let CountdownController = class CountdownController {
    constructor(countdownService) {
        this.countdownService = countdownService;
    }
    getGif(expires, res) {
        const expTs = parseInt(expires, 10);
        const now = Date.now();
        let durationSec = Math.floor((expTs - now) / 1000);
        if (durationSec < 0)
            durationSec = 0;
        const buffer = this.countdownService.generateGif(durationSec);
        res
            .status(common_1.HttpStatus.OK)
            .header('Content-Type', 'image/gif')
            .send(buffer);
    }
};
exports.CountdownController = CountdownController;
__decorate([
    (0, common_1.Get)('gif'),
    __param(0, (0, common_1.Query)('expires')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CountdownController.prototype, "getGif", null);
exports.CountdownController = CountdownController = __decorate([
    (0, common_1.Controller)('countdown'),
    __metadata("design:paramtypes", [countdown_service_1.CountdownService])
], CountdownController);
//# sourceMappingURL=countdown.controller.js.map