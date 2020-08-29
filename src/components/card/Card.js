import React from 'react';
import style from './card.module.css';

export default class extends React.Component {
    state = {
        descriptionText: 'Сказочное заморское яство'
    }

    render() {
        let classCard = style.cardDisabled;
        let linkText;
        let hover = this.props.selected;

        let onSelected = () => {
            if(this.props.number > 0) {
                this.props.onSelected()
            }
            if(this.props.selected) {
                let descriptionText = 'Сказочное заморское яство';
                this.setState({descriptionText});
                hover = false;
            }   
        }

        if(this.props.number == 0) {
            classCard = style.cardDisabled;
            linkText = this.props.description.notAvailable;
        }else {
            classCard = this.props.selected ? style.cardSelected : style.cardDefault
            linkText = this.props.selected ? this.props.description.available : <>Чего сидишь? Порадуй котэ <a onClick={onSelected}>купи</a></>;
        }

        let cardMouseOver = () => {
            if(this.props.selected && hover) {
                let descriptionText = <span>Котэ не одобряет?</span>;
                this.setState({descriptionText});
                hover = false;
            }
        }

        let cardMouseOut = () => {
            if(this.props.selected && hover) {
                let descriptionText = 'Сказочное заморское яство';
                this.setState({descriptionText});
                hover = true;
            }
        }

        return (
            <div className={`card`}>
                <div className={`${style.card} ${classCard}`}>
                    <div 
                        className={`${style.cardBody}`} 
                        onClick={onSelected} 
                        onMouseOver={this.props.selected ? cardMouseOver : ()=>{}}
                        onMouseOut={cardMouseOut}
                    >
                        <p className={`${style.cardDescription}`}>{this.state.descriptionText}</p>
                        <h2 className={`${style.cardTitle}`}>
                            Нямушка <span>{this.props.product}</span>
                        </h2>
                        <p className={`${style.cardPortions}`}>{this.props.description.portions}</p>
                        <p className={`${style.cardMouse}`}>{`${this.props.description.present} в подарок`}</p>
                        <img src='/img/cat.png' className={`${style.cardImg}`}/>
                        <div className={`${style.cardWeight}`}>
                            <span className={`${style.number}`}>{this.props.description.weight}</span>
                            <span className={`${style.weight}`}>кг</span>
                        </div>
                    </div>
                </div>
                <p className={`${style.link}`}>
                    {linkText}
                </p>
            </div>
        )
    }
}