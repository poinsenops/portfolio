async function fetchProjects() {
    const response = await fetch('js/projects.json');
    const projects = await response.json();
    createProjectCards(projects);
}

async function createProjectCards(Projects) {
    const projectContainer = document.getElementById('Projects');

    Projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const shutterDoor = document.createElement('img');	
        shutterDoor.id = "shutterDoor";
        shutterDoor.src = 'src/images/garageDoor.png';


        const projectImage = document.createElement('img');
        projectImage.classList.add('project-image');
        projectImage.alt = project.name;
        projectImage.src = project.image;

        const projectLink = document.createElement('a');
        projectLink.href = project.url;

        const projectTitle = document.createElement('h2');
        projectTitle.innerText = project.name;

        const projectDescription = document.createElement('p');
        projectDescription.innerText = project.description;
        
        projectLink.appendChild(projectImage);
        projectLink.appendChild(shutterDoor);
        projectLink.appendChild(projectTitle);
        projectCard.appendChild(projectLink);
        projectCard.appendChild(projectDescription);
        projectContainer.appendChild(projectCard);
    });
}

fetchProjects();

