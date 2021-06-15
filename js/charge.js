const search = document.querySelector('#search')
const submit = document.querySelector('#submit')
const searchContent = document.querySelector('#no-grid')

var results = []


if (JSON.parse(localStorage.getItem("results"))) {
  results = JSON.parse(localStorage.getItem("results"))
  search.value = results[0].nm_character
  render()
}


submit.addEventListener('click', () => {
  results = []
  if (search.value) {
    fetch('https://byte12.herokuapp.com/characters/')
      .then(response => response.json())
      .then(data => {
        data.map(element => {
          if ((element.nm_character).toUpperCase() == (search.value).toUpperCase()) {
            results.push(element)
          }
        })

        render()

      }
      );





  } else {
    alert('Insira algum nome')
  }

})


function render() {

  if (results.length == 0) {
    searchContent.innerHTML = `<h3>Nenhum resultado encontrado</h3>`

  } else {
    searchContent.innerHTML = `<h3>Resultados encontrados</h3>`

    results.map(results => {
      searchContent.innerHTML += `
        <div class="search-container">
          <h2>${results.nm_character}</h2>
          <img class="illustration"src=${results.img_character} alt="imagem do ${results.nm_character}">
          <p>Fighting Power: ${results.fighting_power}</p>
          <p>Race: ${results.race}</p>
          <p>Saga: ${results.saga}</p>
  
        </div>
  
      `
    })

    
    localStorage.setItem("results", JSON.stringify(results))

  }


}

