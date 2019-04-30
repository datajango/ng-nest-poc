import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Entry } from './Entry';
import { EntryService } from './entry.service';

@Controller('entries')
export class EntryController {

    constructor(private readonly entryService: EntryService) { }

    @Get()
    findAll(): Entry[] {
        const entries: Entry[] = this.entryService.findAll();
        //const entries: Entry[] = [];
        return entries;
    }

    @Get(':entryId')
    findById(@Param('entryId') entryId) {
        return this.entryService.findById(entryId);
    }
    @Post()
    create(@Body() entry) {
        return this.entryService.create(entry);
    }
}
