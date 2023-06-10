const express = require("express");
const PORT = 3001;
const app = express();

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));
