window.onload = function(){
   let title = document.querySelectorAll("h2");
   for(let i = 0; i<title.length; i++){
       if(title[i].innerHTML.length == 20){
           title[i].style.textAlign = "left";
           title[i].style.fontSize = "25px";
       }
       else if(title[i].innerHTML.length >= 21){
           title[i].style.textAlign = "left";
           title[i].style.fontSize = "23px";
       }
   }
   
   class UI{
       constructor(){
           this.btn = document.querySelector(".btn");
           this.menu = document.querySelector(".menu");
           this.tit = document.querySelectorAll(".menu section h3");
           this.icons = document.querySelectorAll(".menu .material-icons");
           this.conti = document.querySelectorAll(".menu .conicons");
           this.settings = document.querySelector(".s1");
           this.subs = document.querySelector(".s2");
           this.contact = document.querySelector(".s3");
           this.mapps = document.querySelector(".s4");
           this.settings.addEventListener("click",this.setting);
           this.subs.addEventListener("click",this.sub);
           this.contact.addEventListener("click",this.conta);
           this.mapps.addEventListener("click",this.mapp);
           this.history = [2];
           this.history[0] = $(".menu").html();
           this.h22 = document.querySelectorAll("h2");
           this.h33 = document.querySelectorAll("h3");
           this.dat = new Date();;
       }
       
       regisWidth = () =>{
           var result = parseInt($(this.tit[0]).css("width"));
           var result2 = parseInt($(this.conti[0]).css("width"));
           let total = result / result2;
           let totals = String(total);
           let totali = totals.substring(2,4);
           this.icons[0].style.left = totali+"%";
           result = parseInt($(this.tit[2]).css("width"));
           result2 = parseInt($(this.conti[2]).css("width"));
           total = result / result2;
           totals = String(total);
           totali = totals.substring(2,4);
           this.icons[2].style.left = totali+"%";
           result = parseInt($(this.tit[3]).css("width"));
           result2 = parseInt($(this.conti[3]).css("width"));
           total = result / result2;
           totals = String(total);
           totali = totals.substring(2,4);
           this.icons[3].style.left = totali+"%";
    }
    modIcons(){
        for(let i = 0; i<this.icons.length; i++){
        $(this.icons[i]).css("color","#333");
        }
    }
    setting = () =>{
       $(".menu").html(
          `<div class="sectionss"></div>
           <div class="pann d-flex">
           <h2>SETTINGS</h2>
           <div class="clos material-icons">highlight_off</div>
           </div>
           <div class="settin">
           <div class="d-flex">
           <p class="sett">Dark mode</p><span class="iconac material-icons" id="ico">toggle_off</span>
           </div>
           <div class="d-flex">
           <p class="sett">Close page</p><div class="radi"></div>
           </div>
           <div class="d-flex">
           <p class="sett">Letters color</p><span class="palle material-icons" id="ico">palette</span>
           </div>
           <div class="d-flex">
           <p class="sett">Show date</p><span class="date material-icons" id="ico">today</span>
           </div>
           </div>
          `);

          $(".pann").css("border-bottom","3px solid #111");
          $(".pann").css("height","40px");
          $(".pann h2").css("margin-left","40px");
          $(".pann h2").css("font-size","35px");
          $(".sett").css("color","#000");
          $(".sett").css("font-size","19px");
          $(".sett").css("margin-left","8px");
          $(".settin").css("margin-top","20px");
          $(".d-flex #ico").css("font-size","35px");
          $(".d-flex #ico").css("width","10px");
          $(".d-flex #ico").css("margin-left","15px");
          $(".d-flex .radi").css("width","25px");
          $(".d-flex .radi").css("height","25px");
          $(".d-flex .radi").css("margin-left","15px");
          $(".d-flex .radi").css("background","#000");
          $(".d-flex .radi").css("cursor","context-menu");
          $(".d-flex #ico").css("cursor","context-menu");
          $(".pann .clos").css("position","relative");
          $(".pann .clos").css("width","40px");
          $(".pann .clos").css("height","40px");
          $(".pann .clos").css("background","#EF1A3B");
          $(".pann .clos").css("cursor","context-menu");
          $(".pann .clos").css("font-size","40px");
          $(".pann .clos").css("left","33%");
          $(".pann .clos").on("click",this.closeSett);
          $(".d-flex .iconac").on("click",this.clickactive);
          $(".d-flex .radi").on("click",this.closepag);
          $(".d-flex .palle").on("click",this.colorLetter);
          $(".d-flex .date").on("click",this.getDate);
      }
      closeSett = () =>{
          $(".menu").html(this.history[0]);
          this.regisWidth();
          new UI();
          $(".palett").remove();
      }
      clickactive = () =>{
          let h2 = document.querySelector(".zongame h2");
          if(true){
          if($(".d-flex .iconac").html() == "toggle_off"){
              $(".d-flex .iconac").html("toggle_on");
              $(".zongame .card").css("background","#000");
              $(".zongame .card h3").css("color","#1ADF44");
              $(".zongame h2").css("color","#1ADF44");
              $(".zongame h2").css("padding-top","20px");
              $(".main .containp").css("background","#000");
              $(".zongame").css("border-color","#000");
          }
          else{
              $(".d-flex .iconac").html("toggle_off");
              $(".zongame .card").css("background","#FFF");
              $(".zongame .card h3").css("color","#000");
              $(".zongame h2").css("color","#000");
              $(".zongame .card h2").css("padding-top","0px");
              $(".main .containp").css("background","#FFF");
              $(".zongame").css("border-color","#D6D6D6");
          }
        }
      }
      closepag = () =>{
          window.history.back();
      }
      colorLetter = () =>{
          let size = 0;
          let colors = [
              "#1A33FC",
              "#F6D610",
              "#11BB11",
              "#DD3A00",
              "#700AF1",
              "#FBB949",
              "#000000",
              "#FFFFFF",
              "#999999",
              "#11DFF9",
              "#00FDCA"
          ];
          const nameColor = {
              blue: "#1A33FC",
              yellow: "#F6D610",
              green: "#11BB11",
              orange: "#DD3A00",
              purple: "#700AF1",
              coffe: " #FBB949",
              black: "#000000",
              white: "#FFFFFF",
              grey: "#999999",
              aqua: "#11DFF9",
              mar: "#00FDCA"
          };
          if($(".palett").length == 0){
          $(".zongame").html($(".zongame").html() + 
          `<div class='palett'>
          <div class='pann d-flex'>
          <h2 class="onc">PALLETTE</h2>
          </div>
          <div class='sectioncolo container row'>
          </div>
          </div>`);
          }
          else{
              $(".palett").remove();
          }
          $(".palette").ready(function(){
              for(let i =0; i<colors.length; i++){
                 for(const property in nameColor){
            $(".sectioncolo").html($(".sectioncolo").html() +
            `<section class='ang col-sm-16 col-md-6 col-lg-4' id="${property}"></section>`
            );
            $("#blue").on("click",function(){
                $("#blue").css("z-index","4");
                $("#blue").css("transition","scale(0,5)");
                $("#blue").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.blue}`);
                $("h3").css("color",`${nameColor.blue}`);
            });
            $("#yellow").on("click",function(){
                $("#yello").css("z-index","4");
                $("#yellow").css("transition","scale(0,5)");
                $("#yellow").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.yellow}`);
                $("h3").css("color",`${nameColor.yellow}`);
            }); 
            $("#green").on("click",function(){
                $("#green").css("z-index","4");
                $("#green").css("transition","scale(0,5)");
                $("#green").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.green}`);
                $("h3").css("color",`${nameColor.green}`);
            });  
            $("#orange").on("click",function(){
                $("#orange").css("z-index","4");
                $("#orange").css("transition","scale(0,5)");
                $("#orange").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.orange}`);
                $("h3").css("color",`${nameColor.orange}`);
            }); 
            $("#purple").on("click",function(){
                $("#purple").css("z-index","4");
                $("#purple").css("transition","scale(0,5)");
                $("#purple").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.purple}`);
                $("h3").css("color",`${nameColor.purple}`);
            }); 
            $("#coffe").on("click",function(){
                $("#coffe").css("z-index","4");
                $("#coffe").css("transition","scale(0,5)");
                $("#coffe").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.coffe}`);
                $("h3").css("color",`${nameColor.coffe}`);
            }); 
            $("#black").on("click",function(){
                $("#black").css("z-index","4");
                $("#black").css("transition","scale(0,5)");
                $("#black").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.black}`);
                $("h3").css("color",`${nameColor.black}`);
            }); 
            $("#white").on("click",function(){
                $("#white").css("z-index","4");
                $("#white").css("transition","scale(0,5)");
                $("#white").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.white}`);
                $("h3").css("color",`${nameColor.white}`);
            });
            $("#grey").on("click",function(){
                $("#grey").css("z-index","4");
                $("#grey").css("transition","scale(0,5)");
                $("#grey").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.grey}`);
                $("h3").css("color",`${nameColor.grey}`);
            });  
            $("#aqua").on("click",function(){
                $("#aqua").css("z-index","4");
                $("#aqua").css("transition","scale(0,5)");
                $("#aqua").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.aqua}`);
                $("h3").css("color",`${nameColor.aqua}`);
            }); 
            $("#mar").on("click",function(){
                $("#mar").css("z-index","4");
                $("#mar").css("transition","scale(0,5)");
                $("#mar").css("transform","0.2s linear");
                $("h2").css("color",`${nameColor.mar}`);
                $("h3").css("color",`${nameColor.mar}`);
            }); 
        }
            let ang = document.querySelectorAll(".ang");
            $(ang[i]).css({"background": `${colors[i]}`});
            }
            $(".sectioncolo").css("flex-wrap","wrap");
            $(".ang").css("width","40px");
            $(".ang").css("height","25px");
            $(".ang").css("padding","0px 0px 30px 10px");
            $(".ang").css("margin","8px 10px 0px 10px");
            $(".ang").css("opacity","1");
            });
            $(".sectioncolo").css("width","75%");
            $(".sectioncolo").addClass("palette");
            $(".palett").css("position","fixed");
            $(".palett").css("top","30%");
            $(".palett").css("left","45%");
            $(".palett").css("width","20%");
            $(".palett").css("height","70%");
            $(".palett").css("background","#DDD");
            $(".palett").css("opacity","0.900");
            $("[class=onc]").css("margin-left","30%");
            $(".pann").css("margin-bottom","20px"); 
        }
        getDate = () =>{
            let pri = this.history[0];
            if($(".tim").length == 0){
                $(".menu").html(`
                <div class="closetime"><span class="icontime material-icons d-flex">highlight_off</span></div>
                <div class="time container">
                <div class="display">
                <h3 class="tim"><h3>
                </div>
                </div> 
                `);
                }
                else{
                    $(".tim").remove();
                }
                $(".icontime").on("click",function(){
                    $(".menu").html(pri);
                    new UI();
                });
                $(".time").css("background","black");
                $(".time").css("width","50%");
                $(".time").css("height","8%");
                $(".time").css("border-radius","10%");
                $(".time").addClass("times");
                $(".display").css("position","relative");
                $(".display").css("top","40%");
                $(".display").css("width","100%");
                $(".display").css("height","30%");
                $(".display").css("background","red");
                $(".display").css("margin","0px 0px 0px 0px");
                $(".tim").addClass("tims");
                $(".tim").css("color","#FFF");
                $(".navp img").css("left","36%");
                $(".icontime").css("margin-left","90%");
                $(".icontime").css("width","35px");
                $(".icontime").css("height","35px");
                $(".icontime").css("background","#FF2000");
                $(".icontime").css("cursor","context-menu");
                $(".icontime").css("font-size","32px");
                $(".icontime").css("border-radius","23%");
                setInterval(function Timet(){
                    let datee = new Date();
                    $(".tim").html(datee.getHours() + ":" + datee.getMinutes() + ":" + datee.getSeconds());
                },1000);
        }
    sub = () =>{
        $(".menu").html(
            `<div class="sectionsu">
             <div class="pann2 d-flex">
             <h2>subscribe</h2>
             <div class="clos material-icons">highlight_off</div>
             </div> 
             <section class="money d-flex">
             <p>click to subscribe games</p><button class="join">join</button>
             </section>
             <section class="intro">
             <h4>Premium</h4>
             <ul>
             <li>discounts on all games</li>
             <li>try beta version games</li>
             <li>contribute to the gaming community</li>
             <li>get some paid stuff from any game</li>
             <li>get some paid stuff from any game</li>
             <li>modify any game</li>
             </ul>
             </section>
             </div>
            `
        );
        $(".pann2").css("border-bottom","3px solid #111");
        $(".pann2").css("height","40px");
        $(".pann2 h2").css("margin-left","40px");
        $(".pann2 h2").css("font-size","35px");
        $(".pann2 .clos").css("position","relative");
        $(".pann2 .clos").css("left","120px");
        $(".pann2 .clos").css("width","40px");
        $(".pann2 .clos").css("height","40px");
        $(".pann2 .clos").css("background","#EF1A3B");
        $(".pann2 .clos").css("border-radius","5px");
        $(".pann2 .clos").css("font-size","40px");
        $(".pann2 .clos").css("cursor","context-menu");
        $(".money").css("margin-top","10px");
        $(".money").css("margin-left","10px");
        $(".money p").css("font-size","30px");
        $(".money p").css("font-family","Stint Ultra Condensed,cursive");
        $(".intro").css("margin-top","59.5px");
        $(".intro").css("margin-left","10px");
        $(".intro h4").css("color","#FCC213");
        $(".pann2 .clos").on("click",this.closeSub);
        $(".money .join").on("click",this.Joining);
    }
    closeSub = () =>{
        $(".menu").html(this.history[0]);
        this.regisWidth();
        new UI();
    }
    Joining = () =>{
        $(".menu").html(`
        <div class="joining">
        <div class="pannel d-flex">
        <h2 class="title">JOIN</h2>
        <span class="material-icons">highlight_off</span>
        </div>
        <div class="content">
        <div class="reti">
        <input type="text" id="nume" min="15">
        <div class="numbers row"></div>
        </div>
        </div>
        </div>
        `);
        for(let i = 0; i<10; i++){
            $(".numbers").html($(".numbers").html() + 
            `<section id="but" class="${i} col-sm-12 col-md-6 col-lg-4">${i}</section>
            `
            );
        }
        let buut = document.querySelectorAll("#but");
        $(".pannel h2").css("margin-left","35%");
        $(".pannel h2").css("margin-bottom","0px");
        $(".pannel span").css("margin-left","32%");
        $(".pannel span").css("width","50px");
        $(".pannel span").css("height","50px");
        $(".pannel span").css("background","#FF0A00");
        $(".pannel span").css("border-radius","7%");
        $(".pannel span").css("font-size","50px");
        $(".pannel").css("border-bottom","3px solid #000");
        $(".reti").css("background","#BBB");
        $(".reti").css("margin-top","30px");
        $(".reti").css("width","40vh");
        $(".reti").css("height","50vh");
        $(".reti").css("padding-top","30px");
        $(".reti").css("padding-left","50px");
        $("#nume").css("width","245px");
        $(".numbers").css("width","180px");
        $(".numbers").css("margin-left","2px");
        for(let i = 0; i<10; i++){
            $(buut[i]).css("background","#FFF");
            $(buut[i]).css("width","30px");
            $(buut[i]).css("height","30px");
            $(buut[i]).css("border","3px solid #000");
            $("."+i).on("click",function(){
              $("#nume").val($("#nume").val() + $("."+i).html());  
            });
        }
    }
    conta = () =>{
        $(".menu").html(
          `<div class="sectioncontac">
           <div class="pann3 d-flex">
           <h2>Contact</h2><div class="clos material-icons">highlight_off</div>
           </div>
           <section class="ics">
           <section class="face d-flex" id="ico">
           <span class="material-icons">facebook</span><a id="face">FACEBOOK</a>
           </section>
           <section class="cel d-flex" id="ico">
           <span class="material-icons">smartphone</span><a id="cel">CEl</a>
           </section>
           <section class="insta d-flex" id="ico">
           <img src="img/instagram.png"><a id="insta">instagram</a>
           </section>
           <section class="gmail d-flex" id="ico">
           <img src="img/gmail.png"><a id="gmail">gmail</a>
           </section>
           </section>
           </div>
          `
        );
        $(".pann3").css("border-bottom","3px solid #111");
        $(".pann3").css("height","40px");
        $(".pann3").css("margin-bottom","20px");
        $(".pann3 h2").css("margin-left","40px");
        $(".pann3 h2").css("font-size","35px");
        $(".pann3 .clos").css("position","relative");
        $(".pann3 .clos").css("left","145px");
        $(".pann3 .clos").css("width","40px");
        $(".pann3 .clos").css("height","40px");
        $(".pann3 .clos").css("background","#EF1A3B");
        $(".pann3 .clos").css("border-radius","5px");
        $(".pann3 .clos").css("font-size","40px");
        $(".pann3 .clos").css("cursor","context-menu");
        $(".insta img").css("width","30.5px");
        $(".insta img").css("height","30.5px");
        $(".gmail img").css("width","30.5px");
        $(".gmail img").css("height","30.5px");
        $(".insta img").css("margin-top","0px");
        $(".gmail img").css("margin-top","0px");
        $(".ics").css("margin-top","35px");
        $(".ics #ico").css("margin-bottom","25px");
        $("#face").attr("href","https://www.facebook.com/harold.castano.54/");
        $("#face").html("HAROLD SKRT");
        $("#cel").attr("href","https://web.whatsapp.com/");
        $("#cel").html("+573006397804");
        $("#insta").attr("href","https://www.instagram.com/?hl=es-la");
        $("#insta").html("har_alvarez16");
        $("#gmail").attr("href","https://mail.google.com/mail/u/0/?pli=1#inbox");
        $("#gmail").html("haroldc2005@gmail.com");
        $(".pann3 .clos").on("click",this.closeCon);
    }
    closeCon = () =>{
        $(".menu").html(this.history[0]);
        new UI();
    }
    mapp = () =>{
       $(".menu").html(
         `<div class="sectionapp">
          <div class="pann4 d-flex">
          <h2>More Apps</h2><div class="clos material-icons">highlight_off</div>
          </div>
          <section class="card">
          <h2>Dcoder</h2>
          <div class="imgapp">
          <img src="https://img.utdstc.com/icon/ba9/817/ba9817e08cd922f22abf927c9f6ef3726994d5cfef4bc5db94218c2f644e77e6:200">
          </div>
          <div class="info">
          <h3>web or mobile application developed to program and create software systems<h3>
          </div>
          </section>
          </div>
         `
       );
       $(".pann4").css("border-bottom","3px solid #111");
       $(".pann4").css("height","40px");
       $(".pann4").css("margin-bottom","20px");
       $(".pann4 h2").css("margin-left","40px");
       $(".pann4 h2").css("font-size","35px");
       $(".pann4 .clos").css("position","relative");
       $(".pann4 .clos").css("left","97px");
       $(".pann4 .clos").css("width","40px");
       $(".pann4 .clos").css("height","40px");
       $(".pann4 .clos").css("background","#EF1A3B");
       $(".pann4 .clos").css("border-radius","5px");
       $(".pann4 .clos").css("font-size","40px");
       $(".pann4 .clos").css("cursor","context-menu");
       $(".imgapp").css("width: 100%","!important");
       $(".imgapp img").css("width: 100%","!important");
       $(".imgapp img").css("margin-left","25%");
       $(".imgapp img").css("margin-top","0px");
       $(".sectionapp .card").css("width","100%");
       $(".info h3").css("margin-left","10px");
       $(".pann4 .clos").on("click",this.closeAPP);
    }
    closeAPP = () =>{
        $(".menu").html(this.history[0]);
        new UI();
    }
   }
   let obj = new UI();
   obj.regisWidth();
   $(".btn").on("click",activeMen);
   function activeMen(){ 
       var menu = document.querySelector(".menu");
       if($(".menu").css("visibility") == "hidden"){ 
           menu.classList.toggle("active");
           obj.regisWidth();
           obj.modIcons();
        }
        else{
            menu.classList.toggle("active");
            $(".palett").remove();
        }    
   }
}