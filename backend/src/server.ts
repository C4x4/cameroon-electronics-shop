import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './presentation/routes/productRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'Backend is running successfully!' });
});

// Register the product routes
app.use('/api', productRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});