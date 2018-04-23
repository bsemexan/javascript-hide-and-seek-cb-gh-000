function getFirstSelector(selector){
  var first = document.querySelector(selector)
  return first
}

function nestedTarget(){
  var nested = document.querySelector('#nested .target')
  return nested
}

function deepestChild(){
  var deepest = document.querySelector('#grand-node div div div div')
  return deepest
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0,  i < rankedLists.length; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
