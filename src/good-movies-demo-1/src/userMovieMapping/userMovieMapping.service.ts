import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserMovieMappingServiceBase } from "./base/userMovieMapping.service.base";

@Injectable()
export class UserMovieMappingService extends UserMovieMappingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
