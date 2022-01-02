import PropTypes from 'prop-types';
import { Box, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <Box>
      <Title>{title}</Title>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
