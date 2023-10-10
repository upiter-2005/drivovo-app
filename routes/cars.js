const express = require("express");
const router = express.Router();

const { Client } = require("@notionhq/client");
const notion = new Client({ auth: "secret_ujtyPJdXLquFVFKJblm0Iqao88XGsVMCogg8mu5SV1R" });
const databaswId = "c07fa663465e4589bab3e02ebd925d54";

router.get("/", async (req, res, next) => {
  try {
    const data = await notion.databases.query({
      database_id: databaswId,
      // sorts: [
      //   {
      //     property: "car_price_ex_showroom",
      //     direction: "ascending",
      //   },
      // ],
    });
    return res.json({ data });
  } catch (e) {
    return res.json({ message: "Not denie" });
  }
});

module.exports = router;
