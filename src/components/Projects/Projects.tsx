import React, { useState } from "react";
import './Projects.css'

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../../assets/img/color-sharp2.png'

const Projects = () => {
    const projects = [
        {
            title: "ToDoList",
            description: "ToDoList built with React and C# API",
            imgUrl: require('../../assets/todolist/tasklists.png'),
            type: "React|.Net",
            url: "https://github.com/BartoszLitwa/ToDoList",
        },
        {
            title: "MineAndCry",
            description: "Minecraft Clone built in Unity using C#",
            imgUrl: require('../../assets/mineandcry/terrain.png'),
            type: ".Net",
            url: "https://github.com/BartoszLitwa/Minecraft-Unity",
        },
        {
            title: "Portfolio",
            description: "Personal Portfolio built using React",
            imgUrl: require('../../assets/portfolio/introduction.png'),
            type: "React",
            url: "https://github.com/BartoszLitwa/bartoszlitwa.github.io",
        },
        {
            title: "League Plus",
            description: "Mobile Application for checking the League Of Legends statistics",
            imgUrl: require('../../assets/league_plus/merged.png'),
            type: "Flutter",
            url: "https://github.com/BartoszLitwa/league_plus",
        },
        {
            title: "Computer's Subnets",
            description: "Flutter app with system numbers 'caluclator' and network, subnets and masks visualizer",
            imgUrl: require('../../assets/informatyka_sieci/merged.jpg'),
            type: "Flutter",
            url: "https://github.com/BartoszLitwa/informatyka_sieci",
        },
        {
            title: "Ultraware.xyz",
            description: "C++ internal cheat for CSGO, with many features such as ESP, Skinchanger, Ragebot, LegitBot and more",
            imgUrl: require('../../assets/ultraware.xyz/visualsTab.png'),
            type: "C++",
            url: "https://github.com/BartoszLitwa/ultraware.xyz",
        },
        {
            title: "Ultraware.xyz Injector",
            description: "C# WPF app dll injector for C++ internal cheat Ultraware.xyz with database for users",
            imgUrl: require('../../assets/ultraware.xyz/loader.png'),
            type: ".Net",
            url: "https://github.com/BartoszLitwa/ultraware.xyz-app",
        },
        {
            title: "JavaFx Snake",
            description: "JavaFx Snake with GUI made for college class",
            imgUrl: require('../../assets/snake/snake in-game.png'),
            type: "Java",
            url: "https://github.com/BartoszLitwa/snake",
        },
        {
            title: "Discord Bot",
            description: "Discord Bot made to play music on channels, display memes, show memes and user's reputation",
            imgUrl: require('../../assets/img/project-img3.png'),
            type: ".Net",
            url: "https://github.com/BartoszLitwa/DiscordNetBot",
        },
    ]

    const [eventKey, setEventKey] = useState("All")
    const generateCards = (type: string) => {
        return projects.filter((proj) => type === "All" || proj.type.includes(type)).map((proj) => {
            return (
                <ProjectCard card={proj} key={`proj-${proj.title}-${proj.type}`} />
            )
        })
    }

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects aobut</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="All">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-nav">
                                <Nav.Item>
                                    <Nav.Link eventKey="All" onClick={() => setEventKey("All")}>All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey=".Net" onClick={() => setEventKey(".Net")}>.Net</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="React" onClick={() => setEventKey("React")}>React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Flutter" onClick={() => setEventKey("Flutter")}>Flutter</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="C++" onClick={() => setEventKey("C++")}>C++</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Java" onClick={() => setEventKey("Java")}>Java</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Row>
                                    {
                                        generateCards(eventKey)
                                    }
                                </Row>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="colorSharp 2" className="background-image-right"/>
        </section>
    )
}

export default Projects