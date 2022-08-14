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
style={{ maxWidth: '50vw', display: "block", width: '100%', height: 'auto' }}
.card-body-container p{
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow : hidden;
    word-break: break-all;
}
 */

const ProductCard = ({ product }) => (
  <Card>
    <CardImg
      alt={`${product.name}-Image`}
      src={`data:${product.imageContentType};base64,${product.image}`}
      style={{ objectFit: 'scale-down' }}
      height="150vw"
      width="100%"
      top
    />
    <CardTitle
      tag="h6"
      style={{
        lineClamp: 2,
        overflow: 'hidden',
        wordBreak: 'break-all',
        display: '-webkit-box',
        boxOrient: 'vertical',
        whiteSpace: 'normal',
      }}
    >
      {product.name}
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      rating
    </CardSubtitle>
    <CardText>${product.price}</CardText>
  </Card>
);

export default ProductCard;
