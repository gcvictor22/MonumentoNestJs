import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/common/common.service";
import { Repository } from "typeorm";
import { Monumento } from "./entities/monumento.entity";

@Injectable()
export class MonumentoService extends BaseService<Monumento> {

    constructor(@InjectRepository(Monumento) private personaRepo : Repository<Monumento>) {
        super();
    }

    getRepository(): Repository<Monumento> {
        return this.personaRepo;
    }

}