package br.dbizzotto.sockets;

import br.dbizzotto.enums.Symbol;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint("/server")
public class ServerSocket {

    @OnOpen
    public void onOpen(Session session) {
        System.out.println("WebSocket opened: " + session.getId());
    }

    @OnMessage
    public void onMessage(String message, Session session) {
        System.out.println("Message received: " + message);
        try {
            Symbol symbol;

            Double random = Math.random() * 100;

            if (random <= 51){
                symbol = Symbol.NONE;
            } else if (random <= 66){
                symbol = Symbol.PHP;
            } else if (random <= 74){
                symbol = Symbol.C;
            } else if (random <= 81){
                symbol = Symbol.CPLUSPLUS;
            } else if (random <= 87){
                symbol = Symbol.CSHARP;
            } else if (random <= 92){
                symbol = Symbol.JAVASCRIPT;
            } else if (random <= 96){
                symbol = Symbol.TYPESCRIPT;
            } else if (random <= 99){
                symbol = Symbol.PYTHON;
            } else {
                symbol = Symbol.JAVA;
            }

            session.getBasicRemote().sendText(symbol.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
