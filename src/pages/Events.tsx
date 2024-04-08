import { isEmpty, orderBy } from 'lodash-es';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Events } from '../components';
import { selectEvents } from '../slices/events';

function EventsPage() {
  const events = useSelector(selectEvents);
  const orderedEvents = useMemo(() => orderBy(events, 'date', 'desc'), [events]);

  if (isEmpty(events)) {
    return <Navigate to="/new" />;
  }

  return <Events events={orderedEvents} />;
}

export default EventsPage;
