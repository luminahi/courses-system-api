import { RequestHandler } from "express";

const deleteById: RequestHandler = (req, res) => {
    console.log(req.params);
    return res.status(200).send("not implemented");
};

export { deleteById };
