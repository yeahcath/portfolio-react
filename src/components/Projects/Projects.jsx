import './projects'

const list = [
    {
      id: 1,
      nome: 'TODO list',
      descricao: 'Um site com conteúdos de introdução à programação.',
      conteudo: 'Feito com html, css e js.',
      imagem: 'https://media.giphy.com/media/NpKOhpooYL1Rr7Uuav/giphy.gif',
      link: 'https://queroserdev.com/'
    },
    {
      id: 2,
      nome: 'TODO list',
      descricao: 'Uma aplicação em react para fazer um todo list ',
      conteudo: 'React hooks e testar os componente com testing library.',
      imagem: 'https://media.giphy.com/media/OUxAsqI6AeAGqMQhFz/giphy.gif',
      link: 'https://thirsty-noyce-28045f.netlify.app/'
    },
    {
      id: 3,
      nome: 'Rick And Morty',
      descricao: 'Um site em react para demonstrar e buscar personagens de Ricky and Morty',
      conteudo: 'React: fundamentos, components, hooks, eventos e consumos de API.',
      imagem: 'https://media.giphy.com/media/fB9TNMAGEPmq3Z1Iye/giphy.gif',
      link: 'https://rickandmortytiktok.netlify.app/'
    },
    {
      id: 4,
      nome: 'Meu Portfolio',
      descricao: 'Um site em react para demonstrar meu portfolio',
      conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
      imagem: 'https://media.giphy.com/media/RaT2tOOlt1WPIb7sGA/giphy.gif',
      link: 'https://portfolio-aula-react.netlify.app/'
    }
  ]


function Projects() {
    return(
        <div>
            <h1 className="second-tittle">Projetos feitos durante a Reprograma</h1>
            <div className="container-cards">


            </div>
        </div>
    )
}

export default Projects