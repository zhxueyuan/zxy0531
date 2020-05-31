function Prompt(obj){
	this.box = document.getElementById(obj.id);
    this.box.style.display = "block";
	this.header = this.box.querySelector(".modal-header");
	this.header_title = this.box.querySelector(".modal-title");
	this.body = this.box.querySelector(".modal-body p");
	this.close = this.box.querySelector(".modal-header span");
	this.btn_default = this.box.querySelector(".btn-default");
    this.btn_primary = this.box.querySelector(".btn-primary");
    this.bodys = document. querySelector("body");
    this.title = obj.title;
	this.content = obj.content;
	this.positionX = obj.positionX;
    this.positionY = obj.positionY;
    this.title_color = obj.title_color;
	this.content_color = obj.content_color;
	this.type = obj.type;
	this.drag = obj.drag;
    this.animation = obj.animation;
    this.color = obj.color;
    // this.html = obj.html;/1
    this.init();
	this.addEvent();
}
Prompt.prototype.init = function(){
    switch(this.type){
        case "small":
            this.box.style.width = "300px";
            break;
        case "big":
            this.box.style.width = "900px";
            break;
        default:
            this.box.style.width = this.type+"px";
            break; 
    }
    switch(this.positionX){
        case "center":
			this.box.style.left = "50%";
			this.box.style.transform="translateX(-50%) ";
			break;
		case "left":
			this.box.style.left = "0";
			break;
		case "right":
			this.box.style.right = 0;
			break;
		default:
			this.box.style.left = this.posX+"px";
			break;
    }
    switch(this.positionY){
        case "center":
			this.box.style.top = "50%";
			this.box.style.transform+="translateY(-50%)";
			break;
		case "left":
			this.box.style.top = "0";
			break;
		case "bottom":
			this.box.style.top = "100%";
			this.box.style.transform+="translateY(-100%)";
			break;
		default:
			this.box.style.top = this.posY+"px";
			break;
    }
  
    if(this.color){
     //背景颜色
        this.bodys.style.backgroundColor = this.color;
    }
    if(this.title){
    //标题
		this.header_title.innerHTML = this.title;
    }
    //标题颜色
    this.header_title.style.color = this.title_color;
    //内容
    if(this.content){
		this.body.innerHTML = this.content;
    }
    //内容颜色
    this.body.style.color = this.content_color;
    //动画效果
    if(this.animation){
		this.box.style.animation = "slidedown .2s linear forwards";
	}else{
		this.box.style.animation ="";
	}
};
Prompt.prototype.addEvent = function(){
    var that = this;
    var isMouseDown = false;
    //拖动
    if(this.drag){
		this.header.style.cursor = "move";
		this.header.addEventListener("mousedown",function(evt){
			isMouseDown = true;
		},false);
		document.onmousemove = function(evt){
			if(isMouseDown){
				that.box.style.top = evt.clientY-30+"px";
				that.box.style.left = evt.clientX-that.box.clientWidth/2+"px";
				that.box.style.transform="";
			}
			
		};
		this.header.onmouseup = function(){
			isMouseDown = false;
		};
    }
    this.close.onclick = function(){
		if(that.animation){
            that.box.style.animation = "slideup .15s linear forwards";
			setTimeout(function(){
				that.box.style.display = "none";
			},500);	
		}else{
			that.box.style.animation ="";
			that.box.style.display = "none";
        }
        that.bodys.style.backgroundColor = "white";
        
    };
    this.btn_default.onclick = function(){
		if(that.animation){
			that.box.style.animation = "slideup .15s linear forwards";
			setTimeout(function(){
				that.box.style.display = "none";
			},500);
		}else{
			that.box.style.animation ="";
			that.box.style.display = "none";
        }
        that.bodys.style.backgroundColor = "white";
        
	};
};