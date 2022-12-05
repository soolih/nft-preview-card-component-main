const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/icon-ethereum.svg') {
    myImage.setAttribute('src','images/icon-view.svg');
  } else {
    myImage.setAttribute('src','images/icon-ethereum.svg');
  }
}