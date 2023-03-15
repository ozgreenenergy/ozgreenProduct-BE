import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly successMessage: string, private readonly errorMessage: string) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          statusCode: 200,
          message: this.successMessage,
          data: data,
        };
      }),
      catchError((error: { status: any; }) => {
        if (error instanceof HttpException) {
          throw error;
        }
        throw new HttpException(this.errorMessage, error.status || 400);
      }),
    );
  }
}
