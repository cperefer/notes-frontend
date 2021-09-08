import { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'proptypes';

const Togglable = forwardRef(({children, buttonLabel}, ref) => {
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = {display: visible ? 'none': ''},
    showWhenVisible = {display: visible ? '': 'none'};

  const toggleVisibility = () => setVisible(!visible);
  useImperativeHandle(ref, () => ({toggleVisibility}));

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}>Hide</button>
      </div>
    </div>
  );
});

Togglable.displayName = 'Togglable';

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;