console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener(`DOMContentLoaded`, getData())
const get = document.getElementById("dog-image-container")

function getData(e) {
  //add images here: id="dog-image-container"
  const images = document.querySelector("div")
  console.log(images);

  fetch(imgUrl)

    .then((resp) => resp.json())
    .then((data) => { console.log(data) })


    .catch((error) => {
      console.log("BAD THINGS", error)
    })
}