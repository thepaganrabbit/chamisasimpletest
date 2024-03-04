import { Module } from '@nestjs/common';
import { WebdataService } from './webdata.service';
import { WebdataController } from './webdata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from 'src/entities/Data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data])],
  providers: [WebdataService],
  controllers: [WebdataController]
})
export class WebdataModule {}
