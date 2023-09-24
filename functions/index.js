const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.uploadCSV = functions
  .runWith({ timeoutSeconds: 120 })
  .https.onCall(async (data, context) => {
    const { products } = data;
    const db = admin.firestore();
    const batch = db.batch();

    if (!products) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "You must provide a products array."
      );
    }

    if (products.length > 1000) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "You can only upload 1000 products at a time."
      );
    }

    const promises = [];

    products.forEach((product) => {
      const productRef = db.collection("products").doc();
      batch.set(productRef, product);
    });

    try {
      await batch.commit();
    } catch (error) {
      throw new functions.https.HttpsError(
        "internal",
        "Error committing batch."
      );
    }

    return {
      status: "success",
      message: "Products successfully added to Firestore.",
      addedCount: products.length,
    };
  });
