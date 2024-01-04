import { Module } from "@nestjs/common";
import { UserVideoContentMappingModuleBase } from "./base/userVideoContentMapping.module.base";
import { UserVideoContentMappingService } from "./userVideoContentMapping.service";
import { UserVideoContentMappingController } from "./userVideoContentMapping.controller";
import { UserVideoContentMappingResolver } from "./userVideoContentMapping.resolver";

@Module({
  imports: [UserVideoContentMappingModuleBase],
  controllers: [UserVideoContentMappingController],
  providers: [UserVideoContentMappingService, UserVideoContentMappingResolver],
  exports: [UserVideoContentMappingService],
})
export class UserVideoContentMappingModule {}
