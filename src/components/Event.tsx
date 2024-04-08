import { intlFormat, intlFormatDistance } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { removeEvent } from '../slices/events';
import { useAppDispatch } from '../store';

interface EventProps {
  id: string;
  date: string;
  title?: string;
}

function Event(props: EventProps) {
  const { id, date, title } = props;
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const now = new Date();

  const searchParams = new URLSearchParams({
    date,
    ...(title && { title }),
  });

  return (
    <div>
      {title && <h3>{title}</h3>}
      <p>
        <Link to={`/?${searchParams}`}>
          {intlFormat(date, {
            locale: i18n.language,
          })}{' '}
          (
          {intlFormatDistance(date, now, {
            unit: 'day',
            locale: i18n.language,
          })}
          )
        </Link>
      </p>
      <ul className="button-group">
        <li>
          <Link className="button button--round" to={`/events/${id}/edit`}>
            <FiEdit />
          </Link>
        </li>
        <li>
          <button className="button button--round" onClick={() => dispatch(removeEvent(id))}>
            <FiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
}

export type { EventProps };
export default Event;
