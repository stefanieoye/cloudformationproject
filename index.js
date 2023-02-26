const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = async (event) => {
  const params = {
    TableName: 'my-table-name',
    Item: {
      'Id': { S: 'my-id' },
      'Data': { S: 'my-data' }
    }
  };
  
  try {
    await ddb.putItem(params).promise();
    console.log('Successfully wrote to DynamoDB table');
  } catch (error) {
    console.log('Error writing to DynamoDB table:', error);
  }
};

