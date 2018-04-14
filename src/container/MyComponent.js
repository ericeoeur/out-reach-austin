import React from 'react';
import Button from 'material-ui/Button';
const style = {
  margin: 12,
};
const MyComponent = () => (
  <div>
    <Button label="Default" style={style} />
    <Button label="Primary" primary={true} style={style} />
    <Button label="Secondary" secondary={true} style={style} />
    <Button label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <Button label="Full width" fullWidth={true} />
  </div>
);

export default MyComponent;