
import {ApiProperty} from '@nestjs/swagger'


export class EventSponsorsDto {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
}
