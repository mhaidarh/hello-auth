# Hello Auth

## API

| Endpoint       | Method | Description
|----------------|--------|------------
| `/`            | GET    | Hello Root
| `/api`         | GET    | Hello API
| `/api/users`   | GET    | Respond with list of users
| `/api/secrets` | GET    | Respond with list of secrets

## Auth

| Endpoint       | Method | Description
|----------------|--------|------------
| `/auth/login`  | POST   | Get credentials from body, then respond with token if credential is match
| `/auth/check`  | GET    | Check token from header, then respond if the token is valid

--------------------------------------------------------------------------------

## Requirements

Let's add an auth layer to our apps!

### Input

- New or existing backend project
- Frontend project are not mandatory yet

### Process

- Architect your project to gain an auth layer
- Implement the routes and auth into it

### Output

- Secured app

--------------------------------------------------------------------------------

## Level 0

- Plan and design your app to be secured with an auth layer: password, token, session, etc
- Remember to separate public and authenticated routes

--------------------------------------------------------------------------------

## Level 1

- Secure your routes with an auth check/middleware
- Use a specific library if you need

--------------------------------------------------------------------------------

## Level 2

- Implement your frontend with the enhanced backend

--------------------------------------------------------------------------------

## Level 3

- Use OAuth with social media platforms to take it further
