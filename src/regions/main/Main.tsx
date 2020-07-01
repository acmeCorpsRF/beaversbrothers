import React, {Component} from 'react';
import styles from './Main.module.css';
import NewPlacesRoutes from '~/components/New Places And Routes/New_Places_And_Routes';
import TopPlacesUrals from '~/components/Top 10 Places In The Urals/Top_10_Places_In_The_Urals';

export default class Main extends Component {
    render() {
        return (
                <main className={styles.main}>
                    <NewPlacesRoutes/>
                    <TopPlacesUrals/>
                </main>
        )
    }
}