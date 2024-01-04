import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MOVIE_TITLE_FIELD } from "../movie/MovieTitle";
import { SERIES_TITLE_FIELD } from "../series/SeriesTitle";
import { VIDEOCONTENT_TITLE_FIELD } from "../videoContent/VideoContentTitle";

export const GenreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Genres"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
