import { NavLink, useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { CSSProperties, useMemo } from "react";
import Tooltip, { TooltipPlacement } from "./tooltip";
import Text, {
  Box,
  HStackFull,
  Transition,
  TransitionVariantType,
} from "./mainComponents";
import { smallButtonIconSizes } from "styles";
import { smallButtonPadding } from "styles";

export default function IconButton({
  icon: Icon,
  onClick,
  disabled,
  className,
  tooltipLabel,
  tooltipPlacement,
  link,
  delay = 0.1,
  animation = "none",
  bgColor = "bg-col-300",
  iconColor = "text-col-900",
  hoverBgColor = "hover:bg-col-200",
  hoverIconColor = "hover:text-col-900",
  iconSize,
  padding = "p-0.5vh",
  type = "button",
  target,
  isActive,
  activeBgColor = "bg-col-800 bg-gradient-to-bl from-col-230 via-col-220 to-col-230",
  activeIconColor = "text-col-200",
  activeHoverBgColor = "hover:bg-col-800",
  activeHoverIconColor = "hover:text-col-200",
  activeBorderColor = "border-200-md",
  inactiveBorderColor = "border-900-md",
  activeTextColor = "text-col-200",
  inactiveTextColor = "text-col-900",
  inactiveShadow = "shadowNarrowTight",
  activeShadow = "shadowNarrowNormal",
  autoFocus = false,
  isSmallSizes = false,
}: {
  icon: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
  onClick?: () => void | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  disabled?: boolean;
  className?: string;
  tooltipLabel?: string;
  tooltipPlacement?: TooltipPlacement;
  iconColor?: string;
  hoverIconColor?: string;
  link?: string;
  delay?: number;
  animation?: TransitionVariantType;
  bgColor?: string;
  hoverBgColor?: string;
  iconSize?: string;
  padding?: string;
  type?: "button" | "submit";
  target?: string;
  isActive?: boolean;
  activeBgColor?: string;
  activeHoverBgColor?: string;
  activeIconColor?: string;
  activeHoverIconColor?: string;
  activeBorderColor?: string;
  inactiveBorderColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  inactiveShadow?: string;
  activeShadow?: string;
  autoFocus?: boolean;
  isSmallSizes?: boolean;
}) {
  return link ? (
    <NavLink
      to={link}
      className="no-link-emoji focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-full z-5 pointer-events-auto flex flex-shrink-0"
      target={target}
      prefetch="intent"
      tabIndex={1}
    >
      <Tooltip
        label={!disabled ? tooltipLabel : null}
        placement={tooltipPlacement}
      >
        <Transition delay={delay} type={animation}>
          <motion.div
            onClick={onClick}
            className={`flex items-center justify-center pointer-events-auto ${
              disabled ? "cursor-not-allowed" : "hover:cursor-pointer"
            } ${isSmallSizes ? smallButtonPadding : padding} ${
              isActive ? activeBgColor : bgColor
            } ${
              !disabled && !isActive
                ? hoverBgColor
                : disabled
                ? "opacity-30"
                : activeHoverBgColor
            } transition-300 rounded-full ${
              isActive ? activeBorderColor : inactiveBorderColor
            } ${isActive ? activeTextColor : inactiveTextColor} ${
              isActive ? activeShadow : inactiveShadow
            } ${className} `}
          >
            <Icon
              className={`${isSmallSizes ? smallButtonIconSizes : iconSize} ${
                isActive ? activeIconColor : iconColor
              } ${
                isActive ? activeHoverIconColor : hoverIconColor
              } overflow-visible`}
              style={{ borderRadius: "none" }}
            />
          </motion.div>
        </Transition>
      </Tooltip>
    </NavLink>
  ) : (
    <Tooltip
      label={!disabled ? tooltipLabel : null}
      placement={tooltipPlacement}
    >
      <Transition
        delay={delay}
        type={animation}
        className="flex flex-shrink-0"
        style={{ pointerEvents: "auto" }}
      >
        <motion.button
          type={type}
          disabled={disabled}
          onClick={onClick}
          autoFocus={autoFocus}
          className={`${
            disabled ? "cursor-not-allowed" : "hover:cursor-pointer"
          } flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
            isSmallSizes ? smallButtonPadding : padding
          } ${isActive ? activeBgColor : bgColor} ${
            !disabled && !isActive
              ? hoverBgColor
              : disabled
              ? "opacity-30"
              : activeHoverBgColor
          } transition-300 rounded-full ${
            isActive ? activeBorderColor : inactiveBorderColor
          } ${isActive ? activeTextColor : inactiveTextColor} ${
            isActive ? activeShadow : inactiveShadow
          } ${className} `}
        >
          <Icon
            className={`${isSmallSizes ? smallButtonIconSizes : iconSize} ${
              isActive ? activeIconColor : iconColor
            } ${isActive ? activeHoverIconColor : hoverIconColor}`}
            style={{ borderRadius: "none" }}
          />
        </motion.button>
      </Transition>
    </Tooltip>
  );
}

export function TextButton({
  icon: Icon,
  label,
  onClick,
  disabled,
  className,
  gap = "gap-1vh",
  iconRight = false,
  link,
  animationDelay: delay = 0,
  animationDuration = 0.3,
  animation = "none",
  textSize,
  padding = " p-1vh md:px-2vh py-0.3vh",
  bgColor = "bg-col-300",
  hoverBgColor = "hover:bg-col-200",
  hoverTextColor = "hover:text-col-900",
  iconSize,
  type = "button",
  width,
  isActive = false,
  activeBgColor = "bg-col-800 bg-gradient-to-bl from-col-230 via-col-220 to-col-230",
  activeTextColor = "text-cyan-100",
  activeHoverBgColor = "hover:bg-col-800",
  activeHoverTextColor = "hover:text-col-200",
  target,
  iconContainerClassName,
  zIndex = "z-5",
  autoFocus = false,
  isSmallSizes = false,
  textColor = "text-col-900",
  shadow = "shadowNarrowTight",
  hoverShadow = "hover:shadowNarrowNormal",
}: {
  icon?: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  gap?: string;
  iconRight?: boolean;
  link?: string;
  animationDelay?: number;
  animationDuration?: number;
  animation?: TransitionVariantType;
  textSize?: string;
  padding?: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  iconSize?: string;
  width?: string;
  type?: "button" | "submit";
  isActive?: boolean;
  activeBgColor?: string;
  activeHoverBgColor?: string;
  activeTextColor?: string;
  activeHoverTextColor?: string;
  target?: string;
  iconContainerClassName?: string;
  zIndex?: string;
  autoFocus?: boolean;
  isSmallSizes?: boolean;
  textColor?: string;
  shadow?: string;
  hoverShadow?: string;
}) {
  const location = useLocation();

  const ButtonContents = useMemo(() => {
    const Contents = () => (
      <Transition
        delay={delay}
        type={animation}
        className={`${width} ${zIndex} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300  `}
        duration={animationDuration}
        style={{ pointerEvents: "auto" }}
      >
        <motion.button
          tabIndex={1}
          type={type}
          disabled={disabled}
          onClick={onClick}
          autoFocus={autoFocus}
          className={`w-full flex items-center justify-center ${
            isActive
              ? `${activeBgColor} ${activeHoverBgColor} border-200-md`
              : `${bgColor} ${hoverBgColor} border-900-md `
          } ${
            !disabled ? hoverBgColor : "opacity-30"
          } transition-300 rounded-2vh ${shadow} ${hoverShadow} w-full ${className}`}
        >
          <HStackFull
            className={`${
              isSmallSizes ? "px-1vh py-0" : padding
            } items-center hover:cursor-pointer justify-center ${
              isActive
                ? `${activeTextColor} ${activeHoverTextColor}`
                : ` ${textColor} ${hoverTextColor} `
            }`}
            gap={gap}
          >
            <Box className={`${iconContainerClassName} rounded-none`}>
              {Icon && !iconRight && (
                <Icon
                  className={
                    `rounded-none ${
                      isSmallSizes ? "text-mdlg" : iconSize
                    }  ${hoverTextColor} hover:cursor-pointer` || ""
                  }
                  style={{ borderRadius: 0 }}
                />
              )}
            </Box>
            <Text
              className={`overflow-x-hidden rounded-none  ${
                isSmallSizes && "pb-0.3vh"
              }`}
              noOfLines={1}
              style={{ lineHeight: 1.1 }}
            >
              <span
                className={`text-nowrap font-semibold ${
                  isSmallSizes ? "text-sm lg:text-md" : textSize
                } ${isActive && "subtleTextShadow"} `}
                style={{ lineHeight: 1.1 }}
              >
                {label}
              </span>
            </Text>
            <Box className={`${iconContainerClassName} rounded-none`}>
              {Icon && iconRight && (
                <Icon
                  className={
                    `rounded-none ${
                      isSmallSizes ? "text-mdlg" : iconSize
                    } ${hoverTextColor} hover:cursor-pointer` || ""
                  }
                  style={{ borderRadius: 0 }}
                />
              )}
            </Box>
          </HStackFull>
        </motion.button>
      </Transition>
    );
    return Contents;
  }, [
    location.pathname,
    label,
    Icon,
    iconRight,
    delay,
    animation,
    disabled,
    onClick,
    className,
    gap,
    autoFocus,
  ]);

  return link ? (
    <NavLink to={link} target={target}>
      <ButtonContents />
    </NavLink>
  ) : (
    <ButtonContents />
  );
}
