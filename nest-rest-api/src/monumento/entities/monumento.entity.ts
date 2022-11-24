import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monumento {
    
    @ApiProperty({
        example: 1,
        required: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    
    
    @ApiProperty({
        example: "ESP",
        required: true
    })
    @Column()
    cod: string;
    
    @ApiProperty({
        example: "España",
        required: true
    })
    @Column()
    pais: string;
    
    @ApiProperty({
        example: "Barcelona",
        required: true
    })
    @Column()
    ciudad: string;
    
    @ApiProperty({
        example: "41.403706,2.173504",
        required: true
    })
    @Column()
    localizacion: string;
    
    @ApiProperty({
        example: "La Sagrada Familia",
        required: true
    })
    @Column()
    nombre: string;
    
    @ApiProperty({
        example: "El Templo Expiatorio de la Sagrada Familia, conocido simplemente como la Sagrada Familia, es una basílica católica de Barcelona, diseñada por el arquitecto Antoni Gaudí.",
        required: true
    })
    @Column()
    descripcion: string;
    
    @ApiProperty({
        example: "https://lh5.googleusercontent.com/p/AF1QipMC34vWFHzk98Dd6sHoI1LT4N6I-NlHtwr0rJ2U=w243-h406-n-k-no-nu",
        required: true
    })
    @Column()
    imgUrl: string;
}

// Su ID (un número entero)
// El código de país (según el código ISO 3166-1 alfa 2).
// El nombre del país.
// El nombre de la ciudad.
// Su localización (latitud, longitud).
// El nombre del monumento
// Una descripción del mismo
// La URL de una foto.
