import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('banis')
export class BaniEntity {
  @PrimaryColumn()
  id: number;

  @Column('text')
  name_gurmukhi: string;

  @Column('text')
  name_english: string;
}
