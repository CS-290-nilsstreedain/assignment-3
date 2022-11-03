/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Nils Streedain
 * Email: streedan@oregonstate.edu
 */
function toggleSellModal() {
	document.getElementById("sell-something-modal").classList.toggle("hidden");
	document.getElementById("modal-backdrop").classList.toggle("hidden");
	document.querySelectorAll("input").forEach(input => input.value = "");
}

document.getElementById("sell-something-button").addEventListener("click", toggleSellModal);
document.getElementById("modal-close").addEventListener("click", toggleSellModal);
