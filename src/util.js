/**
 *
 * @param {array} documents FireStore documents array
 *                 eg: [
                          {
                            "name": "projects/quote-delight-motivation/databases/(default)/documents/quotes/q1",
                            "fields": {
                              "id": {
                                "stringValue": "q1"
                              },
                              "category": {
                                "stringValue": "love"
                              },
                              "quote": {
                                "stringValue": "test test test quote"
                              }
                            },
                            "createTime": "2021-10-25T02:49:06.722808Z",
                            "updateTime": "2021-10-25T02:49:30.630100Z"
                          }
                    ]
 * @returns parsed and formatted json array of documents
                    eg: [
                      "id": "q1",
                      "category": "love"
                      "quote": "test test test quote"
                    ]
 */
export const getParsedFirestoreJSON = (documents) => {
  const parsedResult = {};
  documents.map((doc) => {
    let obj = {};
    for (const [key, value] of Object.entries(doc.fields)) {
      obj[key] = Object.values(value)[0];
    }
    parsedResult[obj.id] = obj;
  });
  return parsedResult;
};
