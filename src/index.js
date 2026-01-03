const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Health check
app.get("/", (req, res) => {
  res.send("Backend AdSpy funcionando correctamente 🚀");
});

// Endpoint de búsqueda (modo seguro)
app.get("/api/ads/search", (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Falta keyword" });
  }

  // RESPUESTA CONTROLADA (SIN SCRAPING)
  res.json({
    keyword,
    total: 0,
    ads: [],
    message: "Backend OK. Scraping desactivado por estabilidad."
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});
