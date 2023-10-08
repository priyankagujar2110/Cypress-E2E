const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },


  env: {
    baseurl: "https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569870%7Cb%7Ccreate%20new%20fb%20account%7C&placement=&creative=589460569870&keyword=create%20new%20fb%20account&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221432%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-30459477270%26loc_physical_ms%3D1007785%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwpompBhDZARIsAFD_Fp_HB2mBgpptF6Vaut3qk1SyImuOR6nSi7JRIRr4wYMOde_W8gc88lcaAq-5EALw_wcB"
  }



});
