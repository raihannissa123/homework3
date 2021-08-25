const ConvertTemp = require("../scripts/Convert");

test("test Celcius to Reamur", () => {
  expect(ConvertTemp("celcius","reamur",123)).toBe(98.4);
});
test("test Celcius to Fahrenheit", () => {
  expect(ConvertTemp("celcius","fahrenheit",60)).toBe(140);
});

test("test Celcius to Celcius", () => {
  expect(ConvertTemp("celcius","celcius",87)).toBe(87);
});

test("test Fahrenheit to Celcius", () => {
  expect(ConvertTemp("fahrenheit","celcius",140)).toBe(60);
});

test("test Fahrenheit to Reamur", () => {
  expect(ConvertTemp("fahrenheit","reamur",28)).toBe(-1.7777777777777777);
});

test("test Fahrenheit to Fahrenheit", () => {
  expect(ConvertTemp("fahrenheit","fahrenheit",11)).toBe(11);
});

test("test Reamure to Celcius", () => {
  expect(ConvertTemp("reamur","celcius",98.4)).toBe(123);
});

test("test Reamure to Fahrenheit", () => {
  expect(ConvertTemp("reamur","fahrenheit",-1.7777777777777777)).toBe(28);
});

test("test Reamure to Reamure", () => {
  expect(ConvertTemp("reamur","reamur",70)).toBe(70);
});