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
import { USERVIDEOCONTENTMAPPING_TITLE_FIELD } from "../userVideoContentMapping/UserVideoContentMappingTitle";

export const VideoContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VideoContents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
