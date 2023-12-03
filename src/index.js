console.log('%c HI', 'color: firebrick')





















const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breeds = document.querySelector("#dog-breeds");
const dropDown = document.querySelector("#breed-dropdown")
const label = document.querySelector(`label`)
const options = document.querySelectorAll(`option`)
const container = document.getElementById("dog-image-container")
document.addEventListener(`DOMContentLoaded`, () => { getData(), getBreed() })

//target li elements that beging with e.target.value first letter
//
// display only those elemetns that being with that letter
// let text = "Hello world, welcome to the universe.";
// text.startsWith("Hello");

dropDown.addEventListener("change", (e) => {
  const selectedLetter = e.target.value
  const dropLi = document.querySelector(`li`)
  // console.log(dropLi.textContent);
  console.log(selectedLetter);

  console.log(dropLi.startsWith(selectedLetter));




  // console.log(selectedLetter)
  // console.log(dropLi);

  // console.log(document.querySelectorAll(`li`));
  // console.log(dropLi);
  // dropLi.forEach((e) => {
  //   console.log(e.target);

  // })

  // if (value === `${value}`) {
  //   console.log(`${value}`);
  // } else {
  //   console.log("this is not a");
  // }
  // console.log(value)

})


function getBreed(e) {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      Object.keys(data.message).forEach(key => {

        const list = document.createElement(`li`)
        breeds.append(list)
        list.append(key)
        // console.log(document.querySelectorAll(`li`));
        const wholeList = document.querySelectorAll(`li`)

        wholeList.forEach(function (list) {
          list.addEventListener(`click`, (e) => { list.style.color = "red" })
        })
      })

    })
    .catch((error) => {
      console.log("BAD THINGS", error)
    })
}

function getData(e) {
  //add images here: id="dog-image-container"
  fetch(imgUrl)

    .then((resp) => resp.json())
    .then((data) => {
      data.message.forEach((dogPic) => {
        // const figure = document.createElement(`figure`)

        const img = document.createElement(`img`)
        img.src = dogPic
        container.append(img)

        // container.append(figure)
      })

    })
    .catch((error) => {
      console.log("BAD THINGS", error)
    })
}

