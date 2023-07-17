# Where to store the JWT?

## In memory

State - (context api, redux, etc)

State is volatile - it can disappear

## LocalStorage

Not safe - can be accessed by JS, which means if a hacker manages to inject their code on your frontend, they can access the token

## http cookies

Can not be read by the frontend web application. Can only be read by the backend, when the browser sends the cookie with the request.

The backend can instruct the browser to;

- Create a http only cookie
- Delete the http only cookie

But ultimately, the browser has control of the cookie, for example, it can delete the cookie


## Credentials

- Setup axios to use the `withCredentials` property
- Configure CORS to use `credentials: true` property and `origin: true`

## Read from the cookie

Express does not know how to read a cookie, we must use this library

`npm i cookie-parser`

`app.use(cookieParser()); // read cookies`