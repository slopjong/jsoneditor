var schema = {
  "description":"SpaceAPI 0.13",
  "type":"object",
  "properties":{
    "api":{
      "description":"The version of SpaceAPI your endpoint uses",
      "type":"string",
      "required":true,
      "enum":[
        "0.13"
      ]
    },
    "space":{
      "description":"The name of your space",
      "type":"string",
      "required":true
    },
    "logo":{
      "description":"URL to your space logo",
      "type":"string",
      "required":true
    },
    "url":{
      "description":"URL to your space website",
      "required":true,
      "type":"string"
    },
    "location":{
      "description":"Position data such as a postal address or geographic coordinates",
      "required":true,
      "type":"object",
      "properties":{
        "address":{
          "description":"The postal address of your space (street, block, housenumber, zip code, city, whatever you usually need in your country, and the country itself).<br>Examples: <ul><li>Netzladen e.V., Breite Stra\u00dfe 74, 53111 Bonn, Germany<\/li><\/ul>",
          "required":false,
          "type":"string"
        },
        "lat":{
          "description":"Latitude of your space location, in degree with decimal places. Use positive values for locations north of the equator, negative values for locations south of equator.",
          "required":true,
          "type":"number"
        },
        "lon":{
          "description":"Longitude of your space location, in degree with decimal places. Use positive values for locations west of Greenwich, and negative values for locations east of Greenwich.",
          "required":true,
          "type":"number"
        }
      }
    },
    "spacefed":{
      "description":"A flag indicating if the hackerspace uses SpaceFED, a federated login scheme so that visiting hackers can use the space WiFi with their home space credentials.",
      "required":false,
      "type":"object",
      "properties":{
        "spacenet":{
          "description":"See the <a target=\"_blank\" href=\"https:\/\/spacefed.net\/wiki\/index.php\/Category:Howto\/Spacenet\">wiki<\/a>.",
          "required":true,
          "type":"boolean"
        },
        "spacesaml":{
          "description":"See the <a target=\"_blank\" href=\"https:\/\/spacefed.net\/wiki\/index.php\/Category:Howto\/Spacesaml\">wiki<\/a>.",
          "required":true,
          "type":"boolean"
        },
        "spacephone":{
          "description":"See the <a target=\"_blank\" href=\"https:\/\/spacefed.net\/wiki\/index.php\/Category:Howto\/Spacephone\">wiki<\/a>.",
          "required":true,
          "type":"boolean"
        }
      }
    },
    "cam":{
      "description":"URL(s) of webcams in your space",
      "required":false,
      "type":"array",
      "items":{
        "type":"string"
      },
      "minItems":1
    },
    "stream":{
      "description":"A mapping of stream types to stream URLs.If you use other stream types make a <a href=\"add-your-space\" target=\"_blank\">change request<\/a> or prefix yours with <samp>ext_<\/samp> .",
      "required":false,
      "type":"object",
      "properties":{
        "m4":{
          "description":"Your mpg stream URL. Example: <samp>{\"mp4\": \"http\/\/example.org\/stream.mpg\"}<\/samp>",
          "required":false,
          "type":"string"
        },
        "mjpeg":{
          "description":"Your mjpeg stream URL. Example: <samp>{\"mjpeg\": \"http:\/\/example.org\/stream.mjpeg\"}<\/samp>",
          "required":false,
          "type":"string"
        },
        "ustream":{
          "description":"Your ustream stream URL. Example: <samp>{\"ustream\": \"http:\/\/www.ustream.tv\/channel\/hackspsps\"}<\/samp>",
          "required":false,
          "type":"string"
        }
      }
    },
    "state":{
      "description":"A collection of status-related data: actual open\/closed status, icons, last change timestamp etc.",
      "required":true,
      "type":"object",
      "properties":{
        "open":{
          "description":"A flag which indicates if the space is currently open or closed. The state 'undefined' can be achieved by assigning this field the value 'null' (without the quotes). In most (all?) programming languages this is evaluated to false so that no app should break",
          "required":true,
          "type":[
            "boolean",
            "null"
          ]
        },
        "lastchange":{
          "description":"The Unix timestamp when the space status changed most recently",
          "required":false,
          "type":"number"
        },
        "trigger_person":{
          "description":"The person who lastly changed the state e.g. opened or closed the space.",
          "required":false,
          "type":"string"
        },
        "message":{
          "description":"An additional free-form string, could be something like <samp>'open for public'<\/samp>, <samp>'members only'<\/samp> or whatever you want it to be",
          "required":false,
          "type":"string"
        },
        "icon":{
          "description":"Icons that show the status graphically",
          "type":"object",
          "required":false,
          "properties":{
            "open":{
              "description":"The URL to your customized space logo showing an open space",
              "type":"string",
              "required":true
            },
            "closed":{
              "description":"The URL to your customized space logo showing a closed space",
              "type":"string",
              "required":true
            }
          }
        }
      }
    },
    "events":{
      "description":"Events which happened recently in your space and which could be interesting to the public, like 'User X has entered\/triggered\/did something at timestamp Z'",
      "required":false,
      "type":"array",
      "items":{
        "required":false,
        "type":"object",
        "properties":{
          "name":{
            "description":"Name or other identity of the subject (e.g. <samp>J. Random Hacker<\/samp>, <samp>fridge<\/samp>, <samp>3D printer<\/samp>, \u2026)",
            "required":true,
            "type":"string"
          },
          "type":{
            "description":"Action (e.g. <samp>check-in<\/samp>, <samp>check-out<\/samp>, <samp>finish-print<\/samp>, \u2026). Define your own actions and use them consistently, canonical actions are not (yet) specified",
            "required":true,
            "type":"string"
          },
          "timestamp":{
            "description":"Unix timestamp when the event occured",
            "required":true,
            "type":"number"
          },
          "extra":{
            "description":"A custom text field to give more information about the event",
            "required":false,
            "type":"string"
          }
        }
      }
    },
    "contact":{
      "description":"Contact information about your space. You must define at least one which is in the list of allowed values of the issue_report_channels field.",
      "required":true,
      "type":"object",
      "properties":{
        "phone":{
          "description":"Phone number, including country code with a leading plus sign. Example: <samp>+1 800 555 4567<\/samp>",
          "required":false,
          "type":"string"
        },
        "sip":{
          "description":"URI for Voice-over-IP via SIP. Example: <samp>sip:yourspace@sip.example.org<\/samp>",
          "required":false,
          "type":"string"
        },
        "keymasters":{
          "description":"Persons who carry a key and are able to open the space upon request. One of the fields irc_nick, phone, email or twitter must be specified.",
          "required":false,
          "type":"array",
          "minItems":1,
          "items":{
            "type":"object",
            "properties":{
              "name":{
                "description":"Real name",
                "required":false,
                "type":"string"
              },
              "irc_nick":{
                "description":"Contact the person with this nickname directly in irc if available. The irc channel to be used is defined in the contact\/irc field.",
                "required":false,
                "type":"string"
              },
              "phone":{
                "description":"Example: <samp>['+1 800 555 4567','+1 800 555 4544']<\/samp>",
                "required":false,
                "type":"string"
              },
              "email":{
                "description":"Email address which can be base64 encoded.",
                "required":false,
                "type":"string"
              },
              "twitter":{
                "description":"Twitter username with leading <samp>@<\/samp>.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "irc":{
          "description":"URL of the IRC channel, in the form <samp>irc:\/\/example.org\/#channelname<\/samp>",
          "required":false,
          "type":"string"
        },
        "twitter":{
          "description":"Twitter handle, with leading @",
          "required":false,
          "type":"string"
        },
        "facebook":{
          "description":"Facebook account.",
          "required":false,
          "type":"string"
        },
        "google":{
          "description":"Google services.",
          "required":false,
          "type":"object",
          "properties":{
            "plus":{
              "description":"Google plus.",
              "required":false,
              "type":"string"
            }
          }
        },
        "identica":{
          "description":"Identi.ca or StatusNet account, in the form <samp>yourspace@example.org<\/samp>",
          "required":false,
          "type":"string"
        },
        "foursquare":{
          "description":"Foursquare ID, in the form <samp>4d8a9114d85f3704eab301dc<\/samp>.",
          "required":false,
          "type":"string"
        },
        "email":{
          "description":"E-mail address for contacting your space. If this is a mailing list consider to use the contact\/ml field.",
          "required":false,
          "type":"string"
        },
        "ml":{
          "description":"The e-mail address of your mailing list. If you use Google Groups then the e-mail looks like <samp>your-group@googlegroups.com<\/samp>.",
          "required":false,
          "type":"string"
        },
        "jabber":{
          "description":"A public Jabber\/XMPP multi-user chatroom in the form <samp>chatroom@conference.example.net<\/samp>",
          "required":false,
          "type":"string"
        },
        "issue_mail":{
          "description":"A seperate email address for issue reports (see the <em>issue_report_channels<\/em> field). This value can be Base64-encoded.",
          "required":false,
          "type":"string"
        }
      }
    },
    "issue_report_channels":{
      "description":"This array defines all communication channels where you want to get automated issue reports about your SpaceAPI endpoint from the revalidator. This field is meant for internal usage only and it should never be consumed by any app. At least one channel must be defined. Please consider that when using <samp>ml<\/samp> the mailing list moderator has to moderate incoming emails or add the sender email to the subscribers. If you don't break your SpaceAPI implementation you won't get any notifications ;-)",
      "required":true,
      "type":"array",
      "items":{
        "type":"string",
        "enum":[
          "email",
          "issue_mail",
          "twitter",
          "ml"
        ]
      },
      "minItems":1
    },
    "sensors":{
      "description":"Data of various sensors in your space (e.g. temperature, humidity, amount of Club-Mate left, \u2026). The only canonical property is the <em>temp<\/em> property, additional sensor types may be defined by you. In this case, you are requested to share your definition for inclusion in this specification.",
      "required":false,
      "type":"object",
      "properties":{
        "temperature":{
          "description":"Temperature sensor. To convert from one unit of temperature to another consider <a href=\"http:\/\/en.wikipedia.org\/wiki\/Temperature_conversion_formulas\" target=\"_blank\">Wikipedia<\/a>.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The sensor value",
                "required":true,
                "type":"number"
              },
              "unit":{
                "description":"The unit of the sensor value.",
                "required":true,
                "type":"string",
                "enum":[
                  "\u00b0C",
                  "\u00b0F",
                  "K",
                  "\u00b0De",
                  "\u00b0N",
                  "\u00b0R",
                  "\u00b0R\u00e9",
                  "\u00b0R\u00f8"
                ]
              },
              "location":{
                "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":true,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "door_locked":{
          "description":"Sensor type to indicate if a certain door is locked.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The sensor value",
                "required":true,
                "type":"boolean"
              },
              "location":{
                "description":"The location of your sensor such as <samp>front door<\/samp>, <samp>chill room<\/samp> or <samp>lab<\/samp>.",
                "required":true,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "barometer":{
          "description":"Barometer sensor",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The sensor value",
                "required":true,
                "type":"number"
              },
              "unit":{
                "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                "required":true,
                "type":"string",
                "enum":[
                  "hPA"
                ]
              },
              "location":{
                "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":true,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "radiation":{
          "description":"Compound radiation sensor. Check this <a rel=\"nofollow\" href=\"https:\/\/sites.google.com\/site\/diygeigercounter\/gm-tubes-supported\" target=\"_blank\">resource<\/a>.",
          "required":false,
          "type":"object",
          "properties":{
            "alpha":{
              "description":"An alpha sensor",
              "required":false,
              "type":"array",
              "items":{
                "type":"object",
                "properties":{
                  "value":{
                    "description":"Observed counts per minute (ocpm) or actual radiation value. If the value are the observed counts then the dead_time and conversion_factor fields must be defined as well. CPM formula: <div>cpm = ocpm ( 1 + 1 \/ (1 - ocpm x dead_time) )<\/div> Conversion formula: <div>\u00b5Sv\/h = cpm x conversion_factor<\/div>",
                    "required":true,
                    "type":"number"
                  },
                  "unit":{
                    "description":"Choose the appropriate unit for your radiation sensor instance.",
                    "required":true,
                    "type":"string",
                    "enum":[
                      "cpm",
                      "r\/h",
                      "\u00b5Sv\/h",
                      "mSv\/a",
                      "\u00b5Sv\/a"
                    ]
                  },
                  "dead_time":{
                    "description":"The dead time in \u00b5s. See the description of the value field to see how to use the dead time.",
                    "required":false,
                    "type":"number"
                  },
                  "conversion_factor":{
                    "description":"The conversion from the <em>cpm<\/em> unit to another unit hardly depends on your tube type. See the description of the value field to see how to use the conversion factor. <strong>Note:<\/strong> only trust your manufacturer if it comes to the actual factor value. The internet seems <a rel=\"nofollow\" href=\"http:\/\/sapporohibaku.wordpress.com\/2011\/10\/15\/conversion-factor\/\" target=\"_blank\">full of wrong copy & pastes<\/a>, don't even trust your neighbour hackerspace. If in doubt ask the tube manufacturer.",
                    "required":false,
                    "type":"number"
                  },
                  "location":{
                    "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                    "required":false,
                    "type":"string"
                  },
                  "name":{
                    "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                    "required":false,
                    "type":"string"
                  },
                  "description":{
                    "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                    "required":false,
                    "type":"string"
                  }
                }
              }
            },
            "beta":{
              "description":"A beta sensor",
              "required":false,
              "type":"array",
              "items":{
                "type":"object",
                "properties":{
                  "value":{
                    "description":"Observed counts per minute (ocpm) or actual radiation value. If the value are the observed counts then the dead_time and conversion_factor fields must be defined as well. CPM formula: <div>cpm = ocpm ( 1 + 1 \/ (1 - ocpm x dead_time) )<\/div> Conversion formula: <div>\u00b5Sv\/h = cpm x conversion_factor<\/div>",
                    "required":true,
                    "type":"number"
                  },
                  "unit":{
                    "description":"Choose the appropriate unit for your radiation sensor instance.",
                    "required":true,
                    "type":"string",
                    "enum":[
                      "cpm",
                      "r\/h",
                      "\u00b5Sv\/h",
                      "mSv\/a",
                      "\u00b5Sv\/a"
                    ]
                  },
                  "dead_time":{
                    "description":"The dead time in \u00b5s. See the description of the value field to see how to use the dead time.",
                    "required":false,
                    "type":"number"
                  },
                  "conversion_factor":{
                    "description":"The conversion from the <em>cpm<\/em> unit to another unit hardly depends on your tube type. See the description of the value field to see how to use the conversion factor. <strong>Note:<\/strong> only trust your manufacturer if it comes to the actual factor value. The internet seems <a rel=\"nofollow\" href=\"http:\/\/sapporohibaku.wordpress.com\/2011\/10\/15\/conversion-factor\/\" target=\"_blank\">full of wrong copy & pastes<\/a>, don't even trust your neighbour hackerspace. If in doubt ask the tube manufacturer.",
                    "required":false,
                    "type":"number"
                  },
                  "location":{
                    "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                    "required":false,
                    "type":"string"
                  },
                  "name":{
                    "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                    "required":false,
                    "type":"string"
                  },
                  "description":{
                    "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                    "required":false,
                    "type":"string"
                  }
                }
              }
            },
            "gamma":{
              "description":"A gamma sensor",
              "required":false,
              "type":"array",
              "items":{
                "type":"object",
                "properties":{
                  "value":{
                    "description":"Observed counts per minute (ocpm) or actual radiation value. If the value are the observed counts then the dead_time and conversion_factor fields must be defined as well. CPM formula: <div>cpm = ocpm ( 1 + 1 \/ (1 - ocpm x dead_time) )<\/div> Conversion formula: <div>\u00b5Sv\/h = cpm x conversion_factor<\/div>",
                    "required":true,
                    "type":"number"
                  },
                  "unit":{
                    "description":"Choose the appropriate unit for your radiation sensor instance.",
                    "required":true,
                    "type":"string",
                    "enum":[
                      "cpm",
                      "r\/h",
                      "\u00b5Sv\/h",
                      "mSv\/a",
                      "\u00b5Sv\/a"
                    ]
                  },
                  "dead_time":{
                    "description":"The dead time in \u00b5s. See the description of the value field to see how to use the dead time.",
                    "required":false,
                    "type":"number"
                  },
                  "conversion_factor":{
                    "description":"The conversion from the <em>cpm<\/em> unit to another unit hardly depends on your tube type. See the description of the value field to see how to use the conversion factor. <strong>Note:<\/strong> only trust your manufacturer if it comes to the actual factor value. The internet seems <a rel=\"nofollow\" href=\"http:\/\/sapporohibaku.wordpress.com\/2011\/10\/15\/conversion-factor\/\" target=\"_blank\">full of wrong copy & pastes<\/a>, don't even trust your neighbour hackerspace. If in doubt ask the tube manufacturer.",
                    "required":false,
                    "type":"number"
                  },
                  "location":{
                    "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                    "required":false,
                    "type":"string"
                  },
                  "name":{
                    "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                    "required":false,
                    "type":"string"
                  },
                  "description":{
                    "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                    "required":false,
                    "type":"string"
                  }
                }
              }
            },
            "beta_gamma":{
              "description":"A sensor which cannot filter beta and gamma radiation seperately.",
              "required":false,
              "type":"array",
              "items":{
                "type":"object",
                "properties":{
                  "value":{
                    "description":"Observed counts per minute (ocpm) or actual radiation value. If the value are the observed counts then the dead_time and conversion_factor fields must be defined as well. CPM formula: <div>cpm = ocpm ( 1 + 1 \/ (1 - ocpm x dead_time) )<\/div> Conversion formula: <div>\u00b5Sv\/h = cpm x conversion_factor<\/div>",
                    "required":true,
                    "type":"number"
                  },
                  "unit":{
                    "description":"Choose the appropriate unit for your radiation sensor instance.",
                    "required":true,
                    "type":"string",
                    "enum":[
                      "cpm",
                      "r\/h",
                      "\u00b5Sv\/h",
                      "mSv\/a",
                      "\u00b5Sv\/a"
                    ]
                  },
                  "dead_time":{
                    "description":"The dead time in \u00b5s. See the description of the value field to see how to use the dead time.",
                    "required":false,
                    "type":"number"
                  },
                  "conversion_factor":{
                    "description":"The conversion from the <em>cpm<\/em> unit to another unit hardly depends on your tube type. See the description of the value field to see how to use the conversion factor. <strong>Note:<\/strong> only trust your manufacturer if it comes to the actual factor value. The internet seems <a rel=\"nofollow\" href=\"http:\/\/sapporohibaku.wordpress.com\/2011\/10\/15\/conversion-factor\/\" target=\"_blank\">full of wrong copy & pastes<\/a>, don't even trust your neighbour hackerspace. If in doubt ask the tube manufacturer.",
                    "required":false,
                    "type":"number"
                  },
                  "location":{
                    "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                    "required":false,
                    "type":"string"
                  },
                  "name":{
                    "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                    "required":false,
                    "type":"string"
                  },
                  "description":{
                    "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                    "required":false,
                    "type":"string"
                  }
                }
              }
            }
          }
        },
        "humidity":{
          "description":"Humidity sensor",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The sensor value",
                "required":true,
                "type":"number"
              },
              "unit":{
                "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                "required":true,
                "type":"string",
                "enum":[
                  "%"
                ]
              },
              "location":{
                "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":true,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "beverage_supply":{
          "description":"How much Mate and beer is in your fridge?",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The sensor value",
                "required":true,
                "type":"number"
              },
              "unit":{
                "description":"The unit, either <samp>btl<\/samp> for bottles or <samp>crt<\/samp> for crates.",
                "required":true,
                "type":"string",
                "enum":[
                  "btl",
                  "crt"
                ]
              },
              "location":{
                "description":"The location of your sensor such as <samp>Room 1<\/samp> or <samp>Room 2<\/samp> or <samp>Room 3<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":false,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "power_consumption":{
          "description":"The power consumption of a specific device or of your whole space.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The sensor value",
                "required":true,
                "type":"number"
              },
              "unit":{
                "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                "required":true,
                "type":"string",
                "enum":[
                  "mW",
                  "W",
                  "VA"
                ]
              },
              "location":{
                "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":true,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "wind":{
          "description":"Your wind sensor.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "properties":{
                "description":"",
                "required":true,
                "type":"object",
                "properties":{
                  "speed":{
                    "description":"",
                    "required":true,
                    "type":"object",
                    "properties":{
                      "value":{
                        "description":"The sensor value",
                        "required":true,
                        "type":"number"
                      },
                      "unit":{
                        "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                        "required":true,
                        "type":"string",
                        "enum":[
                          "m\/s",
                          "km\/h",
                          "kn"
                        ]
                      }
                    }
                  },
                  "gust":{
                    "description":"",
                    "required":true,
                    "type":"object",
                    "properties":{
                      "value":{
                        "description":"The sensor value",
                        "required":true,
                        "type":"number"
                      },
                      "unit":{
                        "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                        "required":true,
                        "type":"string",
                        "enum":[
                          "m\/s",
                          "km\/h",
                          "kn"
                        ]
                      }
                    }
                  },
                  "direction":{
                    "description":"The wind direction in degrees. Use this <a href=\"https:\/\/github.com\/slopjong\/OpenSpaceLint\/issues\/80\" target=\"_blank_\">mapping<\/a> to convert the degrees into a string.",
                    "required":true,
                    "type":"object",
                    "properties":{
                      "value":{
                        "description":"The sensor value",
                        "required":true,
                        "type":"number"
                      },
                      "unit":{
                        "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                        "required":true,
                        "type":"string",
                        "enum":[
                          "\u00b0"
                        ]
                      }
                    }
                  },
                  "elevation":{
                    "description":"Height above mean sea level.",
                    "required":true,
                    "type":"object",
                    "properties":{
                      "value":{
                        "description":"The sensor value",
                        "required":true,
                        "type":"number"
                      },
                      "unit":{
                        "description":"The unit of the sensor value. You should always define the unit though if the sensor is a flag of a boolean type then you can of course omit it.",
                        "required":true,
                        "type":"string",
                        "enum":[
                          "m"
                        ]
                      }
                    }
                  }
                }
              },
              "location":{
                "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":true,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "network_connections":{
          "description":"This sensor type is to specify the currently active  ethernet or wireless network devices. You can create different instances for each network type.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "type":{
                "description":"This field is optional but you can use it to the network type such as <samp>wifi<\/samp> or <samp>cable<\/samp>. You can even expose the number of <a href=\"https:\/\/spacefed.net\/wiki\/index.php\/Spacenet\" target=\"_blank\">spacenet<\/a>-authenticated connections.",
                "required":false,
                "type":"string",
                "enum":[
                  "wifi",
                  "cable",
                  "spacenet"
                ]
              },
              "value":{
                "description":"The amount of network connections.",
                "required":true,
                "type":"number"
              },
              "machines":{
                "description":"The machines that are currently connected with the network.",
                "required":false,
                "type":"array",
                "items":{
                  "type":"object",
                  "properties":{
                    "name":{
                      "description":"The machine name.",
                      "required":false,
                      "type":"string"
                    },
                    "mac":{
                      "description":"The machine's MAC address of the format <samp>D3:3A:DB:EE:FF:00<\/samp>.",
                      "required":true,
                      "type":"string"
                    }
                  }
                }
              },
              "location":{
                "description":"The location of your sensor such as <samp>Outside<\/samp>, <samp>Inside<\/samp>, <samp>Ceiling<\/samp>, <samp>Roof<\/samp> or <samp>Room 1<\/samp>.",
                "required":false,
                "type":"string"
              },
              "name":{
                "description":"This field is an additional field to give your sensor a name. This can be useful if you have multiple sensors in the same location.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "account_balance":{
          "description":"How rich is your hackerspace?",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"How much?",
                "required":true,
                "type":"number"
              },
              "unit":{
                "description":"What's the currency? If your currency is missing open a new <a href=\"https:\/\/github.com\/slopjong\/OpenSpaceLint\/issues\" target=\"_blank\">issue<\/a> and request the addition of your currency according <a href=\"http:\/\/de.wikipedia.org\/wiki\/ISO_4217\" target=\"_blank\">ISO 4217<\/a>.",
                "required":true,
                "type":"string",
                "enum":[
                  "BTC",
                  "EUR",
                  "USD",
                  "GBP"
                ]
              },
              "location":{
                "description":"If you have more than one account you can use this field to specify where it is.",
                "required":false,
                "type":"string"
              },
              "name":{
                "description":"Give your sensor instance a name.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "total_member_count":{
          "description":"Specify the number of space members.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The amount of your space members.",
                "required":true,
                "type":"number"
              },
              "location":{
                "description":"Specify the location if your hackerspace has different departments (for whatever reason). This field is for one department. Every department should have its own sensor instance.",
                "required":false,
                "type":"string"
              },
              "name":{
                "description":"You can use this field to specify if this sensor instance counts active or inactive members.",
                "required":false,
                "type":"string"
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        },
        "people_now_present":{
          "description":"Specify the number of people that are currently in your space. Optionally you can define a list of names.",
          "required":false,
          "type":"array",
          "items":{
            "type":"object",
            "properties":{
              "value":{
                "description":"The amount of present people.",
                "required":true,
                "type":"number"
              },
              "location":{
                "description":"If you use multiple sensor instances for different rooms, use this field to indicate the location.",
                "required":false,
                "type":"string"
              },
              "name":{
                "description":"Give this sensor a name if necessary at all. Use the location field for the rooms. This field is not intended to be used for names of hackerspace members. Use the field 'names' instead.",
                "required":false,
                "type":"string"
              },
              "names":{
                "description":"List of hackerspace members that are currently occupying the space.",
                "required":false,
                "type":"array",
                "items":{
                  "type":"string"
                },
                "minItems":1
              },
              "description":{
                "description":"An extra field that you can use to attach some additional information to this sensor instance.",
                "required":false,
                "type":"string"
              }
            }
          }
        }
      }
    },
    "feeds":{
      "description":"Feeds where users can get updates of your space",
      "required":false,
      "type":"object",
      "properties":{
        "blog":{
          "description":"",
          "type":"object",
          "required":false,
          "properties":{
            "type":{
              "description":"Type of the feed, for example <samp>rss<\/samp>, <samp>atom<\/atom>, <samp>ical<\/samp>",
              "required":false,
              "type":"string"
            },
            "url":{
              "description":"Feed URL",
              "required":true,
              "type":"string"
            }
          }
        },
        "wiki":{
          "description":"",
          "type":"object",
          "required":false,
          "properties":{
            "type":{
              "description":"Type of the feed, for example <samp>rss<\/samp>, <samp>atom<\/atom>, <samp>ical<\/samp>",
              "required":false,
              "type":"string"
            },
            "url":{
              "description":"Feed URL",
              "required":true,
              "type":"string"
            }
          }
        },
        "calendar":{
          "description":"",
          "type":"object",
          "required":false,
          "properties":{
            "type":{
              "description":"Type of the feed, for example <samp>rss<\/samp>, <samp>atom<\/atom>, <samp>ical<\/samp>",
              "required":false,
              "type":"string"
            },
            "url":{
              "description":"Feed URL",
              "required":true,
              "type":"string"
            }
          }
        },
        "flickr":{
          "description":"",
          "type":"object",
          "required":false,
          "properties":{
            "type":{
              "description":"Type of the feed, for example <samp>rss<\/samp>, <samp>atom<\/atom>, <samp>ical<\/samp>",
              "required":false,
              "type":"string"
            },
            "url":{
              "description":"Feed URL",
              "required":true,
              "type":"string"
            }
          }
        }
      }
    },
    "cache":{
      "description":"Specifies options about caching of your SpaceAPI endpoint. Use this if you want to avoid hundreds\/thousands of application instances crawling your status.",
      "required":false,
      "type":"object",
      "properties":{
        "schedule":{
          "description":"Cache update cycle. This field must match the basic regular expression <code>^[mhd]\\.[0-9]{2}$<\/code>, where the first field specifies a unit of time (<code>m<\/code> for 1 minute, <code>h<\/code> for 1 hour, <code>d<\/code> for 1 day), and the second field specifies how many of this unit should be skipped between updates. For example, <samp>m.10<\/samp> means one updates every 10 minutes, <samp>h.03<\/samp> means one update every 3 hours, and <samp>d.01<\/samp> means one update every day.",
          "type":"string",
          "required":true,
          "enum":[
            "m.02",
            "m.05",
            "m.10",
            "m.15",
            "m.30",
            "h.01",
            "h.02",
            "h.04",
            "h.08",
            "h.12",
            "d.01"
          ]
        }
      }
    },
    "projects":{
      "description":"Your project sites (links to GitHub, wikis or wherever your projects are hosted)",
      "required":false,
      "type":"array",
      "items":{
        "type":"string"
      }
    },
    "radio_show":{
      "description":"A list of radio shows that your hackerspace might broadcast.",
      "required":false,
      "type":"array",
      "items":{
        "type":"object",
        "properties":{
          "name":{
            "description":"The name of the radio show.",
            "required":true,
            "type":"string"
          },
          "url":{
            "description":"The stream URL which must end in a filename or a semicolon such as <br><ul><li>http:\/\/signal.hackerspaces.org:8090\/signal.mp3<\/li><li>http:\/\/85.214.64.213:8060\/;<\/ul>",
            "required":true,
            "type":"string"
          },
          "type":{
            "description":"The stream encoder.",
            "required":true,
            "type":"string",
            "enum":[
              "mp3",
              "ogg"
            ]
          },
          "start":{
            "description":"Specify the start time by using the <a href=\"http:\/\/en.wikipedia.org\/wiki\/ISO_8601\" target=\"_blank\">ISO 8601<\/a> standard. This encodes the time as follows: <br><br><ul><li>Combined date and time in UTC: 2013-06-10T10:00Z<\/li><li>Combined date and time in localtime with the timezone offset: 2013-06-10T12:00+02:00<\/li><li>Combined date and time in localtime with the timezone offset: 2013-06-10T07:00-03:00<\/li><\/ul> The examples refer all to the same time.",
            "required":true,
            "type":"string"
          },
          "end":{
            "description":"Specify the end time by using the <a href=\"http:\/\/en.wikipedia.org\/wiki\/ISO_8601\" target=\"_blank\">ISO 8601<\/a> standard. This encodes the time as follows: <br><br><ul><li>Combined date and time in UTC: 2013-06-10T10:00Z<\/li><li>Combined date and time in localtime with the timezone offset: 2013-06-10T12:00+02:00<\/li><li>Combined date and time in localtime with the timezone offset: 2013-06-10T07:00-03:00<\/li><\/ul> The examples refer all to the same time.",
            "required":true,
            "type":"string"
          }
        }
      }
    }
  }
}

//var schema = {
//  "id": "0.13",
//  "type":"object",
//  "properties":{
//    "logo":{
//      "type":"string",
//      "required":true
//    },
//    "url":{
//      "required":true,
//      "type":"number"
//    }
//  }
//}