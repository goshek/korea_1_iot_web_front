/*
    main.js
    1) add
    : Named Import

    2) subtract
    : Default Import

    3) multiply
    : Named Import (as구문: mp)

    4) divide
    : 모듈 전체 가져오기 (as구문:math)
*/
import {add} from "./mathModule.js";
console.log(add(5,7));

import sub from "./mathModule.js";
console.log(sub(5,7));

import {multiply as mp} from "./mathModule.js";
console.log(mp(5,7));

import* as modulemathModule from './mathModule.js';
console.log(modulemathModule.divide(7,5));