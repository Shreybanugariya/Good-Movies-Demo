import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { GenreTitle } from "../genre/GenreTitle";
import { UserSeriesMappingTitle } from "../userSeriesMapping/UserSeriesMappingTitle";

export const SeriesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="descption" />
        <ReferenceInput source="director.id" reference="User" label="Director">
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
    </Edit>
  );
};
