import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
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
    async findOne(@Res() res, @Param('id') id : number): Promise<Monumento> {
        if (this.monumentoService.findOne(id) != null) {
            res.status(HttpStatus.OK)
            return await this.monumentoService.findOne(id);
        } else {
            
        }
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
        return await this.monumentoService.delete(id);
    }

}