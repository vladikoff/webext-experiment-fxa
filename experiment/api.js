const {classes: Cc, interfaces: Ci, results: Cr, utils: Cu} = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/FxAccounts.jsm");
dump(fxAccounts)
class API extends ExtensionAPI {
  getAPI(context) {
    return {
      hello: {
        async fxa() {
          return fxAccounts.getSignedInUser();
        }
      }
    };
  }
}
