import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { RegisterModule } from './signup/register.module';
import { APIVersion1Service } from './api-version1.service';

@Module({
    imports: [CourseModule, RegisterModule],
    providers: [APIVersion1Service]
})
export class APIVersion1Module {}
