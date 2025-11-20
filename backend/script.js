import dotenv from 'dotenv';
import express from "express";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

const TOKEN = process.env.MEU_TOKEN_SECRETO;

app.get('/webhook', (res,req) => {

    console.log(req);

    const token_correto = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    console.log(token_correto);
    console.log(challenge);

    if (token_correto === TOKEN){

      return res.send(challenge);

   } else {

    return res.sendStatus(403);
   }

})

app.listen(3000);
