import { execute } from './helper';
import { Random } from 'mockjs';

function generateISO8601DateTime() {
  const date = Random.date('yyyy-MM-dd');
  const time = Random.time('HH:mm:ss');

  return `${date}T${time}Z`;
}

export function articleSeed() {
  return execute(10, (prisma) => {
    return prisma.article.create({
      data: {
        content: Random.paragraph(1, 5),
        title: Random.word(6),
        publishedAt: generateISO8601DateTime(),
        categoryId: Random.integer(1, 10),
        userId: Random.integer(1, 30),
      },
    });
  });
}
