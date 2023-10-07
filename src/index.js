let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    then(toys => {
      const toyCollection = document.getElementById('toy-collection');
    
      toys.forEach(toy => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.textContent = toy.name; 
    
        toyCollection.appendChild(cardDiv);
      });
    })
    .then(toys => {
      const toyCollection = document.getElementById('toy-collection');
    
      toys.forEach(toy => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
    
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = toy.name;
    
        const imageTag = document.createElement('img');
        imageTag.src = toy.image; 
        imageTag.className = 'toy-avatar';
    
        const likesParagraph = document.createElement('p');
        likesParagraph.textContent = toy.likes + ' Likes'; 
    
        const likeButton = document.createElement('button');
        likeButton.className = 'like-btn';
        likeButton.id = toy.id; 
        likeButton.textContent = 'Like ❤️';
    
        cardDiv.appendChild(nameHeading);
        cardDiv.appendChild(imageTag);
        cardDiv.appendChild(likesParagraph);
        cardDiv.appendChild(likeButton);
    
        toyCollection.appendChild(cardDiv);
      });
    })
    likeButton.addEventListener('click', () => {
      const toyId = likeButton.id;
      const currentLikes = toy.likes;
      const newNumberOfLikes = currentLikes + 1;
    
      fetch(`http://localhost:3000/toys/${toyId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          likes: newNumberOfLikes
        })
      })
        .then(response => response.json())
        .then(updatedToy => {
          

        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
    likeButton.addEventListener('click', () => {
      // ...
    
      fetch(`http://localhost:3000/toys/${toyId}`, {
        // ...
      })
        .then(response => response.json())
        .then(updatedToy => {
          // Update the toy card in the DOM based on the updatedToy object
          const likesParagraph = cardDiv.querySelector('p');
          likesParagraph.textContent = updatedToy.likes + ' Likes';
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });

    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

