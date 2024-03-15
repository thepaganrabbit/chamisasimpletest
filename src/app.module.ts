import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Configuration from './config';
import { Data } from './entities/Data.entity';
import { WebdataModule } from './webdata/webdata.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [Configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Data],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../build'),
    }),
    WebdataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
