const express = require("express");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const { Client } = require("@notionhq/client");

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
    res.status(200).json({ data });
  } catch (e) {
    res.status(411).json({ message: "Not denie" });
  }
});

console.log("Hello!!!!!!!");

app.listen(port, () => {
  console.log("Starting proxy at : " + port);
});
