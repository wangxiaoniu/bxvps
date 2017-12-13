

//函数加载
function addLoadEvent(func){
	var oldonload =window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//跨浏览器添加事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn);
	}
}
//跨浏览器移除事件
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn,false);
	}else if(obj.detachEvent){
		obj.detachEvent('on'+type,fn);
	}
}


//跨浏览器获取当前目标对象
function getTarget(evt){
	if(evt.target){
		//W3C
		return evt.target;
	}else if(window.event.srcElement){
		//IE
		return window.event.srcElement;
	}
}
//获取id
function getEmen(a){
	if(typeof a === 'string'){

		return document.getElementById(a);
	}else if(typeof a === 'object'){
		return a;
	}
}

//元素之后添加内容
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    // 如果最后的节点是目标元素，则直接添加
    if(parent.lastChild = targetElement){
        parent.appendChild(newElement);
    }else{
        //如果不是，则插入在目标元素的下一个兄弟节点 的前面
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}







