define({ "api": [
  {
    "type": "post",
    "url": "api/v1/usertracker/otherMatch",
    "title": "Finding other user's match.",
    "description": "<p>API for finding other user's match.</p>",
    "name": "Finding_other_user_s_match",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "other_user_id",
            "description": "<p>other user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"message\": \"error\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/StravaController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/otherMatch",
    "title": "Finding other user's match.",
    "description": "<p>API for finding other user's match.</p>",
    "name": "Finding_other_user_s_match",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "other_user_id",
            "description": "<p>other user id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"message\": \"error\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/StravaController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/usertracker/trackerActivity",
    "title": "Get the user tracker activity details.",
    "description": "<p>API for fetching the activity details from the tracker.</p>",
    "name": "Get_user_tracker_activity_details",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"message\": \"error\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/StravaController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/usertracker/trackerActivity",
    "title": "Get the user tracker activity details.",
    "description": "<p>API for fetching the activity details from the tracker.</p>",
    "name": "Get_user_tracker_activity_details",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"message\": \"error\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/WPStravaController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listBrand",
    "title": "List Brand",
    "description": "<p>API for listing the brands.</p>",
    "name": "List_Brand",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"types\": \"Nike\",\n        \"image\": \"public/uploads/images.png\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listClub",
    "title": "List Club",
    "description": "<p>API for listing the club.</p>",
    "name": "List_CLub",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listCoaches",
    "title": "List Coaches",
    "description": "<p>API for listing the coaches.</p>",
    "name": "List_Coaches",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"coach_name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listDoctor",
    "title": "List Doctor",
    "description": "<p>API for listing the doctors.</p>",
    "name": "List_Doctor",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listGoals",
    "title": "List Goals",
    "description": "<p>API for listing the goals.</p>",
    "name": "List_Goals",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listRaces",
    "title": "List Races",
    "description": "<p>API for listing the races.</p>",
    "name": "List_Races",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"coach_name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listTypes",
    "title": "List Runner Type",
    "description": "<p>API for listing the runner type.</p>",
    "name": "List_Runner_Type",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"types\": \"Strava\",\n        \"image\": \"public/uploads/images.png\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listRunnerType",
    "title": "List Runner Type",
    "description": "<p>API for listing the runner types.</p>",
    "name": "List_Runner_Type",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listStore",
    "title": "List Stores",
    "description": "<p>API for listing the Stores.</p>",
    "name": "List_Stores",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"store_name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listTracker",
    "title": "List Suggested Tracker",
    "description": "<p>API for listing the suggested tracker.</p>",
    "name": "List_Suggested_Tracker",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Suggested Tracker Name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"name\": \"Richard Plummer\",\n        \"city\": \"29 Palms\",\n        \"state\": \"CA\",\n        \"country\": \"US\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/CoachController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/listTrackerSource",
    "title": "List Tracker Source",
    "description": "<p>API for Tracker Source.</p>",
    "name": "List_Tracker_Source_along_with_image",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"types\": \"Strava\",\n        \"image\": \"public/uploads/images.png\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/noTracker",
    "title": "No tracker",
    "description": "<p>API for if No tracker and if there is tracker.</p>",
    "name": "No_tracker_Info",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pace",
            "description": "<p>Favorite pace.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Json data for location if no tracker.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "success",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"id\": 1,\n        \"types\": \"Strava\",\n        \"image\": \"public/uploads/images.png\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/usertracker/healthkitData",
    "title": "Store Healthkit Data",
    "description": "<p>API for storing the Healthkit Data.</p>",
    "name": "Store_Healthkit_Data",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "workouts",
            "description": "<p>{</p> <p>workouts =     ( { &quot;user_id&quot; = 4; &quot;distance&quot; = &quot;321.868800 km&quot;; &quot;duration&quot; = &quot;0.000000&quot;; &quot;end_date&quot; = &quot;23-06-2016&quot;; &quot;start_date&quot; = &quot;23-06-2016&quot;; &quot;user_entered&quot; = 1; &quot;workout_id&quot; = &quot;CCAFBD1B-BCC1-468D-ADF0-DF76E0B6F555&quot;; &quot;workout_source&quot; = &quot;Health&quot;; &quot;workout_type&quot; = 37; }, { &quot;user_id&quot; = 4; &quot;distance&quot; = &quot;6437.376000 km&quot;; &quot;duration&quot; = &quot;0.000000&quot;; &quot;end_date&quot; = &quot;23-06-2016&quot;; &quot;start_date&quot; = &quot;23-06-2016&quot;; &quot;user_entered&quot; = 1; &quot;workout_id&quot; = &quot;D0BAACBF-8AD3-4B65-AAC9-2BA1B44D9B6D&quot;; &quot;workout_source&quot; = &quot;Health&quot;; &quot;workout_type&quot; = 37; } ); }.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/TrackerController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/usertracker/getSuggestedTracker",
    "title": "Store suggested tracker",
    "description": "<p>API for storing the suggested tracker from user.</p>",
    "name": "Store_suggested_tracker",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>The ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suggested_tracker_name",
            "description": "<p>The name of the Tracker.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/TrackerController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/tracker/storeTrackerAccess",
    "title": "Store tracker access",
    "description": "<p>API for storing the tracker access token retrived for each user.</p>",
    "name": "Store_tracker_access",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tracker_source_name",
            "description": "<p>The name of the tracker source.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_tracker_id",
            "description": "<p>The user id provided from tracker for each user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Access token provided for each user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/TrackerController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/tracker/storeTrackerDetails",
    "title": "Store tracker source details",
    "description": "<p>API for storing the tracker source details.</p>",
    "name": "Store_tracker_source_details",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tracker_name",
            "description": "<p>The name of the Tracker.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client id which is provided by the tracker for an app.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>Secret key provided by the tracker for an app.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tracker_type_id",
            "description": "<p>Type of the tracker.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/TrackerController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/resetpassword",
    "title": "User Reset Password",
    "description": "<p>API for reset password. This token would be using for the making all other request here after. Once you have received the token after successfull authentication, You need to append an Authorization header with all the request.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Header sample :",
          "content": "Authorization Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzODkiLCJpc3MiOiJodHRwOlwvXC9ib3VudHNhcGkub3JnXC9hcGlcL3YxXC9yZWZyZXNoZXhwaXJlZHRva2VuIiwiaWF0IjoiMTQ0ODQ1NDc0MCIsImV4cCI6IjE0NDg0NTgzNDAiLCJuYmYiOiIxNDQ4NDU0NzQwIiwianRpIjoiMTM1Zjg2ODZlNTlhNGYxNzJhNDRkMWFlY2RmNzI2YmMifQ.h2lyK0eyCo5_XchfnVysZkSpzMJsigV3LZyFABIcrFA",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user.</p>"
          }
        ]
      }
    },
    "name": "User_Authentication",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n      {\n          \"status\": \"SUCCESS\",\n          \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzODkiLCJpc3MiOiJodHRwOlwvXC9ib3VudHNhcGkub3JnXC9hcGlcL3YxXC9yZWZyZXNoZXhwaXJlZHRva2VuIiwiaWF0IjoiMTQ0ODQ1NDc0MCIsImV4cCI6IjE0NDg0NTgzNDAiLCJuYmYiOiIxNDQ4NDU0NzQwIiwianRpIjoiMTM1Zjg2ODZlNTlhNGYxNzJhNDRkMWFlY2RmNzI2YmMifQ.h2lyK0eyCo5_XchfnVysZkSpzMJsigV3LZyFABIcrFA\"\n      }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"FAILURE\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n  \"status\" : \"FAILURE\",\n  \"error\": \"validation_errors\"\n  \"error_detail\" : {\n                      \"username\": [\n                        \"The username field is required.\"\n                      ],\n                      \"email\": [\n                        \"The email field is required.\"\n                      ]\n                    }  \n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 could_not_create_token\n{\n  \"status\" :\"FAILURE\",\n  \"error\": \"could_not_create_token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Auth/PasswordController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/authenticate",
    "title": "User Login Authentication",
    "description": "<p>API for user login athentication. This token would be used for the making all other request here after. Once you have received the token after successfull authentication, You need to append an Authorization header with all the request.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Header sample :",
          "content": "Authorization Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzODkiLCJpc3MiOiJodHRwOlwvXC9ib3VudHNhcGkub3JnXC9hcGlcL3YxXC9yZWZyZXNoZXhwaXJlZHRva2VuIiwiaWF0IjoiMTQ0ODQ1NDc0MCIsImV4cCI6IjE0NDg0NTgzNDAiLCJuYmYiOiIxNDQ4NDU0NzQwIiwianRpIjoiMTM1Zjg2ODZlNTlhNGYxNzJhNDRkMWFlY2RmNzI2YmMifQ.h2lyK0eyCo5_XchfnVysZkSpzMJsigV3LZyFABIcrFA",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>Social ID od user</p>"
          }
        ]
      }
    },
    "name": "User_Login_Authentication",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"1\",\n  \"message\": \"success\",\n  \"user_details\": {\n   \"user_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzE5Mi4xNjguMS4yMFwvcHJvamVjdHNcL3NwZWVyaXRcL3B1YmxpY1wvYXBpXC92MVwvdXNlclwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDUzODg0MzU0LCJleHAiOjE0NTM4ODc5NTQsIm5iZiI6MTQ1Mzg4NDM1NCwianRpIjoiYjRkOWYzMDFhMmY0M2UxMDM3NTJjZGYyZTBlNmE0NzAifQ.n4iRqngRtthO35TkPVNQThgRKZcJCh86497K_YwN9vY\",\n      \"user_id\": 1\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 verify email\n{\n    \"status\": \"0\",\n    \"error\": \"Please verify your email\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/AuthenticationController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/signup",
    "title": "User SignUp",
    "description": "<p>API for signup.</p>",
    "name": "User_SignUp",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>This is to get the device type whether Anroid or iOS.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>This is to get the device token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_version",
            "description": "<p>Version of the app.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fav_location_lat",
            "description": "<p>To store latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fav_location_long",
            "description": "<p>To store longitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_address",
            "description": "<p>To store user address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_location_placeid",
            "description": "<p>To user location placeid.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_locationname",
            "description": "<p>To store user location name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email Id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tracker",
            "description": "<p>Tracker details of user. Json string sample json tracker tracker=[{&quot;tracker_source_name&quot;:&quot;garmin&quot;,&quot;user_tracker_id&quot;:&quot;&quot;,&quot;oauth_token_secret&quot;:&quot;B2v1zgyZLa6CNmH9MBY1tSQtEQUFDmTMPCG&quot;,&quot;access_token&quot;:&quot;c8607800-9ea6-42e1-a4db-e2387f2dc4ab&quot;},{&quot;user_tracker_id&quot;:&quot;8735424&quot;,&quot;tracker_source_name&quot;:&quot;strava&quot;,&quot;photo&quot;:&quot;https://dgalywyr863hv.cloudfront.net/pictures/athletes/8735424/3680535/2/medium.jpg&quot;,&quot;oauth_token_secret&quot;:&quot;&quot;,&quot;access_token&quot;:&quot;b41775f3d7a05792ecc5b6810e099b199504f5e2&quot;}]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Json data, rest all other screen values like about coach,tracker etc. sample json data {&quot;UserInfo&quot;:{&quot;firstname&quot;:&quot;Vicky&quot;,&quot;lastname&quot;:&quot;Vr&quot;,&quot;email&quot;:&quot;vicky@gmail.com&quot;,&quot;gender&quot;:&quot;M&quot;,&quot;birth_date&quot;:&quot;24-1-1991&quot;},&quot;TrackerInfo&quot;:{&quot;tracker_source_name&quot;:&quot;&quot;,&quot;user_id&quot;:&quot;&quot;,&quot;access_token&quot;:&quot;&quot;},&quot;SuggestedTracker&quot;:{&quot;suggested_tracker_name&quot;:&quot;&quot;},&quot;RunnerTypes&quot;:{&quot;runner_types&quot;:[&quot;Just\\nRunning&quot;,&quot;5K\\nRunner&quot;,&quot;10K\\nRunner&quot;]},&quot;Coach&quot;:{&quot;coach_status&quot;:&quot;Looking for a coach&quot;,&quot;recommended_coaches&quot;:[&quot;Alicia Jonnson, LA, California&quot;],&quot;coach_website&quot;:&quot;&quot;},&quot;Events&quot;:{&quot;event_status&quot;:&quot;Love to attend&quot;,&quot;favorite_events&quot;:[&quot;Event 1, LA, California&quot;],&quot;event_website&quot;:&quot;&quot;},&quot;RunningClub&quot;:{&quot;club_status&quot;:&quot;Already a member&quot;,&quot;favorite_clubs&quot;:[&quot;Club 2, LA, California&quot;],&quot;club_website&quot;:&quot;&quot;},&quot;FavoriteBrands&quot;:[&quot;De Soto&quot;,&quot;Fuelbelt&quot;,&quot;GU&quot;],&quot;Stores&quot;:{&quot;store_status&quot;:&quot;Yes&quot;,&quot;favorite_stores&quot;:[&quot;Product 1&quot;],&quot;store_website&quot;:&quot;&quot;},&quot;MedicalTeams&quot;:{&quot;medical_team_status&quot;:&quot;Yeah, i have a kick ass team&quot;,&quot;medical_teams&quot;:[&quot;Medical Team 1, LA, California&quot;],&quot;team_website&quot;:&quot;&quot;},&quot;goals&quot;:[&quot;Lose some weight&quot;,&quot;Get healthier and feel better&quot;]}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n      \"error\": \"validation_errors\",\n   \"error_detail\": {\n      \"email\": [\n        \"The email field is required.\"\n      ],\n      \"password\": [\n        \"The password field is required.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/AuthenticationController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/socialAuthenticate",
    "title": "User Social Authentication",
    "description": "<p>API for user social athentication. This token would be used for the making all other request here after. Once you have received the token after successfull authentication, You need to append an Authorization header with all the request.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Header sample :",
          "content": "Authorization Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzODkiLCJpc3MiOiJodHRwOlwvXC9ib3VudHNhcGkub3JnXC9hcGlcL3YxXC9yZWZyZXNoZXhwaXJlZHRva2VuIiwiaWF0IjoiMTQ0ODQ1NDc0MCIsImV4cCI6IjE0NDg0NTgzNDAiLCJuYmYiOiIxNDQ4NDU0NzQwIiwianRpIjoiMTM1Zjg2ODZlNTlhNGYxNzJhNDRkMWFlY2RmNzI2YmMifQ.h2lyK0eyCo5_XchfnVysZkSpzMJsigV3LZyFABIcrFA",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>Social ID of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_secret",
            "description": "<p>Social secret of user</p>"
          }
        ]
      }
    },
    "name": "User_Social_Authentication",
    "group": "1_Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"1\",\n  \"message\": \"success\",\n  \"user_details\": {\n   \"user_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzE5Mi4xNjguMS4yMFwvcHJvamVjdHNcL3NwZWVyaXRcL3B1YmxpY1wvYXBpXC92MVwvdXNlclwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDUzODg0MzU0LCJleHAiOjE0NTM4ODc5NTQsIm5iZiI6MTQ1Mzg4NDM1NCwianRpIjoiYjRkOWYzMDFhMmY0M2UxMDM3NTJjZGYyZTBlNmE0NzAifQ.n4iRqngRtthO35TkPVNQThgRKZcJCh86497K_YwN9vY\",\n      \"user_id\": 1\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 verify email\n{\n    \"status\": \"0\",\n    \"error\": \"Please verify your email\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/AuthenticationController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/socialSignup",
    "title": "User Social SignUp",
    "description": "<p>API for storing social id and social token in User table when user signup with Social details. With the social id we can fetch the details of the user from social media.</p>",
    "name": "User_Social_SignUp",
    "group": "1_Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_type",
            "description": "<p>This is to get the device type whether Anroid or iOS.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_token",
            "description": "<p>This is to get the device token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_version",
            "description": "<p>Version of the app.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_type",
            "description": "<p>Type of social media.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>Id of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_secret",
            "description": "<p>social secret of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social",
            "description": "<p>access token of user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fav_location_lat",
            "description": "<p>To store latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fav_location_long",
            "description": "<p>To store longitude.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n      \"error\": \"validation_errors\",\n   \"error_detail\": {\n      \"email\": [\n        \"The email field is required.\"\n      ],\n      \"password\": [\n        \"The password field is required.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/AuthenticationController.php",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "api/v1/user/acceptRun",
    "title": "Accept run invitation or Lets run",
    "description": "<p>API for Accept run invitation or Lets run</p>",
    "name": "Accept_run_invitation_or_Lets_run",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "match_send_id",
            "description": "<p>ID of the invitation send user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend doesnot exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"doesnot exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/favdataCalculation",
    "title": "Calculating Fav day,time,average distance, pace in profile info",
    "description": "<p>API for Calculating Fav day,time,average distance, pace</p>",
    "name": "Calculating_Fav_day_time_average_distance__pace",
    "group": "2_User_Details",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserCalculationController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/inviteRun",
    "title": "Invite for a run",
    "description": "<p>API for Invite for a run</p>",
    "name": "Invite_for_a_run",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "matched_id",
            "description": "<p>ID of the user invited for run.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend doesnot exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"doesnot exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/inviteOthersRun",
    "title": "Invite others for a run",
    "description": "<p>API for Invite others for a run</p>",
    "name": "Invite_others_for_a_run",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "matched_id",
            "description": "<p>ID of the user invited for run.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend doesnot exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"doesnot exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/listInvities",
    "title": "Listing invite",
    "description": "<p>API for listing invited user.</p>",
    "name": "List_Invities",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's follower already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/MatchController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/showOtherUsers",
    "title": "Displaying other users profile",
    "description": "<p>API for Show other Users Profile</p>",
    "name": "Other_Users_Profile",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the logged in user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "other_user_id",
            "description": "<p>ID of the other user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n    \"users\": [\n      {\n        \"id\": 30,\n        \"name\": \"\",\n        \"email\": \"test@test.com\",\n        \"social_type\": \"\",\n        \"social_id\": \"\",\n        \"social_token\": \"\",\n        \"social_secret\": \"\",\n        \"device_token\": null,\n        \"app_version\": null,\n        \"status\": \"1\",\n        \"created_at\": \"2016-01-21 12:24:29\",\n        \"updated_at\": \"2016-01-21 12:24:29\",\n        \"user_profile\": {\n          \"id\": 2,\n          \"user_id\": \"30\",\n          \"name\": \"\",\n          \"address\": \"\",\n          \"location\": \"\",\n          \"gender\": \"\",\n          \"height\": \"\",\n          \"weight\": \"\",\n          \"phone\": \"0\",\n          \"dob\": \"\",\n          \"photo\": \"\",\n          \"social_links\": \"\",\n          \"website\": \"\",\n          \"coach_available\": \"\",\n          \"level\": \"\",\n          \"sports_type\": \"\",\n         \"created_at\": \"2016-01-21 12:24:29\",\n          \"updated_at\": \"2016-01-21 12:24:29\"\n        }              \n      }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n      \"error\": \"validation_errors\",\n   \"error_detail\": {\n      \"email\": [\n        \"The email field is required.\"\n      ],\n      \"password\": [\n        \"The password field is required.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/rejectRun",
    "title": "Reject run invitation",
    "description": "<p>API for Reject run invitation</p>",
    "name": "Reject_run_invitation",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "match_send_id",
            "description": "<p>ID of the invitation received user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend doesnot exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"doesnot exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/profileInfo",
    "title": "Show User Profile",
    "description": "<p>API for dispaying loggedin user's profile.</p>",
    "name": "Show_User_Profile",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n    \"user_details\": {\n      \"completion_percentage\": 30,\n      \"name\": \"xxxxxx\",\n      \"location\": \"xxxxxx\",\n      \"photo\": \"\"       \n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n      \"error\": \"validation_errors\",\n   \"error_detail\": {\n      \"email\": [\n        \"The email field is required.\"\n      ],\n      \"password\": [\n        \"The password field is required.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/gpsLocation",
    "title": "Storing GPS location",
    "description": "<p>API for storing user's Latitude and Lognitude.</p>",
    "name": "Storing_GPS_location",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "latitude",
            "description": "<p>User's latitude.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "longitude",
            "description": "<p>User's longitude.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/profilepic",
    "title": "Update profile pic",
    "description": "<p>API for user's profile pic.</p>",
    "name": "Update_Profile_Pic",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Profile image.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"user_id\": 1,\n        \"photo\": \"public/uploads/images.png\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/completeProfile",
    "title": "Update user profile",
    "description": "<p>API for storing user's profile details.</p>",
    "name": "Update_user_profile",
    "group": "2_User_Details",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>Json data passed.example {&quot;UserInfo&quot;:{&quot;firstname&quot;:&quot;Vicky&quot;,&quot;lastname&quot;:&quot;Vr&quot;,&quot;email&quot;:&quot;vicky@gmail.com&quot;,&quot;gender&quot;:&quot;M&quot;,&quot;birth_date&quot;:&quot;24-1-1991&quot;},&quot;TrackerInfo&quot;:{&quot;tracker_source_name&quot;:&quot;&quot;,&quot;user_id&quot;:&quot;&quot;,&quot;access_token&quot;:&quot;&quot;},&quot;SuggestedTracker&quot;:{&quot;suggested_tracker_name&quot;:&quot;&quot;},&quot;RunnerTypes&quot;:{&quot;runner_types&quot;:[&quot;Just\\nRunning&quot;,&quot;5K\\nRunner&quot;,&quot;10K\\nRunner&quot;]},&quot;Coach&quot;:{&quot;coach_status&quot;:&quot;Looking for a coach&quot;,&quot;recommended_coaches&quot;:[&quot;Alicia Jonnson, LA, California&quot;],&quot;coach_website&quot;:&quot;&quot;},&quot;Events&quot;:{&quot;event_status&quot;:&quot;Love to attend&quot;,&quot;favorite_events&quot;:[&quot;Event 1, LA, California&quot;],&quot;event_website&quot;:&quot;&quot;},&quot;RunningClub&quot;:{&quot;club_status&quot;:&quot;Already a member&quot;,&quot;favorite_clubs&quot;:[&quot;Club 2, LA, California&quot;],&quot;club_website&quot;:&quot;&quot;},&quot;FavoriteBrands&quot;:[&quot;De Soto&quot;,&quot;Fuelbelt&quot;,&quot;GU&quot;],&quot;Stores&quot;:{&quot;store_status&quot;:&quot;Yes&quot;,&quot;favorite_stores&quot;:[&quot;Product 1&quot;],&quot;store_website&quot;:&quot;&quot;},&quot;MedicalTeams&quot;:{&quot;medical_team_status&quot;:&quot;Yeah, i have a kick ass team&quot;,&quot;medical_teams&quot;:[&quot;Medical Team 1, LA, California&quot;],&quot;team_website&quot;:&quot;&quot;},&quot;goals&quot;:[&quot;Lose some weight&quot;,&quot;Get healthier and feel better&quot;]}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n      \"error\": \"validation_errors\",\n   \"error_detail\": {\n      \"email\": [\n        \"The email field is required.\"\n      ],\n      \"password\": [\n        \"The password field is required.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/ProfileController.php",
    "groupTitle": "2_User_Details"
  },
  {
    "type": "post",
    "url": "api/v1/user/cancelEvent",
    "title": "Cancel Event",
    "description": "<p>API for cancel event.</p>",
    "name": "Cancel_Event",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "event_id",
            "description": "<p>ID of the event.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/cancelInvitation",
    "title": "cancel invitation",
    "description": "<p>API for cancel invitation.</p>",
    "name": "Cancel_Invitation",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_invites_id",
            "description": "<p>ID of the those users who are invited.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/createEvent",
    "title": "Create Event",
    "description": "<p>API for create Event.</p>",
    "name": "Create_Event",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "user_invites_id",
            "description": "<p>Id of user's who are invited for the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_of_run",
            "description": "<p>Type of run i.e 5k,10k etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Event start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Event end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Event host location with index [address,latitude,longitude,locationname,placeid].&quot;location&quot; : { &quot;placeid&quot; : &quot;ChIJzbK8vXDWTIgRlaZGt0lBTsA&quot;, &quot;longitude&quot; : &quot;-78.656894&quot;, &quot;latitude&quot; : &quot;37.431573&quot;, &quot;address&quot; : &quot;Virginia, USA&quot;, &quot;locationname&quot; : &quot;Virginia&quot; }</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distance",
            "description": "<p>Distance to run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pace",
            "description": "<p>Pace required for run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "lock_flag",
            "description": "<p>This is to set the lock icon. If 1 the lock icon should be yellow, menaing the activity being locked.Else pass the value as 0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user already send request:",
          "content": "HTTP/1.1 422 validation_errors\n{\n  \"status\":\"0\",\n  \"message\": \"Request already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/acceptEventInvitation",
    "title": "Join the event invitation",
    "description": "<p>API to Join the event invitation</p>",
    "name": "Join_the_event_invitation",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "event_id",
            "description": "<p>User ID to flag an user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/listEvent",
    "title": "List  Loggedin users month's Event",
    "description": "<p>API for listing loggedin users month's event.</p>",
    "name": "List_Loggedin_user_event",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "start_date",
            "description": "<p>Month's start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "end_date",
            "description": "<p>Month's end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/listOthersEvent",
    "title": "List others events in month",
    "description": "<p>API for listing others events in month .</p>",
    "name": "List_Others_Event",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "other_user_id",
            "description": "<p>ID of other user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "start_date",
            "description": "<p>Month's start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "end_date",
            "description": "<p>Month's end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/eventInvities",
    "title": "Search Invities",
    "description": "<p>API for search invites</p>",
    "name": "Search_Invities",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Search keyword.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/listEachEvent",
    "title": "Show each events",
    "description": "<p>API for showing each event details</p>",
    "name": "Show_each_events",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "event_id",
            "description": "<p>ID of the event.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/showEventInvities",
    "title": "Show event invities",
    "description": "<p>API for Show event invities</p>",
    "name": "Show_event_invities",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "event_id",
            "description": "<p>ID of the event.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/updateEvent",
    "title": "Update Event",
    "description": "<p>API for update event.</p>",
    "name": "Update_Event",
    "group": "3_Users_Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>user_id of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "event_id",
            "description": "<p>ID of the event.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_invites_id",
            "description": "<p>Id of user's who are newly invited for the event</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_remove_id",
            "description": "<p>Id of user's who are removed form the event</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Event.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type_of_run",
            "description": "<p>Type of run i.e 5k,10k etc.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Event description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Event start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Event end date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Event host location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "distance",
            "description": "<p>Distance to run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pace",
            "description": "<p>Pace required for run.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lock_flag",
            "description": "<p>This is to set the lock icon. If 1 the lock icon should be yellow, menaing the activity being locked.Else pass the value as 0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "3_Users_Events"
  },
  {
    "type": "post",
    "url": "api/v1/user/filterSearch",
    "title": "Search User.",
    "description": "<p>API for searching.</p>",
    "name": "Search_User",
    "group": "4_Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of speerit user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "TYPE",
            "description": "<p>OF RUNNER Runner tpe of an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GOALS",
            "description": "<p>Goals of an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LOCATION",
            "description": "<p>Location of an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PACE",
            "description": "<p>Pace of an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "DATE",
            "description": "<p>Date of birth of an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "COACH",
            "description": "<p>If any coach.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CLUBS",
            "description": "<p>If joined in any club.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RACE",
            "description": "<p>Race of an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GENDER",
            "description": "<p>Gender of an user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"message\": \"error\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SearchController.php",
    "groupTitle": "4_Search"
  },
  {
    "type": "post",
    "url": "api/v1/user/nameSearch",
    "title": "Search User Name.",
    "description": "<p>API for searching by passing name.</p>",
    "name": "Search_User_Name",
    "group": "4_Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Name of speerit user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"message\": \"error\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SearchController.php",
    "groupTitle": "4_Search"
  },
  {
    "type": "post",
    "url": "api/v1/user/acceptRequest",
    "title": "Accept friend request",
    "description": "<p>API for accepting friend request.</p>",
    "name": "Accept_friend_request",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "friends_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>Status of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend doesnot exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"doesnot exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/cancelRequest",
    "title": "Cancel friend request",
    "description": "<p>API for cancel friend request.</p>",
    "name": "Cancel_friend_request",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "friends_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>Status of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/listFollowing",
    "title": "List user followings",
    "description": "<p>API for list Followings.</p>",
    "name": "List_Followings_of_a_user",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"following\": [\n      {\n        \"id\": 1,\n        \"user_id\": \"30\",\n        \"follower_id\": \"1\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/listRequest",
    "title": "List Incoming friend request",
    "description": "<p>API for Listing friend request.</p>",
    "name": "List_Incoming_friend_request",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend doesnot exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"doesnot exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/listFollowers",
    "title": "List user's followers",
    "description": "<p>API for list user's followers.</p>",
    "name": "List_User_Follower",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"followers\": [\n      {\n        \"id\": 1,\n        \"user_id\": \"1\",\n        \"follower_id\": \"30\",\n        \"created_at\": \"2016-01-27 10:27:34\",\n        \"updated_at\": \"2016-01-27 10:27:34\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/listFriends",
    "title": "Get the list of user's friends",
    "description": "<p>API for fetching user's friends.</p>",
    "name": "List_User_Friends",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n        \"status\": \"1\",\n        \"message\": \"success\",\n        \"friendslist\": [\n          {\n            \"id\": 1,\n            \"user_id\": \"1\",\n            \"friends_id\": \"30\",\n            \"request_status\": \"pending\",\n            \"accepted_time\": \"2016-01-25 14:24:27\",\n            \"created_at\": \"2016-01-25 08:54:27\",\n            \"updated_at\": \"2016-01-25 08:54:27\"\n          }\n        ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n      \"error\": \"validation_errors\",\n   \"error_detail\": {\n      \"email\": [\n        \"The email field is required.\"\n      ],\n      \"password\": [\n        \"The password field is required.\"\n      ]\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/sendRequest",
    "title": "Sending friend request",
    "description": "<p>API for sending friend request.</p>",
    "name": "Sending_friend_request",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "friends_id",
            "description": "<p>ID of the friend.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>Status of the request.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user already send request:",
          "content": "HTTP/1.1 422 validation_errors\n{\n  \"status\":\"0\",\n  \"message\": \"Request already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/userFollowers",
    "title": "Follow a user",
    "description": "<p>API for storing user's followers.</p>",
    "name": "Storing_User_Follower",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "follower_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's follower already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/unfollow",
    "title": "Unfollow",
    "description": "<p>API for unfollow.</p>",
    "name": "Unfollow",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "follower_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"invalid_credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/unfriend",
    "title": "Unfriend",
    "description": "<p>API for unfriend.</p>",
    "name": "Unfriend_User_Friends",
    "group": "5_Users_Friends_and_Followers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "friends_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"invalid_credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/UserFriendsController.php",
    "groupTitle": "5_Users_Friends_and_Followers"
  },
  {
    "type": "post",
    "url": "api/v1/user/flagSettings",
    "title": "Flag an user",
    "description": "<p>API for Flag an user</p>",
    "name": "Flag_User",
    "group": "6_Flag_User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "flagged_user_id",
            "description": "<p>User ID to flag an user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the flag whether report/block/not interested.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/EventController.php",
    "groupTitle": "6_Flag_User"
  },
  {
    "type": "post",
    "url": "api/v1/user/listMatched",
    "title": "Listing Matched users",
    "description": "<p>API for listing matched user.</p>",
    "name": "List_Matched",
    "group": "7_User_Watchlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's follower already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/MatchController.php",
    "groupTitle": "7_User_Watchlist"
  },
  {
    "type": "post",
    "url": "api/v1/listWatcheduser",
    "title": "List watched users",
    "description": "<p>API for listing watched users.</p>",
    "name": "List_watched_user",
    "group": "7_User_Watchlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's follower already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/MatchController.php",
    "groupTitle": "7_User_Watchlist"
  },
  {
    "type": "post",
    "url": "api/v1/user/watchList",
    "title": "User watchlist",
    "description": "<p>API for adding user watchlist.</p>",
    "name": "User_Watchlist",
    "group": "7_User_Watchlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "watched_id",
            "description": "<p>ID of other user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of watch user, either watching or not watching.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's follower already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/MatchController.php",
    "groupTitle": "7_User_Watchlist"
  },
  {
    "type": "post",
    "url": "api/v1/user/algoMatched",
    "title": "Algo Matches",
    "description": "<p>API for Algo Matches.</p>",
    "name": "Algo_Matches",
    "group": "8_Algo_Match",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/MatchController.php",
    "groupTitle": "8_Algo_Match"
  },
  {
    "type": "post",
    "url": "api/v1/user/logOut",
    "title": "App Logout",
    "description": "<p>API for App Notification</p>",
    "name": "App_Logout",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logout",
            "description": "<p>provide Logout</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/appNotification",
    "title": "App Notification",
    "description": "<p>API for App Notification</p>",
    "name": "App_Notification",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "message_mob",
            "description": "<p>message_mob,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "message_mail",
            "description": "<p>message_mail,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "match_updates_mob",
            "description": "<p>match_updates_mob,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "match_updates_mail",
            "description": "<p>match_updates_mail,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_act_mob",
            "description": "<p>account_act_mob,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "account_act_mail",
            "description": "<p>account_act_mail,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "others_mob",
            "description": "<p>others_mob,either 0 for off and 1 for on.  .</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "others_mail",
            "description": "<p>others_mail,either 0 for off and 1 for on.  .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/calendarSettings",
    "title": "Calendar Settings",
    "description": "<p>API for Calendar Settings.</p>",
    "name": "Calendar_Settings",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status,either 0 for off and 1 for on.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/changePassword",
    "title": "User's change password",
    "description": "<p>API for User's change password</p>",
    "name": "Change_Password",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>type your new password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/chatNotification",
    "title": "Chat Notifications",
    "description": "<p>API for Chat notification.</p>",
    "name": "Chat_Notifications",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "sender_id",
            "description": "<p>User ID of the sender.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "receiver_id",
            "description": "<p>User ID of the receiver.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/NotificationController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/listNotification",
    "title": "List Notifications",
    "description": "<p>API for listing the notification.</p>",
    "name": "List_Notifications",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/NotificationController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/passChatId",
    "title": "Pass ID of users to show yellow circle",
    "description": "<p>API for Pass ID of users to show yellow circle.</p>",
    "name": "Pass_ID_of_users_to_show_yellow_circle",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>pass set of IDs as an json string.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/NotificationController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/socialConnect",
    "title": "Social Connect in settings",
    "description": "<p>API for social connect in settings</p>",
    "name": "Social_Connect",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_type",
            "description": "<p>Type whether facebook,twitter,g+</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_id",
            "description": "<p>ID of fb/twitter/g+.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_secret",
            "description": "<p>secret key for fb &amp; twitter and for g+ its Authentication code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_token",
            "description": "<p>token of fb/twitter/g+</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "social_status",
            "description": "<p>status either 0 for off or 1 for on</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh token of g+</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"error\": \"invalid_credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 validation_errors\n{\n    \"status\": \"0\",\n    \"error\": \"invalid_credentials\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SocialController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/storeBadgeCount",
    "title": "Store chat count",
    "description": "<p>API for storing chat count.</p>",
    "name": "Store_chat_count",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "badge_count",
            "description": "<p>chat count of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/NotificationController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/updateReadstatus",
    "title": "Update Read Status",
    "description": "<p>API for updating read status.</p>",
    "name": "Update_Read_Status",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "notification_read",
            "description": "<p>pass value 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "notification_type",
            "description": "<p>pass notification type</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "notification_id",
            "description": "<p>pass notification id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/NotificationController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/chatImages",
    "title": "Upload chat images",
    "description": "<p>API for chat image</p>",
    "name": "Upload_chat_images",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Chat image.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n   \"list\": [\n      {\n        \"user_id\": 1,\n        \"photo\": \"public/uploads/images.png\"\n      }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"eror\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response if user's friend already exist:",
          "content": "HTTP/1.1 401 error\n{\n  \"status\":\"0\",\n  \"message\": \"already exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/trackerSettings",
    "title": "User's tracker settings",
    "description": "<p>API for User's tracker settings</p>",
    "name": "User_s_tracker_settings",
    "group": "9_Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tracker_id",
            "description": "<p>pass tracker id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tracker_name",
            "description": "<p>passtracker name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>pass access token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oauth_token_secret",
            "description": "<p>pass oauth token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  },
  {
    "type": "post",
    "url": "api/v1/user/getSettings",
    "title": "User settings details",
    "description": "<p>API for User settings details</p>",
    "name": "User_settings_details",
    "group": "9_Settings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success.",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"1\",\n    \"message\": \"success\",\n    \"settings\": {\n      \"user_id\": 18,\n      \"tracker_name\": \"strava\",\n      \"tracker_id\": \"13615409\",\n      \"suggested_tracker\": \"\",\n      \"social_details\": [],\n      \"notifications\": {\n        \"user_id\": \"18\",\n        \"message_mob\": \"0\",\n        \"message_mail\": \"\",\n        \"match_updates_mob\": \"0\",\n        \"match_updates_mail\": \"0\",\n        \"account_act_mob\": \"0\",\n        \"account_act_mail\": \"0\",\n        \"others_mob\": \"0\",\n        \"others_mail\": \"0\"\n      }\n    }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Message invalid_credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 invalid_credentials\n{\n  \"status\":\"0\",\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/v1/SettingsController.php",
    "groupTitle": "9_Settings"
  }
] });
