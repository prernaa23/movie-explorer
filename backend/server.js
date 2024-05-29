if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
const movieRoutes = require("./routes/movieRoutes");
app.use("/api/movies", movieRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
