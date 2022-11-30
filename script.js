const defaultLink = "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=400"



function Project({ name, role, image = defaultLink, year, link }) {
    return <div className="project" onClick={e => {
        e.stopPropagation();
        if (link) {
            return window.open(link, "_blank");
        }
       alert("This project is not accessible for the public, it is internal for a company 😔 !");
    }}>
        <img src={image} />
        <div className="project-detail flex">
            <div>
                <p className="project-name">{name}</p>
                <p className="project-role">{role}</p>
            </div>
            <p className="project-year">{year}</p>
        </div>
    </div>
};
function ListProject() {
    const [List, setList] = React.useState([
        {
            name: "MadosHome",
            role: "Backend Engineer & System Designer",
            image: "https://res.cloudinary.com/dl6s23xuz/image/upload/v1668303759/DanAtibu/Capture_d_%C3%A9cran_2022-11-13_024029_jhhqus.png",
            year: 2022,
            link: "https://app.madoshome.com"
        }, {
            name: "MTicket ( Ticket Management )",
            role: "Fullstack Developer & System Designer",
            image: "https://res.cloudinary.com/dl6s23xuz/image/upload/v1668304786/DanAtibu/Capture_d_%C3%A9cran_2022-11-13_025905_zjvuxa.png",
            year: 2022,
            link: ""
        },
        {
            name: "MFarm",
            role: "Fullstack Developer & System Designer",
            image: "https://res.cloudinary.com/dl6s23xuz/image/upload/v1669748044/DanAtibu/Capture_d_%C3%A9cran_2022-11-29_191446_byzqtz.png",
            year: 2022,
            link: "https://mfarm.madosgroup.com"
        },
        {
            name: "ONPR Blog",
            role: "Backend Developer",
            year: 2022,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png",
            link: ""
        },
        {
            name: "Bank Online Payment",
            role: "Fullstack Developer",
            year: 2021,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png",
            link: ""
        },
        {
            name: "National Identification Server",
            role: "Backend Engineer & System Designer",
            year: 2022,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png",
            link: ""
        }
    ]);
    return <div className="projects flex">
        {List.map(_ => <Project key={_.name} {..._} />)}
    </div>
};



function Contact({ name, responsability, email, phone }) {
    const empty = "--------------";
    return <div className="contact">
        <p className="contact-name">{name}</p>
        <p>{responsability}</p>
        <p>Email: {email || empty} | Phone: {phone || empty}</p>
    </div>
};
function ListContact() {
    const [List, setList] = React.useState([
        { name: "Mr Jean Claude MandatVille", responsability: "CEO ( Italian Room )", email: "", phone: "+257 69571878" },
        { name: "Mr Erick Maomba", responsability: "Agent At DGM", email: "", phone: "+243 994308800" },
        { name: "Mr David Bahati", responsability: "Teacher at ( IUE )", email: "", phone: "+257 69394506" },
        { name: "Mr Jean De Dieu", responsability: "CEO ( MadosGroup )", email: "", phone: "+27 671891079" },
    ]);
    return <div className="experiences contact_list flex">
        {List.map(_ => <Contact key={_.name} {..._} />)}
    </div>
};



function Experience({
    company,
    role,
    logo = defaultLink,
    link
}) {
    return <div className="experience flex" onClick={e => {
        e.stopPropagation();
        if (!link) {
            return alert("No Link");
        }
        window.open(link, "_blank");
    }}>
        <img src={logo} />
        <div>
            <p className="exper-company-name">{company}</p>
            <p className="exper-role-name">{role}</p>
        </div>
    </div>
};
function ListExperience() {
    const [List, setList] = React.useState([
        { company: "Direction Générale De Migration ( DGM )", role: "IT Controler", link: "", logo: "https://evisa.gouv.cd/images/dgm-logo.png" },
        { company: "Chambre de commerce Italian Market", role: "Fullstack Developer", link: "https://www.italcham.co.za", logo: "" },
        { company: "Mados Group Inc", role: "Fullstack Developer & System Designer", link: "https://madosgroup.com/", logo: "https://madosgroup.com/assets/img/logo.png" },
        { company: "Donexa", role: "Fullstack Developer & System Designer", link: "https://donexa.org", logo: "https://donexa.org/assets/images/logo.png" }
    ]);
    return <div className="experiences experience_list flex">
        {List.map(_ => <Experience key={_.company} {..._} />)}
    </div>
};



function Skill({ name, logo }) {
    return <div className="skill">
        {/* <p>{name}</p> */}
        <img src={logo} />
    </div>
};
function SkillCategory({ name, data }) {
    return <div className="skill-category">
        <p className="skill-category-name">{name}</p>
        <div className="skill-category-list flex">
            {data.map(_ => <Skill key={_.name} {..._} />)}
        </div>
    </div>
};
function ListSkill() {
    const [List, setList] = React.useState([
        {
            name: "DevOps Tools",
            data: [
                { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
                { name: "Kubernete", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png" },
                { name: "Prometheus", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png" },
                { name: "jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png" },
                { name: "Git", logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/141_Git_logo_logos-512.png" }
            ]
        }, {
            name: "Cloud Computing",
            data: [
                { name: "Aws", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiI6BcBq3d7zHEVKtluH8PygK3FiO_D5gq9OsVS58Bg&s" },
                { name: "Firebase", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" },
                { name: "Heroku", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg" },
                { name: "Cloudinary", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGGXnE9y_2Tnilryi6DdfsUaQ3kyZ5y1pqpvTZEYtjw&s" }
            ]
        }, {
            name: "Programming Languages",
            data: [
                { name: "Python", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" },
                { name: "Javascript", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" },
                { name: "Go", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png" },
                { name: "HTML & CSS", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" }
            ]
        }, {
            name: "Backend Frameworks",
            data: [
                { name: "Nodejs ( Express JS, Fastify )", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" },
                { name: "Django", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored-dark.svg" },
                { name: "FastAPI", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/fastapi-colored.svg" },
                { name: "Flask", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored-dark.svg" }
            ]
        }, {
            name: "FrontEnd Frameworks",
            data: [
                { name: "React JS", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" },
                { name: "Next JS", logo: "https://media.graphassets.com/VKHHNvEETYqZRkqgjybc" },
                { name: "Vue JS", logo: "https://masteringjs.io/assets/images/vue/vue.png" }
            ]
        }, {
            name: "Databases",
            data: [
                { name: "Postgresql", logo: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" },
                { name: "Sqlite", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png" },
                { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnk0C0845rdxpXlD4l3BGgk3_-6U35WiIr_EAAHHEgVWNpVrsvOQnarLqcHk7HnfnZw0&usqp=CAU" }
            ]
        }, {
            name: "Third Technologies",
            data: [
                { name: "Apache Kafka", logo: "https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/ICON%20-%20White%20on%20Transparent.png" },
                { name: "Rabbit MQ", logo: "https://w7.pngwing.com/pngs/347/272/png-transparent-rabbitmq-advanced-message-queuing-protocol-message-broker-message-queue-computer-servers-advanced-message-queuing-protocol-angle-text-rectangle.png" },
                { name: "Redis", logo: "https://assets.stickpng.com/images/584830b5cef1014c0b5e4a9c.png" },
                { name: "MemCached", logo: "https://www.liblogo.com/img-logo/me3968m4dc-memcached-logo-memcached-logo-png-transparent-amp-svg-vector-freebie-supply.png" },
                { name: "Nginx", logo: "https://icon2.cleanpng.com/20180329/zdw/kisspng-nginx-reverse-proxy-computer-software-web-cache-tr-container-5abc835fbb1742.2271946815223038397663.jpg" }
            ]
        }
    ]);
    return <div id="skills" className="flex">
        {List.map(_ => <SkillCategory key={_.name} {..._} />)}
    </div>
};


function NavOption(params) {
    return <React.Fragment>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="https://dpictures.s3.amazonaws.com/pv-d/DanCvEn.pdf">Resume</a>
        <a href="#contact">Reference</a>
        <a href="#footer">Online Account</a>
        <a href="mailto:atibudan2@gmail.com?subject=Write Your Subject">Contact me</a>
    </React.Fragment>
};



document.querySelectorAll(".nav-option-link").forEach(_ => ReactDOM.createRoot(_).render(<NavOption />));



const SkillsSectionRoot = ReactDOM.createRoot(document.getElementById("skill-root"));
SkillsSectionRoot.render(<ListSkill />);



const ProjectSectionRoot = ReactDOM.createRoot(document.getElementById("project-root"));
ProjectSectionRoot.render(<ListProject />);


const ContactSectionRoot = ReactDOM.createRoot(document.getElementById("contact-root"));
ContactSectionRoot.render(<ListContact />);


const ExperienceSectionRoot = ReactDOM.createRoot(document.getElementById("experience-root"));
ExperienceSectionRoot.render(<ListExperience />);



// ========================================================================================================


const MenuToggler = (e) => {
    e.stopPropagation();
    document.getElementById("nav_modal").classList.toggle("none");
};
const MenuClose = (e) => {
    e.stopPropagation();
    document.getElementById("nav_modal").classList.add("none");
};
document.querySelector("#nav_more_options").onclick = MenuToggler;
document.querySelectorAll("#nav-option-link a").forEach(option => option.addEventListener("click", MenuToggler));
document.onclick = MenuClose;
document.onscroll = MenuClose;
