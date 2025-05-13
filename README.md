# Shop di magliette online by Hashtag Tee

#### Applicazione Web sviluppata con Spring Boot e Angular
Questa è una Single Page Application con rendering lato client. Comprende due progetti separati, uno per il backend e uno per il frontend, ciascuno su un branch diverso.  
Il client frontend effettua chiamate API al server backend quando è in esecuzione.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/Mikidefu/HastagTeeProject/refs/heads/main/frontend/src/assets/ScreenCart.png?token=GHSAT0AAAAAADDK2MNBLU3XDQPYM44LRIJG2A54KOQ)

## Funzionalità
- Autenticazione tramite JWT
- API REST
- Gestione del carrello e degli ordini
- Catalogo
- Gestione ordini
- Carrello per i visitatori basato su cookie
- Carrello persistente per gli utenti registrati
- Paginazione
- Checkout

## Stack tecnologico
**Backend**
- Java 11
- Spring Boot
- PostgreSQL
- Spring Data JPA
- Hibernate
- Spring Security
- Maven
- Autenticazione JWT

**Frontend**
- Angular 
- Angular CLI
- Bootstrap

## Come eseguire il progetto

Avviare il server backend prima del client frontend.

### Backend

1. Installare [PostgreSQL](https://www.postgresql.org/download/)
2. Configurare il datasource nel file `application.yml`
3. Spostarsi nella cartella `backend`
4. Lanciare `mvn install`
5. Lanciare `mvn spring-boot:run`
6. Spring Boot importerà automaticamente dati di esempio nel database eseguendo il file `import.sql`
7. Il server backend sarà attivo su [localhost:8080]()

### Frontend

1. Installare [Node.js e npm](https://www.npmjs.com/get-npm)
2. Spostarsi nella cartella `frontend`
3. Lanciare `npm install`
4. Lanciare `ng serve`
5. Il client frontend sarà attivo su [localhost:4200]()

> Nota: l'URL dell'API backend è configurato nel file `src/environments/environment.ts` del progetto frontend. Di default è `localhost:8080/api`.
