import React, {Component} from 'react';
import styles from './Top_10_Places_In_The_Urals.module.css';
import CircleObject from '../../assets/images/CircleObject.png';
import Photo from '../../assets/images/Photo.png';
import Image91 from '../../assets/images/image 91.png';
import Image92 from '../../assets/images/image 92.png';
import Image93 from '../../assets/images/image 93.png';
import Image94 from '../../assets/images/image 94.png';
import Image95 from '../../assets/images/image 95.png';
import Image96 from '../../assets/images/image 96.png';
import Image97 from '../../assets/images/image 97.png';
import Image98 from '../../assets/images/image 98.png';

export default class TopPlacesUrals extends Component {

    render() {
        return (
            <div className={styles.block}>
                <h1 className={styles.title}>ТОП <span className={styles.italicText}>10</span> мест Урала</h1>
                <ul className={styles.listItems}>
                    <li className={styles.listPoint} data-bg="coral-line">
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>1</span>
                                </div>
                                <img src={CircleObject} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Невьянская башня
                                </h3>
                                <p className={styles.listPointText}>Остатки прошлого величия промышленников Демидовых</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>2</span>
                                </div>
                                <img src={Photo} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Ганина яма</h3>
                                <p className={styles.listPointText}>В 1918 году в шахту бросили останки представителей царской династии Романовых</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>3</span>
                                </div>
                                <img src={Image91} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Зюраткуль</h3>
                                <p className={styles.listPointText}>Горный хребет и озеро</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>4</span>
                                </div>
                                <img src={Image92} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Верхотурье</h3>
                                <p className={styles.listPointText}>Духовный центр России</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint} data-bg="orange-line">
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>5</span>
                                </div>
                                <img src={Image93} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Аркаим</h3>
                                <p className={styles.listPointText}>Город древних цивилизаций</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>6</span>
                                </div>
                                <img src={Image94} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Оленьи ручьи</h3>
                                <p className={styles.listPointText}>Красивый парк с памятниками древней истории</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>7</span>
                                </div>
                                <img src={Image95} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Конжаковский камень</h3>
                                <p className={styles.listPointText}>Высшая точка Свердловской области</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint} data-bg="green-line">
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>8</span>
                                </div>
                                <img src={Image96} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Качканар</h3>
                                <p className={styles.listPointText}>Причудливые скальные останцы и буддийский монастырь</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>9</span>
                                </div>
                                <img src={Image97} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Аракульский Шихан</h3>
                                <p className={styles.listPointText}>Живописная скальная стена с причудливыми формами</p>
                            </div>
                        </a>
                    </li>
                    <li className={styles.listPoint}>
                        <a href="/" className={styles.listPointLink}>
                            <div className={styles.listPointImg}>
                                <div className={styles.listPointTags}>
                                    <span className={styles.listPointNumber}>10</span>
                                </div>
                                <img src={Image98} alt=""/>
                            </div>
                            <div className={styles.listPointDescription}>
                                <h3 className={styles.listPointTitle}>Граница европы и Азии</h3>
                                <p className={styles.listPointText}>Монументы и стеллы на магистралях</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}