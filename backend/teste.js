import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import axios from 'axios';


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

let containerImagem = '';
const idUser = '17841478534700576';
const token = process.env.TOKEN_USUARIO;

app.post('/container', (req, res) => {

    axios.post(
        `https://graph.instagram.com/v24.0/${idUser}/media`,
        {
            image_url : "https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg",
            caption : "Teste usando VSCODE concluído!"
        }, 
        {
            params : {
            access_token : token
        }
    }
    ).then(function (response){

        containerImagem = response.data.id;

        console.log(containerImagem);

    });

});


app.post('/publish_container', (req, res) => {

    axios.post(`https://graph.instagram.com/v24.0/${idUser}/media_publish`, 
        {
            creation_id : containerImagem
        }, 
        {
            params: {
                access_token : token
            }
        }
    ).then(function (response){
        console.log('Publicação feita! Verifique a página do Instagram.')
    })


})

app.listen(5000);