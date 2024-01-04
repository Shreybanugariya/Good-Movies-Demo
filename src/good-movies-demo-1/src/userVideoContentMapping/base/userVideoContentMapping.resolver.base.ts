/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserVideoContentMapping } from "./UserVideoContentMapping";
import { UserVideoContentMappingCountArgs } from "./UserVideoContentMappingCountArgs";
import { UserVideoContentMappingFindManyArgs } from "./UserVideoContentMappingFindManyArgs";
import { UserVideoContentMappingFindUniqueArgs } from "./UserVideoContentMappingFindUniqueArgs";
import { CreateUserVideoContentMappingArgs } from "./CreateUserVideoContentMappingArgs";
import { UpdateUserVideoContentMappingArgs } from "./UpdateUserVideoContentMappingArgs";
import { DeleteUserVideoContentMappingArgs } from "./DeleteUserVideoContentMappingArgs";
import { VideoContentFindManyArgs } from "../../videoContent/base/VideoContentFindManyArgs";
import { VideoContent } from "../../videoContent/base/VideoContent";
import { UserVideoContentMappingService } from "../userVideoContentMapping.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserVideoContentMapping)
export class UserVideoContentMappingResolverBase {
  constructor(
    protected readonly service: UserVideoContentMappingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserVideoContentMapping",
    action: "read",
    possession: "any",
  })
  async _userVideoContentMappingsMeta(
    @graphql.Args() args: UserVideoContentMappingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserVideoContentMapping])
  @nestAccessControl.UseRoles({
    resource: "UserVideoContentMapping",
    action: "read",
    possession: "any",
  })
  async userVideoContentMappings(
    @graphql.Args() args: UserVideoContentMappingFindManyArgs
  ): Promise<UserVideoContentMapping[]> {
    return this.service.userVideoContentMappings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserVideoContentMapping, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserVideoContentMapping",
    action: "read",
    possession: "own",
  })
  async userVideoContentMapping(
    @graphql.Args() args: UserVideoContentMappingFindUniqueArgs
  ): Promise<UserVideoContentMapping | null> {
    const result = await this.service.userVideoContentMapping(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserVideoContentMapping)
  @nestAccessControl.UseRoles({
    resource: "UserVideoContentMapping",
    action: "create",
    possession: "any",
  })
  async createUserVideoContentMapping(
    @graphql.Args() args: CreateUserVideoContentMappingArgs
  ): Promise<UserVideoContentMapping> {
    return await this.service.createUserVideoContentMapping({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserVideoContentMapping)
  @nestAccessControl.UseRoles({
    resource: "UserVideoContentMapping",
    action: "update",
    possession: "any",
  })
  async updateUserVideoContentMapping(
    @graphql.Args() args: UpdateUserVideoContentMappingArgs
  ): Promise<UserVideoContentMapping | null> {
    try {
      return await this.service.updateUserVideoContentMapping({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserVideoContentMapping)
  @nestAccessControl.UseRoles({
    resource: "UserVideoContentMapping",
    action: "delete",
    possession: "any",
  })
  async deleteUserVideoContentMapping(
    @graphql.Args() args: DeleteUserVideoContentMappingArgs
  ): Promise<UserVideoContentMapping | null> {
    try {
      return await this.service.deleteUserVideoContentMapping(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [VideoContent], { name: "userId" })
  @nestAccessControl.UseRoles({
    resource: "VideoContent",
    action: "read",
    possession: "any",
  })
  async findUserId(
    @graphql.Parent() parent: UserVideoContentMapping,
    @graphql.Args() args: VideoContentFindManyArgs
  ): Promise<VideoContent[]> {
    const results = await this.service.findUserId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [VideoContent], { name: "videoContentId" })
  @nestAccessControl.UseRoles({
    resource: "VideoContent",
    action: "read",
    possession: "any",
  })
  async findVideoContentId(
    @graphql.Parent() parent: UserVideoContentMapping,
    @graphql.Args() args: VideoContentFindManyArgs
  ): Promise<VideoContent[]> {
    const results = await this.service.findVideoContentId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}