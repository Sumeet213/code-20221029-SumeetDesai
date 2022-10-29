1=> Unzip The Folder
2=> Run npm install
3=> Run npm start

Now the API Endpoint is "serverURL/test" i-e => "http://localhost:3000/test"

API Expect data in Array of Object under "test" variable in body i-e =>
API Body Fomate:
{
"test": [
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    },
    ]
}

To run test document:
run node test/test.js command

Testing file Output is:
$ node test/test.js
TAP version 13

# Subtest: Testing the API Endpoint "Test"

    # Subtest: Testing the Helper function to get expected Enhanced risk as Health Risk
    ok 1 - Testing the Helper function to get expected Enhanced risk as Health Risk
      ---
      duration_ms: 0.0005471
      ...
    # Subtest: Testing the Helper function to get expected Low risk as Health Risk
    ok 2 - Testing the Helper function to get expected Low risk as Health Risk
      ---
      duration_ms: 0.0000893
      ...
    # Subtest: Testing the Helper function to get expected Medium risk as Health Risk
    ok 3 - Testing the Helper function to get expected Medium risk as Health Risk
      ---
      duration_ms: 0.0000881
      ...
    # Subtest: Testing the Helper function to get expected Normal weight BMI Category
    ok 4 - Testing the Helper function to get expected Normal weight BMI Category
      ---
      duration_ms: 0.0003875
      ...
    # Subtest: Testing the Helper function to get expected Moderately obese BMI Category
    ok 5 - Testing the Helper function to get expected Moderately obese BMI Category
      ---
      duration_ms: 0.0000944
      ...
    # Subtest: Testing the Helper function to get expected Over Weight BMI Category
    ok 6 - Testing the Helper function to get expected Over Weight BMI Category
      ---
      duration_ms: 0.0000894
      ...
    # Subtest: Testing the Helper function to get expected BMI with Input of Weight and Height
    ok 7 - Testing the Helper function to get expected BMI with Input of Weight and Height
      ---
      duration_ms: 0.0001211
      ...
    # Subtest: Testing the Helper function to get expected BMI with Input of Weight and Height
    ok 8 - Testing the Helper function to get expected BMI with Input of Weight and Height
      ---
      duration_ms: 0.0001606
      ...
    # Subtest: Testing the Helper function to get expected BMI with Input of Weight and Height
    ok 9 - Testing the Helper function to get expected BMI with Input of Weight and Height
      ---
      duration_ms: 0.0001457
      ...
    # Subtest: Should call the Test APi with 200 HTTP Responce
    ok 10 - Should call the Test APi with 200 HTTP Responce
      ---
      duration_ms: 0.0317289
      ...
    # Subtest: Should call the Test APi with 200 HTTP Responce and Proper Over Weighted People Count
    ok 11 - Should call the Test APi with 200 HTTP Responce and Proper Over Weighted People Count
      ---
      duration_ms: 0.0038648
      ...
    1..11

ok 1 - Testing the API Endpoint "Test"

---

duration_ms: 0.0452428
...
1..1

# tests 1
# pass 1
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 0.1459655
