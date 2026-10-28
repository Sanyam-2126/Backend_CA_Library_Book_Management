const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bookRoutes = require("./routes/bookRoutes");
const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
app.get("/", (req, res) => {
    res.status(200).send("Library Book Management is running ");
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI)
.then(() => {
        console.log("MongoDB connected successfully");
        app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });