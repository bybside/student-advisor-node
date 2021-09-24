import { INestApplication } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { DbService } from "./data/db.service"

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(AppModule)
    app.get(DbService).enableShutdownHooks(app)
    await app.listen(3000)
}

bootstrap()