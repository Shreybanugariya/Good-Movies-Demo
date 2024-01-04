/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Series, // @ts-ignore
  Genre, // @ts-ignore
  UserSeriesMapping,
} from "@prisma/client";

export class SeriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SeriesCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesCountArgs>
  ): Promise<number> {
    return this.prisma.series.count(args);
  }

  async seriesItems<T extends Prisma.SeriesFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesFindManyArgs>
  ): Promise<Series[]> {
    return this.prisma.series.findMany(args);
  }
  async series<T extends Prisma.SeriesFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesFindUniqueArgs>
  ): Promise<Series | null> {
    return this.prisma.series.findUnique(args);
  }
  async createSeries<T extends Prisma.SeriesCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesCreateArgs>
  ): Promise<Series> {
    return this.prisma.series.create<T>(args);
  }
  async updateSeries<T extends Prisma.SeriesUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesUpdateArgs>
  ): Promise<Series> {
    return this.prisma.series.update<T>(args);
  }
  async deleteSeries<T extends Prisma.SeriesDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SeriesDeleteArgs>
  ): Promise<Series> {
    return this.prisma.series.delete(args);
  }

  async findGenre(
    parentId: string,
    args: Prisma.GenreFindManyArgs
  ): Promise<Genre[]> {
    return this.prisma.series
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .genre(args);
  }

  async getUserSeriesMapping(
    parentId: string
  ): Promise<UserSeriesMapping | null> {
    return this.prisma.series
      .findUnique({
        where: { id: parentId },
      })
      .userSeriesMapping();
  }
}