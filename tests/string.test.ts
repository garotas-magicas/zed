import { expect, test } from 'bun:test';
export * from '../external';

test('Slug', () => {
    expect('a b c d'.slug()).toBe('a-b-c-d');
})

test('String to Number', () => {
    expect("10".number()).toBeNumber();
})