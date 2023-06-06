## CRUD api for managing user data

#### About

an API that can do CRUD operations, built using express and mongoose, can be easily deployed using mongodb atlas and render.

#### Guide

Steps to use this api on your machine(must have nodejs and mongodb-shell/atlas, installed)

1. Clone the repository and install the dependencies.
2. Run mongosh/atlas
3. Connect the DB by creating and .env file and storing "DB_CONNECTION" URI.
4. RUN using 'npm run start' command and test the api using Postman.

#### API Endpoints

###### to create a user-data

- send POST request at /api/users with json data containing first name, lastname,gender, and optional data such as age(default:18), and jobtitle(default:unemployed).

###### to get user-data of all users

- send GET request at /api/users/admin, this gets all user-data of all users.

###### to update some-data of specific user

- send PATCH request at /api/users/:userid, where <b>userid</b> is provided with <b>\_id</b> as key, when data of all users is fetched, updating user-data is optional, can update anything.

###### to update all user-data of specific user

- send PUT request at /api/users/:userid, where <b>userid</b> is provided with <b>\_id</b> as key, when data of all users is fetched, must provide required data to update.

###### to delete all user-data of specific user

- send DELETE request at /api/users/:userid, where userid is provided with<b>\_id</b> as key, when data of all users is fetched.
