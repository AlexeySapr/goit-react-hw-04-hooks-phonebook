import PropTypes from 'prop-types';
import { InputLabel, FormInput } from './ContactFilter.styled';

const ContactFilter = ({ value, onChange }) => {
  return (
    <InputLabel>
      Find contacts by name:
      <FormInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></FormInput>
    </InputLabel>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
