'use strict'
 
const images = [
{ "id": "1", "url": "marvel.jpg"   },
{ "id": "2", "url": "hunter.jpg"   },
{ "id": "3", "url": "redbat.jpg"   },
{ "id": "4", "url": "liga.jpg"   },
{ "id": "5", "url": "flash.jpg"   },
{ "id": "6", "url": "ri.png"   },
{ "id": "7", "url": "ri2.jpg"   }
]

const previousButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')
const containerItems = document.querySelector(".container-items");

const loadImages = (images, containerItems) => {
 
    images.forEach (image => {
        containerItems.innerHTML += `
        <div class="item">
        <img src="${image.url}"
        </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

previousButton.addEventListener("click", previous)
nextButton.addEventListener("click", next)