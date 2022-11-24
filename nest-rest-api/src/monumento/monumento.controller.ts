import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Monumento } from "./entities/monumento.entity";
import { MonumentoService } from "./monumento.service";

@Controller('/monumento')
export class MonumentoController {

    constructor(private readonly monumentoService: MonumentoService) {}

    @Get('/')
    @HttpCode(HttpStatus.OK)
    async findAll() : Promise<Monumento[]> {
        return await this.monumentoService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id : number): Promise<Monumento> {
        return await this.monumentoService.findOne(id);
    }

    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: Monumento) : Promise<Monumento> {
        return await this.monumentoService.new(entity);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id : number, @Body() entity : Monumento){
        await this.monumentoService.update(id, entity);
        return this.monumentoService.findOne(id);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number) {
        await this.monumentoService.delete(id);

        if(!await this.monumentoService.delete(id)){
            HttpStatus.BAD_REQUEST
            return 'Ha ocurrido un error'
        }

        return 'Eliminado con éxito'
    }

}