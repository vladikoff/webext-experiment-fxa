browser.hello.fxa().then(message => {
    if (message &&  message.profileCache && message.profileCache.profile && message.profileCache.profile.avatar) {
      var imgz = document.createElement("img")
      imgz.src = message.profileCache.profile.avatar
      imgz.width = 100

      document.body.appendChild(imgz);
    }

    if (message &&  message.profileCache && message.profileCache.profile && message.profileCache.profile.email) {
      var newDiv = document.createElement("div");
      var newContent = document.createTextNode(message.profileCache.profile.email);
      newDiv.appendChild(newContent); //add the text node to the newly created div.

      document.body.appendChild(newDiv);
    }

  }
);

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("who")) {
    browser.hello.fxa().then(message => {
        let ident = JSON.stringify(message)
        console.log(ident);
        alert(ident)
      }
    );
  }

  if (e.target.classList.contains("login")) {
    var url = "https://oauth.accounts.firefox.com/v1/authorization?action=signin&scope=profile&state=foo%3AL2VuLVVTL2ZpcmVmb3gv&redirect_url=https%3A%2F%2Faddons.mozilla.org%2Fapi%2Fv3%2Faccounts%2Fauthenticate%2F&client_id=a4907de5fa9d78fc"
    var creating = browser.tabs.create({
      url: url
    });
  }
});
