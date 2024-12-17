class WordDisplay { //스테이지 2 랜덤 단어 제시를 위한 클래스
  constructor() {
    this.words = [" 계엄령", "하입보이", "근육맨", "삭발", "번지점프", "신도림역", "타노스", "하츄핑", "주 예수", "파괴", "도발", "복수", "채찍질"];
    this.fakeWords = ["심청이", "첫사랑", "설렘", "솜사탕", "댕댕이", "아기고양이", "하품", "궁디팡팡", "소원", "고백", "감사"];
    this.allWords = [...this.words, ...this.fakeWords];
    this.wordPositions = []; //고정된 좌표
    this.wordColors = []; //고정된 색상
    this.wordSizes = []; // 고정된 글씨 크기
    this.wordVelocities = [];
    this.capturedWords = [];
    this.fakeMessageStartFrame = null;
    this.fakeRandomMessage = undefined; //페이크 잡았을 때 나타나는 문구
    this.fakeCatchCount = 0; //페이크 잡은 횟수
  }

  initializeWords() {
    this.wordPositions = this.allWords.map(() => ({ //각 단어 좌표 지정
      x: random(0, width),
      y: random(0, height),
    }));

    this.wordColors = this.allWords.map(() => ({ //각 단어 색 지정
      r: 255,
      g: int(random(0, 80)),
      b: int(random(0, 80)),
    }));

    this.wordSizes = this.allWords.map(() => random(40, 100)); //각 단어 크기 지정

    const realVelocities = this.words.map(() => { //진짜 단어 속도
      let x, y;
      do {
        x = random(-8, 8);
        y = random(-8, 8);
      } while (abs(x) < 4 || abs(y) < 4); //최소 속도 설정
      return { x, y };
    });

    const fakeVelocities = this.words.map(() => { //페이크 단어 속도
      let x, y;
      do {
        x = random(-5, 5);
        y = random(-5, 5);
      } while (abs(x) < 3 || abs(y) < 3); //최소 속도 설정
      return { x, y };
    });

    this.wordVelocities = [...realVelocities, ...fakeVelocities]; //병합
  }

  updateWordPositions() {
    for (let i = 0; i < this.wordPositions.length; i++) {
      const pos = this.wordPositions[i];
      const vel = this.wordVelocities[i];

      //위치 업데이트
      pos.x += vel.x;
      pos.y += vel.y;

      //화면 경계에서 반사
      if (pos.x < - 100 || pos.x > width + 100) vel.x *= -1;
      if (pos.y < - 100 || pos.y > height + 100) vel.y *= -1;
    }
  }

  displayWords() {
    for (let i = 0; i < this.allWords.length; i++) {
      if (this.capturedWords.includes(this.words[i])) continue; //이미 잡힌 단어는 제외

      const word = this.allWords[i];
      const pos = this.wordPositions[i];
      const color = this.wordColors[i];
      const size = this.wordSizes[i];

      textSize(size);
      fill(color.r, color.g, color.b);
      textAlign(CENTER, CENTER);
      text(word, pos.x, pos.y);
    }
  }

  checkMouseCollision(mx, my) { // 단어 잡았는지 확인
    for (let i = 0; i < this.allWords.length; i++) {
      if (this.capturedWords.includes(this.words[i])) continue; // 이미 잡힌 단어는 제외
  
      const word = this.allWords[i];
      const pos = this.wordPositions[i];
      const size = this.wordSizes[i];
  
      const wordWidth = textWidth(word) * (size / 40); // 텍스트 폭(글씨 크기 보정)
      const wordHeight = size; // 텍스트 높이
  
      if ( // 마우스가 단어 범위 내에 있는지 확인
        mx > pos.x - wordWidth / 2 && 
        mx < pos.x + wordWidth / 2 && 
        my > pos.y - wordHeight / 2 &&
        my < pos.y + wordHeight / 2 
      ) {
        if (this.fakeWords.includes(word)) { // 페이크 단어 클릭
          this.fakeMessageStartFrame = frameCount; //타이머 재설정
          this.fakeCatchCount++
          console.log(this.fakeCatchCount);
        } else if (!this.capturedWords.includes(word)) { // 진짜 단어 클릭
          this.capturedWords.push(word); //
        }
        break; // 한 번 클릭에 한 단어만 처리
      }
    }
  }
  

  displayCapturedWords(x, y, s, c) { //잡은 단어 표시
    let word1 = this.capturedWords[0] !== undefined ? this.capturedWords[0] : "______"; //안 잡히면 빈칸
    let word2 = this.capturedWords[1] !== undefined ? this.capturedWords[1] : "______";
    let word3 = this.capturedWords[2] !== undefined ? this.capturedWords[2] : "______";

    const getParticle = (word, type) => {
      let lastChar = word[word.length - 1]; //단어의 마지막 글자
      let code = lastChar.charCodeAt(0); //유니코드 값
      let isHangul = code >= 0xac00 && code <= 0xd7a3; //한글 범위 확인
      if (!isHangul) return type === "subject" ? "는 " : "를 "; //한글이 아닌 빈칸일 때(기본값)

      let finalConsonant = (code - 0xac00) % 28; //받침 유무 확인
      if (finalConsonant === 0) {
        return type === "subject" ? "는 " : "를 "; //받침 없는 경우
      } else {
        return type === "subject" ? "은 " : "을 "; //받침 있는 경우
      }
    };

    this.particle1 = getParticle(word1, "subject"); //주어
    this.particle2 = getParticle(word2, "object"); //목적어

    fill(c);
    textSize(s);
    text(word1 + this.particle1 + word2 + this.particle2 + word3 + "할까?", x, y);
  }

  displayFakeMessage() {//페이크 단어 잡은 경우
    if (this.fakeMessageStartFrame !== null &&
      frameCount - this.fakeMessageStartFrame < 70) { // 페이크 메시지 3초 표시
        if (this.fakeRandomMessage === undefined) {//페이크 메시지가 아직 설정되지 않았다면
          let fakeRandomCount = int(random(0, 3));
          if (fakeRandomCount === 0) {
              this.fakeRandomMessage = "조신한";
          } else if (fakeRandomCount === 1) {
              this.fakeRandomMessage = "조잡한";
          } else if (fakeRandomCount === 2) {
              this.fakeRandomMessage = "저급한";
          }
        }
      fill(10, 10, 10, 220);
      rectMode(CENTER);
      rect(width / 2, height / 2, 800, 600);
      rectMode(CORNER);
      fill(255, 0, 0);
      textSize(60);
      text("이딴 " + this.fakeRandomMessage + " 단어로\n무슨 가사를 써!!", width / 2, height / 2);
    }

    if (frameCount - this.fakeMessageStartFrame == 70){
      this.fakeRandomMessage = undefined;
    }
  }

  isGameOver() { //게임 끝났는지 확인
    return this.capturedWords.length >= 3;
  }

  getProbability(){
    if (this.isGameOver()){
      //console.log(this.fakeCatchCount);
      return this.fakeCatchCount;
    }
  }
}
