import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

/*
key={`${type}-${i}`}
{product.imageContentType ? (
                            <a onClick={openFile(product.imageContentType, product.image)}>
                              <img src={`data:${product.imageContentType};base64,${product.image}`} style={{ maxHeight: '30px' }} />
                              &nbsp;
                            </a>
                          ) : null}
 */

const ProductCard = ({ product }) => (
  <Card>
    <CardImg
      alt={`${product.name}-Image`}
      src={`data:${product.imageContentType};base64,${product.image}`}
      top
      height={'150'}
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">{product.name}</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        Card subtitle
      </CardSubtitle>
      <CardText>{product.description}</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
);

export default ProductCard;
