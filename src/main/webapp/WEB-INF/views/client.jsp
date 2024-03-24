<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">

    <link rel="icon" href="${pageContext.request.contextPath}/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/reset.css" type="text/css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css" type="text/css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

    <title>Java Slot Machine</title>
</head>
<body>
    <div class="container">
        <div class="slot-machine">
            <div class="slots">
                <div class="reels">
                    <div class="reel">
                        <div class="reel-left-indicator"></div>
                    </div>
                    <div class="reel"></div>
                    <div class="reel">
                        <div class="reel-right-indicator"></div>
                    </div>
                </div>
            </div>
            <div class="lever">
                <div class="lever-handle"></div>
                <div class="lever-base"></div>
            </div>
        </div>
        <div class="credits">
            <div class="credit">
                <span class="credit-label">SALDO:</span>
                <span class="credit-value">R$ 100</span>
            </div>
            <div class="bet">
                <div class="bet-data">
                    <span class="bet-label">APOSTA:</span>
                    <span class="bet-value">R$ 1</span>
                </div>
                <div class="bet-buttons">
                    <div class="bet-up-button"></div>
                    <div class="bet-down-button"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="${pageContext.request.contextPath}/js/script.js" type="module"></script>
    <script src="${pageContext.request.contextPath}/js/socket.js" type="module"></script>
</body>
</html>
