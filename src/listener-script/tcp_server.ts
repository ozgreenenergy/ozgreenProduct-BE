// import { Logger, Module } from '@nestjs/common';
// import { Server  } from '@nestjs/microservices';
// import { ConfigService } from './config/config.service';
// import { AppModule } from './app.module';

// const logger = new Logger('tcp_server');

// @Module({
//   imports: [AppModule],
// })
// export class TcpModule {
//   constructor(private readonly configService: ConfigService , private readonly tcp_server: Server) {}

//   async onModuleInit() {
//     const tcpServer = new tcp_server();

//     tcpServer.on('connection', (socket) => {
//       logger.log(`Connected at ${socket.remoteAddress}:${socket.remotePort}`);

//       socket.on('data', (data) => {
//         logger.log(
//           data.toString() +
//             ` | Received ${socket.bytesRead} bytes from ${socket.remoteAddress}:${socket.remotePort}`,
//         );

//         const timestp = new Date();
//         const response = {
//           description: 'TCP PORT TEST BY RMS Math',
//           serverPort: this.configService.port,
//           timestamp: timestp.toJSON(),
//           received: {
//             message: data.toString(),
//             fromIP: socket.remoteAddress,
//             fromPort: socket.remotePort,
//           },
//         };
//         const dataBuffer = Buffer.from(JSON.stringify(response));

//         // Write the data back to all the connected, the client will receive it as data from the server
//         tcpServer.emit('data', dataBuffer);
//       });

//       socket.on('close', () => {
//         logger.log(`Socket closed with ${socket.remoteAddress}:${socket.remotePort}`);
//       });
//     });

//     await tcpServer.listen({
//       host: this.configService.serverHost,
//       port: this.configService.port,
//     });

//     const address = tcpServer.server.address();
//     const port = address.port;
//     const family = address.family;
//     const ipaddr = address.address;

//     logger.log(`Server is listening at port ${port}`);
//     logger.log(`Server ip : ${ipaddr}`);
//     logger.log(`Server is IP4/IP6 : ${family}`);
//   }
// }