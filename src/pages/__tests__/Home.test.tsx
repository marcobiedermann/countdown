import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '../../utils/test-utils';
import HomePage from '../Home';

describe('HomePage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render correctly', () => {
    const now = new Date('2000-01-01');

    vi.setSystemTime(now);

    const { container } = render(<HomePage />, {
      route: '/?date=2000-01-01',
    });

    expect(container).toMatchSnapshot();
  });
});
