import { Brand } from "./brand";
import { Type } from "./type";

export class Model {
    id: string;
    description: string;
    typeVehicleId: string;
    type: Type;
    brandId: string;
    brand: Brand;
    lastUpdateDate: Date;
}
