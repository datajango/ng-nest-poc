import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCourseDto {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly description: string;

    @ApiModelProperty()
    readonly author: string;

    @ApiModelProperty()
    readonly length: string;

    @ApiModelProperty()
    readonly category: string;
}