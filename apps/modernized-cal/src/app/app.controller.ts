import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppService } from "./app.service";
import { AppControllerBase } from "./base/app.controller.base";

@swagger.ApiTags("apps")
@common.Controller("apps")
export class AppController extends AppControllerBase {
  constructor(protected readonly service: AppService) {
    super(service);
  }
}
