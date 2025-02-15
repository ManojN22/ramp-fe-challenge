import classNames from "classnames"
import { useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"
import { check } from "prettier"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [checks,setChecks] = useState(false);
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => {
          console.log(!checked)
          onChange(!checked)
        }}
      />
       {/* <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}
      
       
        onChange={() => {
          console.log(!checked)
          onChange(!checked)
        }}
      /> */}
      
      
    </div>
  )
}
