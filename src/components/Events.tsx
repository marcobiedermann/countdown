import Event, { type EventProps } from './Event';

interface EventsProps {
  events: Omit<EventProps, 'onDeleteButtonClick'>[];
  onDeleteButtonClick: (id: string) => void;
}

function Events(props: EventsProps) {
  const { events, onDeleteButtonClick } = props;

  return (
    <ol className="events">
      {events.map((event) => {
        const { id } = event;

        return (
          <li key={id}>
            <Event {...event} onDeleteButtonClick={onDeleteButtonClick} />
          </li>
        );
      })}
    </ol>
  );
}

export type { EventsProps };
export default Events;
