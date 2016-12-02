var getImage = $('.gal-item .gal-img').first();
var getImage2 = $('.intro-section .img-responsive').first();

function imageCaptions() {
    getImage.each(function() {
                    var imgWidth = $(this).width();  
                    var imgHeight = $(this).height();
                    var threeRowHeight = imgHeight;
                    var halfImageHeight = imgHeight / 2 + 18;
                    var position = $(this).position();
                    var positionTop = "5px";
                    $(".yellow-bg").parent().css({
                        "position": "relative",
                        "height": threeRowHeight + "px"
                    });
        
            });

        getImage2.each(function() {
        var imgWidth = $(this).width();  
        var imgHeight = $(this).height();
        var halfImageHeight = imgHeight / 2;
          $(".carousel-caption h1").css({
               // "position": "relative",
              "bottom": halfImageHeight + "px"
          });
          // $(".carousel-caption #se").parent().css({
          //      "position": "relative",
          //     "bottom": halfImageHeight + "px"
          // });
  
        });
};

// (function(window){

//   // get vars
//   var searchEl = document.querySelector(".gsc-input");
//   var labelEl = document.querySelector("#label");

//   // register clicks and toggle classes
//   labelEl.addEventListener("click",function(){
//     if (classie.has(searchEl,"focus")) {
//       classie.remove(searchEl,"focus");
//       classie.remove(labelEl,"active");
//     } else {
//       classie.add(searchEl,"focus");
//       classie.add(labelEl,"active");
//     }
//   });

//   // register clicks outisde search box, and toggle correct classes
//   document.addEventListener("click",function(e){
//     var clickedID = e.target.id;
//     if (clickedID != "search-terms" && clickedID != "search-label") {
//       if (classie.has(searchEl,"focus")) {
//         classie.remove(searchEl,"focus");
//         classie.remove(labelEl,"active");
//       }
//     }
//   });
// }(window));





$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
  $(this).ekkoLightbox({
    // alwaysShowClose: true,
  });
});

$( window ).resize(function() {
  // $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  imageCaptions();
});


$(function() {
  imageCaptions();
});