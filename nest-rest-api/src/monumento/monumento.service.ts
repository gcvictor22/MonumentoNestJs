import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Monumento } from "./entities/monumento.entity";

@Injectable()
export class MonumentoService {

    constructor(@InjectRepository(Monumento) private readonly monumentoRepository : Repository<Monumento>) {}

    findAll() : Promise<Monumento[]> {
        return this.monumentoRepository.find();
    }

    findOne(id: number): Promise<Monumento> {
        return this.monumentoRepository.findOneById(id);
    }

    new(entity: Monumento) : Promise<Monumento> {
        return this.monumentoRepository.save(entity);
    }

    update(id : number, entity : Monumento) : Promise<UpdateResult>{
        return this.monumentoRepository.update(id, entity)
    }

    delete(id: number) {
        return this.monumentoRepository.delete(id);
    }

}