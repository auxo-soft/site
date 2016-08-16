define({
  "name": "Speerit APIs",
  "version": "1.0.0",
  "description": "Speerit API",
  "title": "Speerit Api",
  "url": "http://api-staging.speerit.co/",
  "header": {
    "title": "Speerit",
    "content": "<h2>API Endpoint</h2>\n<p>Your API Endpoint is http://api-staging.speerit.co/api/v1/.</p>\n<h2>API Usage</h2>\n<p>Once you have received an authentication token form the User Authenticate API, You are eligible for using Speerit APIs.\nYou need store the token received and need to append this token as an Authorization header with all the request.</p>\n<p>Header sample : Authorization Bearer Token</p>\n"
  },
  "footer": {
    "title": "-- END --",
    "content": ""
  },
  "order": [
    "GetUser",
    "PostUser"
  ],
  "template": {
    "withCompare": false,
    "withGenerator": true
  },
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-07-06T06:35:59.346Z",
    "url": "http://apidocjs.com",
    "version": "0.14.0"
  }
});
