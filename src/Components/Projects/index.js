import Header from '../Header'
import ProjectItem from '../ProjectItem'

import './index.css'

const projectsList = [
  {
    category: 'RESPONSIVE',
    imageURL:
      'https://img.freepik.com/free-vector/flags-globe_1057-760.jpg?w=740&t=st=1704626986~exp=1704627586~hmac=703df8ab503302914dc2a15a8876bf7099bd0a4bf3e790347ab6b070572c2732',
    title: 'Countries Search',
    description:
      'Developed responsive countries search application which shows all the countries and responsive population in the world',
    projectLink: 'https://ramanacountries.ccbp.tech/',
  },
  {
    category: 'RESPONSIVE',
    imageURL:
      'https://www.shutterstock.com/shutterstock/photos/2251804043/display_1500/stock-vector-puzzle-globe-education-knowledge-school-icon-web-logo-learn-language-sign-symbol-initial-vector-2251804043.jpg',
    title: 'Wikipedia Search Application',
    description:
      'Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation by clicking on the specific search',
    projectLink: 'https://ramanawiki.ccbp.tech/',
  },
  {
    category: 'DYNAMIC',
    imageURL:
      'https://media.istockphoto.com/id/116772376/photo/notepad-to-do-list-get-things-done.jpg?s=1024x1024&w=is&k=20&c=P3jWqMRNjtWtFALzzG_kryh0Yv-7rwQ2h3adVeiIswg=',
    title: 'TO-DO List',
    description:
      'A comprehensive todo management tool designed to enhance productivity',
    projectLink: 'https://ramanatodoapp.ccbp.tech/',
  },
  {
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png',
    title: 'Nxt Trendz Application',
    description:
      'NxtTrendz application is an application which is close to our present e-commerce application where an authenticated user can login and shop whatever he/she feel to buy it later ca add it to the cart and prime user will have have the benefits of prime deals in this application.In this application user can switch between different routes and access functionalities..',
    projectLink: 'https://venkynxtrendz25.ccbp.tech/',
  },
]

const Projects = () => (
  <>
    <Header />
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <ul className="projects-list">
        {projectsList.map(eachProject => (
          <ProjectItem
            key={eachProject.projectId}
            projectDetails={eachProject}
          />
        ))}
      </ul>
    </div>
  </>
)

export default Projects
