import {spinReels} from "./script.js";

const webSocket = new WebSocket("ws://localhost:8080/java_slot_machine_war_exploded/server");

let connected = false;

webSocket.onopen = function(event) {
    connected = true;
};

webSocket.onmessage = function(event) {
    const symbolIndexes = event.data.split(" ")[1].replace("[", "").replace("]", "").split(",");
    const balance = event.data.split(" ")[2];
    spinReels(symbolIndexes, balance);
};

function betRequest (betValue) {
    webSocket.send("bet " + betValue);
}

export {
    connected,
    betRequest,
};