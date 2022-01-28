
let hero = document.querySelector('.hero');
let skills = document.querySelector('.skills');
let about = document.querySelector('.about');
// let portfolio = document.querySelector('.portfolio');

 function dashedBorderOn(event) {
    event.target.style.border = '2px dotted grey';

 }

 function dashedBorderOff(event) {
    event.target.style.border = '' ;
 }

hero.addEventListener('mouseover', dashedBorderOn);
hero.addEventListener('mouseout', dashedBorderOff);
skills.addEventListener('mouseover', dashedBorderOn);
skills.addEventListener('mouseout', dashedBorderOff);
about.addEventListener('mouseover', dashedBorderOn);
about.addEventListener('mouseout', dashedBorderOff);
// portfolio.addEventListener('mouseover', dashedBorderOn);
// portfolio.addEventListener('mouseout', dashedBorderOff);

