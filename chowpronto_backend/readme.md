# Welcome to the Backend!

## Dependencies

- express
- mongoose
- config >Used for global variables

## Dev Dependencies

- nodemon >Constantly watches our server so that we do not have to run it every time we make a change to the code

## API endpoints

`Create a new patron` [POST api/signup](###POST-api/signup) <br/>
`Login` [POST api/login](###POST-api/login) <br/>
`All orders for a patron` [GET api/orders/patron/:patronId](###GET-api/orders/patron/:patronId) <br/>

### POST api/signup

To create a new patron this endpoint requires following data to be passed in request body:

```
{
	"email" : "new_patron@gmail.com",
	"name": "New patron",
	"password" : "12345678", //optional for "GUEST"
	"phone": "+12-3457-8910",
	"address":"123 Flat, 12 Hope Street, Faith City, Wanderland",
	"postcode" : "W 765 HS"
    "role": "REGISTER" or "role": "GUEST"
}
```

As a response client will receive

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNmOGIyOTAwODM5MTNjMDAzMzFiYTkiLCJpYXQiOjE1OTA2NTk4ODF9.ljKOQ22y-eH2Rk51-QiyC2arHJYHEnxYbU9JpUtDv3s",
    "patron": {
        "_id": "5ecf8b290083913c00331ba9",
        "name": "New Patron",
        "email": "new_patron@gmail.com",
        "phone": "+12-3457-8910",
        "address": "123 Flat, 12 Hope Street, Faith City, Wanderland",
        "postcode": "W 765 HS"
        "role": "REGISTER" or "role": "GUEST"
    }
}
```

### POST api/login

Only patron with role "REGISTER" can log in.
To log in into existing account client has to provide next data:

```
{
	"email" : "new_patron@gmail.com",
	"password" : "12345678"
}
```

Response sent from backend :

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNmOGIyOTAwODM5MTNjMDAzMzFiYTkiLCJpYXQiOjE1OTA2NjAwNjUsImV4cCI6MTU5MTUyNDA2NX0.AhIx6zi2Hj9Abkm4bNnrJIljntrOj4v16qmR1l-FenM",
    "patron": {
        "_id": "5ecf8b290083913c00331ba9",
        "name": "New Patron",
        "emil": "new_patron@gmail.com",
        "phone": "+12-3457-8910",
        "address": "123 Flat, 12 Hope Street, Faith City, Wanderland",
        "postcode": "W 765 HS"
        "role": "REGISTER"
    }
}
```

### GET api/orders/patron/:patronId

There is a patron in db with credentials:

```
{
  "email" : "test@gmail.com",
  "name": "Test Patron",
  "password" : "12345678",
  "phone": "+12-3457-8910",
  "address": "123 Flat, 12 Hope Street, Faith City, Wanderland",
  "postcode" : "W 765 HS",
  "role": "REGISTER"
}
```

patron's id is

```
"_id": "5ed76f4bd8b7fb359eeaead3"
```

url = http://localhost:5000/api/orders/patron/5ed76f4bd8b7fb359eeaead3
will return

```
[
   {
       "orderId": "5ed77116391a4a3c4d9c4480",
       "total": 19260,
       "date": "2020-06-03T09:44:54.564Z"
   },
   {
       "orderId": "5ed77125391a4a3c4d9c4482",
       "total": 24660,
       "date": "2020-06-03T09:45:09.136Z"
   },
   {
       "orderId": "5ed7712e391a4a3c4d9c4485",
       "total": 35260,
       "date": "2020-06-03T09:45:18.382Z"
   }
]
```

If there is a registered user but they don't have any previous orders, empty array will be sent. (
for example: Method GET /api/orders/patron/5ed7a6dbc5acbd75ae8e0b0f)

In case of error `{ errorMsg: "Server error" }` or `{ errorMsg: "Can't find orders for given vendor id" }` will be send with status code 500.

## Errors

- Sometimes after the server has been restarted some times, it crashes with the error _Multiple text records not allowed_. I haven't figured out why it happens. Usually closing erasing the terminal and starting a new one and running `npm run server` or `npm start` from there works.

## Useful git commands - not project-specific

### Delete branch locally

> `git branch -d localBranchName`

### Delete branch remotely

> `git push origin --delete remoteBranchName`

```

```
