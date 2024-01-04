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

import { MOVIE_TITLE_FIELD } from "../movie/MovieTitle";
import { SERIES_TITLE_FIELD } from "./SeriesTitle";
import { VIDEOCONTENT_TITLE_FIELD } from "../videoContent/VideoContentTitle";
import { USERSERIESMAPPING_TITLE_FIELD } from "../userSeriesMapping/UserSeriesMappingTitle";

export const SeriesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="descption" />
        <TextField label="Director" source="director" />
        <TextField label="ID" source="id" />
        <TextField label="Must Watch Count" source="mustWatchCount" />
        <TextField label="Name" source="name" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Series Mapping"
          source="userseriesmapping.id"
          reference="UserSeriesMapping"
        >
          <TextField source={USERSERIESMAPPING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Genre" target="seriesId" label="Genres">
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
