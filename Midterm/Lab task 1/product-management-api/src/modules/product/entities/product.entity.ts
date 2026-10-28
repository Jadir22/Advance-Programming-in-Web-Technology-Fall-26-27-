import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  category!: string;

  @Column({ type: "double precision" })
  price!: number;

  @Column({ type: "integer" })
  quantity!: number;
}