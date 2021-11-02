const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');
const QUOTES = require('./data/quotes');

var serviceAccount = require('./secrets/serviceAccountKey.json');

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = getFirestore(app);

var quotes = QUOTES;

const batch = db.batch();

const uploadQuotes = async () => {
  for (let quote of quotes) {
    console.log(quote);
    batch.set(db.collection('quotes').doc(quote.id), { ...quote });
  }
  res = await batch.commit();
  console.log(res);
};

uploadQuotes();
