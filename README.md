# slack-url-shortener
<h1 align="center">People Box URL-SHORTNER-APP</h1>

## Deployed link

<br>
https://slack-url-shortner-by-prashant.onrender.com/

<br>

##  Slack Bot github link

<br>
https://github.com/prashant174/slack-bot

<br>

## Installation

```
npm install
```

## Start the Backend server 

```


npm run server
```


<br>

##  MVC Structure

```

     ├── config
     |    └── db.js
     ├── controllers
     |    └── urlController.js
     |    
     |    
     ├── models
     |    └── urlModel.js
     |   
     ├──routes
     |    └── urlRoute.js
     └── index.js
```
Things to do before starting the server:- 

-  create `.env` file and put "PORT", "MONGO_URL", .
- "PORT" is for listening the server.
- "MONGODB_URL" write your mongo url here.


<br>

## Schema 

<br>

<h3><strong>Schema for url</strong><h3>

```js

{
  "url":"your long url"
  
}
```






## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/url</td>
            <td>This endpoint should allow users to post long url</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/url/:shortId</td>
            <td>This endpoint should allow users to redirect to web page by passing shortId in params</td>
            <td>200</td>
        </tr>
       
    </tbody>
</table>


<br>

## Thank you for visiting

