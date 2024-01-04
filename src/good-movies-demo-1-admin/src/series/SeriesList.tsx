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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERSERIESMAPPING_TITLE_FIELD } from "../userSeriesMapping/UserSeriesMappingTitle";

export const SeriesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"webseries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="descption" />
        <ReferenceField label="Director" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
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
      </Datagrid>
    </List>
  );
};
