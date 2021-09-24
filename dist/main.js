"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const db_service_1 = require("./data/db.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.get(db_service_1.DbService).enableShutdownHooks(app);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map