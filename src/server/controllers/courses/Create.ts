import { RequestHandler } from "express";

const create: RequestHandler = (req, res) => {
    return res.status(201).send("Created");
};

export { create };
