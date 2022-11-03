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

function createPost() {
	var post = Object.assign(document.createElement("div"), {className: "post"});
	post.dataset.price = document.getElementById("post-price-input").value;
	post.dataset.city = document.getElementById("post-city-input").value;
	post.dataset.condition = document.querySelector('input[name="post-condition"]:checked').getAttribute("id").split('-')[2];
	
	var postContents = Object.assign(document.createElement("div"), {className: "post-conents"});
	post.appendChild(postContents);
	
	var postImageContainer = Object.assign(document.createElement("div"), {className: "post-image-container"});
	postContents.appendChild(postImageContainer);
	
	postImageContainer.appendChild(Object.assign(document.createElement("img"), {
		src: document.getElementById("post-photo-input").value,
		alt: document.getElementById("post-text-input").value
	}));
	
	var postInfoContainer = Object.assign(document.createElement("div"), {className: "post-info-container"});
	postContents.appendChild(postInfoContainer);
	
	postInfoContainer.appendChild(Object.assign(document.createElement("a"), {
		className: "post-title",
		href: "#",
		textContent: document.getElementById("post-text-input").value
	}));
	
	postInfoContainer.appendChild(Object.assign(document.createElement("span"), {
		className: "post-price",
		textContent: document.getElementById("post-price-input").value
	}));
	
	postInfoContainer.appendChild(Object.assign(document.createElement("span"), {
		className: "post-city",
		textContent: `(${document.getElementById("post-city-input").value})`
	}));
	
	posts.appendChild(post);
	
	toggleSellModal();
}

document.getElementById("sell-something-button").addEventListener("click", toggleSellModal);
document.getElementById("modal-close").addEventListener("click", toggleSellModal);
document.getElementById("modal-cancel").addEventListener("click", toggleSellModal);

document.getElementById("modal-accept").addEventListener("click", createPost);
