import {ToastrService} from "../../services/toastr-service/toastr.service";
import {RouterAuthService} from "../../services/router-auth-service/router-auth.service";
import {AuthService} from "../../services/auth-service/auth.service";
import {AdminService} from "../../services/admin/admin.service";
import {QuestionsServiceService} from "../../services/questions-service/questions-service.service";

export const ProvidersExport = [
  ToastrService,
  RouterAuthService,
  AuthService,
  AdminService,
  QuestionsServiceService
];
