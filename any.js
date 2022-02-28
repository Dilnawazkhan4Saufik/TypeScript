"use strict";
// any type
// this type means you tell TS that your variable would hold any data-type
// this is bad practice to use because it can disable all the checking of TS
// which could identify errors of type
let surname = 'Dilnawaz';
// now anything can be assigned to this surname var
surname = 101;
surname = false;
// so we should void using any as much as we can
