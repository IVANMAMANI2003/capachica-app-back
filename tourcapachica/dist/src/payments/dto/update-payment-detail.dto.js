"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_payment_detail_dto_1 = require("./create-payment-detail.dto");
class UpdatePaymentDetailDto extends (0, swagger_1.PartialType)(create_payment_detail_dto_1.CreatePaymentDetailDto) {
}
exports.UpdatePaymentDetailDto = UpdatePaymentDetailDto;
//# sourceMappingURL=update-payment-detail.dto.js.map