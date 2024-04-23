# EStore_ORM
## Overview
This project involves building the back end for an e-commerce site using Express.js and Sequelize to interact with a PostgreSQL database. The API supports all CRUD operations on products, categories, and tags, mimicking real-world e-commerce back-end operations.

## Technologies Used
- Node.js - JavaScript runtime environment
- Express.js - Web application framework
- Sequelize - ORM for Node.js
- PostgreSQL - Relational database system
- dotenv - Module to load environment variables
## Features
= CRUD Operations: Users can create, read, update, and delete products, categories, and tags.
- Database Association: Includes model associations such as one-to-many and many-to-many relationships.
- Environment Variables: Utilizes .env to securely store sensitive information.
## Getting Started
### Prerequisites
- Node.js
- npm (Node Package Manager)
- PostgreSQL
## Installation
- Clone the repository
- Install NPM packages: npm install
- Create a .env file in the root directory and fill it with your PostgreSQL user, password, and database information:
  
DB_USER='yourUsername'
DB_PASSWORD='yourPassword'
DB_NAME='ecommerce_db'
