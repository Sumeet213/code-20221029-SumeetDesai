const BMIHelper = require('../helper/helperFunctions.js');
const taskFunction = (req, res) => {
  try {
    const { test } = req.body;

    const bmiHelper = new BMIHelper();
    const result =
      Array.isArray(test) && test.length > 0
        ? test.map((item) =>
            bmiHelper.BMICatCalc(item.WeightKg, item.HeightCm, item.Gender)
          )
        : null;

    if (!result) {
      return res.status(400).json('data not valid');
    }

    return res.status(200).json({
      overWeightedPersons: bmiHelper.overWeight,
      data: result,
    });
  } catch (error) {
    console.log('Something went wrong');
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { taskFunction };
