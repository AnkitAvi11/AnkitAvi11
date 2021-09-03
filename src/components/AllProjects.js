import React from "react"
import ProjectCard from "./ProjectCard"

const AllProjects = (props) => {

    const projectDetails = [
        {
            title : "Expense management app API in Springboot",
            imagelink : 'https://th.bing.com/th/id/OIP.PSX_Nei2gGqRQW5_Ab3OXAHaFj?pid=ImgDet&rs=1',
            url : 'https://github.com/AnkitAvi11/miniproject-backend-springboot',
            description : "API for College mini project expenser application"
        }, {
            title : "proShop",
            imagelink : 'https://proshopstorage.blob.core.windows.net/media/products/2021/07/alexa_xQhddrs.jpg',
            url : 'https://proshop-ankit.herokuapp.com/',
            description : 'An E-commerce platform developed using django and stripe payment gateway integration'
        }, {
            title : 'Git Profiler',
            imagelink : 'https://github.com/AnkitAvi11/Git_Profiler/raw/master/public/resources/demo.png',
            url : 'https://github.com/AnkitAvi11/Git_Profiler',
            description : 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.'
        }, {
            title : "Todoister",
            imagelink : "https://github.com/AnkitAvi11/ReactToDo/raw/master/public/images/td5.png",
            url : "https://github.com/AnkitAvi11/ReactToDo",
            description : "Todo app using React at the front and Django at the backend. This app is a demo to demostrate the use of the REST API I am working that will help the beginner programmers to build a full fledged application without dealing with the backend."
        }
    ]

    projectDetails.reverse();

    const projects = projectDetails.map((project, index) => {
        return <React.Fragment key={index}>
            <div className="col-sm-6">
                <ProjectCard 
                    title={project.title}
                    imagelink={project.imagelink}
                    description={project.description}
                    url={project.url}
                />
            </div>
        </React.Fragment>
    })

    return (
        <div className="row">
            <div>
                <hr/>
                <h2>My Projects</h2>
            </div>
            {projects}
        </div>
    )
}

export default AllProjects;