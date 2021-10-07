var slideIndex = 1;
showSlides(slideIndex);

var products = [
  {
    img: "https://static.qobuz.com/images/covers/aa/y4/grkutz2qry4aa_600.jpg",
    artist: "EXO",
    albumname: "EXO-K Vol.1 [MAMA]",
    sales: "Sales 9,812",
    date: " 2012-04-10",
    price: "USD 8.7",
  },
  {
    img: "https://img.discogs.com/lRlWkk505yjphrPGqRQL1rIbJoo=/fit-in/600x525/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-6846942-1427876451-8581.jpeg.jpg",
    artist: "EXO",
    albumname: "EXO-M Vol.1 [MAMA]",
    sales: "Sales 9,812",
    date: "18-05-19",
    price: "USD 8.7",
  },
  {
    img: "https://i1.sndcdn.com/artworks-000121585645-y1jaxk-t500x500.jpg",
    artist: "EXO",
    albumname: "EXO-K Vol.1[XOXO-HUG Ver]",
    sales: "Sales 3,515",
    date: "2013-08-06",
    price: "USD 14.79",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51zMqz1I4JL.jpg",
    artist: "EXO",
    albumname: "EXO-M Vol.1[XOXO-Kiss Ver]",
    sales: "Sales 9,812",
    date: "2013-08-06",
    price: "USD 14.79",
  },
  {
    img: "https://musicnook.co/wp-content/uploads/2018/12/EXO-Love-Shot-The-5th-Album-Repackage.jpg",
    artist: "EXO",
    albumname: "EXO Repackage Album [LOVE SHOT]",
    sales: "Sales 53,822",
    date: "2018-12-14",
    price: "USD 19.82",
  },
  {
    img: "https://s.isanook.com/jo/0/rp/rc/w300h300/ya0xa0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wLzMwNmU1YzllMGQwMDcxZTkvMTAwMC5qcGc=.jpg",
    artist: "EXO",
    albumname: "EXO  Album [DMUTP]",
    sales: "Sales 148,999",
    date: "2018-11-02",
    price: "USD 18.02",
  },
  {
    img: "https://musicnook.co/wp-content/uploads/2018/12/EXO-Love-Shot-The-5th-Album-Repackage.jpg",
    artist: "EXO",
    albumname: "EXO Album [OBSESSION]",
    sales: "Sales 82,563",
    date: "2019-11-28",
    price: "USD 20.73",
  },
];

render(products);

function render(product) {
  let str;
  for (i = 0, len = products.length, text = ""; i < len; i++) {
    str = `<div class="detail">
    <img
      alt=${i} src=${products[i]?.img}
    />
    <h2 class="exo">${products[i].artist}</h2>
    <h2>${products[i].albumname}</h2>
    <h4 class="exo">${products[i].sales}</h4>
    <h4>${products[i].date}</h4>
    <br /> 
    <button onclick="onClickProductItem(${i})">Add</button>
    <h3><b>${products[i].price}</b></h3>
  </div>`;
    document.getElementById("all_products").innerHTML += str;
  }
}

let cart = [];
function onClickProductItem(e) {
  cart.push(products[e]);
  console.log(cart);
}
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function onClickOpenCart(value) {
  var carts = document.getElementById("modal-cart");
  carts.style.display = value ? "block" : "none";
  renderProductItem();
}

function renderProductItem() {
  var prod = [];
  var str;
  var list = document.getElementById("cart-list");
  console.log(cart);
  if (cart.length == 0) {
    str = `<div class="empty-item" >
      <div><p>No Product in Cart</p></div>
      
      
    </div>`;
    list.innerHTML = str;
  } else {
    list.innerHTML = ""
    cart.map((val, i) => {
      str = `<div class="cart-item" >
      <div><img alt=${i} src=${val?.img} loading="lazy"/></div>
      <div><p>${val.albumname}</p><p>${val.price}</p></div>
      
      
    </div>`;
      list.innerHTML += str;
    });
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
