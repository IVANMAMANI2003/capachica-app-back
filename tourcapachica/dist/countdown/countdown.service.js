"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountdownService = void 0;
const common_1 = require("@nestjs/common");
const canvas_1 = require("canvas");
const GIFEncoder = require("gifencoder");
let CountdownService = class CountdownService {
    generateGif(durationSec) {
        const width = 200;
        const height = 80;
        const encoder = new GIFEncoder(width, height);
        encoder.start();
        encoder.setRepeat(0);
        encoder.setDelay(1000);
        encoder.setQuality(10);
        const canvas = (0, canvas_1.createCanvas)(width, height);
        const ctx = canvas.getContext('2d');
        ctx.font = 'bold 32px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let sec = durationSec; sec >= 0; sec--) {
            ctx.fillStyle = '#007bff';
            ctx.fillRect(0, 0, width, height);
            const m = String(Math.floor(sec / 60)).padStart(2, '0');
            const s = String(sec % 60).padStart(2, '0');
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${m}:${s}`, width / 2, height / 2);
            encoder.addFrame(ctx);
        }
        encoder.finish();
        return encoder.out.getData();
    }
};
exports.CountdownService = CountdownService;
exports.CountdownService = CountdownService = __decorate([
    (0, common_1.Injectable)()
], CountdownService);
//# sourceMappingURL=countdown.service.js.map