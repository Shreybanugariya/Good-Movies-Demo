import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { MovieTitle } from "../movie/MovieTitle";
import { UserMovieMappingTitle } from "../userMovieMapping/UserMovieMappingTitle";
import { UserSeriesMappingTitle } from "../userSeriesMapping/UserSeriesMappingTitle";
import { SeriesTitle } from "../series/SeriesTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="link" source="link" />
        <ReferenceInput source="movies.id" reference="Movie" label="Movies">
          <SelectInput optionText={MovieTitle} />
        </ReferenceInput>
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
        <ReferenceInput
          source="webseries.id"
          reference="Series"
          label="webseries"
        >
          <SelectInput optionText={SeriesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
