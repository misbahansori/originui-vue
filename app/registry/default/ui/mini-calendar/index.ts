import type { CalendarDate } from "@internationalized/date";
import { createContext } from "reka-ui";
import type { Ref } from "vue";

export interface MiniCalendarContext {
  startDate: Ref<CalendarDate>;
  selectedDate: Ref<CalendarDate | undefined>;
  days: Ref<number>;
  selectDate: (date: CalendarDate) => void;
  navigate: (offset: number) => void;
  next: () => void;
  prev: () => void;
}

export const [injectMiniCalendarContext, provideMiniCalendarContext] =
  createContext<MiniCalendarContext>("MiniCalendar");

export { default as MiniCalendar } from "./MiniCalendar.vue";
export { default as MiniCalendarNavigation } from "./MiniCalendarNavigation.vue";
export { default as MiniCalendarDays } from "./MiniCalendarDays.vue";
export { default as MiniCalendarDay } from "./MiniCalendarDay.vue";
