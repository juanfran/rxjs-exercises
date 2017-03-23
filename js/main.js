import './exercise-1';
import './exercise-2';
import './exercise-3';
import './exercise-4';
import './exercise-5';
import './exercise-6';
import './exercise-7';
import './exercise-8';

/* DON'T TOUCH */
let sections = document.querySelectorAll('section');

if (sections.length) {
  let sectionsNav = document.querySelector('.sections');
  let initialSection = localStorage.getItem('index') | 0;
  let currentSection = null;

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

    if (slides.length > 1) {
      let nav = document.createElement('nav');
      nav.classList.add('slides-nav');

      let next = document.createElement('button');
      next.appendChild(document.createTextNode('Next'));

      next.addEventListener('click', nextSlide.bind(null, section));

      let prev = document.createElement('button');
      prev.appendChild(document.createTextNode('Previous'));

      prev.addEventListener('click', prevSlide.bind(null, section));    

      nav.appendChild(prev);
      nav.appendChild(next);

      section.appendChild(nav);
    }
  }

  function setActiveSection(sectionIndex) {
    currentSection = sectionIndex;
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

  function nextSlide(section) {
    let active = section.querySelector('.active');
    let slides = section.querySelectorAll('.slide');  

    if (slides.length > 1) {
      if(!active.nextElementSibling || !active.nextElementSibling.classList.contains('slide')) {    
        slides[0].classList.add('active');
      } else {
        active.nextElementSibling.classList.add('active');
      }

      active.classList.remove('active');  
    }
  }

  function prevSlide(section) {
    let active = section.querySelector('.active');
    let slides = section.querySelectorAll('.slide');  

    if (slides.length > 1) {
      if(!active.previousElementSibling || !active.previousElementSibling.classList.contains('slide')) {
        slides[slides.length - 1].classList.add('active');
      } else {
        active.previousElementSibling.classList.add('active');
      }

      active.classList.remove('active');  
    }
  }

  document.addEventListener('keydown', (e) => {
    let section = document.querySelector('section.active');

    if (e.keyCode >= 48 && e.keyCode <= 57) {
      let key = parseInt(e.key, 10);

      setActiveSection(key - 1);
    } else if (e.shiftKey) {
      if (e.keyCode === 39) {
        let nextSection = currentSection + 1;

        if (nextSection >= sections.length) {
          nextSection = 0;
        }

        setActiveSection(nextSection);
      } else if (e.keyCode === 37) {
        let nextSection = currentSection - 1;

        if (nextSection < 0) {
          nextSection = sections.length - 1;
        }

        setActiveSection(nextSection);
      }
    } else {
      if (e.keyCode === 39) {
        nextSlide(section);
      } else if (e.keyCode === 37) {
        prevSlide(section); 
      }
    }
  });

  setActiveSection(initialSection);
}
