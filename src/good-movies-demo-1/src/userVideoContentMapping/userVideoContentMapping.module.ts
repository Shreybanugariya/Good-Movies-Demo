import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserVideoContentMappingModuleBase } from "./base/userVideoContentMapping.module.base";
import { UserVideoContentMappingService } from "./userVideoContentMapping.service";
import { UserVideoContentMappingController } from "./userVideoContentMapping.controller";
import { UserVideoContentMappingResolver } from "./userVideoContentMapping.resolver";

@Module({
  imports: [UserVideoContentMappingModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserVideoContentMappingController],
  providers: [UserVideoContentMappingService, UserVideoContentMappingResolver],
  exports: [UserVideoContentMappingService],
})
export class UserVideoContentMappingModule {}
