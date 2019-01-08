import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {

    render() {
        return (
            <nav>
                {this.props.tabs.map(tab =>
                    <Link key={tab.id} to={tab.id}>
                        <button>
                            {tab.title}
                        </button>
                    </Link>)
                }
            </nav>
        )
    }
}