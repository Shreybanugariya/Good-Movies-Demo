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
import { SERIES_TITLE_FIELD } from "../series/SeriesTitle";
import { VIDEOCONTENT_TITLE_FIELD } from "./VideoContentTitle";
import { USERVIDEOCONTENTMAPPING_TITLE_FIELD } from "../userVideoContentMapping/UserVideoContentMappingTitle";

export const VideoContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Must Watch Count" source="mustWatchCount" />
        <TextField label="Name" source="name" />
        <TextField label="Rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Video Content Mapping"
          source="uservideocontentmapping.id"
          reference="UserVideoContentMapping"
        >
          <TextField source={USERVIDEOCONTENTMAPPING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="VideoContentMapping"
          source="uservideocontentmapping.id"
          reference="UserVideoContentMapping"
        >
          <TextField source={USERVIDEOCONTENTMAPPING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Genre"
          target="videoContentId"
          label="Genres"
        >
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
