import PropTypes from 'prop-types';
import { Title } from './Header.styled';

const Header = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
