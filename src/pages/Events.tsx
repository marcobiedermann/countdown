import { isEmpty, orderBy } from 'lodash-es';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { removeEvent } from '../slices/events';
import { useAppDispatch } from '../store';

import { Events } from '../components';
import { selectEvents } from '../slices/events';

function EventsPage() {
  const events = useSelector(selectEvents);
  const orderedEvents = useMemo(() => orderBy(events, 'date', 'desc'), [events]);
  const dispatch = useAppDispatch();

  if (isEmpty(events)) {
    return <Navigate to="/new" />;
  }

  return <Events events={orderedEvents} onDeleteButtonClick={(id) => dispatch(removeEvent(id))} />;
}

export default EventsPage;
