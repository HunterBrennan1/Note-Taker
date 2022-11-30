import express from 'express';
const router = express.Router();
import path from 'path';


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

export default router;