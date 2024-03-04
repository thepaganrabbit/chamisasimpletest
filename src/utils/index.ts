import { HttpException } from '@nestjs/common';

export type CustomResponse<T> = {
  payload: T | undefined;
  code: number;
  success?: boolean;
  message?: string | undefined;
  error?: HttpException | Error | undefined | string | any;
};

export class Responder<T> {
  constructor(private props: CustomResponse<T>) {}

  success() {
    return {...this.props, success: true};
  }

  failure() {
    return {...this.props, success: false}
  }
}
