import React, {
  CSSProperties,
  forwardRef,
  MouseEvent,
  ReactNode,
  RefObject,
} from "react";
import { HTMLMotionProps, motion, Variants } from "framer-motion";

// -------------------------- BOX COMPONENT -------------------------- //
interface BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: RefObject<HTMLDivElement>;
  pointerEvents?: "pointer-events-none" | "pointer-events-auto";
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
      pointerEvents = "pointer-events-none",
      ...motionProps // Pass motion props
    },
    ref
  ) => {
    return (
      <motion.div
        tabIndex={tabIndex}
        className={`focus:outline-none focus:ring-0 ${className} ${pointerEvents}`}
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
  pointerEvents?: "pointer-events-none" | "pointer-events-auto";
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
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        id={id}
        className={`flex focus:outline-none focus:ring-0 ${className} ${pointerEvents}`}
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
    {
      children,
      className = "",
      onClick,
      id,
      style = {},
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <Flex
        className={`w-full ${className} ${pointerEvents}`}
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
  pointerEvents?: "pointer-events-none" | "pointer-events-auto";
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
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        tabIndex={tabIndex}
        className={`focus:outline-none focus:ring-0 flex flex-row ${gap} ${className} ${pointerEvents}`}
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
    {
      children,
      className = "",
      gap = "",
      onClick,
      style = {},
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <HStack
        className={`w-full ${gap} ${className} ${pointerEvents}`}
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
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        tabIndex={tabIndex}
        onClick={onClick}
        className={`focus:outline-none focus:ring-0 flex flex-col ${align} ${gap} ${className} ${pointerEvents}`}
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
export const VStackFull = React.forwardRef<HTMLDivElement, FlexProps & any>(
  (
    {
      children,
      className = "",
      gap = "",
      onClick,
      style = {},
      align = "items-center",
      tabIndex = -1,
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <VStack
        ref={ref}
        className={`w-full ${gap} ${className} ${pointerEvents}`}
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
  (
    {
      children,
      className,
      onClick,
      id,
      style = {},
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <Flex
        className={`justify-center items-center ${className} ${pointerEvents}`}
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
  (
    {
      children,
      className,
      onClick,
      id,
      style = {},
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <Flex
        className={`w-full justify-center items-center ${className} ${pointerEvents}  `}
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
export const transitionVariants: Record<string, Variants> = {
  zigZagZoom: {
    initial: { x: `-${30 / 2}vw`, opacity: 0, scale: 0 },
    animate: {
      x: [`-${30 / 2}vw`, `${30 / 2}vw`, `-${30 / 2}vw`, `${30 / 2}vw`, "0vw"],
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "tween", duration: 2, ease: "easeInOut" },
        scale: { type: "tween", duration: 2, ease: "easeInOut" }, // Sync with x
        opacity: { duration: 2 }, // Matches the total duration
      },
    },
    exit: { x: `${30 / 2}vw`, opacity: 0, scale: 0.5 },
  },
  zigZagSpinZoom: {
    initial: { x: `-${30 / 2}vw`, opacity: 0, scale: 0, rotate: 0 },
    animate: {
      x: [`-${30 / 2}vw`, `${30 / 2}vw`, `-${30 / 2}vw`, `${30 / 2}vw`, "0vw"],
      opacity: 1,
      scale: 1,
      rotate: 360, // Smooth continuous rotation over the animation
      transition: {
        x: { type: "tween", duration: 2.5, ease: "easeInOut" }, // Slightly longer duration for smoothness
        scale: { type: "tween", duration: 2.5, ease: "easeInOut" },
        rotate: {
          type: "tween",
          duration: 2.5, // Matches x and scale duration for continuity
          ease: "linear",
        },
        opacity: { duration: 2.5 }, // Fade-in duration
      },
    },
    exit: { x: `${30 / 2}vw`, opacity: 0, scale: 0.5, rotate: 0 }, // Reset on exit
  },
  zoomFlyForward: {
    initial: { y: `-${20 / 2}vw`, opacity: 0, scale: 0 },
    animate: {
      y: [`-${20 / 2}vw`, `${20 / 2}vw`, `-${20 / 2}vw`, `${20 / 2}vw`, "0vw"],
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: "tween", duration: 1.5, ease: "easeInOut" },
        scale: { type: "tween", duration: 1.5, ease: "easeInOut" }, // Sync with x
        opacity: { duration: 1 }, // Matches the total duration
      },
    },
    exit: { y: `${20 / 2}vw`, opacity: 0, scale: 0.5 },
  },
  slide: {
    initial: { x: "-100vw" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideHalf: {
    initial: { x: "-50vw" },
    animate: { x: 0 },
    exit: { x: "-50%" },
  },
  slideInLeft: {
    initial: { x: "-100vw" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideInLeftHalf: {
    initial: { x: "-50vw" },
    animate: { x: 0 },
    exit: { x: "-50%" },
  },
  slideInTopLeft: {
    initial: { x: "-100vw", y: "-100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-100%", y: "-100%" },
  },
  slideInTopLeftHalf: {
    initial: { x: "-50vw", y: "-50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-50%", y: "-50%" },
  },
  slideInBottomLeft: {
    initial: { x: "-100vw", y: "100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-100%", y: "100%" },
  },
  slideInBottomLeftHalf: {
    initial: { x: "-50vw", y: "50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-50%", y: "50%" },
  },
  slideInTop: {
    initial: { y: "-100vh" },
    animate: { y: 0 },
    exit: { y: "-100vh" },
  },
  slideInTopHalf: {
    initial: { y: "-50vh" },
    animate: { y: 0 },
    exit: { y: "-50vh" },
  },
  slideInTopRight: {
    initial: { x: "100vw", y: "-100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "100vw", y: "-100vh" },
  },
  slideInTopRightHalf: {
    initial: { x: "50vw", y: "-50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "50vw", y: "-50vh" },
  },
  slideInRight: {
    initial: { x: "100vw" },
    animate: { x: 0 },
    exit: { x: "100vw" },
  },
  slideInRightHalf: {
    initial: { x: "50vw" },
    animate: { x: 0 },
    exit: { x: "50vw" },
  },
  slideInBottomRight: {
    initial: { x: "100vw", y: "100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "100vw", y: "100vh" },
  },
  slideInBottomRightHalf: {
    initial: { x: "50vw", y: "50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "50vw", y: "50vh" },
  },
  slideInBottom: {
    initial: { y: "100vh" },
    animate: { y: 0 },
    exit: { y: "100vh" },
  },
  slideInBottomHalf: {
    initial: { y: "50vh" },
    animate: { y: 0 },
    exit: { y: "50vh" },
  },
  fadeSlideInRight: {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100vw", opacity: 0 },
  },
  fadeSlideInRightHalf: {
    initial: { x: "50vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "50vw", opacity: 0 },
  },
  fadeSlideInLeft: {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100vw", opacity: 0 },
  },
  fadeSlideInLeftHalf: {
    initial: { x: "-50vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-50vw", opacity: 0 },
  },
  fadeSlideInTopLeft: {
    initial: { x: "-100vw", y: "-100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-100vw", y: "-100vh", opacity: 0 },
  },
  fadeSlideInTopLeftHalf: {
    initial: { x: "-50vw", y: "-50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-50vw", y: "-50vh", opacity: 0 },
  },
  fadeSlideInBottomLeft: {
    initial: { x: "-100vw", y: "100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-100vw", y: "100vh", opacity: 0 },
  },
  fadeSlideInBottomLeftHalf: {
    initial: { x: "-50vw", y: "50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-50vw", y: "50vh", opacity: 0 },
  },
  fadeSlideInTop: {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100vh", opacity: 0 },
  },
  fadeSlideInTopHalf: {
    initial: { y: "-50vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-50vh", opacity: 0 },
  },
  fadeSlideInTopRight: {
    initial: { x: "100vw", y: "-100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "100vw", y: "-100vh", opacity: 0 },
  },
  fadeSlideInTopRightHalf: {
    initial: { x: "50vw", y: "-50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "50vw", y: "-50vh", opacity: 0 },
  },
  fadeSlideInBottomRight: {
    initial: { x: "100vw", y: "100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "100vw", y: "100vh", opacity: 0 },
  },
  fadeSlideInBottomRightHalf: {
    initial: { x: "50vw", y: "50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "50vw", y: "50vh", opacity: 0 },
  },
  fadeSlideInBottom: {
    initial: { y: "100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100vh", opacity: 0 },
  },
  fadeSlideInBottomHalf: {
    initial: { y: "50vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "50vh", opacity: 0 },
  },
  slideThird: {
    initial: { x: "-33vw" },
    animate: { x: 0 },
    exit: { x: "-33%" },
  },
  slideInLeftThird: {
    initial: { x: "-33vw" },
    animate: { x: 0 },
    exit: { x: "-33%" },
  },
  slideInTopLeftThird: {
    initial: { x: "-33vw", y: "-33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-33%", y: "-33%" },
  },
  slideInBottomLeftThird: {
    initial: { x: "-33vw", y: "33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-33%", y: "33%" },
  },
  slideInTopThird: {
    initial: { y: "-33vh" },
    animate: { y: 0 },
    exit: { y: "-33vh" },
  },
  slideInTopRightThird: {
    initial: { x: "33vw", y: "-33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "33vw", y: "-33vh" },
  },
  slideInRightThird: {
    initial: { x: "33vw" },
    animate: { x: 0 },
    exit: { x: "33vw" },
  },
  slideInBottomRightThird: {
    initial: { x: "33vw", y: "33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "33vw", y: "33vh" },
  },
  slideInBottomThird: {
    initial: { y: "33vh" },
    animate: { y: 0 },
    exit: { y: "33vh" },
  },
  fadeSlideInRightThird: {
    initial: { x: "33vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "33vw", opacity: 0 },
  },
  fadeSlideInLeftThird: {
    initial: { x: "-33vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-33vw", opacity: 0 },
  },
  fadeSlideInTopLeftThird: {
    initial: { x: "-33vw", y: "-33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-33vw", y: "-33vh", opacity: 0 },
  },
  fadeSlideInBottomLeftThird: {
    initial: { x: "-33vw", y: "33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-33vw", y: "33vh", opacity: 0 },
  },
  fadeSlideInTopThird: {
    initial: { y: "-33vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-33vh", opacity: 0 },
  },
  fadeSlideInTopRightThird: {
    initial: { x: "33vw", y: "-33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "33vw", y: "-33vh", opacity: 0 },
  },
  fadeSlideInBottomRightThird: {
    initial: { x: "33vw", y: "33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "33vw", y: "33vh", opacity: 0 },
  },
  fadeSlideInBottomThird: {
    initial: { y: "33vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "33vh", opacity: 0 },
  },
  slideQuarter: {
    initial: { x: "-25vw" },
    animate: { x: 0 },
    exit: { x: "-25%" },
  },
  slideInLeftQuarter: {
    initial: { x: "-25vw" },
    animate: { x: 0 },
    exit: { x: "-25%" },
  },
  slideInTopLeftQuarter: {
    initial: { x: "-25vw", y: "-25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-25%", y: "-25%" },
  },
  slideInBottomLeftQuarter: {
    initial: { x: "-25vw", y: "25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-25%", y: "25%" },
  },
  slideInTopQuarter: {
    initial: { y: "-25vh" },
    animate: { y: 0 },
    exit: { y: "-25vh" },
  },
  slideInTopRightQuarter: {
    initial: { x: "25vw", y: "-25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "25vw", y: "-25vh" },
  },
  slideInRightQuarter: {
    initial: { x: "25vw" },
    animate: { x: 0 },
    exit: { x: "25vw" },
  },
  slideInBottomRightQuarter: {
    initial: { x: "25vw", y: "25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "25vw", y: "25vh" },
  },
  slideInBottomQuarter: {
    initial: { y: "25vh" },
    animate: { y: 0 },
    exit: { y: "25vh" },
  },
  fadeSlideInRightQuarter: {
    initial: { x: "25vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "25vw", opacity: 0 },
  },
  fadeSlideInLeftQuarter: {
    initial: { x: "-25vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-25vw", opacity: 0 },
  },
  fadeSlideInTopLeftQuarter: {
    initial: { x: "-25vw", y: "-25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-25vw", y: "-25vh", opacity: 0 },
  },
  fadeSlideInBottomLeftQuarter: {
    initial: { x: "-25vw", y: "25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-25vw", y: "25vh", opacity: 0 },
  },
  fadeSlideInTopQuarter: {
    initial: { y: "-25vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-25vh", opacity: 0 },
  },
  fadeSlideInTopRightQuarter: {
    initial: { x: "25vw", y: "-25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "25vw", y: "-25vh", opacity: 0 },
  },
  fadeSlideInBottomRightQuarter: {
    initial: { x: "25vw", y: "25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "25vw", y: "25vh", opacity: 0 },
  },
  fadeSlideInBottomQuarter: {
    initial: { y: "25vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "25vh", opacity: 0 },
  },
  slideTwoThirds: {
    initial: { x: "-66vw" },
    animate: { x: 0 },
    exit: { x: "-66%" },
  },
  slideInLeftTwoThirds: {
    initial: { x: "-66vw" },
    animate: { x: 0 },
    exit: { x: "-66%" },
  },
  slideInTopLeftTwoThirds: {
    initial: { x: "-66vw", y: "-66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-66%", y: "-66%" },
  },
  slideInBottomLeftTwoThirds: {
    initial: { x: "-66vw", y: "66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-66%", y: "66%" },
  },
  slideInTopTwoThirds: {
    initial: { y: "-66vh" },
    animate: { y: 0 },
    exit: { y: "-66vh" },
  },
  slideInTopRightTwoThirds: {
    initial: { x: "66vw", y: "-66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "66vw", y: "-66vh" },
  },
  slideInRightTwoThirds: {
    initial: { x: "66vw" },
    animate: { x: 0 },
    exit: { x: "66vw" },
  },
  slideInBottomRightTwoThirds: {
    initial: { x: "66vw", y: "66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "66vw", y: "66vh" },
  },
  slideInBottomTwoThirds: {
    initial: { y: "66vh" },
    animate: { y: 0 },
    exit: { y: "66vh" },
  },
  fadeSlideInRightTwoThirds: {
    initial: { x: "66vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "66vw", opacity: 0 },
  },
  fadeSlideInLeftTwoThirds: {
    initial: { x: "-66vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-66vw", opacity: 0 },
  },
  fadeSlideInTopLeftTwoThirds: {
    initial: { x: "-66vw", y: "-66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-66vw", y: "-66vh", opacity: 0 },
  },
  fadeSlideInBottomLeftTwoThirds: {
    initial: { x: "-66vw", y: "66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-66vw", y: "66vh", opacity: 0 },
  },
  fadeSlideInTopTwoThirds: {
    initial: { y: "-66vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-66vh", opacity: 0 },
  },
  fadeSlideInTopRightTwoThirds: {
    initial: { x: "66vw", y: "-66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "66vw", y: "-66vh", opacity: 0 },
  },
  fadeSlideInBottomRightTwoThirds: {
    initial: { x: "66vw", y: "66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "66vw", y: "66vh", opacity: 0 },
  },
  fadeSlideInBottomTwoThirds: {
    initial: { y: "66vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "66vh", opacity: 0 },
  },
  slideThreeQuarters: {
    initial: { x: "-75vw" },
    animate: { x: 0 },
    exit: { x: "-75%" },
  },
  slideInLeftThreeQuarters: {
    initial: { x: "-75vw" },
    animate: { x: 0 },
    exit: { x: "-75%" },
  },
  slideInTopLeftThreeQuarters: {
    initial: { x: "-75vw", y: "-75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-75%", y: "-75%" },
  },
  slideInBottomLeftThreeQuarters: {
    initial: { x: "-75vw", y: "75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-75%", y: "75%" },
  },
  slideInTopThreeQuarters: {
    initial: { y: "-75vh" },
    animate: { y: 0 },
    exit: { y: "-75vh" },
  },
  slideInTopRightThreeQuarters: {
    initial: { x: "75vw", y: "-75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "75vw", y: "-75vh" },
  },
  slideInRightThreeQuarters: {
    initial: { x: "75vw" },
    animate: { x: 0 },
    exit: { x: "75vw" },
  },
  slideInBottomRightThreeQuarters: {
    initial: { x: "75vw", y: "75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "75vw", y: "75vh" },
  },
  slideInBottomThreeQuarters: {
    initial: { y: "75vh" },
    animate: { y: 0 },
    exit: { y: "75vh" },
  },
  fadeSlideInRightThreeQuarters: {
    initial: { x: "75vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "75vw", opacity: 0 },
  },
  fadeSlideInLeftThreeQuarters: {
    initial: { x: "-75vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-75vw", opacity: 0 },
  },
  fadeSlideInTopLeftThreeQuarters: {
    initial: { x: "-75vw", y: "-75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-75vw", y: "-75vh", opacity: 0 },
  },
  fadeSlideInBottomLeftThreeQuarters: {
    initial: { x: "-75vw", y: "75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-75vw", y: "75vh", opacity: 0 },
  },
  fadeSlideInTopThreeQuarters: {
    initial: { y: "-75vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-75vh", opacity: 0 },
  },
  fadeSlideInTopRightThreeQuarters: {
    initial: { x: "75vw", y: "-75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "75vw", y: "-75vh", opacity: 0 },
  },
  fadeSlideInBottomRightThreeQuarters: {
    initial: { x: "75vw", y: "75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "75vw", y: "75vh", opacity: 0 },
  },
  fadeSlideInBottomThreeQuarters: {
    initial: { y: "75vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "75vh", opacity: 0 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  fade: {
    initial: { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.8)" },
    animate: { opacity: 1, backgroundColor: "transparent" },
    exit: { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.8)" },
  },
  fadeWithExit: {
    initial: { opacity: 0, backgroundColor: "#000000" },
    animate: { opacity: 1, backgroundColor: "transparent" },
    exit: { opacity: 0, backgroundColor: "#000000" },
  },
  fadeNoBg: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeWithExitNoBg: {
    initial: { opacity: 0 },
    animate: { opacity: 1, backgroundColor: "transparent" },
    exit: { opacity: 0 },
  },
  fade10: {
    initial: { opacity: 0.1 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade20: {
    initial: { opacity: 0.2 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade30: {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade40: {
    initial: { opacity: 0.4 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade50: {
    initial: { opacity: 0.5 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade60: {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade70: {
    initial: { opacity: 0.7 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fade80: {
    initial: { opacity: 0.8 },
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
  flipY: {
    initial: { scaleY: -1, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    exit: { scaleY: -1, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  rotate3D: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  scaleRotate: {
    initial: { scale: 0, rotate: 180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0 },
  },
  bounce: {
    initial: { y: "-100vh" },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    exit: { y: "-100vh" },
  },
  spin: {
    initial: { rotate: 0, opacity: 0 },
    animate: { rotate: 360, opacity: 1 },
    exit: { rotate: 0, opacity: 0 },
  },
};

// -------------------------- TRANSITION COMPONENT -------------------------- //
export type TransitionVariantType = keyof typeof transitionVariants;

type TransitionProps = {
  children?: ReactNode;
  className?: string;
  type?: TransitionVariantType;
  variants?: Variants;
  animationType?: "tween" | "spring";
  mass?: number;
  damping?: number;
  stiffness?: number;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  onClick?: () => void;
  pointerEvents?: "pointer-events-none" | "pointer-events-auto";
} & Omit<
  HTMLMotionProps<"div">,
  "transition" | "variants" | "initial" | "animate" | "exit"
>;

export const Transition = forwardRef<HTMLDivElement, TransitionProps>(
  (
    {
      children,
      type = "fade",
      variants,
      animationType = "tween",
      mass = 1,
      damping = 20,
      stiffness = 200,
      pointerEvents = "pointer-events-none",
      delay = 0,
      className = "",
      style = {},
      duration = 0.8,
      onClick,
      ...otherProps
    },
    ref
  ) => {
    // Separate transition configuration
    const transitionConfig = {
      duration,
      delay,
      type: animationType,
      mass,
      damping,
      stiffness,
      ease: "easeOut", // You can make this configurable if needed
    };

    return (
      <motion.div
        ref={ref}
        className={`focus:outline-none focus:ring-0 flex justify-center ${className} ${pointerEvents}`}
        variants={variants || transitionVariants[type]}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transitionConfig}
        style={style}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </motion.div>
    );
  }
);

Transition.displayName = "Transition";

// -------------------------- WRAP COMPONENT -------------------------- //
interface WrapProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  pointerEvents?: "pointer-events-none" | "pointer-events-auto";
}

export const Wrap = React.forwardRef<HTMLDivElement, WrapProps & any>(
  (
    {
      children,
      className = "",
      style = {},
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        className={`w-full flex flex-wrap focus:outline-none focus:ring-0 ${className} ${pointerEvents}`}
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
  (
    {
      children,
      className = "",
      style = {},
      pointerEvents = "pointer-events-none",
      ...motionProps
    },
    ref
  ) => {
    return (
      <Wrap
        className={`w-full ${className} ${pointerEvents}  `}
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

// ----------- VSTACK FULL COMPONENT --------------- //
interface StackableFlexProps {
  align?: "items-start" | "items-center" | "items-end";
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  pointerEvents?: "pointer-events-none" | "pointer-events-auto";
  rowAt?: "base" | "sm" | "md" | "lg" | "xl" | "xxl" | "base";
}

export const StackableFlex = React.forwardRef<
  HTMLDivElement,
  StackableFlexProps & any
>(
  (
    {
      children,
      className = "",
      style = {},
      pointerEvents = "pointer-events-none",
      rowAt = "md",
      align = "items-end",
      ...motionProps
    },
    ref
  ) => {
    const stackwhen =
      rowAt === "base"
        ? align === "items-start"
          ? "flex-row gap-1vh items-start"
          : align === "items-center"
          ? "flex-row gap-1vh items-center"
          : "flex-row gap-1vh items-end"
        : rowAt === "sm"
        ? align === "items-start"
          ? "flex-col sm:flex-row sm:gap-1vh sm:items-start"
          : align === "items-center"
          ? "flex-col sm:flex-row sm:gap-1vh sm:items-center"
          : "flex-col sm:flex-row sm:gap-1vh sm:items-end"
        : rowAt === "md"
        ? align === "items-start"
          ? "flex-col md:flex-row md:gap-1vh md:items-start"
          : align === "items-center"
          ? "flex-col md:flex-row md:gap-1vh md:items-center"
          : "flex-col md:flex-row md:gap-1vh md:items-end"
        : rowAt === "lg"
        ? align === "items-start"
          ? "flex-col lg:flex-row lg:gap-1vh lg:items-start"
          : align === "items-center"
          ? "flex-col lg:flex-row lg:gap-1vh lg:items-center"
          : "flex-col lg:flex-row lg:gap-1vh lg:items-end"
        : rowAt === "xl"
        ? align === "items-start"
          ? "flex-col xl:flex-row xl:gap-1vh xl:items-start"
          : align === "items-center"
          ? "flex-col xl:flex-row xl:gap-1vh xl:items-center"
          : "flex-col xl:flex-row xl:gap-1vh xl:items-end"
        : rowAt === "xxl"
        ? align === "items-start"
          ? "flex-col xxl:flex-row xxl:gap-1vh xxl:items-start"
          : align === "items-center"
          ? "flex-col xxl:flex-row xxl:gap-1vh xxl:items-center"
          : "flex-col xxl:flex-row xxl:gap-1vh xxl:items-end"
        : align === "items-start"
        ? "flex-col sm:flex-row sm:gap-1vh sm:items-start"
        : align === "items-center"
        ? "flex-col sm:flex-row sm:gap-1vh sm:items-center"
        : "flex-col sm:flex-row sm:gap-1vh sm:items-end";

    return (
      <Flex
        className={`${className} ${pointerEvents} ${stackwhen}`}
        style={style}
        ref={ref}
        {...motionProps}
      >
        {children}
      </Flex>
    );
  }
);
StackableFlex.displayName = "StackableFlex";

export const StackableFlexFull = React.forwardRef<
  HTMLDivElement,
  StackableFlexProps & any
>(
  (
    {
      children,
      className = "",
      style = {},
      pointerEvents = "pointer-events-none",
      rowAt = "md",
      align = "items-end",
      ...motionProps
    },
    ref
  ) => {
    const stackwhen =
      rowAt === "base"
        ? align === "items-start"
          ? "flex-row gap-1vh items-start"
          : align === "items-center"
          ? "flex-row gap-1vh items-center"
          : "flex-row gap-1vh items-end"
        : rowAt === "sm"
        ? align === "items-start"
          ? "flex-col sm:flex-row sm:gap-1vh sm:items-start"
          : align === "items-center"
          ? "flex-col sm:flex-row sm:gap-1vh sm:items-center"
          : "flex-col sm:flex-row sm:gap-1vh sm:items-end"
        : rowAt === "md"
        ? align === "items-start"
          ? "flex-col md:flex-row md:gap-1vh md:items-start"
          : align === "items-center"
          ? "flex-col md:flex-row md:gap-1vh md:items-center"
          : "flex-col md:flex-row md:gap-1vh md:items-end"
        : rowAt === "lg"
        ? align === "items-start"
          ? "flex-col lg:flex-row lg:gap-1vh lg:items-start"
          : align === "items-center"
          ? "flex-col lg:flex-row lg:gap-1vh lg:items-center"
          : "flex-col lg:flex-row lg:gap-1vh lg:items-end"
        : rowAt === "xl"
        ? align === "items-start"
          ? "flex-col xl:flex-row xl:gap-1vh xl:items-start"
          : align === "items-center"
          ? "flex-col xl:flex-row xl:gap-1vh xl:items-center"
          : "flex-col xl:flex-row xl:gap-1vh xl:items-end"
        : rowAt === "xxl"
        ? align === "items-start"
          ? "flex-col xxl:flex-row xxl:gap-1vh xxl:items-start"
          : align === "items-center"
          ? "flex-col xxl:flex-row xxl:gap-1vh xxl:items-center"
          : "flex-col xxl:flex-row xxl:gap-1vh xxl:items-end"
        : align === "items-start"
        ? "flex-col sm:flex-row sm:gap-1vh sm:items-start"
        : align === "items-center"
        ? "flex-col sm:flex-row sm:gap-1vh sm:items-center"
        : "flex-col sm:flex-row sm:gap-1vh sm:items-end";

    return (
      <FlexFull
        className={`${className} ${pointerEvents} ${stackwhen}`}
        style={style}
        ref={ref}
        {...motionProps}
      >
        {children}
      </FlexFull>
    );
  }
);
StackableFlexFull.displayName = "StackableFlexFull";
