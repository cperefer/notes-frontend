export const Notification = ({ message }) => {
  const className = message.toLowerCase().includes('error')
    ? 'error'
    : 'notification';

  return (
    <div className={className}>
      <h2>{message}</h2>
    </div>
  );
};

export default Notification;