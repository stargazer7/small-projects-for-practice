const formElem = document.getElementById("form")
const resultElem = document.getElementById("result")
const input_w = document.getElementById("input-weight")
const input_h = document.getElementById("input-height")

formElem.addEventListener("submit",(ev)=>{
  ev.preventDefault()
  let data = {
    weight:parseFloat(input_w.value),
    height:parseFloat(input_h.value)
  }
  fetch("/",{
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  }).then(response => response.json()) 
  .then(json => {

    resultElem.innerText = json.result

  });
})