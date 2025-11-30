import express from "express";
import { BinanceService } from "../services/binance_service.js";

const router = express.Router();
const binance = new BinanceService();

// Ruta: /binance/time
router.get("/time", async (req, res) => {
  try {
    res.json(await binance.getServerTime());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta: /binance/account
router.get("/account", async (req, res) => {
  try {
    res.json(await binance.getAccount());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// RUTA AÑADIDA: Para obtener el ticker (ejemplo de consulta que fallaba)
// Ruta: /binance/ticker
router.get("/ticker", async (req, res) => {
  try {
    // Asumiendo que BinanceService tiene un método getTicker()
    res.json(await binance.getTicker());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta: /binance/price/:symbol
router.get("/price/:symbol", async (req, res) => {
  try {
    res.json(await binance.getPrice(req.params.symbol));
  } catch (err) {
    // Es mejor devolver un 404 si el símbolo no existe o 500 si es un error de la API
    res.status(500).json({ error: err.message });
  }
});

export default router;
