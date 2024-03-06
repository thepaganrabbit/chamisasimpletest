import { Address, ClassStartEnd, Employee, LanguageEnum, ListBlock, ScheduleEN, ScheduleSP, SimplePage, Slug } from "src/types";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SimpleColumnType } from "typeorm/driver/types/ColumnTypes";

@Entity()
export class Data {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({nullable: false})
  location: string;

  @Column({nullable: false})
  language: LanguageEnum;
  
  @Column({type: 'json', nullable: true})
  slug: Slug;

  @Column({type: 'json', nullable: true})
  schedule: ScheduleEN | ScheduleSP;

  @Column({type: 'json', nullable: true})
  classSE: ClassStartEnd;

  @Column({type: 'json'})
  employees: Employee[];

  @Column({type: 'json', nullable: true})
  locationAddresses: Address;

  @Column({type: 'json', nullable: true})
  detailsPage: SimplePage;

  @Column({type: 'json', nullable: true})
  schedulePage: SimplePage;

  @Column({type: 'json'})
  faqs: Slug[];

  @Column({type: 'json'})
  missionStatement: ListBlock;
}