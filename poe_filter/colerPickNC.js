/** 
*	ColerPicker от AmazingMetaCraftt
*
*	Email:	amazing.meta.craft@gmail.com
*	GitHub:	https://github.com/amazingmeta
*	Site:	https://amazingmeta.github.io
*
*	class="buttonColer"
**/
;(async function(){
var picP=5;
var rD=' ';
var startColor='0 255 0';
var styleButton='width:30px;height:30px;border:1px solid #000;border-radius:4px;font-size:18px;font-family:"tahoma";cursor:pointer;';
var preset=[
'200 200 200',	'104 244 230',	'255 255 119',	'175 96 37',	'27 162 155',	'170 158 130',	'74 230 58',	'14 186 255',	'127 127 127',	'221 221 221',
'136 136 255',	'150 0 0',		'54 100 146',	'255 215 0',	'208 32 144',	'184 218 242',	'210 0 0',		'180 96 0',		'163 141 109',	'255 200 0',
'255 40 0',		'210 0 220',	'74 0 160',		'50 230 100',	'0 100 150',	'231 180 120',	'170 158 120',	'255 192 203',	'30 144 255',	'124 81 50',
'191 91 0',		'254 191 128',	'38 0 86',		'88 0 179',		'192 128 254',	'98 128 0',		'191 244 0',	'239 254 128',	'86 0 0',		'191 0 0',
'254 128 128',	'0 0 128',		'0 0 254',		'128 179 254',	'254 170 0',	'254 213 0',	'254 254 153',	'114 0 83',		'204 0 154',	'254 128 222',
'0 0 0',		'255 255 255',	'255 0 0',		'0 255 0',		'0 0 255',		'0 73 0',		'0 191 0',		'128 254 128',	'42 42 42',		'135 135 135',
];
var cPF='colerPickerForm',
	bC='buttonColer',
	nOICP='noOneInputColerPicker',
	nTICP='noTwoInputColerPicker',
	cPP='colerPickerPreview',
	bCP='buttonColerPicker',
	bOCP='ButtonOkColerPicker',
	bDCP='buttonDestroyColerPicker',
	bCCP='buttonCancelColorPicker',
	bCPNO='blockColerPickerNoOne',
	bCPNT='blockColerPickerNoTwo',
	bCPNTr='blockColerPickerNoThree',
	glBCP='generalBCP',
	cPicker='generalCP',
	oLeft='colerPickerFloatLeft',
	oRight='colerPickerFloatRight',
	bPres='colerPickerButtonPreset',
	cPIRS='colerPickerInputRangeSlider',
	button,RGB,A,cRGBA,
	head=document.getElementsByTagName('head')[0],
	body=document.getElementsByTagName('body')[0],
	oBlock=['','',''];
if(preset.length>0){
	oBlock=['<div class="'+oLeft+'">','<div class="'+oRight+'">','</div>'];
}
var form=document.createElement('div');
form.id=cPF;
form.style.backgroundColor='rgba(0,0,0,0.8)';
form.style.position='absolute';
form.style.transform='translate(-50%,0%)';
form.style.border='1px solid #000';
form.style.borderRadius='4px';
form.style.padding='6px';
form.style.display='none';
form.style.minWidth='255px';
var bg='background:',
	grW='linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1) 100%);',
	grB='linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);';
head.innerHTML+=['<style id="cssColerP">'+'.'+bC+'{'+styleButton+'}'+'#'+nTICP+'{'+bg+'-webkit-linear-gradient(left, rgba(255, 0, 0, 1) 0%, rgba(255, 255, 0, 1) 16.6%, rgba(0, 255, 0, 1) 33.3%, rgba(0, 255, 255, 1) 50%, rgba(0, 0, 255, 1) 66.6%, rgba(255, 0, 255, 1) 83.2%, rgba(255, 0, 0, 1) 100%);}'+'.'+bCP+'{outline:none;border:1px solid rgb(14, 44, 71);border-radius:3px;margin:0 0 0 0;margin-left:1px;padding:5px 9px;font-size:24px;font-family:"tahoma";background-color:rgba(204, 233, 255, 1);color:rgb(14, 44, 71);cursor:pointer;}'+'.'+bCP+':hover{background-color:rgb(99,237,105);color:rgb(0,94,14)}'+'.'+cPP+'{width:253px;height:50px;margin:5px 0;border:1px solid #000;border-radius:4px;font-size:30px;font-family:"tahoma";text-align:center;padding:10px 0 0;cursor:pointer;}'+'#'+bCPNO+'{width:255px;height:255px;padding:0;margin:0;}'+'#'+bCPNT+'{width:255px;height:255px;padding:0;margin:0;'+bg+'-webkit-'+grW+bg+'-moz-'+grW+bg+'-ms-'+grW+bg+'-o-'+grW+bg+grW+'}'+'#'+bCPNTr+'{width:255px;height:255px;padding:0;margin:0;position:absolute;'+bg+'-webkit-'+grB+bg+'-moz-'+grB+bg+'-ms-'+grB+bg+'-o-'+grB+bg+grB+'}'+'.'+oLeft+'{float:left;margin:0 5px 0 0;}'+'.'+oRight+'{float:right;margin:0 0 0 5px;width:42px;}'+'.'+bPres+'{outline:none;width:40px;height:40px;border:1px solid #000;border-radius:3px;padding:0;margin:1px;cursor:pointer;}'+'.'+cPIRS+'{-webkit-appearance:none;outline:none;width:255px;height:30px;margin:0;padding:0;border:0;border-radius:2px;cursor:pointer;}'+'.'+cPIRS+'::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:20px;border:1px solid #000;border-radius:2px;background-color:rgba(204, 233, 255, 1);}'+'#'+cPicker+'{width:10px;height:10px;border:3px solid #000;border-radius:50%;position:absolute;top:5px;left:5px;transform:translate(-50%,-50%);background-color:rgba(0,0,0,0);}'+'#'+glBCP+'{width:255px;height:255px;padding:0;margin:0;position:relative;top:0px;left:0px;cursor:pointer;}'+'#'+bOCP+'{width:44px;}'+'#'+bCCP+'{width:98px;}'+'#'+bDCP+'{width:108px;}'+'</style>'];
form.innerHTML+=[oBlock[0]+'<button id="'+bOCP+'" class="'+bCP+'">ок</button>'+'<button id="'+bCCP+'" class="'+bCP+'">отмена</button>'+'<button id="'+bDCP+'" class="'+bCP+'">удалить</button><br>'+'<div id="'+cPP+'" class="'+cPP+'"></div>'+'<input id="'+nOICP+'" class="'+cPIRS+'" type="range" min="0" max="1" step="0.01" value="1"><br>'+'<input id="'+nTICP+'" class="'+cPIRS+'" type="range" min="0" max="1530" step="1" value="0"><br>'+'<div id="'+bCPNO+'">'+'<div id="'+bCPNT+'">'+'<div id="'+bCPNTr+'">'+'<div id="'+cPicker+'"></div>'+'<div id="'+glBCP+'"></div>'+'</div>'+'</div>'+'</div>'+oBlock[2]+oBlock[1]+oBlock[2]];
body.appendChild(form);
if(preset.length>0){
	var no=0,count=0;
	form.style.minWidth=parseInt(form.style.minWidth,10)+57+'px';
	for(var i = 0; i < preset.length; i++){
		count+=1;
		var el=preset[i].split(' ');
		if(count>10){
			count=1;
			no+=1;
			form.style.minWidth=parseInt(form.style.minWidth,10)+47+'px';
			form.innerHTML+=oBlock[1]+oBlock[2];
		}
		var oR=document.getElementsByClassName(oRight)[no];
		oR.innerHTML+='<button class="'+bPres+'" style="background-color:rgb('+el[0]+', '+el[1]+', '+el[2]+');" value="'+el[0]+', '+el[1]+', '+el[2]+'" ></button>';
	}
}
var butPres=document.getElementsByClassName(bPres);
for(var ii = 0; ii < butPres.length; ii+=1){
	var e=butPres[ii];
	e.addEventListener('click',buttonP);
}
var inputOne=document.getElementById(nOICP),
	inputTwo=document.getElementById(nTICP),
	blockOne=document.getElementById(bCPNO),
	picker=document.getElementById(cPicker),
	generalB=document.getElementById(glBCP),
	blockThree=document.getElementById(bCPNTr),
	preview=document.getElementById(cPP),
	buttonOk=document.getElementById(bOCP),
	buttenCan=document.getElementById(bCCP),
	buttonDes=document.getElementById(bDCP),
	form=document.getElementById(cPF);
function buttonP(){
	var v=this.value.split(', ');
	rangeAlfa(v[0],v[1],v[2]);
	textPreview(v[0],v[1],v[2],A);
	blockPreview(v[0],v[1],v[2],A);
	blockGrady(v[0],v[1],v[2],1);
	if(v[0]<150&&v[1]<150&&v[2]<150){preview.style.color='#fff';}else{preview.style.color='#000';}
return cRGBA=RGB=v[0]+', '+v[1]+', '+v[2];A=1;
}
var btnC=document.getElementsByClassName('buttonColer');
var btnCount=btnC.length;
async function clk(){
	btnC=document.getElementsByClassName('buttonColer');
	for(var i = 0; i < btnC.length; i++){
		var elems=btnC[i];
		elems.addEventListener('click',colerPick);
	}
	btnCount=btnC.length;
	return btnCount;
}clk();
(async function fps(){
	if(document.getElementsByClassName('buttonColer').length!=btnCount){clk();}
	window.setTimeout(fps,1000);
})();
async function colerPick(event){
		form.style.display='block';
		var elHtml=document.getElementsByTagName('html')[0],
			cssHH=parseInt(getComputedStyle(elHtml).height),
			cssHW=parseInt(getComputedStyle(elHtml).width),	
			W=window.innerWidth,
			H=window.innerHeight,
			X=event.pageX,
			Y=event.pageY,
			cssW=getComputedStyle(form).width,
			cssH=getComputedStyle(form).height;
		cssW=parseInt(cssW,10)/100*50+5;
		cssH=parseInt(cssH,10)+15;
		if(X>cssHW-parseInt(getComputedStyle(form).width)){X=cssHW-cssW}
		if(X<cssW){X=cssW;}
		if(Y>cssHH-cssH){Y=cssHH-cssH}
		if(Y<0){Y=0}
		form.style.top=Y+'px';
		form.style.left=X+'px';
		inputOne.value=1;
		inputTwo.value=0;
		var sc=startColor.split(' ');
		blockGrady(sc[0],sc[1],sc[2],1);
		blockPreview(sc[0],sc[1],sc[2],1);
		picker.style.top='0px';
		picker.style.left='0px';
		rangeAlfa(sc[0],sc[1],sc[2]);
		textPreview(sc[0],sc[1],sc[2],1);
		cRGBA=RGB=sc[0]+', '+sc[1]+', '+sc[2];
		A=1;
		if(event.target.getAttribute('val')){
			var b=event.target.getAttribute('val').split(rD);
			b[0]=parseInt(b[0],10);b[1]=parseInt(b[1],10);b[2]=parseInt(b[2],10);b[3]=parseFloat(b[3],10);
			if(isNaN(b[0])){b[0]=startColor.split(' ')[0];}
			if(isNaN(b[1])){b[1]=startColor.split(' ')[1];}
			if(isNaN(b[2])){b[2]=startColor.split(' ')[2];}
			if(isNaN(b[3])){b[3]=1;}
			cRGBA=RGB=b[0]+', '+b[1]+', '+b[2];A=b[3];
			rangeAlfa(b[0],b[1],b[2]);
			textPreview(b[0],b[1],b[2],A);
			blockPreview(b[0],b[1],b[2],A);
			blockGrady(b[0],b[1],b[2],1);
			inputOne.value=A;
			b=undefined;
		}
		return button=event.target;
}
inputOne.oninput=function(event){
	var v=this.value,c=cRGBA.split(', ');
	blockPreview(c[0],c[1],c[2],v);
	textPreview(c[0],c[1],c[2],v);
	return A=v;
}
inputTwo.oninput=function(event){
	var R,G,B;
	var v=this.value;
	if(v<=255){R=255;G=v;B=0;}
	if(v>255){R=255-(v-255);G=255;B=0;}
	if(v>510){R=0;G=255;B=v-510;}
	if(v>765){R=0;G=255-(v-765);B=255;}
	if(v>1020){R=v-1020;G=0;B=255;}
	if(v>1275){R=255;G=0;B=255-(v-1275);}
	if(A===undefined) {A=1;}
	blockGrady(R,G,B,1);
	blockPreview(R,G,B,A);
	rangeAlfa(R,G,B);
	textPreview(R,G,B,A);
	return cRGBA=RGB=R+', '+G+', '+B;
}
function gWhite(c,p){var v=(255-parseInt(c))/100*parseInt(p);return parseInt(c)+parseInt(v);}
function gBlack(c,p){var v=parseInt(c)-(c/100)*parseInt(p);if(v<0){v=0;}return v;}
generalB.onmousedown=function(event){
	event.stopPropagation();
	var x,y,p=255/100;
	x=event.offsetX;
	y=event.offsetY;
	if(y<picP||y<0){y=0;}if(y>255-parseInt(picP,10)){y=255;}
	if(x<picP||x<0){x=0;}if(x>255-parseInt(picP,10)){x=255;}
	picker.style.top=y+'px';
	picker.style.left=x+'px';
	generalB.onmousemove=function(event){
		x=event.offsetX;
		y=event.offsetY;
		if(y<picP||y<0){y=0;}if(y>255-parseInt(picP,10)){y=255;}
		if(x<picP||x<0){x=0;}if(x>255-parseInt(picP,10)){x=255;}
		picker.style.top=y+'px';
		picker.style.left=x+'px';
		if(y>100) {picker.style.borderColor='#fff';preview.style.color='#fff';}else{picker.style.borderColor='#000';preview.style.color='#000';}
		var xy=x+' '+y;
		if(RGB===undefined){
			var sC=startColor.split(' ');
			RGB=sC[0]+', '+sC[1]+', '+sC[2];
			A=1;
		}
		var v=xy.split(' '),
			white=v[0],
			black=v[1],
			white=white/p,
			black=black/p,
			val=RGB.split(', '),
			R=parseInt(val[0]),
			G=parseInt(val[1]),
			B=parseInt(val[2]);
		if(white>=0){
			R=gWhite(R,white);
			G=gWhite(G,white);
			B=gWhite(B,white);
			if(black>=0){
				R=gBlack(R,black);
				G=gBlack(G,black);
				B=gBlack(B,black);
				if(black>=100){R=0;G=0;B=0;}
				if(R<150&&G<150&&B<150){picker.style.borderColor='#fff';}
				blockPreview(R,G,B,A);
				rangeAlfa(R,G,B);
				textPreview(parseInt(R,10),parseInt(G,10),parseInt( B,10),A);
				return cRGBA=parseInt(R,10)+', '+parseInt(G,10)+', '+parseInt(B,10);
			}
		}	
	}
	document.onmouseup=function(event){generalB.onmousemove=function(event){return false;}}
}
buttonOk.onclick=function(event){
	form.style.display='none';
	if(cRGBA===undefined){return false;}
	if(A===undefined){A=1;}
	var crgba=cRGBA.split(', '),r,g,b,a;
	r=crgba[0];g=crgba[1];b=crgba[2];a=A;
	button.setAttribute('val',r+rD+g+rD+b+rD+a);
	if(button.getAttribute('val')===null){button.setAttribute('val',cRGBA+', '+A);}
	button.style.backgroundColor='rgba('+cRGBA+', '+A+')';
	var atrb=document.getElementsByClassName(button.getAttribute('no2'))[0];;
	if(button.getAttribute('atr')) {document.getElementById(button.getAttribute('no')).setAttribute(button.getAttribute('atr'),r+rD+g+rD+b+rD+a);}
	if(button.getAttribute('atr')==='colorText'){atrb.style.color='rgba('+r+','+g+','+b+','+a+')';}
	if(button.getAttribute('atr')==='colorBacground'){atrb.style.backgroundColor='rgba('+r+','+g+','+b+','+a+')';}
	if(button.getAttribute('atr')==='colorBorder'){
		atrb.style.border='2px solid';
		atrb.style.borderColor='rgba('+r+','+g+','+b+','+a+')';
	}
//===========================================================
//	куда отдаем результат? переменные r g b a делитель rD
//===========================================================
	//	пример
	// console.log(r+rD+g+rD+b+rD+a);
//===========================================================
}
buttenCan.onclick=function(event){form.style.display='none';return RGB=A=button=cRGBA=undefined;}
buttonDes.onclick=function(event){
	button.setAttribute('val','');
	button.removeAttribute('val');
	button.style.backgroundColor='';
	form.style.display='none';
	var atrb=document.getElementsByClassName(button.getAttribute('no2'))[0];;
	if(button.getAttribute('atr')) {document.getElementById(button.getAttribute('no')).removeAttribute(button.getAttribute('atr'));}
	if (button.getAttribute('atr')==='colorText') {atrb.style.color='rgb(200 200 200)';}
	if (button.getAttribute('atr')==='colorBacground') {atrb.style.backgroundColor='rgb(0 0 0)';}
	 if(button.getAttribute('atr')==='colorBorder'){
		atrb.style.border='0px';
		atrb.style.borderColor='';
	}
	return RGB=A=button=cRGBA=undefined;
}
function rangeAlfa(r,g,b){
	var grad='linear-gradient(left, rgba(0, 0, 0, 0) 0%, rgba('+r+', '+g+', '+b+', 1) 100%)';
	inputOne.style.background='-webkit-'+grad;
	inputOne.style.background+='-moz-'+grad;
	inputOne.style.background+='-ms-'+grad;
	inputOne.style.background+='-o-'+grad;
	inputOne.style.background+=grad;
}
function blockPreview(r,g,b,a=A){preview.style.backgroundColor='rgba('+r+', '+g+', '+b+', '+a+')';}
function blockGrady(r,g,b,a=A){blockOne.style.backgroundColor='rgba('+r+', '+g+', '+b+', '+a+')';}
function textPreview(r=0,g=0,b=0,a=1){preview.innerText=r+rD+g+rD+b+rD+a;}
preview.onclick=function copyCode(event){
	event.stopPropagation();
	var el=event.target,r,s,text=el.innerText;
		r=document.createRange();
		r.selectNodeContents(el);
		s=window.getSelection();
		s.removeAllRanges();
		s.addRange(r);
		s.toString();
		document.execCommand('copy',false,null);
		window.getSelection().removeAllRanges();
	setTimeout(function(){preview.innerText='скопированно';setTimeout(function(){preview.innerText=text;text=r=s=undefined;},500)},50);
};
}());;
