import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LiveServiceBase } from "./base/live.service.base";

@Injectable()
export class LiveService extends LiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
