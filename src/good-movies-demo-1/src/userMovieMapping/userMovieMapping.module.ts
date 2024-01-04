import { Module } from "@nestjs/common";
import { UserMovieMappingModuleBase } from "./base/userMovieMapping.module.base";
import { UserMovieMappingService } from "./userMovieMapping.service";
import { UserMovieMappingController } from "./userMovieMapping.controller";
import { UserMovieMappingResolver } from "./userMovieMapping.resolver";

@Module({
  imports: [UserMovieMappingModuleBase],
  controllers: [UserMovieMappingController],
  providers: [UserMovieMappingService, UserMovieMappingResolver],
  exports: [UserMovieMappingService],
})
export class UserMovieMappingModule {}
