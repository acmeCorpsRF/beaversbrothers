import * as React from 'react';
import styles from './Header.module.css';
import Group from '../../assets/images/header/actions/Group 206.png';
import Logo from '../../assets/images/header/logo.svg';
import cn from 'classnames';

export default class Header extends React.Component {

    state = {
        login: false,
        isMenuOpen: false
    };

    loginIn = (e) => {
        e.preventDefault();
        this.setState({
            login: true
        });
    };

    loginOut = (e) => {
        e.preventDefault();
        this.setState({
            login: false
        });
    };

    toggleMenu() {
        if (this.state.isMenuOpen === false) {
            this.setState({
                isMenuOpen: true
            })
        } else {
            this.setState({
                isMenuOpen: false
            })
        }
    }


    render() {
        let active = this.state.isMenuOpen ? styles.active : '',
            showMenu = this.state.isMenuOpen ? styles.menuOpen : '';
        let loggedIn = this.state.login ? styles.loggedIn : '',
            loginIn = this.state.login ? styles.loginIn : '';
        return (
            <header className={styles.header}>
                <div className={styles.block}>
                    <div className={styles.logoBlock}>
                        <button className={cn(styles.btnMenu, active)} onClick={this.toggleMenu.bind(this)}>
                            <span></span><span></span><span></span>
                        </button>
                        <a className={styles.logo} href="/">
                            <img src={Logo} alt="Мы с Урала"/>
                        </a>
                        <span className={styles.title}>Истории.<br/>Маршруты. Места.</span>
                    </div>
                    <ul className={cn(styles.menu, showMenu)}>
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
                        <a href="/"
                           className={cn(styles.actionsAuth, loginIn)}
                           onClick={e => this.loginIn(e)}>Войти</a>
                        <a href="/"
                           className={cn(styles.actionsProfile, loggedIn)}
                           onClick={e => this.loginOut(e)}>
                            <img src={Group} alt="User"/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}