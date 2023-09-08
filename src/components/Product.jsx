import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./css/style.css"

// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: ${({ theme }) => theme.transparent};
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
// `;
// const Container = styled.article`
//   flex: 1;
//   margin: 5px;
//   min-width: 16rem;
//   height: 20rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.bg};
//   position: relative;
//   &:hover ${Info} {
//     opacity: 1;
//   }
// `;
const LinkDecoration = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.hover};
`;

const Image = styled.img`
  margin-top: 0.2rem;
  height: 18rem;
  width: 15rem;
  z-index: 2;
  object-fit: fill;
`;


// const Price = styled.p`
//   font-weight: bold;
//   font-size: 2.4rem;
//   color: white;
// `;

const Product = ({ product }) => {
  return (
    // <Container aria-label={product.name}>
    //   <LinkDecoration
    //     to={`/product/${product._id}`}
    //     aria-label={`see more details about ${product.name} $ ${product.price}`}
    //     role="link"
    //     title={`${product.name} $ ${product.price} size ${product.size}`}
    //   >
    //     <Image
    //       src={product.imgUrl}
    //       alt={product.name}
    //       role="img"
    //       title={product.imgUrl}
    //       aria-label={`product-image:${product.description}`}
    //     />
    //     <Info role="contentinfo">
    //       <Price
    //         role="complementary"
    //         aria-label={`product price ${product.price}`}
    //       >
    //         ${product.price}
    //       </Price>
    //     </Info>
    //   </LinkDecoration>
    // </Container>
    <div className="product-cart">
      <LinkDecoration
        to={`/product/${product._id}`}
        aria-label={`see more details about ${product.name} $ ${product.price}`}
        role="link"
        title={`${product.name} $ ${product.price} size ${product.size}`}
      >
        <Image
          src={product.imgUrl}
          alt={product.name}
          role="img"
          title={product.imgUrl}
          aria-label={`product-image:${product.description}`}
        />
        <span>adidas</span>
        <h4>{product.name}</h4>
        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className='info-product'>
          <h4 className="price">{product.price}</h4>
          <a href="#">
            <i className="fa-solid fa-cart-shopping buy-icon"></i>
          </a>
        </div>
      </LinkDecoration>
    </div>
  );
};

export default Product;
