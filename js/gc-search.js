var config = {
  gcseId: '013413336405187782954:zhd6omghotc',
  // resultsUrl: 'http://localhost/faq-dev/search-results.php',
  resultsUrl: 'http://localhost:14642/search-results.php',
  searchWrapperClass: 'gcse-search-wrapper',
  miniSearchWrapperClass: 'mini-nav-search',
  resultsWrapperClass: 'gcse-results-wrapper'
};

function placeholder() {
  var inputField = document.querySelector("input.gsc-input");
  var inputbtn = document.querySelector("gsc-search-button");
  // Change the placeholder
  inputField.placeholder = "What's Your Question";
  $('.gsc-search-button').remove( ":contains('Search')" );
  // Remove the background
  inputField.style.background = "none";
  // The background will get re-attached on blur, so add an event that will also remove it on blur
  // Another way to do this would be to de-attach the element from the DOM and then re-attach again, hence wiping the listeners
  inputField.addEventListener("blur", function() {
    inputField.style.background = "none";
  });
// get vars
};


function miniSearch() {
    var searchEl = document.querySelector(".gsc-input");
  var labelEl = document.querySelector("#label");
  var cseWrap = document.querySelector(".mini-cse-search");

  // register clicks and toggle classes
  labelEl.addEventListener("click",function(){
    if (classie.has(searchEl,"focus")) {
       classie.remove(searchEl,"focus");
       classie.remove(labelEl,"active");
       classie.remove(cseWrap,"search-open");
    } else {
      classie.add(searchEl,"focus");
      classie.add(searchEl,"active");
      classie.add(cseWrap,"search-open");
    }
  });
  // register clicks outisde search box, and toggle correct classes
  document.addEventListener("click",function(e){
    var clickedID = e.target.id;
    if (clickedID != "search-terms" && clickedID != "search-label" && clickedID != "gsc-i-id1") {
      if (classie.has(searchEl,"focus")) {
        classie.remove(searchEl,"focus");
        classie.remove(labelEl,"active");
        classie.remove(cseWrap,"search-open");
      }
    }
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

  var gsceMiniSearchForms = document.querySelectorAll('.' + config.miniSearchWrapperClass);

  var gsceResults = document.querySelectorAll('.' + config.resultsWrapperClass);

  if (gsceMiniSearchForms.length == 1) {
       renderSearch(gsceSearchForms[0]);
       placeholder();
       miniSearch();
  }
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
