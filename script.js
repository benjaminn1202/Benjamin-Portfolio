const about_card = document.querySelector('.about-card');
const projects_card = document.querySelector('.projects-card');
const contact_card = document.querySelector('.contact-card');

const content_home = document.querySelector('.content-home');
const content_about = document.querySelector('.content-about');
const content_projects = document.querySelector('.content-projects');
const content_contact = document.querySelector('.content-contact');

const back_button = document.querySelector('.back-button');

let currentPage = 'home';

back_button.onclick = function() {
    showHome();
};

about_card.onclick = function() {
    showAbout();
};
projects_card.onclick = function() {
    showProjects();
};
contact_card.onclick = function() {
    showContact();
};

function showAbout() {
    currentPage = 'about';
    fade(content_about,content_home);
    showbackButton();
    toTop();
}
function showProjects() {
    currentPage = 'projects';
    fade(content_projects, content_home);
    showbackButton();
    toTop();
}
function showContact() {
    currentPage = 'contact';
    fade(content_contact, content_home);
    showbackButton();
    toTop();
}
function showbackButton() {
    setTimeout(function() {
        back_button.classList.remove('fadeIn');
        back_button.classList.remove('fadeOut');
        back_button.style.display = 'block';
        back_button.classList.remove('fadeIn');
        back_button.classList.remove('fadeOut');
        back_button.classList.add('fadeIn');
    },250);
}

function showHome() {
    if(currentPage == 'about') {
        fade(content_home, content_about);
    }
    else if(currentPage == 'projects') {
        fade(content_home, content_projects);
    }
    else {
        fade(content_home, content_contact);
    }
    toTop();
    
    back_button.classList.remove('fadeIn');
    back_button.classList.remove('fadeOut');
    back_button.classList.add('fadeOut');

    setTimeout(function() {
        back_button.classList.remove('fadeIn');
        back_button.classList.remove('fadeOut');

        back_button.style.display = 'none';
    },250);
}

function toTop() {
    let onOff = true;
    if(onOff == true) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    else {}
}

function fade(elementA, elementB) {
    // A = to
    // B = from

    elementB.classList.remove('fadeIn');
    elementB.classList.remove('fadeOut');
    elementB.classList.add('fadeOut');

    setTimeout(function() {
        elementA.style.display = 'grid';
        elementB.style.display = 'none';

        elementA.classList.remove('fadeIn');
        elementA.classList.remove('fadeOut');
        elementA.classList.add('fadeIn');
    },250);
};


// SMOOTH SCROLLING ANIMATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
  
