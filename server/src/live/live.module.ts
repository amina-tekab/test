import { Module } from "@nestjs/common";
import { LiveModuleBase } from "./base/live.module.base";
import { LiveService } from "./live.service";
import { LiveController } from "./live.controller";
import { LiveResolver } from "./live.resolver";

@Module({
  imports: [LiveModuleBase],
  controllers: [LiveController],
  providers: [LiveService, LiveResolver],
  exports: [LiveService],
})
export class LiveModule {}
