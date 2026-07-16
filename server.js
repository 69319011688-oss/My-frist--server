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
<title>Portfolio - ฉัตรมงคล 🔥</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Kanit:wght@300;400;600;700&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,body{
    width:100%;
    height:100%;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#0a0e27;
    overflow:hidden;
    font-family:'Poppins',sans-serif;
    color:#fff;
    position:relative;
}

.gradient-bg{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(135deg,#667eea 0%,#764ba2 25%,#f093fb 50%,#4facfe 75%,#00f2fe 100%);
    background-size:400% 400%;
    animation:gradient-shift 15s ease infinite;
    z-index:1;
}

@keyframes gradient-shift{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.orb{
    position:absolute;
    border-radius:50%;
    filter:blur(60px);
    opacity:0.3;
    mix-blend-mode:screen;
    animation:float-orb 8s ease-in-out infinite;
}

.orb1{
    width:300px;
    height:300px;
    background:#667eea;
    top:-50px;
    left:-50px;
    animation-delay:0s;
}

.orb2{
    width:250px;
    height:250px;
    background:#f093fb;
    bottom:-50px;
    right:10%;
    animation-delay:2s;
}

.orb3{
    width:280px;
    height:280px;
    background:#764ba2;
    top:50%;
    right:-50px;
    animation-delay:4s;
}

@keyframes float-orb{
    0%,100%{transform:translate(0,0);}
    50%{transform:translate(40px,-40px);}
}

.container{
    z-index:10;
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
}

.card{
    width:100%;
    max-width:500px;
    background:rgba(15,20,50,0.7);
    backdrop-filter:blur(30px);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:30px;
    padding:50px 40px;
    text-align:center;
    box-shadow:0 30px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
    position:relative;
    overflow:hidden;
    animation:card-float 3s ease-in-out infinite;
}

@keyframes card-float{
    0%,100%{transform:translateY(0);}
    50%{transform:translateY(-10px);}
}

.card::before{
    content:'';
    position:absolute;
    top:-50%;
    right:-50%;
    width:300px;
    height:300px;
    background:radial-gradient(circle, rgba(240,147,251,0.3), transparent);
    border-radius:50%;
    filter:blur(60px);
    pointer-events:none;
}

.profile-wrapper{
    position:relative;
    margin-bottom:20px;
}

.profile{
    width:180px;
    height:180px;
    border-radius:50%;
    object-fit:cover;
    border:6px solid;
    border-image:linear-gradient(135deg,#667eea,#764ba2,#f093fb) 1;
    box-shadow:0 0 40px rgba(102,126,234,0.6), 0 0 80px rgba(240,147,251,0.4), inset 0 0 20px rgba(255,255,255,0.1);
    animation:profile-pulse 4s ease-in-out infinite;
    cursor:pointer;
    transition:all 0.3s ease;
    margin:0 auto;
    display:block;
}

.profile:hover{
    transform:scale(1.08);
    box-shadow:0 0 50px rgba(102,126,234,0.8), 0 0 100px rgba(240,147,251,0.6);
}

@keyframes profile-pulse{
    0%,100%{transform:scale(1);}
    50%{transform:scale(1.02);}
}

.status-online{
    position:absolute;
    width:20px;
    height:20px;
    background:linear-gradient(135deg,#00ff88,#00d4ff);
    border:3px solid #0a0e27;
    border-radius:50%;
    bottom:0;
    right:0;
    box-shadow:0 0 15px #00ff88;
    animation:pulse-online 2s ease-in-out infinite;
}

@keyframes pulse-online{
    0%,100%{box-shadow:0 0 15px #00ff88;}
    50%{box-shadow:0 0 25px #00ff88;}
}

h1{
    background:linear-gradient(135deg,#667eea,#764ba2,#f093fb,#4facfe);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    font-size:32px;
    font-weight:800;
    margin:20px 0 5px;
    font-family:'Kanit',sans-serif;
    letter-spacing:0.5px;
    text-shadow:0 0 30px rgba(102,126,234,0.3);
}

.subtitle{
    background:linear-gradient(90deg,#f093fb,#4facfe,#667eea);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    font-size:16px;
    font-weight:600;
    margin-bottom:25px;
    letter-spacing:1.5px;
}

.badge{
    display:inline-block;
    background:linear-gradient(135deg,#667eea,#764ba2);
    color:#fff;
    padding:8px 20px;
    border-radius:50px;
    font-size:12px;
    font-weight:700;
    margin-bottom:20px;
    box-shadow:0 5px 20px rgba(102,126,234,0.4);
    text-transform:uppercase;
    letter-spacing:1px;
}

.info{
    text-align:left;
    margin:30px 0;
    background:linear-gradient(135deg,rgba(102,126,234,0.1),rgba(240,147,251,0.05));
    padding:25px;
    border-radius:20px;
    border-left:4px solid #667eea;
    backdrop-filter:blur(10px);
}

.info p{
    margin:15px 0;
    font-size:15px;
    display:flex;
    align-items:center;
    gap:12px;
    color:#e0e0e0;
    transition:all 0.3s ease;
}

.info p:hover{
    color:#fff;
    padding-left:10px;
}

.info span{
    color:#f093fb;
    font-weight:700;
    min-width:120px;
}

.quote{
    margin:25px 0;
    padding:20px;
    background:linear-gradient(135deg,rgba(102,126,234,0.15),rgba(79,172,254,0.1));
    border-radius:15px;
    border:1px solid rgba(240,147,251,0.3);
    color:#e9d5ff;
    font-style:italic;
    font-size:16px;
    line-height:1.8;
    font-weight:300;
    position:relative;
}

.quote::before{
    content:'"';
    position:absolute;
    top:0;
    left:10px;
    font-size:40px;
    color:#667eea;
    opacity:0.3;
}

.button-group{
    display:flex;
    gap:12px;
    margin-top:30px;
    flex-wrap:wrap;
    justify-content:center;
}

button{
    padding:14px 28px;
    border:2px solid;
    border-image:linear-gradient(135deg,#667eea,#f093fb) 1;
    border-radius:50px;
    background:rgba(102,126,234,0.1);
    color:#fff;
    cursor:pointer;
    font-size:14px;
    font-weight:700;
    font-family:'Poppins',sans-serif;
    transition:all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    position:relative;
    overflow:hidden;
    text-transform:uppercase;
    letter-spacing:1px;
    backdrop-filter:blur(10px);
}

button::before{
    content:'';
    position:absolute;
    top:0;
    left:-100%;
    width:100%;
    height:100%;
    background:linear-gradient(135deg,#667eea,#764ba2,#f093fb);
    z-index:-1;
    transition:left 0.4s ease;
}

button:hover{
    box-shadow:0 15px 40px rgba(102,126,234,0.5), inset 0 0 20px rgba(255,255,255,0.1);
    transform:translateY(-3px);
    border-image:linear-gradient(135deg,#f093fb,#667eea) 1;
}

button:hover::before{
    left:0;
}

button:active{
    transform:translateY(-1px);
}

#message{
    margin-top:20px;
    min-height:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    animation:message-bounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background:linear-gradient(135deg,rgba(102,126,234,0.2),rgba(240,147,251,0.2));
    padding:15px;
    border-radius:15px;
    border:1px solid rgba(240,147,251,0.3);
    font-weight:600;
    font-size:15px;
    color:#f093fb;
}

@keyframes message-bounce{
    from{
        opacity:0;
        transform:scale(0.7) rotateX(-180deg);
    }
    to{
        opacity:1;
        transform:scale(1) rotateX(0);
    }
}

.particles{
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;
    pointer-events:none;
}

.particle{
    position:absolute;
    width:4px;
    height:4px;
    background:radial-gradient(circle, #f093fb, #667eea);
    border-radius:50%;
    animation:particle-float 20s linear infinite;
}

@keyframes particle-float{
    from{
        transform:translateY(0) translateX(0);
        opacity:1;
    }
    to{
        transform:translateY(-100vh) translateX(50px);
        opacity:0;
    }
}

.footer{
    margin-top:30px;
    color:#a0a0ff;
    font-size:12px;
    opacity:0.6;
    font-weight:300;
    letter-spacing:0.5px;
}

.footer span{
    color:#f093fb;
    opacity:1;
}

@media (max-width:600px){
    .card{
        max-width:90%;
        padding:40px 30px;
    }
    
    h1{
        font-size:26px;
    }
    
    .button-group{
        flex-direction:column;
    }
    
    button{
        width:100%;
    }
    
    .orb{
        filter:blur(40px);
    }
}

</style>

</head>

<body>

<div class="gradient-bg"></div>

<div class="orb orb1"></div>
<div class="orb orb2"></div>
<div class="orb orb3"></div>

<div class="particles" id="particles"></div>

<div class="container">
    <div class="card">
        <div class="profile-wrapper">
            <img class="profile"
                src="https://f.ptcdn.info/516/032/000/1434522792-2-o.jpg"
                alt="Ice Bear">
            <div class="status-online"></div>
        </div>

        <div class="badge">🔥 Ice Bear Developer</div>

        <h1>ฉัตรมงคล โปร่งอากาศ</h1>

        <div class="subtitle">
            ❄️ Full Stack Developer | Problem Solver ❄️
        </div>

        <div class="info">
            <p><span>🎓 ชั้นเรียน :</span> HIT.1/1 V (A)</p>
            <p><span>💻 สาขา :</span> เทคโนโลยีสารสนเทศ</p>
            <p><span>🎯 เป้าหมาย :</span> Senior Developer & Entrepreneur</p>
            <p><span>⚡ สถานะ :</span> 100% Grinding Mode</p>
        </div>

        <div class="quote">
            Keep Coding, Keep Growing, Keep Shining ✨ No cap!
        </div>

        <div class="button-group">
            <button onclick="talk()">💬 Talk to Me</button>
            <button onclick="showmore()">📱 More</button>
        </div>

        <div id="message"></div>

        <div class="footer">
            🚀 Portfolio v3.0 | Made with <span>❤️</span> & Code
        </div>
    </div>
</div>

<script>

const messages=[
    "🐻 Ice Bear: สวัสดีเว้ย! วันนี้เขียนโค้ดกี่บรรทัดแล้ว?",
    "❄️ มึงจะทำให้ฉันหำได้ไง? ไปเขียนโค้ดสิ!",
    "💻 ความรวยเริ่มจากที่นี่นะ เฟ้ย",
    "🚀 วันนี้ต่างจากเมื่อวาน เพราะมึงลงมือทำ!",
    "🔥 No cap! โค้ดดี โปรเจกต์จบ บ่าวแล้ว!",
    "🎯 ความสำเร็จไม่ได้มาเร็ว แต่มาจากการทำ",
    "💪 Keep grinding! ทุกวันคือวันพิชิต",
    "✨ Be like code: Debug, Refactor, Deploy!"
];

const moreinfo=[
    "📚 Stack: JavaScript, Python, Node.js, React",
    "🏆 Goal: Become a 10x Developer",
    "💰 Dream: Build products that change the world",
    "🌟 Passion: Web Development & AI"
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

const particlesContainer=document.getElementById("particles");
for(let i=0;i<30;i++){
    const particle=document.createElement("div");
    particle.className="particle";
    particle.style.left=Math.random()*100+"%";
    particle.style.width=Math.random()*6+2+"px";
    particle.style.height=particle.style.width;
    particle.style.opacity=Math.random()*0.5+0.2;
    particle.style.animationDuration=(Math.random()*15+15)+"s";
    particle.style.animationDelay=Math.random()*5+"s";
    particlesContainer.appendChild(particle);
}

document.querySelector('.profile').addEventListener('click', function(){
    this.style.animation='none';
    setTimeout(()=>{
        this.style.transform='rotateY(360deg) scale(1.1)';
    }, 10);
    setTimeout(()=>{
        this.style.animation='profile-pulse 4s ease-in-out infinite';
        this.style.transform='scale(1)';
    }, 600);
});

document.getElementById("message").addEventListener('click', function(){
    if(this.innerHTML!=''){
        this.style.animation='none';
        setTimeout(()=>{
            this.style.animation='message-bounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }, 10);
    }
});

</script>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log("Server Running : http://localhost:" + port);
});
