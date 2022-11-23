import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Monumento {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cod: string;
    @Column()
    pais: string;
    @Column()
    ciudad: string;
    @Column()
    localizacion: string;
    @Column()
    nombre: string;
    @Column()
    descripcion: string;
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
