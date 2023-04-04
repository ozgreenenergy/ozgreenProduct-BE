import { ApiBody, ApiOperation, ApiResponse, ApiTags,ApiBearerAuth, ApiParam } from '@nestjs/swagger';

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

export const getUserOperation = () =>
  ApiOperation({ summary: 'Sign Up' });

export const getUserBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          fullName: {
            type: 'string',
            example: 'testData',
          },
          username: {
            type: 'string',
            example: 'Rahudemo@gmail.com',
          },
          password: {
            type: 'string',
            example: 'demo123',
          },
          status: {
            type: 'string',
            example: '1',
          },
        },
      },
    });

export const loginTags = () => ApiTags('Authentication');

// End Login API

/*............................................................................................. */

// Start User Details API

export const getUserParam = () =>
  ApiParam({
    name: 'id',
    description: 'The ID of the user',
    example: 'objectId(123)',
    required: true,
  });

export const deleteUserParam = () =>
  ApiParam({
    name: 'id',
    description: 'The ID of the user',
    example: 'objectId(123)',
    required: true,
  });

export const userTags = () => ApiTags('User');

// End User API

/*............................................................................................. */

// Start products API
export const getProductBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'TracNet Device',
          },
          imei_no: {
            type: 'string',
            example: '865385060036212',
          },
          productModelId: {
            type: 'string',
            example: 'productModel.Id',
          },
        },
      },
    });
export const getproductsOperation = () =>
  ApiOperation({ summary: 'Get all products' });

export const getProductParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the device',
    example: 'objectId(123)',
    required: true,
});

export const deleteProductParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the product',
    example: 'objectId(123)',
    required: true,
  });

export const getProductsResponse = () =>
  ApiResponse({ status: 200, description: 'Return all products' });

export const productTags = () => ApiTags('Device');
// End products API

/*............................................................................................. */

// Starts unit API
export const getUnitBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Upload Counter',
          },
          description: {
            type: 'string',
            example: 'test',
          },
        },
      },
    });
export const getUnitOperation = () =>
  ApiOperation({ summary: 'Get all units' });

export const getUnitParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the unit',
    example: 'objectId(123)',
    required: true,
});

export const deleteUnitParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the unit',
    example: 'objectId(123)',
    required: true,
  });

export const getUnitResponse = () =>
  ApiResponse({ status: 200, description: 'Return all units' });

export const unitTags = () => ApiTags('Unit');
// Ends unit API

/*............................................................................................. */
//Common API
export { ApiBearerAuth };
