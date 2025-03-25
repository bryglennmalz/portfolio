const projectContainer = document.getElementById('projectContainer');

const projects = [
    {
        title : "Website Portfolio",
        description : "This is a portfolio website.",
        tools : ["HTML/CSS", "JavaScript"],
        repository : "https://github.com/bryglennmalz/portfolio"
    },
    {
        title : "Survey Form",
        description : "This is a project from free code camp. Build a survey form to collect data from users. ",
        tools : ["HTML/CSS"],
        repository : "https://github.com/bryglennmalz/survey-form"
    },
    {
        title : "Tribute Page",
        description : "This is a project from free code camp. Build a tribute page for a subject.",
        tools : ["HTML/CSS"],
        repository : "https://github.com/bryglennmalz/tribute-page"
    },
    {
        title : "Build a Technical Documentation Page",
        description : "This is a project from free code camp. Build a technical documentation page that serve as instruction or reference for a topic.",
        tools : ["HTML/CSS"],
        repository : "https://github.com/bryglennmalz/technical-documentation-page"
    }
]


function showProjects(){
    var projectText = ``;
    for(project in projects){
        projectText += `
            <div class="project-grid-item">
                <div class="project-grid-item-header">
                    <h3>${projects[project].title}</h3>
                </div>
                <div class="project-grid-item-description">
                    <h6>Tools: ${projects[project].tools}</h6>
                    <p>${projects[project].description}<p>
                </div>
                <div class="project-grid-item-repository">
                    <button type="button" onclick="window.open('${projects[project].repository}', '_blank')" >View repositiories</button>
                </div>
            </div>
        `;
    }
    return projectText
}

projectContainer.innerHTML = showProjects();