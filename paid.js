const billID = document.getElementById("bill-id")
const billAmount = document.getElementById("bill-amount")
const billDate = document.getElementById("bill-date")
const billStatus = document.getElementById("bill-status")
const link = document.getElementById("link")

const {invoice_id, invoice_date, invoice_status, invoice_total}= JSON.parse(window.localStorage.getItem("paymentInfo"));
const workspaceId = window.localStorage.getItem("workspaceId");

window.localStorage.removeItem("paymentInfo");
window.localStorage.removeItem("workspaceId");

billID.textContent = invoice_id;
billDate.textContent = invoice_date;
billStatus.textContent = invoice_status;
billAmount.textContent = invoice_total;

const newUrl = `https://app.chatby.io/settings/accounts/${workspaceId}#/billing`
link.setAttribute("href", newUrl);