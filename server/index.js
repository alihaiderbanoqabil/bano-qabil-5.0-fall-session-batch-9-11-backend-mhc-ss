const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory users array
let users = [
    // {
    //     id: 1,
    //     name: "John Doe",
    //     email: "john.doe@example.com",
    //     age: 30,
    // },
];

app.get("/api/health", (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Server is running",
    });
});

// =========================
// CREATE USER
// POST /api/users
// =========================
app.post("/api/users/", (req, res) => {
    console.log(req.body, "req.body");
    const { name, email, age } = req.body;
    // const user = {
    //     id: users.length + 1,
    //     name: name,
    //     email: email,
    //     age: age,
    // };
    const user = { id: users.length + 1, name, email, age };

    // const user = {
    //     id: users.length + 1,
    //     name: req.body.name,
    //     email: req.body.email,
    //     age: req.body.age,
    // };

    // const user = {
    //     id: users.length + 1,
    //    ...req.body
    // };

    users.push(user);

    return res.status(201).json({
        status: true,
        message: "User created successfully",
        data: user,
    });
});

// =========================
// GET ALL USERS
// GET /api/users
// =========================
app.get("/api/users", (req, res) => {
    return res.status(200).json({
        status: true,
        message: "Users fetched successfully",
        data: users,
    });
});

// =========================
// GET SINGLE USER
// GET /api/users/:userId
// =========================
app.get("/api/users/:userId", (req, res) => {

    console.log(req.params, "req.params");

    const { userId } = req.params;

    // const user = users.find((user) => user.id === Number(userId));
    const user = users.find((user) => user.id === +userId);
    // const user = users.find((user) => user.id === parseInt(userId));

    if (!user) {
        return res.status(404).json({
            status: false,
            message: "User not found",
        });
    }

    return res.status(200).json({
        status: true,
        message: "User fetched successfully",
        data: user,
    });
});
// =========================
// GET SINGLE POST
// GET /api/users/:userId/posts/:postId
// =========================
app.get("/api/users/:userId/posts/:postId/comments/:commentId", (req, res) => {
    console.log(req.params, "req.params");

    const { userId, postId, commentId } = req.params;

    const user = users.find((user) => user.id === Number(userId));
    // const user = users.find((user) => user.id === +userId);
    // const user = users.find((user) => user.id === parseInt(userId));

    if (!user) {
        return res.status(404).json({
            status: false,
            message: "User not found",
        });
    }

    return res.status(200).json({
        status: true,
        message: "User fetched successfully",
        data: user,
    });
});


// =========================
// UPDATE USER
// PUT /api/users/:userId
// =========================
app.put("/api/users/:userId", (req, res) => {
    const { userId } = req.params;

    const user = users.find((user) => user.id === Number(userId));

    if (!user) {
        return res.status(404).json({
            status: false,
            message: "User not found",
        });
    }

    const { name, email, age } = req.body;

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.age = age ?? user.age;

    return res.status(200).json({
        status: true,
        message: "User updated successfully",
        data: user,
    });
});

// =========================
// DELETE USER
// DELETE /api/users/:userId
// =========================
app.delete("/api/users/:userId", (req, res) => {
    const { userId } = req.params;

    const userIndex = users.findIndex(
        (user) => user.id === Number(userId)
    );

    if (userIndex === -1) {
        return res.status(404).json({
            status: false,
            message: "User not found",
        });
    }

    const deletedUser = users.splice(userIndex, 1)[0];
    // res.statusCode = 200;
    // res.statusMessage = "OK";
    // res.setHeader("Content-Type", "application/json");
    // res.setHeaders({
    //     "X-Custom-Header": "CustomValue",
    //     "Cache-Control": "no-cache",
    // });

    return res.status(200).json({
        status: true,
        message: "User deleted successfully",
        data: deletedUser,
    });
});

// =========================
// 404 ROUTE
// =========================
app.use((req, res) => {
    return res.status(404).json({
        status: false,
        message: "Route not found",
    });
});

// =========================
// START SERVER
// =========================
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
