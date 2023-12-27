const formattedData = [];
let selectedData = [];

//creating div using functions
function createDiv() {
  // Create a new div element
  return document.createElement("div");
}
// creating a div element of class 'container' which is a child of body
const containerdiv = createDiv();
containerdiv.classList.add('container');
document.body.appendChild(containerdiv);
//adding functionality for Add to compare
let compareCount = parseInt(localStorage.getItem("compareCount")) || 0;

// Function to update the compare count 
const updateCompareCount = () => {
  if (compareCount >= 0) {
    localStorage.setItem("compareCount", compareCount);
    compareBtn.textContent = `COMPARE (${compareCount})`;
  } else {
    compareCount = 0;
  }
};
// fetch data from productJSON
//for left hand side img
productJSON1.forEach(product => {
  const imgurl = product.image.url;
  const imgwidth = product.image.width;
  const imgheight = product.image.height;
  const imgalt = product.image.alt;
  const title = product.title;

  // creating element div with class Items as a child of containerdiv
  var itemsdiv = createDiv();
  itemsdiv.classList.add('Items');
  containerdiv.appendChild(itemsdiv);

  // creating element div with class phoneimg as a child of itemsdiv
  var phoneimgdiv = createDiv();
  phoneimgdiv.classList.add('phoneimg');
  itemsdiv.appendChild(phoneimgdiv);

  // creating an img and appending it to phoneimgdiv
  var img = document.createElement('img');
  img.src = imgurl;
  img.alt = imgalt;
  img.width = imgwidth;
  img.height = imgheight;
  phoneimgdiv.appendChild(img);

  //creating a hr 
  var LineStylehr = document.createElement('hr');
  LineStylehr.classList.add('LineStyle');
  containerdiv.appendChild(LineStylehr);
  // Log the title for debugging
  // console.log(title);

  // creating a div with class productInfo -child of  itemsdiv
  var productInfodiv = createDiv();
  productInfodiv.classList.add('ProductInfo');
  itemsdiv.appendChild(productInfodiv);
  // creating a div with class ItemName -child of productInfodiv
  var itemNamediv = createDiv();
  itemNamediv.classList.add('ItemName');
  // itemNamediv.textContent=title;

  var anchor = document.createElement('a');
  let pageurl = product.productPageLink.url;
  anchor.href = pageurl;
  anchor.textContent = title;
  itemNamediv.appendChild(anchor);
  productInfodiv.appendChild(itemNamediv);

  // creating a div with class Ratings -child of productInfodiv
  var ratingsdiv = createDiv();
  ratingsdiv.classList.add('Ratings');
  productInfodiv.appendChild(ratingsdiv);

  // creating a div with class RatingPill -child of ratingsdiv
  const overallRating = product.ratings.overallRating;
  var ratingPilldiv = createDiv();
  ratingPilldiv.classList.add('RatingPill');
  ratingPilldiv.textContent = overallRating;
  ratingsdiv.appendChild(ratingPilldiv);
  // console.log(overallRating);

  // creating a span with class Star -child of ratingpill
  var starSpan = document.createElement('span');
  starSpan.classList.add('Star');
  ratingPilldiv.appendChild(starSpan);
  // creating a i with class fa-solid fa-star -child of starSpan
  var i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-star');
  starSpan.appendChild(i);
  // creating a div with class RatingCount -child of ratingsdiv
  var ratingCountdiv = createDiv();
  ratingCountdiv.classList.add('RatingCount');
  const totalRatingsNum = product.ratings.totalRatingsNum;
  const totalReviewsNum = product.ratings.totalReviewsNum;
  ratingCountdiv.textContent = totalRatingsNum + " " + "Ratings" + " " + "&" + totalReviewsNum + " " + "Reviews";
  ratingsdiv.appendChild(ratingCountdiv);
  //creating div of Devicefeatures -child of productInfodiv
  var deviceFeaturesdiv = createDiv();
  deviceFeaturesdiv.classList.add('DeviceFeatures');
  productInfodiv.appendChild(deviceFeaturesdiv);
  //createul element child  of deviceFeaturesdiv
  var ul = document.createElement('ul');
  deviceFeaturesdiv.appendChild(ul);
  //inside ul li 
  let featureList = product.featuresList;
  // iterate this featureList items to get into each li 
  featureList.forEach((list) => {
    var li = document.createElement('li');
    li.textContent = list;
    ul.appendChild(li);
  });
  // creating a div with class PricingInfo -child of  itemsdiv
  var pricingInfodiv = createDiv();
  pricingInfodiv.classList.add('PricingInfo');
  itemsdiv.appendChild(pricingInfodiv);
  //creating div of class saleprice -child of pricingInfodiv 
  let mrp = product.price.mrp;
  var SalePricediv = createDiv();
  SalePricediv.classList.add('SalePrice');
  SalePricediv.textContent = 'Rs.' + ' ' + mrp;
  pricingInfodiv.appendChild(SalePricediv);
  //creating a div with mrpdiscount class
  var MrpDisountdiv = createDiv();
  MrpDisountdiv.classList.add('MrpDisount');
  pricingInfodiv.appendChild(MrpDisountdiv);

  //creating a div with mrp class
  var mrpdiv = createDiv();
  mrpdiv.classList.add('Mrp');
  let finalPrice = product.price.finalPrice;
  mrpdiv.textContent = finalPrice;
  MrpDisountdiv.appendChild(mrpdiv);

  //creating a div with discount class
  var disountdiv = createDiv();
  disountdiv.classList.add('Discount');
  let discountData = product.price.discount.data;
  disountdiv.textContent = discountData + '%' + ' ' + 'off';
  MrpDisountdiv.appendChild(disountdiv);

  //creating a div of class DeliveryInfo-child of pricingInfodiv
  var deliveryInfodiv = createDiv();
  deliveryInfodiv.classList.add('DeliveryInfo');
  let deliverstatus = product.freeDelivery;
  // checking deliverystatus
  if (deliverstatus) {
    deliveryInfodiv.textContent = 'Free Delivery';
  }
  else {
    deliveryInfodiv.textContent = 'Delivery charges may apply';

  }
  pricingInfodiv.appendChild(deliveryInfodiv);

  //creating a div of ExchangeInfo class-child of pricingInfodiv
  var exchangeInfodiv = createDiv();
  exchangeInfodiv.classList.add('ExchangeInfo');
  let exchangeOfferDiscount = product.exchangeOfferDiscount.data;
  exchangeInfodiv.textContent = "Upto" + " " + "Rs." + " " + exchangeOfferDiscount;
  pricingInfodiv.appendChild(exchangeInfodiv);
  //creating span inside exchangeInfodiv
  var exchangespan = document.createElement('span');
  exchangespan.classList.add('Exchange');
  exchangespan.textContent = "off on Exchange";
  exchangeInfodiv.appendChild(exchangespan);

  //creating a div of OffersInfo class-child of pricingInfodiv
  var offersInfodiv = createDiv();
  offersInfodiv.classList.add('OffersInfo');
  // Check if product.bankOffersLink exists before accessing its properties
  if (product.bankOffersLink) {
    let bankOffersButtonText = product.bankOffersLink.buttonText;
    offersInfodiv.textContent = bankOffersButtonText;
  } else {
    offersInfodiv.textContent = "No Offers Available"; // or any default text
  }

  pricingInfodiv.appendChild(offersInfodiv);


  //comapre

  // creating div with class box which is child of phoneimgdiv
  const CheckBoxes = createDiv();
  CheckBoxes.classList.add("check-boxes");
  itemsdiv.appendChild(CheckBoxes);

  const addToCart = createDiv();
  addToCart.classList.add("addToCart");
  CheckBoxes.appendChild(addToCart);

  const addToCompare = createDiv();
  addToCompare.classList.add("addToCompare");
  CheckBoxes.appendChild(addToCompare);
  // Create checkbox for "Add to Cart"
  const addToCartCheckbox = document.createElement("input");
  addToCartCheckbox.type = "checkbox";
  addToCartCheckbox.id = "addToCartCheckbox";
  addToCart.appendChild(addToCartCheckbox);

  // Create label for "Add to Cart" checkbox
  const addToCartLabel = document.createElement("label");
  addToCartLabel.textContent = "Add to Cart";
  addToCartLabel.htmlFor = "addToCartCheckbox";
  addToCart.appendChild(addToCartLabel);

  // Create checkbox for "Add to Compare"
  const addToCompareCheckbox = document.createElement("input");
  addToCompareCheckbox.type = "checkbox";
  addToCompareCheckbox.classList.add("compare-checkbox");

  addToCompareCheckbox.id = `addToCompareCheckbox_${compareCount}`;
  addToCompare.appendChild(addToCompareCheckbox);

  // Create label for "Add to Compare" checkbox
  const addToCompareLabel = document.createElement("label");
  addToCompareLabel.textContent = "Add to Compare";
  addToCompareLabel.htmlFor = `addToCompareCheckbox_${compareCount}`;
  addToCompare.appendChild(addToCompareLabel);
  // Add event listener for the "Add to Compare" checkbox
  addToCompareCheckbox.addEventListener("change", () => {
    if (addToCompareCheckbox.checked) {
      compareCount++;
    } else {
      compareCount = Math.max(0, compareCount - 1);
    }
    updateCompareCount();
  });
});

// COMPARE button
const compareBtn = document.createElement("button");
compareBtn.classList.add("compare-btn");
containerdiv.appendChild(compareBtn);

compareBtn.textContent = `COMPARE ${0}`;

// product cards
const productCardsDiv = createDiv();
productCardsDiv.classList.add("product-cards");

containerdiv.appendChild(productCardsDiv);

// const showCompareButton = function () {
//   [product.title, product.image.url];
// };

const checkboxes = document.querySelectorAll(".compare-checkbox");

// handle checkbox state change
function handleCheckboxChange(event, index) {
  const checkbox = event.target;

  if (checkbox.checked) {
    selectedData.push({ ...formattedData[index], index });
  } else {
    selectedData = selectedData.filter((data) => data.index != index);
  }

  updateCompareButton();
}
// update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareBtn.classList.add("show");
    productJSON1.forEach((product) => {
      // Create a div element for each product
      const productCardDiv = createDiv();
      productCardDiv.classList.add("product-card");

      // Add product details to the card
      const title = document.createElement("h6");
      const cardImg = document.createElement("img");

      title.textContent = product.title;
      productCardDiv.appendChild(title);

      cardImg.src = product.image.url;

      productCardDiv.appendChild(cardImg);

      productCardsDiv.appendChild(productCardDiv);
    });
  } else {
    compareBtn.classList.remove("show");
  }

  compareBtn.textContent = `COMPARE ${selectedData.length}`;
}

// Add event listener to each checkbox
checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", (e) => handleCheckboxChange(e, index));
});

// Function to handle checkbox state change
function handleCheckboxChange(event, index) {
  const checkbox = event.target;

  if (checkbox.checked) {
    selectedData.push({ ...formattedData[index], index });
    // Create a div element for each product card
    const productCardDiv = createDiv();
    productCardDiv.classList.add("product-card");
    productCardDiv.dataset.index = index;

    // product card details
    const title = document.createElement("h6");
    const cardImg = document.createElement("img");

    title.textContent = formattedData[index].title;
    title.style.fontWeight = 400;
    cardImg.src = formattedData[index].imageUrl;

    productCardDiv.appendChild(cardImg);
    productCardDiv.appendChild(title);

    productCardsDiv.appendChild(productCardDiv);
  } else {
    selectedData = selectedData.filter((data) => data.index !== index);
    // Remove the product card from the main container
    const cardToRemove = document.querySelector(
      `.product-card[data-index="${index}"]`
    );
    if (cardToRemove) {
      productCardsDiv.removeChild(cardToRemove);
    }
  }

  updateCompareButton();
}

// Function to update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareBtn.classList.add("show");
  } else {
    compareBtn.classList.remove("show");
  }

  compareBtn.textContent = `COMPARE ${selectedData.length}`;
}








