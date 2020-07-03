import React, {Component} from 'react';
import styles from './Header.module.css';
import Group from '../../assets/images/header/actions/Group 206.png';
import Logo from '../../assets/images/header/logo.svg';


export default class Header extends Component {

    // state = {
    //     login: false,
    //     menuShow: false
    // };

    // loginIn = (e: MouseEvent) => {
    //     e.preventDefault();
    //     this.setState({
    //         login: true
    //     });
    // };
    //
    // loginOut = (e: MouseEvent) => {
    //     e.preventDefault();
    //     this.setState({
    //         login: false
    //     });
    // };

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.block}>
                    <div className={styles.logoBlock}>
                        <a className={styles.logo} href="/">
                            <img src={Logo} alt="Мы с Урала"/>
                        </a>
                        <span className={styles.title}>Истории.<br/>Маршруты. Места.</span>
                    </div>
                    <ul className={styles.menu}>
                        <li className={styles.menuPoint}>
                            <a href="/" className={styles.menuPointLink}>Места</a>
                        </li>
                        <li className={styles.menuPoint}>
                            <a href="/" className={styles.menuPointLink}>Маршруты</a>
                        </li>
                        <li className={styles.menuPoint}>
                            <a href="/" className={styles.menuPointLink}>Новое</a>
                        </li>
                        <li className={styles.menuPoint}>
                            <a href="/" className={styles.menuPointLink}>О проекте</a>
                        </li>
                    </ul>
                    <div className={styles.actions}>
                        <a href="/" className={styles.actionsFavorites}><span
                            className={styles.actionsFavoritesCounter}>2</span></a>
                        <button className={styles.actionsAdd}>Добваить</button>
                        <a href="/" className={styles.actionsAuth}>Войти</a>
                        <a href="/" className={styles.actionsProfile}>
                            <img src={Group} alt="User"/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}