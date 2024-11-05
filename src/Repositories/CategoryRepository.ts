import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/PrismaService';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.category.findMany();
  }
}
