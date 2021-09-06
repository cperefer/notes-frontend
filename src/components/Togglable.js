import { useState } from "react";

export default function Togglable ({children, buttonLabel}) {
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = {display: visible ? 'none': ''},
    showWhenVisible = {display: visible ? '': 'none'};
  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setVisible(!visible)}>Show {buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>      
        {children}
        <button onClick={() => setVisible(!visible)}>Hide {buttonLabel}</button>
      </div>
    </div>
  );
}