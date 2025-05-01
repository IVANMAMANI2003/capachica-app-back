"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmprendimientoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_emprendimiento_dto_1 = require("./create-emprendimiento.dto");
class UpdateEmprendimientoDto extends (0, swagger_1.PartialType)(create_emprendimiento_dto_1.CreateEmprendimientoDto) {
}
exports.UpdateEmprendimientoDto = UpdateEmprendimientoDto;
//# sourceMappingURL=update-emprendimiento.dto.js.map