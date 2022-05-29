document.querySelector('#spicy').addEventListener('click', makeReq)
document.querySelector('#meatzerella').addEventListener('click', makeReq)
document.querySelector('#mushroom').addEventListener('click', makeReq)
const tip = document.querySelector('#tip')
const panel = document.querySelector('.api-content')

  // make req
async function makeReq(e){
  // hide tip
  tip.style.display = "none"
  //show ingredient panel
  panel.style.display = 'initial'
  // figure out which pizza user clicked on
  const pizzaType = e.target.id
  // send value to api
  const res = await fetch(`/api?pizza=${pizzaType}`)
  //get back data
  const data = await res.json()



  //grab ingredients
  let ingredients = data['ingredients']
  //grab list to place them in
  let ul = document.getElementById('api-list')
  //make sure list is empty
  ul.innerHTML = "";



  //loop through list
  ingredients.forEach(item => {
    let li = document.createElement('li')
    li.textContent = item
    ul.appendChild(li)
  })

  document.querySelector('#api-img').src = data.img
}
