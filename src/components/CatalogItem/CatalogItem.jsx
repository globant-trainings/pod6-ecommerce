import React from 'react';
import PropTypes from 'prop-types';
import AddSubstract from '../AddSubstract/AddSubstract';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';
import Comments from '../Comments/Comments';
import Rating from '../Rating/Rating';

import './catalogitem.css';

const CatalogItem = ({
    pictures,
    title,
    comments,
    rating,
    price,
    initialItems
}) => {
    const handleOnAdd = (e) => {
        console.log(e);
    }
    const handleOnSubstract = (e) => {
        console.log(e);
    }
    return (
        <div data-testid="catalog-item">
            <Carousel imageData={pictures}></Carousel>
            <p className='title-wrapper'>{title}</p>
            <div className='rating-comments-wrapper'>
            <Rating rating={rating}></Rating><div className='comments-wrapper'><Comments numberOfComments={comments}></Comments></div>
            </div>
            <p className='price-wrapper'>{price}</p>
            <div className='button-wrapper'>
            <Button variant={'primary'} size={'large'} children={'See details'}></Button>
            </div>
            <div className='button-wrapper'>
            <AddSubstract initialCount={initialItems} limitCount={10} onAdd={handleOnAdd} onSubstract={handleOnSubstract}></AddSubstract>
            </div>
        </div>
    );
}

CatalogItem.propTypes = {
    pictures: PropTypes.array,
    title: PropTypes.string,
    comments: PropTypes.number,
    rating: PropTypes.number,
    price:  PropTypes.string,
    initialItems: PropTypes.number
}


export default CatalogItem;
