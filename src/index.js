import _ from 'lodash';
import './style.css';

const component = () => {
  const element = document.createElement('div');

  //Lodash, currently included via module loaded here
  element.innerHTML = _.join(['Hello','webpack'],' ');
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());