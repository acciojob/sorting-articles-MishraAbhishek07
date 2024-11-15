//your JS code here. If required.
 //your JS code here. If required.
let list = document.getElementById("band")

const bands = [
    'Anywhere But Here',
    'The Bled',
    'Counterparts',
    'The Devil Wears Prada',
    'The Midway State',
    'Norma Jean',
    'Oh, Sleeper',
    'An Old Dog',
    'Pierce the Veil',
    'The Plot in You',
    'Say Anything',
    'A Skylit Drive',
    'We Came as Romans'
  ]
  


  for(let item of bands)
  {
    let listItm = document.createElement("li")
    listItm.innerText = item
	      list.setAttribute("id", "bands")

    list.appendChild(listItm)
  }