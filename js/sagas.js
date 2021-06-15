const sagasContainer = document.querySelector('.sagas-container')



fetch('https://byte12.herokuapp.com/sagas/')
  .then(response => response.json())
  .then(data => {
    data.map( element => {
      console.log('chegou aqui')
        render(element)
    })
  })



  function render(sagaContent) {

    sagasContainer.innerHTML += `
        <div class="saga-content">
            
        <h2>${sagaContent.nm_saga}</h2>
        <div>
          <img id="picture" class="illustration" src=${sagaContent.img_saga} alt="">
          <p>${sagaContent.ds_saga}</p>
        </div>

      </div>
    `

  }

















// async function getSagas(){
//     let characters = await fetch('https://byte12.herokuapp.com/sagas/')
//     let personagem = await characters.json()

//     console.log(personagem)
//     console.log(personagem.name)
//   }
//   getSagas() 



