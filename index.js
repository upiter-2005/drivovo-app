import express, { json } from "express";

import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

import { Client } from "@notionhq/client";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const port = process.env.PORT || 9002;
const notion = new Client({ auth: "secret_ujtyPJdXLquFVFKJblm0Iqao88XGsVMCogg8mu5SV1R" });
const databaswId = "c07fa663465e4589bab3e02ebd925d54";

//app.post("/submitFormToNotion", jsonParser, async (req, res) => {});

app.get("/", async (req, res) => {
  try {
    const data = await notion.databases.query({
      database_id: databaswId,
    });
    res.json({ data });
  } catch (e) {
    res.json({ message: "Not denie" });
  }
});

console.log("Hello!!!!!!!");

app.listen(port, () => {
  console.log("Starting proxy at : " + port);
});
