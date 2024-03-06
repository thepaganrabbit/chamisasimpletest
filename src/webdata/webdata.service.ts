import { CustomFrontResponse, LangFetch, LanguageEnum, SimplePage } from './../types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Data } from 'src/entities/Data.entity';
import { Slug } from 'src/types';
import { Repository } from 'typeorm';

@Injectable()
export class WebdataService {

    constructor(
        @InjectRepository(Data)
        private readonly dataRepository: Repository<Data>
        ) {
            this.init();
        }
    async init() {
       try {
        const initData = await this.dataRepository.find();
        if (initData.length <= 0) {
            const rawDataSF = {
                language: LanguageEnum.ENG,
                location: 'Santa Fe',
                slug: null,
                schedule: null,
                classSE: null,
                employees: [],
                locationAddress: null,
                detailsPage:null,
                schedulePage: null,
                faqs: [],
                missionStatement: {},
            };
            const prepared = this.dataRepository.create(rawDataSF);
            await this.dataRepository.insert(prepared);
            const rawDataESP = {
                language: LanguageEnum.ENG,
                location: 'Espanola',
                slug: null,
                schedule: null,
                classSE: null,
                employees: [],
                locationAddress: null,
                detailsPage:null,
                schedulePage: null,
                faqs: [],
                missionStatement: {},
            };
            const preparedEsp = this.dataRepository.create(rawDataESP);
            await this.dataRepository.insert(preparedEsp);
        }
       } catch (error) {
        throw Error(error);
       }
    }
    async getWebData(): Promise<Data> {
        try {
            const rawData = await this.dataRepository.find();
            return rawData[0];
        } catch (error) {
            throw error;
        }
    }
    async getWebDataByLanguage({language, location}: LangFetch): Promise<Data> {
        try {
            const rawData = await this.dataRepository.findOneBy({language, location});
            if(!rawData) {
                const rawDataObj = {
                    language: language,
                    location: location,
                    slug: null,
                    schedule: null,
                    classSE: null,
                    employees: [],
                    locationAddress: null,
                    detailsPage:null,
                    schedulePage: null,
                    faqs: [],
                    missionStatement: {},
                };
                const prepared = this.dataRepository.create(rawDataObj);
                await this.dataRepository.insert(prepared);
            }
            const finalData = await this.dataRepository.findOneBy({language, location});
            return finalData;
        } catch (error) {
            throw error;
        }
    }
    async getWebDataByLocation({language, location}: LangFetch): Promise<Data> {
        try {
            const rawData = await this.dataRepository.findOneBy({language, location});
            if(!rawData) {
                const rawDataObj = {
                    language: language,
                    location: location,
                    slug: null,
                    schedule: null,
                    classSE: null,
                    employees: [],
                    locationAddress: null,
                    detailsPage:null,
                    schedulePage: null,
                    faqs: [],
                    missionStatement: {},
                };
                const prepared = this.dataRepository.create(rawDataObj);
                await this.dataRepository.insert(prepared);
            }
            const finalData = await this.dataRepository.findOneBy({language, location});
            return finalData;
        } catch (error) {
            throw error;
        }
    }
    async addSlug(payload: CustomFrontResponse<Slug>) {
        try {
            const settingsObject = await this.dataRepository.find({where: {language: payload.version, location: payload.location}});
            if(settingsObject.length > 0) {
                const original = settingsObject[0].id;
                const toUpd = {...settingsObject[0], slug: payload.payload, location: payload.location}
                await this.dataRepository.update({id: original}, toUpd);
                return await this.dataRepository.find({where: {id: original}});;
            } else {
                const rawData = {
                    language: payload.version,
                    location: payload.location,
                    slug: payload.payload,
                    schedule: null,
                    classSE: null,
                    employees: [],
                    locationAddress: null,
                    detailsPage:null,
                    schedulePage: null,
                    faqs: [],
                    missionStatement: {},
                };
                const prepared = this.dataRepository.create(rawData);
                await this.dataRepository.insert(prepared);
                return rawData;
            };
        } catch (error) {
            throw error;
        }
    }
}
