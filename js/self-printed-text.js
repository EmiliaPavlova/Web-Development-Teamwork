        //Parameters:
        //Широчината на "Телеграфа";
        var dwidth=950;
        //Височината на "Телеграфа";
        var dheight=600;
        //Скоростта на изписване на буквите
        var dspeed=50; //1s=1000;
        //Бакграунд;
        var dbcolor="transparent";

        var expclass='class=leftalign';

        //Съобщение:
        //В съобщението трябва да използвате \' in вместо of ';
        var mesaj='<font class="menu-font">Maybe you think, that our main goal is to make you skillfull? Maybe!</br> But our primary mission is to teach you how to become</br> the best muffin selfie maker:</br> <img  class="faces" src="../images/bogi-muffin.png" alt=""> <img  class="faces" src="../images/bankin-muffin.png" alt=""> <img class="faces" src="../images/kaskata.jpg" alt=""> <img  class="faces" src="../images/bogi-muffin1.png" alt=""> <img  class="faces" src="../images/bankin-muffin1.png" alt=""></br> To be  vital part in Karaoke Teamwork Projects:</br><img class="team-karaoke" src="../images/team-karaoke.jpg" alt=""> <img  class="team-karaoke" src="../images/softuni-conf.jpg" alt=""></br>To become a model, which pictures will be inseparable part of our future participants projects:</br> <img class="kaskata-trifon" src="../images/kaskata-trifon.jpg" alt=""></br>And remember - it\'s never too late to become ridiculous!';
        //Алгоритъм:
        var jj=-1;var kk=0;var wds=0;
        function iens6exp()
            {
                jj++;
            if(kk==0&&mesaj.charAt(jj)=="<")
                {
                    kk=1;wds=0;
                }
            else if(kk==1&&mesaj.charAt(jj)==">")
                {
                    kk=0;wds=0;
                }
            else if(kk==1)wds=0;
            if(kk==0&&mesaj.charAt(jj)!=">"&&jj<=mesaj.length)
                {
                    wds=1;
                    iens6div.innerHTML=mesaj.substring(0,jj)+'<font color="red">'+"_"+'</font>';
                }
            if(wds>0&&jj<=mesaj.length)setTimeout("iens6exp()",dspeed);
            else if(jj<=mesaj.length)iens6exp();
            }
        function ns4exp()
        {
            jj++;
            if(kk==0&&mesaj.charAt(jj)=="<")
                {
                    kk=1;wds=0;
                }
            else if(kk==1&&mesaj.charAt(jj)==">")
                {
                    kk=0;wds=0;
                }
            else if(kk==1)wds=0;
            if(kk==0&&mesaj.charAt(jj)!=">"&&jj<=mesaj.length)
                {
                    wds=1;
                    ns4div.document.write('<div '+expclass+'>'+mesaj.substring(0,jj)+'<font color="red">'+"_"+'</font></div>');
                    ns4div.document.close();
                }
            if(wds>0&&jj<=mesaj.length)setTimeout("ns4exp()",dspeed);
            else if(jj<=mesaj.length)ns4exp();
        }

        function startexp()
        {
            if(document.getElementById)
            {
                alch=document.getElementById('chthis');iens6div=document.getElementById('expdiv');iens6div.innerHTML='';iens6exp();
            }
            else if(document.all)
                {
                    alch=chthis;iens6div=expdiv;iens6div.innerHTML='';iens6exp();
                }
                else if(document.layers){ns4div=document.ns4expb0.document.ns4expb1;ns4div.document.write('');ns4div.document.close();ns4exp();
            }
        }

       