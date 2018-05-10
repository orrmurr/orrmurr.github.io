var historyAPIFunction = function(getThis){
  if (getThis.id == "searchIcon") {
      history.pushState({ data: 'pushpush' }, 'search로', '/search')
      // history.replaceState({ data: 'replace' }, 'search로', '/search');
  } else {
      history.pushState({ data: getThis.id }, 'getThis.id로', '/'+getThis.id)
      // history.replaceState({ data: getThis.id }, 'getThis.id로', '/'+getThis.id);
  }
};

 addEventListnerMouseenterAndClick("ttegululuIcon", historyAPIFunction);
 addEventListnerMouseenterAndClick("galleryIcon", historyAPIFunction);
 addEventListnerMouseenterAndClick("searchIcon", historyAPIFunction);
