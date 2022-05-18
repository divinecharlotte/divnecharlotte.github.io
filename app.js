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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',

  },

  {
    id: 'card2',
    title: 'Kevin Owen',
    smallheading: 'mr algeria currecntly manager of ae bank ',
    image: './assets/images/modal6.jpg',
    image1: './assets/images/squared-bg.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    liveLink: 'divinecharlotte.github.io/portifolio-setup',
  },

  {
    id: 'card3',
    title: 'Marcruz Abgael',
    smallheading: 'mr photogenic in currently in charge of american air transport manager',
    image: './assets/images/modal5.jpg',
    image1: './assets/images/squared-bg.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
  {
    id: 'card4',
    title: 'Charlote Divine',
    smallheading: 'miss chairman of goldenhouse fashion',
    image: './assets/images/modal2.jpg',
    image1: './assets/images/squared-bg.png',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
  },
  {
    id: 'card5',

    image: './assets/images/speaker2.jpg',
    image1: './assets/images/squared-bg.png',
    title: 'ange ishimwe',
    smallheading: 'miss world 2025 currently as dentist',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',

  },
  {
    id: 'card5',
    image: './assets/images/speaker4.jpg',
    image1: './assets/images/squared-bg.png',
    title: 'Carly Devisa',
    smallheading: 'miss curture and heritege currently doing her bachlor degree',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',

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
            A daily selection of privately personalized reads; no accounts or
            sign-ups required.
          </p>
        
        
        
      </div  
      </div>
      </div>
      
      
    `;
  section.appendChild(div);
});
