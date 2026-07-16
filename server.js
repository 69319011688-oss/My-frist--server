const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

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
font-family:Segoe UI,sans-serif;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#0f172a,#312e81,#7c3aed);
color:white;
}

.card{
width:430px;
padding:40px;
background:rgba(255,255,255,.08);
backdrop-filter:blur(15px);
border-radius:25px;
text-align:center;
box-shadow:0 0 30px rgba(0,0,0,.4);
}

.avatar{
font-size:70px;
margin-bottom:20px;
}

.status{
display:inline-block;
padding:10px 25px;
background:#16a34a;
border-radius:30px;
margin:20px 0;
font-weight:bold;
}

.info{
margin-top:20px;
line-height:2;
}

button{
margin-top:25px;
padding:15px 30px;
border:none;
background:#8b5cf6;
color:white;
border-radius:12px;
cursor:pointer;
font-size:16px;
}

button:hover{
background:#9333ea;
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
<p><b>ชื่อ</b><br>นายฉัตรมงคล โปร่งอากาศ</p>
<p><b>รหัสนักศึกษา</b><br>69319011688</p>
<p><b>Server</b><br>Railway Cloud</p>
</div>

<button onclick="checkServer()">
ตรวจสอบ Server
</button>

</div>

<script>
function checkServer(){
alert("✅ เครื่องแม่ข่ายทำงานปกติ");
}
</script>

</body>
</html>
`);

});

server.listen(port, () => {
    console.log("Server Running on Port " + port);
});
