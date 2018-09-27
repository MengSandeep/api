import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaniModule } from 'bani/bani.module';
import { BaniEntity } from 'bani/bani.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${process.cwd()}/database.sqlite`,
      entities: [BaniEntity],
      synchronize: true,
      logging: 'all',
    }),
    BaniModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
