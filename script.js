// Toggle class active untuk hamburger menu
const navbarNavbar = document.querySelector(".navbar-navbar");
const hm = document.querySelector("#hamburger-menu");

if (hm && navbarNavbar) {
  hm.onclick = (e) => {
    navbarNavbar.classList.toggle("active");
    e.preventDefault();
  };
}

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const sb = document.querySelector("#search-button");

if (sb && searchForm && searchBox) {
  sb.onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
  };
}

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const sc = document.querySelector("#shopping-cart-button");

if (sc && shoppingCart) {
  sc.onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  };
}

// Klik di luar elemen untuk menghilangkan nav/form/cart
document.addEventListener("click", function (e) {
  if (hm && navbarNavbar && !hm.contains(e.target) && !navbarNavbar.contains(e.target)) {
    navbarNavbar.classList.remove("active");
  }

  if (sb && searchForm && !sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (sc && shoppingCart && !sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

if (itemDetailModal && itemDetailButtons.length > 0) {
  itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal.style.display = "flex";
      e.preventDefault();
    };
  });
}

// Klik tombol close modal
const closeIcon = document.querySelector(".modal .close-icon");
if (closeIcon && itemDetailModal) {
  closeIcon.onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  };
}

// Klik di luar modal (close)
window.onclick = (e) => {
  if (itemDetailModal && e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
