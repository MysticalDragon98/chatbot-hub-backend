//* Imports
import { initDatabaseConnection } from "./plugins/mongo";
import { initHTTPServer } from "./plugins/http/initHTTPServer";

async function main () {
    await Promise.all([
        //* Main
        initHTTPServer(),
        initDatabaseConnection()
    ]);

    //* Post Main
    // log(`Admin token: ${await generateAdminToken()}`);
    // dbWatchStream("messages", console.log);
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);