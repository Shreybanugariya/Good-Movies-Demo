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
import { UserSeriesMapping } from "./UserSeriesMapping";
import { UserSeriesMappingCountArgs } from "./UserSeriesMappingCountArgs";
import { UserSeriesMappingFindManyArgs } from "./UserSeriesMappingFindManyArgs";
import { UserSeriesMappingFindUniqueArgs } from "./UserSeriesMappingFindUniqueArgs";
import { CreateUserSeriesMappingArgs } from "./CreateUserSeriesMappingArgs";
import { UpdateUserSeriesMappingArgs } from "./UpdateUserSeriesMappingArgs";
import { DeleteUserSeriesMappingArgs } from "./DeleteUserSeriesMappingArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { SeriesFindManyArgs } from "../../series/base/SeriesFindManyArgs";
import { Series } from "../../series/base/Series";
import { UserSeriesMappingService } from "../userSeriesMapping.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserSeriesMapping)
export class UserSeriesMappingResolverBase {
  constructor(
    protected readonly service: UserSeriesMappingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserSeriesMapping",
    action: "read",
    possession: "any",
  })
  async _userSeriesMappingsMeta(
    @graphql.Args() args: UserSeriesMappingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserSeriesMapping])
  @nestAccessControl.UseRoles({
    resource: "UserSeriesMapping",
    action: "read",
    possession: "any",
  })
  async userSeriesMappings(
    @graphql.Args() args: UserSeriesMappingFindManyArgs
  ): Promise<UserSeriesMapping[]> {
    return this.service.userSeriesMappings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserSeriesMapping, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserSeriesMapping",
    action: "read",
    possession: "own",
  })
  async userSeriesMapping(
    @graphql.Args() args: UserSeriesMappingFindUniqueArgs
  ): Promise<UserSeriesMapping | null> {
    const result = await this.service.userSeriesMapping(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserSeriesMapping)
  @nestAccessControl.UseRoles({
    resource: "UserSeriesMapping",
    action: "create",
    possession: "any",
  })
  async createUserSeriesMapping(
    @graphql.Args() args: CreateUserSeriesMappingArgs
  ): Promise<UserSeriesMapping> {
    return await this.service.createUserSeriesMapping({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserSeriesMapping)
  @nestAccessControl.UseRoles({
    resource: "UserSeriesMapping",
    action: "update",
    possession: "any",
  })
  async updateUserSeriesMapping(
    @graphql.Args() args: UpdateUserSeriesMappingArgs
  ): Promise<UserSeriesMapping | null> {
    try {
      return await this.service.updateUserSeriesMapping({
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

  @graphql.Mutation(() => UserSeriesMapping)
  @nestAccessControl.UseRoles({
    resource: "UserSeriesMapping",
    action: "delete",
    possession: "any",
  })
  async deleteUserSeriesMapping(
    @graphql.Args() args: DeleteUserSeriesMappingArgs
  ): Promise<UserSeriesMapping | null> {
    try {
      return await this.service.deleteUserSeriesMapping(args);
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
  @graphql.ResolveField(() => [User], { name: "userId" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUserId(
    @graphql.Parent() parent: UserSeriesMapping,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUserId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Series], { name: "webSeriesId" })
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "read",
    possession: "any",
  })
  async findWebSeriesId(
    @graphql.Parent() parent: UserSeriesMapping,
    @graphql.Args() args: SeriesFindManyArgs
  ): Promise<Series[]> {
    const results = await this.service.findWebSeriesId(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}