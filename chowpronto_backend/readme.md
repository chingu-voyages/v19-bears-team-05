# Welcome to the Backend!

## Dependencies

- express
- mongoose
- config >Used for global variables

## Dev Dependencies

- nodemon >Constantly watches our server so that we do not have to run it every time we make a change to the code

## routes/api helper comments

// @route GET api/users

> Describes the request type and the exact endpoint that needs to be hit

// @desc Test route

> Describes what the route does/what is served when you hit it

// @access Public

> if you need to be authenticated to access that endpoint, then the @access is Private. If not, it's Public.

## Errors

- Sometimes after the server has been restarted some times, it crashes with the error _Multiple text records not allowed_. I haven't figured out why it happens. Usually closing erasing the terminal and starting a new one and running `npm run server` or `npm start` from there works.

## Useful git commands - not project-specific

### Delete branch locally

> `git branch -d localBranchName`

### Delete branch remotely

> `git push origin --delete remoteBranchName`

```

```
