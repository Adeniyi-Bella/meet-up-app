// {"web":{"client_id":"53697359011-01anoj5bpkfkhpdne6oqvn50r44sn76k.apps.googleusercontent.com"
// ,"project_id":"meet-apps-369620",
// "auth_uri":"https://accounts.google.com/o/oauth2/auth",
// "token_uri":"https://oauth2.googleapis.com/token",
// "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
// "client_secret":"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","redirect_uris":["https://Adeniyi-Bella.github.io/meet-up-app/"],"javascript_origins":["https://Adeniyi-Bella.github.io"]}}


const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://Adeniyi-Bella.github.io/meet-up-app/"],
  javascript_origins: ["https://Adeniyi-Bella.github.io", "http://localhost:3000"],
};
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);


module.exports.getAuthURL = async () => {

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  // The values used to instantiate the OAuthClient are at the top of the file
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    // Decode authorization code extracted from the URL query
    const code = decodeURIComponent(`${event.pathParameters.code}`);
  
    return new Promise((resolve, reject) => {
  
      oAuth2Client.getToken(code, (err, token) => {
        if (err) {
          return reject(err);
        }
        return resolve(token);
      });
    })
      .then((token) => {
        // Respond with OAuth token 
        return {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(token),
        };
      })
      .catch((err) => {
        // Handle error
        console.error(err);
        return {
          statusCode: 500,
          body: JSON.stringify(err),
        };
      });
  };

  // GET - https://560sby4l3i.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url
  // GET - https://560sby4l3i.execute-api.eu-central-1.amazonaws.com/dev/api/token/{code}