import { expect, test } from 'vitest';
import { factory } from './factory';

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count: () => number = factory();
  count();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('creates a count function', function () {
  const count: () => number = factory(1, 1);
  count();
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count: () => number = factory(10, 5);
  count();
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('handles negative start and step values', function () {
  const count: () => number = factory(-5, -2);
  count();
  expect(count()).toBe(-7);
  expect(count()).toBe(-9);
});

test('handles floating-point step values', function () {
  const count: () => number = factory(0.5, 0.5);
  count();
  expect(count()).toBe(1);
  expect(count()).toBe(1.5);
});

test('decrements count correctly with negative step', function () {
  const count = factory(20, -5);
  count();
  expect(count()).toBe(15);
  expect(count()).toBe(10);
});

test('increment count correctly with negative start', function () {
  const count = factory(-10, 5);
  count();
  expect(count()).toBe(-5);
  expect(count()).toBe(0);
  expect(count()).toBe(5);
});

test('handles large step values', function () {
  const count: () => number = factory(0, 1000);
  count();
  expect(count()).toBe(1000);
  expect(count()).toBe(2000);
});
