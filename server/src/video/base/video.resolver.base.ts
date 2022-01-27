import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateVideoArgs } from "./CreateVideoArgs";
import { UpdateVideoArgs } from "./UpdateVideoArgs";
import { DeleteVideoArgs } from "./DeleteVideoArgs";
import { VideoFindManyArgs } from "./VideoFindManyArgs";
import { VideoFindUniqueArgs } from "./VideoFindUniqueArgs";
import { Video } from "./Video";
import { VideoService } from "../video.service";

@graphql.Resolver(() => Video)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VideoResolverBase {
  constructor(
    protected readonly service: VideoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "read",
    possession: "any",
  })
  async _videosMeta(
    @graphql.Args() args: VideoFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Video])
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "read",
    possession: "any",
  })
  async videos(
    @graphql.Args() args: VideoFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Video[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Video",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Video, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "read",
    possession: "own",
  })
  async video(
    @graphql.Args() args: VideoFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Video | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Video",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Video)
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "create",
    possession: "any",
  })
  async createVideo(
    @graphql.Args() args: CreateVideoArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Video> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Video",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Video"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Video)
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "update",
    possession: "any",
  })
  async updateVideo(
    @graphql.Args() args: UpdateVideoArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Video | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Video",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Video"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Video)
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "delete",
    possession: "any",
  })
  async deleteVideo(
    @graphql.Args() args: DeleteVideoArgs
  ): Promise<Video | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
