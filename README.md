# 对话框插件
==============================
## 一、 组件介绍
  
  1、原生JS实现，不需要依赖任何js库。
  
  2、所有参数都可以修改。
## 二、 使用方法

    1、链接drag.CSS
    
    2、链接drag.js
    
    3、复制html代码
    
 ```
    <div class="modal-dialog" id="box1" style="display:none;"> 
        <div class="modal-content">
    		<div class="modal-header">
    			<h4 class="modal-title">对话框标题</h4>
    			<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
    		</div>
    		<div class="modal-body" style="max-height: initial; overflow: visible;">
    			<p>主题内容...</p>
    		</div>
    		<div class="modal-footer">
    			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
    			<button type="button" class="btn btn-primary">确定</button>
    		</div>
        </div>
    </div>
```
    4、传参
```    var obj1 = {
      id:"box1",//button标签的id
      type:"big",//对话框的宽度
      color:"#808080",//背景颜色
      title:"懂事的人，一生都在为难自己",//对话框标题内容
      title_color:"red",//标题颜色
      content:"就像樊登先生说的：“假如你有两只小狗，一只小狗很乖，很听话，一只小狗，不听话，乱叫乱咬人，如果你不得已要抛弃一只，你一定会抛弃内只更乖的，因为，至少有人会捡它”。",
      content_color:"black",//内容的颜色
      positionX:"center",//设置对话框显示位置
      positionY:"center",//设置对话框显示位置
      drag:true,//拖动
      animation:true,
    }
```

 ## 传输参数与参数值
| 参数名 | 参数值 | 是否必填 | 参数介绍 | 参数类型 |
| :-----| :---- | :----: | :---- | :---- |
| id | 节点id | 是 | 对话框最外层元素id | string |
| type | small / normal / big / 具体宽度 / 默认为600px | 否 | 对话框宽度 | string |
| title | 对话框标题内容  | 否 | 对话框标题内容 | string |
| title_color | #000 / red / rgba() / rgb() | 否 | 标题文字颜色 | string |
| content | 对话框主体内容  | 否 | 对话框主体内容 | string |
| content_color | #000 / red / rgba() / rgb() | 否 | 主体文字颜色 | string |
| positionX | x方向偏移距离：100px / left / center / right | 否 | 对话框水平方向位置 | string |
| positionY | Y方向偏移距离：100px / top / center / bottom | 否 | 对话框垂直方向位置 | string |
| drag | 布尔值 | 否 | 是否可以拖动 | boolean |
| animation | 布尔值 | 否 | 对话框动画 | boolean |