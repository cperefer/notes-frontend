import Togglable from "./Togglable";

export default function LoginForm (props) {
  return (
    <Togglable buttonLabel='login'>
      <form onSubmit={props.handleSubmit}>
        <div>
          <input
            type='text'
            value={props.inputusername}
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
          <button>Login</button>
        </div>
      </form>
    </Togglable>
  );
}