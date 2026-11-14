const express = require("express");

const userRoutes = require("./routes/user.route");

const notFound = require("./middlewares/not-found.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

// =========================
// GLOBAL MIDDLEWARES
// =========================
app.use(express.json());

// =========================
// API ROUTES
// =========================
app.use("/api/users", userRoutes);
// app.use("/api/categories", categoryRoutes);
// app.use("/api/products", productRoutes);
// app.use("/api/ratings", ratingRoutes);
// app.use("/api/orders", orderRoutes);


// =========================
// ERROR HANDLING
// =========================
app.use(notFound);
app.use(errorHandler);

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});