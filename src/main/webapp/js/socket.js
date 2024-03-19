const webSocket = new WebSocket("ws://localhost:8080/java_slot_machine_war_exploded/server");

webSocket.onopen = function(event) {
    console.log("WebSocket opened");
    webSocket.send("Hello, WebSocket!");
};

webSocket.onmessage = function(event) {
    console.log("Message received: " + event.data);
};

const spin = () => {
    webSocket.send("spin");
}