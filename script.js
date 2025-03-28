const projectContainer = document.getElementById('projectContainer');
const homeNav = document.getElementById('home-link');
const skillsNav = document.getElementById('skills-link');
const projectsNav = document.getElementById('projects-link');
const contactsNav = document.getElementById('contact-link');
const navClass = document.querySelector('.nav');



const projects = [
    {
        title : "Website Portfolio",
        description : "This is a portfolio website.",
        tools : "HTML/CSS, JavaScript",
        repository : "https://github.com/bryglennmalz/portfolio"
    },
    {
        title : "Survey Form",
        description : "This is a project from free code camp. Build a survey form to collect data from users. ",
        tools : "HTML/CSS",
        repository : "https://github.com/bryglennmalz/survey-form"
    },
    {
        title : "Tribute Page",
        description : "This is a project from free code camp. Build a tribute page for a subject.",
        tools : "HTML/CSS",
        repository : "https://github.com/bryglennmalz/tribute-page"
    },
    {
        title : "Build a Technical Documentation Page",
        description : "This is a project from free code camp. Build a technical documentation page that serve as instruction or reference for a topic.",
        tools : "HTML/CSS",
        repository : "https://github.com/bryglennmalz/technical-documentation-page"
    },
    {
        title : "CMU ALUMnet: Alumni Tracking and Information System",
        description : "This is a capstone project. This an alumni tracking website of Central Mindanao University. This is where alumnio can create their own account to connect other alumni and be able to answer university surveys and forums.",
        tools : "HTML/CSS, Bootstrap, Javascript, jQuery, MySQL, PHP PDO",
        repository : "https://github.com/bryglennmalz/Alumni-Tracking-System"
    }
]

const activeHome = () => {
    if(skillsNav.classList.contains('active')){
        skillsNav.classList.remove('active')
    }
    if(projectsNav.classList.contains('active')){
        projectsNav.classList.remove('active')

    }
    if(contactsNav.classList.contains('active')){
        contactsNav.classList.remove('active')
    }
    if(!homeNav.classList.contains('active')){
        homeNav.classList.add('active');
    }
}

const activeSkills = () => {
    if(homeNav.classList.contains('active')){
        homeNav.classList.remove('active')
    }
    if(projectsNav.classList.contains('active')){
        projectsNav.classList.remove('active')

    }
    if(contactsNav.classList.contains('active')){
        contactsNav.classList.remove('active')
    }
    if(!skillsNav.classList.contains('active')){
        skillsNav.classList.add('active');
    }
}

const activeProjects = () => {
    if(homeNav.classList.contains('active')){
        homeNav.classList.remove('active')
    }
    if(skillsNav.classList.contains('active')){
        skillsNav.classList.remove('active')

    } 
    if(contactsNav.classList.contains('active')){
        contactsNav.classList.remove('active')
    }
    if(!projectsNav.classList.contains('active')){
        projectsNav.classList.add('active');
    }
}

const activeContacts = () => {
    if(homeNav.classList.contains('active')){
        homeNav.classList.remove('active')
    }
    if(skillsNav.classList.contains('active')){
        skillsNav.classList.remove('active')

    } 
    if(projectsNav.classList.contains('active')){
        projectsNav.classList.remove('active')
    }
    if(!contactsNav.classList.contains('active')){
        contactsNav.classList.add('active');
    }
}

/* Navigation button clicked */
homeNav.addEventListener("click", activeHome);
skillsNav.addEventListener("click", activeSkills);
projectsNav.addEventListener("click", activeProjects);
contactsNav.addEventListener("click", activeContacts);



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

function sendEmail(){
    const fullName = document.getElementById('full-name');
    const eMail = document.getElementById('e-mail');
    const message = document.getElementById('message');

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bryanglenmalong@gmail.com",
        Password : "A498C52E4D2693C0E79F46CC7255ED0AC121",
        To : 'bryanglenmalong@gmail.com',
        From : 'bryanglenmalong@gmail.com',
        Subject : `Contact Us: ${fullName.value} want to connect with you`,
        Body : `${message.value}`
    }).then(
      message => alert(message)
    );
}

projectContainer.innerHTML = showProjects();