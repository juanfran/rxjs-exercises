import './exercise-1';

let sections = document.querySelectorAll('section');
let sectionsNav = document.querySelector('.sections');
let initialSection = localStorage.getItem('index') | 0;

for(let [index, section] of sections.entries()) {
  let button = document.createElement('button');

  button.appendChild(document.createTextNode(index + 1));
  button.addEventListener('click', () => {
    let sectionIndex = parseInt(button.innerText, 10);
    setActiveSection(sectionIndex - 1);
  });

  sectionsNav.appendChild(button);
      
  let slides = section.querySelectorAll('.slide');
  
  slides[0].classList.add('active');

  let nav = document.createElement('nav');
  nav.classList.add('slides-nav');

  let next = document.createElement('button');
  next.appendChild(document.createTextNode('Next'));

  next.addEventListener('click', () => {
    let active = section.querySelector('.active');

    if(!active.nextElementSibling || !active.nextElementSibling.classList.contains('slide')) {
        slides[0].classList.add('active');
    } else {
        active.nextElementSibling.classList.add('active');
    }

    active.classList.remove('active');
  });

  let prev = document.createElement('button');
  prev.appendChild(document.createTextNode('Previous'));

  prev.addEventListener('click', () => {
    let active = section.querySelector('.active');

    if(!active.previousElementSibling || !active.previousElementSibling.classList.contains('slide')) {
        slides[slides.length - 1].classList.add('active');
    } else {
        active.previousElementSibling.classList.add('active');
    }

    active.classList.remove('active');
  });    

  nav.appendChild(prev);
  nav.appendChild(next);

  section.appendChild(nav);
}

function setActiveSection(sectionIndex) {
  let activeSectionSlide = document.querySelector('section.active');

  if (activeSectionSlide) {
    activeSectionSlide.classList.remove('active');
  }
  
  let activeSectionButton = document.querySelector('.sections .active');
  
  if(activeSectionButton) {
    activeSectionButton.classList.remove('active');
  }

  sections[sectionIndex].classList.add('active'); 
  sectionsNav.querySelectorAll('button')[sectionIndex].classList.add('active');
  localStorage.setItem('index', sectionIndex);
}

setActiveSection(initialSection);
