# Area Personale


## Descrizione

App [VUE.js](https://vuejs.org/) che fornisce al cittadino residente a Trento
accesso alle informazioni su servizi e documenti frutto della sua interazione
digitale con l'Ente.


## Informazioni tecniche

Il frontend interagisce con molteplici servizi interni dell'Ente mediante un 
proxy che analizza le richieste e verifica se queste sono lecite per l'utente
corrente.

## Requisiti

L'app è costituita da file statici HTML+Css+Js, per funzionare deve essere
erogata da un proxy che si fa carico dell'autenticazione (apache+shibboleth)

## Deploy

L'app è pacchettizata con Docker e le immagini create sono disponibili nel 
[registry pubblico](https://gitlab.com/opencontent/area-personale/container_registry).
