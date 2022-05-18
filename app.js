const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const hideMenu = document.getElementById('closeMenuIcon');
const closeMenu = document.getElementById('navItems');
burger.onclick = function burger() {
  navLinks.style.left = '0';
};
hideMenu.onclick = function hideMenu() {
  navLinks.style.left = '-100%';
};

closeMenu.onclick = function hideMenu() {
  navLinks.style.left = '-100%';
};

const projects = [
  {
    id: 'card1',

    image: './assets/images/speaker1.jpg',
    image1: './assets/images/squared-bg.png',
    title: 'Sasha Banky',
    smallheading: 'miss englad current miss pghotogenic',
    description: 'she won miss englad at the same time as mis photogenic this year and she is currently dealing with her project called best education,',

  },

  {
    id: 'card2',
    title: 'Kevin Owen',
    smallheading: 'mr algeria currecntly manager of ae bank ',
    image: './assets/images/modal6.jpg',
    image1: './assets/images/squared-bg.png',
    description:
        'he is known as mr manager and he is so at the same time mr algeria 2018 and he was recognised as a best collaborator in ae bank international,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    liveLink: 'divinecharlotte.github.io/portifolio-setup',
  },

  {
    id: 'card3',
    title: 'Marcruz Abgael',
    smallheading: 'mr photogenic  currently in charge of american air transport manager',
    image: './assets/images/modal5.jpg',
    image1: './assets/images/squared-bg.png',
    description:
        'he is american air transport and he won the mr photogenic in mr america competition where he was given a job in that company just after the selection,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
  {
    id: 'card3',
    title: 'Marcruz Abgael',
    smallheading: 'mr photogenic  currently in charge of american air transport manager',
    image: './assets/images/modal5.jpg',
    image1: './assets/images/squared-bg.png',
    description:
        'he is american air transport and he won the mr photogenic in mr america competition where he was given a job in that company just after the selection,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
  // {
  //   id: 'card4',
  //   title: 'Charlote Divine',
  //   smallheading: 'miss chairman of goldenhouse fashion',
  //   image: './assets/images/man.jpg',
  //   image1: './assets/images/squared-bg.png',
  //   description:
  //       'she have got the above title last year in companies awards selection and she was recognised as the best speaker of the year',
  //   technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  // },
  {
    id: 'card5',

    image: './assets/images/speaker2.jpg',
    image1: './assets/images/squared-bg.png',
    title: 'ange ishimwe',
    smallheading: 'miss world 2025 currently as dentist',
    description: 'she is the youngest dentist doctor at the age of 21 and she very active participant in her carrier and also in sports ,',

  },
  {
    id: 'card5',
    image: './assets/images/speaker4.jpg',
    image1: './assets/images/squared-bg.png',
    title: 'Carly Devisa',
    smallheading: 'miss curture and heritege currently doing her bachlor degree',
    description: 'she won miss lpl as in curture and heritage and she was recognised as the kindest and wise girl in the competition ,',

  },
];

const section = document.getElementById('about');

projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'main-container1';
  div.innerHTML = `

 <div class="maincontainerdiv">
      <div class="part1">
      <img class="" src="${project.image1}" alt="image"/>
        <img class="speaker-image" src="${project.image}" alt="image" />
      </div>
      <div class="part2">
        
          <h2 class="heading">${project.title}</h2>
          
        <p class = "small-head">
        <i>${project.smallheading}</i></p>
        <hr class="horizontal"/>
        
          <p class="main-p">
           ${project.description}
          </p>
        
        
        
      </div  
      </div>
      </div>
      
      
    `;
  section.appendChild(div);
});
