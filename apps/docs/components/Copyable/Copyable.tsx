import { useState, useEffect, PropsWithChildren } from "react";
import copy from "copy-to-clipboard";
import * as Tooltip from "@radix-ui/react-tooltip";

interface CopyableProps {
  text: string;
}

const Copyable = ({ text, children }: PropsWithChildren<CopyableProps>) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  }, [open]);

  const handleClick = () => {
    setOpen(true);
    copy(text);
  };

  return (
    <Tooltip.Root open={open}>
      <Tooltip.Trigger onClick={handleClick}>{children}</Tooltip.Trigger>
      <Tooltip.Content className="rounded px-3 py-2 bg-steelGray-90 text-xs text-white">
        Copied
        <Tooltip.Arrow className="fill-steelGray-90" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
};

export default Copyable;
