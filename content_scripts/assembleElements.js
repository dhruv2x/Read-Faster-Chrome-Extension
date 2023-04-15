function assembleElements(elementsToAssemble, regroupedElements) {

    //Basically here we are pushing elementsToassemble into regroupedElements

    for(var i = 0 ; i < elementsToAssemble.length; i++) {
        
        regroupedElements.push(elementsToAssemble[i]);
    }

    return regroupedElements;
}