import { execute } from './helper';
import { Random } from 'mockjs';

export function userSeed() {
  return execute(30, (prisma) => {
    return prisma.user.create({
      data: {
        email: Random.email(),
        password: Random.word(6),
        username: Random.word(6),
        github: Random.url(),
        twitter: Random.url(),
      },
    });
  });
}
