import * as graphql from "@nestjs/graphql";
import { AppResolverBase } from "./base/app.resolver.base";
import { App } from "./base/App";
import { AppService } from "./app.service";

@graphql.Resolver(() => App)
export class AppResolver extends AppResolverBase {
  constructor(protected readonly service: AppService) {
    super(service);
  }
}
