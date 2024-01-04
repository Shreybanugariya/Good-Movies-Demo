import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MOVIE_TITLE_FIELD } from "./MovieTitle";
import { SERIES_TITLE_FIELD } from "../series/SeriesTitle";
import { VIDEOCONTENT_TITLE_FIELD } from "../videoContent/VideoContentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MovieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <ReferenceField label="Director" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Must watch count" source="mustWatchCount" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Genre" target="movieId" label="Genres">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="decription" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Movies" source="movie.id" reference="Movie">
              <TextField source={MOVIE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="Name" />
            <ReferenceField
              label="Web Series"
              source="series.id"
              reference="Series"
            >
              <TextField source={SERIES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Video Context"
              source="videocontent.id"
              reference="VideoContent"
            >
              <TextField source={VIDEOCONTENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
