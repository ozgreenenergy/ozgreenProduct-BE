import { Module } from '@nestjs/common';
import { ListenerGateway } from 'src/listener-script/listener.gateway';

@Module({
    providers: [ListenerGateway],
})
export class ListenerScriptModule {}
