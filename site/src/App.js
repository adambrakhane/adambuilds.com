
import React from "react";

import { Image, Text, Div, Container, Row, Col } from "atomize";

import './App.css';
import ProjectCard from './projectCard.js';
import SkillBar from './skillBar.js'



class App extends React.Component {

    render() {
        return (
            <>
                <Container
                    textColor="black900"
                    w={{ xs: "95vw", sm: "80vw" }}
                    flexDir="column"
                    justify="center"
                    align="center"
                    textSize="display2"
                    fontFamily="secondary"
                    textWeight="500"
                    p={{ x: "1rem", y: "1rem" }}
                >

                    <Row>
                        <Col size={{ xs: 12, sm: 7 }}
                            p="1rem"
                            bg="white"
                            textColor="black600"
                            textWeight="600"
                        >
                            <Div
                                textSize="5rem"
                                textAlign="center"
                            >
                                Adam<br />Builds
                            </Div>
                            <Text
                                p="3rem"
                                textSize="cardTitle"
                                textAlign="right"
                            >
                                I'm a lover of building cool, useful things. I thrive on unknown problems that force me to learn something new and stretch out of my comfort zones.
                        <br />
                                <br />
                        I live in Honduras with my family of three.
                        <br />
                                <br />
                                {/* <Button align="right">Get in touch with me</Button> */}
                            </Text>
                        </Col>
                        <Col size={{ xs: 12, sm: 5, xl: 3 }}>
                            <Div p="1rem" bg="warning500">
                                <Image
                                    src="./img/adam-dirt-road.jpg"
                                    w="100%"
                                />
                            </Div>
                        </Col>
                    </Row>
                </Container>
                <Container
                    w={{ xs: "90vw", md:"80vw", xl:"60vw" }}
                    justify="center"
                    align="center"
                    p={{ x: "1rem", y: "1rem" }}
                >

                    <Text tag="h1" textSize="display2" m={{ t: "3rem", b: "1rem" }}>
                        Teams
                    </Text>
                    <Row>
                        <ProjectCard title="GatewayX" subtext="Lead Software Engineer &mdash; 1st engineer at a company building the future of DTC" tags={["current"]} image="./img/GatewayX_LogoMark_NavyGreen.png" link="https://www.gateway.xyz" />
                        <ProjectCard title="Tovala" subtext="Director of Software engineering &mdash; 5th hire and 1st software engineer" tags={["past"]} image="./img/tovala-logo-framed.png" link="https://tovala.com" />
                        <ProjectCard title="Akelos" subtext="Co-Founder and Board Member of Non-Profit building water systems worldwide" tags={["current","non-profit",]} image="./img/adam-spring.jpg" link="https://akeloswater.org"/>
                        <ProjectCard title="BoHo" subtext="Board Member of a growing Chicago theatre company" tags={["past", "non-profit"]} image="./img/boho-show.jpg" link="https://www.facebook.com/bohotheatre" />
                        <ProjectCard title="ADEC/IRWA" subtext="Board Member and volunteer bringing clean water to thousands in rural Honduras" tags={["past", "non-profit"]} image="./img/adam-tank.jpg" />
                        <ProjectCard title="Dar Data" subtext="Founded IoT munucipality water system monitoring platform" tags={["past", "iot"]} image="./img/pressure-monitor.png" />
                    </Row>

                    <Text tag="h1" textSize="display2" m={{ t: "3rem", b: "1rem" }}>
                        Projects
                    </Text>
                    <Row>
                        <ProjectCard title="TechInternets" subtext="Website with tech tools and guides that has been running for more than a decade and has > 60k monthly visitors" link="https://techinternets.com" image="./img/file-transfer-calc.png" />
                        <ProjectCard title="Tovala Oven" subtext="User experience and firmware engineering for a succussful Smart Oven" tags={["iot"]} image="./img/tovala-oven-gen2.jpg" />
                        <ProjectCard title="InvenStory" subtext="An online inventory management system for a non-profit that builds school libraries" tags={["non-profit"]} image="./img/invenstory.png" />
                        <ProjectCard title="Monpiche" subtext="A home monitoring system of self-built IoT modules & base stations" tags={["iot"]} image="./img/monpiche.png" />
                        <ProjectCard title="Water System Planning & Monitoring Tool" subtext="A network of devices deployed in Marcala, Honduras to diagnose issues witha  municipal water system" tags={["non-profit", "iot"]} image="./img/datosdeadec.png" />
                        <ProjectCard title="My Tovala and Me" subtext="A YouTube channel where I do interesting/stupid stuff with my Tovala oven" link="https://www.youtube.com/c/MyTovalaandMe" image="./img/my-tovala-and-me.png" />
                    </Row>

                    <Text tag="h1" textSize="display2" m={{ t: "3rem", b: "1rem" }}>
                        Skills
                    </Text>
                    <Row>
                        <Col size={{ xs: 12, md: 6 }}>
                            <Text
                                tag="h2"
                                textSize="display1"
                                m={{ b: "1rem" }}
                                textAlign="center"
                            >
                                Tech
                            </Text>

                            <SkillBar name="Golang" value={100} label="Expert" align="right" bg="warning600"/>
                            <SkillBar name="HTML/CSS" value={65} label="Proficient" align="right" bg="warning600" />
                            <SkillBar name="JS" value={80} label="Proficient" align="right" bg="warning600" />
                            <SkillBar name="jQuery" value={70} label="Proficient" align="right" bg="warning600" />
                            <SkillBar name="React" value={50} label="Hacker" align="right" bg="warning600" />
                            <SkillBar name="IoT" value={90} label="Expert" align="right" bg="warning600" />
                            <SkillBar name="Electronics" value={70} label="Proficient" align="right" bg="warning600" />
                            <SkillBar name="AWS" value={50} label="Generalist" align="right" bg="warning600" />
                            <SkillBar name="Squirrel" value={70} label="Proficient" align="right" bg="warning600" />
                            <SkillBar name="Python" value={50} label="Hacker" align="right" bg="warning600" />
                            <SkillBar name="SQL" value={60} label="Good enough" align="right" bg="warning600" />

                        </Col>
                        <Col size={{ xs: 12, md: 6 }}>
                            <Text
                                tag="h2"
                                textSize="display1"
                                m={{ b: "1rem" }}
                                textAlign="center"
                            >
                                Business
                            </Text>

                            <SkillBar name="MVP Thinking" value={100} label="I love reducing scope" bg="success600" />
                            <SkillBar name="Strategic Planning" value={80} label="Proficient" bg="success600" />
                            <SkillBar name="501c3 Operation" value={75} label="Proficient" bg="success600" />
                            <SkillBar name="Spanish" value={65} label="Competente" bg="success600" />

                            <Text
                                tag="h2"
                                textSize="display1"
                                m={{ b: "1rem" }}
                                p={{ t: "3rem" }}
                                textAlign="center"
                                style={{ clear: "both" }}
                            >
                                Fun
                            </Text>


                            <SkillBar name="Guitar" value={90} label="Proficient" bg="info600" />
                            <SkillBar name="Piano" value={40} label="Proficient" bg="info600" />
                            <SkillBar name="Charango" value={15} label="Learning" bg="info600" />
                            <SkillBar name="Cello" value={40} label="Learning" bg="info600" />
                            <SkillBar name="Solar Power" value={80} label="Proficient" bg="info600" />
                            <SkillBar name="Audio Production" value={70} label="Proficient" bg="info600" />
                            <SkillBar name="Woodworking" value={30} label="Hobbiest" bg="info600" />
                            <SkillBar name="Water Systems" value={45} label="Volunteer" bg="info600" />
                            <SkillBar name="Electronics" value={85} label="Proficient" bg="info600" />

                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
}


export default App;
