import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { VideoContentTitle } from "../videoContent/VideoContentTitle";

export const UserVideoContentMappingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
