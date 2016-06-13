setInterval(function () { bgchange(); }, 10000);

preloads = "bg-a.jpg,bg-a2.jpg,bg-a3.jpg,bg-a4.jpg,bg-a5.jpg,bg-a6.jpg,bg-a7.jpg,bg-a8.jpg,bg-a9.jpg,bg-a10.jpg,bg-a11.jpg,bg-a12.jpg,bg-a13.jpg".split(",");
var tempImg = [];

for(var x=0;x<preloads.length;x++) {
    tempImg[x] = new Image();
    tempImg[x].src = preloads[x];
}

function bgchange()
{
    var bg;
    var a = Math.random()*14;
    a=Math.floor(a);
    
    if(a==0) bg = "url('bg-a.jpg') no-repeat";
    if(a==1) bg = "url('bg-a2.jpg') no-repeat";
    if(a==2) bg = "url('bg-a3.jpg') no-repeat";
    if(a==3) bg = "url('bg-a4.jpg') no-repeat";
    if(a==4) bg = "url('bg-a5.jpg') no-repeat";
    if(a==5) bg = "url('bg-a6.jpg') no-repeat";
    if(a==6) bg = "url('bg-a7.jpg') no-repeat";
    if(a==7) bg = "url('bg-a8.jpg') no-repeat";
    if(a==8) bg = "url('bg-a9.jpg') no-repeat";
    if(a==9) bg = "url('bg-a10.jpg') no-repeat";
    if(a==10) bg = "url('bg-a11.jpg') no-repeat";
    if(a==11) bg = "url('bg-a12.jpg') no-repeat";
    if(a==12) bg = "url('bg-a13.jpg') no-repeat";
    
    document.getElementById("fullarticle").style.transition = "all 0.8s";
    document.getElementById("fullarticle").style.background = bg;

}
function faduj()
{
        var innerto = document.getElementById("innerto");
        
        innerto.style.opacity = 0;
        $(innerto).animate({opacity: 1}, 450);
        innerto.style.display = "block";
}
function eksport(kod)
{
        var u=document.getElementById("innerto");
        u.innerHTML=kod;
}
function closediv()
{
        var innerto = document.getElementById("innerto");
        
        $(innerto).animate({opacity: 0}, 450);
}
function about()
{
        var txt = "<h2 style=\"text-align:center;\">O nas</h2><div id=\"moreinfo\">Great Coffe Theme jest szablonem stworzonym przez <a href=\"http://a.test10.besaba.com\">Vertigo Project</a>, bazującym na najnowszych rozwiązaniach i trendach w sieci oferujących nowoczesny wygląd strony.</div>";
        
        eksport(txt);
        faduj();
}
function contact()
{
        var txt = "<h2 style=\"text-align:center;\">Kontakt</h2><p style=\"font-size:12px;padding-left:15px;padding-right:15px;\">E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski (<a href=\"http://a.test10.besaba.com/\">A.Test10</a>)<br />Cena: Do negocjacji</p><div id=\"map\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78426.35676303071!2d19.944630600000007!3d52.101141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471be615b07afa75%3A0x73d3e74121be070e!2zxYFvd2ljeg!5e0!3m2!1spl!2spl!4v1434297300771\" width=\"350\" height=\"350\" frameborder=\"0\" style=\"border:0\"></iframe></div>";
        
        eksport(txt);
        faduj();

}
function gallery()
{
        var txt = "<h2 style=\"text-align:center;\">Galeria</h2>";
        
        eksport(txt);
        faduj();
}