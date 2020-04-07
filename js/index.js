const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

function getNavLinks() {
const nav = document.querySelectorAll('nav a');

for (let i = 0; i < nav.length; i++) {
  const navLinks = Object.values(siteContent["nav"]);
  nav[i].textContent = navLinks[i];
}
}
getNavLinks();

function addNavLinks() {
  let nav = document.querySelector('nav');
  let a = document.createElement('a');
  let a2 = document.createElement('a');
  a.textContent = "Search";
  a.setAttribute('href', '#')
  a2.textContent = "Careers";
  a2.setAttribute('href', '#')
  nav.appendChild(a);
  nav.prepend(a2);
}

addNavLinks();

function changeNavColor() {
  const nav = document.querySelectorAll('nav a');
  
  for (let i = 0; i < nav.length; i++) {
    nav[i].style.color = "green";
  }
}

changeNavColor();



function getCta() {
  let ctaH1 = document.querySelector('.cta-text h1');
  let ctaButton = document.querySelector('.cta-text button');
  let ctaLogo = document.querySelector('#cta-img');

  ctaH1.innerHTML = siteContent["cta"]["h1"].split(' ').join(' <br>');
  ctaButton.textContent = siteContent["cta"]["button"];
  ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);
}

getCta();

let mainHeader = document.querySelectorAll('.main-content h4');
let mainParagraphs = document.querySelectorAll('.main-content p');
let mainImage = document.querySelector('.middle-img');

function getMainContent(par, type) {
  let newArray = [];
  Object.entries(siteContent["main-content"]).forEach(([key, value]) => {
    if (key.includes(type)) newArray.push(value);
  })
 par.forEach((val, i) => val.textContent = newArray[i]);
}

getMainContent(mainHeader, 'h4');
getMainContent(mainParagraphs, 'content');
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

function getContact() {
  const header = document.querySelector('.contact h4')
  header.textContent = siteContent["contact"]["contact-h4"];

  const address = document.querySelector('.contact p:nth-child(2)');
  address.textContent = siteContent["contact"]["address"];

  const phone = document.querySelector('.contact p:nth-child(3)');
  phone.textContent = siteContent["contact"]["phone"];

  const email = document.querySelector('.contact p:nth-child(4)');
  email.textContent = siteContent["contact"]["email"];
}

 getContact();

 function getFooter(){
   const footer = document.querySelector('footer p');
   footer.textContent = siteContent["footer"]["copyright"];
 }
 getFooter();

  
