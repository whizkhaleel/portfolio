const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const themeBtn = document.querySelector('.theme-btn');

function pageTransition() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            // Remove active class from the other buttons and add to the selected
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            //Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    themeBtn.addEventListener('click', () => {
        let element = document.querySelector('body');
        element.classList.toggle('light-mode');
        let icon = document.querySelector('#theme-icon');
        if(element.className == 'main-content light-mode') {
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}
pageTransition();