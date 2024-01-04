/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SeriesService } from "../series.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SeriesCreateInput } from "./SeriesCreateInput";
import { Series } from "./Series";
import { SeriesFindManyArgs } from "./SeriesFindManyArgs";
import { SeriesWhereUniqueInput } from "./SeriesWhereUniqueInput";
import { SeriesUpdateInput } from "./SeriesUpdateInput";
import { GenreFindManyArgs } from "../../genre/base/GenreFindManyArgs";
import { Genre } from "../../genre/base/Genre";
import { GenreWhereUniqueInput } from "../../genre/base/GenreWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SeriesControllerBase {
  constructor(
    protected readonly service: SeriesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Series })
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSeries(@common.Body() data: SeriesCreateInput): Promise<Series> {
    return await this.service.createSeries({
      data: {
        ...data,

        userSeriesMapping: data.userSeriesMapping
          ? {
              connect: data.userSeriesMapping,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        descption: true,
        director: true,
        id: true,
        mustWatchCount: true,
        name: true,
        rating: true,
        updatedAt: true,

        userSeriesMapping: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Series] })
  @ApiNestedQuery(SeriesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async seriesItems(@common.Req() request: Request): Promise<Series[]> {
    const args = plainToClass(SeriesFindManyArgs, request.query);
    return this.service.seriesItems({
      ...args,
      select: {
        createdAt: true,
        descption: true,
        director: true,
        id: true,
        mustWatchCount: true,
        name: true,
        rating: true,
        updatedAt: true,

        userSeriesMapping: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Series })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async series(
    @common.Param() params: SeriesWhereUniqueInput
  ): Promise<Series | null> {
    const result = await this.service.series({
      where: params,
      select: {
        createdAt: true,
        descption: true,
        director: true,
        id: true,
        mustWatchCount: true,
        name: true,
        rating: true,
        updatedAt: true,

        userSeriesMapping: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Series })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSeries(
    @common.Param() params: SeriesWhereUniqueInput,
    @common.Body() data: SeriesUpdateInput
  ): Promise<Series | null> {
    try {
      return await this.service.updateSeries({
        where: params,
        data: {
          ...data,

          userSeriesMapping: data.userSeriesMapping
            ? {
                connect: data.userSeriesMapping,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          descption: true,
          director: true,
          id: true,
          mustWatchCount: true,
          name: true,
          rating: true,
          updatedAt: true,

          userSeriesMapping: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Series })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSeries(
    @common.Param() params: SeriesWhereUniqueInput
  ): Promise<Series | null> {
    try {
      return await this.service.deleteSeries({
        where: params,
        select: {
          createdAt: true,
          descption: true,
          director: true,
          id: true,
          mustWatchCount: true,
          name: true,
          rating: true,
          updatedAt: true,

          userSeriesMapping: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/genre")
  @ApiNestedQuery(GenreFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Genre",
    action: "read",
    possession: "any",
  })
  async findGenre(
    @common.Req() request: Request,
    @common.Param() params: SeriesWhereUniqueInput
  ): Promise<Genre[]> {
    const query = plainToClass(GenreFindManyArgs, request.query);
    const results = await this.service.findGenre(params.id, {
      ...query,
      select: {
        createdAt: true,
        decription: true,
        id: true,

        movie: {
          select: {
            id: true,
          },
        },

        Name: true,

        series: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        videoContent: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/genre")
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "update",
    possession: "any",
  })
  async connectGenre(
    @common.Param() params: SeriesWhereUniqueInput,
    @common.Body() body: GenreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      genre: {
        connect: body,
      },
    };
    await this.service.updateSeries({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/genre")
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "update",
    possession: "any",
  })
  async updateGenre(
    @common.Param() params: SeriesWhereUniqueInput,
    @common.Body() body: GenreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      genre: {
        set: body,
      },
    };
    await this.service.updateSeries({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/genre")
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "update",
    possession: "any",
  })
  async disconnectGenre(
    @common.Param() params: SeriesWhereUniqueInput,
    @common.Body() body: GenreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      genre: {
        disconnect: body,
      },
    };
    await this.service.updateSeries({
      where: params,
      data,
      select: { id: true },
    });
  }
}