import type { CalendarDate } from "@internationalized/date";
import { createContext } from "reka-ui";
import type { Ref } from "vue";

export interface MiniCalendarContext {
  selectedDate: Readonly<Ref<CalendarDate | undefined>>;
  onDateSelect: (date: CalendarDate) => void;
  startDate: Readonly<Ref<CalendarDate>>;
  onNavigate: (direction: "prev" | "next") => void;
  days: Readonly<Ref<number>>;
}

export const [injectMiniCalendarContext, provideMiniCalendarContext] =
  createContext<MiniCalendarContext>("MiniCalendar");

export { default as MiniCalendar } from "./MiniCalendar.vue";
export { default as MiniCalendarNavigation } from "./MiniCalendarNavigation.vue";
export { default as MiniCalendarDays } from "./MiniCalendarDays.vue";
export { default as MiniCalendarDay } from "./MiniCalendarDay.vue";
