# Airport Transport Service

School software engineering project on a web application for an airport transport service company.

## Stack

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js (Express.js)
- **Database**: MySQL

## Installations

> **Note**: All the following commands are to be run from the root directory of the project.

### Required

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

> **Note**: The backend server listens on port `5000` by default. Make sure the port is available. If not, change the port in the `backend/server.js` file.

### Database

```bash
cd database
mysql -u root -p
source schema.sql
```

## Run the project

### Run the frontend server

```bash
cd frontend
npm start
```

### Run the backend server

```bash
cd backend
npm start
```

> **Note**: If you are developing, you can use `nodemon` to automatically restart the server when changes are made. To do this, run `npm run dev` instead of `npm start`.

The backend server should now be running on `http://localhost:5000`. You can test it by visiting the [URL](http://localhost:5000) in your browser. (if you have changed the port, replace `5000` with the new port number).

### Run the database server

Depending on your MySQL installation, the database server may already be running. If not, start the MySQL server (depending on your OS, the process may be different).

#### Unix commands

* Check the status of the MySQL server
```bash
sudo systemctl status mysql
```

* Start the MySQL server
```bash
sudo systemctl start mysql
```

* Stop the MySQL server
```bash
sudo systemctl stop mysql
```

#### Windows commands

* Check the status of the MySQL server
```bash
net start | find "MySQL"
```

* Start the MySQL server
```bash
net start MySQL
```

* Stop the MySQL server
```bash
net stop MySQL
```
