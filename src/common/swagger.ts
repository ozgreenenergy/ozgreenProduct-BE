import { ApiBody, ApiOperation, ApiResponse, ApiTags,ApiBearerAuth } from '@nestjs/swagger';

// Start Login API
export const getLoginOperation = () =>
  ApiOperation({ summary: 'Login' });

export const getLoginBody = () =>
ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'testData@gmail.com',
        },
        password: {
          type: 'string',
          example: 'demo123',
        },
      },
    },
  });

export const loginTags = () => ApiTags('login');

// End Login API

/*............................................................................................. */

// Start User Details API

export const getUserOperation = () =>
  ApiOperation({ summary: 'Login' });

export const getUserBody = () =>
ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'testData@gmail.com',
        },
        password: {
          type: 'string',
          example: 'demo123',
        },
      },
    },
  });

export const userTags = () => ApiTags('User');

// End products API

/*............................................................................................. */

// Start products API
export const getproductsOperation = () =>
  ApiOperation({ summary: 'Get all products' });

export const getProductsResponse = () =>
  ApiResponse({ status: 200, description: 'Return all products' });

export const productTags = () => ApiTags('product');


export { ApiBearerAuth };
// End products API
