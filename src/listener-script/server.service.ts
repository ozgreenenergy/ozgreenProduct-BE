// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Logger } from '@nestjs/common';
// import { Server } from 'net';
// import { Configuration } from '../config/configuration';

// @Injectable()
// export class ServerService {

// async function bootstrap() {

// const logger = new Logger('tcp_server');
//   const configService = new Configuration();

//   const server = new Server();

//   server.on('error', (error) => {
//     logger.error(error);
//     server.close();
//   });

//   const sockets = [];

//   server.on('connection', (sock) => {
//     logger.log(`Connected at ${sock.remoteAddress}:${sock.remotePort}`);

//     sockets.push(sock);

//     sock.on('data', (data) => {
//       logger.log(`${data.toString()} | Received ${sock.bytesRead} bytes from ${sock.remoteAddress}:${sock.remotePort}`);

//       const timestp = new Date();
//       const response = {
//         description: 'TCP PORT TEST BY RMS Math',
//         serverPort: configService.getPort(),
//         timestamp: timestp.toJSON(),
//         received: {
//           message: data.toString(),
//           fromIP: sock.remoteAddress,
//           fromPort: sock.remotePort,
//         },
//       };

//       const dataBuffer = Buffer.from(JSON.stringify(response));

//       sockets.forEach((sock, index, array) => {
//         sock.write(dataBuffer);
//       });
//     });

//     sock.on('close', (data) => {
//       const index = sockets.findIndex((o) => {
//         return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
//       });

//       if (index !== -1) {
//         sockets.splice(index, 1);
//       }

//       logger.log(`Socket closed with ${sock.remoteAddress}:${sock.remotePort}`);
//     });
//   });

//   await server.listen(configService.getPort(), configService.getServerHost(), () => {
//     const address = server.address();
//     const port = address.port;
//     const family = address.family;
//     const ipaddr = address.address;

//     logger.log(`Server is listening at port ${port}`);
//     logger.log(`Server ip : ${ipaddr}`);
//     logger.log(`Server is IP4/IP6 : ${family}`);
//   });
// }

// bootstrap();

// }