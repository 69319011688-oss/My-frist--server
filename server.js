res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Web Server</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Segoe UI',sans-serif;
}

body{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

background:linear-gradient(135deg,#0f172a,#312e81,#7c3aed);

overflow:hidden;

color:white;

}

.card{

width:450px;

padding:40px;

text-align:center;

border-radius:25px;

background:rgba(255,255,255,.08);

backdrop-filter:blur(20px);

box-shadow:0 0 35px rgba(0,0,0,.4);

animation:fade 1s;

}

@keyframes fade{

from{

opacity:0;

transform:translateY(30px);

}

to{

opacity:1;

transform:translateY(0);

}

}

.avatar{

width:130px;

height:130px;

margin:auto;

border-radius:50%;

background:#8b5cf6;

display:flex;

justify-content:center;

align-items:center;

font-size:55px;

box-shadow:0 0 20px #8b5cf6;

margin-bottom:25px;

}

h1{

margin-bottom:10px;

font-size:28px;

}

.status{

margin:20px auto;

display:inline-block;

padding:10px 25px;

background:#16a34a;

border-radius:50px;

font-weight:bold;

animation:blink 1.2s infinite;

}

@keyframes blink{

50%{

opacity:.5;

}

}

.info{

margin-top:25px;

padding:20px;

background:rgba(255,255,255,.08);

border-radius:15px;

line-height:2;

}

button{

margin-top:25px;

padding:15px 35px;

font-size:16px;

border:none;

border-radius:12px;

background:#8b5cf6;

color:white;

cursor:pointer;

transition:.3s;

}

button:hover{

transform:scale(1.05);

background:#9333ea;

}

footer{

margin-top:25px;

font-size:13px;

opacity:.8;

}

</style>

</head>

<body>

<div class="card">

<div class="avatar">💻</div>

<h1>Web Server Online</h1>

<div class="status">
🟢 ONLINE
</div>

<div class="info">

<p><b>👤 ชื่อ</b><br>
นายฉัตรมงคล โปร่งอากาศ</p>

<p><b>🆔 รหัสนักศึกษา</b><br>
69319011688</p>

<p><b>🚀 Server</b><br>
Railway Cloud</p>

</div>

<button onclick="showAlert()">
ตรวจสอบเซิร์ฟเวอร์
</button>

<footer>

Developed with Node.js ❤️

</footer>

</div>

<script>

function showAlert(){

alert("✅ เครื่องแม่ข่ายทำงานปกติบน Railway");

}

</script>

</body>

</html>
`);
