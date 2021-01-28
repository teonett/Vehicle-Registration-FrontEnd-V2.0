import { Model } from "./model";

export class Vehicle {
    id: string;
    description: string;
    yearBuild: number;
    yearModel: number;
    model: Model;
    lastUpdateDate: Date;
}
