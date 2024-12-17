let userLife = 5; //목숨
let drawLivesState = false; //목숨 숨길 수 있음
let imageName = ""; //qr이미지 파일 이름

let Font1; //'둥근모꼴' 폰트
let Font2; //'한수원 한울림체체' 폰트
let localFrameCount = 0; //몇초인지 세기 위한 변수
let clickSound; // 클릭 소리 변수

let openingBgm, walkingBgm, warningBgm, truckCrashBgm, invitationBgm, noelBgm, noelMadBgm, outro1Bgm, outro2Bgm, truckSuspenseBgm;
let awareBgm, fillBlankBgm, breakingBgm, noExplainBgm, uservsnoelBgm, stage1InfoBgm, stage1PlayBgm, stage2InfoBgm, stage2PlayBgm, stage3InfoBgm;
let stage2ExplainBgm, stage2ScoreBgm, backToRealBgm, stage3FailBgm, hyuksooBgm, skeletonDeadBgm;
let countdownBgm;
let bgm22;
let currentBgm;
let endingVideo;
let nextImg;

//타자기 효과
let currentPage = 0; // 현재 페이지
let typingSpeed = 5;
let textToType0_5 = "";
let typedText0_5 = "";
let charIndex0_5 = 0;
let isReady0_5 = false;
let textToType0_6 = "";
let typedText0_6 = "";
let charIndex0_6 = 0;
let isReady0_6 = false;
let textToType0_7_1 = "";
let typedText0_7_1 = "";
let charIndex0_7_1 = 0;
let isReady0_7_1 = false;
let textToType0_7_2 = "";
let typedText0_7_2 = "";
let charIndex0_7_2 = 0;
let isReady0_7_2 = false;
let textToType0_7_3 = "";
let typedText0_7_3 = "";
let charIndex0_7_3 = 0;
let isReady0_7_3 = false;
let textToType0_7_4 = "";
let typedText0_7_4 = "";
let charIndex0_7_4 = 0;
let isReady0_7_4 = false;
let textToType0_8 = "";
let typedText0_8 = "";
let charIndex0_8 = 0;
let isReady0_8 = false;
let textToType0_9_1 = "";
let typedText0_9_1 = "";
let charIndex0_9_1 = 0;
let isReady0_9_1 = false;
let textToType0_9_2 = "";
let typedText0_9_2 = "";
let charIndex0_9_2 = 0;
let isReady0_9_2 = false;
let textToType0_9_3 = "";
let typedText0_9_3 = "";
let charIndex0_9_3 = 0;
let isReady0_9_3 = false;
let textToType0_13 = "";
let typedText0_13 = "";
let charIndex0_13 = 0;
let isReady0_13 = false;
let textToType0_16 = "";
let typedText0_16 = "";
let charIndex0_16 = 0;
let isReady0_16 = false;
let textToType0_18 = "";
let typedText0_18 = "";
let charIndex0_18 = 0;
let isReady0_18 = false;
let textToType0_20 = "";
let typedText0_20 = "";
let charIndex0_20 = 0;
let isReady0_20 = false;
let textToType0_21 = "";
let typedText0_21 = "";
let charIndex0_21 = 0;
let isReady0_21 = false;
let textToType0_22 = "";
let typedText0_22 = "";
let charIndex0_22 = 0;
let isReady0_22 = false;
let textToType0_23 = "";
let typedText0_23 = "";
let charIndex0_23 = 0;
let isReady0_23 = false;
let textToType0_24 = "";
let typedText0_24 = "";
let charIndex0_24 = 0;
let isReady0_24 = false;
let textToType0_25 = "";
let typedText0_25 = "";
let charIndex0_25 = 0;
let isReady0_25 = false;
let textToType0_26 = "";
let typedText0_26 = "";
let charIndex0_26 = 0;
let isReady0_26 = false;

let textToType1_1_1 = "";
let typedText1_1_1 = ""; // 초기화
let charIndex1_1_1 = 0;
let isReady1_1_1 = false;
let textToType1_1_2 = "";
let typedText1_1_2 = ""; // 초기화
let charIndex1_1_2 = 0;
let isReady1_1_2 = false;
let textToType1_1_3 = "";
let typedText1_1_3 = ""; // 초기화
let charIndex1_1_3 = 0;
let isReady1_1_3 = false;
let textToType1_2_1 = "";
let typedText1_2_1 = ""; // 초기화
let charIndex1_2_1 = 0;
let isReady1_2_1 = false;
let textToType1_2_2 = "";
let typedText1_2_2 = ""; // 초기화
let charIndex1_2_2 = 0;
let isReady1_2_2 = false;
let textToType1_2_3 = "";
let typedText1_2_3 = ""; // 초기화
let charIndex1_2_3 = 0;
let isReady1_2_3 = false;
let textToType1_3_1 = "";
let typedText1_3_1 = ""; // 초기화
let charIndex1_3_1 = 0;
let isReady1_3_1 = false;
let textToType1_3_2 = "";
let typedText1_3_2 = ""; // 초기화
let charIndex1_3_2 = 0;
let isReady1_3_2 = false;
let textToType1_3_3 = "";
let typedText1_3_3 = ""; // 초기화
let charIndex1_3_3 = 0;
let isReady1_3_3 = false;

let textToType1_s_1 = "";
let typedText1_s_1 = ""; // 초기화
let charIndex1_s_1 = 0;
let isReady1_s_1 = false;
let textToType1_s_2 = "";
let typedText1_s_2 = ""; // 초기화
let charIndex1_s_2 = 0;
let isReady1_s_2 = false;

let textToTypeS2S3_1 = "";
let typedTextS2S3_1 = ""; // 초기화
let charIndexS2S3_1 = 0;
let isReadyS2S3_1 = false;
let textToTypeS2S3_2 = "";
let typedTextS2S3_2 = ""; // 초기화
let charIndexS2S3_2 = 0;
let isReadyS2S3_2 = false;

let textToTypeS3_2 = "";
let typedTextS3_2 = ""; // 초기화
let charIndexS3_2 = 0;
let isReadyS3_2 = false;

let textToTypes3s1 = "";
let typedTexts3s1 = ""; // 초기화
let charIndexs3s1 = 0;
let isReadys3s1 = false;
let textToTypes3s2 = "";
let typedTexts3s2 = ""; // 초기화
let charIndexs3s2 = 0;
let isReadys3s2 = false;

let textToTypes3e = "";
let typedTexts3e = ""; // 초기화
let charIndexs3e = 0;
let isReadys3e = false;

let textToTypeR3_1 = "";
let typedTextR3_1 = ""; // 초기화
let charIndexR3_1 = 0;
let isReadyR3_1 = false;
let textToTypeR3_2 = "";
let typedTextR3_2 = ""; // 초기화
let charIndexR3_2 = 0;
let isReadyR3_2 = false;
let textToTypeR3_3 = "";
let typedTextR3_3 = ""; // 초기화
let charIndexR3_3 = 0;
let isReadyR3_3 = false;
let textToTypeR3_4 = "";
let typedTextR3_4 = ""; // 초기화
let charIndexR3_4 = 0;
let isReadyR3_4 = false;

let textToTypes4f1 = "";
let typedTexts4f1 = ""; // 초기화
let charIndexs4f1 = 0;
let isReadys4f1 = false;
let textToTypes4f2 = "";
let typedTexts4f2 = ""; // 초기화
let charIndexs4f2 = 0;
let isReadys4f2 = false;

let textToTypeoutro_1 = "";
let typedTextoutro_1 = ""; // 초기화
let charIndexoutro_1 = 0;
let isReadyoutro_1 = false;
let textToTypeoutro_3 = "";
let typedTextoutro_3 = ""; // 초기화
let charIndexoutro_3 = 0;
let isReadyoutro_3 = false;
let textToTypeoutro_5 = "";
let typedTextoutro_5 = ""; // 초기화
let charIndexoutro_5 = 0;
let isReadyoutro_5 = false;
let textToTypeoutro_6 = "";
let typedTextoutro_6 = ""; // 초기화
let charIndexoutro_6 = 0;
let isReadyoutro_6 = false;
let textToTypeoutro_7 = "";
let typedTextoutro_7 = ""; // 초기화
let charIndexoutro_7 = 0;
let isReadyoutro_7 = false;
let textToTypeoutro_8 = "";
let typedTextoutro_8 = ""; // 초기화
let charIndexoutro_8 = 0;
let isReadyoutro_8 = false;
let textToTypeoutro_9 = "";
let typedTextoutro_9 = ""; // 초기화
let charIndexoutro_9 = 0;
let isReadyoutro_9 = false;
let textToTypeoutro_10 = "";
let typedTextoutro_10 = ""; // 초기화
let charIndexoutro_10 = 0;
let isReadyoutro_10 = false;

let text4_1;
let text4_2;
let text4_3;

let mainLogo; //프로젝트 로고 (뉴버전)
let mainLogo2_guitar; //기타 들어간 프로젝트 로고
let startLogo;
let infoImg; //설명
let startImg; //시작버튼
let noel1Img; //기본노엘
let noel2Img; //폭소
let noel3Img; //뻐큐
let noel4Img; //폭주
let noel6Img;
let noelCloseImg; //확대용
let noelRealImg; //찐노엘
let back3Img;
let back4Img;
let chat1Img; //유저 대사창
let chat2Img; //노엘 대사창
let userImg;
let goButtonImg;
let gridImg; //그리드 배경
let back0Img; //오프닝
let back1Img;
let userLifeImg;
let introtext2Img;
let introtext1Img;
let gamePlayButton;
let tryButton;

let pagezero = 0; //오프닝 시퀀스
let angle0 = 0;
let scaleFactor3 = 1; // sticker3의 크기 스케일
let scaleFactor10 = 1; // sticker10의 크기 스케일
let angle3 = 0; // sticker3의 회전 각도
let angle10 = 0; // sticker10의 회전 각도
let scaleIncrement = 0.01; //스티커 크기 증가 속도
let videoPlayed0_10 = false;
let alpha0_17 = 0;
let stageBack1Img;
let noelSpitImg;
let noelShadowImg;
let rockstarImg1;
let rockstarImg2;
let rockstarImg3;
let rockstarImg4;
let truckLightVideo;
let noelSplit1Img;
let noelSplit2Img;
let noelSplit3Img;
let gameExplainImg;

let startDescription = false; //게임 시작할 때 게임설명
let truckScale = 0.8; //트럭 이미지 초기비율
let truckScaleSpeed = 0.003; //트럭 크기 변화 속도
let truckAccel = 0.001; //트럭 가속도
let startTime0 = 0; //트럭 시작시간
let offsetX = 0; //트럭 가로 이동 값
let offsetBackX = 0; //배경 가로 이동 값
let moveSpeed = 0.9; //이동 속도
let message0 = "피. 하. 지. 않. 으. 면." //한글자씩 나타나는 효과
let message0_1 = "이. 세. 계. 로. 간. 다."
let message0_2 = "하          ·          지          ·          만"
let displayedText0 = "";
let displayedText0_1 = "";
let displayedText0_2 = "";
let charIndex0 = 0;
let charIndex0_1 = 0;
let charIndex0_2 = 0;
let intervalFrames = 5; //글자 나타나는 시간
let intervalFrames23 = 1;
let redValue0 = 0;
let textStage0_5 = 0;
let textStage0_18 = 0;
let textStage0_23 = 0;
let textStage0_26 = 0;
let shards = []; // 조각 데이터를 저장할 배열
let isBreaking0 = false; // 화면이 깨지는 중인지 확인
let breakStartFrame = 0; // 깨지는 시작 시간
const breakDurationFrames = 60; // 깨지는 애니메이션 지속 시간 (fps)
let guitarImg; //기타
let truckImg; //트럭
let envelopeImg; //편지
let invitationImg; //초대장
let christmasImg;
let sticker2;
let sticker3;
let sticker6;
let sticker10;
let sticker11;
let sticker12;
let sticker13;
let sticker14;
let userOpenEyeBgm;

let pageone; //첫 번째 스테이지
let countdown = 3; //카운트다운
let questionAnswered1_1 = false;
let questionResult1_1 = "";
let questionAnswered1_2 = false;
let questionResult1_2 = "";
let questionAnswered1_3 = false;
let questionResult1_3 = "";
let question1_1 = "Q. 다음 중, 락스타의 상징에 해당하는 것은?";
let options1_1 = ["1. 뛰어난 패션감각", "2. 낭만적인 인생 서사", "3. 일당백 무대 장악력"];
let question1_2 = "Q. 다음 중, '락'이 아닌 것은?";
let options1_2 = ["1. 대한민국주가폭락", "2. 손발꼼지락꼼지락", "3. 엄마가싸주신도시락"];
let question1_3 = "Q. 다음 중 가장 락스타다운 고백은?";
let options1_3 = ["1. 귀엽다나랑살래요?", "2. 귀엽다키스할래요?", "3. 귀엽다손잡을래요?"];
let correctAnswer1_1 = 1; //정답: 2번
let correctAnswer1_2 = 2; //정답: 3번
let correctAnswer1_3 = 0; //정답: 1번
let rightAnswerImg, wrongAnswerImg;
let countdownInterval; //카운트다운 타이머
let stage1Img;
let optionImg;
let questionImg;
let uservsnoelImg;

let pagetwo; //두 번째 스테이지
let explainGame2Pressed = false; //게임설명 버튼 눌렀는지 확인
let submitButton = { x: 10, y: 730, w: 200, h: 40 };
let storedValues = []; //유저 입력값 저장
let wordDisplay; //랜덤 단어
let game2EndFrame = null;
let isGame2Ended = null;
let game2PlayedCount = 0;
let game2Result = null;
let stage2Score = null; //스테이지 점수
let backgroundAlpha = 0; //스테이지 전환 시 화면효과(투명도)
let backgroundAlpha18 = 0;
let stage2Img; //스테이지 2 로고
let capturedBackup; //잡은 단어 저장
let stageBack2Img;
let retryImg;

let pagethree; //세 번째 스테이지
let rockingNoelAngle = 0;
let isVisible = false; // 이미지가 보이는지 여부
let warningImg; // 경고 이미지
let questionAnswered3 = false;
let questionResult3 = "";
let options3_1 = ["1. 마초라면 고민하지 않지! 진행시켜!", "2. 아니제발사람의견좀물어보고으아아아ㅏ악!시..시작하는 거야? 벌써?"];
let options3 = ["1. 노매력 해골", "2. 젠지한 해골", "3. 무근본 해골"];
let correctAnswer3 = 2; //정답: 3번
let back2Img;
let fadeAlpha3 = 255;  // 초기 투명도 (255는 완전 불투명, 0은 완전 투명)
let fadeSpeed3 = 2;  // 투명도가 줄어드는 속도
let stage3Img;

let eventText = "!이벤트발생!";
let blinkInterval = 10; //"!이벤트발생!" 깜빡임 간격
let blinkDuration = 5; //깜빡임을 반복할 횟수
let blinkTimer = 0; //깜빡임 타이머
let blinkCycle = 0; //깜빡임 사이클
let explanationText = "아무리 앞선 스테이지들을 패스했다 해도... 메탈을 모른다면 진정한 락스타라고 할 수 없어!\n그런 의미에서 인셀유저 너에게!! 나 이세계의 노엘 갤러거가 메탈에 대해 물어보겠다.\n서얼마 메탈사운드는 깡깡거리는 게 귀 아프다고 싫어하면서\nRock하는 애들처럼 살고 싶다고 꽥꽥댄 건 아니겠지??";
let skeleton1Img;
let skeleton2Img;
let skeleton3Img;
let skeletonFailImg;
let skeletonSuccessImg;
let concertImg;
let powerMetalSound, deathMetalSound, blackMetalSound; //사운드 변수
let isPlayingPower = false; //파워메탈 재생 상태
let isPlayingDeath = false; //데스메탈 재생 상태
let isPlayingBlack = false; //블랙메탈 재생 상태
let stageBack3Img;

let pagefour;
let startFrame4 = 0; //스테이지 4 활성화 시점
let cams = []; // 4개의 캠 화면을 저장
let frozenFrames = []; // 정지된 캠 화면을 저장
let currentFreezeIndex = 0; // 현재 정지할 캠의 인덱스
let countdownStage4 = 5;
let countdownIntervalStage4;
let isCountdownRunningStage4 = false;
let photoWidth = 520;
let photoHeight = 390;
let screenshotTaken = false;
let supabase;
let qrcode;
let qrVisible = false;
const bucketName = 'test';
let composedLyric;
let hyuksoo1Img; //권혁수
let hyuksoo2Img;
let fourCut_rockstar;
let fourCut_muggle;
let rockstarBubbleImg;
let muggleBubbleImg;
let replayButtonImg;
let fuckposeImg;

let pagefive;
let noelSideImg;
let leaves = [];  // 낙엽 객체들을 저장할 배열
let leaf1Img;
let leaf2Img;
let leaf3Img;
let leaf4Img;
let noelCartoonImg;
let micImg;
let stageImg;
let memoryImg;
let fadeAlpha5 = 0;  // 초기 투명도 (255는 완전 불투명, 0은 완전 투명)
let fadeSpeed5 = 1;
let animationFinished = false;
let fadeAlpha5_2 = 0;  // 초기 투명도 (255는 완전 불투명, 0은 완전 투명)
let fadeSpeed5_2 = 0.7;

let micCartoonImg;
let rockstarCartoonImg;
let redAlpha = 0;
let ending1Img;
let ending2Img;
let blackAlpha = 0;

// 글로벌 변수_kim
let truckX2 = -600; // 트럭 초기 X 위치
let truckY2; // 트럭 Y 위치
let truckWidth2 = 900; // 트럭 너비
let truckHeight2 = 1000; // 트럭 높이
let truckSpeed2 = 10; // 트럭 속도

let userX; // 캐릭터 X 위치
let userY; // 캐릭터 Y 위치
let userWidth = 300; // 캐릭터 너비
let userHeight = 500; // 캐릭터 높이
let isHit = false; // 충돌 여부

//애셋 불러오기
function preload() {
  openingBgm = loadSound('assets/opening.mp3'); //사운드
  walkingBgm = loadSound('assets/walking_sound.mp3');
  warningBgm = loadSound('assets/warning.mp3');
  truckCrashBgm = loadSound('assets/truck_crash.mp3');
  invitationBgm = loadSound('assets/invitation.mp3');
  noelBgm = loadSound('assets/noel_theme.mp3');
  countdownBgm = loadSound('assets/countdown.mp3');

  mainLogo = loadImage('assets/new logo.png'); //프로젝트 로고
  mainLogo2_guitar = loadImage('assets/logo_2.png');
  startLogo = loadImage('assets/game start logo.png');
  guitarImg = loadImage('assets/logo_1.png'); //기타
  truckImg = loadImage('assets/truck.png'); //환생트럭
  infoImg = loadImage('assets/game_info.png'); //설명창
  envelopeImg = loadImage('assets/envelope_2.png') //편지
  invitationImg = loadImage('assets/invitation.png'); //초대장
  back1Img = loadImage('assets/background_1.png');
  back3Img = loadImage('assets/background_3.png'); //배경3
  chat1Img = loadImage('assets/chat_1.png'); //대사
  chat2Img = loadImage('assets/chat_2.png');
  christmasImg = loadImage('assets/christmas.jpg');
  nextImg = loadImage('assets/arrow.png'); //화살표
  userLifeImg = loadImage('assets/heart.png');

  back0Img = loadImage('assets/background_intro.png'); //오프닝 배경
  sticker2 = loadImage('assets/2.png'); //오프닝 스티커
  sticker3 = loadImage('assets/3.png');
  sticker6 = loadImage('assets/6.png');
  sticker10 = loadImage('assets/10.png');
  sticker11 = loadImage('assets/11.png');
  sticker12 = loadImage('assets/12.png');
  sticker13 = loadImage('assets/13.png');
  sticker14 = loadImage('assets/14.png');
  truckSuspenseBgm = loadSound('assets/truck_suspense.mp3');
  truckLightVideo = createVideo("assets/truck_light.mp4");
  noelSplit1Img = loadImage('assets/character_divided_1.png');
  noelSplit2Img = loadImage('assets/character_divided_2.png');
  noelSplit3Img = loadImage('assets/character_divided_3.png');
  noelSpitImg = loadImage('assets/spit.png');
  noelShadowImg = loadImage('assets/shadow_white.png');
  noelCloseImg = loadImage('assets/character_closeup.png');
  rockstarImg1 = loadImage('assets/rockstar_1.png');
  rockstarImg2 = loadImage('assets/rockstar_2.png');
  rockstarImg3 = loadImage('assets/rockstar_3.png');
  rockstarImg4 = loadImage('assets/rockstar_4.png');
  introtext1Img = loadImage('assets/intro_text_1.png');
  introtext2Img = loadImage('assets/intro_text.png');
  gamePlayButton = loadImage('assets/play_button.png');
  tryButton = loadImage('assets/try_button.png');
  uservsnoelBgm = loadSound('assets/uservsnoel.mp3');
  userOpenEyeBgm = loadSound('assets/user_openeye.mp3');
  awareBgm = loadSound('assets/aware.mp3');
  fillBlankBgm = loadSound('assets/fill_blank.mp3');
  breakingBgm = loadSound('assets/glass_breaking.mp3');
  noExplainBgm = loadSound('assets/no_explain.mp3');

  rightAnswerImg = loadImage('assets/rightanswer.jpg'); //스테이지 1
  wrongAnswerImg = loadImage('assets/wronganswer.jpg');
  concertImg = loadImage('assets/concert.jpg');
  userImg = loadImage('assets/user.png');
  stage1Img = loadImage('assets/stage1.png');
  optionImg = loadImage('assets/new option.png');
  questionImg = loadImage('assets/event.png');
  goButtonImg = loadImage('assets/go button.png');
  gridImg = loadImage('assets/background_grid.png');
  stageBack1Img = loadImage('assets/stage1_background.png');
  uservsnoelImg = loadImage('assets/user_vs_noel.png');
  stage1InfoBgm = loadSound('assets/stage1_info.mp3');
  stage1PlayBgm = loadSound('assets/stage1_play.mp3');
  gameExplainImg = loadImage('assets/game_explanation.png');

  startImg = loadImage('assets/start_button.png'); //스테이지 2
  stage2Img = loadImage('assets/stage_2.png');
  noel1Img = loadImage('assets/character_1.png');
  noel2Img = loadImage('assets/character_2.png');
  noel3Img = loadImage('assets/character_3.png');
  noel4Img = loadImage('assets/character_4.png');
  noel6Img = loadImage('assets/character_6.png');
  noelRealImg = loadImage('assets/character_real.jpeg');
  back4Img = loadImage('assets/background_4.png'); //배경4
  lyricInput = loadImage('assets/lyrics_input.png');
  stageBack2Img = loadImage('assets/stage2_background.png');
  retryImg = loadImage('assets/retry_button.png');
  stage2ScoreBgm = loadSound('assets/stage2_score.mp3');
  stage2ExplainBgm = loadSound('assets/stage2_explain.mp3');
  stage2InfoBgm = loadSound('assets/stage2_info.mp3');
  stage2PlayBgm = loadSound('assets/stage2_play.mp3');

  skeleton1Img = loadImage('assets/skull_1.png'); //스테이지 3
  skeleton2Img = loadImage('assets/skull_2.png');
  skeleton3Img = loadImage('assets/skull_3.png');
  skeletonSuccessImg = loadImage('assets/skull_4.png');
  skeletonFailImg = loadImage('assets/skull.png');
  back2Img = loadImage('assets/background_2.png');
  warningImg = loadImage('assets/warning sign.png');
  stage3Img = loadImage('assets/stage3.png');
  stageBack3Img = loadImage('assets/stage3_background.png');
  stage3InfoBgm = loadSound('assets/stage3_info.mp3');
  skeletonDeadBgm = loadSound('assets/skeleton_dead.mp3');
  stage3FailBgm = loadSound('assets/stage3_false.mp3');

  fuckposeImg = loadImage('assets/fucking_pose.png'); //스테이지 4
  hyuksoo1Img = loadImage('assets/npc_sorry.png');
  hyuksoo2Img = loadImage('assets/npc_happy.png');
  fourCut_rockstar = loadImage('assets/rockstar_4cut.png');
  fourCut_muggle = loadImage('assets/normal_4cut.png');
  rockstarBubbleImg = loadImage('assets/rockstar_bubble.png');
  muggleBubbleImg = loadImage('assets/normal_bubble.png');
  replayButtonImg = loadImage('assets/replay_button.png');
  hyuksooBgm = loadSound('assets/hyuksoo.mp3');

  noelSideImg = loadImage('assets/character_side.png'); //스테이지 5
  leaf1Img = loadImage('assets/leaf_1.png');
  leaf2Img = loadImage('assets/leaf_2.png');
  leaf3Img = loadImage('assets/leaf_3.png');
  leaf4Img = loadImage('assets/leaf_4.png');
  noelCartoonImg = loadImage('assets/noelcartoonimage.png');
  micImg = loadImage('assets/mic.png');
  stageImg = loadImage('assets/oasis_stage.png');
  memoryImg = loadImage('assets/memoryimage.png');
  micCartoonImg = loadImage('assets/miccartoonimage.png');
  rockstarCartoonImg = loadImage('assets/rockstarcartoonimage.png');
  ending1Img = loadImage('assets/ending_1.png');
  ending2Img = loadImage('assets/ending_2.png');
  noelMadBgm = loadSound('assets/noel_mad.mp3');


  //음악 불러오기
  powerMetalSound = loadSound('assets/powermetal.mp3');
  deathMetalSound = loadSound('assets/deathmetal.mp3');
  blackMetalSound = loadSound('assets/blackmetal.mp3');
  bgm22 = loadSound('assets/bgm22.mp3');
  endingVideo = createVideo('assets/endingvideo.mp4');
  backToRealBgm = loadSound('assets/back_to_reality.mp3');
  outro1Bgm = loadSound('assets/outro_1.mp3');
  outro2Bgm = loadSound('assets/alone again.mp3');
  clickSound = loadSound('assets/click.mp3');

  //폰트 불러오기
  Font1 = loadFont('assets/DungGeunMo.ttf');
  Font2 = loadFont('assets/hanoolim.ttf');
}

function setup() {
  truckLightVideo.hide(); //비디오는 숨기기
  truckLightVideo.loop();
  frameRate(60); //프레임 속도 고정
  createCanvas(1440, 810); // 화면 비율 고정
  textFont(Font1);

  truckY2 = height / 2 - 50; // 트럭 Y 위치 초기화
  userX = 1000; // 캐릭터 X 위치 초기화
  userY = 300; // 캐릭터 Y 위치 초기화

  endingVideo.loop();  // 비디오 반복 재생 (계속 돌기 시작한다)
  endingVideo.hide();  // 기본 비디오 화면을 숨기고 p5.js 캔버스에만 표시

  back4Img.resize(1440, 810);

  // getUserMedia를 사용하여 오디오 컨텍스트 활성화
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      audioStream = stream;
      console.log("Audio context activated via getUserMedia!");
      clickSound = loadSound('assets/click.mp3');
      playBackgroundMusic(); // 배경음악 재생
    })
    .catch((err) => {
      console.error("Error accessing audio devices:", err);
    });

  wordDisplay = new WordDisplay(); //스테이지 2 랜덤 단어 보여주기
  wordDisplay.initializeWords();

  const SUPABASE_URL = 'https://eoltmcvmzrecfwicwuxh.supabase.co'; // 여기 URL 입력
  const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvbHRtY3ZtenJlY2Z3aWN3dXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMzM0NzIsImV4cCI6MjA0ODgwOTQ3Mn0.M9HvK5IPVa8ls21tZAvQWrRB9sxLIAeUf-Vp-v8TcZ0'; // 여기 API 키 입력
  supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY); // 클라이언트 초기화


  qrcode = createDiv(); //qr코드 생성
  qrcode.id('qrcode');
  qrcode.position(1170, 70);
  qrcode.hide();

  for (let i = 0; i < 4; i++) {
    let cam = createCapture(VIDEO);
    cam.size(photoWidth, photoHeight);
    cam.hide(); // 캠을 숨기고 우리가 직접 그립니다.
    cams.push(cam);
  }
}

function startStage0(pagenum) { //스테이지 0에서 n초 뒤 다음 화면으로 넘어가도록 하는 함수
  pagezero = pagenum;     //스테이지 변경
  localFrameCount = 0;   //프레임 카운트 초기화
}


function draw() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);

  // 각 스테이지 화면 그리기
  if (pagefour === 2) {
    drawStage4_2();
  } else {
    qrcode.hide();
  }

  if (pagezero === 0) {
    drawStage0_Start();
  } else if (pagezero === 1) {
    drawStage0_1();
  } else if (pagezero === 2) {
    drawStage0_2();
  } else if (pagezero === 3) {
    drawStage0_3();
  } else if (pagezero === 4) {
    drawStage0_4();
  } else if (pagezero === 5) {
    drawStage0_5();
  } else if (pagezero === 6) {
    drawStage0_6();
  } else if (pagezero === 7) {
    drawStage0_7();
  } else if (pagezero === 8) {
    drawStage0_8();
  } else if (pagezero === 9) {
    drawStage0_9();
  } else if (pagezero === 10) {
    drawStage0_10();
  } else if (pagezero === 11) { //환생트럭
    drawStage0_11();
  } else if (pagezero === 12) {
    drawStage0_12();
  } else if (pagezero === 12.5) {
    drawCountdown();
    noStroke();
    fill(255);
    textSize(50);
    text("키보드 방향키 ← → 사용!", width - 300, 40);
  }
  else if (pagezero === 13) {
    drawStage0_13();
  } else if (pagezero === 14) {
    drawStage0_14();
  } else if (pagezero === 15) { //초대장
    drawStage0_15();
  } else if (pagezero === 16) {
    drawStage0_16();
  } else if (pagezero === 17) { //로고 재등장
    drawStage0_17();
  } else if (pagezero === 18) {
    drawStage0_18();
  } else if (pagezero === 19) {
    drawStage0_19();
  } else if (pagezero === 20) { //노엘 등장
    drawStage0_20();
  } else if (pagezero === 21) {
    drawStage0_21();
  } else if (pagezero === 22) {
    drawStage0_22();
  } else if (pagezero === 23) {
    drawStage0_23();
  } else if (pagezero === 24) {
    drawStage0_24();
  } else if (isBreaking0) {
    drawBreakingEffect();
  } else if (pagezero === 25) {
    drawStage0_25();
  } else if (pagezero === 26) {
    drawStage0_26();
  } else if (pageone === 1) { //스테이지 1 시작
    drawStage1();
  } else if (pageone === 2) {
    drawCountdown();
  } else if (pageone === 3) {
    drawQuestion1_1();
  } else if (pageone === 4) {
    drawResult1_1();
  } else if (pageone === 5) {
    stage1Success_1();
  } else if (pageone === 6) {
    stage1Success_2();
  } else if (pageone === 7) {
    beforeStage2();
  } else if (pageone === 8) {
    stageFail1_1();
  } else if (pageone === 9) {
    drawQuestion1_2();
  } else if (pageone === 10) {
    drawResult1_2();
  } else if (pageone === 11) {
    stageFail1_2();
  } else if (pageone === 12) {
    drawQuestion1_3();
  } else if (pageone === 13) {
    drawResult1_3();
  } else if (pageone === 14) {
    stageFail1_3();
  } else if (pagetwo === 1) { //스테이지 2 시작
    drawStage2_1();
  } else if (pagetwo === 2) {
    drawStage2_2();
  } else if (pagetwo === 3) {
    drawStage2_3();
  } else if (pagetwo === 4) {
    drawCountdown();
  } else if (pagetwo === 5) {
    drawGame2();
  } else if (pagetwo === 6) {
    stage2Success();
  } else if (pagetwo === 7) {
    stage2Fail();
  } else if (pagetwo === 8) {
    stage2ToStage3_1();
  } else if (pagetwo === 9) {
    stage2ToStage3_2();
  } else if (pagethree === 1) { //스테이지 3 시작
    drawStage3_1();
  } else if (pagethree === 2) {
    drawStage3_2();
  } else if (pagethree === 3) {
    drawStage3_3();
  } else if (pagethree === 4) {
    drawStage3_4();
  } else if (pagethree === 5) {
    drawCountdown();
  } else if (pagethree === 6) {
    drawQuestion3();
  } else if (pagethree === 7) {
    drawResult3();
  } else if (pagethree === 8) {
    stage3Success1();
  } else if (pagethree === 9) {
    stage3Success2();
  } else if (pagethree === 10) {
    stageFail3();
  } else if (pagethree === 11) {
    stage3ToEnding();
  } else if (pagefour === 1) {
    drawStage4_1();
  } else if (pagefour === 2) {
    drawStage4_2();
  } else if (pagefour === 3) {
    stage4Fail_1();
  } else if (pagefour === 4) {
    stage4Fail_2();
  } else if (pagefive === 1) {
    drawOutro_1();
  } else if (pagefive === 2) {
    drawOutro_2();
  } else if (pagefive === 3) {
    drawOutro_3();
  } else if (pagefive === 4) {
    drawOutro_4();
  } else if (pagefive === 5) {
    drawOutro_5();
  } else if (pagefive === 6) {
    drawOutro_6();
  } else if (pagefive === 7) {
    drawOutro_7();
  } else if (pagefive === 8) {
    drawOutro_8();
  } else if (pagefive === 9) {
    drawOutro_9();
  } else if (pagefive === 10) {
    drawOutro_10();
  } else if (pagefive === 11) {
    drawOutro_11();
  } else if (pagefive === 12) {
    drawOutro_12();
  } else if (pagefive === 13) {
    drawOutro_13();
  } else if (pagefive === 14) {
    drawOutro_14();
  } else if (pagefive === 15) {
    drawOutro_15();
  } else if (pagefive === 16) {
    drawOutro_16();
  } else if (pagefive === 17) {
    drawOutro_17();
  } else if (pagefive === 18) {
    drawOutro_18();
  } else if (pagefive === 19) {
    drawOutro_19();
  }

  if (drawLivesState == true) { //목숨 표시하기
    drawLives();
  }
}

function playBackgroundMusic(bgm) { //배경음악 재생 함수
  if (currentBgm && currentBgm.isPlaying()) { //이전 음악 재생
    currentBgm.stop();
  }

  currentBgm = bgm; //새 음악 재생
  currentBgm.loop(); //반복 설정
  currentBgm.setVolume(0.5); //볼륨 설정
  console.log("Playing new background music!");
}

function drawLives() {
  let lifeWidth = userLifeImg.width / 12; //가로폭
  let lifeSpacing = 80;
  let startX = width - (userLife * (lifeSpacing)); //우측 정렬
  let y = 50; //화면 상단 고정

  for (let i = 0; i < userLife; i++) {
    let x = startX + i * (lifeSpacing);
    imageMode(CENTER);
    image(userLifeImg, x, y, lifeWidth, userLifeImg.height / 12);
  }
}

function drawStage0_Start() { //맨 처음 시작화면
  background(0);
  textSize(32);
  imageMode(CENTER);
  image(tryButton, width / 2, height * 0.4, 400, 200);
  image(gameExplainImg, width / 2, height * 0.7, 400, 200);

  if (startDescription == true) {
    fill(225);
    rectMode(CENTER);
    rect(width / 2, height / 2, 800, 300);
    textSize(24);
    fill(0);
    text('1. 색이 있는 단어에는 마우스 커서를 가져다대자!\n이해력 딸리는 널 위한 단어설명이 있다\n\n2. 게임설명을 부디! 열심히! 잘! 읽어라\n늘 너의 머리를 의심해라!!!~!@#@$#!', width / 2, height / 2);
  }
}

function drawStage0_1() { //오프닝
  let s = 30; //스티커 나타나는 간격
  imageMode(CORNER);
  image(back0Img, 0, 0, width, height);
  imageMode(CENTER);
  if (localFrameCount > s) {
    image(sticker2, 30, 340, 400, 400);
  } if (localFrameCount > s * 2) {
    image(sticker13, 840, 180, 340, 340);
  } if (localFrameCount > s * 3) {
    image(sticker12, 940, 240, 180, 180);
  } if (localFrameCount > s * 4) {
    push();
    translate(1300, 640);
    rotate(-PI / 10)
    image(sticker10, 0, 0, 440, 440);
    pop();
  } if (localFrameCount > s * 5) {
    push();
    translate(600, 160);
    rotate(PI / 12);
    image(sticker6, 0, 0, 320, 320);
    pop();
  } if (localFrameCount > s * 6) {
    image(sticker3, 300, 680, 800, 800);
  } if (localFrameCount > s * 7) {
    image(sticker14, 380, 340, 300, 300);
  } if (localFrameCount > s * 8) {
    image(sticker11, 10, 640, 300, 300);
  } if (localFrameCount > s * 9) {
    image(mainLogo, width / 2, height / 2, mainLogo.width - 240, mainLogo.height - 240);
    image(gamePlayButton, width / 2, 580, gamePlayButton.width / 4, gamePlayButton.height / 4);
  }
  localFrameCount++;
}

function drawStage0_2() {
  let offset = 10;
  background(255);
  imageMode(CENTER);
  push();
  translate(1300, 640);
  rotate(-PI / 10)
  image(sticker10, 0, 0, 440, 440);
  pop();
  image(sticker3, 300, 680, 800, 800);
  image(introtext1Img, width / 2 + 30, height / 2 - 60, introtext1Img.width / 2, introtext1Img.height / 2);

  angle0 += 0.2;
}

function drawStage0_3() {
  background(255);
  imageMode(CENTER); //스티커
  // sticker3 애니메이션
  image(introtext2Img, width / 2 + 15, height / 2 - 60, 700, 360);
  push();
  translate(300, 680); // sticker3의 위치로 이동
  rotate(sin(angle3) * PI / 36); // 흔들림 (작은 각도 회전)
  scale(scaleFactor3); //크기 점진적 증가
  image(sticker3, 0, 0, 800, 800);
  pop();

  // sticker10 애니메이션
  push();
  translate(1180, 620); // sticker10의 위치로 이동
  rotate(-PI / 10 + sin(angle10) * PI / 24); // 흔들림 (작은 각도 회전)
  scale(scaleFactor10); //크기 점진적 증가
  image(sticker10, 0, 0, 440, 440);
  pop();

  // 애니메이션 업데이트
  updateSticker3();
  updateSticker10();
}
function updateSticker3() {
  // 점진적으로 크기 증가
  if (scaleFactor3 < 1.5) {
    scaleFactor3 += scaleIncrement;
  }
  angle3 += 0.1; // 흔들림 각도 업데이트
}

function updateSticker10() {
  // 점진적으로 크기 증가
  if (scaleFactor10 < 2.0) {
    scaleFactor10 += scaleIncrement;
  }

  // 흔들림 각도 업데이트
  angle10 += 0.1;
}

function drawStage0_4() {
  background(0);
  fill(255);
  textSize(40);
  imageMode(CENTER);
  image(startLogo, width / 2, height / 2, startLogo.width, startLogo.height);
  text("Click to Start", width / 2, height / 2 + 240);
}

function prepareStage0_5() {
  textToType0_5 = "으아아아아아아아아악 —————!!!!!!!\n으악!!ㄹㅇ라ㅓㅁㄴ!!! 짜증나!! 다 짜증나!!! 다 뒤져버려!!\n왜 나만 일이 안 풀려? 왜 나만 졸업 못해?\n왜 나만 취업이 안 돼 왜?!?!?!?!?!?!?";
  typedText0_5 = ""; // 초기화
  charIndex0_5 = 0;
  isReady0_5 = false;
}

function drawStage0_5() {
  tint(255, backgroundAlpha);
  imageMode(CORNER);
  image(back1Img, 0, 0, width, height);
  backgroundAlpha = constrain(backgroundAlpha + 0.5, 0, 255);
  tint(255); //투명도 초기화
  imageMode(CENTER);
  textSize(30);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  fill(255);
  if (charIndex0_5 < textToType0_5.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_5 += textToType0_5[charIndex0_5];
      charIndex0_5++;
    }
  } else {
    isReady0_5 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  text(typedText0_5, width / 2, 675);
}

function prepareStage0_6() {
  textToType0_6 = "하…. 어차피 한번 사는 인생\n락rock하는 애들처럼\nFuck the world!!! 무새나 되고 싶다… 데낄라 먹고 싶어\n담배나 왕창 피우고 싶어 (약은안빨고싶습니다마약반대)";
  typedText0_6 = ""; // 초기화
  charIndex0_6 = 0;
  isReady0_6 = false;
}

function drawStage0_6() {
  backgroundAlpha = 0; //초기화
  imageMode(CORNER);
  image(back1Img, 0, 0, width, height);
  imageMode(CENTER);
  textSize(30);

  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  fill(255);
  if (charIndex0_6 < textToType0_6.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_6 += textToType0_6[charIndex0_6];
      charIndex0_6++;
    }
  } else {
    isReady0_6 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  text(typedText0_6, width / 2, 675);
}

function prepareStage0_7() {
  textToType0_7_1 = "아니? 아예";
  typedText0_7_1 = ""; // 초기화
  charIndex0_7_1 = 0;
  isReady0_7_1= false;
  textToType0_7_2 = "이세계트럭";
  typedText0_7_2 = ""; // 초기화
  charIndex0_7_2 = 0;
  isReady0_7_2 = false;
  textToType0_7_3 = "에나 치여버렸으면 좋겠...";
  typedText0_7_3 = ""; // 초기화
  charIndex0_7_3 = 0;
  isReady0_7_3 = false;
  textToType0_7_4 = "......어......\n.......어..?";
  typedText0_7_4 = ""; // 초기화
  charIndex0_7_4 = 0;
  isReady0_7_4 = false;
}

function drawStage0_7() {
  imageMode(CORNER);
  image(back1Img, 0, 0, width, height);
  imageMode(CENTER);

  // 텍스트 배경
  textSize(30);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  // 텍스트 1 출력
  if (!isReady0_7_1) {
    if (charIndex0_7_1 < textToType0_7_1.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_7_1 += textToType0_7_1[charIndex0_7_1];
        charIndex0_7_1++;
      }
    } else {
      isReady0_7_1 = true; // 텍스트 1 출력 완료
    }
  }

  // 텍스트 2 출력 (텍스트 1이 끝난 후)
  if (isReady0_7_1 && !isReady0_7_2) {
    if (charIndex0_7_2 < textToType0_7_2.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_7_2 += textToType0_7_2[charIndex0_7_2];
        charIndex0_7_2++;
      }
    } else {
      isReady0_7_2 = true; // 텍스트 2 출력 완료
    }
  }

  // 텍스트 3 출력 (텍스트 2가 끝난 후)
  if (isReady0_7_2 && !isReady0_7_3) {
    if (charIndex0_7_3 < textToType0_7_3.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_7_3 += textToType0_7_3[charIndex0_7_3];
        charIndex0_7_3++;
      }
    } else {
      isReady0_7_3 = true; // 텍스트 3 출력 완료
    }
  }

  // 텍스트 4 출력 (텍스트 3이 끝난 후)
  if (isReady0_7_3 && !isReady0_7_4) {
    if (charIndex0_7_4 < textToType0_7_4.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_7_4 += textToType0_7_4[charIndex0_7_4];
        charIndex0_7_4++;
      }
    } else {
      isReady0_7_4 = true; // 텍스트 4 출력 완료
    }
  }

  // 텍스트 화면 출력
  fill(255);
  textFont(Font1);
  text(typedText0_7_1, width / 2 - 400, 638); // 텍스트 1
  fill(255, 0, 0);
  textFont(Font2);
  text(typedText0_7_2, width / 2 - 245, 638); // 텍스트 1
  fill(255);
  textFont(Font1);
  text(typedText0_7_3, width / 2+20, 638); // 텍스트 3
  fill(255);
  textFont(Font1);
  text(typedText0_7_4, width / 2, 690); // 텍스트 4

  if (mouseX > 405 && mouseX < 530 && mouseY > 625 && mouseY < 650) {
    rectMode(CENTER);
    rect(mouseX + 100, mouseY - 120, 280, 200, 5); // 배경 박스
    fill(255);
    textSize(20);
    fill(0);
    textFont(Font2);
    text("<참고>\n이세계트럭이란?\n: 주로 남성향 웹소설에서\n님을 환생하라고 들이받는 트럭\n이 게임에선\n이세계로 보내버리는 트럭이다.", mouseX + 100, mouseY - 135);
    fill(255, 0, 0);
    text("99.9% 확률로 못 피한다.", mouseX + 100, mouseY - 45);
  }
}

function prepareStage0_8() {
  textToType0_8 = "저... 저게 뭐야?!!!!!!";
  typedText0_8 = ""; // 초기화
  charIndex0_8 = 0;
  isReady0_8 = false;
}

function drawStage0_8() {
  imageMode(CORNER);
  image(back1Img, 0, 0, width, height);
  imageMode(CENTER);
  textSize(30);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndex0_8 < textToType0_8.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_8 += textToType0_8[charIndex0_8];
      charIndex0_8++;
    }
  } else {
    isReady0_8 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textFont(Font1);
  text(typedText0_8, width / 2, 675);
}

function prepareStage0_9() {
  textToType0_9_1 = "당신의";
  typedText0_9_1 = ""; // 초기화
  charIndex0_9_1 = 0;
  isReady0_9_1 = false;
  textToType0_9_2 = "인셀";
  typedText0_9_2 = ""; // 초기화
  charIndex0_9_2 = 0;
  isReady0_9_2 = false;
  textToType0_9_3 = "스러운 망상에 불쾌해진 누군가가...";
  typedText0_9_3 = ""; // 초기화
  charIndex0_9_3 = 0;
  isReady0_9_3 = false;
}

function drawStage0_9() { // 타자기 효과 수정
  imageMode(CORNER);
  image(back1Img, 0, 0, width, height);
  imageMode(CENTER);
  blinkTimer++;
  if (blinkTimer > blinkInterval * blinkCycle) {
    image(warningImg, width / 2, height / 2 - 100, warningImg.width / 2 + 50, warningImg.height / 2 + 50);
  }

  if (blinkTimer > blinkInterval * blinkCycle * 2) {
    blinkCycle++;
    if (blinkCycle >= blinkDuration) {
      blinkCycle = 0;
      blinkTimer = 0; // 깜빡임 반복이 끝나면 타이머 초기화
    }
  }

  // 원래 텍스트 표시 (폰트는 Font1로 설정)
  strokeWeight(10);
  stroke(255);
  fill(0);
  textAlign(LEFT);
  textSize(40);
  textFont(Font1); // 원래 텍스트 폰트는 Font1
  text("슈퍼마초스러운\n               락스타가 될 자신이 있다는 당신 !", 300, 530);

  strokeWeight(4);
  stroke(255);
  fill(0);
  textSize(32);

  // 텍스트 1 출력
  if (!isReady0_9_1) {
    if (charIndex0_9_1 < textToType0_9_1.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_9_1 += textToType0_9_1[charIndex0_9_1];
        charIndex0_9_1++;
      }
    } else {
      isReady0_9_1 = true; // 텍스트 1 출력 완료
    }
  }

  // 텍스트 2 출력 (텍스트 1이 끝난 후)
  if (isReady0_9_1 && !isReady0_9_2) {
    if (charIndex0_9_2 < textToType0_9_2.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_9_2 += textToType0_9_2[charIndex0_9_2];
        charIndex0_9_2++;
      }
    } else {
      isReady0_9_2 = true; // 텍스트 2 출력 완료
    }
  }

  // 텍스트 3 출력 (텍스트 2가 끝난 후)
  if (isReady0_9_2 && !isReady0_9_3) {
    if (charIndex0_9_3 < textToType0_9_3.length) {
      if (frameCount % typingSpeed === 0) {
        typedText0_9_3 += textToType0_9_3[charIndex0_9_3];
        charIndex0_9_3++;
      }
    } else {
      isReady0_9_3 = true; // 텍스트 3 출력 완료
    }
  }

  // 텍스트 화면 출력
  fill(0);
  textFont(Font1); // 원래 텍스트 폰트는 Font1
  text(typedText0_9_1, 380, 640); // 텍스트 1
  fill(255, 0, 0);
  textFont(Font2); // 텍스트 2의 폰트는 Font2
  text(typedText0_9_2, 500, 640); // 텍스트 2
  fill(0);
  textFont(Font1); // 텍스트 3의 폰트는 Font1
  text(typedText0_9_3, 570, 640); // 텍스트 3
  noStroke();

  // <참고> 설명 텍스트 박스 표시
  if (mouseX > 500 && mouseX < 560 && mouseY > 630 && mouseY < 670) {
    fill(245, 245, 245, 230);
    rectMode(CENTER);
    rect(mouseX + 100, mouseY - 120, 320, 180, 5); // 배경 박스
    fill(255);
    textSize(20);
    fill(0);
    textAlign(CENTER);
    textFont(Font2); // 설명 텍스트 폰트는 Font2
    text("<참고>\n인셀이란?\n: 세상 살면서 불만은 많지만\n바뀔 생각은 안 하고\n남탓만 오지게 하는\n불행하고 안쓰러운 사람", mouseX + 100, mouseY - 125);
  }

  // 마우스를 올렸을 때만 <참고> 설명 텍스트를 그리게 처리

  localFrameCount = 0; // 다음 스테이지를 위해 초기화
}

function drawStage0_10() {
  imageMode(CORNER);
  image(truckLightVideo, 0, 0, width, height);
  if (!videoPlayed0_10) {
    truckLightVideo.play();
    videoPlayed0_10 = true; // 재생 완료 상태로 설정
  }
  fill(255);
  textSize(40);
  textFont(Font1);
  textAlign(CENTER, CENTER);
  text("초대장과 함께\n이세계 트럭을 보내왔습니다—!", width / 2, height / 2 - 200);
}

function drawStage0_11() { //피하지 않으면 이세계로 간다
  background(0);
  fill(255);
  textSize(120);
  textAlign(CENTER, CENTER);

  if (localFrameCount % intervalFrames === 0 && charIndex0 < message0.length) { //텍스트 첫줄
    displayedText0 += message0[charIndex0]; // 다음 글자 추가
    charIndex0++; // 인덱스 증가
  }
  // 텍스트 표시
  text(displayedText0, width / 2, height / 2 - 100);

  if (localFrameCount >= 120 && localFrameCount % intervalFrames === 0 && charIndex0_1 < message0_1.length) {
    displayedText0_1 += message0_1[charIndex0_1]; // 다음 글자 추가
    charIndex0_1++;
  }

  text(displayedText0_1, width / 2, height / 2 + 50);
  // 텍스트 표시
  localFrameCount++;
}

function drawStage0_12() { //트럭 피하기 설명
  localFrameCount = 0; //갱신
  background(0);
  fill(220);
  imageMode(CENTER);
  image(infoImg, width / 2, 400, 1700, 740);
  fill(255);
  textSize(50);
  text('돌진하는 이세계 트럭을 피해\n좌우로 이동해 보세요!\n(키보드 방향키 ← → 사용)', width / 2 + 10, height / 2 + 30);
}

function prepareStage0_13() {
  textToType0_13 = "으...으악! 오지마...!! 오지마\n으아아아아아아악!!";
  typedText0_13 = ""; // 초기화
  charIndex0_13 = 0;
  isReady0_13 = false;
}

function drawStage0_13() { //트럭 충돌
  localFrameCount++;
  imageMode(CORNER);
  image(back1Img, offsetBackX, 0, width, height);
  imageMode(CENTER);
  image(userImg, width / 2, 660, 400, 400);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndex0_13 < textToType0_13.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_13 += textToType0_13[charIndex0_13];
      charIndex0_13++;
    }
  } else {
    isReady0_13 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedText0_13, width / 2, 675);

  let truckWidth = truckImg.width * truckScale;
  let truckHeight = truckImg.height * truckScale;
  imageMode(CENTER);
  image(truckImg, width / 2 + 20 + offsetX, height / 2, truckWidth * 0.1, truckHeight * 0.1);

  // 이미지 크기 업데이트
  truckScale += truckScaleSpeed;
  truckScaleSpeed += truckAccel; // 가속도 추가

  if (keyIsDown(LEFT_ARROW)) { //이동 효과
    offsetX -= moveSpeed;
    offsetBackX -= moveSpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    offsetX += moveSpeed;
    offsetBackX += moveSpeed;
  }

  if (localFrameCount >= 300) { //n초 뒤
    truckCrashBgm.stop();
    startStage0(14);
  }
}

function drawStage0_14() {
  if (localFrameCount == 0){
    playBackgroundMusic(invitationBgm);
  }
  redValue0 = constrain(redValue0 + 3, 0, 185);
  background(redValue0, 0, 0);
  fill(255);
  imageMode(CENTER, CENTER);
  image(envelopeImg, width / 2, height / 2, 400, 400);
  if (localFrameCount >= 220) {
    startStage0(15);
  }
  localFrameCount++;
}

function drawStage0_15() { //초대장
  localFrameCount = 0; //갱신
  background(185, 0, 0);
  imageMode(CENTER, CENTER);
  image(invitationImg, width / 2 + 250, height / 2, 440, 500);
  fill(255);
  textSize(20)
  text("빨리 눌러!", width / 2 + 250, height / 2)
  textSize(20);
  fill(255);
  textSize(20);
}

function prepareStage0_16() {
  textToType0_16 = "Fuck the world!!!!!\n흥미로운 그 절규\n이세계에서 잘 들어보았다\n니가 정말 rock하게 살 수 있을지\n듣다 보니 궁금해지더군\n\n\n\n이봐 bro\n너 정말 락스타처럼\n살 수 있을 것 같아?\n만약 그렇다면…내 초대에 응해라\n나와의 승부에서 이기면 널\n현실 세계의 락스타로 만들어주마";
  typedText0_16 = ""; // 초기화
  charIndex0_16 = 0;
  isReady0_16 = false;
}

function drawStage0_16() {
  background(185, 0, 0);
  imageMode(CENTER, CENTER);
  image(invitationImg, width / 2 + 250, height / 2, 440, 500); //초대장
  fill(255);
  textSize(20)
  stroke(0);
  strokeWeight(3);
  line(width / 2 + 140, height / 2, width / 2 - 200, height / 2); //실선
  fill(0);
  rectMode(CENTER);
  rect(width * 0.25 + 100, height / 2, 500, 700); //창
  fill(255);
  textSize(28);
  noStroke();

  if (charIndex0_16 < textToType0_16.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_16 += textToType0_16[charIndex0_16];
      charIndex0_16++;
    }
  } else {
    isReady0_16 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  text(typedText0_16, width * 0.25 + 100, height / 2);
}

function drawStage0_17() {
  alpha0_17 = constrain((localFrameCount) * 2, 0, 255);
  imageMode(CORNER);
  image(stageBack1Img, 0, 0, width, height);
  imageMode(CENTER);
  tint(255, alpha0_17);
  image(mainLogo2_guitar, width / 2, height / 2, mainLogo2_guitar.width, mainLogo2_guitar.height);
  tint(255);
  localFrameCount++;
}

function prepareStage0_18() {
  textToType0_18 = "아오 씨..X… 머리야…\n(눈을 지그시 감았다가 뜨며)\n뭐야, 여긴 대체 어디야?\n음? 어디서 저벅저벅 소리가 들리는데….?";
  typedText0_18 = ""; // 초기화
  charIndex0_18 = 0;
  isReady0_18 = false;
}

function drawStage0_18() {
  localFrameCount = 0; //초기화
  background(0);
  tint(255, backgroundAlpha18); //화면 서서히 나타남
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  textSize(32);
  backgroundAlpha18 += 2; //투명도 증가
  if (backgroundAlpha18 > 255) {
    backgroundAlpha18 = 255;
  }
  noTint(); //화면 효과 빼기

  imageMode(CENTER);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  fill(255);
  if (charIndex0_18 < textToType0_18.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_18 += textToType0_18[charIndex0_18];
      charIndex0_18++;
    }
  } else {
    isReady0_18 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  text(typedText0_18, width / 2, 675);
}

function drawStage0_19() {
  imageMode(CORNER);
  tint(255, 80);
  image(back3Img, 0, 0, width, height);
  tint(255);
  imageMode(CENTER);
  image(noelShadowImg, width / 2, 100 + localFrameCount, 400, 400);
  image(noelSpitImg, width / 2, height / 2 + 50, 400, 400);
  fill(255);
  textSize(80);
  push();
  translate(width / 4, height / 2);
  rotate(-PI / 8);
  text("카악--\n퉤!!!!", 0, 0);
  pop();
  if (localFrameCount < 100) {
    localFrameCount++;
  }
}

function prepareStage0_20() {
  textToType0_20 = "(이세계의 노엘 갤러거가 나타났다!)\n이봐!!! 얼간이!!!!\n늑장 부릴 시간 없으니 어서 일어나!!!!";
  typedText0_20 = ""; // 초기화
  charIndex0_20 = 0;
  isReady0_20 = false;
}

function drawStage0_20() {
  localFrameCount = 0; //초기화
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(noel3Img, width / 2, 350, 400, 400);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndex0_20 < textToType0_20.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_20 += textToType0_20[charIndex0_20];
      charIndex0_20++;
    }
  } else {
    isReady0_20 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedText0_20, width / 2, 675);
}

function prepareStage0_21() {
  textToType0_21 = "누구...?";
  typedText0_21 = ""; // 초기화
  charIndex0_21 = 0;
  isReady0_21 = false;
}

function drawStage0_21() {
  imageMode(CORNER);
  if (localFrameCount < 60) {
    image(noelSplit1Img, 0, 0, width, height); //눈
  } else if (localFrameCount < 120) {
    image(noelSplit2Img, 0, 0, width, height); //눈
  } else {
    image(noelSplit3Img, 0, 0, width, height); //눈
  }

  imageMode(CENTER);
  rectMode(CENTER);
  fill(0,0,0,100);
  rect(width / 2, height/2+300, width, 300);
  fill(0);
  rect(width / 2, height/2+150, width, 10);
  if (charIndex0_21 < textToType0_21.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_21 += textToType0_21[charIndex0_21];
      charIndex0_21++;
    }
  } else {
    isReady0_21 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedText0_21, width/2, 675);
  localFrameCount++;
} 

function prepareStage0_22() {
  textToType0_22 = "ㅋㅋ 딱 보니 알겠지? 나다 나… 노엘 갤러거\n물론 유저 네가 아는\n현실 세계의 그놈과는 차이가 있을 거야";
  typedText0_22 = ""; // 초기화
  charIndex0_22 = 0;
  isReady0_22 = false;
}

function drawStage0_22() {
  localFrameCount = 0; //초기화
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(noel1Img, 420, 220, 400, 400);
  image(noelRealImg, 1020, 220, noelRealImg.width * 0.4, noelRealImg.height * 0.4);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  stroke(255); //등호
  strokeWeight(10);
  line(630, 190, 730, 190);
  line(630, 250, 730, 250);
  noStroke();

  if (charIndex0_22 < textToType0_22.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_22 += textToType0_22[charIndex0_22];
      charIndex0_22++;
    }
  } else {
    isReady0_22 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedText0_22, width / 2, 675);
}

function prepareStage0_23() {
  textToType0_23 = "난 분명 너의 절규를 들었고 Rock을 쉽게 생각하는 네놈에게\n그럴 자격이 있는지 묻고자 여기까지 왔다\n왜냐면… 난 이세계에서도 락스타거든 (인셀인 너와는 다르게)";
  typedText0_23 = ""; // 초기화
  charIndex0_23 = 0;
  isReady0_23 = false;
}

function drawStage0_23() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  stroke(255);
  strokeWeight(8);
  fill(0);
  textSize(56);
  if (localFrameCount % intervalFrames23 === 0 && charIndex0_2 < message0_2.length) { //텍스트 첫줄
    displayedText0_2 += message0_2[charIndex0_2]; // 다음 글자 추가
    charIndex0_2++; // 인덱스 증가
  }
  text(displayedText0_2, width / 2, 200);
  noStroke();

  imageMode(CENTER);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  fill(255);

  if (charIndex0_23 < textToType0_23.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_23 += textToType0_23[charIndex0_23];
      charIndex0_23++;
    }
  } else {
    isReady0_23 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedText0_23, width / 2, 675);
}

function prepareStage0_24() {
  textToType0_24 = "곧 크리스마스인데 말이야..\n친구도, 애인도, 가족도 없이 말이야..\n돼지 멱따는 소리나 꽥꽥 질러대고.. 뭐냔 말이야?";
  typedText0_24 = ""; // 초기화
  charIndex0_24 = 0;
  isReady0_24 = false;
}

function drawStage0_24() {
  localFrameCount = 0; //갱신
  imageMode(CORNER);
  image(christmasImg, 0, 0, width, height); //배경

  imageMode(CENTER);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndex0_24 < textToType0_24.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_24 += textToType0_24[charIndex0_24];
      charIndex0_24++;
    }
  } else {
    isReady0_24 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedText0_24, width / 2, 675);
}

function triggerBreakingEffect() { // 화면 캡처하고 조각 생성
  let captured = get();
  shards = [];
  let shardSize = 50; // 조각 크기

  for (let x = 0; x < width; x += shardSize) {
    for (let y = 0; y < height; y += shardSize) {
      let shard = {
        img: captured.get(x, y, shardSize, shardSize),
        x: x + shardSize / 2,
        y: y + shardSize / 2,
        angle: random(TWO_PI),
        vx: random(-5, 5), // x축 속도
        vy: random(-5, 5), // y축 속도
        rotSpeed: random(-0.1, 0.1), // 회전 속도
      };
      shards.push(shard);
    }
  }

  isBreaking0 = true;
  breakStartFrame = frameCount;
}

function drawBreakingEffect() {
  background(0);
  let elapsedFrames = frameCount - breakStartFrame;

  for (let shard of shards) {
    push();
    translate(shard.x, shard.y);
    rotate(shard.angle);
    imageMode(CENTER);
    image(shard.img, 0, 0);
    pop();

    // 조각 이동
    shard.x += shard.vx;
    shard.y += shard.vy;
    shard.angle += shard.rotSpeed;
  }

  // 일정 시간 후 drawStage0_25로 넘어감
  if (elapsedFrames > breakDurationFrames) {
    isBreaking0 = false;
    pagezero = 25;
  }
}

function prepareStage0_25() {
  textToType0_25 = "크리스마스고 자시고 누구시라고요..?";
  typedText0_25 = ""; // 초기화
  charIndex0_25 = 0;
  isReady0_25 = false;
}

function drawStage0_25() {
  localFrameCount = 0; //갱신
  background(0);
  imageMode(CENTER);
  rectMode(CENTER);
  fill(255, 255, 255, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(255);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndex0_25 < textToType0_25.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_25 += textToType0_25[charIndex0_25];
      charIndex0_25++;
    }
  } else {
    isReady0_25 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(0);
  text(typedText0_25, width / 2, 675);
}

function prepareStage0_26() {
  textToType0_26 = "락스타는 길게 설명하지 않아\n그리고 이해하지도 않지\n즉!! 너도 이해할 필요 없이 그냥 시작하면 된다~~ 이 말이야~~ 알아들었어?!\n(당황한 유저가 어버버하는 사이)";
  typedText0_26 = ""; // 초기화
  charIndex0_26 = 0;
  isReady0_26 = false;
}

function drawStage0_26() {
  background(0);
  imageMode(CENTER);
  image(rockstarImg3, 1200, 300, rockstarImg3.width / 2, rockstarImg3.height / 2 - 30);
  push();
  translate(250, 200);
  rotate(-PI / 12)
  image(rockstarImg1, 0, 0, rockstarImg1.width * 0.5, rockstarImg1.height * 0.5);
  pop();
  push();
  translate(width / 2, 220);
  rotate(PI);
  image(rockstarImg2, 0, 0, rockstarImg2.width * 0.4, rockstarImg2.height * 0.4);
  pop();
  rectMode(CENTER);
  fill(255, 255, 255, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(255);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndex0_26 < textToType0_26.length) {
    if (frameCount % typingSpeed === 0) {
      typedText0_26 += textToType0_26[charIndex0_26];
      charIndex0_26++;
    }
  } else {
    isReady0_26 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(0);
  text(typedText0_26, width / 2, 675);
}

//스테이지 1 시작(제목)(pageone=1)
function drawStage1() {
  imageMode(CORNER);
  image(stageBack1Img, 0, 0, width, height);
  imageMode(CENTER);
  image(stage1Img, width / 2, height / 5, 400, 200);
  image(infoImg, width / 2 - 25, height / 2, 1900, 300);

  //스테이지 1 설명
  textSize(30);
  text(
    "첫 번째 스테이지 오픈! 이세계 노엘 갤러거와의 대담!\n그가 던진 질문 공격을 피해 가장 락스타다운 대답을 고를 것!",
    width / 2,
    height / 2
  );

  //GO 버튼
  image(startImg, width / 2 + 15, 680, 340, 200);
}

//카운트다운 화면(pageone=2)
function drawCountdown() {
  background(0);
  textSize(250);
  text(countdown, width / 2, height / 2 - 25);
  stroke(255);
  strokeWeight(1);
  line(720, 0, 720, 810);
  line(0, 405, 1440, 405);
  noFill();
  strokeWeight(10);
  circle(720, 405, 400, 400);
}

//스테이지 1_1질문 및 선택지 화면(pageone=3)
function drawQuestion1_1() {
  imageMode(CORNER);
  //질문 텍스트
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(questionImg, width / 2, height / 4, 1500, 800);
  noStroke();
  textSize(40);
  textAlign(CENTER);
  text(question1_1, width / 2, height / 4);

  //선택지 버튼
  for (let i = 0; i < options1_1.length; i++) {
    let x = width / 2;
    let y = height / 2 + i * 100;
    let rectWidth = 400;
    let rectHeight = 150;

    //선택지 버튼 네모
    image(optionImg, x, y, rectWidth, rectHeight);

    //선택지 내용
    fill(255);
    textSize(24);
    text(options1_1[i], x, y);
  }
}

function prepareDrawResult1_1() {
  textToType1_1_1 = "천만에! 패션에만 신경 쓰면 패션락스타가 되고 만다!\n참고로 답은 2번이다 멍청아!";
  typedText1_1_1 = ""; // 초기화
  charIndex1_1_1 = 0;
  isReady1_1_1 = false;
  textToType1_1_2 = "정답! 락스타는 낭만에 살고 낭만에 죽는다!";
  typedText1_1_2 = ""; // 초기화
  charIndex1_1_2 = 0;
  isReady1_1_2 = false;
  textToType1_1_3 = "틀렸어! 락스타는 혼자가 아니라 관객과 무대를 완성한다!\n참고로 답은 2번이다 멍청아!";
  typedText1_1_3 = ""; // 초기화
  charIndex1_1_3 = 0;
  isReady1_1_3 = false;
}

//스테이지 1_1 결과 화면(pageone=4)
function drawResult1_1() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);

  imageMode(CENTER);
  if (questionResult1_1 === "right") { //2번 고름(정답)
    image(noel3Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_1_2 < textToType1_1_2.length) { //키보드 효과
      if (frameCount % typingSpeed === 0) {
        typedText1_1_2 += textToType1_1_2[charIndex1_1_2];
        charIndex1_1_2++;
      }
    } else {
      isReady1_1_2 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    text(typedText1_1_2, width / 2, 675);
  } else if (questionResult1_1 === "wrong1") { //1번 고름(오답)
    image(noel2Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_1_1 < textToType1_1_1.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_1_1 += textToType1_1_1[charIndex1_1_1];
        charIndex1_1_1++;
      }
    } else {
      isReady1_1_1 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    text(typedText1_1_1, width / 2, 675);
  } else if (questionResult1_1 === "wrong2") {  //3번 고름(오답)
    image(noel2Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_1_3 < textToType1_1_3.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_1_3 += textToType1_1_3[charIndex1_1_3];
        charIndex1_1_3++;
      }
    } else {
      isReady1_1_3 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    text(typedText1_1_3, width / 2, 675);
  }
}

//스테이지 1_1에 실패한 화면(pageone=8)
function stageFail1_1() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  fill(255);
  textSize(30);
  text("목숨 -1, 다음 문제로 ", width / 2, height / 2 + 280);

}
//스테이지 1_2 질문 및 선택지 화면(pageone=9)
function drawQuestion1_2() {
  imageMode(CORNER);
  //질문 텍스트
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(questionImg, width / 2, height / 4, 1500, 800);
  noStroke();
  textSize(40);
  textAlign(CENTER);
  text(question1_2, width / 2, height / 4);

  //선택지 버튼
  for (let i = 0; i < options1_2.length; i++) {
    let x = width / 2;
    let y = height / 2 + i * 100;
    let rectWidth = 400;
    let rectHeight = 150;

    //선택지 버튼 네모
    image(optionImg, x, y, rectWidth, rectHeight);

    //선택지 내용
    fill(255);
    textSize(24);
    text(options1_2[i], x, y);
  }
}

function prepareDrawResult1_2() {
  textToType1_2_1 = "정답은 3번이다!\n이런 나라에서 사는 건 락이 맞다!";
  typedText1_2_1 = ""; // 초기화
  charIndex1_2_1 = 0;
  isReady1_2_1 = false;
  textToType1_2_2 = "정답은 3번이다!\n꼼지락꼼지락 기타를 쳐라 bro!";
  typedText1_2_2 = ""; // 초기화
  charIndex1_2_2 = 0;
  isReady1_2_2 = false;
  textToType1_2_3 = "정답! 이건 락이 아니다!\n니 도시락은 니가 싸라!";
  typedText1_2_3 = ""; // 초기화
  charIndex1_2_3 = 0;
  isReady1_2_3 = false;
}

//스테이지 1_2 결과 화면(pageone=10)
function drawResult1_2() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);

  imageMode(CENTER);
  if (questionResult1_2 === "right") { //3번 고름(정답)
    image(noel3Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_2_3 < textToType1_2_3.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_2_3 += textToType1_2_3[charIndex1_2_3];
        charIndex1_2_3++;
      }
    } else {
      isReady1_2_3 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    text(typedText1_2_3, width / 2, 675);
  } else if (questionResult1_2 === "wrong1") { //1번 고름(오답)
    image(noel2Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_2_1 < textToType1_2_1.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_2_1 += textToType1_2_1[charIndex1_2_1];
        charIndex1_2_1++;
      }
    } else {
      isReady1_2_1 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    text(typedText1_2_1, width / 2, 675);
  } else if (questionResult1_2 === "wrong2") {  //2번 고름(오답)
    image(noel2Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_2_2 < textToType1_2_2.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_2_2 += textToType1_2_2[charIndex1_2_2];
        charIndex1_2_2++;
      }
    } else {
      isReady1_2_2 = true; // 텍스트가 모두 출력되면 준비 완료
    } fill(255);
    text(typedText1_2_2, width / 2, 675);
  }
}

//스테이지 1_2에 실패한 화면(pageone=11)
function stageFail1_2() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  fill(255);
  textSize(30);
  text("목숨 -1, 다음 문제로 ", width / 2, height / 2 + 280);
}

//스테이지 1_3 질문 및 선택지 화면(pageone=12)
function drawQuestion1_3() {
  imageMode(CORNER);
  //질문 텍스트
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(questionImg, width / 2, height / 4, 1500, 800);
  noStroke();
  textSize(40);
  textAlign(CENTER);
  text(question1_3, width / 2, height / 4);

  //선택지 버튼
  for (let i = 0; i < options1_3.length; i++) {
    let x = width / 2;
    let y = height / 2 + i * 100;
    let rectWidth = 400;
    let rectHeight = 150;

    //선택지 버튼 네모
    image(optionImg, x, y, rectWidth, rectHeight);

    //선택지 내용
    fill(255);
    textSize(24);
    text(options1_3[i], x, y);
  }
}

function prepareDrawResult1_3() {
  textToType1_3_1 = "그래! 이게 제일 박력있다!\n키스는 더럽고 손잡자는 건 짜친다!";
  typedText1_3_1 = ""; // 초기화
  charIndex1_3_1 = 0;
  isReady1_3_1 = false;
  textToType1_3_2 = "주제를 알아라! 아무도 너랑 키스 안 한다!\n쯧... 정답은 1번이다!";
  typedText1_3_2 = ""; // 초기화
  charIndex1_3_2 = 0;
  isReady1_3_2 = false;
  textToType1_3_3 = "천만에! 축축해서 잡기 싫다!\n쯧... 정답은 1번이다!";
  typedText1_3_3 = ""; // 초기화
  charIndex1_3_3 = 0;
  isReady1_3_3 = false;
}

//스테이지 1_3 결과 화면(pageone=13)
function drawResult1_3() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);

  imageMode(CENTER);
  if (questionResult1_3 === "right") { //1번 고름(정답)
    image(noel3Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_3_1 < textToType1_3_1.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_3_1 += textToType1_3_1[charIndex1_3_1];
        charIndex1_3_1++;
      }
    } else {
      isReady1_3_1 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    text(typedText1_3_1, width / 2, 675);

  } else if (questionResult1_3 === "wrong1") { //2번 고름(오답)
    image(noel2Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_3_2 < textToType1_3_2.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_3_2 += textToType1_3_2[charIndex1_3_2];
        charIndex1_3_2++;
      }
    } else {
      isReady1_3_2 = true; // 텍스트가 모두 출력되면 준비 완료
    } fill(255);
    text(typedText1_3_2, width / 2, 675);

  } else if (questionResult1_3 === "wrong2") {  //3번 고름(오답)
    image(noel2Img, width / 2, 350, 400, 400);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndex1_3_3 < textToType1_3_3.length) {
      if (frameCount % typingSpeed === 0) {
        typedText1_3_3 += textToType1_3_3[charIndex1_3_3];
        charIndex1_3_3++;
      }
    } else {
      isReady1_3_3 = true; // 텍스트가 모두 출력되면 준비 완료
    } fill(255);
    text(typedText1_3_3, width / 2, 675);
  }
}

//스테이지 1_3에 실패한 화면(pageone=14)
function stageFail1_3() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  fill(255);
  textSize(30);
  text("목숨 -1, 다음 스테이지로 ", width / 2, height / 2 + 280);
}

function prepareStage1Success_1() {
  textToType1_s_1 = "끝났다고 안심하지 마라 망둥아!\n이 게임은 쉬웠지?\n진짜는 다음부터라고!";
  typedText1_s_1 = ""; // 초기화
  charIndex1_s_1 = 0;
  isReady1_s_1 = false;
}

//스테이지 1 통과 후 스테이지 2로 연결되는 화면 1 #27(pageone=5)
function stage1Success_1() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(noel2Img, width / 2, 350, 400, 400);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndex1_s_1 < textToType1_s_1.length) {
    if (frameCount % typingSpeed === 0) {
      typedText1_s_1 += textToType1_s_1[charIndex1_s_1];
      charIndex1_s_1++;
    }
  } else {
    isReady1_s_1 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedText1_s_1, width / 2, 675);
}

function prepareStage1Success_2() {
  textToType1_s_2 = "과연 다음 스테이지도 네까짓 놈이 통과할 수 있을까????????";
  typedText1_s_2 = ""; // 초기화
  charIndex1_s_2 = 0;
  isReady1_s_2 = false;
}

//스테이지 1 통과 후 스테이지2로 연결되는 화면 2 #28(pageone=6)
function stage1Success_2() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(noel2Img, width / 2, 350, 400, 400);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndex1_s_2 < textToType1_s_2.length) {
    if (frameCount % typingSpeed === 0) {
      typedText1_s_2 += textToType1_s_2[charIndex1_s_2];
      charIndex1_s_2++;
    }
  } else {
    isReady1_s_2 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedText1_s_2, width / 2, 675);
}

//스테이지 2 시작 전 화면 #29(pageone=7)
function beforeStage2() {
  imageMode(CORNER);
  image(uservsnoelImg, 0, 0, width, height);
  fill(255);
  textSize(100);
  text("유저", 150, 70);
  textSize(100);
  text("노엘", 1290, 700);
  textSize(150);
  text("VS", 650, 500);
}

function drawStage2_1() {//스테이지 2 시작
  imageMode(CORNER);
  image(stageBack2Img, 0, 0, width, height);
  fill(255, 0, 0);
  textSize(80);
  imageMode(CENTER);
  image(stage2Img, width / 2, height / 2, 800, 500);
}

function drawStage2_2() { //설명창
  imageMode(CORNER);
  image(stageBack2Img, 0, 0, width, height);
  fill(255, 0, 0);
  textSize(80);
  imageMode(CENTER);
  image(infoImg, width / 2, 240, 1300, 280);
  image(startImg, width / 2 + 15, 680, 340, 200);
  textSize(40);
  fill(255);
  stroke(0);
  strokeWeight(5);
  text("날아다니는 단어들을\n그물로 3개 낚아채라!", width / 2, height / 3 - 20);

  textSize(36);
  fill(255, 60, 60);
  stroke(255);
  text("_____는 ______를 ________할까?", width / 2, height / 2 + 60);
  textSize(28);
  fill(255);
  stroke(0);
  text("가사는 원래 멋있으면 그만이다.\n빈칸을 채워 누구에게도 이해받지 못할 너만의 가사를 완성하라!", width / 2, height * 0.6 + 60);
  noStroke();
}

function drawStage2_3() {
  imageMode(CENTER);
  background(0);
  textSize(300);
  fill(255);
  stroke(255, 0, 0);
  strokeWeight(20);
  text("94", width / 2, height / 3);
  noStroke();
  textSize(50);
  text("점 이상을 받아야 미션 클리어", width / 2, height / 2 + 60);

  image(noel1Img, width * 0.8, height * 0.8 + 20, 400, 360);
  fill(230);
  textSize(36);
  text("오아시스 첫 앨범 Definitely Maybe\n94년도 발매", width / 5 + 100, height * 0.8);
}

function drawGame2() { //스테이지 2 게임 화면
  imageMode(CENTER);
  image(back4Img, width / 2, height / 2);
  noStroke();

  if (!wordDisplay.isGameOver()) {
    if (!explainGame2Pressed) {
      wordDisplay.updateWordPositions();
    }
    stroke(255);
    strokeWeight(1);
    wordDisplay.displayWords();
    noStroke();
    imageMode(CENTER);
    image(lyricInput, width / 2, height * 0.8, width, height * 0.2);
    wordDisplay.displayCapturedWords(width / 2, height * 0.8, 32, 255);
    wordDisplay.displayFakeMessage();
    image(gameExplainImg, 1300, 60, 200, 100);
    if (explainGame2Pressed == true) {
      fill(200, 200, 200, 80);
      rectMode(CENTER);
      rect(width / 2, height / 2, 1440, 810);
      image(infoImg, width / 2, height / 2, 880, 400);
      textSize(24);
      fill(255);
      text('빠가야로!\n날아다니는 단어를 그물로 잡고\n문장을 완성하라고!\n그 문장이 락스타답게 기상천외하면 통과!\n94점 이상을 받아라!!!!', width / 2, height / 2);
    }
    drawNet(mouseX, mouseY);
  } else {
    if (isGame2Ended === null) {
      game2EndFrame = frameCount; // 게임 종료 시점 기록
      console.log(1 - (wordDisplay.fakeCatchCount * 0.2));
      if (game2PlayedCount < 2) {
        game2Result = "실패";
      } else if (game2PlayedCount == 2) {
        game2Result = random() < 0.9 - (wordDisplay.fakeCatchCount * 0.1) ? "성공" : "실패"; // 결과 결정
      }
      isGame2Ended = true; // 종료 상태 설정
    }

    if (isGame2Ended) { //결과 화면
      fill(255);
      textSize(60);
      textAlign(CENTER, CENTER);
      text("가사 완성!", width / 2, 240);
      //image(lyricInput, width/2, 500, width, height * 0.2);
      wordDisplay.displayCapturedWords(width / 2, 500, 40, 255);
      capturedBackup = [...wordDisplay.capturedWords];
    }
  }
}

function drawNet(x, y) { //마우스 그물 그리기
  push();
  stroke(255);
  strokeWeight(1);
  noFill();

  const netRadius = 40; //반지름
  const gridSpacing = 10; //그물 간격
  const handleLength = 20; //손잡이 길이

  ellipse(x, y, netRadius * 2); // 바깥 테두리

  // 그물 내부 격자
  for (let angle = 0; angle < TWO_PI; angle += PI / 6) {
    const innerX = x + cos(angle) * netRadius; // 방사형 선의 끝점 x
    const innerY = y + sin(angle) * netRadius; // 방사형 선의 끝점 y
    line(x, y, innerX, innerY); // 중심에서 방사형으로 선 그리기
  }

  for (let r = gridSpacing; r < netRadius; r += gridSpacing) {   // 내부 원형 그리기

    ellipse(x, y, r * 2); // 점점 커지는 내부 원
  }

  strokeWeight(3);
  line(x, y + netRadius, x, y + netRadius + handleLength); // 원 아래쪽에 손잡이 추가
  pop();
}

function stage2Success() {
  localFrameCount = 0; //갱신
  background(255, 0, 0);
  fill(255);
  push();
  imageMode(CENTER);
  translate(1240, 370);
  rotate(-PI / 2);
  image(noel3Img, 0, 0, 400, 400);
  pop();
  textSize(140);
  text("score  " + stage2Score, 440, 260);
  textSize(56);
  text("통 . . . 과 . . .", 700, 380);
  fill(0);
  textSize(40);
  textAlign(LEFT);
  text("이 새끼\n진짜 꽤 치네...", 900, 200);
  image(nextImg, width / 2, 620, nextImg.width / 3, nextImg.height / 3);
}

function stage2Fail() {
  localFrameCount = 0;
  background(255, 0, 0);
  push(); //노엘
  translate(width / 2, height * 0.2 + 20);
  rotate(PI);
  image(noel2Img, 0, 0, 400, 400);
  pop();
  push(); //비웃음
  translate(500, 200);
  rotate(PI);
  fill(0);
  textSize(24);
  text("ㅋㅋㅋㅋ\nㅋㅋㅋㅋㅋㅋ\nㅋㅋㅋ", 200, 0);
  text("ㅋㅋㅋ", -550, 70);
  pop();
  textSize(36);
  textAlign(LEFT, CENTER);
  if (game2PlayedCount == 0) {
    text("그건 락이 아니라 용비어천가겠지!\n     단전에서부터 저항정신을 끌어올려!!!", 500, 420);
    image(retryImg, width / 2, 580, retryImg.width / 4, retryImg.height / 4);
  } else if (game2PlayedCount == 1) {
    text("내가 이걸로 만족할까?\n     절대 아니지!!! 더 Rock한 걸 내놔!!!", 500, 420);
    image(retryImg, width / 2, 580, retryImg.width / 4, retryImg.height / 4);
  } else if (game2PlayedCount == 2) {
    text("뭐...네가 가사 쓰는 데\n     재능이 없다는 걸 알게 돼서 다행이야", 500, 420);
    image(nextImg, width / 2, 580, nextImg.width / 3, nextImg.height / 3);
  }
  fill(255);
  textSize(120);
  textAlign(CENTER, CENTER);
  text("F U X K!  the  score  " + stage2Score, width / 2, 750);
  fill(255);
  textSize(30);
  text("")
}

function prepareStage2ToStage3_1() {
  textToTypeS2S3_1 = "하아.. 하아….\n일단은 통과…한 건가?\n(뭐가 뭔지 모르겠지만 일단 해본 유저)\n(유저는 노예 근성이 탁월하다)";
  typedTextS2S3_1 = ""; // 초기화
  charIndexS2S3_1 = 0;
  isReadyS2S3_1 = false;
}

//스테이지 2 통과 후 스테이지 3로 연결되는 화면
function stage2ToStage3_1() {
  background(0);
  tint(255, backgroundAlpha); //화면 서서히 나타남
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndexS2S3_1 < textToTypeS2S3_1.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextS2S3_1 += textToTypeS2S3_1[charIndexS2S3_1];
      charIndexS2S3_1++;
    }
  } else {
    isReadyS2S3_1 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTextS2S3_1, width / 2, 675);

  backgroundAlpha += 5; //투명도 증가
  if (backgroundAlpha > 255) {
    backgroundAlpha = 255;
  }
}

function prepareStage2ToStage3_2() {
  textToTypeS2S3_2 = "으갸가가ㅓ거ㅏㅇㄹ머ㅏ가ㅓㅇㄱ\n앎어ㅣ거ㅏ거ㅏ거댜ㅓㄱ\n이럴 순 없어!!!! 왜 통과해!! 왜 통과하냐고!!\n너 가사…! 소..솔직히…으아아아걱!!";
  typedTextS2S3_2 = ""; // 초기화
  charIndexS2S3_2 = 0;
  isReadyS2S3_2 = false;
}

function stage2ToStage3_2() {
  background(0);
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  imageMode(CENTER);
  // 이미지에 투명도 효과가 적용되지 않도록 하기
  let xOffset = sin(rockingNoelAngle) * 50;
  image(noel4Img, width / 2 + xOffset, 350, 400, 400);
  rockingNoelAngle += 0.05;

  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexS2S3_2 < textToTypeS2S3_2.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextS2S3_2 += textToTypeS2S3_2[charIndexS2S3_2];
      charIndexS2S3_2++;
    }
  } else {
    isReadyS2S3_2 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTextS2S3_2, width / 2, 675);
}

//스테이지 3 시작 화면 1
function drawStage3_1() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  textSize(60);

  imageMode(CENTER);
  //깜빡이는 효과
  blinkTimer++;
  if (blinkTimer > blinkInterval * blinkCycle) {
    fill(255, 255, 0); //노란색
    image(warningImg, width / 2, height / 2, warningImg.width / 2, warningImg.height / 2);
  } else {
    fill(0, 255, 0); //초록색
  }

  text(eventText, width / 2, height / 2 - 325); //!이벤트발생!

  if (blinkTimer > blinkInterval * blinkCycle * 2) {
    blinkCycle++;
    if (blinkCycle >= blinkDuration) {
      blinkCycle = 0;
      blinkTimer = 0; //깜빡임 반복이 끝나면 타이머 초기화
    }
  }

  //스테이지 3 설명 텍스트
  textSize(30);
  text("이세계의 노엘 갤러거가 마지막 제안을 시작합니다!", width / 2, height / 2 + 275); // 설명 텍스트
  fill(255);
  textSize(25);
  text("화 면 아\n     무 곳 이 나 눌 러\n서 시 작 해 라", width / 2 + 350, height - 400);
}

function prepareDrawStage3_2() {
  textToTypeS3_2 = "아무리 앞 스테이지들을 패스했다 해도..\n메탈을 모른다면 락스타가 아니지\n그런 의미에서 너!!!!\n메탈이나 한번 구분해 봐라!!!!!!!!!!!";
  typedTextS3_2 = ""; // 초기화
  charIndexS3_2 = 0;
  isReadyS3_2 = false;
}

//스테이지 3 시작 화면 2
function drawStage3_2() {
  imageAlpha = 0;
  imageMode(CORNER);
  image(stageBack3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(noel4Img, width / 2, 300, 440, 500);
  rectMode(CENTER);
  fill(0, 0, 0, 99);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexS3_2 < textToTypeS3_2.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextS3_2 += textToTypeS3_2[charIndexS3_2];
      charIndexS3_2++;
    }
  } else {
    isReadyS3_2 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTextS3_2, width / 2, 675);
}

//스테이지 3 시작 화면 3
function drawStage3_3() {
  imageMode(CORNER);
  image(stageBack3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(questionImg, width / 2, height / 4+50, 1500, 800);

  //"최종 스테이지를 개크게 빵빠레 울리면서 시작하시겠습니까?" 문구
  textSize(30);
  fill(255);
  textAlign(CENTER, CENTER);
  text("최종 스테이지를 개크게 빵빠레 울리면서 시작하시겠습니까?", width / 2, height / 4+50);

  // 선택지 "a"와 "b" 표시
  for (let i = 0; i < options3_1.length; i++) {
    let x = width / 2 - 600;
    let y = height / 2 + i * 80+50;
    let rectWidth = 1200;
    let rectHeight = 150;

    //선택지 버튼 네모
    imageMode(CORNER);
    image(optionImg, x, y - rectHeight / 2, rectWidth, rectHeight, 10);

    //선택지 내용
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text(options3_1[i], x + rectWidth / 2, y);
  }
}

//스테이지 3 시작 화면 4
function drawStage3_4() {
  imageMode(CORNER);
  image(stageBack3Img, 0, 0, width, height);
  fill(255);
  textAlign(CENTER, CENTER);

  //스테이지 3 제목
  imageMode(CENTER);
  image(stage3Img, width / 2, height / 4, 400, 200);

  //게임 설명
  image(infoImg, width / 2 - 25, height / 2, 1900, 300);
  fill(255);
  textSize(30);
  text("<게임 설명>\n해골바가지를 클릭한 후\n나오는 노래를 듣고 메탈의 종류를 구분해 보셈!", width / 2, height / 2); // 설명 텍스트

  //"START" 버튼 -> 다음 화면(page 12)으로 이동
  let buttonX = width / 2 + 15;
  let buttonY = 680;
  let buttonWidth = 340;
  let buttonHeight = 200;

  //버튼 네모
  imageMode(CENTER);
  image(startImg, buttonX, buttonY, buttonWidth, buttonHeight, 10);
}

let skeleton1Hovered = false;
let skeleton2Hovered = false;
let skeleton3Hovered = false;

function drawQuestion3() { //스테이지 3 게임 화면(page 14)
  imageMode(CORNER);
  image(stageBack3Img, 0, 0, width, height);
  imageMode(CENTER);
  image(questionImg, width / 2, height / 4, 1500, 800);

  //질문 텍스트
  noStroke();
  textSize(30);
  fill(255);
  textAlign(LEFT);
  text4_1 = "Q. 다음 중 어떤 해골이 "
  text4_2 = "데스메탈"
  text4_3 = "을 듣고 있지?"
  textFont(Font1);
  text(text4_1, 390, height/4);
  fill(255, 0, 0);
  stroke(255);
  strokeWeight(4);
  textFont(Font2);
  text(text4_2, 730, height/4);
  noStroke();
  fill(255);
  textFont(Font1);
  text(text4_3, 857, height/4);

  // 해골 이미지 위치 설정
  let skeleton1X = width / 2 - 420;
  let skeleton2X = width / 2 - 100;
  let skeleton3X = width / 2 + 180;
  let skeletonY = height / 2 - 130;
  let skeletonSize = 300; // 기본 해골 크기
  let scaleFactor = 1.2; // 마우스 올리면 커지는 비율

  // 각 해골에 대해 마우스가 위치하는지 확인
  skeleton1Hovered = isMouseOver(skeleton1X, skeletonY, skeletonSize);
  skeleton2Hovered = isMouseOver(skeleton2X, skeletonY, skeletonSize);
  skeleton3Hovered = isMouseOver(skeleton3X, skeletonY, skeletonSize);

  // 해골 이미지 그리기
  imageMode(CORNER);
  image(skeleton1Img, skeleton1X, skeletonY, skeletonSize * (skeleton1Hovered ? scaleFactor : 1), skeletonSize * (skeleton1Hovered ? scaleFactor : 1));
  image(skeleton2Img, skeleton2X, skeletonY, skeletonSize * (skeleton2Hovered ? scaleFactor : 1), skeletonSize * (skeleton2Hovered ? scaleFactor : 1));
  image(skeleton3Img, skeleton3X, skeletonY, skeletonSize * (skeleton3Hovered ? scaleFactor : 1), skeletonSize * (skeleton3Hovered ? scaleFactor : 1));

  // 선택지 버튼 그리기
  let buttonWidth = 300; // 버튼 너비
  let buttonHeight = 170; // 버튼 높이
  let startX = width / 2 - (buttonWidth * options3.length) / 2; // 첫 번째 버튼의 x 위치
  let startY = height / 2 + 100;

  for (let i = 0; i < options3.length; i++) {
    let x = startX + i * (buttonWidth + 20); // 각 버튼의 x 위치 (간격 20px)
    let y = startY;

    // 버튼 그리기
    fill(50); // 버튼 배경 색상
    image(optionImg, x, y, buttonWidth, buttonHeight, 10); // 버튼 그리기

    // 버튼 텍스트
    fill(255); // 텍스트 색상
    textSize(24);
    textAlign(CENTER, CENTER); // 텍스트 중앙 정렬
    text(options3[i], x + buttonWidth / 2, y + buttonHeight / 2); // 텍스트 표시
  }

  if (mouseX > 730 && mouseX < 850 && mouseY > 195 && mouseY < 225) {
    rectMode(CENTER);
    rect(mouseX + 100, mouseY - 100, 280, 160, 5); // 배경 박스
    fill(255);
    textSize(20);
    fill(0);
    textFont(Font2);
    text("솔직히 말하면\n블랙메탈과 데스메탈은\n구분하기 매우 어려움\n(설명하기 귀찮음...)\n어떻게 잘 찾아보시라", mouseX + 100, mouseY - 95);
  }
}

// 마우스가 특정 영역 안에 있는지 확인하는 함수
function isMouseOver(x, y, size) {
  return mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size;
}

function prepareResult3() {
  textToTypeR3_1 = "미천한 놈!!! 너 같은 놈은";
  typedTextR3_1 = ""; // 초기화
  charIndexR3_1 = 0;
  isReadyR3_1 = false;
  textToTypeR3_2 = "이모코어";
  typedTextR3_2 = ""; // 초기화
  charIndexR3_2 = 0;
  isReadyR3_2 = false;
  textToTypeR3_3 = "나 실컷 들으면서 살아라!! 답은 3번이었다!";
  typedTextR3_3 = ""; // 초기화
  charIndexR3_3 = 0;
  isReadyR3_3 = false;
  textToTypeR3_4 = "정답!";
  typedTextR3_4 = ""; // 초기화
  charIndexR3_4 = 0;
  isReadyR3_4 = false;
}

function drawResult3() { //스테이지 3 결과 화면 //타자기 효과 수정 필요

  imageMode(CORNER);
  image(stageBack3Img, 0, 0, width, height);
  if (questionResult3 === "right") { //3번 고름(정답)
    rectMode(CENTER);
    fill(0, 0, 0, 99);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndexR3_4 < textToTypeR3_4.length) {
      if (frameCount % typingSpeed === 0) {
        typedTextR3_4 += textToTypeR3_4[charIndexR3_4];
        charIndexR3_4++;
      }
    } else {
      isReadyR3_4 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    textSize(30);
    text(typedTextR3_4, width / 2, 675);

    imageMode(CENTER);
    image(skeleton3Img, width / 2, height / 2 + 100, 500, 500);
  } else if (questionResult3 === "wrong1") { //1번 고름(오답)
    rectMode(CENTER);
    fill(0, 0, 0, 99);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    
    if (!isReadyR3_1) {
      if (charIndexR3_1 < textToTypeR3_1.length) {
        if (frameCount % typingSpeed === 0) {
          typedTextR3_1 += textToTypeR3_1[charIndexR3_1];
          charIndexR3_1++;
        }
      } else {
        isReadyR3_1 = true; // 텍스트 1 출력 완료
      }
    }

    // 텍스트 2 출력 (텍스트 1이 끝난 후)
    if (isReadyR3_1 && !isReadyR3_2) {
      if (charIndexR3_2 < textToTypeR3_2.length) {
        if (frameCount % typingSpeed === 0) {
          typedTextR3_2 += textToTypeR3_2[charIndexR3_2];
          charIndexR3_2++;
        }
      } else {
        isReadyR3_2 = true; // 텍스트 2 출력 완료
      }
    }

    // 텍스트 3 출력 (텍스트 2가 끝난 후)
    if (isReadyR3_2 && !isReadyR3_3) {
      if (charIndexR3_3 < textToTypeR3_3.length) {
        if (frameCount % typingSpeed === 0) {
          typedTextR3_3 += textToTypeR3_3[charIndexR3_3];
          charIndexR3_3++;
        }
      } else {
        isReadyR3_3 = true; // 텍스트 3 출력 완료
      }
    }
    // 텍스트 화면 출력
    fill(255);
    textSize(30);
    textFont(Font1);
    text(typedTextR3_1, 340, 675); // 텍스트 1
    fill(255, 0, 0); 
    stroke(255);
    textFont(Font2);
    text(typedTextR3_2, 610, 675); // 텍스트 2
    fill(255);
    noStroke();
    textFont(Font1);
    text(typedTextR3_3, 980, 675); // 텍스트 3
    noStroke();

    imageMode(CENTER);
    image(skeletonFailImg, width / 2, height / 2 - 100, 840, 440);
    
    if (mouseX > 560 && mouseX < 670 && mouseY > 655 && mouseY < 700) { //이모코어 설명
      fill(245, 245, 245, 130);
      rectMode(CENTER);
      rect(mouseX + 100, mouseY - 120, 320, 180, 5); // 배경 박스
      fill(255);
      textSize(20);
      fill(0);
      textFont(Font2);
      text("<참고>\n이모코어란?\n: 기타를 중심으로 한\n감성적인 선율을\n특징으로 하는 록이다.\n이모님과는 관련없음에 주의하자.", mouseX + 100, mouseY - 125);
      fill(255, 0, 0);
    }
  } else if (questionResult3 === "wrong2") {  //2번 고름(오답)
    rectMode(CENTER);
    fill(0, 0, 0, 99);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (!isReadyR3_1) {
      if (charIndexR3_1 < textToTypeR3_1.length) {
        if (frameCount % typingSpeed === 0) {
          typedTextR3_1 += textToTypeR3_1[charIndexR3_1];
          charIndexR3_1++;
        }
      } else {
        isReadyR3_1 = true; // 텍스트 1 출력 완료
      }
    }

    // 텍스트 2 출력 (텍스트 1이 끝난 후)
    if (isReadyR3_1 && !isReadyR3_2) {
      if (charIndexR3_2 < textToTypeR3_2.length) {
        if (frameCount % typingSpeed === 0) {
          typedTextR3_2 += textToTypeR3_2[charIndexR3_2];
          charIndexR3_2++;
        }
      } else {
        isReadyR3_2 = true; // 텍스트 2 출력 완료
      }
    }

    // 텍스트 3 출력 (텍스트 2가 끝난 후)
    if (isReadyR3_2 && !isReadyR3_3) {
      if (charIndexR3_3 < textToTypeR3_3.length) {
        if (frameCount % typingSpeed === 0) {
          typedTextR3_3 += textToTypeR3_3[charIndexR3_3];
          charIndexR3_3++;
        }
      } else {
        isReadyR3_3 = true; // 텍스트 3 출력 완료
      }
    }

    // 텍스트 화면 출력
    fill(255);
    textSize(30);
    textFont(Font1);
    text(typedTextR3_1, 340, 675); // 텍스트 1
    fill(255, 0, 0); 
    stroke(255);
    textFont(Font2);
    text(typedTextR3_2, 610, 675); // 텍스트 2
    fill(255);
    noStroke();
    textFont(Font1);
    text(typedTextR3_3, 980, 675); // 텍스트 3
    noStroke();

    imageMode(CENTER);
    image(skeletonFailImg, width / 2, height / 2 - 100, 840, 440);
    
    if (mouseX > 560 && mouseX < 670 && mouseY > 655 && mouseY < 700) { //이모코어 설명
      fill(245, 245, 245, 130);
      rectMode(CENTER);
      rect(mouseX + 100, mouseY - 120, 320, 180, 5); // 배경 박스
      fill(255);
      textSize(20);
      fill(0);
      textFont(Font2);
      text("<참고>\n이모코어란?\n: 기타를 중심으로 한\n감성적인 선율을\n특징으로 하는 록이다.\n이모님과는 관련없음에 주의하자.", mouseX + 100, mouseY - 125);
      fill(255, 0, 0);
    }
  }
}

// 다음 스테이지 시작 전 화면 버튼
function drawNextStageButton() {
  imageMode(CORNER);
  image(goButtonImg, width / 2 + 450, height - 150, 250, 100);
}

//스테이지 3 이후, 엔딩 시작되는 장면으로 넘어가는 버튼(#46으로 가는 버튼)
function prepareStage3Success1() {
  textToTypes3s1 = "유저님의 락스피릿에 꽤꼬닥했습니다용...";
  typedTexts3s1 = ""; // 초기화
  charIndexs3s1 = 0;
  isReadys3s1 = false;
}

function stage3Success1() {  //스테이지 3 성공 후 엔딩으로 연결되는 화면 1
  imageMode(CORNER);
  image(stageBack3Img, 0, 0, width, height);
  rectMode(CENTER);
  rectMode(CENTER);
  fill(0, 0, 0, 99);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexs3s1 < textToTypes3s1.length) {
    if (frameCount % typingSpeed === 0) {
      typedTexts3s1 += textToTypes3s1[charIndexs3s1];
      charIndexs3s1++;
    }
  } else {
    isReadys3s1 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTexts3s1, width / 2, 675);

  imageMode(CENTER);
  image(skeletonSuccessImg, width / 2, height / 2 - 50, 480, 300);
}

function prepareStage3Success2() {
  textToTypes3s2 = "해치운 건가...?";
  typedTexts3s2 = ""; // 초기화
  charIndexs3s2 = 0;
  isReadys3s2 = false;
}

function stage3Success2() {
  background(0);
  imageMode(CENTER);
  image(userImg, width / 2, height / 2 + 50, 600, 600);
  rectMode(CENTER);
  fill(0, 0, 0, 99);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexs3s2 < textToTypes3s2.length) {
    if (frameCount % typingSpeed === 0) {
      typedTexts3s2 += textToTypes3s2[charIndexs3s2];
      charIndexs3s2++;
    }
  } else {
    isReadys3s2 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTexts3s2, width / 2, 675);
}

function stageFail3() {
  imageMode(CORNER);
  image(back3Img, 0, 0, width, height);
  fill(255);
  textSize(30);
  text("목숨 -1, 엔딩으로 ", width / 2, height / 2 + 280);
}

function prepareStage3ToEnding() {
  textToTypes3e = "이 사악한 인셀 새끼!!!";
  typedTexts3e = ""; // 초기화
  charIndexs3e = 0;
  isReadys3e = false;
}

//스테이지 3 통과 후 엔딩으로 연결
function stage3ToEnding() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);

  // 다른 게임 요소들 그리기 (질문, 버튼 등)
  imageMode(CENTER);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexs3e < textToTypes3e.length) {
    if (frameCount % typingSpeed === 0) {
      typedTexts3e += textToTypes3e[charIndexs3e];
      charIndexs3e++;
    }
  } else {
    isReadys3e = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTexts3e, width / 2, 675);

  // 화면 밝아지는 효과
  fill(255, fadeAlpha3); // 흰색으로 덮음, 투명도 조정
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height); // 화면 전체 덮기

  // 투명도 감소
  if (fadeAlpha3 > 0) {
    fadeAlpha3 -= fadeSpeed3;
  }
}

// 낙엽 생성 함수
function createLeaves() {
  if (pagefive = 1) {  // pagefive가 1일 때만 낙엽이 생성됨
    if (frameCount % 10 === 0) {  // 10프레임마다 낙엽을 추가
      let leafImg = random([leaf1Img, leaf2Img, leaf3Img, leaf4Img]);  // 랜덤으로 낙엽 이미지 선택
      let leaf = {
        img: leafImg,
        x: random(width),  // 화면의 랜덤 위치에서 시작
        y: -50,  // 화면 밖에서 시작
        speedX: random(-10, 10),  // 좌우로 이동하는 속도
        speedY: random(2, 5),  // 떨어지는 속도
        size: random(100, 200),  // 크기 랜덤
      };
      leaves.push(leaf);  // 낙엽 배열에 추가
    }
  }
}

// 낙엽 업데이트
function updateLeaves() {
  for (let i = leaves.length - 1; i >= 0; i--) {
    let leaf = leaves[i];

    // 낙엽 이동
    leaf.x += leaf.speedX;
    leaf.y += leaf.speedY;

    // 화면 밖으로 나가면 배열에서 삭제
    if (leaf.y > height || leaf.x < 0 || leaf.x > width) {
      leaves.splice(i, 1);
    }
  }
}

// 낙엽 그리기
function displayLeaves() {
  for (let leaf of leaves) {
    image(leaf.img, leaf.x, leaf.y, leaf.size, leaf.size);  // 낙엽 이미지 그리기
  }
}

// 페이지 변경 함수 (예: 페이지가 변경될 때 호출)
function nextPage() {
  if (pagefive === 1) {
    leaves = [];  // pagefive가 1에서 다른 페이지로 이동할 때만 낙엽을 초기화
  }
  pagefive++;  // 페이지 증가
}

function drawStage4Fail_1() {
  textToTypes4f1 = "정~말 죄송합니다만 유저님ㅠㅠ\n님 같은 갓반인은\n저희 게임을 더 이어갈 수 없답니당...";
  typedTexts4f1 = ""; // 초기화
  charIndexs4f1 = 0;
  isReadys4f1 = false;
}

function stage4Fail_1() { //실패 시 권혁수 1
  background(0);
  fill(200);
  imageMode(CENTER);
  image(hyuksoo1Img, width / 2, 300, hyuksoo1Img.width * 0.7, hyuksoo1Img.height * 0.7-63);
  rectMode(CENTER);
  fill(0, 0, 0, 99);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexs4f1 < textToTypes4f1.length) {
    if (frameCount % typingSpeed === 0) {
      typedTexts4f1 += textToTypes4f1[charIndexs4f1];
      charIndexs4f1++;
    }
  } else {
    isReadys4f1 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTexts4f1, width / 2, 675);

  textSize(20);
  text("(안녕하세요옹 유저님~~\n저는 이세계의 권혁수입니당~)", 350, 250);
}

function drawStage4Fail_2() {
  textToTypes4f2 = "문의는 인스타로 부탁드리구영\n그래도 이왕 시작하셨으니까\n추억은 남겨가시길 바랄게요!! 자아 하나 두울...";
  typedTexts4f2 = ""; // 초기화
  charIndexs4f2 = 0;
  isReadys4f2 = false;
}

function stage4Fail_2() { //실패 시 권혁수 2
  background(0);
  fill(200);
  imageMode(CENTER);
  image(hyuksoo2Img, width / 2, 300, hyuksoo2Img.width * 0.7, hyuksoo2Img.height * 0.7-63);
  rectMode(CENTER);
  fill(0, 0, 0, 99);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndexs4f2 < textToTypes4f2.length) {
    if (frameCount % typingSpeed === 0) {
      typedTexts4f2 += textToTypes4f2[charIndexs4f2];
      charIndexs4f2++;
    }
  } else {
    isReadys4f2 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTexts4f2, width / 2, 675);
}

function drawStage4_1() {
  localFrameCount = 0; //갱신
  background(0);
  fill(255);
  textSize(32);
  imageMode(CENTER);
  image(fuckposeImg, width / 2, height / 2, 800, 600);

  setTimeout(() => {
    pagefour = 2; // 엔딩 활성화
    pageone = null;
    pagetwo = null;
    pagethree = null;

  }, 2000); //2초 뒤에 인생네컷 등장
}

function drawStage4_2() { //인생네컷 촬영 화면
  imageMode(CORNER);

  if (currentFreezeIndex === 0 && localFrameCount === 0) {//목숨 숨기기
    drawLivesState = false;
  }

  if (localFrameCount === 0) {
    startFrame4 = frameCount;
  }

  if ( //첫번째 캠은 2초, 나머지 캠은 5초 여유로 캡쳐
    frameCount - startFrame4 > (currentFreezeIndex === 0
      ? 120
      : 120 + (300 * currentFreezeIndex)) &&
    currentFreezeIndex < cams.length
  ) {
    AutoFreeze();
    console.log("currentFreezeIndex:", currentFreezeIndex);
  }

  for (let i = 0; i < cams.length; i++) {
    imageMode(CORNER);
    let col = i % 2; // 열 (가로 위치)
    let row = floor(i / 2); // 행 (세로 위치)
    let cornerX = (col + 1) * 600 - 40; // x좌표 (imagemode : corner)
    let cornerY = 30 + row * 410; // y좌표

    if (i < frozenFrames.length) { // 정지된 화면이 있으면 그것을 그리기
      push();
      translate(cornerX, cornerY);
      scale(-1, 1); // 좌우 반전
      image(frozenFrames[i], 0, 0, photoWidth, photoHeight);
      pop();
    } else { // 정지되지 않은 캠을 실시간으로 그리기
      push();
      translate(cornerX, cornerY);
      scale(-1, 1); // 좌우 반전
      image(cams[i], 0, 0, photoWidth, photoHeight);
      pop();
    }
  }

  imageMode(CORNER); //여기부터 각종 애셋을 넣으시오
  if (userLife > 0) {
    image(fourCut_rockstar, 0, 0, width, height);
  } else {
    image(fourCut_muggle, 0, 0, width, height);
  }

  qrcode.show();

  fill(0);
  textSize(24);
  textAlign(LEFT, TOP);
  textSize(15);

  if (localFrameCount >= 2060) { //네컷사진 다 찍으면
    if (userLife > 0) { //살았을 경우
      text('메탈코어 사진을 다운받아 가라!!\n사진을 꾹 누르면 저장된다!', 1170, 350);
    } else { //죽었을 경우
      text('이거라도\n가져가세용♥♥\n사진을 꾹 눌러 저장하면 되어용~ >_<', 1180, 350);
    }
    image(replayButtonImg, 1170, 500, 260, 130);
  }

  fill(255, 0, 0);
  stroke(255);
  if (userLife > 0) { //살았을 경우 멘트
    if (currentFreezeIndex === 1) {
      startCountdownStage4();
      image(rockstarBubbleImg, 1130, 30, 360, 360);
      textSize(80);
      text(countdownStage4, 1260, 210);
      textSize(28);
      text('더 젠지하게!\n혀 내밀고!\n이태원감성으로!\n더 빡세게!!!!!', 1200, 70);
    } else if (currentFreezeIndex === 2) {
      startCountdownStage4();
      image(rockstarBubbleImg, 1130, 30, 360, 360);
      textSize(80);
      text(countdownStage4, 1260, 210);
      textSize(28);
      text('등돌리고 있다가!\n카메라 돌아보면서!', 1200, 70);
    } else if (currentFreezeIndex === 3) {
      startCountdownStage4();
      image(rockstarBubbleImg, 1130, 30, 360, 360);
      textSize(80);
      text(countdownStage4, 1260, 210);
      textSize(28);
      text('닥치고 웃어!!!!\n옆에 있는 놈 때려!!\n머리 잡아뜯어!!\n그게 ROCK이야!!!!!', 1200, 70);
    }

    textAlign(CENTER); //가사 표시
    textSize(32);
    stroke(255);
    strokeWeight(4);
    fill(0);
    text(
      wordDisplay.capturedWords[0] + wordDisplay.particle1 + " " + wordDisplay.capturedWords[1] + wordDisplay.particle2 + "" + wordDisplay.capturedWords[2] + "할까?"
      , 600, 18
    );

  } else { //죽었을 경우 멘트
    textAlign(LEFT, TOP);
    fill(213, 43, 255)
    stroke(255);
    if (currentFreezeIndex === 0) {
      image(muggleBubbleImg, 1130, 30, 360, 360);
      textSize(28);
      text('셋!!', 1200, 150);
    } else if (currentFreezeIndex === 1) {
      startCountdownStage4();
      image(muggleBubbleImg, 1130, 30, 360, 360);
      textSize(80);
      text(countdownStage4, 1300, 200);
      textSize(28);
      text('어머 어디가세요~\n다 찍고 가세요~', 1200, 100);
    } else if (currentFreezeIndex === 2) {
      startCountdownStage4();
      image(muggleBubbleImg, 1130, 30, 360, 360);
      textSize(80);
      text(countdownStage4, 1300, 200);
      textSize(28);
      text('더 평범하게~!\n더 재미없게~~', 1200, 100);
    } else if (currentFreezeIndex === 3) {
      startCountdownStage4();
      image(muggleBubbleImg, 1130, 30, 360, 360);
      textSize(80);
      text(countdownStage4, 1300, 200);
      textSize(28);
      text('이래서 갓반인들은\n안 된다니까~♥', 1200, 100);
    }
    textAlign(CENTER); //가사 표시
    textSize(32);
    stroke(242, 242, 242);
    strokeWeight(2);
    fill(255, 0, 162);
    text(
      wordDisplay.capturedWords[0] + wordDisplay.particle1 + " " + wordDisplay.capturedWords[1] + wordDisplay.particle2 + "" + wordDisplay.capturedWords[2] + "할까?"
      , 600, 18
    );
  }

  localFrameCount++; //프레임 카운트
}

function AutoFreeze() {
  imageMode(CORNER);
  if (currentFreezeIndex < cams.length) {
    let cam = cams[currentFreezeIndex];
    cam.loadPixels(); // 픽셀 데이터 로드

    // 열(col)과 행(row) 계산
    let col = currentFreezeIndex % 2; // 열
    let row = floor(currentFreezeIndex / 2); // 행
    let cornerX = (col + 1) * 600 - 40; // x좌표 (imagemode : corner)
    let cornerY = 30 + row * 410; // y좌표

    // 현재 캠의 프레임을 캡처하여 저장
    let frozenFrame = createImage(photoWidth, photoHeight);
    frozenFrame.copy(
      cam,
      cornerX, // 좌상단 x
      cornerY, // 좌상단 y
      photoWidth,
      photoHeight,
      0,
      0,
      photoWidth,
      photoHeight
    );
    frozenFrames.push(frozenFrame);

    console.log(`캠 ${currentFreezeIndex + 1} 캡처 완료`);
    console.log(`Frozen Frame ${currentFreezeIndex}:`, frozenFrame.width, "x", frozenFrame.height);
    currentFreezeIndex++;

  }
  // 모든 캠이 정지된 경우 처리
  if (currentFreezeIndex === cams.length && frozenFrames.length === cams.length) {
    if (!screenshotTaken) {
      console.log("모든 캠 정지 완료. 전체 스크린샷 생성 중...");
      if (userLife > 0) { //프레임 덧씌우기
        image(fourCut_rockstar, 0, 0, width, height);
      } else {
        image(fourCut_muggle, 0, 0, width, height);
      }
    }
    textAlign(CENTER); //가사 표시
    if (userLife > 0) {
      stroke(255);
      strokeWeight(4);
      fill(0);
    } else {
      stroke(242);
      strokeWeight(2);
      fill(255, 0, 162);
    }
    text(
      wordDisplay.capturedWords[0] + wordDisplay.particle1 + " " + wordDisplay.capturedWords[1] + wordDisplay.particle2 + "" + wordDisplay.capturedWords[2] + "할까?"
      , 600, 39
    );
    let screenshot = get(0, 0, width, height); //스크린샷
    screenshotTaken = true;
    uploadImageToSupabase(screenshot.canvas.toDataURL());
  }
}

function startCountdownStage4() { //인생네컷 카운트다운
  if (isCountdownRunningStage4) return; // 이미 실행 중이면 중단
  isCountdownRunningStage4 = true; // 카운트다운 시작 상태 설정

  clearInterval(countdownIntervalStage4);
  countdownStage4 = 5;
  countdownIntervalStage4 = setInterval(() => {
    if (countdownStage4 > 1) {
      countdownStage4--;
    } else {
      clearInterval(countdownIntervalStage4);
      isCountdownRunningStage4 = false; //초기화
    }
  }, 1000);
}

async function uploadImageToSupabase(base64Image) { //네컷사진 업로드
  try {
    imageName = `image${year()}${month()}${day()}_${hour()}${minute()}${second()}.png`;
    const imageFile = dataURLtoFile(base64Image, imageName);
    const { data, error } = await supabase.storage
      .from('test') // Supabase 버킷 이름
      .upload(`public/${imageName}`, imageFile, {
        contentType: 'image/png',
        cacheControl: '3600',
        upsert: true, //덮어쓰기 허용
      });

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {
      console.log('Image uploaded successfully:', data);
      generateQRCode();
      console.log(document.getElementById("qrcode"));
    }
  } catch (err) {
    console.error('Unexpected error during upload:', err.message);
  }
}

function generateQRCode() { //qr코드 생성
  const timestamp = new Date().getTime(); //캐시 방지 타임스탬프
  const imageUrl = `https://eoltmcvmzrecfwicwuxh.supabase.co/storage/v1/object/public/${bucketName}/public/${imageName}?t=${timestamp}`;
  qrcode.html(''); //기존 코드 초기화
  new QRCode(document.getElementById("qrcode"), imageUrl); //생성
  qrcode.show(); // 표시
  qrVisible = true;
}

function dataURLtoFile(dataurl, fileName) { //사진 데이터를 파일로 변환
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

function preparedrawOutro_1() {
  textToTypeoutro_1 = "그냥 소리질러봤다... 그게 재밌거든\n(...)";
  typedTextoutro_1 = ""; // 초기화
  charIndexoutro_1 = 0;
  isReadyoutro_1 = false;
}

function drawOutro_1() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  imageMode(CENTER);
  image(noelSideImg, width / 2, height / 2 + 100, 1400, 700);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndexoutro_1 < textToTypeoutro_1.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_1 += textToTypeoutro_1[charIndexoutro_1];
      charIndexoutro_1++;
    }
  } else {
    isReadyoutro_1 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  text(typedTextoutro_1, width / 2, 675);

  createLeaves();  // 낙엽 생성
  updateLeaves();  // 낙엽 업데이트 (위치 이동)
  displayLeaves();  // 낙엽 그리기
}

function drawOutro_2() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  image(noelCartoonImg, 0, 0, width, height);
}

function drawOutro_2() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  image(noelCartoonImg, 0, 0, width, height);
  imageMode(CENTER);
}

function preparedrawOutro_3() {
  textToTypeoutro_3 = "사실은 말이다...\n난 니가 재능을 보여줄 거라고 믿고 있었어";
  typedTextoutro_3 = ""; // 초기화
  charIndexoutro_3 = 0;
  isReadyoutro_3 = false;
}

function drawOutro_3() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  image(noelCartoonImg, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  if (charIndexoutro_3 < textToTypeoutro_3.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_3 += textToTypeoutro_3[charIndexoutro_3];
      charIndexoutro_3++;
    }
  } else {
    isReadyoutro_3 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedTextoutro_3, width / 2, 675);

  imageMode(CORNER);
  textSize(32);
  text("갑자기 잘생겨진\n이세계 노엘갤러거\n(순정만화같음ㅎ.ㅎ)", 300, height / 2);
}

function drawOutro_4() { //여기는 타자기 효과 없는지? -> 앞 장면에서 타자기 효과로 나왔던 글자가 계속 떠 있는 상태임미다다
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  image(noelCartoonImg, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);
  fill(255);
  textSize(30);
  text("사실은 말이다...\n난 니가 재능을 보여줄 거라고 믿고 있었어", width / 2, 675);
  imageMode(CORNER);
  fill(255, 0, 0);
  stroke(255);
  strokeWeight(2);
  textSize(42);
  text("갑자기???", 1240, 700); //위치 변경
  noStroke();
  textSize(20);
  text("click!", 1240, 740);
}

function preparedrawOutro_5() {
  textToTypeoutro_5 = "예전부터 줄곧..\n내 마이크를 넘겨줄 단 한 명의 락스피릿을 기다리고 있었지...\n왜냐면 난 은퇴하고 싶거든";
  typedTextoutro_5 = ""; // 초기화
  charIndexoutro_5 = 0;
  isReadyoutro_5 = false;
}

function drawOutro_5() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexoutro_5 < textToTypeoutro_5.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_5 += textToTypeoutro_5[charIndexoutro_5];
      charIndexoutro_5++;
    }
  } else {
    isReadyoutro_5 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedTextoutro_5, width / 2, 675);
}

function preparedrawOutro_6() {
  textToTypeoutro_6 = "우리는 아마 만날 운명이었던 것 같다, 유저.\n내 영광의 시절이...\n현실세계의 너에게도 똑같이 찾아오게 될 거야";
  typedTextoutro_6 = ""; // 초기화
  charIndexoutro_6 = 0;
  isReadyoutro_6 = false;
}

function drawOutro_6() {
  imageMode(CORNER);
  image(stageImg, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexoutro_6 < textToTypeoutro_6.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_6 += textToTypeoutro_6[charIndexoutro_6];
      charIndexoutro_6++;
    }
  } else {
    isReadyoutro_6 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedTextoutro_6, width / 2, 675);
}

function preparedrawOutro_7() {
  textToTypeoutro_7 = "이 마이크만 간직한다면 말이지..";
  typedTextoutro_7 = ""; // 초기화
  charIndexoutro_7 = 0;
  isReadyoutro_7 = false;
}

function drawOutro_7() {
  imageMode(CORNER);
  image(stageImg, 0, 0, width, height);
  imageMode(CENTER);
  image(micImg, width / 2, height / 2, micImg.width * 0.9, micImg.height * 0.9);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexoutro_7 < textToTypeoutro_7.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_7 += textToTypeoutro_7[charIndexoutro_7];
      charIndexoutro_7++;
    }
  } else {
    isReadyoutro_7 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedTextoutro_7, width / 2, 675);
}

function preparedrawOutro_8() {
  textToTypeoutro_8 = "그리고..\n차차 성장하던 너를 보며 꼭 해 주고 싶던 말이...";
  typedTextoutro_8 = ""; // 초기화
  charIndexoutro_8 = 0;
  isReadyoutro_8 = false;
}

function drawOutro_8() {
  imageMode(CORNER);
  image(memoryImg, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexoutro_8 < textToTypeoutro_8.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_8 += textToTypeoutro_8[charIndexoutro_8];
      charIndexoutro_8++;
    }
  } else {
    isReadyoutro_8 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedTextoutro_8, width / 2, 675);

  if (fadeAlpha5 < 255) {
    fadeAlpha5 += fadeSpeed5; // 알파값 증가
  }
  rectMode(CORNER);
  fill(0, fadeAlpha5); // 검은색에 알파값 적용
  rect(0, 0, windowWidth, windowHeight); // 화면 전체 덮기

  if (fadeAlpha5 > 220) {
    outro1Bgm.stop();
    truckCrashBgm.play();
    pagefive = 9;
  }
}

function preparedrawOutro_9() {
  textToTypeoutro_9 = "없..없어ㅎ 잘 가라 ㅂㅂ";
  typedTextoutro_9 = ""; // 초기화
  charIndexoutro_9 = 0;
  isReadyoutro_9 = false;
}

// 트럭이 캐릭터를 치는 애니메이션 함수
function drawOutro_9() {
  background(220); // 배경 색상

  // 배경 이미지
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);

  // 트럭 이동
  if (!isHit) {
    truckX2 += truckSpeed2;
  }

  // 트럭 그리기
  imageMode(CENTER);
  image(truckImg, truckX2, truckY2, truckWidth2, truckHeight2);

  // 충돌 감지
  if (
    truckX2 + truckWidth2 / 2 > 1100 && // 트럭 오른쪽 끝 > 캐릭터 왼쪽
    truckX2 - truckWidth2 / 2 < 1300 && // 트럭 왼쪽 끝 < 캐릭터 오른쪽
    truckY2 + truckHeight2 / 2 > userY - userHeight / 2 && // 트럭 아래쪽 끝 > 캐릭터 위쪽
    truckY2 - truckHeight2 / 2 < userY + userHeight / 2 // 트럭 위쪽 끝 < 캐릭터 아래쪽
  ) {
    isHit = true; // 충돌 발생
  }

  // 캐릭터 그리기
  image(userImg, userX, userY + 20, userImg.width / 2, userImg.height / 2); // 캐릭터 이미지

  // 애니메이션 종료 조건
  if (isHit) {
    imageMode(CORNER);
    image(skeletonFailImg, 640, 200, 600, 300);
    rectMode(CENTER);
    fill(0, 0, 0, 98);
    rect(width / 2, height / 2 + 300, width, 300);
    fill(0);
    rect(width / 2, height / 2 + 150, width, 10);
    if (charIndexoutro_9 < textToTypeoutro_9.length) {
      if (frameCount % typingSpeed === 0) {
        typedTextoutro_9 += textToTypeoutro_9[charIndexoutro_9];
        charIndexoutro_9++;
      }
    } else {
      isReadyoutro_9 = true; // 텍스트가 모두 출력되면 준비 완료
    }
    fill(255);
    textSize(30);
    text(typedTextoutro_9, width / 2, 675);
  }
}

function preparedrawOutro_10() {
  textToTypeoutro_10 = "네??\n(번쩍)\n뭐... 뭐지...?";
  typedTextoutro_10 = ""; // 초기화
  charIndexoutro_10 = 0;
  isReadyoutro_10 = false;
}

function drawOutro_10() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);
  rectMode(CENTER);
  fill(0, 0, 0, 98);
  rect(width / 2, height / 2 + 300, width, 300);
  fill(0);
  rect(width / 2, height / 2 + 150, width, 10);

  if (charIndexoutro_10 < textToTypeoutro_10.length) {
    if (frameCount % typingSpeed === 0) {
      typedTextoutro_10 += textToTypeoutro_10[charIndexoutro_10];
      charIndexoutro_10++;
    }
  } else {
    isReadyoutro_10 = true; // 텍스트가 모두 출력되면 준비 완료
  }
  fill(255);
  textSize(30);
  text(typedTextoutro_10, width / 2, 675);

  // 화면 밝아지는 효과
  fill(255, fadeAlpha3); // 흰색으로 덮음, 투명도 조정
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height); // 화면 전체 덮기

  // 투명도 감소
  if (fadeAlpha3 > 0) {
    fadeAlpha3 -= fadeSpeed3;
  }
}

function drawOutro_11() {
  imageMode(CORNER);
  image(back2Img, 0, 0, width, height);

  if (fadeAlpha5_2 < 255) {
    fadeAlpha5_2 += fadeSpeed5_2; // 알파값 증가
  }
  fill(0, fadeAlpha5_2); // 검은색에 알파값 적용
  rect(0, 0, windowWidth, windowHeight); // 화면 전체 덮기

  if (fadeAlpha5_2 > 240) {
    playBackgroundMusic(outro2Bgm);
    pagefive = 12;
  }
}

function drawOutro_12() {
  imageMode(CORNER);
  image(endingVideo, 0, 0, width, height);
  fill(255);
  textSize(30);
  text("...지금도 솔직히, 그날 겪은 일을 제대로 설명하긴 힘들다\n그 슈퍼마초 같던 아저씨는 말했었지\n진정한 락스타는 길게 설명하지 않는 법이라고", width / 2, 675);
}

function drawOutro_13() {
  background(0);
  imageMode(CORNER);
  image(endingVideo, 0, 0, width, height);
  imageMode(CENTER);
  image(micCartoonImg, width / 2, height / 2, width - 50, height);
  fill(255);
  textSize(30);
  stroke(0);
  strokeWeight(3);
  text("그래, 나도 그래서 더 이상 설명하지 않으려고 한다\n다만 내가 말할 수 있는 건\n지금 그의 마이크는 내 손 안에 있고", width / 2, 675);
}

function drawOutro_14() {
  imageMode(CORNER);
  image(endingVideo, 0, 0, width, height);
  imageMode(CENTER);
  image(rockstarCartoonImg, width / 2, height / 2, width - 50, height);
  fill(255);
  textSize(30);
  stroke(0);
  strokeWeight(3);
  text("나는 여전히\n락스타 호소인이라는 것", width / 2, 675);
}

function drawOutro_15() {
  imageMode(CORNER);
  image(endingVideo, 0, 0, width, height);
  imageMode(CENTER);
  image(rockstarCartoonImg, width / 2, height / 2, width - 50, height);
  fill(255);
  textSize(80);
  stroke(0);
  strokeWeight(3);
  text("근데 뭐 어때", width / 2, 645);
  if (frameCount > 120) {
    redAlpha = constrain(redAlpha + 5, 0, 150); // 투명도 점진적 증가
    fill(255, 0, 0, redAlpha); // 빨간색 필터
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, height);
  }
}

function drawOutro_16() {
  imageMode(CORNER);
  image(back0Img, 0, 0, width, height);
  imageMode(CENTER);
  image(rockstarCartoonImg, width / 2, height / 2, width - 50, height);
  fill(255, 0, 0, 150); // 빨간색 필터
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);
  fill(255);
  textSize(80);
  stroke(0);
  strokeWeight(3);
  text("메탈 하는 놈들은\n소리만 꽥꽥 지르면서\n예술이라 하는데", width / 2, height / 2 + 125);
}

function drawOutro_17() {
  imageMode(CORNER);
  image(back0Img, 0, 0, width, height);
  imageMode(CENTER);
  image(rockstarCartoonImg, width / 2, height / 2, width - 50, height);
  image(mainLogo, width / 2, height / 2, 1400, 700);
}

function drawOutro_18() {
  imageMode(CORNER);
  image(back0Img, 0, 0, width, height);
  if (frameCount > 120) {
    blackAlpha = constrain(blackAlpha + 5, 0, 255); // 투명도 점진적 증가
    fill(0, blackAlpha); // 빨간색 필터
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, height);
    imageMode(CENTER);
    image(ending1Img, width / 2, height / 2, 1400, 700); //you are born to be a fucking rockstar
  }
}

function drawOutro_19() {
  imageMode(CORNER);
  image(back0Img, 0, 0, width, height);
  fill(0, 255); // 검은색 필터
  noStroke();
  rectMode(CORNER);
  rect(0, 0, width, height);
  imageMode(CENTER);
  image(ending2Img, width / 2, height / 2, 1400, 700);  //say no goodbye
}

//화면 전환
function mousePressed() {
  if (clickSound.isLoaded()) {
    clickSound.play();
  }
  if (pagezero === 0) {
    if (mouseX > width / 2 - 200 && mouseX < width / 2 + 100 && mouseY > height * 0.4 - 100 && mouseY < height * 0.4 + 100) {
      playBackgroundMusic(openingBgm);
      pagezero = 1;
    } else if (mouseX > width / 2 - 200 && mouseX < width / 2 + 200 && mouseY > height * 0.7 - 100 && mouseY < height * 0.7 + 100) {
      startDescription = true;
    } else {
      startDescription = false;
    }
  } else if (pagezero === 1) {
    if (frameCount > 270) {
      if (mouseX > width / 2 - gamePlayButton.width / 8 && //버튼 눌렀을 때
        mouseX < width / 2 + gamePlayButton.width / 8 &&
        mouseY > 580 - gamePlayButton.height / 8 &&
        mouseY < 580 + gamePlayButton.height / 8) {
        pagezero = 2;
      }
    } else {
      pagezero == 99; //클릭 안되도록
    }
  } else if (pagezero === 2) {
    localFrameCount = 0; //초기화
    pagezero = 3;
  } else if (pagezero === 3) {
    pagezero = 4;
  } else if (pagezero === 4) {
    openingBgm.stop();
    playBackgroundMusic(walkingBgm);
    pagezero = 5;
    prepareStage0_5();
  } else if (pagezero === 5&&isReady0_5) {
    pagezero = 6;
    prepareStage0_6();
  } else if (pagezero === 6&&isReady0_6) {
    pagezero = 7;
    prepareStage0_7();
  } else if (pagezero === 7&&(isReady0_7_1&&isReady0_7_2&&isReady0_7_3&&isReady0_7_4)) {
    walkingBgm.stop();
    if (mouseX > 405 && mouseX < 530 && mouseY > 625 && mouseY < 650) {
      pagezero = 7;
    } else {
      prepareStage0_8();
      pagezero = 8;
    }
  } else if (pagezero === 8&& isReady0_8) {
    warningBgm.play();
    pagezero = 9;
    prepareStage0_9();
  } else if (pagezero === 9&& isReady0_9_1&&isReady0_9_2&&isReady0_9_3) {
    if (mouseX > 490 && mouseX < 570 && mouseY > 620 && mouseY < 680) {
      pagezero = 9;
    } else {
      warningBgm.play();
      pagezero = 10;
    }
  } else if (pagezero === 10) {
    awareBgm.loop();
    pagezero = 11;
  } else if (pagezero === 11) {
    if (charIndex0 === message0.length && charIndex0_1 === message0_1.length) { //글자 다 나타나야 클릭 가능
      console.log("모든 텍스트가 표시되었습니다. 다음 장면으로 이동.");
      awareBgm.stop();
      pagezero = 12;
      truckSuspenseBgm.play();
    }
  } else if (pagezero === 12) {
    truckSuspenseBgm.stop();
    countdownBgm.play();
    pagezero = 12.5;
    countdown = 3; //카운트다운 초기화
    clearInterval(countdownInterval); //기존의 카운트다운 타이머 종료
    countdownInterval = setInterval(() => {
      if (countdown > 1) {
        countdown--;
      }
    }, 1000); //새로운 타이머 시작
    setTimeout(() => {
      countdownBgm.stop();
      pagezero = 13;
      prepareStage0_13();
      localFrameCount = 0;
      playBackgroundMusic(truckCrashBgm);
    }, 3000);
  } else if (pagezero === 15) {
    if (mouseX > width / 2 + 250 - 220 && mouseX < width / 2 + 250 + 220 && mouseY > height / 2 - 250 && mouseY < height / 2 + 250) {
      pagezero = 16;
      prepareStage0_16();
    }
  } else if (pagezero === 16 && isReady0_16) {
    localFrameCount = 0; //초기화
    pagezero = 17;
  } else if (pagezero === 17) {
    if (alpha0_17 > 240) {
      invitationBgm.stop();
      userOpenEyeBgm.play();
      pagezero = 18;
      prepareStage0_18();
    }
  } else if (pagezero === 18 && isReady0_18) {
    userOpenEyeBgm.stop();
    textStage0_18 += 1; //텍스트만 바뀜
    playBackgroundMusic(walkingBgm);
    pagezero = 19;
  } else if (pagezero === 19) {
    walkingBgm.stop();
    playBackgroundMusic(noelBgm);
    pagezero = 20;
    prepareStage0_20();
  } else if (pagezero === 20 && isReady0_20) {
    pagezero = 21;
    prepareStage0_21();
  } else if (pagezero === 21 && isReady0_21) {
    if (localFrameCount > 200) {
      pagezero = 22;
      prepareStage0_22();
    }
  } else if (pagezero === 22 && isReady0_22) {
    playBackgroundMusic(fillBlankBgm);
    pagezero = 23;
    prepareStage0_23();
  } else if (pagezero === 23 && isReady0_23) {
    pagezero = 24;
    prepareStage0_24();
  } else if (pagezero === 24 && isReady0_24) {
    breakingBgm.play();
    fillBlankBgm.stop();
    triggerBreakingEffect();
    pagezero = 99; //클릭 방지
    prepareStage0_25();
  } else if (pagezero === 25 && isReady0_25) {
    playBackgroundMusic(noExplainBgm);
    pagezero = 26;
    prepareStage0_26();
  } else if (pagezero === 26 && isReady0_26) {
    textStage0_26 += 1; //텍스트만 바뀜
    if (textStage0_26 == 2) {
      pagezero = null;
      drawLivesState = true;
      pageone = 1;
    }
  } else if (pageone === 1) {
    for (let i = 0; i < 2; i++) { //선택지 처리
      let x = width / 2 + 15; // 버튼 위치
      let y = 680;
      let rectWidth = 340;
      let rectHeight = 50;

      if (mouseX > width / 2 + 15 - 340 && mouseX < width / 2 + 15 + 340 && mouseY > 680 - 100 && mouseY < 680 + 100) {
        noExplainBgm.stop();
        countdownBgm.play();
        pageone = 2;
        countdown = 3; //카운트다운 초기화
        clearInterval(countdownInterval); //기존의 카운트다운 타이머 종료
        countdownInterval = setInterval(() => {
          if (countdown > 1) {
            countdown--;
          }
        }, 1000); //새로운 타이머 시작
        setTimeout(() => {
          countdownBgm.stop();
          playBackgroundMusic(stage1PlayBgm);
          pageone = 3;
        }, 3000);
      }
    }
  } else if (pageone === 3 && !questionAnswered1_1) {
    for (let i = 0; i < options1_1.length; i++) {
      let x = width / 2 - 200;
      let y = height / 2 + i * 100;
      let rectWidth = 400;
      let rectHeight = 150;

      if (mouseX > x && mouseX < x + rectWidth && mouseY > y - rectHeight / 2 && mouseY < y + rectHeight / 2) {
        questionAnswered1_1 = true;

        //스테이지 1 정답 판단
        if (i === correctAnswer1_1) {
          questionResult1_1 = "right";
        } else if (i === 0) {
          questionResult1_1 = "wrong1";
        } else if (i === 2) {
          questionResult1_1 = "wrong2";
        }
        prepareDrawResult1_1();
        setTimeout(() => {
          pageone = 4;
        }, 1000);
      }
    }
  } else if (pageone === 4 && (isReady1_1_1|| isReady1_1_2 || isReady1_1_3)) {
    //정답 시 다음 화면으로 넘어가기
    if (questionResult1_1 === "right") { //정답
      pageone = 9;
      background(0); // 이전 화면 초기화
      //오답 시 오답 화면으로 넘어가기
    } else {
      userLife--;
      pageone = 8;
      background(0);
    } // 이전 화면 초기화
  } else if (pageone === 5 && isReady1_s_1) {
    drawLivesState = false;
    pageone = 6;
    prepareStage1Success_2()
    background(0); // 이전 화면 초기화
  } else if (pageone === 6 && isReady1_s_2) {
    playBackgroundMusic(uservsnoelBgm);
    pageone = 7;
    background(0); // 이전 화면 초기화
  } else if (pageone === 7) {
    pageone = null;
    stage1PlayBgm.stop();
    playBackgroundMusic(stage2InfoBgm);
    pagetwo = 1;
    background(0); // 이전 화면 초기화
  } else if (pageone === 8) {
    pageone = 9;
    background(0); // 이전 화면 초기화
  } else if (pageone === 9 && !questionAnswered1_2) {
    for (let i = 0; i < options1_2.length; i++) {
      let x = width / 2 - 200;
      let y = height / 2 + i * 100;
      let rectWidth = 400;
      let rectHeight = 150;

      if (mouseX > x && mouseX < x + rectWidth && mouseY > y - rectHeight / 2 && mouseY < y + rectHeight / 2) {
        questionAnswered1_2 = true;

        //스테이지 1 정답 판단
        if (i === correctAnswer1_2) {
          questionResult1_2 = "right";
        } else if (i === 0) {
          questionResult1_2 = "wrong1";
        } else if (i === 1) {
          questionResult1_2 = "wrong2";
        }
        prepareDrawResult1_2();
        setTimeout(() => {
          pageone = 10;
        }, 1000);
      }
    }
  } else if (pageone === 10 && (isReady1_2_1 || isReady1_2_2 || isReady1_2_3)) {
    //정답 시 다음 화면으로 넘어가기
    if (questionResult1_2 === "right") { //정답
      pageone = 12;
      background(0); // 이전 화면 초기화
      //오답 시 오답 화면으로 넘어가기
    } else {
      userLife--;
      pageone = 11;
      background(0);
    } // 이전 화면 초기화
  } else if (pageone === 11) {
    pageone = 12;
    background(0); // 이전 화면 초기화
  } else if (pageone === 12 && !questionAnswered1_3) {
    for (let i = 0; i < options1_3.length; i++) {
      let x = width / 2 - 200;
      let y = height / 2 + i * 100;
      let rectWidth = 400;
      let rectHeight = 150;

      if (mouseX > x && mouseX < x + rectWidth && mouseY > y - rectHeight / 2 && mouseY < y + rectHeight / 2) {
        questionAnswered1_3 = true;

        //스테이지 1 정답 판단
        if (i === correctAnswer1_3) {
          questionResult1_3 = "right";
        } else if (i === 1) {
          questionResult1_3 = "wrong1";
        } else if (i === 2) {
          questionResult1_3 = "wrong2";
        }
        prepareDrawResult1_3();
        setTimeout(() => {
          pageone = 13;
        }, 1000);
      }
    }
  } else if (pageone === 13 && (isReady1_3_1|| isReady1_3_2 || isReady1_3_3)) {
    //정답 시 다음 화면으로 넘어가기
    if (questionResult1_3 === "right") { //정답
      prepareStage1Success_1()
      pageone = 5;
      background(0); // 이전 화면 초기화
      //오답 시 오답 화면으로 넘어가기
    } else {
      userLife--;
      pageone = 14;
      background(0);
    }
  } else if (pageone === 14) {
    prepareStage1Success_1();
    pageone = 5;
    background(0); // 이전 화면 초기화
  } else if (pagetwo === 1) { //스테이지 2 시작
    drawLivesState = true;
    pagetwo = 2;
  } else if (pagetwo === 2) {
    if (mouseX > width / 2 + 15 - 340 && mouseX < width / 2 + 15 + 340 && mouseY > 680 - 100 && mouseY < 680 + 100) {
      stage2InfoBgm.stop();
      playBackgroundMusic(stage2ExplainBgm);
      pagetwo = 3;
    }
  } else if (pagetwo === 3) {
    stage2ExplainBgm.stop();
    countdownBgm.play();
    pagetwo = 4;
    countdown = 3; //카운트다운 초기화
    clearInterval(countdownInterval); //기존의 카운트다운 타이머 종료
    countdownInterval = setInterval(() => {
      if (countdown > 1) {
        countdown--;
      }
    }, 1000); //새로운 타이머 시작
    setTimeout(() => {
      countdownBgm.stop();
      drawLivesState = false;
      playBackgroundMusic(stage2PlayBgm);
      pagetwo = 5;
    }, 3000);
  } else if (pagetwo === 5) { //게임 시작
    if (isGame2Ended !== true) {
      if (!explainGame2Pressed) { //게임 설명 표시되어 있을때 단어 선택 방지
        wordDisplay.checkMouseCollision(mouseX, mouseY);
      }

      if (mouseX > 1200 && mouseX < 1400 && mouseY > 10 && mouseY < 110) {
        explainGame2Pressed = true;
      } else {
        explainGame2Pressed = false;
      }
    } else {
      stage2ScoreBgm.play();
      drawLivesState = true;
      if (game2Result == "성공") {
        stage2Score = int(random(94, 101));
        pagetwo = 6;
      } else if (game2Result == "실패") {
        stage2Score = int(random(80, 94));
        userLife--;
        pagetwo = 7;
      }
    }
  } else if (pagetwo === 6) { //스테이지 2 성공
    if (game2PlayedCount < 2) {
      if (mouseX > width / 2 - retryImg.width / 8 &&
        mouseX < width / 2 + retryImg.width / 8 &&
        mouseY > 580 - retryImg.height / 8 &&
        mouseY < 580 + retryImg.height / 8) {
        game2PlayedCount++;
        console.log("game2playedCount:" + game2PlayedCount);
        wordDisplay.capturedWords = []; //초기화
        game2Result = null;
        isGame2Ended = null;
        stage2Score = 0;
        drawLivesState = false;
        pagetwo = 5
      }
    } else {
      if (mouseX > width / 2 - nextImg.width / 6 &&
        mouseX < width / 2 + nextImg.width / 6 &&
        mouseY > 620 - nextImg.height / 6 &&
        mouseY < 620 + nextImg.height / 6) {
        drawLivesState = false;
        prepareStage2ToStage3_1();
        stage2PlayBgm.stop();
        pagetwo = 8;
      }
    }
  } else if (pagetwo === 7) { //스테이지 2 실패 
    if (game2PlayedCount < 2) { //2번 이하 플레이
      if (mouseX > width / 2 - retryImg.width / 8 && //버튼 눌렀을 때
        mouseX < width / 2 + retryImg.width / 8 &&
        mouseY > 580 - retryImg.height / 8 &&
        mouseY < 580 + retryImg.height / 8) {
        if (userLife == 0) { //죽으면
          pagetwo = null;
          drawStage4Fail_1();
          playBackgroundMusic(hyuksooBgm);
          pagefour = 3;
        } else {
          game2PlayedCount++;
          console.log("game2playedCount:" + game2PlayedCount);
          wordDisplay.capturedWords = []; //초기화
          game2Result = null;
          isGame2Ended = null;
          stage2Score = 0;
          drawLivesState = false;
          pagetwo = 5
        }
      }
    } else { //3번째 플레이
      if (mouseX > width / 2 - nextImg.width / 6 &&
        mouseX < width / 2 + nextImg.width / 6 &&
        mouseY > 580 - nextImg.height / 6 &&
        mouseY < 580 + nextImg.height / 6) {
        if (userLife == 0) {
          pagetwo = null;
          drawStage4Fail_1();
          playBackgroundMusic(hyuksooBgm);
          pagefour = 3;
        } else {
          drawLivesState = false;
          prepareStage2ToStage3_1();
          stage2PlayBgm.stop();
          pagetwo = 8;
        }
      }
    }
  } else if (pagetwo === 8 && isReadyS2S3_1) {
    drawLivesState = false;
    playBackgroundMusic(noelMadBgm);
    prepareStage2ToStage3_2();
    pagetwo = 9;
  } else if (pagetwo === 9 && isReadyS2S3_2) {
    warningBgm.play();
    pagetwo = null;
    pagethree = 1;
    return;
  } else if (pagethree === 1) { //스테이지 3 시작
    warningBgm.stop();
    drawLivesState = true;
    pagethree = 2;
    prepareDrawStage3_2();
  } else if (pagethree === 2 && isReadyS3_2) {
    pagethree = 3;
  } else if (pagethree === 3) {
    noelMadBgm.stop();
    for (let i = 0; i < 2; i++) { //선택지 처리
      let x = width / 2 - 400; // 버튼 위치
      let y = height / 2 + i * 80+50;
      let rectWidth = 800;
      let rectHeight = 50;

      if (mouseX > x && mouseX < x + rectWidth && mouseY > y - rectHeight / 2 && mouseY < y + rectHeight / 2) {
        pagethree = 4;
        playBackgroundMusic(stage3InfoBgm);
      }
    }
  } else if (pagethree === 4) {
    let buttonX = width / 2 - 100; //"FUCKING GO!" 버튼 위치
    let buttonY = height - 150;
    let buttonWidth = 200;
    let buttonHeight = 50;

    if (mouseX > width / 2 + 15 - 340 && mouseX < width / 2 + 15 + 340 && mouseY > 680 - 100 && mouseY < 680 + 100) {
      stage3InfoBgm.stop();
      countdownBgm.play();
      pagethree = 5;
      countdown = 3; //카운트다운 초기화
      clearInterval(countdownInterval); //기존 카운트다운 타이머 종료
      countdownInterval = setInterval(() => {
        if (countdown > 1) {
          countdown--;
        }
      }, 1000); //새로운 타이머 시작
      setTimeout(() => {
        countdownBgm.stop();
        pagethree = 6;
      }, 3000);
    }
  } else if (pagethree === 6 && !questionAnswered3) {
    let buttonWidth = 300; // 버튼 너비
    let buttonHeight = 50; // 버튼 높이
    let startX = width / 2 - (buttonWidth * options3.length) / 2; // 첫 번째 버튼의 x 위치
    let startY = height / 2 + 100; // y 위치는 일정하게
    let skeletonWidth = 300; // 해골 너비
    let skeletonHeight = 300; // 해골 높이

    //첫 번째 해골 클릭 처리
    if (
      mouseX > width / 2 - 350 &&
      mouseX < width / 2 - 350 + skeletonWidth &&
      mouseY > height / 2 - 70 &&
      mouseY < height / 2 - 70 + skeletonHeight
    ) {
      // 재생 중인 파워메탈 음악 멈추기
      if (isPlayingPower) {
        powerMetalSound.stop();
        isPlayingPower = false;
      } else {
        // 다른 음악이 재생 중이라면 멈추기
        if (isPlayingDeath) {
          deathMetalSound.stop();
          isPlayingDeath = false;
        }
        if (isPlayingBlack) {
          blackMetalSound.stop();
          isPlayingBlack = false;
        }

        // 첫 번째 해골 음악 재생
        powerMetalSound.loop(); // 무한 반복 재생
        isPlayingPower = true;
      }
    }

    // 두 번째 해골 클릭 처리
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 - 50 + skeletonWidth &&
      mouseY > height / 2 - 70 &&
      mouseY < height / 2 - 70 + skeletonHeight
    ) {
      //재생 중인 데스메탈 음악 멈추기
      if (isPlayingDeath) {
        deathMetalSound.stop();
        isPlayingDeath = false;
      } else {
        // 다른 음악이 재생 중이라면 멈추기
        if (isPlayingPower) {
          powerMetalSound.stop();
          isPlayingPower = false;
        }
        if (isPlayingBlack) {
          blackMetalSound.stop();
          isPlayingBlack = false;
        }

        // 두 번째 해골 음악 재생
        deathMetalSound.loop();
        isPlayingDeath = true;
      }
    }

    // 세 번째 해골 클릭 처리
    if (
      mouseX > width / 2 + 250 &&
      mouseX < width / 2 + 250 + skeletonWidth &&
      mouseY > height / 2 - 70 &&
      mouseY < height / 2 - 70 + skeletonHeight
    ) {
      //재생 중인 블랙메탈 음악 멈추기
      if (isPlayingBlack) {
        blackMetalSound.stop();
        isPlayingBlack = false;
      } else {
        // 다른 음악이 재생 중이라면 멈추기
        if (isPlayingPower) {
          powerMetalSound.stop();
          isPlayingPower = false;
        }
        if (isPlayingDeath) {
          deathMetalSound.stop();
          isPlayingDeath = false;
        }

        // 세 번째 해골 음악 재생
        blackMetalSound.loop();
        isPlayingBlack = true;
      }
    }


    for (let i = 0; i < options3.length; i++) {
      let x = startX + i * (buttonWidth + 20); // 각 버튼의 x 위치
      let y = startY;

      // 버튼 클릭 영역 판별
      if (mouseX > x && mouseX < x + buttonWidth && mouseY > y && mouseY < y + buttonHeight + 100) {
        questionAnswered3 = true;

        // 스테이지 3 정답 판단
        if (i === correctAnswer3) {
          questionResult3 = "right";
        } else if (i === 0) {
          questionResult3 = "wrong1";
        } else if (i === 1) {
          questionResult3 = "wrong2";
        }
        blackMetalSound.stop();
        isPlayingBlack = false;
        deathMetalSound.stop();
        isPlayingDeath = false;
        powerMetalSound.stop();
        isPlayingHeavy = false;
        pagethree = 7;
        prepareResult3();
      }
    }
  } else if (pagethree === 7 && ((isReadyR3_1 && isReadyR3_2 && isReadyR3_3) || isReadyR3_4)) { //스테이지 3 결과
    if (questionResult3 === "right") { //정답인 경우
      skeletonDeadBgm.play();
      pagethree = 8;
      prepareStage3Success1();
    }
    else { //오답인 경우
      stage3FailBgm.play();
      if (mouseX > 550 && mouseX < 670 && mouseY > 655 && mouseY < 700) { //이모코어 설명
        pagethree = 7;
      } else {
        userLife--;
        pagethree = 10;
      }
    }
  } else if (pagethree === 8 && isReadys3s1) { //정답 시 화면
    prepareStage3Success2();
    pagethree = 9;
  } else if (pagethree === 9 && isReadys3s2) {
    pagethree = 11;
    drawLivesState = false;
    prepareStage3ToEnding();
  } else if (pagethree === 10) { //오답 시 화면
    drawLivesState = false;
    if (userLife == 0) {
      pagethree = null;
      playBackgroundMusic(hyuksooBgm);
      drawStage4Fail_1();
      pagefour = 3;
    } else {
      pagethree = 11;
      prepareStage3ToEnding();
    }
  } else if (pagethree === 11 && isReadys3e) {
    playBackgroundMusic(outro1Bgm);
    if (fadeAlpha3 < 50) {
      pagethree = null;
      pagefive = 1;
      preparedrawOutro_1();
    }
  } else if (pagefive === 1 && isReadyoutro_1) { //아웃트로 시작
    pagefive = 2;
  } else if (pagefive === 2) {
    pagefive = 3;
    preparedrawOutro_3();
  } else if (pagefive === 3 && isReadyoutro_3) {
    pagefive = 4;
  } else if (pagefive === 4) {
    if (mouseX > 1150 && mouseX < 1340 && mouseY > 680 && mouseY < 730) {
      preparedrawOutro_5();
      pagefive = 5;
    }
  } else if (pagefive === 5 && isReadyoutro_5) {
    pagefive = 6;
    preparedrawOutro_6();
  } else if (pagefive === 6 && isReadyoutro_6) {
    pagefive = 7;
    preparedrawOutro_7();
  } else if (pagefive === 7 && isReadyoutro_7) {
    pagefive = 8;
    preparedrawOutro_8();
    preparedrawOutro_9();
  } else if (pagefive === 9 && isReadyoutro_9) {
    if (isHit) {
      pagefive = 10;
      backToRealBgm.play();
      truckCrashBgm.stop();
      preparedrawOutro_10();
    }
  } else if (pagefive === 10 && isReadyoutro_10) {
    if (fadeAlpha3 < 80) {
      pagefive = 11;
    }
  } else if (pagefive === 12) {
    fadeAlpha5_2 = 0; //초기화
    pagefive = 13;
  } else if (pagefive === 13) {
    pagefive = 14;
  } else if (pagefive === 14) {
    pagefive = 15;
  } else if (pagefive === 15) {
    pagefive = 16;
  } else if (pagefive === 16) {
    pagefive = 17;
  } else if (pagefive === 17) {
    pagefive = 18;
  } else if (pagefive === 18) {
    pagefive = 19;
  } else if (pagefive === 19) {// outro 마지막 장면 -> 인생네컷으로 연결
    pagefive = null;
    pagefour = 1;
  } else if (pagefour === 3 && isReadys4f1 ) {
    drawStage4Fail_2();
    pagefour = 4;
  } else if (pagefour === 4 && isReadys4f2) {
    //createCanvas(1440, 1350); //캔버스 크기를 엔딩용으로 변경
    pagefour = 2;
  } else if (pagefour === 2) {
    if (mouseX > 1170 && mouseX < 1430 && mouseY > 500 && mouseY < 630) {
      resetSketch();
    }
  }

  // 카운트다운 종료
  if (countdown === 0) {
    clearInterval(countdownInterval);
  }
}

function resetSketch() { //게임 리플레이 (처음부터 재시작)
  if (localFrameCount >= 2080) {
    location.reload();
  }
}