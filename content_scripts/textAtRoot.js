function textAtRoot(elementToAnalyse) 
{ 
    //This functon is used in filterElements.js
    //elemnt is text -> True
    //Else -> false

    //The childNodes property returns a collection (list) of an elements's child nodes.
    nodes = elementToAnalyse.childNodes;

    for(var i = 0 ; i < nodes.length ; i++) 
    {
        if(nodes[i].nodeName === "#text") 
        {        
            return true;
        }
    }

    return false;
}