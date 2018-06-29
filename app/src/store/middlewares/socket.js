import {
  SEND_MESSAGE,
  WEBSOCKET_CONNECT,
  messageReceived,
} from 'src/store/reducer';

let socket;

const socketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      socket = window.io();
      socket.on('send_message', (messageFromServer) => {
        store.dispatch(messageReceived(messageFromServer));
      });
      break;
    }

    case SEND_MESSAGE: {
      const state = store.getState();
      socket.emit('send_message', {
        user: state.settings.user,
        content: state.message,
      });
      break;
    }

    default:
  }

  next(action);
};

export default socketMiddleware;
