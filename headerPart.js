// Creating a header tag
var headerTag = document.createElement('header');
document.body.appendChild(headerTag);

// Creating a div with class "head" and appending it to the header
var headDiv = document.createElement('div');
headDiv.classList.add('head');
headerTag.appendChild(headDiv);

// Creating a div with class "contents" and appending it to the "head" div
var contentDiv = document.createElement('div');
contentDiv.classList.add('contents');
headDiv.appendChild(contentDiv);

// Creating a div with class "logo" and appending it to the "contents" div
var logoDiv = document.createElement('div');
logoDiv.classList.add('logo');
contentDiv.appendChild(logoDiv);

// Creating an img element and appending it to the "logo" div
var img = document.createElement('img');
img.src = 'flip.png';
img.alt = 'logo';
logoDiv.appendChild(img);

// Creating a div with id "searchbox" and appending it to the "contents" div
var searchBoxDiv = document.createElement('div');
searchBoxDiv.id = 'searchbox';
contentDiv.appendChild(searchBoxDiv);

// Creating an input element with class "SearchStyle" and appending it to the "searchbox" div
var input = document.createElement('input');
input.classList.add('SearchStyle');
input.type = 'search';
input.title = 'Search';
input.name = 'SearchBar';
input.placeholder = 'Search';
searchBoxDiv.appendChild(input);

// Creating a span element with id "seller" and appending it to the "contents" div
var sellerSpan = document.createElement('span');
sellerSpan.id = 'seller';
sellerSpan.textContent = 'Become a Seller';
contentDiv.appendChild(sellerSpan);

// Creating a span element with id "cart" and appending it to the "contents" div
var cartSpan = document.createElement('span');
cartSpan.id = 'cart';
cartSpan.textContent = 'Cart';
contentDiv.appendChild(cartSpan);
