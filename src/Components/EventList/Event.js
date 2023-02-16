import AllAttendees from "./Attendees/AllAttendees";

export default function Event({ event }) {
  return (
    <>
      <li key={event.id} className="events">
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <AllAttendees event={event} />
      </li>
    </>
  );
}