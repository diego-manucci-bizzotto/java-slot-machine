package br.dbizzotto.sockets;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@ServerEndpoint("/server")
public class ServerSocket {

    private Map<String, Long> players = new HashMap<>();
    private Long balance = 100000L;

    @OnOpen
    public void onOpen(Session session) {
        players.put(session.getId(), 100L);
        System.out.println("New connection: " + session.getId());
    }

    @OnClose
    public void onClose(Session session) {
        players.remove(session.getId());
        System.out.println("Connection closed: " + session.getId());
    }

    @OnMessage
    public void onMessage(String message, Session session) {
        String command = message.split(" ")[0];

        try {
            if (command.equals("bet")) {
                processBet(Long.valueOf(message.split(" ")[1]), session);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void processBet(Long betAmount, Session session) throws IOException {
        if (players.get(session.getId()) < betAmount) {
            session.getBasicRemote().sendText("Usuário sem saldo suficiente para apostar");
            return;
        }

        players.put(session.getId(), players.get(session.getId()) - betAmount);

        int firstSymbol = getRandomSymbol();
        int secondSymbol = getRandomSymbol();
        int thirdSymbol = getRandomSymbol();

        if(firstSymbol == secondSymbol && secondSymbol == thirdSymbol) {
            players.put(session.getId(), players.get(session.getId()) + betAmount * 5);
            balance -= betAmount * 5;
        } else if(firstSymbol == secondSymbol || secondSymbol == thirdSymbol || firstSymbol == thirdSymbol) {
            players.put(session.getId(), players.get(session.getId()) + betAmount * 2);
            balance -= betAmount * 2;
        } else {
            balance += betAmount;
        }

        System.out.println("Current balance: " + balance);

        session.getBasicRemote().sendText("bet " + "[" + firstSymbol + "," + secondSymbol + "," + thirdSymbol + "] " + players.get(session.getId()));
    }

    private int getRandomSymbol() {
        return (int) (Math.random() * 7);
    }

}
