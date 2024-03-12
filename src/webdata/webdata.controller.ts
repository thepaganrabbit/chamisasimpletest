import { Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { WebdataService } from './webdata.service';
import testSlugs, { CustomResponse, Responder, SAMPLE_SLUGS } from 'src/utils';
import { CustomFrontResponse, LangFetch, LanguageEnum, Slug, WebDataObject } from 'src/types';
import { Data } from 'src/entities/Data.entity';

@Controller('webdata')
export class WebdataController {
    constructor(private readonly webDataService: WebdataService){}
    @Get()
    async dataObject(): Promise<CustomResponse<Data | null>> {
        try {
            const data = await this.webDataService.getWebData();
        return new Responder({
            payload: data,
            code: 200,
            message: 'Successful request for web object'
        }).success();
        } catch (error) {
        return new Responder({
            payload: null,
            code: 400,
            error,
        }).failure();
        }
    }
    @Get('/byLang')
    async dataObjectByLang(@Query() query: LangFetch): Promise<CustomResponse<Data | null>> {
        try {
            const data = await this.webDataService.getWebDataByLanguage(query);
        return new Responder({
            payload: data,
            code: 200,
            message: 'Successful request for web object'
        }).success();
        } catch (error) {
        return new Responder({
            payload: null,
            code: 400,
            error,
        }).failure();
        }
    }
    @Get('/byLocation')
    async dataObjectByLoc(@Query() query: LangFetch): Promise<CustomResponse<Data | null>> {
        try {
            const data = await this.webDataService.getWebDataByLocation(query);
        return new Responder({
            payload: data,
            code: 200,
            message: 'Successful request for web object'
        }).success();
        } catch (error) {
        return new Responder({
            payload: null,
            code: 400,
            error,
        }).failure();
        }
    }
    @Post('/slug')
    async setSlug(@Body() body: CustomFrontResponse<Slug> ): Promise<CustomResponse<any | null>> {
        try {
            const data = await this.webDataService.addSlug(body);
        return new Responder({
            payload: data,
            code: 200,
            message: 'Successful request for web object'
        }).success();
        } catch (error) {
        return new Responder({
            payload: null,
            code: 400,
            error,
        }).failure();
        }
    }
    @Get('/faqs')
    async getFaqs(@Body() body: CustomFrontResponse<Slug> ): Promise<CustomResponse<any | null>> {
        try {
            const data = SAMPLE_SLUGS;
        return new Responder({
            payload: data,
            code: 200,
            message: 'Successful request for web object'
        }).success();
        } catch (error) {
        return new Responder({
            payload: null,
            code: 400,
            error,
        }).failure();
        }
    }
}
