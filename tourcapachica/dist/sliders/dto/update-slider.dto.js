"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSliderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_slider_dto_1 = require("./create-slider.dto");
class UpdateSliderDto extends (0, mapped_types_1.PartialType)(create_slider_dto_1.CreateSliderDto) {
}
exports.UpdateSliderDto = UpdateSliderDto;
//# sourceMappingURL=update-slider.dto.js.map