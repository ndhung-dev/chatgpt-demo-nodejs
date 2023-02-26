import {
  ChatGPTAPI
} from 'chatgpt'
import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  const api = new ChatGPTAPI({
    apiKey: process.env.API_KEY
  })
  const result = await api.sendMessage(req.query.msg)
  res.send(result.text);
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
})