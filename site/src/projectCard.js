import React from "react"

import { Tag, Image, Div, Col } from "atomize";

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }
    }


    mouseOver() {
        // Only have hover behavior if there is a link to something
        if (typeof this.props.link != "undefined") {
            this.setState({ hover: true })
        }
    }
    mouseOut() {
        this.setState({ hover: false })
    }
    
    clicked() {
        if (typeof this.props.link != "undefined") {
            window.open(this.props.link, '_blank');
        }
    }


    render() {

        var titleBar = ""
        if (typeof this.props.title != "undefined") {
            titleBar = (
                <Div
                    bg={this.state.hover ? "info300" : "gray300"}
                    p="1rem"
                    textAlign="center"
                    textSize="cardTitle"
                    rounded={{ bl: "20px", br: "20px" }}
                >
                    {this.props.title}
                </Div>
            )
        }

        return (
            <Col
                size={{ xs: 12, md: 6, xl: 4 }}
                p="1rem"
            >
                <Div
                    bg="white"
                    border="1px solid"
                    borderColor="gray300"
                    m={this.state.hover ? { l: "0.2rem", t: "0.2rem" } : {}}
                    shadow={this.state.hover ? "3" : "4"}
                    textColor="black600"
                    textWeight="600"
                    rounded="brand"
                    onMouseEnter={this.mouseOver.bind(this)}
                    onMouseLeave={this.mouseOut.bind(this)}
                    onClick={this.clicked.bind(this)}
                    cursor={this.state.hover ? "pointer" : ""} // Only do this to access the "is a link" behavior of the hover function
                >
                    <Image
                        rounded={{ tl: "20px", tr: "20px" }}
                        src={this.props.image}

                    />
                    <Div
                        p="2rem"
                    >
                        {this.props.subtext}
                    </Div>
                    <Tags tags={this.props.tags} />
                    {titleBar}


                </Div>
            </Col>
        )
    }
}

class Tags extends React.Component {

    render() {

        // Nothing to do if an array wasn't passed
        if (typeof this.props.tags != "object") {
            return (null)
        }


        return (
            <Div d="flex" flexWrap="wrap" p="0.5rem">
                {this.props.tags.map((name,i) => {
                    var color = ""
                    var text = ""
                    switch (name) {
                        case "past":
                            color = "warning"
                            text = "Past"
                            break;
                        case "non-profit":
                            color = "info"
                            text = "Non-Profit"
                            break;
                        case "iot":
                            color = "success"
                            text = "IoT"
                            break;
                        default:
                            color = "red"
                            text = name
                    }

                    return (<Tag
                        key={i}
                        bg={`${color}100`}
                        border="1px solid"
                        borderColor={`${color}500`}
                        textColor={`${color}800`}
                        m={{ r: "0.5rem", b: "0.5rem" }}
                    >
                        {text}
                    </Tag>)
                })}
            </Div>
        );
    }
}

export default ProjectCard