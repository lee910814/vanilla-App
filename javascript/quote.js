const quotes=[{
    quote:"삶이 있는 한 희망은 있다",author:"-키케로-"
},
{
    quote:"언제나 현재에 집중할수 있다면 행복할것이다",author:"-파울로 코엘료-"
},
{
    quote:"신은 용기있는자를 결코 버리지 않는다", author:"-켄러-"
},
{
    quote:"피할 수 없으면 즐겨라",author:"-로버트 엘리엇-"
},
{
    quote:"우리를 향해 열린 문을 보지 못하게 된다",author:"-헬렌켈러-"
},
{
    quote:"먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",author:"-채근담-"
},
{
    quote:"행복한 삶을 살기위해 필요한 것은 거의 없다.",author:"-마르쿠스 아우렐리우스 안토니우스-"
},
{
    quote:"모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",author:"-랄프 왈도 에머슨-"
},
{
    quote:"계단을 밟아야 계단 위에 올라설수 있다",author:"-터키속담-"
},
{
    quote:"1퍼센트의 가능성, 그것이 나의 길이다.",author:"-나폴레옹-"
},
{
    quote:"겨울이 오면 봄이 멀지 않으리",author:"-셸리-"
},
{
    quote:"작은 기회로 부터 종종 위대한 업적이 시작된다  ",author:"-데모스테네스-"
},
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const toDay = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML = toDay.quote;
author.innerHTML = toDay.author;