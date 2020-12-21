import Loader from './Loader';
import React from 'react';
import useProductService from '../services/useProductService';

const ProductCard: React.FC<{}> = ({ }) => {
  const service = useProductService();

  return (
    <div >
      {/* <div  onClick={onClose} /> */}

      {service.status === 'loading' && <Loader />}

      {service.status === 'loaded' && (
        <div className="product">
          <h2>{service.payload.results}</h2>

          {/* <div className="price">
            {!!service.payload.price &&
            parseInt(service.payload.price) ? (
              <>
                {new Intl.NumberFormat('en-US').format(
                  parseInt(service.payload.price)
                )}{' '}
                UAH
              </>
            ) : (
              'Call us for price'
            )}
          </div> */}

          <div className="product-info">
            <div className="product-info-item">
              <div className="label">description</div>
              <div className="data">{service.payload.results}</div>
            </div>
            <div className="product-image">
              <div className="label">image</div>
              <div className="data">{service.payload.results}</div>
            </div>
          </div>
        </div>
      )}

      {service.status === 'error' && (
        <div className="product">
          Error, something weird happened.
        </div>
      )}
    </div>
  );
};

export default ProductCard;