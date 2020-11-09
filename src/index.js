const component = () => {
  const element = document.createElement('div');

  //Lodash, currently included via a script inside html file
  element.innerHTML = _.join(['Hello','webpack'],' ');
  return element;
}

document.body.appendChild(component());