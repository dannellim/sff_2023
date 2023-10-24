function initImgModal() {
    initLocationImg();
    initBoothImg();
 }
 
 function initLocationImg() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("locationImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    if (img) {
       img.onclick = function () {
          console.log(img);
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
       }
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    if (span) {
       span.onclick = function () {
          modal.style.display = "none";
       }
    }
 }
 
 function initBoothImg() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("boothImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    if (img) {
       img.onclick = function () {
          console.log(img);
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
       }
    }
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    if (span) {
       span.onclick = function () {
          modal.style.display = "none";
       }
    }
 }