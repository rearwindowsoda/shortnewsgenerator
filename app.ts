import * as dotenv from 'dotenv';
import express from 'express';

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

const app = express();

app.listen(process.env.PORT || 3000);
