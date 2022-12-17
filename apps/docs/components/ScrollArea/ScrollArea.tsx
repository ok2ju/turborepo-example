import React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const thumbClasses =
  "flex-1 bg-steelGray-30 rounded-[8px] z-[1] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] before:-translate-x-1/2 before:-translate-y-1/2";

type ScrollAreaProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Viewport
> & {
  css?: any;
  disabled?: boolean;
};
// eslint-disable-next-line react/display-name
export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  ScrollAreaProps
>((props, forwardedRef) => {
  const { disabled = false, ...scrollAreaProps } = props;

  if (disabled) {
    return (
      <div
        {...scrollAreaProps}
        style={{ overflow: "hidden", ...scrollAreaProps.css }}
      />
    );
  }

  return (
    <ScrollAreaPrimitive.Root className="w-full h-full">
      <ScrollAreaPrimitive.Viewport
        {...scrollAreaProps}
        ref={forwardedRef}
        className="w-full h-full rounded-[inherit]"
      />
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex select-none touch-none p-1 w-[8px]"
      >
        <ScrollAreaPrimitive.Thumb className={thumbClasses} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        orientation="horizontal"
        className="flex flex-col select-none touch-none p-1 w-[8px] h-[8px]"
      >
        <ScrollAreaPrimitive.Thumb className={thumbClasses} />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
});
