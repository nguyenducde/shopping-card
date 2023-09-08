import styled from 'styled-components';
import { mobile, pc } from '../responsive';

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  ${pc({ maxWidth: '100vw' })}
  ${mobile({ marginTop: '6rem' })}
`;

const Title = styled.h1`
  color: white;
  font-size: 1rem;
`;
const Announcement = () => {
  return (
    <Container role="banner">
      <Title
        role="complementary"
        title="Miễn phí ship cho đơn hàng 500.000 trở lên!"
        aria-label="Miễn phí ship cho đơn hàng 500.000 trở lên!"
      >
        Miễn phí ship cho đơn hàng 500.000 trở lên!
      </Title>
    </Container>
  );
};

export default Announcement;
