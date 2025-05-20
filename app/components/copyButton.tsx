import { useEffect, useCallback, useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import Tooltip from "./tooltip";
import { TextButton } from "./customButtons";
import Icon from "./icon";

interface CopyButtonProps {
  showAnimatedText?: boolean;
  iconOnly?: boolean;
  iconSize?: string;
  label?: string;
  successLabel?: string;
  specialButton?: boolean;
  textToCopy: string;
  padding?: string;
  textSize?: string;
  textCopied: boolean;
  setTextCopied: (textCopied: boolean) => void;
  isSmallSizes?: boolean;
}

export default function CopyButton({
  iconOnly,
  iconSize,
  textToCopy,
  label = "copy link",
  successLabel = "copied!",
  padding,
  textSize,
  textCopied,
  setTextCopied,
  isSmallSizes,
}: CopyButtonProps) {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (textCopied) {
      // console.log("Setting timeout, current state:", textCopied);
      timeoutId = setTimeout(() => {
        // console.log("Timeout triggered, resetting state");
        setTextCopied(false);
      }, 4000);
    }
    return () => {
      if (timeoutId) {
        // console.log("Clearing timeout");
        clearTimeout(timeoutId);
      }
    };
  }, [textCopied, setTextCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      // console.log("Setting copied state to true");
      setTextCopied(true);
      // console.log("Copied: ", textToCopy);
    } catch (err) {
      // console.error("Failed to copy: ", err);
      setTextCopied(false);
    }
  };

  return (
    <>
      {iconOnly ? (
        <Tooltip label={label}>
          <Icon
            icon={textCopied ? LuCopyCheck : LuCopy}
            iconClassName={`text-cyan-300 ${iconSize} hover:text-col-pink transition-300 pointer-events-auto`}
            onClick={handleCopy}
          />
        </Tooltip>
      ) : textCopied ? (
        <TextButton
          onClick={handleCopy}
          label={successLabel}
          icon={textCopied ? LuCopyCheck : LuCopy}
          iconSize={iconSize}
          padding={padding}
          textSize={textSize}
          isSmallSizes={isSmallSizes}
        />
      ) : (
        <TextButton
          onClick={handleCopy}
          label={label}
          icon={LuCopy}
          iconSize={iconSize}
          padding={padding}
          textSize={textSize}
          isSmallSizes={isSmallSizes}
        />
      )}
    </>
  );
}
