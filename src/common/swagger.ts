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
          example: 'mailto:testdata@gmail.com',
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
            example: 'mailto:rahudemo@gmail.com',
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

/............................................................................................. /

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

/............................................................................................. /

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

/............................................................................................. /

// Starts unit API
export const getUnitBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Temperature',
          },
          unit_symbol: {
            type: 'string',
            example: '%',
          },
          description: {
            type: 'string',
            example: 'Ths is Temperature Unit',
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

/............................................................................................. /

// Starts product model API
export const getProductModelBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'TracNet Manholes',
          },
          modelId: {
            type: 'string',
            example: 'TWE1827182',
          },
          description: {
            type: 'string',
            example: 'Sensors 1) Upload Counter, 2) Manhole Battery Status, 3) Angle, 4) Battery Voltage, 5) Manhole Level Alarm, 6) Manhole Moved Alarm, 7) Signal Strength, 8) Distance, 9) Temperature 10) TracNet Manhole Full Sensor (virtual)',
          },
        },
      },
    });
export const getproductModelOperation = () =>
  ApiOperation({ summary: 'Get all products' });

export const getProductModelParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the Product Model',
    example: 'objectId(123)',
    required: true,
});

export const deleteProductModelParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the Product Model',
    example: 'objectId(123)',
    required: true,
  });

export const getProductModelResponse = () =>
  ApiResponse({ status: 200, description: 'Return all Product Model' });

export const productModelTags = () => ApiTags('Product Model');
// Ends product model API

/............................................................................................. /

// Starts sensor API
export const getSensorBody = () =>
  ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'TracNet Manhole Full Sensor',
          },
          kind: {
            type: 'string',
            example: 'Bool',
          },
          unitId: {
            type: 'string',
            example: 'objectId(Unit)',
          },
          decimalPlaces: {
            type: 'number',
            example: '2',
          },
        },
      },
    });
    
export const getSensorOperation = () =>
  ApiOperation({ summary: 'Get all Sensor' });

export const getSensorParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the Sensor',
    example: 'objectId(123)',
    required: true,
});

export const deleteSensorParam = () =>
  ApiParam({
    name: 'id',
    description: 'The Id of the Sensor',
    example: 'objectId(123)',
    required: true,
  });

export const getSensorResponse = () =>
  ApiResponse({ status: 200, description: 'Return all Sensor' });

export const sensorTags = () => ApiTags('Sensor');
// Ends Sensor API

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

//Common API
export { ApiBearerAuth };