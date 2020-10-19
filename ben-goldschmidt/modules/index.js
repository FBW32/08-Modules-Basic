// through DEFAULT
import clickImages from "./click.js"
import hoverHeader from "./hover.js"
import scrollWindow from "./scroll.js"

// Need to always call the function after it is imported into the main file
clickImages()
hoverHeader()
scrollWindow()

// Console log to view in browser console
console.log(clickImages);
console.log(hoverHeader);
console.log(scrollWindow);

// Through NAMED
/* 
import {clickImages} from "./click.js"
import {hoverHeader} from "./hover.js"
import {scrollWindow} from "./scroll.js"

clickImages()
hoverHeader()
scrollWindow()

console.log(clickImages);
console.log(hoverHeader);
console.log(scrollWindow);
*/