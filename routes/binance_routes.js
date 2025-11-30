import express from "express";
import { BinanceService } from "../services/binance_service.js";

const router = express.Router();
const binance = new BinanceService();

// Ruta: /binance/time
router.get("/time", async (req, res) => {
  try {
    res.json(await binance.getServerTime());
  } catch (err) {
    // Manejo de errores mejorado
    res.status(500).json({ error: err.message });
  }
});

// Ruta: /binance/account
router.get("/account", async (req, res) => {
  try {
    res.json(await binance.getAccount());
  } catch (err) {
    // Manejo de errores mejorado
    res.status(500).json({ error: err.message });
  }
});

// **Ruta AÑADIDA** (Soluciona el 404 para /binance/ticker)
// Ruta: /binance/ticker
router.get("/ticker", async (req, res) => {
  try {
    // ASUME que el servicio tiene un método getTicker()
    res.json(await binance.getTicker());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta: /binance/price/:symbol (Ahora funcionará con el símbolo)
router.get("/price/:symbol", async (req, res) => {
  try {
    res.json(await binance.getPrice(req.params.symbol));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
