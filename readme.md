### CRUD api for managing user data

###### to create a user

- send POST request at /api/users with json data containing firstname, lastname and email fields.

###### to get data of all users

- send GET request at /api/users

###### to update lastname of specific user

- send PATCH request at /api/users/:userid, where userid is provided at \_id, when data of all users is fetched.

###### to delete specific user data

- send DELETE request at /api/users/:userid, where userid is provided at \_id, when data of all users is fetched.
