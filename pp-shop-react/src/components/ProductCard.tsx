import React from 'react';

interface Props {
    name: string;
    description: string;
    image: string;
    price: any;
    category: any;
}

const ProductCard: React.FC<Props> = ({
    name,
    description,
    image,
    price,
  }) => (
    <div className='container'>
    <div className="row">
    <div className='col-md-12'>
        <div className="main">
        <div className="image">  
            <h1>{name}</h1>
            <h1>{price}</h1>
            <img src={image} />
        </div> 
        <div className='header'>
            <a>
                <i className='fa fa-2x fa-caret-up' />
            </a>
        </div>
        <div className='description'>
            <p>{description}</p>
        </div>
      <div className='extra'>
        <span>Submitted by:</span>
      </div>
      </div>
    </div>
    </div>
  </div>
  );

  export default ProductCard;