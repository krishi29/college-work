/** Add any JavaScript you need to this file. */
window.onload = setupPage;

function setupPage() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    showAllProducts();
}

function plusSlides(productId) {
    var activeIdx = getCurrentCarouselIdx(productId);
    showSlides(productId, (activeIdx + 1));
}

function prevSlide(productId) {
    var activeIdx = getCurrentCarouselIdx(productId);
    var nextIdx = activeIdx - 1;
    if(nextIdx === -1){
        nextIdx = 2;
    }
    showSlides(productId, nextIdx);
}

function showSlides(productId, n) {
    var carousel = document.getElementById(productId+"-carousel");
    var images = carousel.getElementsByTagName("IMG");
    if(images.length === 1){
        return;
    }else{
        n=n%images.length;
    }
    for (let element of images) {
        element.setAttribute("class", "inactiveimage");
    }
    images[n].setAttribute("class", "activeimage");

    var dots = document.getElementById(productId+"-dots").getElementsByTagName("SPAN");
    for (let element of dots) {
        if(element.getAttribute("class")){
            element.setAttribute("class", "dot");
        }
    }
    dots[n].setAttribute("class", dots[n].getAttribute("class") + " activedot") ;
}

function getCurrentCarouselIdx(productId){
    var carousel = document.getElementById(productId +"-carousel");
    var images = carousel.getElementsByTagName("IMG");
    
    var activeIdx = 0;
    for (let element of images) {
        if(element.className === 'activeimage'){
            break;
        }
        activeIdx++;
    }

    return activeIdx;
}

function showAllProducts(){

    var productsDiv = document.getElementById("products");

    console.log("my productdiv id is: " + productsDiv.id);
    console.log("my product div id is " + productsDiv.getAttribute("class"));

    var i =0;
    for(i=0; i<this.productsData.length; i++){
        var element = this.productsData[i];
        var productCard = document.createElement("div");
        productCard.setAttribute("class","product-card");
        productCard.setAttribute("id", element.id);
        var imagesDiv = createProductImageCarouselElement(element.id, element.images)
        
        productCard.appendChild(imagesDiv);

        productCard.append(createDotSpan(element.id, element.images));

        var detailDiv = createProductDetailslElement(element);

        productCard.appendChild(detailDiv);
        productsDiv.appendChild(productCard);
    }
    

}


function createProductDetailslElement(element){
    var detailDiv = document.createElement("div");
    detailDiv.setAttribute("class", "product-details");
    
    var ulElement = document.createElement("ul");
    
    var nameElement = document.createElement("li");
    nameElement.innerText=element.name;
    
    var priceElement = document.createElement("li");
    priceElement.innerText = "$"+element.price;

    ulElement.appendChild(nameElement);
    ulElement.appendChild(priceElement);

    detailDiv.appendChild(ulElement);

    return detailDiv;
}

var imageFolder = "./images/products/";
function createProductImageCarouselElement(productId, images){

    var imagesDiv = document.createElement("div");
    imagesDiv.setAttribute("class","product-images");
    
    var imagesCarousel = document.createElement("div");
    imagesCarousel.setAttribute("id", productId+"-carousel");

    var idx;
    for(idx=0; idx<images.length;idx++){
        var image = images[idx];
        var imgElement = document.createElement("img");
        imgElement.setAttribute("src", imageFolder+image);
        if(idx===0){
            imgElement.setAttribute("class", "activeimage");
        }else{
            imgElement.setAttribute("class", "inactiveimage");
        }
        imagesCarousel.appendChild(imgElement);
    }

    imagesDiv.appendChild(imagesCarousel);

    var prevControl = document.createElement("a");
    prevControl.setAttribute("class", "prev");
    prevControl.setAttribute("onClick", "prevSlide('" + productId + "')");
    prevControl.appendChild(document.createTextNode("\u276E"));

    imagesDiv.appendChild(prevControl);
    
    var nextControl = document.createElement("a");
    nextControl.setAttribute("class", "next");
    nextControl.setAttribute("onClick", "plusSlides('" + productId + "')");
    nextControl.appendChild(document.createTextNode("\u276F"));

    imagesDiv.appendChild(nextControl);

    return imagesDiv;
}

function createDotSpan(productId, images){
    var dots = document.createElement("div");
    dots.setAttribute("id", productId+"-dots");
    dots.setAttribute("class", "slidedots");

    var idx=0;
    for(idx=0;idx<images.length;idx++){
        var dot = document.createElement("span");
        dot.setAttribute("class", "dot");
        dot.setAttribute("onClick", "showSlides('"+productId+"',"+idx+")");
        dots.appendChild(dot);
    }
    return dots;
}