import React from 'react'
import './progressBar.css'

import { Div } from "atomize";

class ProgressBar extends React.Component {

    render() {
        if (this.props.align === "right") {
            return (
                <Div
                    className="progress-bar"
                    shadow="4"
                    style={{
                        float: "right"
                    }}                    
                >
                    <Div
                        className="text"
                        style={{
                            width: `${this.props.value}%`,
                            float: "left",
                        }}

                    >
                        {this.props.label}
                    </Div>
                    <Div
                        className="filler"
                        style={{ width: `${this.props.value}%` }}
                        bg={this.props.bg}
                    />
                </Div>
            )

        } else {
            return (
                <Div className="progress-bar" shadow="4" style={{ float: "left" }}>
                    <Div
                        className="text"
                        style={{
                            width: `${this.props.value}%`,
                            float: "left",
                        }}
                    >
                        {this.props.label}
                    </Div>
                    <Div
                        className="filler"
                        style={{ width: `${this.props.value}%`}}
                        bg={this.props.bg}
                        />
                </Div>
            )

        }

    }
}

export default ProgressBar