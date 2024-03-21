import React from 'react';

interface Fragment {
  value: string;
  unit: string;
}

interface DateTimeProps {
  fragments: Fragment[];
}

function DateTime(props: DateTimeProps) {
  const { fragments } = props;

  return (
    <div className="date-time">
      {fragments.map((fragment, index, array) => {
        const { value, unit } = fragment;

        return (
          <React.Fragment key={index}>
            <div className="date-time__fragment">
              <span className="date-time__value">{value}</span>
              <span className="date-time__unit">{unit}</span>
            </div>
            {index < array.length - 1 && <span className="date-time__separator">:</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default DateTime;
