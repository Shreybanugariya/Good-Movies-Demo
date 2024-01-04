import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserMovieMappingModuleBase } from "./base/userMovieMapping.module.base";
import { UserMovieMappingService } from "./userMovieMapping.service";
import { UserMovieMappingController } from "./userMovieMapping.controller";
import { UserMovieMappingResolver } from "./userMovieMapping.resolver";

@Module({
  imports: [UserMovieMappingModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserMovieMappingController],
  providers: [UserMovieMappingService, UserMovieMappingResolver],
  exports: [UserMovieMappingService],
})
export class UserMovieMappingModule {}
