const express = require("express");

const PORT = 8000;
const server = express();

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});