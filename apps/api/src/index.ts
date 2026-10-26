import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = Number(process.env.API_PORT || 4000);

app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN || "http://localhost:3000" }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/v1/health", (_req, res) => {
  res.json({ status: "ok", service: "sgi-melo-diniz-api", version: "0.1.0" });
});

app.get("/api/v1/modules", (_req, res) => {
  res.json({ data: [
    "obras", "planejamento", "rdo", "orcamentos", "compras", "estoque",
    "financeiro", "rh", "documentos", "qualidade", "seguranca",
    "licitacoes", "crm", "bi", "mari"
  ]});
});

app.listen(port, () => {
  console.log(`SGI API listening on http://localhost:${port}`);
});
