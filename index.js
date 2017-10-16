const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}

function allElementsLis(){
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
    console.log(lis[i])
  }
}

function retElement(x){
  console.log(lis[x])
}

function addRankedListElementsBy(n){
  let counter = lis.length
  for (let i = 0; i <= n; i++) {
    let el = document.querySelector('.ranked-list')
    let elChild = document.createElement("div")
    elChild.innerHTML = 'This is prepended into the element.'
    el.insertBefore(elChild, el.firstChild)
    counter +=1
  }
  return counter
}

function increaseRankBy(n){
  let el = document.querySelectorAll('.ranked-list')
  let rank = 0
  for(const member of el){
    let kids = member.children
    for(const kid of kids){
      kid.innerHTML = (parseInt(kid.innerHTML) + n).toString()
    } 
  }
}