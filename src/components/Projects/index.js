import Reacet from 'react';
import Project1 from '../../assets/images/MyGardenPlannerHero.jpg';
import Project2 from '../../assets/images/TuneBlastHero.jpg';
import Project3 from '../../assets/images/WeatherDashboardHero.jpg';

function Projects() {
    let projects = [Project1, Project2, Project3]
        return (
            <div className='row'>
                {projects.map(project => <img className='col-6 p-5' src={project} />)}
                
            </div>
        )


}

export default Projects;