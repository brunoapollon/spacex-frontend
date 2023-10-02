import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";
import { useTheme } from "../../../../../app/hooks/useTheme";
import { cn } from "../../../../../app/utils/cn";

export function RightAction() {
  const swiper = useSwiper()
  const { theme } = useTheme()

  return (
    <button
      className={cn(
        "py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-white/10 transition-colors disabled:opacity-40",
        theme === 'light' && 'enabled:hover:bg-black/10',
      )}
      onClick={() => swiper.slideNext()}
    >
      <ChevronRightIcon
      className={cn(
        "text-white w-6 h-6",
        theme === 'light' && 'text-gray-500',
      )}
      />
    </button>
  );
}
