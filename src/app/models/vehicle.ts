import { Model } from "./model";

export class Vehicle {
    id: string;
    description: string;
    yearBuild: number;
    yearModel: number;
    vehicleModelId: string;
    model: Model;
    lastUpdateDate: Date;
}
