import { Pipe } from "@angular/core";

@Pipe({name:'textpipe'})
export class MyPipe {
    transform(value:string)
    {
    return value[0]+value[1]+value[2]+value[3]+value[4]+"...";
       
    }

}