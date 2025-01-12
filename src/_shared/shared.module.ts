import { Global, Module } from "@nestjs/common";
import { GuardModule } from "./guard/guard.module";
import { RepoModule } from "./repo/repo.module";

@Global()
@Module({
    imports: [
        GuardModule,
        JwtModule.registerAsync({
            useFactory: () => ({
                global: true,
                secret: process.env.JWT_SECRET_TOKEN,
                signOptions: { expiresIn: '60s' },
            })
        }),
        RepoModule,
    ]
})
export class SharedModule {
}
