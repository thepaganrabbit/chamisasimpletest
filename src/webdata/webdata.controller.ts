import { Controller, Get, Res } from '@nestjs/common';
import { WebdataService } from './webdata.service';
import { CustomResponse, Responder } from 'src/utils';
import { WebDataObject } from 'src/types';
import { Data } from 'src/entities/Data.entity';

@Controller('webdata')
export class WebdataController {
    constructor(private readonly webDataService: WebdataService){}
    @Get()
    async dataObject(): Promise<CustomResponse<Data | null>> {
        try {
            const data = await this.webDataService.getWebData();
        return new Responder({
            payload: data ? data : null,
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
