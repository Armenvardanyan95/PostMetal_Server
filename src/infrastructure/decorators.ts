import { createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator((data, req: Request) => console.log(req));
