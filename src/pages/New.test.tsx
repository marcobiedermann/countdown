import { describe, expect, it } from 'vitest';
import { render } from '../utils/test-utils';
import NewPage from './New';

describe('NewPage', () => {
  it('should render correctly', () => {
    const { container } = render(<NewPage />);

    expect(container).toMatchSnapshot();
  });
});
