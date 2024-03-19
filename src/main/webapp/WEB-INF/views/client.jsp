<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">

    <link rel="icon" href="${pageContext.request.contextPath}/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/reset.css" type="text/css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" type="text/css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rum+Raisin&display=swap" rel="stylesheet">

    <title>Java Slot Machine</title>
</head>
<body>
    <div class="container">
        <div class="slots">
            <div class="reels">
                <div class="reel">
                    <div class="reel-left-indicator"></div>
                    <div class="reel-symbols">
                        <div class="symbol">&#x1F347;</div>
                        <div class="symbol">&#x1F349;</div>
                        <div class="symbol">&#x1F34B;</div>
                        <div class="symbol">&#x1F34C;</div>
                        <div class="symbol">&#x1F352;</div>
                        <div class="symbol">&#x1F34E;</div>
                        <div class="symbol">&#x1F34A;</div>
                        <div class="symbol">&#x1F48E;</div>
                    </div>
                </div>
                <div class="reel">
                    <div class="reel-symbols">
                        <div class="symbol">&#x1F347;</div>
                        <div class="symbol">&#x1F349;</div>
                        <div class="symbol">&#x1F34B;</div>
                        <div class="symbol">&#x1F34C;</div>
                        <div class="symbol">&#x1F352;</div>
                        <div class="symbol">&#x1F34E;</div>
                        <div class="symbol">&#x1F34A;</div>
                        <div class="symbol">&#x1F48E;</div>
                    </div>
                </div>
                <div class="reel">
                    <div class="reel-right-indicator"></div>
                    <div class="reel-symbols">
                        <div class="symbol">&#x1F347;</div>
                        <div class="symbol">&#x1F349;</div>
                        <div class="symbol">&#x1F34B;</div>
                        <div class="symbol">&#x1F34C;</div>
                        <div class="symbol">&#x1F352;</div>
                        <div class="symbol">&#x1F34E;</div>
                        <div class="symbol">&#x1F34A;</div>
                        <div class="symbol">&#x1F48E;</div>
                    </div>
                </div>
            </div>
            <div class="actions">
                <button class="spin-button" onclick="spin()">
                    SPIN
                </button>
                <div class="bets">
                    <div class="bet">
                        <div class="slot-machine-bet-value">
                            1
                        </div>
                        <button class="slot-machine-bet-button"></button>
                    </div>
                    <div class="bet">
                        <div class="slot-machine-bet-value">
                            5
                        </div>
                        <button class="slot-machine-bet-button"></button>
                    </div>
                    <div class="bet">
                        <div class="slot-machine-bet-value">
                            10
                        </div>
                        <button class="slot-machine-bet-button"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="${pageContext.request.contextPath}/js/script.js"></script>
    <script src="${pageContext.request.contextPath}/js/socket.js"></script>
</body>
</html>
