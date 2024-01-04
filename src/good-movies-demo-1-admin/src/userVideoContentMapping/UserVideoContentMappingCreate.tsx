import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { VideoContentTitle } from "../videoContent/VideoContentTitle";

export const UserVideoContentMappingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="userId"
          reference="VideoContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoContentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="videoContentId"
          reference="VideoContent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoContentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
