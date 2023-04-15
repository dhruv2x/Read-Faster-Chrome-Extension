function filterElements(elementsToFilter, finalElements) {
  //finalElements is empty initially
  //and after filtering we will add filtered elements into this array


  //Traverse full array of elements
  for (var i = 0; i < elementsToFilter.length; i++) {
    //fetch current element
    var currentElement = elementsToFilter[i];

    //Now check that it should be text and "not should be" 
    //parent of "NAV", "TABLE", "CODE"
    //child of "SCRIPT", "STYLE", "FONT"
    //Logic is used in isThisTag.js
    
    if (
      textAtRoot(currentElement) &&
      isThisTagParent(currentElement, "NAV", "TABLE", "CODE") === false &&
      isThisTagChild(currentElement, "SCRIPT", "STYLE", "FONT") === false
    ) {
      finalElements.push(currentElement);
    }
  }

  return finalElements;
}
