import { describe, expect, it } from 'vitest';
import { render } from '../utils/test-utils';
import SettingsPage from './Settings';

describe('SettingsPage', () => {
  it('should render correctly', () => {
    const { container } = render(<SettingsPage />);

    expect(container).toMatchSnapshot();
  });
});
