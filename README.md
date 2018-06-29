# Challenge Chatroom

Chatroom en NodeJS et Redux

## Fonctionnalités

* On peut envoyer un message à tous les navigateurs connectés.

* On peut changer de pseudo.

### Serveur

La partie NodeJS est dans le dossier `server/`.  

Le script `yarn start:node` permet de lancer le serveur.  
Le script `yarn start:brunch` que vous pouvez lancer dans un autre terminal permet de lancer le watch.

Lancer votre navigateur sur `localhost:3000`.

### Websocket

Le serveur utilise Socket.io pour réceptionner et renvoyer les requêtes à tous les clients connectés.
