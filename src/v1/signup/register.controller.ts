import { Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller({path: 'register', version: '1'})
export class RegisterController {
    constructor(private registerService: RegisterService) {}

    @Post(':courseId')
    async register() {
        try {
            
        } catch (error) {
            
        }
    }
}
