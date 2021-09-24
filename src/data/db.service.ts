import { INestApplication, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

/**
 * abstracting away instantiation of database
 * client in case we change ORMs in the future;
 * Primsa recommends one instance of Prisma Client
 * {@link https://tinyurl.com/3hnr7r3c per app instance}
 * 
 * injectables are registered with Nest's DI container as
 * singletons (a single shared instance) by default;
 * no further configuration needed as default is in 
 * compliance with above Prisma Client recommendations
 */

@Injectable()
export class DbService extends PrismaClient {
    /**
     * tell Prisma to wait on Nest app to execute any shutdown
     * hooks prior to calling process.exit(); Prisma will interfere
     * with Nest app's shutdown hooks {@link https://tinyurl.com/brurx4d3 by default}
     * @param app
     */
    async enableShutdownHooks(app: INestApplication): Promise<void> {
        this.$on("beforeExit", async () => {
            await app.close()
        })
    }
}
