import React, {Component} from "react";
import Header from '../regions/header/Header';
import Main from '../regions/main/Main';

import {Layout} from "~/components/Layout/Layout"

export default class extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </Layout>
        )
    }
}
