const BMIHelper = require('../helper/helperFunctions.js');

const data = {
  test: [
    {
      Gender: 'Male',
      HeightCm: 171,
      WeightKg: 96,
    },
    {
      Gender: 'Male',
      HeightCm: 161,
      WeightKg: 85,
    },
    {
      Gender: 'Male',
      HeightCm: 180,
      WeightKg: 77,
    },
    {
      Gender: 'Female',
      HeightCm: 166,
      WeightKg: 62,
    },
    {
      Gender: 'Female',
      HeightCm: 150,
      WeightKg: 70,
    },
    {
      Gender: 'Female',
      HeightCm: 167,
      WeightKg: 82,
    },
  ],
};

const bmiFunction = () => {
  const test = data.test;

  const bmiHelper = new BMIHelper();
  const result =
    Array.isArray(test) && test.length > 0
      ? test.map((item) =>
          bmiHelper.BMICatCalc(item.WeightKg, item.HeightCm, item.Gender)
        )
      : null;
  return result;
};

module.exports = { bmiFunction };
