import Event, { type EventProps } from './Event';

interface EventsProps {
  events: EventProps[];
}

function Events(props: EventsProps) {
  const { events } = props;

  return (
    <ol className="events">
      {events.map((event) => {
        const { id } = event;

        return (
          <li key={id}>
            <Event {...event} />
          </li>
        );
      })}
    </ol>
  );
}

export type { EventsProps };
export default Events;
