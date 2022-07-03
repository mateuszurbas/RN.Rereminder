import { useEffect, useState } from "react";
import * as Calendar from "expo-calendar";

export const useCalendar = () => {
  const [calendarId, setCalendarId] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendar = await Calendar.getDefaultCalendarAsync();
        setCalendarId(calendar.id);
      }
    })();
  }, []);

  const createEvent = async (startDate: Date, endDate: Date, title: string) =>
    Calendar.createEventAsync(calendarId, {
      startDate,
      endDate,
      title,
      alarms: [{ relativeOffset: -15 }],
    })
      .then((event) => {
        console.log("success", event);
      })
      .catch((error) => {
        console.log("failure", error);
      });

  const updateEvent = async (eventId: string) =>
    Calendar.updateEventAsync(eventId, {
      alarms: [{ relativeOffset: -15 }],
    })
      .then((event) => {
        console.log("success", event);
      })
      .catch((error) => {
        console.log("failure", error);
      });

  return { createEvent, updateEvent };
};
