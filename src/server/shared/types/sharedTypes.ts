type QueryRequest = {
    size: number;
    page: number;
};

type QueryResponse = {
    total: number;
    page: number;
    size: number;
    items: string[];
};

type ParamsRequest = {
    id: number;
};

export { QueryRequest, QueryResponse, ParamsRequest };
