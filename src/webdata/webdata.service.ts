import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Data } from 'src/entities/Data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WebdataService {

    constructor(
        @InjectRepository(Data)
        private readonly dataRepository: Repository<Data>
        ) {}

    async getWebData(): Promise<Data | undefined> {
        try {
            const rawData = await this.dataRepository.find();
            return rawData.length > 0 ? rawData[0] : undefined;
        } catch (error) {
            throw error;
        }
    }
}
