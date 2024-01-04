import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USERVIDEOCONTENTMAPPING_TITLE_FIELD } from "./UserVideoContentMappingTitle";

export const UserVideoContentMappingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="VideoContent"
          target="userVideoContentMappingId"
          label="VideoContents"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="VideoContent"
          target="videoContentMappingId"
          label="VideoContents"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
