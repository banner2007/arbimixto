import express from "express";
import { BitbexService } from "../services/bitbex_service.js";

const router = express.Router();
const bitbex = new BitbexService();

// Ruta: /bitbex/account
router.get("/account", async (req, res) => {
  try {
    res.json(await bitbex.getAccount());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// RUTA CORREGIDA: Incluye /ticker y usa getPrices()
router.get("/ticker", async (req, res) => {
  try {
    // CAMBIO: Usamos getPrices() para obtener el ticker completo
    res.json(await bitbex.getPrices()); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta: /bitbex/price/:symbol
router.get("/price/:symbol", async (req, res) => {
  try {
    res.json(await bitbex.getPrice(req.params.symbol));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
