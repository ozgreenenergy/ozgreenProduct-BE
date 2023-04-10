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
  ApiOperation({ summary: 'signup' });

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
            example: 'testData@gmail.com',
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

// End products API

/*............................................................................................. */

// Start products API
export const getproductsOperation = () =>
  ApiOperation({ summary: 'Get all products' });

export const getProductsResponse = () =>
  ApiResponse({ status: 200, description: 'Return all products' });

export const productTags = () => ApiTags('Product');

// End products API

// Start roles API
export const getrolesOperation = () =>
  ApiOperation({ summary: 'Data of Role' });

export const getRoleBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'test',
          },
          lable: {
            type: 'string',
            example: 'test',
          },
        },
      },
  });

export const getRoleParam = () =>
  ApiParam({
    name: 'id',
    description: 'The ID of the role',
    example: 'objectId(123)',
    required: true,
  });

export const deleteRoleParam = () =>
  ApiParam({
    name: 'id',
    description: 'The ID of the role',
    example: 'objectId(123)',
    required: true,
  });

export const getrolesResponse = () =>
  ApiResponse({ status: 200, description: 'Details of Role' });

export const rolesTags = () => ApiTags('Role');

// End roles API


/*............................................................................................. */
//Common API
export { ApiBearerAuth };
