import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    login(){return { msg: "SING IN"}}

    singup(){return { msg: "SING UP"}}
}