import { Controller, Post } from "@nestjs/common";
import { AuthUseCases } from "./auth.use-cases";

@Controller('auth')
export class AuthController{
    //Dependency injection to handle instanciating the authservices when needed
    constructor(private authservice: AuthUseCases){}

    @Post('signup')
    signup(){return this.authservice.singup()}

    @Post('signin')
    signin(){return this.authservice.login()}
}