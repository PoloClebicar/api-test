import { Module } from "@nestjs/common";
import { UsersLocalRepo } from "./users.local.repo";
import { UsersRepo } from './users.repo';

const providerExports = [
    { provide: 'UsersRepo', useClass: UsersLocalRepo },
];

const providers = [
    ...providerExports,
];

@Module({
    providers: providers,
    exports: providerExports
})
export class RepoModule {
}

UsersRepo.name
// 'UsersRepo'