import path from 'path';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/profile-images', express.static(path.join(process.cwd(), 'public', 'profile-images')));

export default app;
