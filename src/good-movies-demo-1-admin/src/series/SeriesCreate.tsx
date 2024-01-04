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
import { UserSeriesMappingTitle } from "../userSeriesMapping/UserSeriesMappingTitle";

export const SeriesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="descption" />
        <TextInput label="Director" source="director" />
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
          label="Must Watch Count"
          source="mustWatchCount"
        />
        <TextInput label="Name" source="name" />
        <NumberInput label="Rating" source="rating" />
        <ReferenceInput
          source="userSeriesMapping.id"
          reference="UserSeriesMapping"
          label="User Series Mapping"
        >
          <SelectInput optionText={UserSeriesMappingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
