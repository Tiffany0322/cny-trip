import { DayPlan } from "./itinerary";

function formatLocalDate(now: Date) {
  const offsetMs = now.getTimezoneOffset() * 60 * 1000;
  const localISO = new Date(now.getTime() - offsetMs).toISOString();
  return localISO.split("T")[0];
}

export function pickItineraryDay(
  itinerary: DayPlan[],
  now: Date = new Date()
) {
  if (!itinerary.length) {
    throw new Error("Itinerary is empty.");
  }

  const today = formatLocalDate(now);
  const first = itinerary[0];
  const last = itinerary[itinerary.length - 1];

  if (today <= first.id) {
    return { day: first, index: 0 };
  }

  const upcomingIndex = itinerary.findIndex((plan) => plan.id >= today);
  if (upcomingIndex >= 0) {
    return { day: itinerary[upcomingIndex], index: upcomingIndex };
  }

  return { day: last, index: itinerary.length - 1 };
}
