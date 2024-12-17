class InputBox{ //스테이지 2 입력창 만들기 위한 클래스
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.input = createInput();
        this.input.position(x, y);
        this.input.size(w, h);
    }

    getValue(){
        return this.input.value();
    }


    displayText(inputText){
        background(220);
        textSize(20);
        fill(0);
        textAlign(LEFT);
        text('저장: ' + inputText, 20, this.y - 500);
    }
}