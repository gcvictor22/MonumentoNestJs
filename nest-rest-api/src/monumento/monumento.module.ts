import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monumento } from './entities/monumento.entity';
import { MonumentoController } from './monumento.controller';
import { MonumentoService } from './monumento.service';

@Module({
    imports : [TypeOrmModule.forFeature([Monumento])],
    providers : [MonumentoService],
    controllers : [MonumentoController]
})
export class MonumentoModule {

}