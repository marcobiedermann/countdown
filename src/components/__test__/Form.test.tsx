import { describe, expect, it } from 'vitest';
import { render } from '../../utils/test-utils';
import Form from '../Form';

describe('Form', () => {
  it('should render correctly', () => {
    const { container } = render(<Form onSubmit={() => {}}>Form</Form>);

    expect(container).toMatchSnapshot();
  });
});
