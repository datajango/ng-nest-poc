import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { BlogModule } from '../src/blog/blog.module';
import { EntryService } from '../src/blog/entry/entry.service';
import { INestApplication } from '@nestjs/common';

describe('Blog', () => {
  let app: INestApplication;
  let entriesService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [BlogModule],
    })
      .overrideProvider(EntryService)
      .useValue(entriesService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET entries`, () => {
    return request(app.getHttpServer())
      .get('/entries')
      .expect(200)
      .expect(entriesService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});