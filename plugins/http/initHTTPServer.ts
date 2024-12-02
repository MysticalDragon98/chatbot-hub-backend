import { Server } from "@olptools/http-server";
import { $HTTP_PORT } from "../../lib/env";
import conversations from "../../lib/http/endpoints/conversations/index";
//* Imports

const Endpoints = {
    conversations,
    //* Endpoints
}

export async function initHTTPServer () {
    const server = new Server({
        endpoints: Endpoints,
        port: $HTTP_PORT
    });

    //* Plugins
    await server.listen();
}