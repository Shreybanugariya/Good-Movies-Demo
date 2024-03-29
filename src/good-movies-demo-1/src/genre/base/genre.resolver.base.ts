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
import { Genre } from "./Genre";
import { GenreCountArgs } from "./GenreCountArgs";
import { GenreFindManyArgs } from "./GenreFindManyArgs";
import { GenreFindUniqueArgs } from "./GenreFindUniqueArgs";
import { CreateGenreArgs } from "./CreateGenreArgs";
import { UpdateGenreArgs } from "./UpdateGenreArgs";
import { DeleteGenreArgs } from "./DeleteGenreArgs";
import { Movie } from "../../movie/base/Movie";
import { Series } from "../../series/base/Series";
import { VideoContent } from "../../videoContent/base/VideoContent";
import { GenreService } from "../genre.service";
@graphql.Resolver(() => Genre)
export class GenreResolverBase {
  constructor(protected readonly service: GenreService) {}

  async _genresMeta(
    @graphql.Args() args: GenreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Genre])
  async genres(@graphql.Args() args: GenreFindManyArgs): Promise<Genre[]> {
    return this.service.genres(args);
  }

  @graphql.Query(() => Genre, { nullable: true })
  async genre(
    @graphql.Args() args: GenreFindUniqueArgs
  ): Promise<Genre | null> {
    const result = await this.service.genre(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Genre)
  async createGenre(@graphql.Args() args: CreateGenreArgs): Promise<Genre> {
    return await this.service.createGenre({
      ...args,
      data: {
        ...args.data,

        movie: args.data.movie
          ? {
              connect: args.data.movie,
            }
          : undefined,

        series: args.data.series
          ? {
              connect: args.data.series,
            }
          : undefined,

        videoContent: args.data.videoContent
          ? {
              connect: args.data.videoContent,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Genre)
  async updateGenre(
    @graphql.Args() args: UpdateGenreArgs
  ): Promise<Genre | null> {
    try {
      return await this.service.updateGenre({
        ...args,
        data: {
          ...args.data,

          movie: args.data.movie
            ? {
                connect: args.data.movie,
              }
            : undefined,

          series: args.data.series
            ? {
                connect: args.data.series,
              }
            : undefined,

          videoContent: args.data.videoContent
            ? {
                connect: args.data.videoContent,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Genre)
  async deleteGenre(
    @graphql.Args() args: DeleteGenreArgs
  ): Promise<Genre | null> {
    try {
      return await this.service.deleteGenre(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Movie, {
    nullable: true,
    name: "movie",
  })
  async getMovie(@graphql.Parent() parent: Genre): Promise<Movie | null> {
    const result = await this.service.getMovie(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Series, {
    nullable: true,
    name: "series",
  })
  async getSeries(@graphql.Parent() parent: Genre): Promise<Series | null> {
    const result = await this.service.getSeries(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => VideoContent, {
    nullable: true,
    name: "videoContent",
  })
  async getVideoContent(
    @graphql.Parent() parent: Genre
  ): Promise<VideoContent | null> {
    const result = await this.service.getVideoContent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
