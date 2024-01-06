import {} from "express";

type QueryRequest = {
    size?: number;
    page?: number;
};

type ParamsRequest = {
    id?: number;
};

declare module "express" {
    interface Request {
        query: QueryRequest;
        params: ParamsRequest;
    }
}
