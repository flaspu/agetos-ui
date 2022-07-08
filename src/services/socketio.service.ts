import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
    conversation(payload: any): void; 
}

type IMessageData = {
    text: string,
    room: number,
    date: Date,
}

interface ClientToServerEvents {
    sendMessage: (payload: IMessageData) => void;
    subscribe(room: number): void;
}

class SocketioService {
    socket: Socket<ServerToClientEvents, ClientToServerEvents> | null;
    constructor() {
        this.socket = io();
    }

    setupSocketConnection() {
        this.socket = io('localhost:3001');
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export default new SocketioService();