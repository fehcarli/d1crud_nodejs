import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer";
import { 
    IsDateString, 
    IsNotEmpty, 
    Length
} from "class-validator"
import { Schema as MongooseSchema } from "mongoose" 

export class CreateTaskDto {

    @IsNotEmpty()
    @Length(20, 50)
    @ApiProperty()
    description: string;

    @IsNotEmpty()
    @Type(()=>Date)
    @IsDateString()
    @ApiProperty()
    date: Date;

    @IsNotEmpty()
    @ApiProperty()
    user: MongooseSchema.Types.ObjectId;
}
