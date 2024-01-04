import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MOVIE_TITLE_FIELD } from "../movie/MovieTitle";
import { USERMOVIEMAPPING_TITLE_FIELD } from "../userMovieMapping/UserMovieMappingTitle";
import { USERSERIESMAPPING_TITLE_FIELD } from "../userSeriesMapping/UserSeriesMappingTitle";
import { SERIES_TITLE_FIELD } from "../series/SeriesTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="link" source="link" />
        <ReferenceField label="Movies" source="movie.id" reference="Movie">
          <TextField source={MOVIE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="User Movie Mapping"
          source="usermoviemapping.id"
          reference="UserMovieMapping"
        >
          <TextField source={USERMOVIEMAPPING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="User Movie Mappings"
          source="usermoviemapping.id"
          reference="UserMovieMapping"
        >
          <TextField source={USERMOVIEMAPPING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Username" source="username" />
        <TextField label="User Name" source="UserName" />
        <ReferenceField
          label="User Series Mapping"
          source="userseriesmapping.id"
          reference="UserSeriesMapping"
        >
          <TextField source={USERSERIESMAPPING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="webseries" source="series.id" reference="Series">
          <TextField source={SERIES_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
