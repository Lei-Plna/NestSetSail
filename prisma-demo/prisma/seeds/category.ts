import { execute } from './helper';
import { Random } from 'mockjs';

export function categorySeed() {
  return execute(10, (prisma) => {
    return prisma.category.create({
      data: {
        name: Random.word(6),
      },
    });
  });
}
