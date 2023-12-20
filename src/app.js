const express = require("express")
const cors = require("cors");
const http = require("http");

const boookwormRoutes = require("./routes/bookworm");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.set("trust proxy", true);
app.use(express.json());
app.use("/api_provider/bookworm/", boookwormRoutes);

const PORT = process.env.PORT || 8001;
server.listen(PORT, console.log(`server started on port ${PORT}`));