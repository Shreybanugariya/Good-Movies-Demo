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
import { MovieService } from "../movie.service";
import { MovieCreateInput } from "./MovieCreateInput";
import { Movie } from "./Movie";
import { MovieFindManyArgs } from "./MovieFindManyArgs";
import { MovieWhereUniqueInput } from "./MovieWhereUniqueInput";
import { MovieUpdateInput } from "./MovieUpdateInput";
import { GenreFindManyArgs } from "../../genre/base/GenreFindManyArgs";
import { Genre } from "../../genre/base/Genre";
import { GenreWhereUniqueInput } from "../../genre/base/GenreWhereUniqueInput";

export class MovieControllerBase {
  constructor(protected readonly service: MovieService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Movie })
  @swagger.ApiBody({
    type: MovieCreateInput,
  })
  async createMovie(@common.Body() data: MovieCreateInput): Promise<Movie> {
    return await this.service.createMovie({
      data: {
        ...data,

        Director: {
          connect: data.Director,
        },
      },
      select: {
        createdAt: true,
        description: true,

        Director: {
          select: {
            id: true,
          },
        },

        id: true,
        mustWatchCount: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Movie] })
  @ApiNestedQuery(MovieFindManyArgs)
  async movies(@common.Req() request: Request): Promise<Movie[]> {
    const args = plainToClass(MovieFindManyArgs, request.query);
    return this.service.movies({
      ...args,
      select: {
        createdAt: true,
        description: true,

        Director: {
          select: {
            id: true,
          },
        },

        id: true,
        mustWatchCount: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async movie(
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Movie | null> {
    const result = await this.service.movie({
      where: params,
      select: {
        createdAt: true,
        description: true,

        Director: {
          select: {
            id: true,
          },
        },

        id: true,
        mustWatchCount: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: MovieUpdateInput,
  })
  async updateMovie(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() data: MovieUpdateInput
  ): Promise<Movie | null> {
    try {
      return await this.service.updateMovie({
        where: params,
        data: {
          ...data,

          Director: {
            connect: data.Director,
          },
        },
        select: {
          createdAt: true,
          description: true,

          Director: {
            select: {
              id: true,
            },
          },

          id: true,
          mustWatchCount: true,
          name: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMovie(
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Movie | null> {
    try {
      return await this.service.deleteMovie({
        where: params,
        select: {
          createdAt: true,
          description: true,

          Director: {
            select: {
              id: true,
            },
          },

          id: true,
          mustWatchCount: true,
          name: true,
          updatedAt: true,
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

  @common.Get("/:id/genre")
  @ApiNestedQuery(GenreFindManyArgs)
  async findGenre(
    @common.Req() request: Request,
    @common.Param() params: MovieWhereUniqueInput
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
  async connectGenre(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: GenreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      genre: {
        connect: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/genre")
  async updateGenre(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: GenreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      genre: {
        set: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/genre")
  async disconnectGenre(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: GenreWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      genre: {
        disconnect: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }
}
