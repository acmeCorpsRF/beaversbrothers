import * as React from 'react';
import Header from '../regions/header/Header';
import Main from '../regions/main/Main';

import {Layout} from "~/components/Layout/Layout"

export default class extends React.Component {
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
