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

> **Note**: The frontend server listens on port `3000` by default. Make sure the port is available. If not, change the port in the `frontend/package.json` file.

### Backend

```bash
cd backend
npm install
```

> **Note**: The backend server listens on port `5000` by default. Make sure the port is available. If not, change the port in the `backend/server.js` file.

### Database

#### Create a new user

> **Note**: Replace `username` with the username you want to create and `password` with the password you want to use.

```bash
mysql -u root -p
CREATE USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
exit
```

#### Create the database and tables

> **Note**: Replace `username` with the username you created and `password` with the password you created.

```bash
cd database
mysql -u username -p
create database airport_transport_service;
use airport_transport_service;
source schema.sql;
```

##### Populate the database with sample data (optional)

If you want to populate the database with some sample data:

```bash
source sample_data.sql;
```

#### Set up environment variables

Create a .env file in the `backend` directory and add the following code:

> **Note**: Replace `username` with the username you created and `password` with the password you created.

```bash
DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASSWORD=password
DB_DATABASE=airport_transport_service
```

## Running the project

### Run the frontend server

```bash
cd frontend
npm start
```

The backend server should now be running on `http://localhost:3000`. You can test it by visiting this [URL](http://localhost:3000) in your browser (if you have changed the port, replace `3000` with the new port number).

### Run the backend server

```bash
cd backend
npm start
```

> **Note**: If you are developing, you can use `nodemon` to automatically restart the server when changes are made. To do this, run `npm run dev` instead of `npm start`.

The backend server should now be running on `http://localhost:5000`. You can test it by visiting this [URL](http://localhost:5000) in your browser (if you have changed the port, replace `5000` with the new port number).

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