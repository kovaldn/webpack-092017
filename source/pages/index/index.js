import 'normalize.css';
import './index.scss';

import menuMacker from '../../components/menu/menu';
let menu = menuMacker(['Главная','Обо мне','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
console.log($);


