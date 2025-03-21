import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Ensure styles are included
import React from "react";
const localizer = momentLocalizer(moment);

const GoogleCalendar = () => { // broken
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
        const API_KEY = 'google_api_key';
        const CALENDAR_ID =
        "c_42b968062b45d29a7dec9766e52205a073c67bfca7888fbf69842663a87ede68@group.calendar.google.com";

      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);

        if (!data.items) {
          console.error("No events found.");
          return;
        }

        setEvents(
          data.items.map((event) => ({
            title: event.summary,
            start: new Date(event.start.dateTime || `${event.start.date}T00:00:00`),
            end: new Date(event.end.dateTime || `${event.end.date}T23:59:59`),
          }))
        );
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <div style={{ marginTop: '3rem', height: 500, width: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_42b968062b45d29a7dec9766e52205a073c67bfca7888fbf69842663a87ede68%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Google Calendar"
      />
    </div>
  );
  
};

export default GoogleCalendar;
