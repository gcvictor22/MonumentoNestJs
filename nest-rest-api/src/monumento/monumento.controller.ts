import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOkResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { link } from "fs";
import { Monumento } from "./entities/monumento.entity";
import { MonumentoService } from "./monumento.service";

@ApiTags('Monumentos')
@Controller('/monumento')
export class MonumentoController {

    constructor(private readonly monumentoService: MonumentoService) {}

    @Get('/')
    @ApiResponse({status: 200, description: 'Devuelve todos los monumentos guardados con éxito'}, )
    @ApiResponse({status: 500, description: 'Error interno del servidor'})
    @HttpCode(HttpStatus.OK)
    async findAll() : Promise<Monumento[]> {
        return await this.monumentoService.findAll();
    }

    @Get('/:id')
    @ApiResponse({status: 200, description: 'Devuelve el monumento especificado con éxito',type: Monumento})
    @ApiResponse({status: 404, description: 'No se ha encontrado un monumento con el identificador especificado'})
    @ApiResponse({status: 500, description: 'Error interno del servidor'})
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id : number): Promise<Monumento> {
        return await this.monumentoService.findOne(id);
    }

    @Post('/')
    @ApiResponse({
        status: 201,
        description: 'Monumento creado con éxito',
    })
    @ApiResponse({status: 400, description: 'No se ha podido crear el monumento'})
    @ApiResponse({status: 500, description: 'Error interno del servidor'})
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: Monumento) : Promise<Monumento> {
        return await this.monumentoService.new(entity);
    }

    @Put('/:id')
    @ApiResponse({
        status: 201,
        description: 'Monumento actualizado con éxito',
    })
    @ApiResponse({status: 400, description: 'No se ha podido actualizar el monumento'})
    @ApiResponse({status: 404, description: 'No se ha encontrado un monumento con el identificador especificado'})
    @ApiResponse({status: 500, description: 'Error interno del servidor'})
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id : number, @Body() entity : Monumento){
        await this.monumentoService.update(id, entity);
        return this.monumentoService.findOne(id);
    }

    @Delete('/:id')
    @ApiResponse({status: 203, description: 'Monumento eliminado con éxito'})
    @ApiResponse({status: 404, description: 'No se ha encontrado un monumento con el identificador especificado'})
    @ApiResponse({status: 500, description: 'Error interno del servidor'})
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: number) {
        return await this.monumentoService.delete(id);
    }

}