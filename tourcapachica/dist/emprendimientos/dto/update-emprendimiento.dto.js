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
exports.UpdateEmprendimientoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_emprendimiento_dto_1 = require("./create-emprendimiento.dto");
const create_emprendimiento_dto_2 = require("./create-emprendimiento.dto");
class UpdateEmprendimientoDto extends (0, swagger_1.PartialType)(create_emprendimiento_dto_1.CreateEmprendimientoDto) {
}
exports.UpdateEmprendimientoDto = UpdateEmprendimientoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID del usuario propietario del emprendimiento',
        example: 1,
        required: false,
        type: Number
    }),
    __metadata("design:type", Number)
], UpdateEmprendimientoDto.prototype, "usuarioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del emprendimiento',
        example: 'Restaurante La Isla',
        required: false,
        maxLength: 200,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del emprendimiento',
        example: 'Restaurante especializado en comida local',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Tipo de emprendimiento',
        example: 'restaurante',
        required: false,
        enum: ['restaurante', 'hospedaje', 'artesania', 'otro'],
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del emprendimiento',
        example: 'Av. Principal 123, Capachica',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Coordenadas geográficas del emprendimiento',
        example: '-15.7667, -69.6833',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "coordenadas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Teléfono de contacto',
        example: '+51 987654321',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "contactoTelefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico de contacto',
        example: 'contacto@restaurante.com',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "contactoEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sitio web del emprendimiento',
        example: 'https://restaurante.com',
        required: false,
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "sitioWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Redes sociales del emprendimiento',
        example: {
            facebook: 'https://facebook.com/restaurante',
            instagram: 'https://instagram.com/restaurante'
        },
        required: false,
        type: Object
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "redesSociales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Estado del emprendimiento',
        example: 'pendiente',
        required: false,
        enum: ['pendiente', 'aprobado', 'rechazado'],
        type: String
    }),
    __metadata("design:type", String)
], UpdateEmprendimientoDto.prototype, "estado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de aprobación del emprendimiento',
        example: '2024-03-20T00:00:00.000Z',
        required: false,
        type: Date
    }),
    __metadata("design:type", Date)
], UpdateEmprendimientoDto.prototype, "fechaAprobacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Lista de imágenes del emprendimiento',
        type: [create_emprendimiento_dto_2.ImageDto],
        required: false,
        example: [
            {
                url: 'https://example.com/image1.jpg'
            },
            {
                url: 'https://example.com/image2.jpg'
            }
        ]
    }),
    __metadata("design:type", Array)
], UpdateEmprendimientoDto.prototype, "imagenes", void 0);
//# sourceMappingURL=update-emprendimiento.dto.js.map