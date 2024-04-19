import { myParseInt } from './fn';
import {describe, it, expect} from 'vitest';

describe('myParseInt', () => {
    it('should parse a positive integer string correctly', () => {
        expect(myParseInt('123')).toBe(123);
    });

    it('should parse a negative integer string correctly', () => {
        expect(myParseInt('-456')).toBe(-456);
    });

    it('should parse a string with leading zeros correctly', () => {
        expect(myParseInt('00789')).toBe(789);
    });

    it('should return 0 for an empty string', () => {
        expect(myParseInt('')).toBe(0);
    });

    it('should stop parsing when encountering a non-digit character', () => {
        expect(myParseInt('123abc')).toBe(123);
    });

    it('should parse a string with a single digit correctly', () => {
        expect(myParseInt('5')).toBe(5);
    });

    it('should not parse a string with a leading non-digit character', () => {
        expect(myParseInt('abc123')).toBe(0);
    });
});
