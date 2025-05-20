import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Transition } from "./mainComponents";

export type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "topLeftCorner"
  | "topRightCorner";

interface TooltipProps {
  label?: string | null;
  bg?: string; // e.g., 'bg-red-500'
  color?: string; // e.g., 'text-white'
  w?: string; // Tailwind width classes e.g., 'w-auto'
  fontSize?: string; // e.g., 'text-base'
  children?: React.ReactNode;
  placement?: TooltipPlacement;
  displacementPercentage?: string; // Custom calculation may be needed
  className?: string;
  border?: string;
  tabIndex?: number;
  textShadow?: string;
  spacing?: string;
  padding?: string;
  disabled?: boolean;
}

export default function Tooltip({
  label,
  bg = "bg-col-900",
  color = "text-col-200 subtleTextShadow",
  textShadow = "textShadow",
  w = "w-auto",
  children,
  placement = "bottom",
  border = "",
  className = "",
  tabIndex = -1,
  padding = "pt-0.2vh pb-0.4vh",
  spacing = "pt-0.3vh",
  disabled = false,
}: TooltipProps) {
  const [isHovered, setHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const updateTooltipPosition = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (placement) {
        case "bottom":
          top = rect.bottom;
          left = rect.left + rect.width / 2;
          break;
        case "top":
          top = rect.top;
          left = rect.left + rect.width / 2;
          break;
        case "left":
          top = rect.top + rect.height / 2;
          left = rect.left;
          break;
        case "right":
          top = rect.top + rect.height / 2;
          left = rect.right;
          break;
        case "topLeft":
          top = rect.top;
          left = rect.left;
          break;
        case "topRight":
          top = rect.top;
          left = rect.right;
          break;
        case "bottomLeft":
          top = rect.bottom;
          left = rect.left;
          break;
        case "bottomRight":
          top = rect.bottom;
          left = rect.right;
          break;
        case "topLeftCorner":
          top = rect.top;
          left = rect.left - 4; // Small offset for better positioning
          break;
        case "topRightCorner":
          top = rect.top;
          left = rect.right + 4; // Small offset for better positioning
          break;
      }

      setTooltipPosition({ top, left });
    }
  };

  React.useEffect(() => {
    if (isHovered) {
      updateTooltipPosition();
    }
  }, [isHovered]);

  let placementStyles;
  switch (placement) {
    case "top":
      placementStyles = `bottom-full left-1/2 transform -translate-x-1/2`;
      break;
    case "bottom":
      placementStyles = `top-full left-1/2 transform -translate-x-1/2`;
      break;
    case "topLeftCorner":
      placementStyles = `right-full top-[0.1vh] transform -translate-y-1/2`;
      break;
    case "topRightCorner":
      placementStyles = `left-full top-[0.5vh] transform -translate-y-1/2`;
      break;
    case "left":
      placementStyles = `right-full top-1/2 transform -translate-y-1/2`;
      break;
    case "right":
      placementStyles = `left-full top-1/2 transform -translate-y-1/2`;
      break;
    case "topLeft":
      placementStyles = `bottom-full right-0`;
      break;
    case "topRight":
      placementStyles = `bottom-full left-0`;
      break;
    case "bottomLeft":
      placementStyles = `top-full right-0`;
      break;
    case "bottomRight":
      placementStyles = `top-full left-0`;
      break;
    default:
      placementStyles = "";
  }

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex ${className} ${
        disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
      }`}
      tabIndex={tabIndex}
    >
      <div
        className={`relative inline-block ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        tabIndex={tabIndex}
        onClick={() => setHovered(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setHovered(false);
          }
        }}
        role="button"
      >
        {/* Child Element */}
        {children}
        {/* Tooltip */}
        {isHovered &&
          label &&
          document.body &&
          createPortal(
            <div
              className="absolute"
              style={{
                position: "absolute",
                top: `${tooltipPosition.top}px`,
                left: `${tooltipPosition.left}px`,
                transform: (() => {
                  switch (placement) {
                    case "bottom":
                      return "translateX(-50%)";
                    case "top":
                      return "translateX(-50%) translateY(-100%)";
                    case "left":
                      return "translateX(-100%) translateY(-50%)";
                    case "right":
                      return "translateY(-50%)";
                    case "topLeft":
                      return "translateY(-100%)";
                    case "topRight":
                      return "translateY(-100%)";
                    case "bottomLeft":
                      return "";
                    case "bottomRight":
                      return "";
                    case "topLeftCorner":
                      return "translateY(-50%) translateX(-100%)";
                    case "topRightCorner":
                      return "translateY(-50%)";
                    default:
                      return "";
                  }
                })(),

                pointerEvents: "none",
              }}
            >
              <Transition className={`rounded-md ${spacing}`} duration={0.1}>
                <div
                  className={`text-1.4vh justify-center ${padding} px-0.8vh ${textShadow} whitespace-nowrap rounded-sm ${border} ${w} ${bg} ${color}`}
                  style={{ lineHeight: 1.1, zIndex: 9999 }}
                >
                  {label}
                </div>
              </Transition>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
}
