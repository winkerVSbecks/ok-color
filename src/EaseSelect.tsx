import React, { ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import eases, { EaseType } from './eases';

export const EaseSelect = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: EaseType;
  onChange: (value: EaseType) => void;
}) => (
  <div className="mb4">
    <label htmlFor={`${name}-ease`} className="f6 b db mb2">
      {name} Easing
    </label>
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger className="SelectTrigger" id={`${name}-ease`}>
        <Select.Value placeholder="Select an ease…" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {Object.entries(eases).map(([key, ease]) => (
              <SelectItem key={key} value={key}>
                {ease.name}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

const SelectItem = React.forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string; value: string }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={`SelectItem ${className}`}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="Select.ItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
