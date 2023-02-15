const link = document.getElementById("link")

const workspaceId = window.localStorage.getItem("workspaceId");
window.localStorage.removeItem("workspaceId");

const newUrl = `https://app.chatby.io/settings/accounts/${workspaceId}#/billing`
link.setAttribute("href", newUrl);