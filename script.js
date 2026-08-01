const menuToggle = document.getElementById('menuToggle');
const menuPanel = document.getElementById('menuPanel');
const menuItems = document.querySelectorAll('.menu-item');
const unitTitle = document.getElementById('unitTitle');
const unitText = document.getElementById('unitText');
const unitCaption = document.getElementById('unitCaption');

const unitContent = {
  'Unidad 1': {
    title: 'Unidad 1',
    text: 'Aquí se revela la primera leyenda: el canto del hielo ha comenzado a sonar sobre la piedra.',
    caption: 'Leyenda de la Primera Senda'
  },
  'Unidad 2': {
    title: 'Unidad 2',
    text: 'La segunda senda despierta bajo la niebla, donde el bosque guarda la memoria de los viejos juramentos.',
    caption: 'Jurado bajo la Niebla'
  },
  'Unidad 3': {
    title: 'Unidad 3',
    text: 'La tercera senda se abre hacia la aurora, con el metal y la nieve cantando a una misma voz.',
    caption: 'Aurora de Acero y Hielo'
  }
};

function toggleMenu() {
  const isOpen = menuPanel.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

menuToggle.addEventListener('click', toggleMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    const content = unitContent[item.dataset.unit];
    if (!content) return;
    unitTitle.textContent = content.title;
    unitText.textContent = content.text;
    unitCaption.textContent = content.caption;
    menuPanel.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('mousemove', (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 16;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  document.documentElement.style.setProperty('--mx', `${x}px`);
  document.documentElement.style.setProperty('--my', `${y}px`);
});

function createSnowflakes() {
  const container = document.getElementById('snowfall');
  const count = window.innerWidth < 700 ? 40 : 90;
  for (let i = 0; i < count; i += 1) {
    const flake = document.createElement('span');
    flake.className = 'snowflake';
    flake.style.left = `${Math.random() * 100}%`;
    flake.style.opacity = String(0.4 + Math.random() * 0.6);
    flake.style.animationDuration = `${4 + Math.random() * 7}s`;
    flake.style.animationDelay = `${Math.random() * 4}s`;
    flake.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
    container.appendChild(flake);
  }
}

createSnowflakes();
window.addEventListener('resize', () => {
  document.getElementById('snowfall').innerHTML = '';
  createSnowflakes();
});
