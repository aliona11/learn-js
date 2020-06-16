import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Rectangle from './rectangle.svg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const mySvg = new Image();
  mySvg.src = Rectangle;

  element.appendChild(mySvg);

  return element;
}

document.body.appendChild(component());
