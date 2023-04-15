function main() {

    
    // Main function, brings together all the processes

    // Starring by grouping all elements that we want.
    // Then we pass them in a filter, who's checking if an element is a text, Check is not in a nav, script, ... tag.
    // And Finally, we give our filtred element to modify the HTML of the page


    var allElements = [];   // we woll store all elemnts in allElements array
    var finalElements = []; //Final output array after filter

    //Grouping
    assembleElements(document.body.getElementsByTagName("P"), allElements);
    assembleElements(document.body.getElementsByTagName("SPAN"), allElements);
    assembleElements(document.body.getElementsByTagName("DIV"), allElements);
    assembleElements(document.body.getElementsByTagName("BR"), allElements);
    assembleElements(document.body.getElementsByTagName("BLOCKQUOTE"), allElements);
    assembleElements(document.body.getElementsByTagName("EM"), allElements);
    
    //Perform filter operation
    //initially finalElements is empty
    filterElements(allElements, finalElements);

    
    //Do modification to html structure
    modifyHtml(finalElements);

    //Exxecute changes activity
    watchPageUpdates();
}

//If addon actived => launch the main function on the page
isAddonActived();