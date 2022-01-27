import { PrismaService } from "nestjs-prisma";
import { Prisma, Live } from "@prisma/client";

export class LiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LiveFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveFindManyArgs>
  ): Promise<number> {
    return this.prisma.live.count(args);
  }

  async findMany<T extends Prisma.LiveFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveFindManyArgs>
  ): Promise<Live[]> {
    return this.prisma.live.findMany(args);
  }
  async findOne<T extends Prisma.LiveFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveFindUniqueArgs>
  ): Promise<Live | null> {
    return this.prisma.live.findUnique(args);
  }
  async create<T extends Prisma.LiveCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveCreateArgs>
  ): Promise<Live> {
    return this.prisma.live.create<T>(args);
  }
  async update<T extends Prisma.LiveUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveUpdateArgs>
  ): Promise<Live> {
    return this.prisma.live.update<T>(args);
  }
  async delete<T extends Prisma.LiveDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LiveDeleteArgs>
  ): Promise<Live> {
    return this.prisma.live.delete(args);
  }
}
