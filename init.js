import { randomBytes } from "crypto";
import fs from "fs";

// you can change this values
const port = 3000;
const host = "localhost";
const node_env = "development";
const jwt_secret = randomBytes(64).toString("base64");

const parameters = [
    `PORT=${port}`,
    `HOST="${host}"`,
    `NODE_ENV="${node_env}"`,
    `JWT_SECRET="${jwt_secret}"`,
];

function generateEnv(parameters) {
    const filePath = ".env";

    try {
        const fd = fs.openSync(filePath, "a");
        fs.ftruncateSync(fd, 0);
        for (const line of parameters) {
            fs.appendFileSync(fd, line + "\n", "utf8");
        }
        fs.closeSync(fd);
    } catch (err) {
        console.log(err);
    }
}

generateEnv(parameters);
