import { describe, expect, it } from 'vitest';
import { formatTime } from '../formatters';

describe('formatters', () => {
  it('should format numbers', () => {
    expect(formatTime(10)).toBe('10');
  });

  it('should append a leading zero to single digit numbers', () => {
    expect(formatTime(1)).toBe('01');
  });
});
