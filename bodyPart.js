const formattedData = [];
let selectedData = [];
let comparecounter = 0;

//creating div using functions
function createDiv() {
  // Create a new div element
  return document.createElement("div");
}
//creating some random number to the add to cart id so that for each loop we will get different id .
function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

// creating a div element of class 'container' which is a child of body
const containerdiv = createDiv();
containerdiv.classList.add('container');
document.body.appendChild(containerdiv);



// fetch data from productJSON
//for left hand side img
productJSON1.forEach(product => {
  const imgurl = product.image.url;
  const imgwidth = product.image.width;
  const imgheight = product.image.height;
  const imgalt = product.image.alt;
  const title = product.title;
  formattedData.push({ title, imgurl });


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

  // add to cart
  const boxdiv = createDiv();
  boxdiv.classList.add('Box');
  phoneimgdiv.appendChild(boxdiv);
  //crerate a elements for Add to cart 
  const checkboxdiv1 = createDiv();
  checkboxdiv1.classList.add('Checkbox');
  boxdiv.appendChild(checkboxdiv1);
  //create checkbox
  const input1 = document.createElement('input');
  input1.type = 'checkbox';
  input1.id = `AddToCart_${getRandomNumber()}`;
  checkboxdiv1.appendChild(input1);
  // create lable Add to cart
  const label1 = document.createElement('label');
  label1.for = "AddToCart";
  label1.textContent = 'Add To Cart';
  checkboxdiv1.appendChild(label1);

  // ----------------------------------------
  //add to compare 

  //create a elements for Add to cart 
  const checkboxdiv2 = createDiv();
  checkboxdiv2.classList.add('Checkbox');
  boxdiv.appendChild(checkboxdiv2);
  //create checkbox
  const input2 = document.createElement('input');
  input2.type = 'checkbox';
  input2.classList.add("compare-checkbox");
  input2.id = `AddToCompare_${getRandomNumber()}`;
  input2.addEventListener('change', updateCount);
  checkboxdiv2.appendChild(input2);
  // create lable Add to compare
  const label2 = document.createElement('label');
  label2.htmlFor = `AddToCompare`;
  label2.textContent = ' Add To Compare';
  checkboxdiv2.appendChild(label2);





});

//adding function to checkbox
function updateCount() {
  var checkBox = this;
  var checkBoxId = checkBox.id;
  if (checkBox.checked) {
    // Increment counter and update compare box

    comparecounter++;
    updateCompareBox();

  } else {
    // Decrement counter and update compare box

    comparecounter--;
    updateCompareBox();

  }
}
// Function to update the compare box based on the counter
function updateCompareBox() {
  const compareboxdiv = document.querySelector('.comparebox');
  if (comparecounter > 0) {
    // Enable compare box and update the number
    if (!compareboxdiv) {
      // if Compare box doesn't exist: create it
      createCompareBox();
    } else {
      // Compare box exists: update the number

      updateCompareNumber();
    }
  } else {
    // Disable compare box
    if (compareboxdiv) {
      // Compare box exists: remove it

      compareboxdiv.remove();
    }
  }
}

//functiopn to create the compare box when the items are checked to compare
function createCompareBox() {
  const compareboxdiv = createDiv();
  compareboxdiv.classList.add('comparebox');
  document.body.appendChild(compareboxdiv);

  // compare text
  const textdiv = createDiv();
  textdiv.classList.add('text');
  textdiv.textContent = 'Compare';
  compareboxdiv.appendChild(textdiv);

  // number
  const numberspan = document.createElement('span');
  numberspan.classList.add('number');
  numberspan.textContent = comparecounter;
  textdiv.appendChild(numberspan);
}
// Function to update the compare number
function updateCompareNumber() {
  const numberspan = document.querySelector(' .number');
  if (numberspan) {
    numberspan.textContent = comparecounter;
  }
}
// -----------------------------------------------------

//product cards
const productCardsDiv = createDiv();
productCardsDiv.classList.add("product-cards");

containerdiv.appendChild(productCardsDiv);


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
    compareboxdiv.classList.add("show");
    productJSON1.forEach((product) => {
      const widgetdiv = createDiv();
      widgetdiv.classList.add("widget");
      document.body.appendChild(widgetdiv);
      //create a image div 
      const imagediv = createDiv();
      imagediv.classList.add("image");
      widgetdiv.appendChild(imagediv);
      //create a img tag 

      const imgofwidget = document.createElement('img');
      var iphone = product.imgurl;
      imgofwidget.src = iphone;
      imgofwidget.alt = 'Loading';
      imagediv.appendChild(imgofwidget);
      //create a title 
      const titlediv = createDiv();
      titlediv.classList.add("title");
      var titletext = product.title;
      titlediv.textContent = titletext;
      imagediv.appendChild(titlediv);

      
    });
  } else {
    compareboxdiv.classList.remove("show");
  }

  compareboxdiv.textContent = `COMPARE ${selectedData.length}`;
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
    const widgetdiv = createDiv();
      widgetdiv.classList.add("widget");
      document.body.appendChild(widgetdiv);
    widgetdiv.dataset.index = index;
    //create a image div 
    const imagediv = createDiv();
    imagediv.classList.add("image");
    imagediv.dataset.index = index;
    widgetdiv.appendChild(imagediv);
    //create a img tag 

    const imgofwidget = document.createElement('img');
    imgofwidget.src = formattedData[index].imgurl;
    imgofwidget.alt = 'Loading';
    imagediv.appendChild(imgofwidget);
    //create a title 
    const titlediv = createDiv();
    titlediv.classList.add("title");
    titlediv.textContent = formattedData[index].title;
    imagediv.appendChild(titlediv);

    
  } else {
    selectedData = selectedData.filter((data) => data.index !== index);
    // Remove the product card from the main container
    const cardToRemove = document.querySelector(
      `.widget[data-index="${index}"]`
    );
    if (cardToRemove) {
      widgetdiv.removeChild(cardToRemove);
    }
  }

  updateCompareButton();
}

// Function to update the compare button state
function updateCompareButton() {
  if (selectedData.length > 0) {
    compareboxdiv.classList.add("show");
  } else {
    compareboxdiv.classList.remove("show");
  }

  compareboxdiv.textContent = `COMPARE ${selectedData.length}`;
}

