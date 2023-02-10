console.log("cargando script congrats...")

const billID = document.getElementById("bill-id")
const billAmount = document.getElementById("bill-amount")
const billDate = document.getElementById("bill-date")
const billStatus = document.getElementById("bill-status")


const {invoice_id, invoice_date, invoice_status, invoice_total}= JSON.parse(window.localStorage.getItem("paymentInfo"));
window.localStorage.removeItem("paymentInfo");

billID.textContent = invoice_id;
billDate.textContent = invoice_date;
billStatus.textContent = invoice_status;
billAmount.textContent = invoice_total;
