'use strict';

let isNavbarVisable = false;

document.querySelector('.navbar-button').addEventListener('click',function()
{
    isNavbarVisable ? hideNavbar() : showNavbar()
})

function hideNavbar()
{
    document.querySelector('nav').style = 'transform: translate(0px,-50px);';
    document.querySelector('.navbar-button').style = 'transform: translate(-25px,-12px);';
    document.querySelector('.navbar-button i').style = 'transform: rotate(0deg);'
    isNavbarVisable = false;
}
function showNavbar()
{
    document.querySelector('nav').style = 'transform: translate(0px,0px);';
    document.querySelector('.navbar-button').style = 'transform: translate(-25px,45px);';
    document.querySelector('.navbar-button i').style = 'transform: rotate(180deg);'
    isNavbarVisable = true;
}