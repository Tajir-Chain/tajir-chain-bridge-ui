import { BigNumber } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { Token } from "src/domain";
import { formatTokenAmount } from "src/utils/amounts";
import { useAmountInputRedesignStyles } from "src/views/home/components/amount-input/amount-input.styles";
// import { Typography } from "src/views/shared/typography/typography.view";

type AmountInputProps = {
  balance: BigNumber;
  onChange: (params: { amount?: BigNumber; error?: string }) => void;
  readOnly?: boolean;
  token: Token;
  value?: BigNumber;
};

export const AmountInputRedesign: FC<AmountInputProps> = ({
  balance,
  onChange,
  readOnly,
  token,
  value,
}) => {
  const defaultInputValue = value ? formatTokenAmount(value, token) : "";
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const classes = useAmountInputRedesignStyles(inputValue.length);

  const processOnChangeCallback = (amount?: BigNumber) => {
    if (amount) {
      const error = amount.gt(balance) ? "Insufficient balance" : undefined;

      return onChange({ amount, error });
    } else {
      return onChange({});
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const decimals = token.decimals;
    const regexToken = `^(?!0\\d|\\.)\\d*(?:\\.\\d{0,${decimals}})?$`;
    const INPUT_REGEX = new RegExp(regexToken);
    const isInputValid = INPUT_REGEX.test(value);
    const amount = value.length > 0 && isInputValid ? parseUnits(value, token.decimals) : undefined;

    if (isInputValid) {
      setInputValue(value);
      processOnChangeCallback(amount);
    }
  };

  useEffect(() => {
    // Keep the visual input value in sync with the external BigNumber value
    if (value === undefined) {
      setInputValue("");
    } else {
      setInputValue(formatTokenAmount(value, token));
    }
  }, [token, value]);

  return (
    <div className={classes.wrapper}>
      <input
        autoFocus
        className={classes.amountInput}
        onChange={readOnly ? undefined : onInputChange}
        placeholder="0.00"
        readOnly={readOnly}
        value={inputValue}
      />
    </div>
  );
};
