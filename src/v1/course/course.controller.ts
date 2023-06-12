import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller({path: 'course', version: '1'})
export class CourseController {
    constructor(private courseService: CourseService) {}


}
