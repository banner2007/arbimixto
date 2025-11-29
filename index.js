import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import binanceRoutes from "./routes/binanceRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// rutas
app.use("/binance", binanceRoutes);

app.get("/", (req, res) => {
  res.json({ status: "Backend funcionando en Railway 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
