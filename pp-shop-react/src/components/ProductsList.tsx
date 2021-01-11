import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

import {IProduct} from "../models"
import React from 'react';

type Props = {
products: IProduct[];
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export const ProductsList: React.FC<Props> = ({products}) => {
  const classes = useStyles();
  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.productName}
          height="140"
          image={product.productImage}
          title={product.productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {product.productDescription}
          </Typography>
          <Typography>
            {product.productPrice}
          </Typography>
          <Typography>
            {product.categoryId}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Order
        </Button>
      </CardActions>
    </Card>
    </li>
     ))}
    </div>
  );
}

export default ProductsList;