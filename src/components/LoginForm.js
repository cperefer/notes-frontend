import Togglable from './Togglable/Togglable';
import PropTypes from 'proptypes';

export default function LoginForm (props) {
  return (
    <Togglable buttonLabel='Show login'>
      <form onSubmit={props.handleSubmit}>
        <div>
          <input
            type='text'
            value={props.username}
            id='inputLogin'
            name='username'
            placeholder='username'
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <input
            type='password'
            value={props.password}
            name='username'
            placeholder='password'
            onChange={props.handlePasswordChange}
          />
        </div>
        <div>
          <button id='formLoginButton'>Login</button>
        </div>
      </form>
    </Togglable>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};