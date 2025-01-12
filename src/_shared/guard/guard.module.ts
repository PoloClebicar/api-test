import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";

const providerExports = [
    {
        provide: APP_GUARD,
        useClass: AuthGuard,
    },
];

const providers = [
    ...providerExports,
];

@Module({
    providers: providers,
    exports: providerExports
})
export class GuardModule {
}
