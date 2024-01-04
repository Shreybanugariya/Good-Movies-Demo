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
import { UserVideoContentMappingService } from "../userVideoContentMapping.service";
import { UserVideoContentMappingCreateInput } from "./UserVideoContentMappingCreateInput";
import { UserVideoContentMapping } from "./UserVideoContentMapping";
import { UserVideoContentMappingFindManyArgs } from "./UserVideoContentMappingFindManyArgs";
import { UserVideoContentMappingWhereUniqueInput } from "./UserVideoContentMappingWhereUniqueInput";
import { UserVideoContentMappingUpdateInput } from "./UserVideoContentMappingUpdateInput";
import { VideoContentFindManyArgs } from "../../videoContent/base/VideoContentFindManyArgs";
import { VideoContent } from "../../videoContent/base/VideoContent";
import { VideoContentWhereUniqueInput } from "../../videoContent/base/VideoContentWhereUniqueInput";

export class UserVideoContentMappingControllerBase {
  constructor(protected readonly service: UserVideoContentMappingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserVideoContentMapping })
  @swagger.ApiBody({
    type: UserVideoContentMappingCreateInput,
  })
  async createUserVideoContentMapping(
    @common.Body() data: UserVideoContentMappingCreateInput
  ): Promise<UserVideoContentMapping> {
    return await this.service.createUserVideoContentMapping({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserVideoContentMapping] })
  @ApiNestedQuery(UserVideoContentMappingFindManyArgs)
  async userVideoContentMappings(
    @common.Req() request: Request
  ): Promise<UserVideoContentMapping[]> {
    const args = plainToClass(
      UserVideoContentMappingFindManyArgs,
      request.query
    );
    return this.service.userVideoContentMappings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserVideoContentMapping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userVideoContentMapping(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput
  ): Promise<UserVideoContentMapping | null> {
    const result = await this.service.userVideoContentMapping({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: UserVideoContentMapping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: UserVideoContentMappingUpdateInput,
  })
  async updateUserVideoContentMapping(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() data: UserVideoContentMappingUpdateInput
  ): Promise<UserVideoContentMapping | null> {
    try {
      return await this.service.updateUserVideoContentMapping({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: UserVideoContentMapping })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserVideoContentMapping(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput
  ): Promise<UserVideoContentMapping | null> {
    try {
      return await this.service.deleteUserVideoContentMapping({
        where: params,
        select: {
          createdAt: true,
          id: true,
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

  @common.Get("/:id/userId")
  @ApiNestedQuery(VideoContentFindManyArgs)
  async findUserId(
    @common.Req() request: Request,
    @common.Param() params: UserVideoContentMappingWhereUniqueInput
  ): Promise<VideoContent[]> {
    const query = plainToClass(VideoContentFindManyArgs, request.query);
    const results = await this.service.findUserId(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        mustWatchCount: true,
        name: true,
        rating: true,
        updatedAt: true,

        userVideoContentMapping: {
          select: {
            id: true,
          },
        },

        videoContentMapping: {
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

  @common.Post("/:id/userId")
  async connectUserId(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() body: VideoContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        connect: body,
      },
    };
    await this.service.updateUserVideoContentMapping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userId")
  async updateUserId(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() body: VideoContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        set: body,
      },
    };
    await this.service.updateUserVideoContentMapping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userId")
  async disconnectUserId(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() body: VideoContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        disconnect: body,
      },
    };
    await this.service.updateUserVideoContentMapping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/videoContentId")
  @ApiNestedQuery(VideoContentFindManyArgs)
  async findVideoContentId(
    @common.Req() request: Request,
    @common.Param() params: UserVideoContentMappingWhereUniqueInput
  ): Promise<VideoContent[]> {
    const query = plainToClass(VideoContentFindManyArgs, request.query);
    const results = await this.service.findVideoContentId(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        mustWatchCount: true,
        name: true,
        rating: true,
        updatedAt: true,

        userVideoContentMapping: {
          select: {
            id: true,
          },
        },

        videoContentMapping: {
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

  @common.Post("/:id/videoContentId")
  async connectVideoContentId(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() body: VideoContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videoContentId: {
        connect: body,
      },
    };
    await this.service.updateUserVideoContentMapping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/videoContentId")
  async updateVideoContentId(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() body: VideoContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videoContentId: {
        set: body,
      },
    };
    await this.service.updateUserVideoContentMapping({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/videoContentId")
  async disconnectVideoContentId(
    @common.Param() params: UserVideoContentMappingWhereUniqueInput,
    @common.Body() body: VideoContentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      videoContentId: {
        disconnect: body,
      },
    };
    await this.service.updateUserVideoContentMapping({
      where: params,
      data,
      select: { id: true },
    });
  }
}
