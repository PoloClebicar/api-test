import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    //Dependency injection to handle instanciating the authservices when needed
    constructor(private authservice: AuthService){}

    @Post('signup')
    signup(){return this.authservice.singup()}

    @Post('signin')
    signin(){return this.authservice.login()}
}