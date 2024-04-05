/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    create(createCarDto: CreateCarDto): Promise<void>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/cars/schema/car.schema").Car, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/cars/schema/car.schema").Car, "findOne">;
    update(id: string, updateCarDto: UpdateCarDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/cars/schema/car.schema").Car, "findOneAndUpdate">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, import("src/cars/schema/car.schema").Car> & import("src/cars/schema/car.schema").Car & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("src/cars/schema/car.schema").Car, "deleteOne">;
}
