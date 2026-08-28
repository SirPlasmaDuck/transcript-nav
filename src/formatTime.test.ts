import { test, expect } from "vitest";
import { formatTime } from "./formatTime";



test("renders zero as 0:00", () => {
  expect(formatTime(0)).toBe("0:00");
});

test("floors fractional seconds", () => {

  expect(formatTime(15.02)).toBe("0:15");
});

test("pads seconds to two digits", () => {
  expect(formatTime(65)).toBe("1:05");
});

test("handles two-digit minutes", () => {
  expect(formatTime(599)).toBe("9:59");
});

test("shows hours only once there are hours", () => {
  expect(formatTime(3661)).toBe("1:01:01");
});

// Boundaries are where off-by-one bugs live, so they get their own cases.

test("exactly one minute rolls over cleanly", () => {
  expect(formatTime(60)).toBe("1:00");
});

test("exactly one hour rolls over cleanly", () => {
  expect(formatTime(3600)).toBe("1:00:00");
});
