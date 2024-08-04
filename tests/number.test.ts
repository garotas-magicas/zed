import { expect, test } from 'bun:test';
export * from '../external';

test('Number to String', () => {
    expect(Math.random().string()).toBeString();
})

test('Min value', () => {
    const value = 15;
    expect(value.min(20)).toBe(20);
})

test('Max value', () => {
    const value = 10;
    expect(value.max(5)).toBe(5);
})
