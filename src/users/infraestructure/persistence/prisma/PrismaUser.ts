import { User } from '@prisma/client';

export class PrismaUser implements User {
  id: number;
  email: string;
  name: string;
}
