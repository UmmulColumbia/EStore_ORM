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

## Usage
Once the server is running, you can use an API client like Insomnia or Postman to test the RESTful API routes.

## API Endpoints

GET /api/categories - Retrieves all categories

GET /api/categories/:id - Retrieves a single category by ID

POST /api/categories - Creates a new category

PUT /api/categories/:id - Updates a category by ID

DELETE /api/categories/:id - Deletes a category by ID

The same pattern applies for /api/products and /api/tags routes.

## Walkthrough Video

 https://drive.google.com/file/d/18q_qb4jS-0d7NBZ3enfXy6cTgB4rCvtN/view

 https://drive.google.com/file/d/1r0QULr1EP1Oi3hRlwGfRRmcxenCi7anK/view

 
 ## Credits
 
 This project was created by Ummul Mukta to demonstrate skills building the back end for an e-commerce site using Express.js and Sequelize to interact with a PostgreSQL database.
 
## License
This project is licensed under the MIT License
