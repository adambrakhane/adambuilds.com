import React from 'react'

import ProgressBar from './progressBar.js'
import { Text, Div } from "atomize";

class SkillBar extends React.Component {

    render() {
        if (this.props.align === "right") {

            return (
                <Div p="2rem">
                    <ProgressBar
                        value={this.props.value}
                        label={this.props.label}
                        align="right"
                        bg={this.props.bg}
                    />
                    <Text
                        textSize={{sm:"cardTitle", md:"1rem", xl:"cardTitle"}}
                        style={{ float: "right" }}
                        p={{ r: "2rem" }}
                    >
                        {this.props.name}
                    </Text>

                </Div>
            )
        } else {
            return (
                <Div p="2rem" >
                    <ProgressBar
                        value={this.props.value}
                        label={this.props.label}
                        align="left"
                        bg={this.props.bg}
                    />
                    <Text
                        textSize={{sm:"cardTitle", md:"1rem", xl:"cardTitle"}}
                        style={{ float: "left" }}
                        p={{ l: "2rem" }}
                    >
                        {this.props.name} </Text>

                </Div>
            )
        }
    }
}

export default SkillBar