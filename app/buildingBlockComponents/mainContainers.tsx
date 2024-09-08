import React, { CSSProperties, MouseEvent, ReactNode, RefObject } from "react";
import { motion, Variants } from "framer-motion";

// -------------------------- BOX COMPONENT -------------------------- //
interface BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: CSSProperties;
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

export const Flex = React.forwardRef<HTMLDivElement, FlexProps & any>(
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
export const FlexFull = React.forwardRef<HTMLDivElement, FlexProps & any>(
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
  style?: CSSProperties;
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
      gap = "",
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

// -------------------------- HSTACK FULL COMPONENT -------------------------- //
export const HStackFull = React.forwardRef<HTMLDivElement, HStackProps & any>(
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
export const VStack = React.forwardRef<HTMLDivElement, HStackProps & any>(
  (
    {
      children,
      gap = "",
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

// -------------------------- VSTACK FULL COMPONENT -------------------------- //
export const VStackFull = React.forwardRef<HTMLDivElement, HStackProps & any>(
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
export const Center = React.forwardRef<HTMLDivElement, FlexProps & any>(
  ({ children, className, onClick, id, style = {}, ...motionProps }, ref) => {
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
  }
);
Center.displayName = "Center";

// -------------------------- CENTER FULL COMPONENT -------------------------- //
export const CenterFull = React.forwardRef<HTMLDivElement, FlexProps & any>(
  ({ children, className, onClick, id, style = {}, ...motionProps }, ref) => {
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
  }
);
CenterFull.displayName = "CenterFull";

// -------------------------- TRANSITION VARIANTS -------------------------- //
const transitionVariants: Record<string, Variants> = {
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
  slideInRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
  fadeSlideInRight: {
    initial: { x: "50%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "50%", opacity: 0 },
  },
};

// -------------------------- TRANSITION COMPONENT -------------------------- //
interface TransitionProps {
  children?: ReactNode;
  className?: string;
  type?: keyof typeof transitionVariants;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  onClick?: () => void;
  key?: string;
}

export const Transition = React.forwardRef<
  HTMLDivElement,
  TransitionProps & any
>(
  (
    {
      children,
      type = "fade",
      delay = 0,
      className = "",
      style = {},
      duration = 0.5,
      onClick,
      key,
      ...motionProps
    },
    ref
  ) => {
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
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
Transition.displayName = "Transition";

// -------------------------- TRANSITION FULL -------------------------- //

export const TransitionFull = React.forwardRef<
  HTMLDivElement,
  TransitionProps & any
>(
  (
    {
      children,
      type = "fade",
      delay = 0,
      className = "",
      style = {},
      duration = 0.5,
      onClick,
      key,
      ...motionProps
    },
    ref
  ) => {
    return (
      <Transition
        className={`w-full ${className}`}
        key={key}
        type={type}
        delay={delay}
        duration={duration}
        style={style}
        onClick={onClick}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </Transition>
    );
  }
);

// -------------------------- WRAP COMPONENT -------------------------- //
interface WrapProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Wrap = React.forwardRef<HTMLDivElement, WrapProps & any>(
  ({ children, className = "", style = {}, ...motionProps }, ref) => {
    return (
      <motion.div
        className={`w-full flex flex-wrap ${className}`}
        style={style}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
Wrap.displayName = "Wrap";

// -------------------------- WRAP FULL COMPONENT -------------------------- //
export const WrapFull = React.forwardRef<HTMLDivElement, WrapProps & any>(
  ({ children, className = "", style = {}, ...motionProps }, ref) => {
    return (
      <Wrap
        className={`w-full ${className}`}
        style={style}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </Wrap>
    );
  }
);
WrapFull.displayName = "WrapFull";
