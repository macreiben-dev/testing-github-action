import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
