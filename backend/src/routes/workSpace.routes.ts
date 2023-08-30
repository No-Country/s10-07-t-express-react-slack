import { Router } from "express"
import { workSpace } from "../services/crudWorkSpace/post"
import { allWorkSpace } from "../services/crudWorkSpace/get"


export const workSpacesRoutes = Router()

const WORKSPACES = "/workSpaces"
const WORKSPACE = "/workSpace"

workSpacesRoutes.post(`${WORKSPACE}`, workSpace)
workSpacesRoutes.get(`${WORKSPACES}`, allWorkSpace)

// import axios from "axios"
// import qs from "querystring"
// import "dotenv/config"
// const { CLIENT_ID, SECRECT_CLIENT, REDIRECT_URL } = process.env

// const clientId = CLIENT_ID;
// const clientSecret = SECRECT_CLIENT;
// const redirectUri = REDIRECT_URL;
// const scopes = 'app_mentions:read,channels:read'; // Los alcances que tu aplicación necesita

// workSpacesRoutes.get('/', (req, res) => {
//   // Genera el enlace de autorización
//   const authUrl = `https://slack.com/oauth/v2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;

//   // Renderiza un enlace en la página para que el usuario lo haga clic
//   res.send(`<a href="${authUrl}">Autorizar la aplicación en tu espacio de trabajo</a>`);
// });

// workSpacesRoutes.get('/auth/callback', async (req, res) => {
//   const code: any = req.query.code;

//   // Intercambio del código por un token de acceso
//   try {
//     const response = await axios.post('https://slack.com/api/oauth.v2.access', qs.stringify({
//       code,
//       client_id: clientId,
//       client_secret: clientSecret,
//       redirect_uri: redirectUri,
//     }));

//     const accessToken = response.data.access_token;

//     // Usa el token de acceso para interactuar con Slack (por ejemplo, enviar un mensaje)
//     const messageResponse = await axios.post('https://slack.com/api/chat.postMessage', qs.stringify({
//       token: accessToken,
//       channel: 'canal_id',
//       text: '¡Hola desde la aplicación personalizada de Slack!',
//     }));

//     res.send('Mensaje enviado con éxito');
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Hubo un error durante el proceso');
//   }
// });