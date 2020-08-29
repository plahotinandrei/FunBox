import React from 'react';
import style from './app.module.css';
import Card from './components/card/Card.js'
import { number } from 'prop-types';

export default class extends React.Component {
    state = {
        products: [
            {
                id: 1,
                product: 'с фуа-гра',
                number: 1,
                description: {
                    available: 'Печень утки разварная с артишоками.',
                    notAvailable: 'Печалька, с фуа-гра закончился.',
                    portions: '10 порций',
                    present: 'мышь',
                    weight: '0,5'
                },
                selected: false,
                src: '/img/cat.png'
            }, 
            {
                id: 2,
                product: 'с рыбой',
                number: 1,
                description: {
                    available: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                    notAvailable: 'Печалька, с рыбой закончился.',
                    portions: '40 порций',
                    present: '2 мыши',
                    weight: '2'
                },     
                selected: false,
                src: '/img/cat.png'
            },
            {
                id: 3,
                product: 'с курой',
                number: 0,
                description: {
                    available: 'Филе из цыплят с трюфелями в бульоне.',
                    notAvailable: 'Печалька, с курой закончился.',
                    portions: '100 порций',
                    present: '5 мышей',
                    weight: '5'
                }, 
                selected: false,
                src: '/img/cat.png'
            },
        ]
    }

    onSelected(i) {
        let selected = this.state.products[i].selected ? false : true;
        let products = [...this.state.products];
        products[i] = {...products[i], selected};
        this.setState({products});
    }

    render() {
        let cards = this.state.products.map((product, i) => {
            return (
                <Card 
                    key={product.id}
                    product={product.product}
                    number={product.number}
                    description={product.description}
                    selected={product.selected}
                    src={product.src}
                    onSelected={this.onSelected.bind(this, i)}
                />
            )
        })
        return (
            <div className={style.app}>
                <div className={`${style.wrapper} ${style.content}`}>
                    <h1 className={`${style.mainTitle} mainTitle`}>Ты сегодня покормил кота</h1>
                    <div className={`${style.cardsWrapper}`}>
                        {cards}
                    </div>
                </div>
            </div>
        )
    }
}