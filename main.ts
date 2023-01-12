function getFaceStr (faceID: number) {
    if (faceID == 0) {
        return "A"
    }
    if (faceID == 9) {
        return "T"
    }
    if (faceID == 10) {
        return "J"
    }
    if (faceID == 11) {
        return "Q"
    }
    if (faceID == 12) {
        return "K"
    }
    return convertToText(faceID + 1)
}
function getSuitStr (suitID: number) {
    if (suitID == 0) {
        return "H"
    }
    if (suitID == 1) {
        return "S"
    }
    if (suitID == 2) {
        return "D"
    }
    return "C"
}
function shufflePack () {
    resetPack()
    for (let Loop1 = 0; Loop1 <= packSize - 1; Loop1++) {
        cardChosen = randint(0, originPack.length - 1)
        deckOfCards.insertAt(Loop1, originPack.removeAt(cardChosen))
        activeCardPackPosition = 0
        numberofPackShuffles += 1
    }
}
function getCardSuit (CardID: number) {
    return CardID - getCardFaceID(CardID) / 13
}
function getDealtCard () {
    if (activeCardPackPosition >= 312) {
        shufflePack()
    }
    return deckOfCards[activeCardPackPosition]
}
function resetPack () {
    originPack = [packSize]
    for (let Loop1 = 0; Loop1 <= packSize - 1; Loop1++) {
        originPack[Loop1] = Loop1
    }
}
function startNewHand () {
    handsPlayed += 1
    playerHandSize = 0
    for (let index = 0; index <= 1; index++) {
        playerHand[index] = getDealtCard()
        activeCardPackPosition += 1
        playerHandSize += 1
    }
}
function getCardFaceID (cardID: number) {
    return cardID % 13
}
function getCardStr (cardID: number) {
    return "" + getFaceStr(getCardFaceID(cardID)) + getSuitStr(getCardSuit(cardID))
}
let playerHandSize = 0
let activeCardPackPosition = 0
let originPack: number[] = []
let cardChosen = 0
let playerHand: number[] = []
let deckOfCards: number[] = []
let packSize = 0
let handsPlayed = 0
let handsWon = 0
let numberofPackShuffles = 0
let handMaxSize = 5
packSize = 312
deckOfCards = [packSize]
playerHand = [handMaxSize]
shufflePack()
