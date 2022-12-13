/* eslint-disable react/display-name */
import { forwardRef, ComponentProps, ElementRef } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Root = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  ComponentProps<typeof AccordionPrimitive.Root>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={`rounded-[6px] shadow bg-gray-10 border-gray-20 ${className}`}
    {...props}
  >
    {children}
  </AccordionPrimitive.Root>
));

const Item = ({
  children,
  ...props
}: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    className="overflow-hidden mt-[1px] first:mt-0 first:rounded-t-[4px] last:rounded-b-[4px] focus-within:relative focus-within:z-1"
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
);

const Header = forwardRef<
  ElementRef<typeof AccordionPrimitive.AccordionTrigger>,
  AccordionPrimitive.AccordionTriggerProps
>(({ children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className="h-[45px] text-left bg-white text-gray-70 flex flex-1 px-5 items-center justify-between text-label-2 shadow-[0_1px_0_#e4e2e4] hover:bg-gray-20"
      {...props}
    >
      {children}
      <ChevronDownIcon aria-hidden className="shrink-0" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const Content = ({
  children,
  ...props
}: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    className="overflow-hidden bg-white text-body1 text-gray-50"
    {...props}
  >
    <div className="px-5 py-4">{children}</div>
  </AccordionPrimitive.Content>
);

export const Accordion = {
  Root,
  Item,
  Header,
  Content,
};
