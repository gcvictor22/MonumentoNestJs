import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Monumento } from "./entities/monumento.entity";

@Injectable()
export class MonumentoService {

    constructor(@InjectRepository(Monumento) private readonly monumentoRepository : Repository<Monumento>) {}

    findAll() : Promise<Monumento[]> {
        return this.monumentoRepository.find();
    }

    async findOne(id: number): Promise<Monumento> {
        
        let aux : Promise<Monumento[]> = this.findAll()
        let auxBool : boolean = false

        for (let it of await aux) {
            if (it.id == id) {
                auxBool = true
                break;
            }
        }
        
        if (auxBool) {
            return this.monumentoRepository.findOneById(id);
        }else{
            throw new HttpException(
                'Usuario no encontrado',
                HttpStatus.NOT_FOUND
            )
        }
    }

    new(entity: Monumento) : Promise<Monumento> {
        return this.monumentoRepository.save(entity);
    }

    async update(id : number, entity : Monumento) : Promise<UpdateResult>{
        
        let aux : Promise<Monumento[]> = this.findAll()
        let auxBool : boolean = false

        for (let it of await aux) {
            if (it.id == id) {
                auxBool = true
                break;
            }
        }
        
        if (auxBool) {
            return this.monumentoRepository.update(id, entity)
        }else{
            throw new HttpException(
                'Usuario no encontrado',
                HttpStatus.NOT_FOUND
            )
        }
    }

    async delete(id: number) {
        let aux : Promise<Monumento[]> = this.findAll()
        let auxBool : boolean = false

        for (let it of await aux) {
            if (it.id == id) {
                auxBool = true
                break;
            }
        }
        
        if (auxBool) {
            return this.monumentoRepository.delete(id);
        }else{
            throw new HttpException(
                'Usuario no encontrado',
                HttpStatus.NOT_FOUND
            )
        }
    }

}