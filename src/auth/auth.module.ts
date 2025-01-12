import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthUseCases } from "./auth.use-cases";
import { SharedModule } from "src/_shared/repo.module";

@Module({
    imports: [
        SharedModule,
        
    ],
    controllers: [AuthController],
    providers: [AuthUseCases]
})
export class AuthModule {
}