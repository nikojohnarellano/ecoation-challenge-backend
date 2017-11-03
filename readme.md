# Ecoation Challenge Backend

Incrementing Integer Service web api

Endpoint url: http://ecoation-backend.azurewebsites.net

## Libraries used:

* Nodejs
* Expressjs
* Passport
* jsonwebtoken
* bcrypt

## Usage: 

**Sign In**
----
 An endpoint to log a user in to access the service

* **URL**

  http://ecoation-backend.azurewebsites.net/api/signin

* **Method:**
  `POST`

* **Data Params** <br/> <br/>
    `Ex: { email : 'nikojohnarellano@gmail.com', password: 'hello' }` <br/><br/>
   **Required:**
 
   `email=[string]`<br/>
   `password=[string]`
* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ success : true, token : [token] }`

**Sign up**
----
 An endpoint to register a user to access the service

* **URL**

  http://ecoation-backend.azurewebsites.net/api/signup

* **Method:**
  `POST`

* **Data Params** <br/> <br/>
   `Ex: { email : 'nikojohnarellano@gmail.com', password: 'hello' }` <br/><br/>
   **Required:**
 
   `email=[string]`<br/>
   `password=[string]`
* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ success : [boolean], msg : [string] }`


**Retrieve Current Integer**
----
 An endpoint to retrieve the current integer stored on the server

* **URL**

  http://ecoation-backend.azurewebsites.net/api/int/current

* **Headers**
    <br/><br/>
    **Required:**

    `Authorization : [token]`
* **Method:**
  `GET`

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ _id : [ObjectId], currentInteger : [int] }`

**Retrieve Next Integer**
----
 An endpoint to retrieve the next integer stored on the server.

* **URL**

  http://ecoation-backend.azurewebsites.net/api/int/next

* **Headers**
    <br/><br/>
    **Required:**

    `Authorization : [token]`
* **Method:**
  `GET`

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ _id : [ObjectId], currentInteger : [int] }`


**Update Current Integer**
----
 An endpoint to update/reset the current integer stored on the server

* **URL**

  http://ecoation-backend.azurewebsites.net/api/int/update

* **Headers**
    <br/><br/>
    **Required:**

    `Authorization : [token]`
* **Method:**
  `POST`

* **Data Params** <br/> <br/>
   `Ex: { newInt : 1000 }` <br/><br/>
   **Required:**
 
   `newInt=[int]`<br/>

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ _id : [ObjectId], currentInteger : [int] }`