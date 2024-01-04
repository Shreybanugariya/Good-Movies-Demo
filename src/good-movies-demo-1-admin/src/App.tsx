import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MovieList } from "./movie/MovieList";
import { MovieCreate } from "./movie/MovieCreate";
import { MovieEdit } from "./movie/MovieEdit";
import { MovieShow } from "./movie/MovieShow";
import { GenreList } from "./genre/GenreList";
import { GenreCreate } from "./genre/GenreCreate";
import { GenreEdit } from "./genre/GenreEdit";
import { GenreShow } from "./genre/GenreShow";
import { SeriesList } from "./series/SeriesList";
import { SeriesCreate } from "./series/SeriesCreate";
import { SeriesEdit } from "./series/SeriesEdit";
import { SeriesShow } from "./series/SeriesShow";
import { VideoContentList } from "./videoContent/VideoContentList";
import { VideoContentCreate } from "./videoContent/VideoContentCreate";
import { VideoContentEdit } from "./videoContent/VideoContentEdit";
import { VideoContentShow } from "./videoContent/VideoContentShow";
import { UserMovieMappingList } from "./userMovieMapping/UserMovieMappingList";
import { UserMovieMappingCreate } from "./userMovieMapping/UserMovieMappingCreate";
import { UserMovieMappingEdit } from "./userMovieMapping/UserMovieMappingEdit";
import { UserMovieMappingShow } from "./userMovieMapping/UserMovieMappingShow";
import { UserSeriesMappingList } from "./userSeriesMapping/UserSeriesMappingList";
import { UserSeriesMappingCreate } from "./userSeriesMapping/UserSeriesMappingCreate";
import { UserSeriesMappingEdit } from "./userSeriesMapping/UserSeriesMappingEdit";
import { UserSeriesMappingShow } from "./userSeriesMapping/UserSeriesMappingShow";
import { UserVideoContentMappingList } from "./userVideoContentMapping/UserVideoContentMappingList";
import { UserVideoContentMappingCreate } from "./userVideoContentMapping/UserVideoContentMappingCreate";
import { UserVideoContentMappingEdit } from "./userVideoContentMapping/UserVideoContentMappingEdit";
import { UserVideoContentMappingShow } from "./userVideoContentMapping/UserVideoContentMappingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Good Movies Demo 1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Movie"
          list={MovieList}
          edit={MovieEdit}
          create={MovieCreate}
          show={MovieShow}
        />
        <Resource
          name="Genre"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
          show={GenreShow}
        />
        <Resource
          name="Series"
          list={SeriesList}
          edit={SeriesEdit}
          create={SeriesCreate}
          show={SeriesShow}
        />
        <Resource
          name="VideoContent"
          list={VideoContentList}
          edit={VideoContentEdit}
          create={VideoContentCreate}
          show={VideoContentShow}
        />
        <Resource
          name="UserMovieMapping"
          list={UserMovieMappingList}
          edit={UserMovieMappingEdit}
          create={UserMovieMappingCreate}
          show={UserMovieMappingShow}
        />
        <Resource
          name="UserSeriesMapping"
          list={UserSeriesMappingList}
          edit={UserSeriesMappingEdit}
          create={UserSeriesMappingCreate}
          show={UserSeriesMappingShow}
        />
        <Resource
          name="UserVideoContentMapping"
          list={UserVideoContentMappingList}
          edit={UserVideoContentMappingEdit}
          create={UserVideoContentMappingCreate}
          show={UserVideoContentMappingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
