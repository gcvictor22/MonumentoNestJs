import { Controller } from "@nestjs/common";
import { BaseController } from "src/common/common.controller";
import { BaseService } from "src/common/common.service";
import { Monumento } from "./entities/monumento.entity";
import { MonumentoService } from "./monumento.service";

@Controller('/monumento')
export class MonumentoController extends BaseController<Monumento> {

    constructor(private readonly personaService: MonumentoService) {
        super();
    }

    getService(): BaseService<Monumento> {
        return this.personaService;
    }

}