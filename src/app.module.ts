import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaniModule } from 'bani/bani.module';

@Module({
  imports: [
    BaniModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
