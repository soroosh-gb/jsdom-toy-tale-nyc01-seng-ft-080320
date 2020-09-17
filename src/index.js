let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollectionDiv = document.querySelector("#toy-collection");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  

  const getToys = () => {
    
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => toys.forEach(renderToys))
    
  } 

  const renderToys = toy => {
    let toyNew = toy 
    let toyCard = document.createElement('div')
    toyCard.className = 'card'
    toyCard.innerHTML = `
    <img src=${toyNew.image} class="toy-avatar" />
    <h2>${toyNew.name}</h2>
  
    <p>${toyNew.likes}</p>
    <button class="like-btn">Like</button>
    `

    toyCollectionDiv.append(toyCard)
  }







 getToys()
});

