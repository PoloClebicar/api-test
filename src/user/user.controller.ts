import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/_shared/guard/auth.guard";

@Controller('auth')
export class AuthController{
    //Dependency injection to handle instanciating the authservices when needed
    constructor(){}

    @Get('profile')
    @UseGuards(AuthGuard)
    signin(){return this.authservice.login()}
}