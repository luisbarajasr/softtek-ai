const functions = require("firebase-functions");
const admin = require("firebase-admin");
const papa = require("papaparse");

admin.initializeApp();

exports.uploadCSV = functions.https.onCall((data, context) => {
  const { products } = data;

  for (const product of products) {
    try {
      admin.firestore().collection("products").add(product);
    } catch (error) {
      console.log(error);
      throw new functions.https.HttpsError("internal", error.message);
    }
  }
  return "success";
});
