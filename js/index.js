
//首页图片切换
function TabImg() {
    if(!document.getElementById('focusimg')) return false;
    var Oprevious = document.getElementById('previous');
    var Onext = document.getElementById('next');
    var Ofoucs = document.getElementById('focusimg');
    var Oimg = Ofoucs.getElementsByTagName('img')[0];
    var UrlImg = ["images/beian.png", "images/dtvps.png", "images/manian1.png"];
    var arrUrl=["domain.html","ip.html","index.html"];
    var num = 0;

    Oimg.src = UrlImg[0];
    Ofoucs.href=arrUrl[num];
    Oprevious.onclick = function () {
        num--;
        if (num < 0) {
            num = UrlImg.length-1;
        }
        Oimg.src=UrlImg[num];
        Ofoucs.href=arrUrl[num];
    };
    Onext.onclick = function () {
        num++;
        if (num == UrlImg.length) {
            num = 0;
        }
        Oimg.src=UrlImg[num];
        Ofoucs.href=arrUrl[num];
    };
}
/*Domain tab切换*/
function DomainTab(){
    if(!document.getElementById('domain_tab')) return false;
    var Oul=document.getElementById('domain_tab');
    var aLi=Oul.getElementsByTagName('li');
    var aDiv=Oul.getElementsByTagName('div');
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onmousemove=function(){
            for(var j=0;j<aLi.length;j++){
                aLi[j].className='';
                aDiv[j].style.display='none';
            }
            this.className='active';
            aDiv[this.index].style.display='block';
        };
    }

}
/*左侧导航*/
function vpsBar(){
    if(!document.getElementsByClassName('vps_bar')[0]) return false;
    var Obar=document.getElementsByClassName('vps_bar')[0];
    var aH2=Obar.getElementsByTagName('h2');
    var aDiv=Obar.getElementsByTagName('div');

    for(var i=0;i<aH2.length;i++){
        aH2[i].index = i;
        aH2[i].onclick = function (){

            for( var i=0; i<aH2.length; i++ ){
                if(i != this.index){
                    aDiv[i].style.display='none';
                    aH2[i].className = '';
                }
            }
            if(this.className == ''){
                aDiv[this.index].style.display = 'block';
                this.className = 'off';
            }else{
                aDiv[this.index].style.display='none';
                this.className='';
            }

        }
    }
}
/*客服中心左侧导航*/
function servBar(){
    if(!document.getElementsByClassName('left_nav')[0]) return false;
    var Onav=document.getElementsByClassName('left_nav ')[0];
    var arrNav=Onav.getElementsByTagName('a');
    //获取当前窗口的url
    var Ourl = document.location.href;
    var links;
    for(var i=0;i<arrNav.length;i++){
        //获取每一个a标签的herf属性
        links = arrNav[i].getAttribute("href");
        if(Ourl.indexOf(links) != -1){
            arrNav[i].parentNode.className="now";
        }
    }
}

/*新闻列表*/
function newsList(){
    if(!document.getElementById('news_l')) return false;
    var Oul=document.getElementById('news_l');
    var arrLi=Oul.getElementsByTagName('li');

    for(var i=0;i<arrLi.length;i++){
        arrLi[i].index=i;
        if(i%5 == 0 && i!=0){
           arrLi[i].style.marginTop='20px';
            //arrLi[this.index].style.
            //console.log(arrLi[i].innerHTML);
        }
    }
}

/*注册*/
function regFrom(){
    var Oform=document.getElementsByClassName('reg_form')[0];
    var arrInput=Oform.getElementsByTagName('input');
    var Oname=getEmen('username');
    var Opassw=getEmen('pass_word');
    var Orepword=getEmen('rep_pass');
    var Oemail=getEmen('email');
    var Ospan=document.createElement('span');
    var arrText=['提醒：4-14个字符和数字!','提醒：6-14个字符和数字','提醒：重复输入密码',
        '提醒：输入正确的邮箱','提醒：20个汉字以内','提醒：输入你的手机号','提醒：输入QQ号'];
    var arrError=['X用户名长度需要在4-14之间!','用户名只能包含数字和字母','X密码长度需要在6-14之间!','X密码长度需要在6-14之间!',
        '邮箱不正确!','输入的内容长度不正确!','输入的内容长度不正确!','输入的内容长度不正确!'];
    var arrTrue=['可以注册检查通过。'];
    var str;

    for(var i=0;i<arrInput.length;i++){

    }
    arrInput[0].onfocus=function(){
        Ospan.innerHTML = arrText[0];
        Oname.appendChild(Ospan);
    };
    arrInput[1].onfocus=function(){
        Ospan.innerHTML = arrText[1];
        Opassw.appendChild(Ospan);
    };
    arrInput[0].onblur=function(){
        var Regx = /^([A-Z])(0-9)+$/;
        str=arrInput[0].value;
        if(str == '' ) {
            Ospan.innerHTML = arrError[0];
            return false;
        }else if(  !(parseInt(str.length) > 4) || !(parseInt(str.length) < 14) ){
            Ospan.innerHTML = arrError[0];
            return false;
        }else if(Regx.exec(str) != null ){
            Ospan.innerHTML = arrError[1];
            return false;
        }else{
            Ospan.innerHTML = arrTrue[0];
            return true;
        }
    }


   /* Oname.onfocus=function(){

        Ospan.innerHTML = arrText[0];
        insertAfter(Ospan,Oname);

    };
    Oname.onblur=function(){
        var Regx = /^([A-Z])(0-9)+$/;
        str=Oname.value;
        insertAfter(Ospan,Oname);
        if(str == '' ) {
            Ospan.innerHTML = arrError[0];
        }else if(  !(parseInt(str.length) > 4) || !(parseInt(str.length) < 14) ){
            Ospan.innerHTML = arrError[0];
        }else if(Regx.exec(str) != null ){
            Ospan.innerHTML = arrError[1];
        }else{
            Ospan.innerHTML = arrTrue[0];
        }

    };
    Opassw.onfocus=function(){

        Ospan.innerHTML = arrText[1];
        insertAfter(Ospan,Opassw);
    };
    Opassw.onblur=function(){
        var Regx = /^([A-Z])(0-9)+$/;
        str=Opassw.value;
        if(str == '' ) {
            Ospan.innerHTML = arrError[1];
        }else if(  !(parseInt(str.length) > 4) || !(parseInt(str.length) < 14) ){
            Ospan.innerHTML = arrError[1];
        }else if(Regx.exec(str) != null ){
            Ospan.innerHTML = arrError[2];
        }else{
            Ospan.innerHTML = arrTrue[0];
        }
    };*/
/*    function arrFocus(id) {




        id.onfocus = function () {
            switch (id) {
                case Oname:


                    break;
            case Opassw:
                    Ospan.innerHTML = arrText[1];
                   // parent.appendChild(Ospan);
                    break;
            case Orepword:
                    Ospan.innerHTML = arrText[2];
                    //parent.appendChild(Ospan);
                    break;

            }
        };
        id.onblur=function(){
            switch (id){
                case Oname:

                    console.log(parseInt(str.length));
                    if(str == '' ) {
                        Ospan.innerHTML = arrError[0];
                    }else if(  !(parseInt(str.length) > 4) || !(parseInt(str.length) < 14) ){
                        Ospan.innerHTML = arrError[0];
                    }else if(Regx.exec(str) != null ){
                        Ospan.innerHTML = arrError[1];
                    }else{
                        Ospan.innerHTML = arrTrue[0];
                    }
                    break;
            }
        }




    }*/






}


addLoadEvent(TabImg);
addLoadEvent(DomainTab);
addLoadEvent(vpsBar);
addLoadEvent(servBar);
addLoadEvent(newsList);
addLoadEvent(regFrom);







