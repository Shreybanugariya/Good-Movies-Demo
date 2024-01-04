import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserMovieMappingTitle } from "../userMovieMapping/UserMovieMappingTitle";
import { UserSeriesMappingTitle } from "../userSeriesMapping/UserSeriesMappingTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="link" source="link" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="userMovieMapping.id"
          reference="UserMovieMapping"
          label="User Movie Mapping"
        >
          <SelectInput optionText={UserMovieMappingTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userMovieMappings.id"
          reference="UserMovieMapping"
          label="User Movie Mappings"
        >
          <SelectInput optionText={UserMovieMappingTitle} />
        </ReferenceInput>
        <TextInput label="Username" source="username" />
        <TextInput label="User Name" source="UserName" />
        <ReferenceInput
          source="userSeriesMapping.id"
          reference="UserSeriesMapping"
          label="User Series Mapping"
        >
          <SelectInput optionText={UserSeriesMappingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
