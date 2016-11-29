var config = {
  gcseId: '013413336405187782954:zhd6omghotc',
  // resultsUrl: 'http://localhost/faq-dev/search-results.php',
  resultsUrl: 'http://localhost:14642/search-results.php',
  searchWrapperClass: 'gcse-search-wrapper',
  resultsWrapperClass: 'gcse-results-wrapper'
};

var getImage = $('.gal-item .gal-img').first();

function imageCaptions() {

    getImage.each(function() {
                    var imgWidth = $(this).width();  
                    var imgHeight = $(this).height();
                    var threeRowHeight = imgHeight;
                    var position = $(this).position();
                    var positionTop = "5px";
                    $(".yellow-bg").parent().css({
                        "position": "relative",
                        "height": threeRowHeight + "px"
                    });
            });
        };


$( document ).ready(function() { 
  imageCaptions();
});

$( window ).resize(function() {
  // $( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  imageCaptions();
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

function placeholder() {
  var inputField = document.querySelector("input.gsc-input");
  var inputbtn = document.querySelector("gsc-search-button");
  // Change the placeholder
  inputField.placeholder = "What's Your Question";
  $('gsc-search-button').remove( ":contains('Search')" );
  // Remove the background
  inputField.style.background = "none";

  // The background will get re-attached on blur, so add an event that will also remove it on blur
  // Another way to do this would be to de-attach the element from the DOM and then re-attach again, hence wiping the listeners
  inputField.addEventListener("blur", function() {
    inputField.style.background = "none";
  });
};


var renderSearchForms = function () {
  if (document.readyState == 'complete') {
    queryAndRender();
  } else {
    google.setOnLoadCallback(function () {
      queryAndRender();
    }, true);
  }
};

var queryAndRender = function() {
  var gsceSearchForms = document.querySelectorAll('.' + config.searchWrapperClass);
  var gsceResults = document.querySelectorAll('.' + config.resultsWrapperClass);

  if (gsceSearchForms) {
    renderSearch(gsceSearchForms[0]);
       placeholder();
  }
  if (gsceResults.length == 1) {
    renderResults(gsceResults[0]);
  }
};

var renderSearch = function (div) {
    google.search.cse.element.render(
      {
        div: searchForm,
        tag: 'searchbox-only',

        attributes: {
          resultsUrl: config.resultsUrl
        }
      }
    );
    if (div.dataset &&
        div.dataset.stylingFunction &&
        window[div.dataset.stylingFunction] &&
        typeof window[div.dataset.stylingFunction] === 'function') {
      window[div.dataset.stylingFunction](form);
    }
};

var renderResults = function(div) {

  google.search.cse.element.render(
    {
      div: searchResults,
      tag: 'searchresults-only'
    });
};

window.__gcse = {

  parsetags: 'explicit',
  callback: renderSearchForms
};

(function () {

  var cx = config.gcseId;
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
    '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);

})();

