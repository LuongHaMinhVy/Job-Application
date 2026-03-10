import { createStore } from "vuex";
import userModule from "./modules/user/user.module";
import certificateModule from "./modules/user/certificates.module";
import interviewModule from "./modules/user/interview.module";
import jobModule from "./modules/Company/job.module";
import userCertificateModule from "./modules/user/userCerificate.module";

import enterprise from "./modules/Company/enterprise.module";
import cvmodule from "./modules/user/cv.module";
import adminCvModule from "./modules/admin/adminCv.module";
import myEnterprise from "./modules/Company/myEnterprise.module"
const store = createStore({
  modules: {
    userModule,
    certificateModule,
    userCertificateModule,
    jobModule,
    cvmodule,
    interviewModule,
    enterprise,
    adminCvModule,
    myEnterprise
  },
});
export default store;
