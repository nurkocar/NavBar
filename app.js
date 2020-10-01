// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleButton = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksClass = links.classList;

console.log(links.classList);

toggleButton.addEventListener('click', toggleOnOff);

function toggleOnOff(){
    // if (linksClass.contains('show-links')){
    //     linksClass.remove('show-links')
    // }
    // else{
    //     linksClass.add('show-links')
    // }
    linksClass.toggle('show-links');
}