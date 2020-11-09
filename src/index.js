import _ from 'lodash';
import './style.css';
import Logo from './logo.jpeg';

const component = () => {
  const element = document.createElement('div');

  //Lodash, currently included via module loaded here
  element.innerHTML = _.join(['Hello','webpack'],' ');
  element.classList.add('hello');

  //add image to existing div
  const myLogo = new Image();
  myLogo.src = Logo;

  return element;
}

document.body.appendChild(component());