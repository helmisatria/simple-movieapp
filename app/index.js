(function () {
  const cardGroup = document.getElementsByClassName("group-card")[0]
  
  for (let i = 0; i < 22; i++) {
    const card = document.createElement('div')
    card.className = 'card'

    const image = document.createElement('div')
    image.className = 'image'

    const circle = document.createElement('span')
    circle.className = 'circle'

    const rating = document.createElement('p')
    rating.textContent = `${(8.0 + Math.random()).toFixed(1)}`;

    circle.appendChild(rating)

    
    const img = document.createElement('img')
    img.setAttribute("src", "https://flavorwire.files.wordpress.com/2016/12/lobster-movie-poster.jpg?w=1920");

    image.appendChild(circle)
    image.appendChild(img)
  
    const pTitle = document.createElement('p')
    pTitle.textContent = 'Jurassic World'
    pTitle.className = 'title'
    
    const pSubtitle = document.createElement('p')
    pSubtitle.textContent = "Drama, Science Fiction"
    pSubtitle.className = 'subtitle'

    card.appendChild(image)
    card.appendChild(pTitle)
    card.appendChild(pSubtitle)

    cardGroup.appendChild(card)
  }
})();
