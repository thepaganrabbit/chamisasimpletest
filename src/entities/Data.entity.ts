import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SimpleColumnType } from "typeorm/driver/types/ColumnTypes";

@Entity()
export class Data {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  slug: SimpleColumnType;

  @Column()
  schedule: SimpleColumnType;

  @Column()
  classSE: SimpleColumnType;

  @Column()
  employees: SimpleColumnType;

  @Column()
  locationAddresses: SimpleColumnType;

  @Column()
  detailsPage: string;

  @Column()
  schedulePage: string;

  @Column()
  faqs: SimpleColumnType;

  @Column()
  missionStatement: SimpleColumnType;
}