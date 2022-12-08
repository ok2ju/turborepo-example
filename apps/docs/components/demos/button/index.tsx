import { Button, TYPE, SIZE } from "@te/core";

const ButtonExample = () => (
  <div className="flex">
    <div className="mx-1">
      <Button title="Button" type={TYPE.secondary} size={SIZE.small} />
    </div>
    <div className="mx-1">
      <Button title="Button" disabled />
    </div>
    <div className="mx-1">
      <Button title="Button" size={SIZE.default} />
    </div>
    <div className="mx-1">
      <Button title="Button" size={SIZE.medium} />
    </div>
    <div className="mx-1">
      <Button title="Button" type={TYPE.danger} size={SIZE.big} />
    </div>
  </div>
);

export default ButtonExample;
