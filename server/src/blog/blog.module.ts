import { Module } from '@nestjs/common';
import { EntryService } from './entry/entry.service';
import { EntryController } from './entry/entry.controller';


@Module({
  providers: [EntryService],
  controllers: [EntryController]
})
export class BlogModule {}
