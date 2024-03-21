import { describe, expect, it } from 'vitest';

import { render } from '../../utils/test-utils';
import FormLabel from '../FormLabel';

describe('FormLabel', () => {
  it('should render correctly', () => {
    const { container } = render(<FormLabel htmlFor="input">Label</FormLabel>);

    expect(container).toMatchSnapshot();
  });
});
