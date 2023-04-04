const fs = require("fs");

fs.writeFileSync("./.env", `API_QUOTES=${process.env.API_QUOTES}\n`);
fs.writeFileSync("./.env", `API_KEY=${process.env.API_KEY}\n`);
