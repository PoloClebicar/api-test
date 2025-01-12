import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersLocalRepo } from "src/_shared/users.local.repo";
import { User, UsersRepo } from "src/_shared/users.repo";

export type Token = {
    accessToken: string,
};

@Injectable({})
export class AuthUseCases{
    constructor(
        private readonly usersRepo: UsersRepo,
        private readonly jwtService: JwtService,
    ) {}

    async login(email: string, password: string): Promise<Token> {
        const user = await this.usersRepo.getByEmailWithPassword(email);
        if (!user) throw new UnauthorizedException();

        const encryptedPassword = await this.encryptPassword(password);
        if (user.password !== encryptedPassword) throw new UnauthorizedException();

        // try {
        //     await this.bcrypt(password, user.password);
        // } catch(error) {
        //     throw new UnauthorizedException();
        // }

        return this.generateJWT(user);
    }

    singup(){return { msg: "SING UP"}}

    private async encryptPassword(password: string): Promise<string> {
        return password;
    }

    private async generateJWT(user: User): Promise<Token> {
        const payload = { email: user.email };

        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
}
