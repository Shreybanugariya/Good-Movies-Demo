import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MovieTitle } from "../movie/MovieTitle";
import { SeriesTitle } from "../series/SeriesTitle";
import { VideoContentTitle } from "../videoContent/VideoContentTitle";

export const GenreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="decription" />
        <ReferenceInput source="movie.id" reference="Movie" label="Movies">
          <SelectInput optionText={MovieTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="Name" />
        <ReferenceInput
          source="series.id"
          reference="Series"
          label="Web Series"
        >
          <SelectInput optionText={SeriesTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="videoContent.id"
          reference="VideoContent"
          label="Video Context"
        >
          <SelectInput optionText={VideoContentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
