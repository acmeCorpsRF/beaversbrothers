import * as React from 'react';
import styles from './New_Places_And_Routes.module.css';
import Image56 from '../../assets/images/image 56.png';
import Image82 from '../../assets/images/image 82.png';
import WithoutPhoto_Square_Orange from '../../assets/images/WithoutPhoto_Square_Orange.png';
import plotinka1 from '../../assets/images/2009plotinka 1.png';
import WithoutPhoto_Circle_Pink from '../../assets/images/WithoutPhoto_Circle_Pink.png';
import plotinka2 from '../../assets/images/2009plotinka 2.png';
import Image91 from '../../assets/images/image 91.png';
import Image92 from '../../assets/images/image 92.png';
import Image93 from '../../assets/images/image 93.png';
import Image94 from '../../assets/images/image 94.png';

export default class NewPlacesRoutes extends React.Component {

    render() {
        return (
            <div className={styles.block}>
                <h1 className={styles.title}>
                    <span className={styles.italicText}>Новые</span> места <span
                    className={styles.italicText}>и</span>&nbsp;маршруты
                </h1>
                <ul className={styles.listItems}>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTagsL}>
                                    <div className={styles.listPointNew}></div>
                                    <div className={styles.listPointRoute}></div>
                                </div>
                                <img src={Image56} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>10 самых знаменитых<br/>арт-объектов Екатеринбурга
                                </h3>
                                <p className={styles.listPointText}>Общественный, культурный и образовательный
                                    центр</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTagsL}>
                                    <div className={styles.listPointNew}></div>
                                </div>
                                <img src={Image82} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Ельцин-центр</h3>
                                <p className={styles.listPointText}>Общественный, культурный и образовательный
                                    центр</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTagsM}>
                                    <div className={styles.listPointNew}></div>
                                </div>
                                <img src={WithoutPhoto_Square_Orange} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Инсталляция в рамках фестиваля</h3>
                                <p className={styles.listPointText}>За один вечер художники создадут необычный
                                    арт-объект</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTagsM}>
                                    <div className={styles.listPointNew}></div>
                                    <div className={styles.listPointRoute}></div>
                                </div>
                                <img src={plotinka1} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>20 топовых исторических мест Екатеринбурга</h3>
                                <p className={styles.listPointText}>Со времен основания Екатеринбурга и довоенное
                                    время</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTagsM}>
                                    <div className={styles.listPointNew}></div>
                                </div>
                                <img src={WithoutPhoto_Circle_Pink} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Белая башня</h3>
                                <p className={styles.listPointText}>Памятник конструктивизма и культурная
                                    площадка</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTagsM}>
                                    <div className={styles.listPointNew}></div>
                                </div>
                                <img src={plotinka2} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Цветочный портал</h3>
                                <p className={styles.listPointText}>Арт-объект фестиваля Стеннография</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <img src={Image91} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Инсталляция в рамках фестиваля</h3>
                                <p className={styles.listPointText}>За один вечер художники создадут необычный
                                    арт-объект</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <img src={Image92} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Исторический сквер</h3>
                                <p className={styles.listPointText}>Сквер в городе Екатеринбурге, разбитый в 1973
                                    году к 250-летию города</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <img src={Image93} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Харитоновский сад</h3>
                                <p className={styles.listPointText}>Английский парк, примыкает к усадьбе
                                    Расторгуевых- Харитоновых</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <img src={Image94} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Смотровая площадка</h3>
                                <p className={styles.listPointText}>БЦ «Высоцкий» Отсюда можно увидеть весь
                                    Екатеринбург как на ладони</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}