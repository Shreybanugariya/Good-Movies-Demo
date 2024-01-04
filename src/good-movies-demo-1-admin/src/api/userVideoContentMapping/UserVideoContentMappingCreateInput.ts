import { VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput } from "./VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput";

export type UserVideoContentMappingCreateInput = {
  userId?: VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput;
  videoContentId?: VideoContentCreateNestedManyWithoutUserVideoContentMappingsInput;
};
