// her skaber jeg en HTML DOM Collection object  
let htmlCollection = document.getElementsByTagName('p')
// her looper jeg igennem dem og ændre innerHTML altså Textnoden 
function seeHTMLCollection() {
for (i = 0; i < htmlCollection.length; i++) {
    htmlCollection[i].innerHTML = "changed using HTML Collection p :" + i
    
}
}

// her skaber jeg en nodeList
const nodeList = document.querySelectorAll('p')

// her looper jeg igennem dem igen for ændre innerHTML
function seeNodelist() {
    for (i = 0; i < htmlCollection.length; i++) {
        nodeList[i].innerHTML = "changed using Nodelist p :" + i
        
    }
}

