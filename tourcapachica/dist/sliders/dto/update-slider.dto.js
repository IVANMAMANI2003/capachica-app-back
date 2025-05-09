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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSliderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_slider_dto_1 = require("./create-slider.dto");
const create_slider_dto_2 = require("./create-slider.dto");
class UpdateSliderDto extends (0, swagger_1.PartialType)(create_slider_dto_1.CreateSliderDto) {
}
exports.UpdateSliderDto = UpdateSliderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del slider',
        example: 'Banner Principal',
        required: false,
        maxLength: 100,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], UpdateSliderDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del slider',
        example: 'Banner promocional para la temporada de verano',
        required: false,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSliderDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del slider',
        example: 'activo',
        enum: ['activo', 'inactivo', 'pendiente'],
        required: false,
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['activo', 'inactivo', 'pendiente']),
    __metadata("design:type", String)
], UpdateSliderDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Imágenes del slider',
        required: false,
        type: [create_slider_dto_2.ImageDto],
        example: [
            {
                url: 'https://example.com/image1.jpg'
            },
            {
                url: 'https://example.com/image2.jpg'
            }
        ]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateSliderDto.prototype, "imagenes", void 0);
//# sourceMappingURL=update-slider.dto.js.map