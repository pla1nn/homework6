import EventItem from '../EventItem/EventItem'

export const EventList = ({ events }) => {
  return (
    <ul>
      {events.map(({ name, location, speaker, type, time }) => {
        return <EventItem
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />;
      })}
    </ul>
  );
};
