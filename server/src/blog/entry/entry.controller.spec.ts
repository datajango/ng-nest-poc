import { Test, TestingModule } from '@nestjs/testing';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { Entry } from './Entry';

describe('Entry Controller', () => {
  let entriesController: EntryController;
  let entriesSrv: EntryService;

  beforeEach(async () => {
      entriesSrv = new EntryService();
      entriesController = new EntryController(entriesSrv);
  });

  it('should be defined', () => {
    expect(entriesController).toBeDefined();
  });

  it('should return an array of entries', async () => {
    
    const result: Entry[] =   [{
      _id: '1',
      title: 'Praesent ante massa',
      body: 'Praesent ante massa, vulputate placerat mauris non, lobortis euismod dui.'
    }];

    jest.spyOn(entriesSrv, 'findAll').mockImplementation(() => result);

    expect(await entriesController.findAll()).toEqual(result);
  });

});
