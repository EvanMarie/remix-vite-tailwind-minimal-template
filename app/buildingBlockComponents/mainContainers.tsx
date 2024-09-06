import React, {
  CSSProperties,
  MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { motion, Variants } from "framer-motion";

// -------------------------- BOX COMPONENT -------------------------- //
interface BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: RefObject<HTMLDivElement>;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps & any>(
  (
    {
      children,
      tabIndex = -1,
      onClick,
      onKeyDown,
      style = {},
      className = "",
      onMouseEnter,
      onMouseLeave,
      ...motionProps // Pass motion props
    },
    ref
  ) => {
    return (
      <motion.div
        role="button"
        tabIndex={tabIndex}
        className={`${className} hover:cursor-default`}
        style={{ ...style }}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...motionProps} // Spread motion props onto the component
      >
        {children}
      </motion.div>
    );
  }
);
Box.displayName = "Box";

// -------------------------- FLEX COMPONENT -------------------------- //
interface FlexProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  id?: string;
  tabIndex?: number;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps & any>(
  (
    {
      children,
      style,
      onClick,
      className = "",
      id,
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        id={id}
        className={`flex ${className}`}
        style={{ ...style }}
        onClick={onClick as any}
        tabIndex={tabIndex}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
Flex.displayName = "Flex";

// -------------------------- FLEX FULL COMPONENT -------------------------- //
export const FlexFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    widths?: string;
    onClick?: () => void;
    id?: string;
    style?: React.CSSProperties;
  } & any // Extend to accept motion props
>(
  (
    { children, className = "", onClick, id, style = {}, ...motionProps },
    ref
  ) => {
    return (
      <Flex
        className={`w-full ${className}`}
        id={id}
        ref={ref}
        onClick={onClick}
        style={{ ...style }}
        {...motionProps} // Spread motion props to allow motion features
      >
        {children}
      </Flex>
    );
  }
);
FlexFull.displayName = "FlexFull";

// -------------------------- HSTACK COMPONENT -------------------------- //
interface HStackProps {
  children?: React.ReactNode;
  gap?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  tabIndex?: number;
}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps & any>(
  (
    {
      children,
      onClick = () => ({}),
      onKeyDown,
      gap = "gap-2",
      className = "",
      style = {},
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        role="button"
        tabIndex={tabIndex}
        className={`flex flex-row ${gap} ${className} hover:cursor-default`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={ref}
        style={{ ...style }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        {...motionProps} // Spread motion props to allow motion features
      >
        {children}
      </motion.div>
    );
  }
);
HStack.displayName = "HStack";

// -------------------------- HSTACK FULL -------------------------- //
export const HStackFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    gap?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
  } & any
>(
  (
    { children, className = "", gap = "", onClick, style = {}, ...motionProps },
    ref
  ) => {
    return (
      <HStack
        className={`w-full ${gap} ${className}`}
        onClick={onClick}
        style={{ ...style }}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </HStack>
    );
  }
);
HStackFull.displayName = "HStackFull";

// -------------------------- VSTACK COMPONENT -------------------------- //
export const VStack = React.forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
    gap?: string;
    style?: React.CSSProperties;
    align?: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    tabIndex?: number;
  } & any
>(
  (
    {
      children,
      gap = "gap-2",
      className = "",
      style = {},
      align = "items-center",
      onClick,
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        tabIndex={tabIndex}
        onClick={onClick}
        className={`flex flex-col ${align} ${gap} ${className}`}
        ref={ref}
        style={{ ...style }}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
VStack.displayName = "VStack";

// -------------------------- VSTACK FULL -------------------------- //
export const VStackFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    gap?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    align?: "items-start" | "items-center" | "items-end";
    tabIndex?: number;
  } & any
>(
  (
    {
      children,
      className = "",
      gap = "",
      onClick,
      style = {},
      align = "items-center",
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <VStack
        ref={ref}
        className={`w-full ${gap} ${className}`}
        onClick={onClick}
        style={{ ...style }}
        align={align}
        tabIndex={tabIndex}
        {...motionProps} // Spread motion props
      >
        {children}
      </VStack>
    );
  }
);
VStackFull.displayName = "VStackFull";

// -------------------------- CENTER COMPONENT -------------------------- //
export const Center = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    widths?: string;
    onClick?: () => void;
    id?: string;
    style?: React.CSSProperties;
  } & any
>(({ children, className, onClick, id, style = {}, ...motionProps }, ref) => {
  return (
    <Flex
      className={`justify-center items-center ${className}`}
      id={id}
      ref={ref}
      onClick={onClick}
      style={{ ...style }}
      {...motionProps} // Spread motion props
    >
      {children}
    </Flex>
  );
});
Center.displayName = "Center";

// -------------------------- CENTER FULL -------------------------- //

export const CenterFull = React.forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    widths?: string;
    onClick?: () => void;
    id?: string;
    style?: React.CSSProperties;
  } & any
>(({ children, className, onClick, id, style = {}, ...motionProps }, ref) => {
  return (
    <Flex
      className={`w-full justify-center items-center ${className}`}
      id={id}
      ref={ref}
      onClick={onClick}
      style={{ ...style }}
      {...motionProps} // Spread motion props
    >
      {children}
    </Flex>
  );
});
CenterFull.displayName = "CenterFull";

// -------------------------- TRANSITION COMPONENT -------------------------- //
export type TransitionType =
  | "fade"
  | "scale"
  | "slide"
  | "rotate"
  | "flip"
  | "zoom"
  | "slideInLeft"
  | "slideInTopLeft"
  | "slideInBottomLeft"
  | "slideInTop"
  | "slideInTopRight"
  | "slideInRight"
  | "slideInBottomRight"
  | "slideInBottom"
  | "fadeSlideInRight"
  | "fadeSlideInLeft"
  | "fadeSlideInTopLeft"
  | "fadeSlideInBottomLeft"
  | "fadeSlideInTop"
  | "fadeSlideInTopRight"
  | "fadeSlideInBottomRight"
  | "fadeSlideInBottom";

interface TransitionProps {
  children: ReactNode;
  className?: string;
  type?: TransitionType;
  delay?: number;
  duration?: number;
  style?: object;
  onClick?: () => void;
  key?: string;
}

const transitionVariants: Record<TransitionType, Variants> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  },
  rotate: {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 90, opacity: 0 },
  },
  flip: {
    initial: { scaleX: -1, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    exit: { scaleX: -1, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  slide: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideInLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideInTopLeft: {
    initial: { x: "-100%", y: "-100%" },
    animate: { x: 0, y: 0 },
    exit: { x: "-100%", y: "-100%" },
  },
  slideInBottomLeft: {
    initial: { x: "-100%", y: "100%" },
    animate: { x: 0, y: 0 },
    exit: { x: "-100%", y: "100%" },
  },
  slideInTop: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  },
  slideInTopRight: {
    initial: { x: "100%", y: "-100%" },
    animate: { x: 0, y: 0 },
    exit: { x: "100%", y: "-100%" },
  },
  slideInRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
  slideInBottomRight: {
    initial: { x: "100%", y: "100%" },
    animate: { x: 0, y: 0 },
    exit: { x: "100%", y: "100%" },
  },
  slideInBottom: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  },

  fadeSlideInRight: {
    initial: { x: "50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "50%", opacity: 0 },
  },

  fadeSlideInLeft: {
    initial: { x: "-50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-50%", opacity: 0 },
  },
  fadeSlideInTopLeft: {
    initial: { x: "-50%", y: "-50%", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-50%", y: "-50%", opacity: 0 },
  },
  fadeSlideInBottomLeft: {
    initial: { x: "-50%", y: "50%", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-50%", y: "50%", opacity: 0 },
  },
  fadeSlideInTop: {
    initial: { y: "-50%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-50%", opacity: 0 },
  },
  fadeSlideInTopRight: {
    initial: { x: "50%", y: "-50%", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "50%", y: "-50%", opacity: 0 },
  },
  fadeSlideInBottomRight: {
    initial: { x: "50%", y: "50%", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "50%", y: "50%", opacity: 0 },
  },
  fadeSlideInBottom: {
    initial: { y: "50%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "50%", opacity: 0 },
  },
};

export function Transition({
  children,
  type = "fade",
  delay = 0,
  className = "",
  style = {},
  duration = 0.5,
  onClick,
  key,
}: TransitionProps) {
  return (
    <motion.div
      className={`flex justify-center overflow-hidden ${className}`}
      key={key}
      variants={transitionVariants[type]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration, delay }}
      style={style}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

// -------------------------- TRANSITION FULL -------------------------- //
export function TransitionFull({
  children,
  type = "fade",
  delay = 0,
  className = "",
  style = {},
  duration = 0.5,
  onClick,
  key,
}: TransitionProps) {
  return (
    <Transition
      type={type}
      delay={delay}
      className={`w-full ${className}`}
      style={style}
      duration={duration}
      onClick={onClick}
      key={key}
    >
      {children}
    </Transition>
  );
}
