import { intlFormat, intlFormatDistance } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface EventProps {
  id: string;
  date: string;
  title?: string;
  onDeleteButtonClick: (id: string) => void;
}

function Event(props: EventProps) {
  const { id, date, title, onDeleteButtonClick } = props;
  const { i18n } = useTranslation();
  const now = new Date();

  const searchParams = new URLSearchParams({
    date,
    ...(title && { title }),
  });
  const localeOptions = { locale: i18n.language };
  const formattedDate = `${intlFormat(date, localeOptions)} (${intlFormatDistance(date, now, { ...localeOptions, unit: 'day' })})`;

  return (
    <div>
      {title && <h3>{title}</h3>}
      <p>
        <Link to={`/?${searchParams}`}>{formattedDate}</Link>
      </p>
      <ul className="button-group">
        <li>
          <Link className="button button--round" to={`/events/${id}/edit`}>
            <FiEdit />
          </Link>
        </li>
        <li>
          <button className="button button--round" onClick={() => onDeleteButtonClick(id)}>
            <FiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
}

export type { EventProps };
export default Event;
