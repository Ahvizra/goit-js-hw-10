import './js/menu.js'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
import Storage from './js/storage.js'

const body = document.querySelector('body');
const themeChangeToogle = document.querySelector('.theme-switch__toggle');
body.classList.add(Storage.load())

if (body.getAttribute('class') === 'null') {
    body.classList.remove('null')
    body.classList.add(Theme.LIGHT)
};

if (body.getAttribute('class') === Theme.DARK) {
themeChangeToogle.checked;
};

themeChangeToogle.addEventListener('change', (foo) => {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK)
    let saveId = Theme.DARK;
    Storage.save(saveId)
  }

  else {
    body.classList.replace(Theme.DARK, Theme.LIGHT)
    let saveId = Theme.LIGHT;
    Storage.save(saveId)
  }
});
