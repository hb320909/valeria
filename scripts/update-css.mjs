import { readFileSync, writeFileSync } from 'fs';

const files = [
  {
    path: '/vercel/share/v0-project/firstPage.css',
    content: `body{
    padding: 2rem;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('Pages/Assets/bg.gif'); 
    background-size: cover;
    background-position: center;
}

body.hovered {
    background-image: url('Pages/Assets/wall6.gif');
    background-position: center;
    background-size: cover;
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin-inline: auto;
    filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.2));
}

#image {
    max-width: 80%;
    height: auto;
}

.btn{
    position: relative;
    margin-top: 2rem;
    min-width: 120px;
    padding: 0.75rem 1rem;
    font-size: 1.25rem;
    outline: none;
    border: none;
    background-color: #455566;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s;
    color: #fff;
}

.btn:hover span {
    display:none
}
  
.btn:hover:before {
    content:"Hiiiii Cutieee \\1F49E ";
}

.watermark {
    opacity: 0.5;
    color: rgb(238, 203, 203);
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
}

a{
    text-decoration: none;
    color: rgb(238, 203, 203);
}

@media (max-width: 600px) {
    body {
        padding: 1rem;
    }
    #image {
        max-width: 90vw;
    }
    .btn {
        font-size: 1rem;
        padding: 0.6rem 0.8rem;
        min-width: 100px;
    }
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 1/secondPage.css',
    content: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

body{
    min-height: 100vh;
    background: #0c192c;
    overflow-x: hidden;
}

.container{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
}

h2{
    color: antiquewhite;
    text-align: center;
    font-size: clamp(1.2rem, 4vw, 1.75rem);
}

h3{
    padding-bottom: 2rem;
    color: #203757;
    font-size: clamp(0.9rem, 3vw, 1.25rem);
}

.btn{
    z-index: 1000;
}

.hearts{
    font-size: clamp(50px, 15vw, 100px);
    font-weight: bold;
    position: fixed;
    top: -1vh;
    left: 0;
    transform: translateY(0%);
    animation: fall 1s ease-in infinite;
}

@keyframes fall{
    to{
        transform: translateY(250vh);
    }
}

h1{  
    margin-top: 2rem;
    padding: 0 1rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: whitesmoke;
    font-size: clamp(1.2rem, 4vw, 2.5rem);
    word-break: break-word;
}

.chori-chori {
    padding: 0 1rem;
}

#center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem 0 4rem;
}

.beauti, .gorg, .wow{
    color: transparent;
    -webkit-text-stroke: 3px darkmagenta;
    position: relative;
    font-size: clamp(1.5rem, 5vw, 3rem);
}

#beauti{
    padding: 2rem 0 2rem;
}

#gorg{
    text-align: center;
    padding: 2rem 0 2rem;
}

#wow{
    text-align: right;
    padding: 2rem 0 2rem;
}

.beauti::before{
    content: "BEAUTIFUL!!!!!!";
    position: absolute;
    width: 0%;
    height: 100%;
    overflow: hidden;
    color: darkmagenta;
    border-right: 8px solid darkmagenta;
    animation: slidein infinite 1.5s;
}
.gorg::before{
    content: "GORGEOUS!!!!!!";
    position: absolute;
    width: 0%;
    height: 100%;
    overflow: hidden;
    color: darkmagenta;
    border-right: 8px solid darkmagenta;
    animation: slidein infinite 1.5s;
    animation-direction: reverse;
}
.wow::before{
    content: "WOWWWW!!!!!!";
    position: absolute;
    width: 0%;
    height: 100%;
    overflow: hidden;
    color: darkmagenta;
    border-right: 8px solid darkmagenta;
    animation: slidein infinite 1.5s;
}

@keyframes slidein {
    to {
        width: 100%;
        filter: drop-shadow(0 0 25px darkmagenta);
    }
}

.beauti:hover::before, .gorg:hover::before, .wow:hover::before{
    width: 100%;
    filter: drop-shadow(0 0 25px darkmagenta);
}

.watermark {
    opacity: 0.5;
    color: rgb(238, 203, 203);
    text-align: center;
    padding: 1rem 0;
    font-size: 0.85rem;
}

a{
    text-decoration: none;
    color: rgb(238, 203, 203);
}

@media (max-width: 600px) {
    .beauti, .gorg, .wow {
        -webkit-text-stroke: 2px darkmagenta;
    }
    .beauti::before, .gorg::before, .wow::before {
        border-right-width: 4px;
    }
    #wow {
        text-align: center;
    }
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 2/thirdPage.css',
    content: `.containter {
    position: relative;
    width: 100%;
    min-height: 100vh;
}
  
.center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.btn{
    cursor: pointer;
    transition: 0.3s;
    font-size: 20px;
}

#disable{
    cursor: wait;
}

#enable{
    display: none;
}

.watermark {
    opacity: 0.5;
    color: BLACK;
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
}

a{
    text-decoration: none;
    color: black;
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 3/forthPage.css',
    content: `body {
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 1rem 3rem;
}

h1{  
    margin: 2rem 0 0;
    padding: 0 1rem 0.5rem;
    display: flex;
    justify-content: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #111;
    font-size: clamp(1.2rem, 4vw, 2rem);
    text-align: center;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
}

img{
    max-height: 50vh;
    max-width: 90%;
    width: auto;
    height: auto;
    display: block;
    margin: 1rem auto;
}

.buttons {
    font-size: clamp(18px, 4vw, 35px);
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding-top: 1rem;
    gap: clamp(2rem, 8vw, 12rem);
    flex-wrap: wrap;
}

.romantic1, .romantic2, .romantic3, .romantic4, .romantic5, .romantic6, .romantic7 {
    position: relative;
    margin: 0.5rem;
    font-size: clamp(0.7rem, 2vw, 1rem);
    left: auto;
    top: auto;
    transform: none;
}

.watermark {
    opacity: 0.5;
    color: BLACK;
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
}

a{
    text-decoration: none;
    color: black;
}

@media (min-width: 768px) {
    body {
        height: 100vh;
        overflow: hidden;
    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 400px;
        margin: 0;
    }
    .buttons {
        margin-top: 29rem;
        padding-top: 2rem;
        gap: 12rem;
    }
    .romantic1{
        position: absolute;
        top: 5%;
        left: 85%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .romantic2{
        position: absolute;
        top: 15%;
        left: 15%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .romantic3{
        position: absolute;
        top: 35%;
        left: 71%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .romantic4{
        position: absolute;
        top: 45%;
        left: 25%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .romantic5{
        position: absolute;
        top: 79%;
        left: 79%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .romantic6{
        position: absolute;
        top: 75%;
        left: 10%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
    .romantic7{
        position: absolute;
        top: 95%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
    }
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 4/ask.css',
    content: `body {
    background: #111;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
}

.wrapper span {
    position: fixed;
    bottom: -180px;
    height: 50px;
    width: 50px;
    z-index: -1;
    border-radius: 33%;
    box-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff, 0 0 200px #0072ff;
    animation: animate 7s linear infinite;
}

.wrapper span:nth-child(1) {
    box-shadow: 0 0 50px #7938ce, 0 0 100px #500d90, 0 0 150px #b320e8, 0 0 200px #6838ce;
    left: 60px;
    animation-delay: 0.6s;
}

.wrapper span:nth-child(2) {
    left: 10%;
    animation-delay: 3s;
    width: 60px;
    height: 60px;
}

.wrapper span:nth-child(3) {
    box-shadow: 0 0 50px #e21212, 0 0 100px #9ae657, 0 0 150px #57e4e6, 0 0 200px #e657da;
    left: 20%;
    animation-delay: 2s;
}

.wrapper span:nth-child(4) {
    box-shadow: 0 0 50px #e21212, 0 0 100px #e63544, 0 0 150px #e6576a, 0 0 200px #ed748a;
    left: 30%;
    animation-delay: 5s;
    width: 80px;
    height: 80px;
}

.wrapper span:nth-child(5) {
    box-shadow: 0 0 50px #ec3b3b, 0 0 100px #e6b657, 0 0 150px #e657da, 0 0 200px #e657da;
    left: 40%;
    animation-delay: 1s;
}

.wrapper span:nth-child(6) {
    left: 50%;
    animation-delay: 7s;
}

.wrapper span:nth-child(7) {
    box-shadow: 0 0 50px #e21212, 0 0 100px #e657da, 0 0 150px #e657da, 0 0 200px #e657da;
    left: 60%;
    animation-delay: 6s;
    width: 100px;
    height: 100px;
}

.wrapper span:nth-child(8) {
    box-shadow: 0 0 50px #113cc8, 0 0 100px #7f57e6, 0 0 150px #2958d9, 0 0 200px #34569f;
    left: 70%;
    animation-delay: 8s;
}

.wrapper span:nth-child(9) {
    left: 80%;
    animation-delay: 6s;
    width: 90px;
    height: 90px;
}

.wrapper span:nth-child(10) {
    box-shadow: 0 0 50px #e657da, 0 0 100px #e657da, 0 0 150px #e657da, 0 0 200px #e657da;
    left: 90%;
    animation-delay: 4s;
}

@keyframes animate {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    80% {
        opacity: .7;
    }
    100% {
        transform: translateY(-800px) rotate(360deg);
        opacity: 0;
    }
}

h1{  
    margin: 3rem 0 0;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: whitesmoke;
    font-size: clamp(1.2rem, 4vw, 2rem);
    text-align: center;
}

.red{
    color: rgb(237, 37, 37);
    font-size: clamp(1.8rem, 5vw, 3rem);
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
}

img{
    max-height: 50vh;
    max-width: 90%;
    width: auto;
    height: auto;
    display: block;
    margin: 1rem auto;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding-top: 1rem;
    gap: clamp(2rem, 8vw, 12rem);
    flex-wrap: wrap;
}

.btn{
    display: inline-block;
    position: relative;
    min-width: 120px;
    margin: 4px 2px;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s;
    color: #fff;
    background-color: rgb(245, 116, 142);
}

#yes:hover span {
    display:none
}
  
#yes:hover:before {   
    content:"I know \\1F496";
}

body.yess {
    background-image: linear-gradient(0.25turn, #390035, #741838, #681740, #421034, #23020a);
}

#no:hover span {
    display:none
}

#no:hover:before {
    content:"Please \\1F97A";
}

body.noo {
    background-image: linear-gradient(0.25turn, #1d1919, #453b3b, #7d6b6b, #635a5a, #000000);
}

.watermark {
    opacity: 0.5;
    color: rgb(243, 214, 214);
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
}

a{
    text-decoration: none;
    color: rgb(243, 214, 214);
}

@media (min-width: 768px) {
    body {
        height: 100vh;
        overflow: hidden;
    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 500px;
        max-width: none;
        margin: 0;
    }
    .buttons {
        margin-top: 29rem;
        padding-top: 2rem;
        gap: 12rem;
    }
    .btn {
        top: calc(100% - 10rem);
    }
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 5/yes.css',
    content: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}

.container
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display:flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #e80202;
    overflow: hidden ;
    padding: 1rem;
}

img{
    z-index: 1000;
    max-width: 40%;
    height: auto;
    padding-right: 0;
    margin-bottom: 1rem;
}

h1{
    color: aliceblue;
    text-align: center;
    font-size: clamp(2em, 6vw, 4em);
    z-index: 1000;
    font-family: "Love Ya Like A Sister", cursive;
    font-weight: 400;
    font-style: normal;
}


.heart{
    position: absolute;
    width: 40px;
    height: 40px;
    background: #e80202;
    transform: rotate(45deg);
    box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.2) ;
}

.heart:before{
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e80202;
    border-radius: 50%;
    box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.1) ;
}

.heart:after{
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: #e80202 ;
    border-radius: 50%;
    box-shadow: -20px 0 40px rgba(0, 0, 0, 0.1) ;
}

.watermark {
    opacity: 0.5;
    color: BLACK;
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
    z-index: 1001;
}

a{
    text-decoration: none;
    color: black;
}

@media (min-width: 768px) {
    .container {
        flex-direction: row;
    }
    img {
        padding-right: 5rem;
        margin-bottom: 0;
    }
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 6/no1.css',
    content: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(24, 22, 22);
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.circle {
  position: absolute;
  bottom: 0;
  width: 20px;
  aspect-ratio: 1/1;
  background: rgb(248, 248, 248);
  box-shadow: 0 0 10px rgb(232, 9, 16), 0 0 20px rgb(148, 7, 7),
    0 0 30px rgb(91, 3, 3), 0 0 40px rgb(68, 2, 10), 0 0 50px rgb(32, 1, 2);
  border-radius: 50%;
  animation: animate 5s linear forwards;
}

@keyframes animate {
  0% {
    transform: translateY(-100vh) skew(-5deg);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0) skew(5deg);
    opacity: 0;
  }
}

.circle::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 25%;
  width: 50%;
  height: 100vh;
  opacity: 0.5;
}

h1 {
  margin: 5rem 0 0;
  padding: 0 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: whitesmoke;
  font-size: clamp(1.2rem, 4vw, 2rem);
  text-align: center;
  z-index: 1;
}

.red {
  color: rgb(233, 71, 71);
  font-family: cursive;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: clamp(2rem, 8vw, 12rem);
  flex-wrap: wrap;
  padding: 0 1rem;
}

#yes {
  width: clamp(100px, 20vw, 150px);
  height: clamp(130px, 25vw, 200px);
  font-size: clamp(30px, 6vw, 50px);
  border-radius: 1rem 3rem 2rem 4rem;
  z-index: 1;
}

#no {
  width: clamp(130px, 25vw, 200px);
  height: clamp(100px, 20vw, 150px);
  font-size: clamp(30px, 6vw, 50px);
  border-radius: 4rem 2rem 3rem 1rem;
  z-index: 1;
}

.watermark {
  opacity: 0.5;
  color: rgb(243, 214, 214);
  position: fixed;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.85rem;
}

.watermark a {
  text-decoration: none;
  color: rgb(243, 214, 214);
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 7/no2.css',
    content: `*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: dubai;
}
section{
    position: relative;
    min-height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
}
section h2{
    color: #fff;
    font-size: clamp(2em, 6vw, 5em);
    cursor: default;
    text-align: center;
}

section h2 span{
    color: rgb(240, 99, 99);
}

section .btn{
    margin-top: 3rem;
    font-size: clamp(18px, 4vw, 30px);
}

.light{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: radial-gradient(circle at var(--x) var(--y) , transparent 10%, rgba(0,0,0,0.95) 20%);
}

.watermark {
    opacity: 0.5;
    color: rgb(243, 214, 214);
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
}

.watermark a{
    text-decoration: none;
    color: rgb(243, 214, 214);
}
`
  },
  {
    path: '/vercel/share/v0-project/Pages/Page 8/no3.css',
    content: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #110515;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
}

.circle{
    position: absolute;
    bottom: 0;
    width: 20px;
    aspect-ratio: 1/1;
    background: rgb(249, 206, 247);
    box-shadow: 0 0 10px rgb(230, 0, 255), 0 0 20px rgb(218, 27, 221),0 0 30px rgb(216, 34, 244),0 0 40px rgb(209, 110, 228),0 0 50px;
    border-radius: 30%;
    animation: animate 5s linear forwards;
}

@keyframes animate{
    0%{
        transform: translateY(0) rotate(-25deg);
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    100%{
        transform: translateY(-100vh) rotate(25deg);
        opacity: 0;
    }
}

.circle::before{
    content: '';
    position: absolute;
    top: 100%;
    left: 25%;
    width: 50%;
    height: 100vh;
    opacity: 0.5;
}

h1{  
    margin: 3rem 0 0;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: whitesmoke;
    font-size: clamp(1rem, 3.5vw, 2rem);
    text-align: center;
}

.red{
    color: red;
    font-size: clamp(1.5rem, 5vw, 3rem);
    font-family: cursive;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
}

img{
    max-height: 50vh;
    max-width: 90%;
    width: auto;
    height: auto;
    display: block;
    margin: 1rem auto;
    z-index: 100;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding-top: 1rem;
    gap: clamp(2rem, 8vw, 12rem);
    flex-wrap: wrap;
}

.btn{
    display: inline-block;
    position: relative;
    min-width: 120px;
    margin: 4px 2px;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s;
    color: #fff;
    background-color: rgb(245, 116, 142);
    z-index: 1000;
}

#yes{
    background-color: rgb(237, 16, 64);
}

#no:hover span {
    display:none
}

#no:hover:before {
    content:"Uff, You Girls \\1F611";
}

body.noo {
    background-image: linear-gradient(0.25turn, #100716, #0e031f, #031d17,#250212, #181802);
}

.watermark {
    opacity: 0.5;
    color: rgb(243, 214, 214);
    position: fixed;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-size: 0.85rem;
}

a{
    text-decoration: none;
    color: rgb(243, 214, 214);
}

@media (min-width: 768px) {
    body {
        height: 100vh;
        overflow: hidden;
    }
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 500px;
        max-height: none;
        max-width: none;
        margin: 0;
    }
    .buttons {
        margin-top: 29rem;
        padding-top: 2rem;
        gap: 12rem;
    }
    .btn {
        top: calc(100% - 10rem);
    }
}
`
  }
];

for (const file of files) {
  writeFileSync(file.path, file.content, 'utf8');
  console.log(\`Wrote: \${file.path}\`);
}

console.log('All CSS files updated successfully!');
