import { articleSeed } from '../seeds/article';
import { categorySeed } from '../seeds/category';
import { userSeed } from '../seeds/user';

async function run() {
  userSeed();
  await categorySeed();
  articleSeed();
}

run();
