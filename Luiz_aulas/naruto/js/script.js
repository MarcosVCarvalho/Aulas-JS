const personagemImagem = document.querySelector('.persImagem')
const personagemNome = document.querySelector('.persNome')
const personagemBuscar = document.querySelector('.inputSearch')

const fetchAnime = async (personagem) => {
    const ApiResposta = await fetch(`https://naruto-br-api.site/characters/${personagem}`)
    .then(response => response.json())
    .then(infos => console.log(infos));
    }

const MostImagem = async (personagem) => {
    const infos = await fetchAnime(personagem)
    if (infos) {
        personagemNome.innerHTML = (`${infos.name}`);
    }
}

personagemBuscar.addEventListener('submit', (Event) => {
    Event.preventDefault();
    MostImagem(input.value.toLowerCase())
})
