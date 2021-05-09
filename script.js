const product = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    amount: 0,
    kcall: 400,
    get calcSum() {
      return this.price * this.amount;
    },
    get calcKcall() {
      return this.kcall * this.amount;
    },
    
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    amount: 0,
    kcall: 500,
    get calcSum() {
      return this.price * this.amount;
    },
    get calcKcall() {
      return this.kcall * this.amount;
    },
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    amount: 0,
    kcall: 600,
    get calcSum() {
      return this.price * this.amount;
    },
    get calcKcall() {
      return this.kcall * this.amount;
    },
  }
}

let btn = document.querySelectorAll('.main__product-btn');

// console.log(btn);

for (let i = 0; i < btn.length; i++) {
  // console.log(btn[i]);
  btn[i].addEventListener('click', function () {
    // console.log(btn[i]);
    // console.log(this);
    // closest() - Elementning o'rab turgan elementiga ulanadi
    // console.log(this.closest('.main__product').getAttribute('id'));
    
    prepare(this)
  })
}

function prepare(el) {
  // console.log(el);
  let parent = el.closest('.main__product');
  let parentId = parent.getAttribute('id');
  let num = parent.querySelector('.main__product-num');
  let allPrice = parent.querySelector('.main__product-price span');
  let allKcall = parent.querySelector('.main__product-kcall span');
  
  let quantity = product[parentId].amount;
  let sym = el.getAttribute('data-symbol');
  
  if (sym == '+' && quantity < 20) {
    quantity++;
  } else if (sym == '-' && quantity > 0) {
    quantity--;
  }
  
  num.innerHTML = quantity;
  product[parentId].amount = quantity;
  
  allPrice.innerHTML = product[parentId].calcSum;
  allKcall.innerHTML = product[parentId].calcKcall;
  
  
  // console.log(quantity);
  
//  console.log(++product[parentId].amount, sym);
}



let level = document.querySelector('.header__timer-extra');


let x = 0
let inter;

function lvl() {
  let numb = level.innerHTML = x++

  let timeout = 30
  
if (numb == 100) {
  clearTimeout(inter)
} else if (numb > 10 && numb < 20) {
  timeout = 30;
} else if (numb > 20 && numb < 30) {
  timeout = 40;
} else if (numb > 30 && numb < 40) {
  timeout = 50;
} else if (numb > 40 && numb < 50) {
  timeout = 60;
} else if (numb > 50 && numb < 60) {
  timeout = 70;
} else if (numb > 60 && numb < 70) {
  timeout = 80;
} else if (numb > 70 && numb < 80) {
  timeout = 90;
} else if (numb > 80 && numb < 90) {
  timeout = 100;
} else if (numb > 90 && numb < 100) {
  timeout = 200;
}
  
let inter = setTimeout(() => {
     lvl();
   }, timeout);

}
lvl();





let receipt = document.querySelector('.receipt');
let addCart = document.querySelector('.addCart');
let receiptWindow = document.querySelector('.receipt__window');
let out = document.querySelector('.receipt__window-out');
let pay = document.querySelector('.receipt__window-btn');

addCart.addEventListener('click', () => {
  receipt.style.display = 'flex';
  setTimeout(() => {
    receipt.style.opacity = '1';
    receiptWindow.style.top = '10%';
  }, 500);
  
  let menu = 'Your cart: \n\n';
  let totalPrice = 0;
  let totalKcall = 0;
  
  for (const key in product) {
    // console.log(product[key].amount);
    
    if (product[key].amount) {
      menu += `${product[key].name} ${product[key].amount}x \n`;
      totalPrice += product[key].calcSum;
      totalKcall += product[key].calcKcall;
    }
  }
  
  out.innerHTML = `${menu}\nTotal price: ${totalPrice} sum\nTotal kcall: ${totalKcall} calories`;
  
})

pay.addEventListener('click', () => {
  location.reload();
  // location = 'https://www.youtube.com/';
})



let view = document.querySelector('.view ')
let closeX = document.querySelector('.fa-reg.close')
let productInfo = document.querySelectorAll('.main__product-info');

let viewImg = document.querySelector('.view_img')


let img = document.querySelectorAll('.main__product-img');




for (let i = 0; i < productInfo.length; i++) {  
  productInfo[i].addEventListener('dblclick', function () {
    
    view.classList.add('active')  
    let closest = this.closest('.main__product').getAttribute('id')
    console.log(closest);

    if (closest === 'plainBurger') {
      viewImg.setAttribute('src', 'images/product2.jpg');
    } else if (closest === 'freshBurger') {
      viewImg.setAttribute('src', 'images/product1.jpg');
    } else if (closest === 'freshCombo') {
      viewImg.setAttribute('src', 'images/product3.jpg');
    }
    
    
  })
  
  
}



closeX.addEventListener('click', function () {
  view.classList.remove('active')
})