import { Module } from '@nestjs/common';
import { AppController } from './Lab1Radzivon_controller';
import { AppService } from './Lab1Radzivon_service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
