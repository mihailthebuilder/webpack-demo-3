import _ from 'lodash';

const component = () => {
  const element = document.createElement('div');

  //Lodash, currently included via module loaded here
  element.innerHTML = _.join(['Hello','webpack'],' ');
  return element;
}

document.body.appendChild(component());