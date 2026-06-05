document.addEventListener("DOMContentLoaded", function () {
  const wishlistButtons = document.querySelectorAll(".wishlist-button");

  wishlistButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productHandle = btn.getAttribute("data-product-handle");
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (!wishlist.includes(productHandle)) {
        wishlist.push(productHandle);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert("Added to Wishlist!");
      } else {
        alert("Already in Wishlist");
      }
    });
  });
});
