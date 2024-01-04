import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GenreTitle } from "../genre/GenreTitle";
import { UserVideoContentMappingTitle } from "../userVideoContentMapping/UserVideoContentMappingTitle";

export const VideoContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="itemPrice"
          reference="Genre"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GenreTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Must Watch Count"
          source="mustWatchCount"
        />
        <TextInput label="Name" source="name" />
        <NumberInput label="Rating" source="rating" />
        <ReferenceInput
          source="userVideoContentMapping.id"
          reference="UserVideoContentMapping"
          label="User Video Content Mapping"
        >
          <SelectInput optionText={UserVideoContentMappingTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="videoContentMapping.id"
          reference="UserVideoContentMapping"
          label="VideoContentMapping"
        >
          <SelectInput optionText={UserVideoContentMappingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
