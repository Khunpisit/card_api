import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
  } from "typeorm";
  import { Length, IsNotEmpty } from "class-validator";
  
  @Entity()
  @Unique(["name"])
  export class Card {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @Length(4, 40)
    name: string;
  
    @Column()
    @Length(4, 20)
    status: string;

    @Column()
    @Length(4, 200)
    content: string;

    @Column()
    @Length(4, 20)
    category: string;

    @Column()
    @Length(4, 20)
    author: string;

  }