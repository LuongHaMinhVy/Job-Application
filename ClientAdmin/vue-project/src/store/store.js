import { createStore } from "vuex";
import userModule from "./modules/userManager.module";
import updateCarousel from "./modules/carouselManager.module.js";
import certificateModule from "./modules/certificateManager.module";
import adminCvModule from "./modules/cvManager.module";
import CVLanguageManagerModule from "./modules/CVLanguageManager.module";
import myEnterpriseModule from "./modules/myEnterprise.module";

const store = createStore({
  modules: {
    userModule,
    updateCarousel,
    certificateModule,
    adminCvModule,
    myEnterpriseModule,
    CVLanguageManagerModule,
  },
});
export default store;
