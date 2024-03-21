import { describe, expect, it } from 'vitest';

import { render } from '../../utils/test-utils';
import DateTime from '../DateTime';

describe('DateTime', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DateTime
        fragments={[
          {
            unit: 'Hours',
            value: '01',
          },
          {
            unit: 'Minutes',
            value: '01',
          },
          {
            unit: 'Seconds',
            value: '01',
          },
        ]}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
