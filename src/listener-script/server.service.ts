// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { LoggerService } from '@nestjs/common';
// import { Server } from 'net';

// @Injectable()
// export class ServerService {

//   constructor(private readonly configService: ConfigService) {}

//   //const log = new Logger('tcp_server');
//   const sockets = [];

//   const server = new Server((sock) => {

    
//   log(`Connected at ${sock.remoteAddress}:${sock.remotePort}`);
//   sockets.push(sock);

//   sock.on('data', (data) => {
//     const message = data.toString();
//     log.log(`${message} | Received ${sock.bytesRead} bytes from ${sock.remoteAddress}:${sock.remotePort}`);
//     const timestp = new Date();
//     const response = {
//       description: 'TCP PORT TEST BY RMS Math',
//       serverPort: this.configService.get<number>('port'),
//       timestamp: timestp.toJSON(),
//       received: {
//         message,
//         fromIP: sock.remoteAddress,
//         fromPort: sock.remotePort,
//       },
//     };
//     const dataBuffer = Buffer.from(JSON.stringify(response));

//     // Write the data back to all the connected sockets
//     sockets.forEach((socket) => {
//       socket.write(dataBuffer);
//     });
//   });

//   sock.on('close', () => {
//     const index = sockets.findIndex((socket) => socket.remoteAddress === sock.remoteAddress && socket.remotePort === sock.remotePort);
//     if (index !== -1) {
//       sockets.splice(index, 1);
//     }
//     log.log(`Socket closed with ${sock.remoteAddress}:${sock.remotePort}`);
//   });
// });

// server.on('error', (error) => {
//   log.error(error);
//   server.close();
// });

// server.listen(config.port, config.serverHost, () => {
//   const address = server.address();
//   const port = address.port;
//   const family = address.family;
//   const ipaddr = address.address;

//   log.log(`Server is listening at port ${port}`);
//   log.log(`Server ip : ${ipaddr}`);
//   log.log(`Server is IP4/IP6 : ${family}`);
// });


  
// }