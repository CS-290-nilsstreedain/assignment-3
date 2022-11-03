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
	document.getElementById("post-text-input").value = "";
	document.getElementById("post-photo-input").value = "";
	document.getElementById("post-price-input").value = "";
	document.getElementById("post-city-input").value = "";
	document.getElementById("post-condition-new").checked = true;
}

function createPost() {
	var description = document.getElementById("post-text-input").value;
	var photo = document.getElementById("post-photo-input").value;
	var price = document.getElementById("post-price-input").value;
	var city = document.getElementById("post-city-input").value;
	var condition = document.querySelector('input[name="post-condition"]:checked').getAttribute("id").split('-')[2];
	
	if (!description || !photo || !price || !city || !condition) {
		alert("Please fill out all required fields.");
		return;
	}
		
	var post = Object.assign(document.createElement("div"), {className: "post"});
		post.dataset.price = price;
		post.dataset.city = city;
		post.dataset.condition = condition;
	
	var postContents = Object.assign(document.createElement("div"), {className: "post-conents"});
		post.appendChild(postContents);
	
	var postImageContainer = Object.assign(document.createElement("div"), {className: "post-image-container"});
		postContents.appendChild(postImageContainer);
	
	postImageContainer.appendChild(Object.assign(document.createElement("img"), {
		src: photo,
		alt: description
	}));
	
	var postInfoContainer = Object.assign(document.createElement("div"), {className: "post-info-container"});
		postContents.appendChild(postInfoContainer);
	
	postInfoContainer.appendChild(Object.assign(document.createElement("a"), {
		className: "post-title",
		href: "#",
		textContent: description
	}));
	
	postInfoContainer.appendChild(Object.assign(document.createElement("span"), {
		className: "post-price",
		textContent: price
	}));
	
	postInfoContainer.appendChild(Object.assign(document.createElement("span"), {
		className: "post-city",
		textContent: `(${price})`
	}));
	
	posts.appendChild(post);
	toggleSellModal();
}

document.getElementById("sell-something-button").addEventListener("click", toggleSellModal);
document.getElementById("modal-close").addEventListener("click", toggleSellModal);
document.getElementById("modal-cancel").addEventListener("click", toggleSellModal);

document.getElementById("modal-accept").addEventListener("click", createPost);
