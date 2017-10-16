
const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

function getElement(x){
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
    console.log(lis[i])
  }
}

function returnElement(x){
  console.log(lis[x])
}

function notArray(){
  return document.getElementById('app').querySelectorAll('ul.ranked-list li')
}