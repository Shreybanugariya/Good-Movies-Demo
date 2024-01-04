import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { MovieModule } from "./movie/movie.module";
import { GenreModule } from "./genre/genre.module";
import { SeriesModule } from "./series/series.module";
import { VideoContentModule } from "./videoContent/videoContent.module";
import { UserMovieMappingModule } from "./userMovieMapping/userMovieMapping.module";
import { UserSeriesMappingModule } from "./userSeriesMapping/userSeriesMapping.module";
import { UserVideoContentMappingModule } from "./userVideoContentMapping/userVideoContentMapping.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    MovieModule,
    GenreModule,
    SeriesModule,
    VideoContentModule,
    UserMovieMappingModule,
    UserSeriesMappingModule,
    UserVideoContentMappingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
