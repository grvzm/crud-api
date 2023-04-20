### CRUD api for managing user data

###### to create a user data

- send POST request at /api/users with json data containing firstname, lastname and gender.

###### to get user data of all users

- send GET request at /api/users, this gets first name, lastname, age(default:18), jobtitle(default:unemployed) and gender.

###### to update lastname of specific user

- send PATCH request at /api/users/:userid, where <b>userid</b> is provided with <b>\_id</b> as key, when data of all users is fetched.

###### to delete all user data of specific user

- send DELETE request at /api/users/:userid, where userid is provided with<b>\_id</b>as key, when data of all users is fetched.
