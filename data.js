var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.800429321240661,
          "pitch": 0.17696773570559188,
          "rotation": 0,
          "target": "2-monitoring-room"
        },
        {
          "yaw": 1.34082213253207,
          "pitch": 0.1753326652298366,
          "rotation": 0,
          "target": "3-data-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-meeting-rooom",
      "name": "Meeting Rooom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4887463145204407,
          "pitch": 0.17174074051449395,
          "rotation": 0,
          "target": "2-monitoring-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-monitoring-room",
      "name": "Monitoring Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5216427963456116,
          "pitch": 0.18630139185349925,
          "rotation": 0,
          "target": "1-meeting-rooom"
        },
        {
          "yaw": -1.6263577088346821,
          "pitch": 0.45744330385393184,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5167841087137344,
          "pitch": 0.012626654982884844,
          "title": "Monitoring",
          "text": "\"Monitoring is a systematic and continuous process of collecting, analyzing, and using information to track the performance of a system, project, or process to ensure it meets desired standards or objectives.\""
        }
      ]
    },
    {
      "id": "3-data-center",
      "name": "Data Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5906258272738683,
          "pitch": 0.05160127130927883,
          "rotation": 0,
          "target": "4-containment"
        },
        {
          "yaw": 0.08160175607395459,
          "pitch": 0.5154018982276085,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-containment",
      "name": "Containment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5451627946909836,
          "pitch": 0.2060368621043125,
          "rotation": 0,
          "target": "3-data-center"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
