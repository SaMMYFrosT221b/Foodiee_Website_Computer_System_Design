import Express from 'express';
import { showUser,showDeliveryBoy,showShopkeeper } from './databases.js';

const app = Express();
const PORT  = 3000;


app.get('/users',  async(req, res) => {
  const notes = await showUser();
  res.send(notes);
});

app.get('/shopkeepers',  async(req, res) => {
  const notes = await showShopkeeper();
  res.send(notes);
});

app.get('/diliveryboys',  async(req, res) => {
  const notes = await showDeliveryBoy();
  res.send(notes);
});


app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);
});

