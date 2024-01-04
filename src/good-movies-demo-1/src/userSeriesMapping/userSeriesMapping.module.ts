import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserSeriesMappingModuleBase } from "./base/userSeriesMapping.module.base";
import { UserSeriesMappingService } from "./userSeriesMapping.service";
import { UserSeriesMappingController } from "./userSeriesMapping.controller";
import { UserSeriesMappingResolver } from "./userSeriesMapping.resolver";

@Module({
  imports: [UserSeriesMappingModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserSeriesMappingController],
  providers: [UserSeriesMappingService, UserSeriesMappingResolver],
  exports: [UserSeriesMappingService],
})
export class UserSeriesMappingModule {}
