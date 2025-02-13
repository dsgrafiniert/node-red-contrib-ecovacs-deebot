module.exports = {
    "Clean": {
        payload: "Clean"
    },
    "Edge": {
        payload: "Edge"
    },
    "Spot": {
        payload: "Spot"
    },
    "SpotArea": {
        payload: "SpotArea",
        arg: "start",
        arg2: {
            type: "string",
            required: true
        }
    },
    "CustomArea": {
        payload: "CustomArea",
        arg: {
            type: "string",
            required: true
        },
        arg2: {
            name: "cleanings",
            type: "number",
            required: false
        }
    },
    "Charge": {
        payload: "Charge"
    },
    "Stop": {
        payload: "Stop"
    },
    "Pause": {
        payload: "Pause"
    },
    "PlaySound": {
        payload: "PlaySound"
    },
    "FindMe": {
        payload: "PlaySound",
        arg: "30"
    },
    "Resume": {
        payload: "Resume"
    },
    "GetCleanState": {
        payload: "GetCleanState"
    },
    "GetChargeState": {
        payload: "GetChargeState"
    },
    "GetBatteryState": {
        payload: "GetBatteryState"
    },
    "GetCleanSpeed": {
        payload: "GetCleanSpeed"
    },
    "GetWaterLevel": {
        payload: "GetWaterLevel"
    },
    "SetWaterLevel": {
        payload: "SetWaterLevel"
    },
    "GetWaterBoxInfo": {
        payload: "GetWaterBoxInfo"
    },
    "GetNetInfo": {
        payload: "GetNetInfo"
    },
    "GetChargerPos": {
        payload: "GetChargerPos"
    },
    "GetCleanSum": {
        payload: "GetCleanSum"
    },
    "Move": {
        payload: "Move",
        arg: {
            type: "string",
            required: true
        }
    },
    "MoveBackward": {
        payload: "MoveBackward"
    },
    "MoveForward": {
        payload: "MoveForward"
    },
    "MoveLeft": {
        payload: "MoveLeft"
    },
    "MoveRight": {
        payload: "MoveRight"
    },
    "MoveTurnAround": {
        payload: "MoveTurnAround"
    },
    "ResetLifeSpan": {
        payload: "ResetLifeSpan"
    },
    "GetLifeSpan": {
        payload: "GetLifeSpan",
        arg: {
            type: "string",
            required: true
        }
    },
    "GetLifeSpan_filter": {
        label: "GetLifeSpan (filter)",
        payload: "GetLifeSpan",
        arg: "filter"
    },
    "GetLifeSpan_main_brush": {
        label: "GetLifeSpan (main brush)",
        payload: "GetLifeSpan",
        arg: "main_brush"
    },
    "GetLifeSpan_side_brush": {
        label: "GetLifeSpan (side brush)",
        payload: "GetLifeSpan",
        arg: "side_brush"
    },
    "GetLogs": {
        payload: "GetLogs",
        arg: {
            type: "string",
            required: false
        }
    },
    "GetCleanLogs": {
        payload: "GetCleanLogs",
        arg: {
            type: "string",
            required: false
        }
    },
    "GetLogApiCleanLogs": {
        payload: "GetLogApiCleanLogs"
    },
}
