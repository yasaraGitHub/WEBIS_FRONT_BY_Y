import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../services/course.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: string,name:string): any {
    if(name.toLowerCase()=="calculus"){
      return value;
    }
    
   else 
   return null;
  }

}
