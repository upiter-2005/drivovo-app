const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");

let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;
const HOST = "Localhost";

const notion = new Client({ auth: "secret_ujtyPJdXLquFVFKJblm0Iqao88XGsVMCogg8mu5SV1R" });

const databaswId = "c07fa663465e4589bab3e02ebd925d54";

//app.post("/submitFormToNotion", jsonParser, async (req, res) => {});

app.get("/", jsonParser, async (req, res) => {
  try {
    const data = await notion.databases.query({
      database_id: databaswId,
    });
    res.json({ data });
  } catch (e) {
    res.json({ message: "Not denie" });
  }

  //console.log(res);
});

console.log("Hello!!!!!!!");

app.listen(port, () => {
  console.log("Starting proxy at : " + port);
});
