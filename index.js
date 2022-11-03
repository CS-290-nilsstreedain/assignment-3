/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Nils Streedain
 * Email: streedan@oregonstate.edu
 */
function toggleSellModal() {
	var elementsToToggle = ["sell-something-modal", "modal-backdrop"];
	elementsToToggle.forEach(e => document.getElementById(e).classList.toggle("hidden"));
	var inputsToClear = ["post-text-input", "post-photo-input", "post-price-input", "post-city-input"]
	inputsToClear.forEach(e => document.getElementById(e).value = "");
	document.getElementById("post-condition-new").checked = true;
}

function createPost() {
	var description = document.getElementById("post-text-input").value;
	var photo = document.getElementById("post-photo-input").value;
	var price = document.getElementById("post-price-input").value;
	var city = document.getElementById("post-city-input").value;
	var condition = document.querySelector('input[name="post-condition"]:checked').value;
	
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
	
	postInfoContainer.appendChild(Object.assign(document.createElement("a"), {className: "post-title",
		href: "#",
		textContent: description
	}));
	
	postInfoContainer.appendChild(Object.assign(document.createElement("span"), {className: "post-price",
		textContent: price
	}));
	
	postInfoContainer.appendChild(Object.assign(document.createElement("span"), {className: "post-city",
		textContent: `(${city})`
	}));
	
	posts.appendChild(post);
	toggleSellModal();
}

const listOfPosts = document.querySelectorAll(".post");
function filterPosts() {
	var text = document.getElementById("filter-text").value;
	var priceMin = document.getElementById("filter-min-price").value;
	var priceMax = document.getElementById("filter-max-price").value;
	var city = document.getElementById("filter-city").value;
	var conditionList = Array.from(document.querySelectorAll('input[name="filter-condition"]:checked'));
	
	for (var i = 0; i < listOfPosts.length; i++) {
		var textBool = listOfPosts[i].firstElementChild.lastElementChild.firstElementChild.textContent.includes(text);
		var priceMinBool = true;
		if (!(priceMin = ""))
			listOfPosts[i].dataset.price >= priceMin;

		var priceMaxBool = true;
		if (!(priceMax = ""))
			listOfPosts[i].dataset.price <= priceMax;

		var cityBool = true;
		if (!(city == ""))
			cityBool = (listOfPosts[i].dataset.city.toLowerCase() == city.toLowerCase());
		
		var conditionBool = true
		if (conditionList.length > 0)
			conditionBool = conditionList.some(e => e.value == listOfPosts[i].dataset.condition);
		
		listOfPosts[i].remove();
		if (textBool && priceMinBool && priceMaxBool && cityBool && conditionBool)
			posts.appendChild(listOfPosts[i]);
	}
}

var toggleButtons = ["sell-something-button", "modal-close", "modal-cancel"]
toggleButtons.forEach(e => document.getElementById(e).addEventListener("click", toggleSellModal));

document.getElementById("modal-accept").addEventListener("click", createPost);
document.getElementById("filter-update-button").addEventListener("click", filterPosts);
