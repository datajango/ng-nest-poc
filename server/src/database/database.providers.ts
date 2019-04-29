import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost:27017/ng-nest-poc'),
  },
];
