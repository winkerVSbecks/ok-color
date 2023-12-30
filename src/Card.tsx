import { ReactNode, useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

export const Card = ({
  title,
  summary,
  meta,
  children,
  defaultOpen,
}: {
  title: string;
  summary: ReactNode;
  meta?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="ph4 pb4 bg-black">
      <Collapsible.Root
        className="CollapsibleRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="flex items-center justify-between sticky top-0 bg-black pt4 pb5 nl4 nr4 ph4">
          <h2 className="f7 ttu tracked near-white fw4 mx0 mt0 mb3 mb0-l">
            {title}
          </h2>
          <Collapsible.Trigger asChild>
            <button className="IconButton">
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </button>
          </Collapsible.Trigger>
        </div>
        {/* Summary */}
        {meta}
        {/* Summary */}
        {!open && summary}
        <Collapsible.Content>{children}</Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};
