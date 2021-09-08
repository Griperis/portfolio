let liItems = $(".main-nav ul li.hide-sm");

$(".smooth-scroll").click(function(event) {
    let offset = $(".main-nav").height();
    event.preventDefault();
    let target = $(this).attr("href");
    let position = 0;
    if (target == '#') {
        position = 0;
    } else {
        position = $(target).offset().top;
    }
    $("html, body").animate({ scrollTop: position - offset}, 500);
});

// Toggleable menu
liItems.click(function(event) {
    toggleMenuItems();
});
$("#nav-toggle").click(function(event) {
    toggleMenuItems();
});

function toggleMenuItems() {
    liItems.toggleClass('hide-sm');
}

let coll = $(".collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }

let modal = document.getElementById("modal-window");
let modalImg = document.getElementById("modal-img-content");
let imgs = document.getElementsByClassName("modal-show");
for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
}
modal.addEventListener("click", function() {
    modal.style.display = "none"
});

