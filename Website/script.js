// Script for the menu button in smaller-screen devices
var toggleNav = function() {
    // Gives some of the elements a "toggled" class
    $('nav').toggleClass("nav-toggled");
    $('#nav-wrapper').toggleClass("navbar-toggled");
    $('nav a').each(function() {$(this).toggleClass("link-toggled");});
    $('#toggle-button').toggleClass("toggle-button-toggled");
    $('body').toggleClass("body-toggled");

    // Closes menu if toggled link opens
    $('.link-toggled').click(toggleNav);
}
$('#toggle-button').click(toggleNav);