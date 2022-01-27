import { PrismaService } from "nestjs-prisma";
import { Prisma, Video } from "@prisma/client";

export class VideoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VideoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>
  ): Promise<number> {
    return this.prisma.video.count(args);
  }

  async findMany<T extends Prisma.VideoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>
  ): Promise<Video[]> {
    return this.prisma.video.findMany(args);
  }
  async findOne<T extends Prisma.VideoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoFindUniqueArgs>
  ): Promise<Video | null> {
    return this.prisma.video.findUnique(args);
  }
  async create<T extends Prisma.VideoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoCreateArgs>
  ): Promise<Video> {
    return this.prisma.video.create<T>(args);
  }
  async update<T extends Prisma.VideoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoUpdateArgs>
  ): Promise<Video> {
    return this.prisma.video.update<T>(args);
  }
  async delete<T extends Prisma.VideoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VideoDeleteArgs>
  ): Promise<Video> {
    return this.prisma.video.delete(args);
  }
}
