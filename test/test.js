const assert = require('assert');
const { describe, it } = require('test');
const axios = require('axios').default;
const BMIHelper = require('../helper/helperFunctions.js');

const getData = (data) => {
  return axios.post(
    'http://localhost:3000/test',
    { ...data },
    {
      method: 'post',
      headers: { 'content-type': 'application/json' },
    }
  );
};

describe('Testing the healthrisk via API Endpoint', () => {
  it('Testing the Helper function to get expected Enhanced risk as Health Risk', () => {
    const bmiHelper = new BMIHelper();
    let bmiCategory = bmiHelper.BMICatCalc(82, 167).healthRisk;
    assert(bmiCategory, 'Enhanced risk');
  });

  it('Testing the healthrisk via API Endpoint expected as Low risk ', () => {
    const bmiHelper = new BMIHelper();
    let bmiCategory = bmiHelper.BMICatCalc(77, 180).healthRisk;
    assert(bmiCategory, 'Low risk');
  });

  it('Testing the healthrisk via API Endpoint as Medium Risk', () => {
    const bmiHelper = new BMIHelper();
    let bmiCategory = bmiHelper.BMICatCalc(70, 150).healthRisk;
    assert(bmiCategory, 'Medium risk');
  });

  it('Testing the weight via API Endpoint as Normal Weight', () => {
    const bmiHelper = new BMIHelper();
    let bmiCategory = bmiHelper.BMICatCalc(62, 166).BMICategory;
    assert.deepStrictEqual(bmiCategory, 'Normal weight');
  });

  it('Testing the weight via API Endpoint as Moderately Obese', () => {
    const bmiHelper = new BMIHelper();
    let bmiCategory = bmiHelper.BMICatCalc(96, 171).BMICategory;
    assert.deepStrictEqual(bmiCategory, 'Moderately obese');
  });

  it('Testing the weight via API Endpoint as OverWeight', () => {
    const bmiHelper = new BMIHelper();
    let bmiCategory = bmiHelper.BMICatCalc(82, 167).BMICategory;
    assert.deepStrictEqual(bmiCategory, 'OverWeight');
  });

  it('Testing the BMI via API Endpoint as 32.83', () => {
    const bmiHelper = new BMIHelper();
    let bmi = bmiHelper.BMICatCalc(96, 171).BMI;
    assert.equal(bmi, 32.83);
  });

  it('Testing the helper function to get expected bmi with inputs as weight and height ', () => {
    const bmiHelper = new BMIHelper();
    let bmi = bmiHelper.BMICatCalc(85, 161).BMI;
    assert.equal(bmi, 32.79);
  });

  it('Test the api and find the number of overweight people', async () => {
    let data = {
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
    const result = await getData(data);
    assert.deepEqual(result.data.overWeightedPersons, 4);
  });
});
