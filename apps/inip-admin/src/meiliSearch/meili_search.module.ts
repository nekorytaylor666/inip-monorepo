import { Module } from '@nestjs/common';
import MeiliSearch from 'meilisearch';
import { MongooseSchemasModule } from 'src/mongoose/mongoose.module';
import { MeiliSearchService } from './service/meili_search.service';

export const meiliSearchClient = new MeiliSearch({
  host: 'http://68.183.74.222:7700',
  apiKey: 'gefest20202021',
});

@Module({
  imports: [MongooseSchemasModule],
  providers: [MeiliSearchService],
  controllers: [],
})
export class MeiliSearchModule {}
