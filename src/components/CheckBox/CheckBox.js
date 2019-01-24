import React from "react";

const CheckBox = (props) => {
  return (
    <div class="custom-control custom-switch">
      <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} class="custom-control-input" id={props.id} />
      <label class="custom-control-label" for={props.id}>
        {props.value}
      </label>
    </div>
  );
};

export default CheckBox;
