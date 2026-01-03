const express = require("express");
const cors = require("cors");
const scrapeAdLibrary = require("./scraper/adLibrary");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend AdSpy Scraping funcionando 🚀");
});

app.get("/api/ads/search", async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: "keyword es requerido" });
  }

  try {
    const ads = await scrapeAdLibrary(keyword);
    res.json({ total: ads.length, ads });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error scraping Ad Library" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
