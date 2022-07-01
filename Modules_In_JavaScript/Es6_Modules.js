import module1 from "module1" //For Default Exports.
import {module2} form "Module2" // For named export.

//For both (Named and Default) Exports.
import module1, {module2} from "./script.js"

// We use it very often in react, for exporting components.

// Example

import { importFnName } from "./script.js";

// with a default function the {} are not needed
import name from "./script.js";

// both default and named function import
import name, { importFnName } from "./script.js";

export default function name(msg1, msg2) {
 const say1 = Math.floor(Math.random() * msg1.length);
 const say2 = Math.floor(Math.random() * msg2.length);
 return say1 > say2 ? say1 : say2;
}

export function importFnName(){
 return null
} 