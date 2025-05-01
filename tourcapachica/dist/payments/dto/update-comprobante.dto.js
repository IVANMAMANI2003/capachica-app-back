"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComprobanteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_comprobante_dto_1 = require("./create-comprobante.dto");
class UpdateComprobanteDto extends (0, swagger_1.PartialType)(create_comprobante_dto_1.CreateComprobanteDto) {
}
exports.UpdateComprobanteDto = UpdateComprobanteDto;
//# sourceMappingURL=update-comprobante.dto.js.map