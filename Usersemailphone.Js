var aws = require('aws-sdk');

var ddb = new aws.DynamoDB();

exports.handler = (event, context, callback) => {
    console.log(event);

    if (event.request.userAttributes.email) {
            dbadduser(event.userName,event.request.userAttributes.email,event.request.userAttributes.phone_number);
		    callback(null, event);
    } else {
        // Nothing to do, the user's email ID is unknown
        callback(null, event);
    }
};

function dbadduser(username,emailid,phone_number){
    
    
    let ddbParams = {
            Item: {
                'username': {S: username},
                'email': {S: emailid},
                'Phone_number': {S: phone_number}
            },
            TableName: "user"
        };
    
    // Call DynamoDB
        try {
            ddb.putItem(ddbParams).promise();
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }
       
};
