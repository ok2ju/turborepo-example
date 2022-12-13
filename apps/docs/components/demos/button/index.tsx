import { Button, BUTTON_TYPE, BUTTON_SIZE } from "@te/core";

const ButtonExample = () => (
  <div className="flex">
    <div className="mx-1">
      <Button
        title="Button"
        type={BUTTON_TYPE.secondary}
        size={BUTTON_SIZE.small}
      />
    </div>
    <div className="mx-1">
      <Button title="Button" disabled />
    </div>
    <div className="mx-1">
      <Button title="Button" size={BUTTON_SIZE.default} />
    </div>
    <div className="mx-1">
      <Button title="Button" type={BUTTON_TYPE.danger} size={BUTTON_SIZE.big} />
    </div>
    <div className="mx-1">
      <Button title="Button" size={BUTTON_SIZE.small} />
    </div>
  </div>
);

export default ButtonExample;
