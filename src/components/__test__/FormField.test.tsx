import { describe, expect, it } from 'vitest';
import { render } from '../../utils/test-utils';
import FormField from '../FormField';

describe('Label', () => {
  it('should render correctly', () => {
    const { container } = render(<FormField>Field</FormField>);

    expect(container).toMatchSnapshot();
  });
});
