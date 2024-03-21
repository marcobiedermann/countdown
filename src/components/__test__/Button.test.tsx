import { describe, expect, it } from 'vitest';

import { render } from '../../utils/test-utils';
import Button from '../Button';

describe('Button', () => {
  it('should render the submit button correctly', () => {
    const { container } = render(<Button type="submit">Button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('should render link button correctly', () => {
    const { container } = render(<Button to="#">Button</Button>);

    expect(container).toMatchSnapshot();
  });
});
