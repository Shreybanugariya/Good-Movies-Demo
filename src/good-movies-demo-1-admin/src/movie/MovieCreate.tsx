import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { GenreTitle } from "../genre/GenreTitle";

export const MovieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="Director.id" reference="User" label="Director">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="genre"
          reference="Genre"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GenreTitle} />
        </ReferenceArrayInput>
        <NumberInput
          step={1}
          label="Must watch count"
          source="mustWatchCount"
        />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
