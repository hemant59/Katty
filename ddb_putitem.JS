var aws = require('aws-sdk');

var ddb = new aws.DynamoDB();

exports.handler = (event, context, callback) => {
    console.log(event);

    if (event.request.userAttributes.email) {
            dbadduser(event.userName,event.request.userAttributes.email);
		    callback(null, event);
    } else {
        // Nothing to do, the user's email ID is unknown
        callback(null, event);
    }
};

function dbadduser(username,emailid){
    
    
    let ddbParams = {
            Item: {
                'Username': {S: username},
                'emailid': {S: emailid},
            },
            TableName: "Users"
        };
    
    // Call DynamoDB
        try {
            ddb.putItem(ddbParams).promise();
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }
       
};
