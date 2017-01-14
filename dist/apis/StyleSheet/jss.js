var _css=require('./css');var css=_interopRequireWildcard(_css);
var _flattenStyle=require('../../modules/flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ReactNativePropRegistry=require('../../modules/ReactNativePropRegistry');var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);

var _jss=require('jss');var _jss2=_interopRequireDefault(_jss);
var _jssPresetDefault=require('jss-preset-default');var _jssPresetDefault2=_interopRequireDefault(_jssPresetDefault);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}


var jssSetup=false;

if(!jssSetup){
_jss2.default.setup((0,_jssPresetDefault2.default)());
jssSetup=true;
}

var styleElement=void 0;

var STYLE_SHEET_ID='react-native-style__';

var absoluteFillObject={position:'absolute',left:0,right:0,top:0,bottom:0};

var defaultStyleSheet=css.getDefaultStyleSheet();

var resolveStyle=function resolveStyle(style){
if(typeof style==='string'){
return style;
}else if(Array.isArray(style)){
return style.map(function(s,i){
var rs=resolveStyle(s);
return rs&&i>0?' '+rs:rs;
}).join('');
}else if(typeof style==='object'){
var className='generated-class';
var styles=_defineProperty({},
className,style);


var jssObj=_jss2.default.createStyleSheet(styles).attach();

return jssObj.classes[className];
}else{
return'';
}
};

module.exports={




_reset:function _reset(){
if(styleElement){
document.head.removeChild(styleElement);
styleElement=null;
}
},

absoluteFill:_ReactNativePropRegistry2.default.register(absoluteFillObject),

absoluteFillObject:absoluteFillObject,

create:function create(styles){
var sheet=_jss2.default.createStyleSheet(styles).attach();
return sheet.classes;
},

hairlineWidth:1,

flatten:_flattenStyle2.default,


render:function render(){
return _react2.default.createElement('style',{dangerouslySetInnerHTML:{__html:defaultStyleSheet},id:STYLE_SHEET_ID});
},





resolve:function resolve(props){
var className=props.className||'';
className+=resolveStyle(props.style);
return{className:className};
}};