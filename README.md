# Fibonacci app

![](https://wakatime.com/badge/user/d694f266-3f1b-44cd-82b9-e9c093472e23/project/f7cf69a2-8dec-499d-a3ff-096d60d1a7cc.svg)
[![](https://img.shields.io/github/deployments/FreeWall/fibonacci/Production?logo=vercel&label=vercel)](https://fibonacci.michalvanek.cz/)

> create a client/server application with the following functionality:
>
> the server will provide one endpoint, which takes the number N and returns the Nth Fibonacci number, for example, F(0)=0, F(1)=1, F(8)=21
>
> the client will be a SPA, consisting of one input field and a button. When the user enters a number and pressed the button, the app calls the server endpoint and displays the returned Fibonacci number. The visual design of the app is not important.
>
> We would prefer if both the client and the server are created using TypeScript, the server using NodeJS, and the client in React. You can choose any additional libraries/dependencies. You do not have to handle all edge cases but it would be good to mention them in the comments with a suggestion on how to handle them. The output of the assignment is a runnable project (projects) with a short description of how to install and run it.

## Installation

```shell
git clone https://github.com/FreeWall/fibonacci
cd fibonacci
npm run deploy
```

Server is started on port 3000, visit http://localhost:3000/

### Vercel

Project is also deployed on Vercel hosting: [fibonacci.michalvanek.cz](https://fibonacci.michalvanek.cz/)

Vercel has 10s request execution timeout apparently, so anything above ~ 500 000 is failing. This could be solved by precomputing starting numbers by every 100 000 into a separate DB (e.g. SQLite) in build time, so that there is no need to compute hundreds of thousands of numbers everytime.
