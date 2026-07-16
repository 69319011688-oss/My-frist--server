const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio - ฉัตรมงคล</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Kanit:wght@300;400;600&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#0f0c29,#302b63,#24243e);
    overflow:hidden;
    font-family:'Poppins',sans-serif;
    color:#fff;
    position:relative;
}

.bg-blob{
    position:absolute;
    border-radius:50%;
    filter:blur(80px);
    opacity:0.1;
    animation:blob-animation 8s ease-in-out infinite;
}

.blob-1{
    width:500px;
    height:500px;
    background:#a855f7;
    top:-100px;
    left:-100px;
    animation-delay:0s;
}

.blob-2{
    width:400px;
    height:400px;
    background:#ec4899;
    bottom:-50px;
    right:-50px;
    animation-delay:2s;
}

.blob-3{
    width:350px;
    height:350px;
    background:#6366f1;
    top:50%;
    right:10%;
    animation-delay:4s;
}

@keyframes blob-animation{
    0%,100%{transform:translate(0,0);}
    33%{transform:translate(30px,-50px);}
    66%{transform:translate(-20px,50px);}
}

.card{
    width:460px;
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(20px);
    border:1px solid rgba(255,255,255,0.15);
    border-radius:25px;
    padding:40px;
    text-align:center;
    box-shadow:0 20px 60px rgba(168,85,247,0.2);
    z-index:10;
    position:relative;
    animation:card-entrance 0.6s ease-out;
}

@keyframes card-entrance{
    from{
        opacity:0;
        transform:translateY(30px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.profile{
    width:160px;
    height:160px;
    border-radius:50%;
    object-fit:cover;
    border:4px solid #a855f7;
    box-shadow:0 0 30px rgba(168,85,247,0.5);
    animation:profile-float 4s ease-in-out infinite;
    margin:0 auto 20px;
    display:block;
    cursor:pointer;
    transition:transform 0.3s ease;
}

.profile:hover{
    transform:scale(1.05);
}

@keyframes profile-float{
    0%,100%{transform:translateY(0) scale(1);}
    50%{transform:translateY(-15px) scale(1.02);}
}

h1{
    background:linear-gradient(135deg,#a855f7,#ec4899,#06b6d4);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    margin:15px 0 5px;
    font-size:28px;
    font-weight:700;
    font-family:'Kanit',sans-serif;
}

.subtitle{
    color:#a855f7;
    margin-bottom:20px;
    font-size:16px;
    font-weight:600;
    letter-spacing:1px;
}

.info{
    text-align:left;
    margin:25px 0;
    background:rgba(168,85,247,0.1);
    padding:20px;
    border-radius:15px;
    border-left:4px solid #a855f7;
}

.info p{
    margin:12px 0;
    font-size:15px;
    display:flex;
    align-items:center;
    gap:10px;
}

.info span{
    color:#a855f7;
    font-weight:600;
}

.quote{
    margin:20px 0;
    padding:20px;
    background:linear-gradient(135deg,rgba(168,85,247,0.2),rgba(236,72,153,0.2));
    border-radius:15px;
    border:1px solid rgba(168,85,247,0.3);
    color:#e9d5ff;
    font-style:italic;
    font-size:16px;
    line-height:1.6;
}

.button-group{
    display:flex;
    gap:10px;
    margin-top:25px;
    flex-wrap:wrap;
    justify-content:center;
}

button{
    padding:12px 24px;
    border:2px solid #a855f7;
    border-radius:50px;
    background:transparent;
    color:#a855f7;
    cursor:pointer;
    font-size:15px;
    font-weight:600;
    font-family:'Poppins',sans-serif;
    transition:all 0.3s ease;
    position:relative;
    overflow:hidden;
}

button::before{
    content:'';
    position:absolute;
    top:0;
    left:-100%;
    width:100%;
    height:100%;
    background:linear-gradient(135deg,#a855f7,#ec4899);
    z-index:-1;
    transition:left 0.3s ease;
}

button:hover{
    color:white;
    left:0;
    box-shadow:0 10px 30px rgba(168,85,247,0.4);
    transform:translateY(-2px);
}

button:hover::before{
    left:0;
}

button:active{
    transform:translateY(0);
}

#message{
    margin-top:20px;
    min-height:30px;
    animation:message-pop 0.5s ease-out;
    background:linear-gradient(135deg,#a855f7,#ec4899);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    font-weight:700;
    font-size:16px;
}

@keyframes message-pop{
    from{
        opacity:0;
        transform:scale(0.8);
    }
    to{
        opacity:1;
        transform:scale(1);
    }
}

.snow{
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;
    pointer-events:none;
}

.snow span{
    position:absolute;
    width:6px;
    height:6px;
    background:radial-gradient(circle, #a855f7, #ec4899);
    border-radius:50%;
    animation:snow 10s linear infinite;
    box-shadow:0 0 10px rgba(168,85,247,0.6);
}

@keyframes snow{
    from{
        transform:translateY(-10px) translateX(0);
        opacity:1;
    }
    to{
        transform:translateY(110vh) translateX(100px);
        opacity:0.3;
    }
}

.footer{
    margin-top:25px;
    color:#a78bfa;
    font-size:13px;
    opacity:0.7;
}

.status-badge{
    display:inline-block;
    background:linear-gradient(135deg,#a855f7,#ec4899);
    color:white;
    padding:6px 16px;
    border-radius:50px;
    font-size:12px;
    font-weight:600;
    margin-bottom:15px;
}

.emoji-bounce{
    display:inline-block;
    animation:emoji-bounce 0.6s ease-out;
}

@keyframes emoji-bounce{
    0%{transform:scale(0) rotate(-45deg);}
    50%{transform:scale(1.2) rotate(10deg);}
    100%{transform:scale(1) rotate(0deg);}
}

@keyframes spin{
    0%{transform:rotateY(0deg);}
    100%{transform:rotateY(360deg);}
}

@media (max-width:600px){
    .card{
        width:90%;
        max-width:460px;
        padding:30px;
    }
    
    h1{
        font-size:24px;
    }
    
    .button-group{
        flex-direction:column;
    }
    
    button{
        width:100%;
    }
}

</style>

</head>

<body>

<div class="bg-blob blob-1"></div>
<div class="bg-blob blob-2"></div>
<div class="bg-blob blob-3"></div>

<div class="snow" id="snow"></div>

<div class="card">

<div class="status-badge">🔥 ONLINE & CODING</div>

<img class="profile"
src="https://f.ptcdn.info/516/032/000/1434522792-2-o.jpg"
alt="Profile">

<h1>ฉัตรมงคล โปร่งอากาศ</h1>

<div class="subtitle">
❄️ Ice Bear | Dev & Creator ❄️
</div>

<div class="info">
<p>🎓 <span>ระดับชั้น :</span> HIT.1/1 V (A)</p>
<p>💻 <span>สาขา :</span> เทคโนโลยีสารสนเทศ</p>
<p>🎯 <span>เป้าหมาย :</span> ปั่นเงิน & โปรแกรมเมอร์เทพ</p>
<p>⚡ <span>สถานะ :</span> Always Learning & Grinding</p>
</div>

<div class="quote">
"Keep Coding, Keep Growing, Keep Shining ✨"
</div>

<div class="button-group">
<button onclick="talk()">
<span class="emoji-bounce">🐻</span> Talk to Ice Bear
</button>
<button onclick="showmore()" style="border-color:#ec4899;">
<span class="emoji-bounce">📱</span> More Info
</button>
</div>

<div id="message"></div>

<div class="footer">
🚀 Portfolio v2.0 | Built with ❤️ & Dev Spirit
</div>

</div>

<script>

const messages=[
"🐻 Ice Bear : สวัสดีเว้ย! วันนี้เขียนโค้ดแล้วหรือ?",
"❄️ เลิกเล่นเกมแล้ว มาเขียนโค้ด!",
"💻 ทำไมยังไม่รวย? มาเขียนโค้ดกันสิ!",
"🚀 Keep grinding bro! มีเดือนไปเรื่อยๆ",
"🔥 โค้ดดี โปรเจกต์จบ บ่าวหรือเยาวชน?",
"🎯 ความสำเร็จเริ่มจากการลงมือทำ no cap!",
"💪 You got this! ปั่นเงินให้ครบ!",
"✨ Be consistent, be legend, be coders"
];

const moreinfo=[
"📚 Study: JavaScript, Python, Web Dev",
"🏆 เป้าหมาย: Full Stack Developer",
"💰 Dream: ได้เงินจากเขียนโค้ด",
"🌟 Passion: Innovation & Problem Solving"
];

let toggleinfo=false;

function talk(){
    const msg=document.getElementById("message");
    msg.innerHTML=messages[Math.floor(Math.random()*messages.length)];
    msg.style.textAlign='center';
}

function showmore(){
    const msg=document.getElementById("message");
    if(toggleinfo){
        msg.innerHTML='';
    }else{
        msg.innerHTML=moreinfo[Math.floor(Math.random()*moreinfo.length)];
    }
    toggleinfo=!toggleinfo;
}

const snow=document.getElementById("snow");

for(let i=0;i<50;i++){
    const s=document.createElement("span");
    s.style.left=Math.random()*100+"%";
    s.style.opacity=Math.random()*0.7+0.3;
    s.style.animationDuration=(Math.random()*8+8)+"s";
    s.style.animationDelay=Math.random()*2+"s";
    snow.appendChild(s);
}

document.querySelector('.profile').addEventListener('click', function(){
    this.style.animation='none';
    setTimeout(()=>{
        this.style.animation='profile-float 4s ease-in-out infinite, spin 0.6s ease-out';
    }, 10);
    setTimeout(()=>{
        this.style.animation='profile-float 4s ease-in-out infinite';
    }, 610);
});

</script>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log("Server Running : http://localhost:" + port);
});
