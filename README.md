# Shop di magliette online by Hashtag Tee

#### Applicazione Web sviluppata con Spring Boot e Angular
Questa è una Single Page Application con rendering lato client. Comprende due progetti separati, uno per il backend e uno per il frontend, ciascuno su un branch diverso.  
Il client frontend effettua chiamate API al server backend quando è in esecuzione.

## Screenshot

![Screenshot]("C:\Users\acer\Desktop\SpringBoot-Angular7-Online-Shopping-Store-master\frontend\src\assets\ScreenCart.png")

## Funzionalità
- API REST
- Docker
- Docker Compose
- Autenticazione tramite JWT
- Carrello per i visitatori basato su cookie
- Carrello persistente per gli utenti registrati
- Gestione del carrello e degli ordini
- Checkout
- Catalogo
- Gestione ordini
- Paginazione

## Stack tecnologico
**Backend**
- Java 11
- Spring Boot 2.2
- Spring Security
- Autenticazione JWT
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven

**Frontend**
- Angular 7
- Angular CLI
- Bootstrap

## Schema del database
![Schema DB](https://raw.githubusercontent.com/zhulinn/blog/hexo/source/uploads/post_pics/spring-angular/db.png)

## Come eseguire il progetto

Avviare il server backend prima del client frontend.

### Backend

1. Installare [PostgreSQL](https://www.postgresql.org/download/)
2. Configurare il datasource nel file `application.yml`
3. Spostarsi nella cartella `backend`
4. Eseguire `mvn install`
5. Eseguire `mvn spring-boot:run`
6. Spring Boot importerà automaticamente dati di esempio nel database eseguendo il file `import.sql`
7. Il server backend sarà attivo su [localhost:8080]()

### Frontend

1. Installare [Node.js e npm](https://www.npmjs.com/get-npm)
2. Spostarsi nella cartella `frontend`
3. Eseguire `npm install`
4. Eseguire `ng serve`
5. Il client frontend sarà attivo su [localhost:4200]()

> Nota: l'URL dell'API backend è configurato nel file `src/environments/environment.ts` del progetto frontend. Di default è `localhost:8080/api`.

## Esecuzione con Docker

È possibile creare le immagini ed eseguire i container usando Docker.

### 1. Costruire il progetto backend
```bash
cd backend
mvn package
