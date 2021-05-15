'use strict'


function pieceOnClick(it) {
    console.log(it);
}

(function () {
    const pieceOnClick = function (it) {
        console.log(it);
        it.style.backgroundColor = "rgb(100,100,100)"
    }
    function start() {

        const start_col = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        const start_row = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8];

        const class_name = ["black-rook", "black-knight", "black-bishop", "black-queen", "black-king", "black-bishop", "black-knight", "black-rook",
            "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn", "black-pawn",
            "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn", "white-pawn",
            "white-rook", "white-knight", "white-bishop", "white-queen", "white-king", "white-bishop", "white-knight", "white-rook"];

        for (let i = 0; i < 32; i++) {
            let p = document.createElement('PIECE');
            p.addEventListener('click', () => {
                pieceOnClick(p);
            })
            p.className = class_name[i];
            p.style.gridColumn = start_col[i];
            p.style.gridRow = start_row[i];
            document.querySelector('.layout-chessboard').appendChild(p);
        }
    }
    start();


})()




