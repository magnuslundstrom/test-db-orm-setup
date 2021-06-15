import express from 'express';
import cors from 'cors';
import { profileImagePath } from './constants';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/profile-images', express.static(profileImagePath));

export default app;
