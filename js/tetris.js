// canvas界面
var createCanvas =function (rows, cols, cellWidth,cellHeight) {
    tetris_canvas=document.createElement("canvas");
    // 设置canvas宽高
    tetris_canvas.width=cols*cellWidth;
    tetris_canvas.cellHeight=rows*cellHeight;
    tetris_canvas.style.border="1px solid black";
    // 绘图
    tetris_ctx=tetris_canvas.getContext('2d');
    tetris_ctx.beginPath();
    // 横向
    for(var i=1;i<TETRIS_ROWS;i++){
        tetris_ctx.moveTo(0,i*CELL_SIZE);
        tetris_ctx.lineTo(TETRIS_CS)
    }
}
