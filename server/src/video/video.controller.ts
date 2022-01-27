import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VideoService } from "./video.service";
import { VideoControllerBase } from "./base/video.controller.base";

@swagger.ApiTags("videos")
@common.Controller("videos")
export class VideoController extends VideoControllerBase {
  constructor(
    protected readonly service: VideoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
