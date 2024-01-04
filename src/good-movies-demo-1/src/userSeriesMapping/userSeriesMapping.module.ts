import { Module } from "@nestjs/common";
import { UserSeriesMappingModuleBase } from "./base/userSeriesMapping.module.base";
import { UserSeriesMappingService } from "./userSeriesMapping.service";
import { UserSeriesMappingController } from "./userSeriesMapping.controller";
import { UserSeriesMappingResolver } from "./userSeriesMapping.resolver";

@Module({
  imports: [UserSeriesMappingModuleBase],
  controllers: [UserSeriesMappingController],
  providers: [UserSeriesMappingService, UserSeriesMappingResolver],
  exports: [UserSeriesMappingService],
})
export class UserSeriesMappingModule {}
