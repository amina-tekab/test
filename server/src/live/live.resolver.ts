import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LiveResolverBase } from "./base/live.resolver.base";
import { Live } from "./base/Live";
import { LiveService } from "./live.service";

@graphql.Resolver(() => Live)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LiveResolver extends LiveResolverBase {
  constructor(
    protected readonly service: LiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
