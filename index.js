const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello");
});
app.get("/books", (req, res) => {
  return res.send({
    "These Violent Delights":
      " blood feud between two gangs runs the streets red, leaving the city helpless in the grip of chaos. At the heart of it all is eighteen-year-old Juliette Cai, a former flapper who has returned to assume her role as the proud heir of the Scarlet Gang—a network of criminals far above the law.",

    "Six of Crows":
      "The novel follows the crew brought together by Kaz Brekker a criminal mastermind looking to cash in on the biggest job of his career.",

    "Ordinary Grace":
      " ORDINARY GRACE manages to defy definition, building a complex tale that sees the narrator shifting and growing with each twist, his unreliable perspective shifting",

    "The Invisible Life of Addie LaRue":
      "V. E. Schwab is known for hits that explore the fantastical and human kinds of darkness, but THE INVISIBLE LIFE OF ADDIE LARUE dives into both.",
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
