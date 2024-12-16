import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EventCategoriesService } from './event-categories.service';
import { CreateEventCategoryDto } from './dto/create-event-category.dto';
import { UpdateEventCategoryDto } from './dto/update-event-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('event-categories')
@Controller('event-categories')
export class EventCategoriesController {
  constructor(
    private readonly eventCategoriesService: EventCategoriesService,
  ) {}

  @Post()
  create(@Body() createEventCategoryDto: CreateEventCategoryDto) {
    return this.eventCategoriesService.create(createEventCategoryDto);
  }

  @Get()
  findAll() {
    return this.eventCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventCategoryDto: UpdateEventCategoryDto,
  ) {
    return this.eventCategoriesService.update(+id, updateEventCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventCategoriesService.remove(+id);
  }
}
