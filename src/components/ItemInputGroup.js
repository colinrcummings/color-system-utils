import React, { useState } from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const ItemInputGroup = ({ items, setItems }) => {
  const [inputVal, setInputVal] = useState("");
  const inputValIsValidItem = /^#[0-9A-F]{6}$/i.test(inputVal);
  const inputValIsDuplicateItem = Boolean(
    items.find(({ hex }) => hex === inputVal)
  );
  const btnIsDisabled = !inputValIsValidItem || inputValIsDuplicateItem;

  return (
    <>
      <InputGroup>
        <Input
          placeholder="add hex item..."
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button
            color={btnIsDisabled ? "secondary" : "success"}
            outline
            disabled={btnIsDisabled}
            onClick={() => {
              setItems([
                ...items,
                {
                  id: inputVal,
                  hex: inputVal
                }
              ]);
              setInputVal("");
            }}
          >
            Add
          </Button>
        </InputGroupAddon>
      </InputGroup>
      {inputValIsDuplicateItem && (
        <p className="small text-danger mt-1">Duplicate hex value.</p>
      )}
    </>
  );
};

export default ItemInputGroup;
