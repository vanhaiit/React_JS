// with ES6 import
import io from 'socket.io-client';
import * as Config from './../constants/Config';
export default function socketIoCaller() {
    const socket = io(Config.SOCKET_URL);
    return socket;
}