(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"StarFishBayGame_atlas_1", frames: [[1861,239,156,86],[1861,327,156,86],[1861,415,156,86],[0,1076,441,39],[869,297,602,185],[579,484,652,158],[956,742,575,120],[0,644,596,132],[755,864,428,97],[1282,1061,354,55],[1233,571,531,169],[0,412,577,193],[357,846,396,108],[1185,941,405,102],[839,1045,441,46],[1185,864,302,40],[0,1029,302,40],[1638,1061,302,40],[443,1076,302,40],[839,963,278,78],[598,644,356,200],[869,0,495,278],[1890,810,122,106],[956,644,100,88],[1473,297,386,272],[0,0,495,387],[1233,484,76,72],[1759,0,236,237],[1766,571,236,237],[1366,0,391,295],[1906,918,96,108],[497,0,370,410],[0,778,355,129],[1533,810,355,129],[0,909,312,118],[1592,941,312,118],[314,956,312,118],[628,963,209,110]]},
		{name:"StarFishBayGame_atlas_2", frames: [[0,0,683,710],[0,712,683,710],[977,1378,590,443],[1386,925,550,366],[0,1424,975,450],[1487,0,512,512],[685,925,699,451],[685,0,800,533],[685,535,944,388]]},
		{name:"StarFishBayGame_atlas_3", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_4", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_5", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_6", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_7", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_8", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_9", frames: [[1001,1277,683,710],[0,1411,999,588],[0,0,1080,607],[1082,0,898,673],[0,609,800,800],[802,675,900,600]]},
		{name:"StarFishBayGame_atlas_10", frames: [[0,0,1080,608],[0,610,1080,608],[0,1220,1080,608]]},
		{name:"StarFishBayGame_atlas_11", frames: [[0,0,1080,718],[0,1440,1080,608],[0,720,1080,718]]},
		{name:"StarFishBayGame_atlas_12", frames: [[0,0,1080,720],[0,722,1080,719]]},
		{name:"StarFishBayGame_atlas_13", frames: [[0,0,1080,792],[0,794,1024,768]]},
		{name:"StarFishBayGame_atlas_14", frames: [[0,0,1080,810],[0,812,1080,810]]},
		{name:"StarFishBayGame_atlas_15", frames: [[0,1026,1107,830],[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_16", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_17", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_18", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_19", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_20", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_21", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_22", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_23", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_24", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_25", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_26", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_27", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_28", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_29", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_30", frames: [[0,0,1280,853],[0,855,1280,853]]},
		{name:"StarFishBayGame_atlas_31", frames: [[0,0,1280,853],[0,855,1280,853]]},
		{name:"StarFishBayGame_atlas_32", frames: [[0,0,1280,853],[0,855,1280,853]]},
		{name:"StarFishBayGame_atlas_33", frames: [[0,0,1280,853],[0,855,1280,853]]},
		{name:"StarFishBayGame_atlas_34", frames: [[0,0,1268,1024],[0,1026,1280,854]]},
		{name:"StarFishBayGame_atlas_35", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_36", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_37", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_38", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_39", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_40", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_41", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_42", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_43", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_44", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_45", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_46", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_47", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_48", frames: [[0,0,1080,1440]]},
		{name:"StarFishBayGame_atlas_49", frames: [[0,0,1782,1188]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.border_waterCol = function() {
	this.initialize(ss["StarFishBayGame_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bubble1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bubble2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.clam_shadow = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00000 = function() {
	this.initialize(ss["StarFishBayGame_atlas_29"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00001 = function() {
	this.initialize(ss["StarFishBayGame_atlas_28"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00002 = function() {
	this.initialize(ss["StarFishBayGame_atlas_27"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00003 = function() {
	this.initialize(ss["StarFishBayGame_atlas_26"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00004 = function() {
	this.initialize(ss["StarFishBayGame_atlas_25"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00005 = function() {
	this.initialize(ss["StarFishBayGame_atlas_24"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00006 = function() {
	this.initialize(ss["StarFishBayGame_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00007 = function() {
	this.initialize(ss["StarFishBayGame_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00008 = function() {
	this.initialize(ss["StarFishBayGame_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00009 = function() {
	this.initialize(ss["StarFishBayGame_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00010 = function() {
	this.initialize(ss["StarFishBayGame_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00011 = function() {
	this.initialize(ss["StarFishBayGame_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00012 = function() {
	this.initialize(ss["StarFishBayGame_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00013 = function() {
	this.initialize(ss["StarFishBayGame_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00014 = function() {
	this.initialize(ss["StarFishBayGame_atlas_15"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00000 = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00001 = function() {
	this.initialize(ss["StarFishBayGame_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00002 = function() {
	this.initialize(ss["StarFishBayGame_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00003 = function() {
	this.initialize(ss["StarFishBayGame_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00004 = function() {
	this.initialize(ss["StarFishBayGame_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00005 = function() {
	this.initialize(ss["StarFishBayGame_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00006 = function() {
	this.initialize(ss["StarFishBayGame_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00007 = function() {
	this.initialize(ss["StarFishBayGame_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00008 = function() {
	this.initialize(ss["StarFishBayGame_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00009 = function() {
	this.initialize(ss["StarFishBayGame_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00010 = function() {
	this.initialize(ss["StarFishBayGame_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00011 = function() {
	this.initialize(ss["StarFishBayGame_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00012 = function() {
	this.initialize(ss["StarFishBayGame_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00013 = function() {
	this.initialize(ss["StarFishBayGame_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00014 = function() {
	this.initialize(ss["StarFishBayGame_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00015 = function() {
	this.initialize(ss["StarFishBayGame_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00016 = function() {
	this.initialize(ss["StarFishBayGame_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00017 = function() {
	this.initialize(ss["StarFishBayGame_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00018 = function() {
	this.initialize(ss["StarFishBayGame_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00019 = function() {
	this.initialize(ss["StarFishBayGame_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00020 = function() {
	this.initialize(ss["StarFishBayGame_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00021 = function() {
	this.initialize(ss["StarFishBayGame_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00022 = function() {
	this.initialize(ss["StarFishBayGame_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00023 = function() {
	this.initialize(ss["StarFishBayGame_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00024 = function() {
	this.initialize(ss["StarFishBayGame_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00025 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00026 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00000 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00001 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00002 = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00003 = function() {
	this.initialize(ss["StarFishBayGame_atlas_44"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00004 = function() {
	this.initialize(ss["StarFishBayGame_atlas_43"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00005 = function() {
	this.initialize(ss["StarFishBayGame_atlas_42"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00006 = function() {
	this.initialize(ss["StarFishBayGame_atlas_41"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00007 = function() {
	this.initialize(ss["StarFishBayGame_atlas_40"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00008 = function() {
	this.initialize(ss["StarFishBayGame_atlas_39"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00009 = function() {
	this.initialize(ss["StarFishBayGame_atlas_38"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00010 = function() {
	this.initialize(ss["StarFishBayGame_atlas_37"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00011 = function() {
	this.initialize(ss["StarFishBayGame_atlas_36"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00012 = function() {
	this.initialize(ss["StarFishBayGame_atlas_35"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00013 = function() {
	this.initialize(ss["StarFishBayGame_atlas_34"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.crab_shadow = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed10 = function() {
	this.initialize(ss["StarFishBayGame_atlas_33"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed11 = function() {
	this.initialize(ss["StarFishBayGame_atlas_33"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_32"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed5 = function() {
	this.initialize(ss["StarFishBayGame_atlas_34"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed7 = function() {
	this.initialize(ss["StarFishBayGame_atlas_32"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed8 = function() {
	this.initialize(ss["StarFishBayGame_atlas_31"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.droneshot__compressed9 = function() {
	this.initialize(ss["StarFishBayGame_atlas_31"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flower = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.next1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.next2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Photo27min = function() {
	this.initialize(img.Photo27min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3753,2815);


(lib.Photo28min = function() {
	this.initialize(img.Photo28min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3024,4032);


(lib.Photo30_cp = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Photo31 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Photo9min = function() {
	this.initialize(ss["StarFishBayGame_atlas_49"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo29_cp = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo32_compressed = function() {
	this.initialize(ss["StarFishBayGame_atlas_30"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo33_cp = function() {
	this.initialize(ss["StarFishBayGame_atlas_30"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed10 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed12 = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed13 = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed14 = function() {
	this.initialize(ss["StarFishBayGame_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed16 = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed18 = function() {
	this.initialize(ss["StarFishBayGame_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed19 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed21 = function() {
	this.initialize(ss["StarFishBayGame_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed23 = function() {
	this.initialize(ss["StarFishBayGame_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed24 = function() {
	this.initialize(ss["StarFishBayGame_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed25 = function() {
	this.initialize(ss["StarFishBayGame_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_48"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed4 = function() {
	this.initialize(ss["StarFishBayGame_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed5 = function() {
	this.initialize(ss["StarFishBayGame_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed6 = function() {
	this.initialize(ss["StarFishBayGame_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed7 = function() {
	this.initialize(ss["StarFishBayGame_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo_compressed9 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.raindrop = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.sb2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.sbbbbb = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.speechBubble = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.speechBubble3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn1_blue = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn2_blue = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn2_grey = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title();
	this.instance.setTransform(-424.6,-174.5,0.8996,0.8996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.6,-174.5,849.2,349.1);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title();
	this.instance.setTransform(-424.6,-174.5,0.8996,0.8996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.6,-174.5,849.2,349.1);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-50,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-44,100,88);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-50,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-44,100,88);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-50,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-44,100,88);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble1();
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-53,122,106);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble1();
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-53,122,106);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble1();
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-53,122,106);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clam_shadow();
	this.instance.setTransform(-187.05,-131.8,0.9691,0.9691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-131.8,374.1,263.6);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clam_shadow();
	this.instance.setTransform(-187.05,-131.8,0.9691,0.9691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-131.8,374.1,263.6);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clam_shadow();
	this.instance.setTransform(-187.05,-131.8,0.9691,0.9691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-131.8,374.1,263.6);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crab_shadow();
	this.instance.setTransform(-215.15,-142.7,0.8218,0.8218,-4.4632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-174.3,430.29999999999995,348.70000000000005);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crab_shadow();
	this.instance.setTransform(-215.15,-142.7,0.8218,0.8218,-4.4632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-174.3,430.29999999999995,348.70000000000005);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crab_shadow();
	this.instance.setTransform(-215.15,-142.7,0.8218,0.8218,-4.4632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-174.3,430.29999999999995,348.70000000000005);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,0.8843,0.8282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,452.8,424), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.speechBubble();
	this.instance.setTransform(0,0,0.6822,0.2913);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,476.9,131.4), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,0.9383,0.9438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,480.4,483.3), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,1.7841,0.9183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,913.5,470.2), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Answer: \nWhen the sand bubbler crab feeds, it filters sand through its mouth as it looks for small pieces of food such as plankton and detritus. It then leaves behind the tiny balls of sand that look like bubbles!", "20px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 483;
	this.text.parent = this;
	this.text.setTransform(214.7,9.1,0.9297,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-11.8,7.3,453.1,289.59999999999997), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(55,0,0.8805,0.6538);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(55,0,450.8,334.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sb2();
	this.instance.setTransform(32.35,0,1.0451,1.0084,4.4877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,417.9,442.5), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-81,-29,1.1276,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-81,-29,577.3,392.2), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,0.9459,0.9459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,484.3,484.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Name:", "28px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 119;
	this.text.parent = this;
	this.text.setTransform(305.5,-52.45);
	this.text.shadow = new cjs.Shadow("rgba(24,79,113,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241,-57.4,137,57);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("End\nThank you !", "italic 500 68px 'Ubuntu'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 82;
	this.text.lineWidth = 625;
	this.text.parent = this;
	this.text.setTransform(314.6,-22.5);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24.5,629.2,251.8);


(lib.speechBubble_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-91,-18,1.0521,0.9993);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speechBubble_1, new cjs.Rectangle(-91,-18,538.7,511.7), null);


(lib.SkipBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_20();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78,43);


(lib.sb3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.speechBubble3();
	this.instance.setTransform(0,0,0.7813,0.7195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sb3, new cjs.Rectangle(0,0,625,383.5), null);


(lib.rainDrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.raindrop();
	this.instance.setTransform(-48,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rainDrop, new cjs.Rectangle(-48,-55,96,108), null);


(lib.QuestionCrabMove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_2
	this.instance = new lib.Crab3_QuestionMarkCrab_00000();
	this.instance.setTransform(-328,-352);

	this.instance_1 = new lib.Crab3_QuestionMarkCrab_00001();
	this.instance_1.setTransform(-328,-352);

	this.instance_2 = new lib.Crab3_QuestionMarkCrab_00002();
	this.instance_2.setTransform(-328,-352);

	this.instance_3 = new lib.Crab3_QuestionMarkCrab_00003();
	this.instance_3.setTransform(-328,-352);

	this.instance_4 = new lib.Crab3_QuestionMarkCrab_00004();
	this.instance_4.setTransform(-328,-352);

	this.instance_5 = new lib.Crab3_QuestionMarkCrab_00005();
	this.instance_5.setTransform(-328,-352);

	this.instance_6 = new lib.Crab3_QuestionMarkCrab_00006();
	this.instance_6.setTransform(-328,-352);

	this.instance_7 = new lib.Crab3_QuestionMarkCrab_00007();
	this.instance_7.setTransform(-328,-352);

	this.instance_8 = new lib.Crab3_QuestionMarkCrab_00008();
	this.instance_8.setTransform(-328,-352);

	this.instance_9 = new lib.Crab3_QuestionMarkCrab_00009();
	this.instance_9.setTransform(-328,-352);

	this.instance_10 = new lib.Crab3_QuestionMarkCrab_00010();
	this.instance_10.setTransform(-328,-352);

	this.instance_11 = new lib.Crab3_QuestionMarkCrab_00011();
	this.instance_11.setTransform(-328,-352);

	this.instance_12 = new lib.Crab3_QuestionMarkCrab_00012();
	this.instance_12.setTransform(-328,-352);

	this.instance_13 = new lib.Crab3_QuestionMarkCrab_00013();
	this.instance_13.setTransform(-328,-352);

	this.instance_14 = new lib.Crab3_QuestionMarkCrab_00014();
	this.instance_14.setTransform(-328,-352);

	this.instance_15 = new lib.Crab3_QuestionMarkCrab_00015();
	this.instance_15.setTransform(-328,-352);

	this.instance_16 = new lib.Crab3_QuestionMarkCrab_00016();
	this.instance_16.setTransform(-328,-352);

	this.instance_17 = new lib.Crab3_QuestionMarkCrab_00017();
	this.instance_17.setTransform(-328,-352);

	this.instance_18 = new lib.Crab3_QuestionMarkCrab_00018();
	this.instance_18.setTransform(-328,-352);

	this.instance_19 = new lib.Crab3_QuestionMarkCrab_00019();
	this.instance_19.setTransform(-328,-352);

	this.instance_20 = new lib.Crab3_QuestionMarkCrab_00020();
	this.instance_20.setTransform(-328,-352);

	this.instance_21 = new lib.Crab3_QuestionMarkCrab_00021();
	this.instance_21.setTransform(-328,-352);

	this.instance_22 = new lib.Crab3_QuestionMarkCrab_00022();
	this.instance_22.setTransform(-328,-352);

	this.instance_23 = new lib.Crab3_QuestionMarkCrab_00023();
	this.instance_23.setTransform(-328,-352);

	this.instance_24 = new lib.Crab3_QuestionMarkCrab_00024();
	this.instance_24.setTransform(-328,-352);

	this.instance_25 = new lib.Crab3_QuestionMarkCrab_00025();
	this.instance_25.setTransform(-328,-352);

	this.instance_26 = new lib.Crab3_QuestionMarkCrab_00026();
	this.instance_26.setTransform(-328,-352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-352,683,710);


(lib.progressBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFAD3A").s().p("AmDAYQgKABgHgIQgHgHAAgKQAAgJAHgHQAHgIAKAAIMGAAQALAAAGAIQAIAHAAAJQAAAKgIAHQgGAIgLgBg");
	this.shape.setTransform(21.2302,2.8449,0.5152,1.1531);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.progressBar, new cjs.Rectangle(0,0,42.5,5.7), null);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.photo_compressed2();
	this.instance_1.setTransform(0,6,0.352,0.3691);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,6,380.2,292.3), null);


(lib.photo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed5();
	this.instance.setTransform(0,0,0.4951,0.4951);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo5, new cjs.Rectangle(0,0,534.7,401), null);


(lib.photo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed4();
	this.instance.setTransform(16,31,0.5454,0.5454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo4, new cjs.Rectangle(16,31,589.1,331.6), null);


(lib.photo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed3();
	this.instance.setTransform(47,21,0.3066,0.3145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo3, new cjs.Rectangle(47,21,331.2,452.9), null);


(lib.Photo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed2();
	this.instance.setTransform(-17,-12,0.4872,0.4872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo2, new cjs.Rectangle(-17,-12,526.1,385.8), null);


(lib.photo27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo27min();
	this.instance.setTransform(0,0,0.1119,0.1119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo27, new cjs.Rectangle(0,0,419.8,314.9), null);


(lib.photo25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed24();
	this.instance.setTransform(0,0,0.3681,0.3681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo25, new cjs.Rectangle(0,0,397.5,298.2), null);


(lib.photo22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed10();
	this.instance.setTransform(0,0,0.7848,0.7848);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo22, new cjs.Rectangle(0,0,431.7,287.3), null);


(lib.photo21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed19();
	this.instance.setTransform(11,14,0.5137,0.5137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo21, new cjs.Rectangle(11,14,500.9,231.2), null);


(lib.photo20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed9();
	this.instance.setTransform(0,0,0.9292,0.9292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo20, new cjs.Rectangle(0,0,363.3,274.1), null);


(lib.photo19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed9();
	this.instance.setTransform(0,0,1.0828,1.0828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo19, new cjs.Rectangle(0,0,423.4,319.5), null);


(lib.photo17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed16();
	this.instance.setTransform(0,0,0.4687,0.4687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo17, new cjs.Rectangle(0,0,421.9,281.3), null);


(lib.photo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed7();
	this.instance.setTransform(-42,0,0.5351,0.5351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,0,577.9,325.4);


(lib.photo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed13();
	this.instance.setTransform(0,0,0.4092,0.4092);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo14, new cjs.Rectangle(0,0,327.4,327.4), null);


(lib.photo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed12();
	this.instance.setTransform(0,0,0.4394,0.4394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo13, new cjs.Rectangle(0,0,394.6,295.7), null);


(lib.movingSadCrab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(14).call(this.frame_56).wait(1));

	// Layer_1
	this.instance = new lib.Crab2_SadCrab_00000();
	this.instance.setTransform(-515,-513);

	this.instance_1 = new lib.Crab2_SadCrab_00001();
	this.instance_1.setTransform(-515,-513);

	this.instance_2 = new lib.Crab2_SadCrab_00002();
	this.instance_2.setTransform(-515,-513);

	this.instance_3 = new lib.Crab2_SadCrab_00003();
	this.instance_3.setTransform(-515,-513);

	this.instance_4 = new lib.Crab2_SadCrab_00004();
	this.instance_4.setTransform(-515,-513);

	this.instance_5 = new lib.Crab2_SadCrab_00005();
	this.instance_5.setTransform(-515,-513);

	this.instance_6 = new lib.Crab2_SadCrab_00006();
	this.instance_6.setTransform(-515,-513);

	this.instance_7 = new lib.Crab2_SadCrab_00007();
	this.instance_7.setTransform(-515,-513);

	this.instance_8 = new lib.Crab2_SadCrab_00008();
	this.instance_8.setTransform(-515,-513);

	this.instance_9 = new lib.Crab2_SadCrab_00009();
	this.instance_9.setTransform(-515,-513);

	this.instance_10 = new lib.Crab2_SadCrab_00010();
	this.instance_10.setTransform(-515,-513);

	this.instance_11 = new lib.Crab2_SadCrab_00011();
	this.instance_11.setTransform(-515,-513);

	this.instance_12 = new lib.Crab2_SadCrab_00012();
	this.instance_12.setTransform(-515,-513);

	this.instance_13 = new lib.Crab2_SadCrab_00013();
	this.instance_13.setTransform(-515,-513);

	this.instance_14 = new lib.Crab2_SadCrab_00014();
	this.instance_14.setTransform(-515,-513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-515,-513,1024,1024);


(lib.movingHappyCrab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Crab1_HappyCrab_00000();
	this.instance.setTransform(-184,-385);

	this.instance_1 = new lib.Crab1_HappyCrab_00001();
	this.instance_1.setTransform(-184,-385);

	this.instance_2 = new lib.Crab1_HappyCrab_00002();
	this.instance_2.setTransform(-184,-385);

	this.instance_3 = new lib.Crab1_HappyCrab_00003();
	this.instance_3.setTransform(-184,-385);

	this.instance_4 = new lib.Crab1_HappyCrab_00004();
	this.instance_4.setTransform(-184,-385);

	this.instance_5 = new lib.Crab1_HappyCrab_00005();
	this.instance_5.setTransform(-184,-385);

	this.instance_6 = new lib.Crab1_HappyCrab_00006();
	this.instance_6.setTransform(-184,-385);

	this.instance_7 = new lib.Crab1_HappyCrab_00007();
	this.instance_7.setTransform(-184,-385);

	this.instance_8 = new lib.Crab1_HappyCrab_00008();
	this.instance_8.setTransform(-184,-385);

	this.instance_9 = new lib.Crab1_HappyCrab_00009();
	this.instance_9.setTransform(-184,-385);

	this.instance_10 = new lib.Crab1_HappyCrab_00010();
	this.instance_10.setTransform(-184,-385);

	this.instance_11 = new lib.Crab1_HappyCrab_00011();
	this.instance_11.setTransform(-184,-385);

	this.instance_12 = new lib.Crab1_HappyCrab_00012();
	this.instance_12.setTransform(-184,-385);

	this.instance_13 = new lib.Crab1_HappyCrab_00013();
	this.instance_13.setTransform(-184,-385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-385,1268,1024);


(lib.MCButtonLong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+FELQhuAAhPhOQhOhOAAhvIAAAAQAAhuBOhOQBPhOBuAAMA8LAAAQBuAABOBOQBPBOAABuIAAAAQAABvhPBOQhOBOhuAAg");
	this.shape.setTransform(219.275,26.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6FCFF").s().p("A+FELQhuAAhPhOQhOhOAAhvIAAAAQAAhuBOhOQBPhOBuAAMA8LAAAQBuAABOBOQBPBOAABuIAAAAQAABvhPBOQhOBOhuAAg");
	this.shape_1.setTransform(219.275,26.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,438.6,53.5);


(lib.mcAnsBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3vHMQi+AAiIiHQiGiHAAi+QAAi9CGiIQCIiGC+AAMAvfAAAQC/AACGCGQCHCIAAC9QAAC+iHCHQiGCHi/AAg");
	this.shape.setTransform(-2,3.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7F5F4").s().p("A3vHMQi+AAiIiHQiGiHAAi+QAAi9CGiIQCIiGC+AAMAvfAAAQC/AACGCGQCHCIAAC9QAAC+iHCHQiGCHi/AAg");
	this.shape_1.setTransform(-2,3.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87CBCB").s().p("A3vHMQi+AAiIiHQiGiHAAi+QAAi9CGiIQCIiGC+AAMAvfAAAQC/AACGCGQCHCIAAC9QAAC+iHCHQiGCHi/AAg");
	this.shape_2.setTransform(-2,3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-42.9,396,92);


(lib.generalBtn_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.waterColBtn3();
	this.instance.setTransform(-104,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-54,209,110);


(lib.frame10SB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-100,-39,1.1276,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame10SB, new cjs.Rectangle(-100,-39,577.3,392.2), null);


(lib.frame9SB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-96,-25,1.1276,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame9SB, new cjs.Rectangle(-96,-25,577.3,392.2), null);


(lib.frame6SB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sb2();
	this.instance.setTransform(38.2,-61.35,1.0316,0.8709,6.2039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame6SB, new cjs.Rectangle(-0.4,-61.3,418.09999999999997,396.2), null);


(lib.frame5Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Wow! \nLook at these impressive patterns in the sand!", "30px 'Arial'", "#06282B");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 274;
	this.text.parent = this;
	this.text.setTransform(140.4,2.04,1.0114,1.0114);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame5Text, new cjs.Rectangle(0,0,280.9,265.1), null);


(lib.flowerEffect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flower();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flowerEffect, new cjs.Rectangle(0,0,76,72), null);


(lib.F5text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Therefore, the sand is usually looser and contains a small number of species. However, if you look close enough you can still find some interesting animals!", "24px 'Arial'", "#0A3337");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 250;
	this.text.parent = this;
	this.text.setTransform(127.15,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F5text, new cjs.Rectangle(0,0,254.4,282.8), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.credit16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 8- HKU – Integrated Mangrove Ecology Lab and AFCD", "15px 'Microsoft JhengHei Light'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 238;
	this.text.parent = this;
	this.text.setTransform(120.85,8.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzUEkIAApHMAmpAAAIAAJHg");
	this.shape.setTransform(118.7,29.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit16, new cjs.Rectangle(-4.9,0,247.3,79.5), null);


(lib.credit5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(4.5,0.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit5, new cjs.Rectangle(0,0,326,92.7), null);


(lib.credit4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(10.5,9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(0,9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit4, new cjs.Rectangle(0,9,298,66), null);


(lib.credit3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(12.15,8.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(0,8.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit3, new cjs.Rectangle(0,8.1,226.2,48.5), null);


(lib.credit2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-119.25,-23.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-130.55,-26.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit2, new cjs.Rectangle(-130.5,-26.2,288.5,96.5), null);


(lib.creditPageNextButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEKAAIoTEzIAAplg");
	this.shape.setTransform(7.2,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.827)").s().p("AkJkyIITEyIoTEzg");
	this.shape_1.setTransform(7.2,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(1,1,1).p("AEKAAIoTEzIAAplg");
	this.shape_2.setTransform(7.2,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.827)").s().p("AkJkyIITEyIoTEzg");
	this.shape_3.setTransform(7.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-32.9,55.199999999999996,63.4);


(lib.creditp1819 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 18-19 – Species A: Diogenes spinifrons\nSource: https://1023world.net/ypark/anomura/Diogenes-spinifrons \nSpecies B: Clibanarius longitarsus\nSource: http://web.nchu.edu.tw/~htshih/hermit/list_hc/Clibanarius_longitarsus.html ", "11px 'Microsoft JhengHei Light'", "#333333");
	this.text.lineHeight = 16;
	this.text.lineWidth = 267;
	this.text.parent = this;
	this.text.setTransform(-67.4,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1LKWIAA0rMAqXAAAIAAUrg");
	this.shape.setTransform(63.175,94.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp1819, new cjs.Rectangle(-72.4,28.6,274.20000000000005,132.4), null);


(lib.creditp25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 25 – Source: https://medium.com/wwfhk-e/birds-and-\nbeyond-3cc460c6c1d4 ", "11px 'Arial'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 214;
	this.text.parent = this;
	this.text.setTransform(6.05,4.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwfESIAAojMAg/AAAIAAIjg");
	this.shape.setTransform(105.55,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp25, new cjs.Rectangle(0,0,222.1,75.3), null);


(lib.creditp21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 21 – Source: https://eandt.theiet.org/content/articles/2020\n/04/hermit-crab-study-uncovers-\ndevastating-effects-of-plastic-on-marine-life/ ", "10px 'Arial'", "#0D3147");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(106.15,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwrEaIAAozMAhXAAAIAAIzg");
	this.shape.setTransform(106.8,28.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp21, new cjs.Rectangle(0,0,213.6,71.9), null);


(lib.creditp17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 17 – Source:  http://www.hkwildlife.net/lungmei/gallery/source/ocheto\nstoma_erythrogrammon.html \n", "11px 'Arial Narrow'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 220;
	this.text.parent = this;
	this.text.setTransform(6.6,7.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyZEiIAApDMAkzAAAIAAJDg");
	this.shape.setTransform(117.825,29.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp17, new cjs.Rectangle(0,0,235.7,94.1), null);


(lib.creditp14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(2.7,2.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp14, new cjs.Rectangle(0,0,202.5,56.7), null);


(lib.creditp13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 13 – Source: https://www.afcd.gov.hk/english/c\nonservation/con_mar/TKPlus/m_h\n_org/sss/ssshore.html ", "11px 'Microsoft JhengHei Light'");
	this.text.lineHeight = 16;
	this.text.lineWidth = 171;
	this.text.parent = this;
	this.text.setTransform(16.6,5.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwHGMIAAsXMAgPAAAIAAMXg");
	this.shape.setTransform(103.2,39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp13, new cjs.Rectangle(0,0,206.4,84.7), null);


(lib.creditp11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 11 – Source: https://www.eejournal.com/wp-\ncontent/uploads/converted/149325179974/soldier_crabs-\nthumb-550xauto-88790.jpg ", "11px 'Arial Narrow'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(4.45,10.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzNENIAAoZMAmbAAAIAAIZg");
	this.shape.setTransform(122.975,33.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.creditp11, new cjs.Rectangle(0,6.3,246,120.5), null);


(lib.credit19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 10 - http://tattat2006.blogspot.com/2010/05/blog\n-post_19.html ", "8px 'Microsoft JhengHei Light'", "#333333");
	this.text.lineHeight = 12;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(7.55,3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.969)").s().p("AtHDJIAAmRIaPAAIAAGRg");
	this.shape.setTransform(89.6,20.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit19, new cjs.Rectangle(5.6,0,168,40.2), null);


(lib.credit_p26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 26 – Own Photo", "15px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 179;
	this.text.parent = this;
	this.text.setTransform(91.45,4.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvsE7IAAp1IfZAAIAAJ1g");
	this.shape.setTransform(91.4793,12.9835,0.9104,0.413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit_p26, new cjs.Rectangle(0,0,183,42.6), null);


(lib.nextPageButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next1();
	this.instance.setTransform(-116,-114);

	this.instance_1 = new lib.next2();
	this.instance_1.setTransform(-116,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-114,236,237);


(lib.Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.waterColBtn1();
	this.instance.setTransform(-174,-61);

	this.instance_1 = new lib.waterColBtn1_blue();
	this.instance_1.setTransform(-202,-71,1.1566,1.1566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-174,y:-61}}]}).to({state:[{t:this.instance,p:{scaleX:1.1555,scaleY:1.1597,x:-202,y:-71}}]},1).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-71,410.6,149.6);


(lib.BackBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Back", "bold 41px 'Microsoft JhengHei'", "#143647");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(2.05,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer_3
	this.instance = new lib.waterColBtn2();
	this.instance.setTransform(-116,-57,0.7689,1);

	this.instance_1 = new lib.waterColBtn2_grey();
	this.instance_1.setTransform(-116,-57,0.7689,1);

	this.instance_2 = new lib.waterColBtn2_blue();
	this.instance_2.setTransform(-116,-57,0.7689,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-57,239.9,118);


(lib._photo1819_d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed18();
	this.instance.setTransform(0,0,0.4609,0.4609);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo1819_d, new cjs.Rectangle(0,0,497.8,280.2), null);


(lib._photo1819 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed18();
	this.instance.setTransform(0,0,0.4687,0.4687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo1819, new cjs.Rectangle(0,0,506.2,285), null);


(lib._photo31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo31();
	this.instance.setTransform(0,0,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo31, new cjs.Rectangle(0,0,410.1,307.9), null);


(lib._photo30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo30_cp();
	this.instance.setTransform(0,0,0.5158,0.5158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo30, new cjs.Rectangle(0,0,515.3,303.3), null);


(lib._photo29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo29_cp();
	this.instance.setTransform(0,0,0.3296,0.3296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo29, new cjs.Rectangle(0,0,356,200.1), null);


(lib._photo28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo28min();
	this.instance.setTransform(0,0,0.0735,0.0735);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo28, new cjs.Rectangle(0,0,222.2,296.3), null);


(lib._photo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed23();
	this.instance.setTransform(0,0,0.4212,0.4212);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo24, new cjs.Rectangle(0,0,431.3,323.5), null);


(lib._photo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.photo_compressed6();
	this.instance.setTransform(0,0,0.4778,0.4778);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._photo6, new cjs.Rectangle(0,0,516.1,290.5), null);


(lib._p18192 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._p18192, new cjs.Rectangle(0,0,495,278), null);


(lib.title_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(424.6,174.5);

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(424.6,174.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:166.7},9).to({y:173.7},9).to({_off:true,y:174.5},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.8,849.2,356.90000000000003);


(lib.speechBubbleThank = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Thank you for taking time to learn about the intertidal biodiversity of Starfish Bay. This unique bay, like much of Hong Kong’s coastal environment, is vulnerable to the pressures of human activities, such as plastic pollution, and so it is important that we learn about it and do what we can to protect it. ", "21px 'Arial'", "#0D3147");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 460;
	this.text.parent = this;
	this.text.setTransform(256.85,57.35,0.9143,0.9143);

	this.instance = new lib.sb3();
	this.instance.setTransform(258.35,158.5,0.8265,0.8265,0,0,0,312.6,191.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speechBubbleThank, new cjs.Rectangle(0,0,516.6,317), null);


(lib.rainDrops = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.rainDrop();
	this.instance.setTransform(229.55,54,1,1,0,0,0,0,-1);
	this.instance.alpha = 0.3711;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:139.25,alpha:0.4102},5).wait(1));

	// Layer_5
	this.instance_1 = new lib.rainDrop();
	this.instance_1.setTransform(144,67.15,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:85.95},2).to({y:222.6,alpha:0},9).to({y:211.05,alpha:0.3711},3).to({_off:true},1).wait(6).to({_off:false,y:40.8,alpha:0},0).to({alpha:0.75},3).wait(1));

	// Layer_4
	this.instance_2 = new lib.rainDrop();
	this.instance_2.setTransform(139.25,5.6,1,1,0,0,0,0,-1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:45.75,alpha:1},3).to({y:99.25,alpha:0.0508},4).to({y:233,alpha:0},10).wait(1));

	// Layer_3
	this.instance_3 = new lib.rainDrop();
	this.instance_3.setTransform(269.65,38.25,1,1,0,0,0,0,-1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:75.45,alpha:1},3).to({y:199.55,alpha:0},10).to({y:274},6).wait(1));

	// Layer_1
	this.instance_4 = new lib.rainDrop();
	this.instance_4.setTransform(48,54,1,1,0,0,0,0,-1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:89.55,alpha:1},3).to({y:184.3,alpha:0.1602},8).to({y:106.35,alpha:0.0391},7).to({y:279,alpha:0},2).to({_off:true},1).wait(4));

	// Layer_6
	this.instance_5 = new lib.rainDrop();
	this.instance_5.setTransform(48,1.3,1,1,0,0,0,0,-1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({y:33.15,alpha:1},2).to({y:131.45,alpha:0},5).to({y:341},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52.7,317.7,447.7);


(lib.photo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo6.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo6.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		
		this.photo6.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.photo6 = new lib._photo6();
	this.photo6.name = "photo6";
	this.photo6.setTransform(360,120.2,1,1,0,0,0,258,145.2);

	this.timeline.addTween(cjs.Tween.get(this.photo6).wait(1).to({regX:258.1,scaleX:1.3538,scaleY:1.3538,x:335.3,y:172.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-25,698.7,394.2);


(lib.photop31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo31.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo31.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo31.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo31.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// text
	this.text = new cjs.Text("Source: AFCD ", "14px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(358.05,310.35);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// credit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.247)").ss(1,1,1).p("AqihxIVFAAIAADjI1FAAg");
	this.shape.setTransform(358.0496,317.7297,0.7635,0.8595);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqiByIAAjjIVFAAIAADjg");
	this.shape_1.setTransform(358.0496,317.7297,0.7635,0.8595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.photo31 = new lib._photo31();
	this.photo31.name = "photo31";
	this.photo31.setTransform(205,154,1,1,0,0,0,205,154);

	this.timeline.addTween(cjs.Tween.get(this.photo31).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,410.6,328.6);


(lib.photop30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo30.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo30.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo30.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo30.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_3
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(285.3,304.95,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyMBtIAAjZMAkZAAAIAADZg");
	this.shape.setTransform(398.775,314.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.photo30 = new lib._photo30();
	this.photo30.name = "photo30";
	this.photo30.setTransform(257.6,151.7,1,1,0,0,0,257.6,151.7);

	this.timeline.addTween(cjs.Tween.get(this.photo30).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,515.3,325.1);


(lib.photop29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.photo29 = new lib._photo29();
	this.photo29.name = "photo29";
	this.photo29.setTransform(178,100,1,1,0,0,0,178,100);

	this.timeline.addTween(cjs.Tween.get(this.photo29).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photop29, new cjs.Rectangle(0,0,356,200.1), null);


(lib.photo18192 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo18192.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo18192.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		
		this.photo18192.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_3
	this.credit43 = new lib.creditp1819();
	this.credit43.name = "credit43";
	this.credit43.setTransform(424.55,308.95,0.715,0.715,0,0,0,103.2,80);
	this.credit43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.credit43).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.photo18192 = new lib._p18192();
	this.photo18192.name = "photo18192";
	this.photo18192.setTransform(247.5,139,1,1,0,0,0,247.5,139);

	this.timeline.addTween(cjs.Tween.get(this.photo18192).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,495,366.9);


(lib.photo1819_detail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo20.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo20.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo20.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo20.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_3
	this.text = new cjs.Text("Photo 20 – Source: https://1023world.net/ypark/anomura/Diogenes-spinifrons  and http://web.nchu.edu.tw/~htshih/hermit/list_hc/Clibanarius_longitarsus.htm", "8px 'Arial'", "#666666");
	this.text.lineHeight = 11;
	this.text.lineWidth = 211;
	this.text.parent = this;
	this.text.setTransform(297,296.2);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AskDDIAAmFIZJAAIAAGFg");
	this.shape.setTransform(402.384,327.8894,1.3333,1.7296);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.photo20 = new lib._photo1819_d();
	this.photo20.name = "photo20";
	this.photo20.setTransform(260.8,154.1,1,1,0,0,0,248.8,140.1);

	this.timeline.addTween(cjs.Tween.get(this.photo20).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,14,497.8,347.6);


(lib.photo1819 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo1819.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo1819.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		
		this.photo1819.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.photo1819 = new lib._photo1819();
	this.photo1819.name = "photo1819";
	this.photo1819.setTransform(253.1,142.5,1,1,0,0,0,253.1,142.5);

	this.timeline.addTween(cjs.Tween.get(this.photo1819).wait(1).to({regY:142.3,scaleX:1.2527,scaleY:1.2527,x:233.6,y:142.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,-35.9,634.1,356.9);


(lib.photo29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo29.addEventListener("mouseover", fl_MouseOverHandler29.bind(this));
		
		function fl_MouseOverHandler29()
		{
			console.log("flame1_29")
		  root.gotoAndStop(1);
			
			
		}
		
		this.photo29.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		
		this.photo29.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_3
	this.text = new cjs.Text("Getty Images/iStockphoto", "10px 'Arial'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(273.65,203.65);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("As2BhIAAjCIZtAAIAADCg");
	this.shape.setTransform(273.675,209.85);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.photo29 = new lib.photop29();
	this.photo29.name = "photo29";
	this.photo29.setTransform(178,100,1,1,0,0,0,178,100);

	this.timeline.addTween(cjs.Tween.get(this.photo29).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356,219.6);


(lib.photo28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo28.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo28.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo28.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo28.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_2
	this.text = new cjs.Text("Source: Own Photo", "11px 'Arial'", "#666666");
	this.text.lineHeight = 14;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(177.3,285.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AttFDIAAqGIbbAAIAAKGg");
	this.shape.setTransform(226.0645,290.6763,0.5781,0.2359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.photo28 = new lib._photo28();
	this.photo28.name = "photo28";
	this.photo28.setTransform(111.1,148.1,1,1,0,0,0,111.1,148.1);

	this.timeline.addTween(cjs.Tween.get(this.photo28).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.9,299.3);


(lib.photo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo24.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo24.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(0);
			
		}
	}
	this.frame_1 = function() {
		this.stop();
		
		var root = this;
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo24.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.gotoAndStop(1);
			
		}
		
		this.photo24.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.gotoAndStop(2);
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_3
	this.text = new cjs.Text("Source: https://mapio.net/pic/p-51047948/ ", "12px 'Arial'", "#666666");
	this.text.lineHeight = 15;
	this.text.lineWidth = 224;
	this.text.parent = this;
	this.text.setTransform(239.35,319.85);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxUClIAAlJMAipAAAIAAFJg");
	this.shape.setTransform(350.8612,326.8518,1.0504,0.5904);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.photo24 = new lib._photo24();
	this.photo24.name = "photo24";
	this.photo24.setTransform(215.7,161.8,1,1,0,0,0,215.7,161.8);

	this.timeline.addTween(cjs.Tween.get(this.photo24).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,467.4,336.6);


(lib.flowers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.flowerEffect();
	this.instance.setTransform(409.45,124,1,1,0,0,0,38,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.1016},14).to({alpha:1},15).wait(1));

	// Layer_2
	this.instance_1 = new lib.flowerEffect();
	this.instance_1.setTransform(174.55,25.05,1,1,0,0,0,38,36);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({alpha:0.1016},15).wait(1));

	// Layer_1
	this.instance_2 = new lib.flowerEffect();
	this.instance_2.setTransform(38,124,1,1,0,0,0,38,36);
	this.instance_2.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.8398},7).to({alpha:0.6016},7).to({alpha:0.0898},7).to({alpha:0.6016},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.9,447.5,170.9);


(lib.crab_shadow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(215.15,174.35);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(215.15,158.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(215.15,174.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:158.9},7).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,y:174.35},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15.4,430.3,364.09999999999997);


(lib.clam_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(187.05,131.8);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(178.05,137);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(187.05,131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:178.05,y:137},7).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,x:187.05,y:131.8},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,0,383.1,268.8);


(lib.bubble2_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(50,44);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(60,49);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(50,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_2}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:60,y:49},12).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},12).to({_off:true,x:50,y:44},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,93);


(lib.bubble1_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(61,53);

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(55,41);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(61,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:55,y:41},11).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},11).to({_off:true,x:61,y:53},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-12,128,118);


(lib.inputField_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer_box3 = new lib.an_TextInput({'id': 'answer_box3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box3.name = "answer_box3";
	this.answer_box3.setTransform(553.6,220.7,1,1,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.answer_box3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputField_, new cjs.Rectangle(503.2,209.4,101.00000000000006,23), null);


(lib.inputField__1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer_box2 = new lib.an_TextInput({'id': 'answer_box2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box2.name = "answer_box2";
	this.answer_box2.setTransform(553.6,220.7,1,1,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.answer_box2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputField__1, new cjs.Rectangle(503.2,209.4,101.00000000000006,23), null);


(lib.inputField__2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer_box = new lib.an_TextInput({'id': 'answer_box', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box.name = "answer_box";
	this.answer_box.setTransform(553.6,220.7,1,1,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.answer_box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputField__2, new cjs.Rectangle(503.2,209.4,101.00000000000006,23), null);


// stage content:
(lib.StarFishBayGame_12Jan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {home:0,studentInfo:2,MC1:6,mc1wrong:7,mc1right:8,q1:11,q2:14,"middle shore":16,MC2:19,Mc2Wrong:20,mc2right:21,q3:22,fadeInTemplate1:24,fadeInTemplate2:25,mc3:26,mc3back:27,mc3right:28,q4:32,"lower shore":34,mc4:39,mc4back:40,mc4right:41,q5:43,"Mangrove Ecosystem":51,mc5:54,mc5back:55,mc5right:56,q6:57,mc6:61,mc6back:62,mc6right:63,mc7:65,mc7back:66,mc7right:67,mc8:68,mc8back:69,mc8right:70,mc9:72,mc9back:73,mc9right:74,mc10:75,mc10back:76,mc10right:77,credit:119,credit2:120};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,119,120];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root=this;
		
		root.StartBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			root.StartBtn.removeEventListener("click",fl_ClickToGoToAndPlayAtFrame.bind(root));
			root.StartBtn.stop();
			root.gotoAndStop(1); 
		
		}
		
		
		/**
		this.creditBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame2()
		{
			root.creditBtn.removeEventListener("click",fl_ClickToGoToAndPlayAtFrame2.bind(root));
			root.creditBtn.stop();
			root.gotoAndStop(119); 
		
		}
		
		**/
	}
	this.frame_1 = function() {
		var root=this;
		
		this.stop();
		
		
		var skipButtonEvent = this.skipBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(2);
			this.skipBtn.removeEventListener("click", skipButtonEvent );
			this.skipBtn.stop();
		}
	}
	this.frame_2 = function() {
		var val;
		var val2;
		var root=this;
		
		
		
		function init() {
			infoContainer = new createjs.Container();
			stage.addChild(infoContainer);
		
			button = this.okBtn;
			infoContainer.addChild(button);
		
			inputField1 = this.answer_box;
			infoContainer.addChild(inputField1);
			
			
			
			createjs.Tween.get().wait(100).call(setCaret);
			
			
		}
		
		function setCaret() {
			document.getElementById('answer_box').focus(); //highlight the textfield
			document.getElementById('answer_box').maxLength = "30";
			document.getElementById('answer_box').restrict = "A-Z";
			document.getElementById('answer_box').setAttribute = ("type","password");
			
			
			document.getElementById('answer_box_school').maxLength = "30";
			document.getElementById('answer_box_school').restrict = "A-Z";
			
				document.getElementById('answer_box_class').maxLength = "3";
			document.getElementById('answer_box_class').restrict = "A-Z";
			
			document.getElementById('answer_box_email').maxLength = "30";
			
		}
		
		
		
		
		function getValue() {
			
			studentName = document.getElementById('answer_box').value;
			school= document.getElementById('answer_box_school').value; 
			studentClass= document.getElementById('answer_box_class').value; 
			studentEmail= document.getElementById('answer_box_email').value; 
			
		if(studentName!="" && school!="" && studentClass!=""&&studentEmail!="") 
		{
			alert("Hello "+studentName +" !");
		
			console.log("name = "+studentName);
			console.log("school = "+school);
			console.log("studentClass = "+studentClass);
			console.log("email = "+studentEmail);
		
		
			root.okBtn.removeEventListener("click", getValue.bind(root));
			root.gotoAndPlay(3); 
			root.okBtn.stop();
			
			//this.navNext();
		    // String isn't null and has a length > 0
		}
		else
		{
			
			alert("please complete the form.");
		   // String is null or has a 0 length
		}
			
			
		}
		
		
		this.stop();
		init();
		//this.title1.text="HIHI";
		root.okBtn.addEventListener("click", getValue.bind(root));
	}
	this.frame_3 = function() {
		var root=this;
		
		this.stop();
		
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(4);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			this.nextBtn.stop();
		}
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		
		
		
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_4 = function() {
		var root=this;
		
		this.stop();
		
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.nextBtn.removeEventListener("click",nextButtonEvent );
			this.nextBtn.stop();
			
			//setTimeout(doLater,3000);
				this.gotoAndStop(5);
		}
		
		/*
		function doLater() {
			console.log("Hi");
			canChangeScene=true;
		}
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		
		
		
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_5 = function() {
		var root=this;
		
		this.stop();
		
		this.credit2.visible = false;
		
		//fade in
		this.photo2.x = -600;
		var crab_FadeInCbk_2 = fl_FadeSymbolIn_2.bind(this);
		this.addEventListener('tick', crab_FadeInCbk_2);
		
		
		
		var buttonEvent = this.nextButton.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		//fade
		var crab_FadeOutCbk2 = fl_FadeSymbolOut2.bind(this);
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			
			//this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", buttonEvent);
			this.nextBtn.stop();
			//fade
			this.addEventListener('tick', crab_FadeOutCbk2);
		}
		
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo2.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit2.visible = true;
			
		}
		
		this.photo2.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit2.visible = false;
			
		}
		
		
		
		
		
		//fade
		
		
		function fl_FadeSymbolOut2()
		{
			this.photo2.alpha-=0.05;
			this.crab2.alpha -= 0.05;
			this.text.alpha -=  0.05;
			this.speechBubble2.alpha-=0.05;
			this.credit2.alpha-=0.05;
		
			
			if(this.crab2.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk2);
				
				this.text.alpha = 1 ;
				root.gotoAndStop(6);
				this.photo2.alpha = 1; 
				this.speechBubble2.alpha = 1; 
				this.crab2.alpha = 1; 
				this.credit2.alpha = 1; 
				return;	
			//this.removeEventListener('tick',sceneCheckStart);
				
			}
		}
		
		
		
		
		
		
		
		//fade in
		function fl_FadeSymbolIn_2()
		{
			if(this.photo2.x >=300)
			{
				this.removeEventListener('tick', crab_FadeInCbk_2);
				
				//this.photoImg.alpha = 1; 
				//this.speechBubble4.alpha = 1; 
				//this.crab4.alpha = 1; 
				//this.credit4.alpha = 1; 	
				return;	
			}
			this.photo2.x+= 50;
		}
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_6 = function() {
		var root=this;
		//MC Page
		this.stop();
		this.credit2_2.visible = false;
		
		var ABtnEvent = root.ABtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		
		function fl_ClickToGoToAndPlayAtFrame()
		{	
		
				
				root.ABtn.removeEventListener("click",  ABtnEvent);
				answerCorrect=false;
				root.gotoAndStop(7);  
				root.ABtn.stop();	
		}
		
		var BBtnEvent =root.BBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame1.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame1()
		{
				
			  root.BBtn.removeEventListener("click",  BBtnEvent);
				root.gotoAndStop(8); 
				root.BBtn.stop();
		}
		
		var CBtnEvent = root.CBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame2()
		{	
				root.CBtn.removeEventListener("click",  CBtnEvent);
				root.gotoAndStop(7); 
				root.CBtn.stop();
		}
		
		var DBtnEvent = root.DBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame3()
		{
				
				root.DBtn.removeEventListener("click",  DBtnEvent);
				root.gotoAndStop(7); 
		    	root.DBtn.stop();
		
		}
		
		
		/////credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo2_2.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit2_2.visible = true;
			
		}
		
		this.photo2_2.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit2_2.visible = false;
		
		}
		/////credit end
		
		this.stop();
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_7 = function() {
		this.stop();
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			//console.log("pressBack");
			root.gotoAndStop(6); 
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
		}
	}
	this.frame_8 = function() {
		var root=this;
		
		this.stop();
		this.flower.visible = false;
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		//fade in
		this.crab9.x = -400;
		var crab_FadeInCbk9 = fl_FadeSymbolIn9.bind(this);
		this.addEventListener('tick', crab_FadeInCbk9);
		
		
		
		//fade
		var crab_FadeOutCbk3 = fl_FadeSymbolOut3.bind(this);
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			 root.nextBtn.removeEventListener("click", nextButtonEvent);
			root.nextBtn.stop();
			//fade
			 root.addEventListener('tick', crab_FadeOutCbk3);
		
		}
		
		
		//fade
		function fl_FadeSymbolOut3()
		{
		
			this.crab9.alpha -= 0.05;
			this.speechBubble3_2.alpha-=0.05;
			this.text.visible = false;
			
			
			
			if(this.crab9.alpha <= 0)
			{
				 root.removeEventListener('tick', crab_FadeOutCbk3);
				 root.gotoAndStop(root.currentFrame+1);
				this.speechBubble3_2.alpha = 1; 
				
				this.crab9.alpha = 1; 
				return;	
				
			}
		}
		
		
		
		
		//fade in
		function fl_FadeSymbolIn9()
		{
			if(this.crab9.x >=390)
			{
				this.removeEventListener('tick', crab_FadeInCbk9);
				this.flower.visible = true;
				return;	
			}
			this.crab9.x += 40;
		}
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_9 = function() {
		var root=this;
		
		var fadeInFinish=false;
		this.stop();
		this.credit4.visible = false;
		
		
		
		
		
		//next
		var nextButtonEvent = root.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		
		//fade out
		var crab_FadeOutCbk4 = fl_FadeSymbolOut4.bind(this);
		
		//next
		function fl_ClickToGoToAndPlayAtFrame() {
			//if fade, delete this
			//this.gotoAndStop(this.currentFrame+1);
			if(fadeInFinish==true){
			root.nextBtn.removeEventListener("click", nextButtonEvent);
			root.nextBtn.stop();
			//fade out
			root.addEventListener('tick', crab_FadeOutCbk4);
			}
		
		}
		
		//fade in
		this.photo4.x = -600;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo4.x >=320)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				this.photo4.alpha = 1; 
				this.speechBubble4.alpha = 1; 
				this.crab4.alpha = 1; 
				this.credit4.alpha = 1; 	
				 fadeInFinish=true;
				return;	
			}
			this.photo4.x+= 40;
		}
		
		
		///credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo4.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit4.visible = true;
		}
		
		this.photo4.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit4.visible = false;
		}
		
		
		
		
		
		//fade out
		function fl_FadeSymbolOut4()
		{
			this.photo4.alpha-=0.05;
			this.crab4.alpha -= 0.05;
			this.text.visible = false;
			this.speechBubble4.alpha-=0.05;
			this.credit4.alpha-=0.05;
		
			if(this.crab4.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk4);
				root.gotoAndStop(10);
				this.photo4.alpha = 1; 
				this.speechBubble4.alpha = 1; 
				this.crab4.alpha = 1; 
				this.credit4.alpha = 1; 
				return;	
			}
		}
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_10 = function() {
		var root=this;
		var fadeInFinish=false;
		
		this.stop();
		this.credit7.visible = false;
		
		var nextButtonEvent = root.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish==true){
			root.gotoAndStop(11);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			root.nextBtn.stop();
			}
		}
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo7.addEventListener("mouseover", fl_MouseOverHandler_6.bind(this));
		
		function fl_MouseOverHandler_6()
		{
			this.credit7.visible = true;
		}
		
		this.photo7.addEventListener("mouseout", fl_MouseOverHandler4.bind(this));
		
		function fl_MouseOverHandler4()
		{
			this.credit7.visible = false;
		}
		
		
		
		//fade in
		this.photo7.x = 1100;
		var crab_FadeInCbk2 = fl_FadeSymbolIn2.bind(this);
		this.addEventListener('tick', crab_FadeInCbk2);
		
		
		//fade in
		function fl_FadeSymbolIn2()
		{
			if(this.photo7.x <=650)
			{
				this.removeEventListener('tick', crab_FadeInCbk2);
				fadeInFinish=true;
				return;	
			}
			this.photo7.x-= 40;
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_11 = function() {
		var root=this;
		var val;
		this.stop();
		
		this.credit12.visible = false;
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		//get input box text
		
		function init() {
			infoContainer2 = new createjs.Container();
			stage.addChild(infoContainer2);
		
			button = this.nextBtn;
			infoContainer2.addChild(button);
		
			inputField2 = this.answer_box_q1;
			infoContainer2.addChild(inputField2);
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		
		
		
		function setCaret() {
			document.getElementById('answer_box_q1').focus(); //highlight the textfiel
			document.getElementById('answer_box_q1').maxLength = "200";
		}
		
		function getValue() {
			val= document.getElementById('answer_box_q1').value;
			q1Ans = val;
			console.log("Question 1 answer :"+ q1Ans);
			
		}
		
		
		
		//hover over
		this.photo12.addEventListener("mouseover", fl_MouseOverHandler_6.bind(this));
		
		function fl_MouseOverHandler_6()
		{
			this.credit12.visible = true;
		
		}
		
		this.photo12.addEventListener("mouseout", fl_MouseOverHandler4.bind(this));
		
		function fl_MouseOverHandler4()
		{
			this.credit12.visible = false;
			
		}
		
		
		
		
		
		init();
		
			
		//fade out
		var crab_FadeOutCbk5 = fl_FadeSymbolOut5.bind(this);
		
		//next
		function fl_ClickToGoToAndPlayAtFrame() {
			
		getValue();
		if(val) 
		{
			
			//this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			//fade out
			this.addEventListener('tick', crab_FadeOutCbk5);
			root.nextBtn.stop();
		    // String isn't null and has a length > 0
		}
		else
		{
			
			alert("Please write down your answer.");
		   // String is null or has a 0 length
		}
			
			
			
			
		}
		
		
		
		//fade out
		function fl_FadeSymbolOut5()
		{
			this.photo12.alpha-=0.05;
			 this.crab12.alpha -= 0.05;
			//this.text.visible = false;
			this.speechBubble12.alpha-=0.05;
			//this.credit4.alpha-=0.05;
		
			if(this.crab12.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk5);
				root.gotoAndStop(this.currentFrame+1);
				this.photo12.alpha = 1; 
				this.speechBubble12.alpha = 1; 
				this.crab12.alpha = 1; 
				//this.credit4.alpha = 1; 
				return;	
			}
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_12 = function() {
		var root=this;
		var fadeInFinish=false;
		this.stop();
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish==true){
					root.gotoAndStop(13);
					this.nextBtn.removeEventListener("click", nextButtonEvent);
				}
		
		
		}
		
		
		
		//fade in
		this.crab13.x = -400;
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(this);
		root.addEventListener('tick', crab_FadeInCbk);
		
		
		
		
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.crab13.x >=350)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				
				fadeInFinish=true;
				return;	
			}
			this.crab13.x += 40;
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_13 = function() {
		var root=this;
		
		this.stop();
		this.credit14.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop(14);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		
		}
		
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo14.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit14.visible = true;
		
		}
		
		this.photo14.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit14.visible = false;
		
		}
		
		
		//fade in
		this.photo14.x = 1100;
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(this);
		root.addEventListener('tick', crab_FadeInCbk);
		
		
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo14.x <=720)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
			
			
				return;	
			}
			this.photo14.x-= 40;
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_14 = function() {
		var root=this;
		
		this.stop();
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		//get input box text
		
		function init() {
			infoContainer = new createjs.Container();
			stage.addChild(infoContainer);
		
			button = this.nextBtn;
			infoContainer.addChild(button);
		
			inputField3 = this.answer_box_q2;
			infoContainer.addChild(inputField3);
			
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		
		function setCaret() {
			document.getElementById('answer_box_q2').focus(); //highlight the textfield
			document.getElementById('answer_box_q2').maxLength = "200";
		}
		
		function getValue() {
			q2Ans_1 = document.getElementById('answer_box_q2').value;
			q2Ans_2	= document.getElementById('answer_box_q2_2').value;
			q2Ans_3	= document.getElementById('answer_box_q2_3').value;
			console.log("Question 2-1 answer :"+ q2Ans_1 +  "  Question 2-2 answer :"+ q2Ans_2 +  "  Question 2-3 answer :"+ q2Ans_3);
		}
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			getValue();
			if( q2Ans_1!="" && q2Ans_2!="" && q2Ans_3!="" ) //check if the student has type their answer
			{
				 root.nextBtn.removeEventListener("click", nextButtonEvent);
				 root.gotoAndStop(15); 
				// String isn't null and has a length > 0
			}
			else
			{
				alert("Please write down your answer.");
			   // String is null or has a 0 length
			}
			
		}
		
		
		//credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		
		
		
		init();
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_15 = function() {
		var root=this;
		
		this.stop();
		this.credit16.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			//root.gotoAndStop(16);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		this.addEventListener('tick', crab_FadeOutCbk);
		    // root.gotoAndStop(42); 
		}
		
		var crab_FadeOutCbk = fl_FadeSymbolOut.bind(this);
		
		function fl_FadeSymbolOut()
		{
			this.photo16.alpha-=0.05;
			//this.crab9.alpha -= 0.05;
			
			root.speechBubble.alpha-=0.05;
			
		
			
			if(this.photo16.alpha <= 0)
			{
				this.crab16.alpha=1;
				this.removeEventListener('tick', crab_FadeOutCbk);
				//console.log("CAN CHANGE");
			    root.gotoAndStop(16); 
				return;	
				
				//this.removeEventListener('tick',sceneCheckStart);
				
			}
		}
		
		
		
		
		
		//credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo16.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit16.visible = true;
		
		}
		
		this.photo16.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit16.visible = false;
			
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_16 = function() {
		var root=this;
		
		this.stop();
		
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.nextBtn.removeEventListener("click",nextButtonEvent );
			this.nextBtn.stop();
				this.gotoAndStop(17);
			//setTimeout(doLater,3000);
		}
		
		/*
		function doLater() {
			console.log("Hi");
			canChangeScene=true;
		}
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_17 = function() {
		var root=this;
		
		this.stop();
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop(18);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_18 = function() {
		var root=this;
		
		this.stop();
		
		this.credit19.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			
			root.gotoAndStop(19);
		
		
		}
		
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo19.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit19.visible = true;
		
		}
		
		this.photo19.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit19.visible = false;
			
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_19 = function() {
		var root=this;
		
		this.stop();
		
		var mc2A = root.mcAnsA.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		this.credit20.visible = false;
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc2right");
			root.mcAnsA.removeEventListener("click", mc2A);
			root.mcAnsA.stop();	
		}
		
		
		var mc2B = root.mcAnsB.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("Mc2Wrong");
			root.mcAnsB.removeEventListener("click", mc2B);
			root.mcAnsB.stop();	
		}
		
		var mc2C = root.mcAnsC.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("Mc2Wrong");
			root.mcAnsC.removeEventListener("click", mc2C);
			root.mcAnsC.stop();	
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo20.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit20.visible = true;
			
		}
		
		this.photo20.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit20.visible = false;
			
		}
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_20 = function() {
		this.stop();
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop(19); 
			
		}
	}
	this.frame_21 = function() {
		var root=this;
		
		
		this.credit22.visible = false;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		this.addEventListener('tick', crab_FadeOutCbk);
		   
		}
		
		var crab_FadeOutCbk = fl_FadeSymbolOut.bind(this);
		
		function fl_FadeSymbolOut()
		{
			this.photo22.alpha-=0.05;
			this.crab22.alpha -= 0.05;
			
			root.speechBubble.alpha-=0.05;
			
		
			
			if(this.photo22.alpha <= 0)
			{
				this.crab22.alpha=1;
				this.removeEventListener('tick', crab_FadeOutCbk);
				
			    root.gotoAndStop(22); 
				return;	
				
				
				
			}
		}
		
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo22.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit22.visible = true;
			
		}
		
		this.photo22.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit22.visible = false;
			
		}
		
		
		
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_22 = function() {
		var root=this;
		
		this.stop();
		this.credit23.visible = false;
		//this.credit12.visible = false;
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			getValue();
			if( q3Ans_1!="" && q3Ans_2!="" ) //check if the student has type their answer
			{
				 root.nextBtn2.removeEventListener("click", nextButtonEvent);
				 root.gotoAndStop(23); 
				// String isn't null and has a length > 0
			}
			else
			{
				alert("Please write down your answer.");
			   // String is null or has a 0 length
			}
			
		}
		
		//get input box text
		
		function init() {
			infoContainer2 = new createjs.Container();
			stage.addChild(infoContainer2);
		
			button = this.nextBtn;
			infoContainer2.addChild(button);
		
			inputField2 = this.answer_box_q3_1;
			infoContainer2.addChild(inputField2);
			
			
			inputField3 = this.answer_box_q3_1;
			infoContainer2.addChild(inputField3);
			
			
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		
		
		//answerBox
		function setCaret() {
			document.getElementById('answer_box_q3_1').focus(); //highlight the textfiel
			document.getElementById('answer_box_q3_1').maxLength = "200";
			
			document.getElementById('answer_box_q3_2').maxLength = "200";
		}
		
		
		function getValue() {
			q3Ans_1 = document.getElementById('answer_box_q3_1').value;
		
			q3Ans_2 = document.getElementById('answer_box_q3_2').value;
			
			console.log("Question 3 answer 1: "+ q3Ans_1 +" Question 3 answer 2: "+ q3Ans_2);
		}
		
		
		init();
		
			
		
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo23.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit23.visible = true;
			
		}
		
		this.photo23.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit23.visible = false;
		
		}
		
		
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_23 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(24); 
		}
		
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_24 = function() {
		var root=this;
		
		
		this.stop();
		
		
		this.credit25.visible=false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish==true){
				root.nextBtn2.removeEventListener("click", nextButtonEvent);
				root.gotoAndStop(25); 
			}
		
		}
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		
		
		//hover over
		this.photo25.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit25.visible = true;
		
		}
		
		this.photo25.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit25.visible = false;
			
		}
		
		
		//fade in
		var fadeInFinish=false;
		
		this.photo25.alpha = 0;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo25.alpha >=1)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				this.photo25.alpha = 1; 
				 fadeInFinish=true;
				return;	
			}
			this.photo25.alpha+= 0.05;
		}
	}
	this.frame_25 = function() {
		var root=this;
		
		this.stop();
		
		this.credit26.visible = false;
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish){
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(26); 
			}
		}
		
		
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo26.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit26.visible = true;
		}
		
		this.photo26.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit26.visible = false;
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		
		
		//fade in
		var fadeInFinish=false;
		
		this.photo26.x = 1100;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo26.x <=690)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				 fadeInFinish=true;
				return;	
			}
			this.photo26.x-= 40;
		}
	}
	this.frame_26 = function() {
		var root=this;
		
		this.stop();
		
		
		this.credit26.visible = false;
		
		var mc3A = this.mc3_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc3back");
			this.mc3_Abtn.removeEventListener("click", mc3A);
			root.mc3_Abtn.stop();	
		}
		
		
		var mc3B = this.mc3_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc3right");
			this.mc3_Bbtn.removeEventListener("click", mc3B);
			root.mc3_Bbtn.stop();	
		}
		
		
		var mc3C = this.mc3_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc3back");
			this.mc3_Cbtn.removeEventListener("click", mc3C);
			root.mc3_Cbtn.stop();	
		}
		
		
		
		var mc3D = this.mc3_Dbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame4.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame4() {
			root.gotoAndStop("mc3back");
			this.mc3_Dbtn.removeEventListener("click", mc3D);
			root.mc3_Dbtn.stop();	
		}
		
		
		
		
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo26.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit26.visible = true;
		}
		
		this.photo26.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit26.visible = false;
		
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_27 = function() {
		this.stop();
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop(26); 
			
		}
	}
	this.frame_28 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(29); 
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_29 = function() {
		var root=this;
		
		this.stop();
		
		this.credit30.visible = false;
		//this.flower.visible = false;
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish){
				 root.nextBtn2.removeEventListener("click", nextButtonEvent);
				root.gotoAndStop(30); 
			}
		
		}
		
		
		//hover over
		this.photo30.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit30.visible = true;
			
		}
		
		this.photo30.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit30.visible = false;
			
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		
		
		//fade in
		var fadeInFinish=false;
		
		this.photo30.alpha = 0;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo30.alpha >=1)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				this.photo30.alpha = 1; 
				 fadeInFinish=true;
				return;	
			}
			this.photo30.alpha+= 0.05;
		}
	}
	this.frame_30 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(31); 
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_31 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(32); 
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_32 = function() {
		var root=this;
		
		this.stop();
		this.credit30.visible = false;
		//this.credit12.visible = false;
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			getValue();
			if(q4Ans) //check if the student has type their answer
			{
				 root.nextBtn2.removeEventListener("click", nextButtonEvent);
				 root.gotoAndStop(33); 
				// String isn't null and has a length > 0
			}
			else
			{
				alert("Please write down your answer.");
			   // String is null or has a 0 length
			}
			
		}
		
		//get input box text
		
		function init() {
			infoContainer2 = new createjs.Container();
			stage.addChild(infoContainer2);
		
			button = this.nextBtn;
			infoContainer2.addChild(button);
		
			inputField2 = this.answer_box_q4;
			infoContainer2.addChild(inputField2);
			
			
		
			
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		
		
		//answerBox
		function setCaret() {
			document.getElementById('answer_box_q4').focus(); //highlight the textfiel
			document.getElementById('answer_box_q4').maxLength = "200";
		}
		
		
		function getValue() {
			q4Ans = document.getElementById('answer_box_q4').value;
		
			console.log("Question 4 answer: "+ q4Ans);
		}
		
		
		init();
		
			
		
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo30.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit30.visible = true;
			
		}
		
		this.photo30.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit30.visible = false;
			
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_33 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(34); 
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_34 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			  root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(35); 
			 
			
		}
		
		
		
		
		
		
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_35 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(36); 
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_36 = function() {
		var root=this;
		
		this.stop();
		
		
		this.credit37.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if( fadeInFinish){
				root.nextBtn2.removeEventListener("click", nextButtonEvent);
		        root.gotoAndStop(37);
		   }
			  
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		//hover over
		this.photo37.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit37.visible = true;
		
		}
		
		this.photo37.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit37.visible = false;
			
		}
		
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		//fade in
		var fadeInFinish=false;
		
		this.photo37.alpha = 0;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo37.alpha >=1)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				this.photo37.alpha = 1; 
				 fadeInFinish=true;
				return;	
			}
			this.photo37.alpha+= 0.05;
		}
	}
	this.frame_37 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish){
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(38);
			}
		}
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		this.credit38.visible = false;
		//hover over
		this.photo38.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit38.visible = true;
		
		}
		
		this.photo38.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit38.visible = false;
			
		}
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		//fade in
		var fadeInFinish=false;
		
		this.photo38.x = 1100;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo38.x <=690)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				 fadeInFinish=true;
				return;	
			}
			this.photo38.x-= 40;
		}
	}
	this.frame_38 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(39); 
			root.nextBtn2.stop();
		}
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_39 = function() {
		var root=this;
		
		this.stop();
		
		var mc4A = this.mc4_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc4back");
			this.mc4_Abtn.removeEventListener("click", mc4A);
			root.mc4_Abtn.stop();	
		}
		
		
		var mc4B = this.mc4_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc4back");
			this.mc4_Bbtn.removeEventListener("click", mc4B);
			root.mc4_Bbtn.stop();	
		}
		
		
		var mc4C = this.mc4_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc4right");
			this.mc4_Cbtn.removeEventListener("click", mc4C);
			root.mc4_Cbtn.stop();	
		}
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_40 = function() {
		this.stop();
		
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
		
			root.gotoAndStop(39); 
			
		}
	}
	this.frame_41 = function() {
		var root=this;
		
		this.stop();
		
		
		
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
			root.nextBtn2.stop();
			   root.gotoAndStop(42); 
			
		
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_42 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			if(fadeInFinish){
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
			root.nextBtn2.stop();
		     root.gotoAndStop(43);
			}
		}
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		
		
		//fade in
		var fadeInFinish=false;
		
		this.photo43.x = 1100;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo43.x <=660)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				 fadeInFinish=true;
				return;	
			}
			this.photo43.x-= 40;
		}
	}
	this.frame_43 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = root.nextBtn3.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			
			getValue();
			if(q5Ans) //check if the student has type their answer
			{
				 root.nextBtn3.removeEventListener("click", nextButtonEvent);
				root.nextBtn3.stop();
				 root.gotoAndStop(44); 
				// String isn't null and has a length > 0
			}
			else
			{
				alert("Please write down your answer.");
			   // String is null or has a 0 length
			}
			
		}
		
		//get input box text
		
		function init() {
			infoContainer2 = new createjs.Container();
			stage.addChild(infoContainer2);
		
			button = this.nextBtn2;
			infoContainer2.addChild(button);
		
			inputField2 = this.answer_box_q5;
			infoContainer2.addChild(inputField2);
			
			
		
			
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		init();
		
		//answerBox
		function setCaret() {
			document.getElementById('answer_box_q5').focus(); //highlight the textfiel
			document.getElementById('answer_box_q5').maxLength = "200";
		}
		
		
		function getValue() {
			q5Ans = document.getElementById('answer_box_q5').value;
		
			
			console.log("Question 5 answer: "+ q5Ans);
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_44 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
			root.nextBtn2.stop();
			    root.gotoAndStop(45); 
		 
		   
		}
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_45 = function() {
		var root=this;
		
		this.stop();
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(46); 
			
		}
		
		
		//hover over
		
		this.credit46.visible = false;
		
		this.photo46.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit46.visible = true;
			
		}
		
		this.photo46.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit46.visible = false;
			
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_46 = function() {
		var root=this;
		
		this.stop();
		
		
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(47); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_47 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(48); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_48 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(49); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_49 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(50); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_50 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame51.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame51() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		
		   root.gotoAndStop(51); 
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_51 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(52);
			 
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_52 = function() {
		var root=this;
		
		this.stop();
		
		
		
		
		var nextButtonEvent = root.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(53); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_53 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(54); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		
		//FADE IN
		
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_54 = function() {
		var root=this;
		
		this.stop();
		
		var mc5A = this.mc5_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc5back");
			this.mc5_Abtn.removeEventListener("click", mc5A);
			root.mc5_Abtn.stop();	
		}
		
		
		var mc5B = this.mc5_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc5right");
			this.mc5_Bbtn.removeEventListener("click", mc5B);
			root.mc5_Bbtn.stop();	
		}
		
		
		var mc5C = this.mc5_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc5back");
			this.mc5_Cbtn.removeEventListener("click", mc5C);
			root.mc5_Cbtn.stop();	
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_55 = function() {
		this.stop();
		
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop("mc5"); 
			
		}
	}
	this.frame_56 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		
			 root.gotoAndStop(57); 
		   
		}
		
		
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_57 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = root.nextBtn4.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			
			getValue();
			if(q6Ans) //check if the student has type their answer
			{
				 root.nextBtn4.removeEventListener("click", nextButtonEvent);
				
				 root.gotoAndStop(58); 
				// String isn't null and has a length > 0
			}
			else
			{
				alert("Please write down your answer.");
			   // String is null or has a 0 length
			}
			
		}
		
		//get input box text
		
		function init() {
			infoContainer2 = new createjs.Container();
			stage.addChild(infoContainer2);
		
			button = this.nextBtn4;
			infoContainer2.addChild(button);
		
			inputField2 = this.answer_box_q6;
			infoContainer2.addChild(inputField2);
			
			
		
			
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		init();
		
		//answerBox
		function setCaret() {
			document.getElementById('answer_box_q6').focus(); //highlight the textfiel
			document.getElementById('answer_box_q6').maxLength = "200";
		}
		
		
		function getValue() {
			q6Ans = document.getElementById('answer_box_q6').value;
		
			
			console.log("Question 6 answer: "+ q6Ans);
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_58 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		
		    root.gotoAndStop(59); 
		}
		
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_59 = function() {
		var root=this;
		
		this.stop();
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(60); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		
		
		//FADE IN
		
		//fade in
		this.photo60.x = 1100;
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(this);
		root.addEventListener('tick', crab_FadeInCbk);
		
		
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo60.x <=670)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
			
			
				return;	
			}
			this.photo60.x-= 40;
		}
	}
	this.frame_60 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(61); 
		}
		
		
		this.credit61.visible = false;
		
		
		//credit
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo61.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit61.visible = true;
			
		}
		
		this.photo61.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit61.visible = false;
			
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		
		
		//fade in
		var fadeInFinish=false;
		
		this.photo61.x = 1100;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo61.x <=690)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				 fadeInFinish=true;
				return;	
			}
			this.photo61.x-= 40;
		}
	}
	this.frame_61 = function() {
		var root=this;
		
		this.stop();
		
		var mc6A = this.mc6_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc6back");
			this.mc6_Abtn.removeEventListener("click", mc6A);
			root.mc6_Abtn.stop();	
		}
		
		
		var mc6B = this.mc6_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc6back");
			this.mc6_Bbtn.removeEventListener("click", mc6B);
			root.mc6_Bbtn.stop();	
		}
		
		
		var mc6C = this.mc6_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc6back");
			this.mc6_Cbtn.removeEventListener("click", mc6C);
			root.mc6_Cbtn.stop();	
		}
		
		var mc6D = this.mc6_Dbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame4.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame4() {
			root.gotoAndStop("mc6right");
			this.mc6_Dbtn.removeEventListener("click", mc6D);
			root.mc6_Dbtn.stop();	
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_62 = function() {
		this.stop();
		
		var root= this;
		
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop("mc6"); 
			
		}
	}
	this.frame_63 = function() {
		var root=this;
		
		this.stop();
		
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(64); 
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_64 = function() {
		var root=this;
		
		this.stop();
		
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(65); 
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_65 = function() {
		var root=this;
		
		this.stop();
		
		var mc7A = this.mc7_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc7back");
			this.mc7_Abtn.removeEventListener("click", mc7A);
			root.mc7_Abtn.stop();	
		}
		
		
		var mc7B = this.mc7_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc7back");
			this.mc7_Bbtn.removeEventListener("click", mc7B);
			root.mc7_Bbtn.stop();	
		}
		
		
		var mc7C = this.mc7_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc7right");
			this.mc7_Cbtn.removeEventListener("click", mc7C);
			root.mc7_Cbtn.stop();	
		}
		
		var mc7D = this.mc7_Dbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame4.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame4() {
			root.gotoAndStop("mc7back");
			this.mc7_Dbtn.removeEventListener("click", mc7D);
			root.mc7_Dbtn.stop();	
		}
		
		
		
		
		
		//credit
		this.credit66.visible = false;
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo66.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		  root.credit66.visible = true;
			
		}
		
		this.photo66.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			root.credit66.visible = false;
			
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_66 = function() {
		this.stop();
		
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop("mc7"); 
			
		}
		
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_67 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(68); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_68 = function() {
		var root=this;
		
		this.stop();
		
		var mc8A = this.mc8_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc8right");
			this.mc8_Abtn.removeEventListener("click", mc8A);
			root.mc8_Abtn.stop();	
		}
		
		
		var mc8B = this.mc8_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc8back");
			this.mc8_Bbtn.removeEventListener("click", mc8B);
			root.mc8_Bbtn.stop();	
		}
		
		
		var mc8C = this.mc8_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc8back");
			this.mc8_Cbtn.removeEventListener("click", mc8C);
			root.mc8_Cbtn.stop();	
		}
		
		var mc8D = this.mc8_Dbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame4.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame4() {
			root.gotoAndStop("mc8back");
			this.mc8_Dbtn.removeEventListener("click", mc8D);
			root.mc8_Dbtn.stop();	
		}
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_69 = function() {
		this.stop();
		
		var root= this;
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop("mc8"); 
			
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_70 = function() {
		var root=this;
		
		this.stop();
		
		
		//this.flower.visible = false;
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(71); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_71 = function() {
		var root=this;
		
		this.stop();
		
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(72); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_72 = function() {
		var root=this;
		
		this.stop();
		
		var mc9A = this.mc9_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc9back");
			this.mc9_Abtn.removeEventListener("click", mc9A);
			root.mc9_Abtn.stop();	
		}
		
		
		var mc9B = this.mc9_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc9back");
			this.mc9_Bbtn.removeEventListener("click", mc9B);
			root.mc9_Bbtn.stop();	
		}
		
		
		var mc9C = this.mc9_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc9back");
			this.mc9_Cbtn.removeEventListener("click", mc9C);
			root.mc9_Cbtn.stop();	
		}
		
		var mc9D = this.mc9_Dbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame4.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame4() {
			root.gotoAndStop("mc9right");
			this.mc9_Dbtn.removeEventListener("click", mc9D);
			root.mc9_Dbtn.stop();	
		}
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_73 = function() {
		this.stop();
		
		var root= this;
		
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop("mc9"); 
			
		}
	}
	this.frame_74 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(75); 
		}
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
	}
	this.frame_75 = function() {
		var root=this;
		
		this.stop();
		
		var mc10A = this.mc10_Abtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			root.gotoAndStop("mc10back");
			this.mc10_Abtn.removeEventListener("click", mc10A);
			root.mc10_Abtn.stop();	
		}
		
		
		var mc10B = this.mc10_Bbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2() {
			root.gotoAndStop("mc10back");
			this.mc10_Bbtn.removeEventListener("click", mc10B);
			root.mc10_Bbtn.stop();	
		}
		
		
		var mc10C = this.mc10_Cbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3() {
			root.gotoAndStop("mc10right");
			this.mc10_Cbtn.removeEventListener("click", mc10C);
			root.mc10_Cbtn.stop();	
		}
		
		var mc10D = this.mc10_Dbtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame4.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame4() {
			root.gotoAndStop("mc10back");
			this.mc10_Dbtn.removeEventListener("click", mc10D);
			root.mc10_Dbtn.stop();	
		}
		
		
		
		this.bar.scaleX=(this.currentFrame/76)*3.0502;
		this.progressText.text=Math.floor((this.currentFrame/76)*100)+"%";
	}
	this.frame_76 = function() {
		this.stop();
		
		var root= this;
		
		
		
		var backBtnEvent = root.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(root));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
			//console.log("pressBack");
			root.gotoAndStop("mc10"); 
			
		}
	}
	this.frame_77 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			console.log("pressBnext");
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(78); 
		}
		this.progressText.text="99%";
		this.bar.scaleX=3.0502;
	}
	this.frame_78 = function() {
		var root=this;
		
		this.stop();
		
		
		
		var nextButtonEvent = this.nextBtn2.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			console.log("pressBnext");
			 root.nextBtn2.removeEventListener("click", nextButtonEvent);
		     root.gotoAndStop(79); 
		}
		
		
		
		
		
		//fade in
		var fadeInFinish=false;
		
		this.speechBubbleThank.alpha = 0;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(root);
		root.addEventListener('tick', crab_FadeInCbk);
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.speechBubbleThank.alpha >=1)
			{
				root.removeEventListener('tick', crab_FadeInCbk);
				this.speechBubbleThank.alpha = 1; 
				 fadeInFinish=true;
				return;	
			}
			this.speechBubbleThank.alpha+= 0.05;
		}
		
		this.progressText.text="100%";
		this.bar.scaleX=3.0502;
	}
	this.frame_79 = function() {
		this.stop();
		this.progressText.text="100%";
		this.bar.scaleX=3.0502;
	}
	this.frame_119 = function() {
		this.stop();
		var root= this;
		
		
		var backBtnEvent2 = this.backBtn2.addEventListener("click", BackToTitle.bind(this));
		
		function BackToTitle()
		{
		
			root.gotoAndStop(1); 
			root.backBtn2.removeEventListener("click",backBtnEvent2);
			root.backBtn2.stop();
		}
		
		
		
		var nextBtnEvent = this.creditNextBtn.addEventListener("click", GoToNextPage.bind(this));
		
		function GoToNextPage()
		{
			
			root.creditNextBtn.removeEventListener("click", nextBtnEvent);
			root.gotoAndStop(120);
			root.nextBtn.stop();
			
		}
		
		this.stop();
	}
	this.frame_120 = function() {
		this.stop();
		var root= this;
		
		
		var backBtnEvent3 = root.backBtn2.addEventListener("click", BackToTitle.bind(this));
		
		function BackToTitle()
		{
		
			root.backBtn2.removeEventListener("click",backBtnEvent3);
			root.gotoAndStop(1); 
			root.backBtn2.stop();
		}
		
		
		
		var lastBtnEvent = root.creditLastBtn.addEventListener("click", GoToLastPage.bind(root));
		
		function GoToLastPage()
		{
			root.gotoAndStop(119);
			root.lastBtn.removeEventListener("click", lastBtnEvent);
			root.lastBtn.stop();
		}
		
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1).call(this.frame_65).wait(1).call(this.frame_66).wait(1).call(this.frame_67).wait(1).call(this.frame_68).wait(1).call(this.frame_69).wait(1).call(this.frame_70).wait(1).call(this.frame_71).wait(1).call(this.frame_72).wait(1).call(this.frame_73).wait(1).call(this.frame_74).wait(1).call(this.frame_75).wait(1).call(this.frame_76).wait(1).call(this.frame_77).wait(1).call(this.frame_78).wait(1).call(this.frame_79).wait(40).call(this.frame_119).wait(1).call(this.frame_120).wait(81));

	// Layer_1
	this.bar = new lib.progressBar();
	this.bar.name = "bar";
	this.bar.setTransform(721.2,47.95,3.0502,1,0,0,0,0.1,2.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmEAcQgMAAgIgIQgIgIAAgMIAAAAQAAgLAIgIQAIgIAMAAIMJAAQAMAAAIAIQAIAIAAALIAAAAQAAAMgIAIQgIAIgMAAg");
	this.shape.setTransform(785.5524,48.475,1.5521,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.bar}]},3).to({state:[]},77).wait(121));

	// Layer_4
	this.progressText = new cjs.Text("1%", "bold 18px 'Arial'", "#FFFFFF");
	this.progressText.name = "progressText";
	this.progressText.textAlign = "center";
	this.progressText.lineHeight = 22;
	this.progressText.lineWidth = 44;
	this.progressText.parent = this;
	this.progressText.setTransform(880.35,41.4);
	this.progressText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressText).wait(3).to({_off:false},0).to({_off:true},124).wait(74));

	// nav
	this.instance = new lib.an_Video({'id': '', 'src':'videos/Introduction_video.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.instance.setTransform(480.7,323.5,2.3999,1.7999,0,0,0,200.3,150.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(199));

	// name
	this.answer_box_email = new lib.an_TextInput({'id': 'answer_box_email', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_email.name = "answer_box_email";
	this.answer_box_email.setTransform(550.95,443.85,2.55,2.5461,0,0,0,50,10.8);

	this.answer_box_class = new lib.an_TextInput({'id': 'answer_box_class', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_class.name = "answer_box_class";
	this.answer_box_class.setTransform(550.95,364.55,2.5501,2.5454,0,0,0,50,11);

	this.text = new cjs.Text("Email:", "28px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 123;
	this.text.parent = this;
	this.text.setTransform(346.45,431);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.text_1 = new cjs.Text("School:", "28px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 126;
	this.text_1.parent = this;
	this.text_1.setTransform(348,269.15);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.text_2 = new cjs.Text("Class:", "28px 'Arial'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 127;
	this.text_2.parent = this;
	this.text_2.setTransform(348.6,349.75);
	this.text_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.answer_box_school = new lib.an_TextInput({'id': 'answer_box_school', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_school.name = "answer_box_school";
	this.answer_box_school.setTransform(550.95,283.25,2.5498,2.5453,0,0,0,50,11);

	this.text_3 = new cjs.Text("ok", "44px 'Tw Cen MT'", "#143647");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 50;
	this.text_3.lineWidth = 136;
	this.text_3.parent = this;
	this.text_3.setTransform(821.25,519.85);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(407.5,329.4,1,0.9669,0,0,0,368.5,95.6);

	this.okBtn = new lib.generalBtn_();
	this.okBtn.name = "okBtn";
	this.okBtn.setTransform(821.25,545.1,0.6586,0.6912,0,0,0,0.1,0.1);
	this.okBtn.alpha = 0.8594;
	new cjs.ButtonHelper(this.okBtn, 0, 1, 1);

	this.answer_box = new lib.an_TextInput({'id': 'answer_box', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box.name = "answer_box";
	this.answer_box.setTransform(549.95,201.35,2.5502,2.5458,0,0,0,50,10.9);

	this.instance_2 = new lib.an_CSS({'id': 'instance_2', 'href':'assets/style.css'});

	this.instance_2.setTransform(909.4,120.05,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.answer_box},{t:this.okBtn},{t:this.instance_1},{t:this.text_3},{t:this.answer_box_school},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.answer_box_class},{t:this.answer_box_email}]},2).to({state:[]},1).to({state:[]},124).wait(74));

	// nextButton
	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(411.65,409.65,0.5,0.5);

	this.StartBtn = new lib.Btn();
	this.StartBtn.name = "StartBtn";
	this.StartBtn.setTransform(483.85,429.7,0.5233,0.6303,0,0,0,0.3,0.1);
	this.StartBtn.alpha = 0.8594;
	new cjs.ButtonHelper(this.StartBtn, 0, 1, 2, false, new lib.Btn(), 3);

	this.skipBtn = new lib.SkipBtn();
	this.skipBtn.name = "skipBtn";
	this.skipBtn.setTransform(887.85,31.85,1,1,0,0,0,39.1,21.6);
	new cjs.ButtonHelper(this.skipBtn, 0, 1, 2);

	this.nextBtn = new lib.nextPageButton();
	this.nextBtn.name = "nextBtn";
	this.nextBtn.setTransform(855.1,545.1,0.4517,0.4517,0,0,0,0.5,-1.1);
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2);

	this.nextButton = new lib.nextPageButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(865.65,541.65,0.3911,0.3911,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 2);

	this.nextBtn2 = new lib.nextPageButton();
	this.nextBtn2.name = "nextBtn2";
	this.nextBtn2.setTransform(875.1,566.6,0.3967,0.3967,0,0,0,2.1,4.7);
	this.nextBtn2._off = true;
	new cjs.ButtonHelper(this.nextBtn2, 0, 1, 2);

	this.nextBtn3 = new lib.nextPageButton();
	this.nextBtn3.name = "nextBtn3";
	this.nextBtn3.setTransform(871.4,557.85,0.3773,0.3773,0,0,0,2,4.5);
	new cjs.ButtonHelper(this.nextBtn3, 0, 1, 2);

	this.nextBtn4 = new lib.nextPageButton();
	this.nextBtn4.name = "nextBtn4";
	this.nextBtn4.setTransform(863.55,558.35,0.3773,0.3773,0,0,0,2,4.5);
	new cjs.ButtonHelper(this.nextBtn4, 0, 1, 2);

	this.creditLastBtn = new lib.creditPageNextButton();
	this.creditLastBtn.name = "creditLastBtn";
	this.creditLastBtn.setTransform(498.5,511.7,0.6499,0.6429,0,0,180,-30.2,-29.7);
	new cjs.ButtonHelper(this.creditLastBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.StartBtn},{t:this.instance_3}]}).to({state:[{t:this.skipBtn}]},1).to({state:[]},1).to({state:[{t:this.nextBtn,p:{regX:0.5,regY:-1.1,scaleX:0.4517,scaleY:0.4517,x:855.1,y:545.1}}]},1).to({state:[{t:this.nextButton}]},2).to({state:[]},1).to({state:[{t:this.nextBtn,p:{regX:0.1,regY:-1.4,scaleX:0.4074,scaleY:0.4074,x:871.4,y:553.85}}]},2).to({state:[]},11).to({state:[{t:this.nextBtn2}]},2).to({state:[]},5).to({state:[{t:this.nextBtn2}]},2).to({state:[]},11).to({state:[{t:this.nextBtn2}]},2).to({state:[{t:this.nextBtn3}]},2).to({state:[{t:this.nextBtn2}]},1).to({state:[{t:this.nextBtn2}]},6).to({state:[{t:this.nextBtn2}]},1).to({state:[{t:this.nextBtn2}]},2).to({state:[]},1).to({state:[{t:this.nextBtn2}]},2).to({state:[{t:this.nextBtn4}]},1).to({state:[{t:this.nextBtn2}]},1).to({state:[]},3).to({state:[{t:this.nextBtn2}]},2).to({state:[]},2).to({state:[{t:this.nextBtn2}]},2).to({state:[]},1).to({state:[{t:this.nextBtn2}]},2).to({state:[]},2).to({state:[{t:this.nextBtn2}]},2).to({state:[]},1).to({state:[{t:this.nextBtn2}]},2).to({state:[{t:this.nextBtn2}]},1).to({state:[]},1).to({state:[{t:this.creditLastBtn}]},41).to({state:[]},56).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.nextBtn2).wait(21).to({_off:false},0).to({_off:true},5).wait(2).to({_off:false,regX:0.7,regY:-0.7,scaleX:0.3773,scaleY:0.3773,x:874.3,y:562.45},0).to({_off:true},11).wait(2).to({_off:false,regX:2,regY:4.5,x:871.4,y:557.85},0).to({_off:true},2).wait(1).to({_off:false},0).wait(7).to({x:901.1,y:575.3},0).wait(2).to({x:867.25,y:555.55},0).to({_off:true},1).wait(2).to({_off:false,x:863.55,y:558.35},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},3).wait(2).to({_off:false,x:868.5,y:557.35},0).to({_off:true},2).wait(2).to({_off:false,x:873.2},0).to({_off:true},1).wait(2).to({_off:false,x:853.65,y:552.35},0).to({_off:true},2).wait(2).to({_off:false,x:859.6,y:556.45},0).to({_off:true},1).wait(2).to({_off:false,x:870.85,y:559.45},0).wait(1).to({x:871.6,y:572.45},0).to({_off:true},1).wait(122));

	// mcAnsT
	this.text_4 = new cjs.Text("D) A Snail", "24px 'Arial'", "#0A3337");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 29;
	this.text_4.lineWidth = 192;
	this.text_4.parent = this;
	this.text_4.setTransform(780.3,510.4,0.7427,0.7427);

	this.text_5 = new cjs.Text("C) A Bird", "24px 'Arial'", "#0A3337");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 29;
	this.text_5.lineWidth = 192;
	this.text_5.parent = this;
	this.text_5.setTransform(538,510.4,0.7427,0.7427);

	this.text_6 = new cjs.Text("B) A Crab", "24px 'Arial'", "#0A3337");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 29;
	this.text_6.lineWidth = 192;
	this.text_6.parent = this;
	this.text_6.setTransform(780.3,436.25,0.7427,0.7427);

	this.text_7 = new cjs.Text("A) A Fish", "24px 'Arial'", "#0A3337");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 29;
	this.text_7.lineWidth = 192;
	this.text_7.parent = this;
	this.text_7.setTransform(538,436.25,0.7427,0.7427);

	this.photo6 = new lib.photo6();
	this.photo6.name = "photo6";
	this.photo6.setTransform(465.1,186.95,0.8882,0.8882,0,0,0,340.2,112.5);

	this.instance_4 = new lib.photo1819();
	this.instance_4.setTransform(597.95,251.05,0.9772,0.9772,0,0,0,216.2,148.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4}]},6).to({state:[]},1).to({state:[{t:this.photo6}]},7).to({state:[]},1).to({state:[{t:this.instance_4}]},28).to({state:[]},1).to({state:[]},83).wait(74));

	// mcAnsBox
	this.DBtn = new lib.mcAnsBox();
	this.DBtn.name = "DBtn";
	this.DBtn.setTransform(779.6,516.3,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.DBtn, 0, 1, 2);

	this.BBtn = new lib.mcAnsBox();
	this.BBtn.name = "BBtn";
	this.BBtn.setTransform(779.6,442.65,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.BBtn, 0, 1, 2);

	this.CBtn = new lib.mcAnsBox();
	this.CBtn.name = "CBtn";
	this.CBtn.setTransform(537.95,516.3,0.5904,0.5867,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.CBtn, 0, 1, 2);

	this.ABtn = new lib.mcAnsBox();
	this.ABtn.name = "ABtn";
	this.ABtn.setTransform(537.95,442.5,0.5904,0.5867,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.ABtn, 0, 1, 2);

	this.answer_box_q1 = new lib.an_TextInput({'id': 'answer_box_q1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q1.name = "answer_box_q1";
	this.answer_box_q1.setTransform(645.5,463.1,4.7657,1.7347,0,0,0,50.1,11);

	this.instance_5 = new lib.an_CSS({'id': 'instance_5', 'href':'assets/style2.css'});

	this.instance_5.setTransform(888,84.7,1,1,0,0,0,50,11);

	this.text_8 = new cjs.Text("A) They form large groups that resemble an army", "16px 'Arial'", "#0D3147");
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 405;
	this.text_8.parent = this;
	this.text_8.setTransform(432.4,392.5,0.9791,1);

	this.text_9 = new cjs.Text("C) They know no fear and will defend their territory at all costs", "15px 'Arial'", "#0D3147");
	this.text_9.lineHeight = 19;
	this.text_9.lineWidth = 404;
	this.text_9.parent = this;
	this.text_9.setTransform(432.4,510.1,0.9791,1);

	this.mcAnsC = new lib.MCButtonLong();
	this.mcAnsC.name = "mcAnsC";
	this.mcAnsC.setTransform(628.25,523.4,1.0782,1.0766,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mcAnsC, 0, 1, 1);

	this.text_10 = new cjs.Text("B) They fight each other just like soldiers", "16px 'Arial'", "#0D3147");
	this.text_10.lineHeight = 20;
	this.text_10.lineWidth = 405;
	this.text_10.parent = this;
	this.text_10.setTransform(431.7,452.95,0.9791,1);

	this.mcAnsA = new lib.MCButtonLong();
	this.mcAnsA.name = "mcAnsA";
	this.mcAnsA.setTransform(622.3,399.4,1.0782,1,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mcAnsA, 0, 1, 1);

	this.mcAnsB = new lib.MCButtonLong();
	this.mcAnsB.name = "mcAnsB";
	this.mcAnsB.setTransform(628.25,459.85,1.0782,1,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mcAnsB, 0, 1, 1);

	this.answer_box_q3_2 = new lib.an_TextInput({'id': 'answer_box_q3_2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q3_2.name = "answer_box_q3_2";
	this.answer_box_q3_2.setTransform(667.8,464.95,4.4441,1.3213,0,0,0,50.2,11.1);

	this.answer_box_q3_1 = new lib.an_TextInput({'id': 'answer_box_q3_1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q3_1.name = "answer_box_q3_1";
	this.answer_box_q3_1.setTransform(667.8,411.45,4.4441,1.3213,0,0,0,50.2,11.1);

	this.text_11 = new cjs.Text("A) Worms", "bold 24px 'Montserrat'", "#0A3337");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 35;
	this.text_11.lineWidth = 192;
	this.text_11.parent = this;
	this.text_11.setTransform(519,434.3,0.7427,0.7427);

	this.mc3_Dbtn = new lib.mcAnsBox();
	this.mc3_Dbtn.name = "mc3_Dbtn";
	this.mc3_Dbtn.setTransform(760.6,520.75,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc3_Dbtn, 0, 1, 2);

	this.mc3_Bbtn = new lib.mcAnsBox();
	this.mc3_Bbtn.name = "mc3_Bbtn";
	this.mc3_Bbtn.setTransform(760.6,447.1,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc3_Bbtn, 0, 1, 2);

	this.mc3_Cbtn = new lib.mcAnsBox();
	this.mc3_Cbtn.name = "mc3_Cbtn";
	this.mc3_Cbtn.setTransform(518.95,520.75,0.5904,0.5867,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.mc3_Cbtn, 0, 1, 2);

	this.mc3_Abtn = new lib.mcAnsBox();
	this.mc3_Abtn.name = "mc3_Abtn";
	this.mc3_Abtn.setTransform(518.95,446.95,0.5904,0.5867,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.mc3_Abtn, 0, 1, 2);

	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(424.8,443.3,0.5,0.5);

	this.answer_box_q4 = new lib.an_TextInput({'id': 'answer_box_q4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q4.name = "answer_box_q4";
	this.answer_box_q4.setTransform(669.3,486.65,4.4441,1.893,0,0,0,50.2,11.2);

	this.mc4_Cbtn = new lib.MCButtonLong();
	this.mc4_Cbtn.name = "mc4_Cbtn";
	this.mc4_Cbtn.setTransform(654.4,554.05,1.0782,1.1451,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mc4_Cbtn, 0, 1, 1);

	this.mc4_Abtn = new lib.MCButtonLong();
	this.mc4_Abtn.name = "mc4_Abtn";
	this.mc4_Abtn.setTransform(654.4,428.2,1.0782,1,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mc4_Abtn, 0, 1, 1);

	this.mc4_Bbtn = new lib.MCButtonLong();
	this.mc4_Bbtn.name = "mc4_Bbtn";
	this.mc4_Bbtn.setTransform(654.4,488.65,1.0782,1,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mc4_Bbtn, 0, 1, 1);

	this.instance_7 = new lib.CachedBmp_3();
	this.instance_7.setTransform(386.6,457.2,0.5,0.5);

	this.answer_box_q5 = new lib.an_TextInput({'id': 'answer_box_q5', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q5.name = "answer_box_q5";
	this.answer_box_q5.setTransform(630.85,499.8,4.4441,1.4654,0,0,0,50.2,11.1);

	this.mc5_Cbtn = new lib.MCButtonLong();
	this.mc5_Cbtn.name = "mc5_Cbtn";
	this.mc5_Cbtn.setTransform(650.65,490.15,1.0182,1.0814,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mc5_Cbtn, 0, 1, 1);

	this.mc5_Abtn = new lib.MCButtonLong();
	this.mc5_Abtn.name = "mc5_Abtn";
	this.mc5_Abtn.setTransform(650.65,371.3,1.0182,0.9444,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mc5_Abtn, 0, 1, 1);

	this.mc5_Bbtn = new lib.MCButtonLong();
	this.mc5_Bbtn.name = "mc5_Bbtn";
	this.mc5_Bbtn.setTransform(650.65,428.45,1.0182,0.9444,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mc5_Bbtn, 0, 1, 1);

	this.instance_8 = new lib.CachedBmp_4();
	this.instance_8.setTransform(360.15,398.8,0.5,0.5);

	this.answer_box_q6 = new lib.an_TextInput({'id': 'answer_box_q6', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q6.name = "answer_box_q6";
	this.answer_box_q6.setTransform(640.85,441.2,5.1618,1.5495,0,0,0,50.2,11.2);

	this.mc6_Dbtn = new lib.mcAnsBox();
	this.mc6_Dbtn.name = "mc6_Dbtn";
	this.mc6_Dbtn.setTransform(778.5,533.95,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc6_Dbtn, 0, 1, 2);

	this.mc6_Bbtn = new lib.mcAnsBox();
	this.mc6_Bbtn.name = "mc6_Bbtn";
	this.mc6_Bbtn.setTransform(778.5,460.3,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc6_Bbtn, 0, 1, 2);

	this.mc6_Cbtn = new lib.mcAnsBox();
	this.mc6_Cbtn.name = "mc6_Cbtn";
	this.mc6_Cbtn.setTransform(536.85,533.95,0.5904,0.5867,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.mc6_Cbtn, 0, 1, 2);

	this.mc6_Abtn = new lib.mcAnsBox();
	this.mc6_Abtn.name = "mc6_Abtn";
	this.mc6_Abtn.setTransform(536.85,460.15,0.5904,0.5867,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.mc6_Abtn, 0, 1, 2);

	this.mc7_Dbtn = new lib.mcAnsBox();
	this.mc7_Dbtn.name = "mc7_Dbtn";
	this.mc7_Dbtn.setTransform(737.3,535.05,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc7_Dbtn, 0, 1, 2);

	this.mc7_Bbtn = new lib.mcAnsBox();
	this.mc7_Bbtn.name = "mc7_Bbtn";
	this.mc7_Bbtn.setTransform(737.3,461.4,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc7_Bbtn, 0, 1, 2);

	this.mc7_Cbtn = new lib.mcAnsBox();
	this.mc7_Cbtn.name = "mc7_Cbtn";
	this.mc7_Cbtn.setTransform(495.65,535.05,0.5904,0.5867,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.mc7_Cbtn, 0, 1, 2);

	this.mc7_Abtn = new lib.mcAnsBox();
	this.mc7_Abtn.name = "mc7_Abtn";
	this.mc7_Abtn.setTransform(495.65,461.25,0.5904,0.5867,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.mc7_Abtn, 0, 1, 2);

	this.mc8_Dbtn = new lib.MCButtonLong();
	this.mc8_Dbtn.name = "mc8_Dbtn";
	this.mc8_Dbtn.setTransform(659.9,574.85,1.0182,1.0814,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mc8_Dbtn, 0, 1, 1);

	this.mc8_Cbtn = new lib.MCButtonLong();
	this.mc8_Cbtn.name = "mc8_Cbtn";
	this.mc8_Cbtn.setTransform(659.9,513.65,1.0182,0.9448,0,0,0,219.3,26.9);
	new cjs.ButtonHelper(this.mc8_Cbtn, 0, 1, 1);

	this.mc8_Abtn = new lib.MCButtonLong();
	this.mc8_Abtn.name = "mc8_Abtn";
	this.mc8_Abtn.setTransform(659.9,398.45,1.0182,0.9444,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mc8_Abtn, 0, 1, 1);

	this.mc8_Bbtn = new lib.MCButtonLong();
	this.mc8_Bbtn.name = "mc8_Bbtn";
	this.mc8_Bbtn.setTransform(659.9,455.6,1.0182,0.9444,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mc8_Bbtn, 0, 1, 1);

	this.mc9_Dbtn = new lib.mcAnsBox();
	this.mc9_Dbtn.name = "mc9_Dbtn";
	this.mc9_Dbtn.setTransform(792.95,568.35,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc9_Dbtn, 0, 1, 2);

	this.mc9_Bbtn = new lib.mcAnsBox();
	this.mc9_Bbtn.name = "mc9_Bbtn";
	this.mc9_Bbtn.setTransform(792.95,501.7,0.5904,0.5867,0,0,0,0.4,0.2);
	new cjs.ButtonHelper(this.mc9_Bbtn, 0, 1, 2);

	this.mc9_Cbtn = new lib.mcAnsBox();
	this.mc9_Cbtn.name = "mc9_Cbtn";
	this.mc9_Cbtn.setTransform(551.3,568.35,0.5904,0.5867,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.mc9_Cbtn, 0, 1, 2);

	this.mc9_Abtn = new lib.mcAnsBox();
	this.mc9_Abtn.name = "mc9_Abtn";
	this.mc9_Abtn.setTransform(551.3,501.55,0.5904,0.5867,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.mc9_Abtn, 0, 1, 2);

	this.mc10_Dbtn = new lib.MCButtonLong();
	this.mc10_Dbtn.name = "mc10_Dbtn";
	this.mc10_Dbtn.setTransform(663.25,577.95,0.8869,0.8848,0,0,0,219.3,26.9);
	new cjs.ButtonHelper(this.mc10_Dbtn, 0, 1, 1);

	this.mc10_Cbtn = new lib.MCButtonLong();
	this.mc10_Cbtn.name = "mc10_Cbtn";
	this.mc10_Cbtn.setTransform(663.25,520.6,0.8869,0.8848,0,0,0,219.3,26.9);
	new cjs.ButtonHelper(this.mc10_Cbtn, 0, 1, 1);

	this.mc10_Abtn = new lib.MCButtonLong();
	this.mc10_Abtn.name = "mc10_Abtn";
	this.mc10_Abtn.setTransform(663.25,409.65,0.8869,0.8844,0,0,0,219.3,26.7);
	new cjs.ButtonHelper(this.mc10_Abtn, 0, 1, 1);

	this.mc10_Bbtn = new lib.MCButtonLong();
	this.mc10_Bbtn.name = "mc10_Bbtn";
	this.mc10_Bbtn.setTransform(663.25,465.6,0.8869,0.8844,0,0,0,219.3,26.8);
	new cjs.ButtonHelper(this.mc10_Bbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ABtn},{t:this.CBtn},{t:this.BBtn},{t:this.DBtn}]},6).to({state:[]},1).to({state:[{t:this.instance_5},{t:this.answer_box_q1}]},4).to({state:[]},1).to({state:[{t:this.mcAnsB},{t:this.mcAnsA},{t:this.text_10,p:{scaleX:0.9791,scaleY:1,x:431.7,y:452.95,text:"B) They fight each other just like soldiers",font:"16px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:19.9,lineWidth:405}},{t:this.mcAnsC},{t:this.text_9,p:{scaleX:0.9791,x:432.4,y:510.1,text:"C) They know no fear and will defend their territory at all costs",font:"15px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:18.8,lineWidth:404,scaleY:1}},{t:this.text_8,p:{scaleX:0.9791,x:432.4,y:392.5,text:"A) They form large groups that resemble an army",font:"16px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:19.9,lineWidth:405,scaleY:1}}]},7).to({state:[]},1).to({state:[{t:this.text_9,p:{scaleX:1,x:414.05,y:396.65,text:"1.",font:"bold 20px 'Montserrat'",color:"#FFFFFF",textAlign:"center",lineHeight:29.6,lineWidth:41,scaleY:1}},{t:this.text_8,p:{scaleX:1,x:414.05,y:449.8,text:"2.",font:"bold 20px 'Montserrat'",color:"#FFFFFF",textAlign:"center",lineHeight:29.6,lineWidth:41,scaleY:1}},{t:this.answer_box_q3_1},{t:this.answer_box_q3_2}]},2).to({state:[]},1).to({state:[{t:this.mc3_Abtn},{t:this.mc3_Cbtn},{t:this.mc3_Bbtn},{t:this.mc3_Dbtn},{t:this.text_11,p:{x:519,y:434.3,text:"A) Worms",font:"bold 24px 'Montserrat'",lineHeight:35.1,lineWidth:192,scaleX:0.7427,scaleY:0.7427,color:"#0A3337",textAlign:"center"}},{t:this.text_10,p:{scaleX:0.7427,scaleY:0.7427,x:761.3,y:434.3,text:"B) Molluscs",font:"bold 24px 'Montserrat'",color:"#0A3337",textAlign:"center",lineHeight:35.1,lineWidth:192}},{t:this.text_9,p:{scaleX:0.7427,x:519,y:508.45,text:"C) Jellyfish",font:"bold 24px 'Montserrat'",color:"#0A3337",textAlign:"center",lineHeight:35.1,lineWidth:192,scaleY:0.7427}},{t:this.text_8,p:{scaleX:0.7427,x:761.3,y:508.45,text:"D) Sharks",font:"bold 24px 'Montserrat'",color:"#0A3337",textAlign:"center",lineHeight:35.1,lineWidth:192,scaleY:0.7427}}]},3).to({state:[]},1).to({state:[{t:this.answer_box_q4},{t:this.instance_6}]},5).to({state:[]},1).to({state:[{t:this.mc4_Bbtn},{t:this.mc4_Abtn},{t:this.mc4_Cbtn},{t:this.text_10,p:{scaleX:1,scaleY:1,x:456.3,y:415.35,text:"A) Because the red colour acts as a camouflage",font:"20px 'Tw Cen MT'",color:"#0D3147",textAlign:"",lineHeight:23.75,lineWidth:399}},{t:this.text_9,p:{scaleX:1,x:456.3,y:478.15,text:"B) Because the food they eat is always red ",font:"20px 'Tw Cen MT'",color:"#0D3147",textAlign:"",lineHeight:23.75,lineWidth:399,scaleY:1}},{t:this.text_8,p:{scaleX:1,x:455.8,y:534.8,text:"C) Because they have a large number of cells that contain \n     haemoglobin (this protein makes our blood cells red)",font:"17px 'Tw Cen MT'",color:"#0D3147",textAlign:"",lineHeight:20.5,lineWidth:399,scaleY:1}}]},6).to({state:[]},1).to({state:[{t:this.answer_box_q5},{t:this.instance_7}]},3).to({state:[]},1).to({state:[{t:this.mc5_Bbtn},{t:this.mc5_Abtn},{t:this.mc5_Cbtn},{t:this.text_10,p:{scaleX:0.9444,scaleY:0.9444,x:463.6,y:359.15,text:"A) Their roots can turn salt into oxygen",font:"18px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:22.1,lineWidth:399}},{t:this.text_9,p:{scaleX:0.9444,x:463.6,y:418.45,text:"B) They have specialised leaves that excrete salt",font:"18px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:22.1,lineWidth:399,scaleY:0.9444}},{t:this.text_8,p:{scaleX:0.9444,x:463.6,y:471.4,text:"C) They have gills that allow them to breath underwater",font:"18px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:22.1,lineWidth:399,scaleY:0.9444}}]},10).to({state:[]},1).to({state:[{t:this.answer_box_q6},{t:this.instance_8}]},2).to({state:[]},1).to({state:[{t:this.mc6_Abtn},{t:this.mc6_Cbtn},{t:this.mc6_Bbtn},{t:this.mc6_Dbtn},{t:this.text_11,p:{x:536.65,y:447.9,text:"A) To climb mangroves",font:"bold 20px 'Arial'",lineHeight:24.35,lineWidth:277,scaleX:0.7427,scaleY:0.7427,color:"#0A3337",textAlign:"center"}},{t:this.text_10,p:{scaleX:0.7427,scaleY:0.7427,x:776.55,y:447.55,text:"B) To dig burrows faster",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277}},{t:this.text_9,p:{scaleX:0.7427,x:536.65,y:522.45,text:"C) To chop up their food",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277,scaleY:0.7427}},{t:this.text_8,p:{scaleX:0.7427,x:776.55,y:522.75,text:"D) To attract female crabs",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277,scaleY:0.7427}}]},3).to({state:[]},1).to({state:[{t:this.mc7_Abtn},{t:this.mc7_Cbtn},{t:this.mc7_Bbtn},{t:this.mc7_Dbtn},{t:this.text_11,p:{x:495.45,y:453.55,text:"A) Lionfish",font:"bold 20px 'Arial'",lineHeight:24.35,lineWidth:277,scaleX:0.7427,scaleY:0.7427,color:"#0A3337",textAlign:"center"}},{t:this.text_10,p:{scaleX:0.7427,scaleY:0.7427,x:735.35,y:453.2,text:"B) Anemone",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277}},{t:this.text_9,p:{scaleX:0.7427,x:495.45,y:526.6,text:"C) Decorator Urchin",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277,scaleY:0.7427}},{t:this.text_8,p:{scaleX:0.7427,x:735.35,y:526.6,text:"D) Crown of Thorns Starfish",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277,scaleY:0.7427}}]},3).to({state:[]},1).to({state:[{t:this.mc8_Bbtn},{t:this.mc8_Abtn},{t:this.mc8_Cbtn},{t:this.text_11,p:{x:472.85,y:386.3,text:"A) To protect itself from sunlight",font:"18px 'Arial'",lineHeight:22.1,lineWidth:399,scaleX:0.9444,scaleY:0.9444,color:"#0D3147",textAlign:""}},{t:this.text_10,p:{scaleX:0.9444,scaleY:0.9444,x:472.85,y:445.6,text:"B) To look pretty and attract mates\n",font:"18px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:22.1,lineWidth:399}},{t:this.text_9,p:{scaleX:0.9444,x:472.85,y:502.55,text:"C) To defend itself from predators",font:"18px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:22.1,lineWidth:399,scaleY:0.9444}},{t:this.mc8_Dbtn},{t:this.text_8,p:{scaleX:0.9444,x:471.5,y:554.6,text:"D) To show off its rock and shell collection to other urchins",font:"18px 'Arial'",color:"#0D3147",textAlign:"",lineHeight:22.1,lineWidth:399,scaleY:0.9444}}]},2).to({state:[]},1).to({state:[{t:this.mc9_Abtn},{t:this.mc9_Cbtn},{t:this.mc9_Bbtn},{t:this.mc9_Dbtn},{t:this.text_11,p:{x:551.1,y:494.3,text:"A) Sea Slugs",font:"bold 20px 'Arial'",lineHeight:24.35,lineWidth:277,scaleX:0.7427,scaleY:0.7427,color:"#0A3337",textAlign:"center"}},{t:this.text_10,p:{scaleX:0.7427,scaleY:0.7427,x:791,y:493.95,text:"B) Sea Snails",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277}},{t:this.text_9,p:{scaleX:0.7427,x:551.1,y:561.85,text:"C) Sponges",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277,scaleY:0.7427}},{t:this.text_8,p:{scaleX:0.7427,x:791,y:560.8,text:"D) Cephalopods",font:"bold 20px 'Arial'",color:"#0A3337",textAlign:"center",lineHeight:24.35,lineWidth:277,scaleY:0.7427}}]},3).to({state:[]},1).to({state:[{t:this.mc10_Bbtn},{t:this.mc10_Abtn},{t:this.text_11,p:{x:488.05,y:398.25,text:"A) They have blue blood",font:"18px 'Tw Cen MT'",lineHeight:21.6,lineWidth:399,scaleX:0.8844,scaleY:0.8844,color:"#0D3147",textAlign:""}},{t:this.text_10,p:{scaleX:0.8844,scaleY:0.8844,x:488.05,y:453.8,text:"B) They can change the colour and texture of their skin\n",font:"18px 'Tw Cen MT'",color:"#0D3147",textAlign:"",lineHeight:21.6,lineWidth:399}},{t:this.mc10_Cbtn},{t:this.text_9,p:{scaleX:0.8844,x:488.05,y:511.3,text:"C) They can jump 10 meters out of the water",font:"18px 'Tw Cen MT'",color:"#0D3147",textAlign:"",lineHeight:21.6,lineWidth:399,scaleY:0.8844}},{t:this.mc10_Dbtn},{t:this.text_8,p:{scaleX:0.8844,x:488.05,y:566.55,text:"D)They have three hearts",font:"18px 'Tw Cen MT'",color:"#0D3147",textAlign:"",lineHeight:21.6,lineWidth:399,scaleY:0.8844}}]},2).to({state:[]},1).to({state:[]},51).wait(74));

	// hCrabAnim
	this.instance_9 = new lib.movingHappyCrab();
	this.instance_9.setTransform(204.1,497.5,0.2925,0.2925,0,0,0,450.2,127.4);

	this.crab = new lib.movingHappyCrab();
	this.crab.name = "crab";
	this.crab.setTransform(204.2,477.55,0.2925,0.2926,0,0,0,450.5,127.5);

	this.crab2 = new lib.movingHappyCrab();
	this.crab2.name = "crab2";
	this.crab2.setTransform(448.15,379.65,0.3138,0.3049,0,0,180,1266.3,-155.5);

	this.instance_10 = new lib.QuestionCrabMove();
	this.instance_10.setTransform(225.55,438.5,0.5238,0.5238,0,0,0,13.8,3.5);

	this.instance_11 = new lib.movingSadCrab();
	this.instance_11.setTransform(450.4,426.8,0.4047,0.4047,0,0,0,-3,-0.8);
	this.instance_11._off = true;

	this.crab9 = new lib.movingHappyCrab();
	this.crab9.name = "crab9";
	this.crab9.setTransform(400.85,453.85,0.3918,0.3918,0,0,0,450.9,127.8);
	this.crab9._off = true;

	this.crab4 = new lib.movingHappyCrab();
	this.crab4.name = "crab4";
	this.crab4.setTransform(699.6,470,0.3063,0.2998,0,0,180,450,163.8);

	this.crab12 = new lib.QuestionCrabMove();
	this.crab12.name = "crab12";
	this.crab12.setTransform(211.4,472.3,0.4729,0.4729,0,0,0,13.8,3.4);
	this.crab12._off = true;

	this.crab13 = new lib.movingHappyCrab();
	this.crab13.name = "crab13";
	this.crab13.setTransform(300.4,455.6,0.3106,0.3106,0,0,0,450.2,45.4);

	this.crab16 = new lib.movingHappyCrab();
	this.crab16.name = "crab16";
	this.crab16.setTransform(169.8,503,0.3122,0.3122,0,0,0,450.3,127);

	this.crab22 = new lib.movingHappyCrab();
	this.crab22.name = "crab22";
	this.crab22.setTransform(570.8,498.75,0.3137,0.3137,0,0,0,450.9,127.9);

	this.crab45 = new lib.movingHappyCrab();
	this.crab45.name = "crab45";
	this.crab45.setTransform(200.85,477.75,0.3243,0.3243,0,0,0,451.2,128.4);

	this.crab57 = new lib.movingHappyCrab();
	this.crab57.name = "crab57";
	this.crab57.setTransform(235.1,491.5,0.307,0.307,0,0,0,451.2,128.2);

	this.text_12 = new cjs.Text("Try again\n", "36px 'Arial'", "#0D3147");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 42;
	this.text_12.lineWidth = 241;
	this.text_12.parent = this;
	this.text_12.setTransform(604.7,199.2208,0.9468,0.9468);

	this.instance_12 = new lib.Symbol9();
	this.instance_12.setTransform(610.7,236.8,0.9562,0.6732,0,0,0,240.6,242.1);
	this.instance_12.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.backBtn2 = new lib.BackBtn();
	this.backBtn2.name = "backBtn2";
	this.backBtn2.setTransform(858.05,598.45,0.5869,0.5869,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.backBtn2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.crab}]},1).to({state:[{t:this.crab2}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab4,p:{regX:450,regY:163.8,scaleX:0.3063,scaleY:0.2998,skewY:180,x:699.6,y:470}}]},1).to({state:[{t:this.crab4,p:{regX:450.1,regY:127.1,scaleX:0.299,scaleY:0.299,skewY:0,x:193.55,y:472.15}}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.crab13,p:{regY:45.4,scaleX:0.3106,scaleY:0.3106,x:300.4,y:455.6,regX:450.2,skewY:0}}]},1).to({state:[{t:this.crab13,p:{regY:127,scaleX:0.3087,scaleY:0.3087,x:161.05,y:500.35,regX:450.2,skewY:0}}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.crab16,p:{x:169.8,y:503}}]},1).to({state:[{t:this.crab16,p:{x:182.9,y:502.9}}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab22}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab13,p:{regY:127,scaleX:0.2959,scaleY:0.3106,x:662.8,y:475.15,regX:450,skewY:180}}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab12}]},2).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},4).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},2).to({state:[{t:this.crab45}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},4).to({state:[{t:this.crab9}]},2).to({state:[{t:this.crab9}]},2).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab57}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_12},{t:this.text_12}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab12}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.crab9}]},1).to({state:[{t:this.crab9}]},1).to({state:[]},26).to({state:[{t:this.backBtn2}]},36).to({state:[]},14).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,regX:-3.1,regY:-1,x:379.9,y:455.85},0).to({_off:true},1).wait(6).to({_off:false,x:335.15,y:449.55},0).to({_off:true},1).wait(2).to({_off:false,regX:-3,regY:-0.9,scaleX:0.3325,scaleY:0.3325,x:234.05,y:480.55},0).to({_off:true},2).wait(8).to({_off:false,regX:-3.1,regY:-1,scaleX:0.4047,scaleY:0.4047,x:375.6,y:432.8},0).to({_off:true},1).wait(4).to({_off:false,regX:-2.9,regY:-0.8,scaleX:0.348,scaleY:0.348,x:209.35,y:473.15},0).to({_off:true},4).wait(6).to({_off:false,regX:-3.1,regY:-1,scaleX:0.4047,scaleY:0.4047,x:465.5,y:432.8},0).to({_off:true},1).wait(10).to({_off:false,x:224.55,y:453.8},0).to({_off:true},1).wait(2).to({_off:false,x:428.1,y:426.05},0).to({_off:true},1).wait(3).to({_off:false,regX:-3,regY:-0.8,scaleX:0.3492,scaleY:0.3492,x:255.85,y:466.7},0).to({_off:true},1).wait(2).to({_off:false,regY:-1.1,scaleX:0.3705,scaleY:0.3705,x:422.7,y:409.2},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.crab9).wait(8).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,scaleX:0.3346,scaleY:0.3346,x:235.5,y:485.8},0).to({_off:true},1).wait(4).to({_off:false,x:195,y:481.25},0).to({_off:true},1).wait(1).to({_off:false,x:210.45,y:490.3},0).to({_off:true},1).wait(2).to({_off:false,regX:451,regY:128.1,scaleX:0.358,scaleY:0.358,x:314.8,y:457.1},0).wait(1).to({regX:451.2,regY:128.2,scaleX:0.3137,scaleY:0.3137,x:247.4,y:454.55},0).to({_off:true},1).wait(3).to({_off:false,regX:451.1,regY:184.6,scaleX:0.2907,scaleY:0.2907,x:184.6,y:522.8},0).to({_off:true},4).wait(1).to({_off:false,regY:128.2,x:215.85,y:491.55},0).to({_off:true},1).wait(2).to({_off:false,x:208.65},0).to({_off:true},2).wait(6).to({_off:false,scaleX:0.2462,scaleY:0.2462,x:167.5,y:495.85},0).wait(2).to({regX:399.4,regY:-23.2,scaleX:0.2333,scaleY:0.2333,x:130.15,y:441.75},0).wait(2).to({scaleX:0.2847,scaleY:0.2847,x:399.1,y:427.2},0).to({_off:true},1).wait(4).to({_off:false,regX:293.7,regY:62.6,scaleX:0.2907,scaleY:0.2907,x:166.3,y:480.8},0).wait(1).to({x:163.1,y:468},0).wait(1).to({x:166.3,y:480.8},0).to({_off:true},1).wait(2).to({_off:false,regX:451.1,regY:128.2,x:222.8,y:512.1},0).wait(1).to({regX:451.2,scaleX:0.2579,scaleY:0.2579,x:177.5,y:494.65},0).to({_off:true},1).wait(2).to({_off:false,regX:451.1,scaleX:0.2907,scaleY:0.2907,x:184.6,y:491.55},0).to({_off:true},1).wait(2).to({_off:false,x:217.45,y:469.55},0).to({_off:true},2).wait(2).to({_off:false,x:246.15,y:497.35},0).to({_off:true},1).wait(2).to({_off:false,x:243.4,y:511.25},0).wait(1).to({x:244.55,y:503.45},0).to({_off:true},26).wait(97));
	this.timeline.addTween(cjs.Tween.get(this.crab12).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,regX:13.5,regY:3.1,scaleX:0.4092,scaleY:0.4092,x:139.7,y:494.75},0).to({_off:true},1).wait(2).to({_off:false,regX:13.8,regY:3.5,scaleX:0.5238,scaleY:0.5238,x:324.35,y:440.9},0).to({_off:true},1).wait(1).to({_off:false,x:207.15,y:473.4},0).to({_off:true},1).wait(2).to({_off:false,x:201.15,y:463.3},0).to({_off:true},1).wait(3).to({_off:false,x:217.9,y:454.35},0).to({_off:true},1).wait(5).to({_off:false,regX:14.1,regY:3.7,scaleX:0.5034,scaleY:0.5034,x:240.15,y:461.65},0).to({_off:true},1).wait(4).to({_off:false,regX:13.8,regY:3.5,scaleX:0.5238,scaleY:0.5238,x:238.3,y:485.95},0).to({_off:true},1).wait(1).to({_off:false,x:209.5,y:466.65},0).to({_off:true},1).wait(3).to({_off:false,x:184.15,y:501.2},0).to({_off:true},1).wait(10).to({_off:false,regX:13.9,regY:3.4,scaleX:0.4532,scaleY:0.4532,x:251.85,y:445.15},0).to({_off:true},1).wait(2).to({_off:false,regX:13.8,regY:3.5,scaleX:0.5238,scaleY:0.5238,x:220.15,y:445.8},0).to({_off:true},1).wait(3).to({_off:false,x:225.75,y:468.8},0).to({_off:true},1).wait(3).to({_off:false,regX:14,scaleX:0.4557,scaleY:0.4557,x:183.1,y:471.5},0).to({_off:true},1).wait(2).to({_off:false,regX:13.8,scaleX:0.5238,scaleY:0.5238,x:188.25,y:488.5},0).to({_off:true},1).wait(3).to({_off:false,x:234.95,y:485.95},0).to({_off:true},1).wait(2).to({_off:false,x:244.05,y:486.3},0).to({_off:true},1).wait(125));

	// Title
	this.instance_13 = new lib.title_move();
	this.instance_13.setTransform(498.35,242.5,0.7992,0.7992,0,0,0,424.6,174.5);

	this.instance_14 = new lib.bubble2_move();
	this.instance_14.setTransform(855.95,258.85,1,1,0,0,0,50,44);

	this.instance_15 = new lib.bubble1_move();
	this.instance_15.setTransform(68.35,81.4,0.9098,0.9098);

	this.instance_16 = new lib.clam_move();
	this.instance_16.setTransform(211.15,471.9,0.8263,0.8263,0,0,0,187.1,131.8);

	this.instance_17 = new lib.crab_shadow_1();
	this.instance_17.setTransform(753.25,462,0.8373,0.8373,0,0,0,215.2,174.3);

	this.text_13 = new cjs.Text("Intertidal Sandy Shore – Upper Shore", "bold 18px 'Arial'", "#2F1803");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 22;
	this.text_13.lineWidth = 506;
	this.text_13.parent = this;
	this.text_13.setTransform(487.95,25.8);
	this.text_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).to({state:[]},1).to({state:[{t:this.text_13}]},2).to({state:[{t:this.text_13}]},13).to({state:[{t:this.text_13}]},18).to({state:[{t:this.text_13}]},17).to({state:[{t:this.text_13}]},13).to({state:[]},14).to({state:[]},49).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.text_13).wait(3).to({_off:false},0).wait(13).to({y:26.2,text:" Intertidal Sandy Shore – Middle Shore"},0).wait(18).to({x:483.45,y:25.8,text:" Intertidal Sandy Shore – Lower Shore"},0).wait(17).to({x:487.95,y:23.3,text:"Mangrove Ecosystem",font:"bold 18px 'Nirmala UI'",lineHeight:25.9},0).wait(13).to({y:24.7,text:"Subtidal Zone"},0).to({_off:true},14).wait(123));

	// titleBg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDCAB").s().p("A54DPQhVAAg9g9Qg8g8AAhWQAAhUA8g9QA9g9BVAAQZ9AdZzgdQBWAAA8A9QA9A9AABUQAABWg9A8Qg8A9hWAAg");
	this.shape_1.setTransform(487.725,34.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE3A3").s().p("A54DPQhVAAg9g9Qg8g8AAhWQAAhUA8g9QA9g9BVAAMAzwAAAQBWAAA8A9QA9A9AABUQAABWg9A8Qg8A9hWAAg");
	this.shape_2.setTransform(487.725,34.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},3).to({state:[]},75).to({state:[{t:this.shape_2}]},113).to({state:[]},8).wait(2));

	// text
	this.text_14 = new cjs.Text("The Upper Shore environment only becomes fully submerged for a short period of time at the highest high tide. ", "21px 'Arial'", "#063034");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 25;
	this.text_14.lineWidth = 250;
	this.text_14.parent = this;
	this.text_14.setTransform(219.3,169.2802,0.8449,0.8449);
	this.text_14._off = true;

	this.text_15 = new lib.F5text();
	this.text_15.name = "text_15";
	this.text_15.setTransform(218.2,246.2,0.7416,0.7416,0,0,0,127.2,153.6);

	this.text_16 = new lib.frame5Text();
	this.text_16.name = "text_16";
	this.text_16.setTransform(739.35,254.35,0.7111,0.7111,0,0,0,140.5,132.6);

	this.text_17 = new cjs.Text("Scopimera globosa ", "italic 19px 'Arial'", "#0C2D41");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 23;
	this.text_17.lineWidth = 216;
	this.text_17.parent = this;
	this.text_17.setTransform(207.2,166.5);

	this.text_18 = new cjs.Text("These are small crabs that live on sandy beaches in the tropical Indo-Pacific region", "24px 'Arial'", "#0C2D41");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 29;
	this.text_18.lineWidth = 271;
	this.text_18.parent = this;
	this.text_18.setTransform(207.15,198.2,0.773,0.773);

	this.text_19 = new cjs.Text("It's a \nSand Bubbler Crab ", "24px 'Arial'", "#0C2D41");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 29;
	this.text_19.lineWidth = 274;
	this.text_19.parent = this;
	this.text_19.setTransform(207.5368,118.7117,0.7938,0.7938);

	this.instance_18 = new lib.CachedBmp_5();
	this.instance_18.setTransform(384.75,416.9,0.5,0.5);

	this.instance_19 = new lib.Symbol7();
	this.instance_19.setTransform(654.9,306.9,1,1,0,0,0,248.9,143.8);

	this.answer_box_q2_3 = new lib.an_TextInput({'id': 'answer_box_q2_3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q2_3.name = "answer_box_q2_3";
	this.answer_box_q2_3.setTransform(574.6,551.85,4.7485,1.45,0,0,0,50.2,11.1);

	this.answer_box_q2_2 = new lib.an_TextInput({'id': 'answer_box_q2_2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q2_2.name = "answer_box_q2_2";
	this.answer_box_q2_2.setTransform(574.6,510.15,4.7485,1.45,0,0,0,50.2,11.1);

	this.answer_box_q2 = new lib.an_TextInput({'id': 'answer_box_q2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box_q2.name = "answer_box_q2";
	this.answer_box_q2.setTransform(574.6,469.5,4.7485,1.45,0,0,0,50.2,11.1);

	this.instance_20 = new lib.an_CSS({'id': 'instance_20', 'href':'assets/style2.css'});

	this.instance_20.setTransform(888.7,72.05,1,1,0,0,0,50,11);

	this.instance_21 = new lib.CachedBmp_6();
	this.instance_21.setTransform(253.25,425.1,0.5,0.5);

	this.speechBubbleThank = new lib.speechBubbleThank();
	this.speechBubbleThank.name = "speechBubbleThank";
	this.speechBubbleThank.setTransform(556.1,255.65,1,1,0,0,0,258.2,158.5);

	this.instance_22 = new lib.Symbol1("synched",0);
	this.instance_22.setTransform(691.2,538.75,0.5288,0.5288,0,0,0,314.7,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_14}]},3).to({state:[{t:this.text_15}]},1).to({state:[{t:this.text_16}]},1).to({state:[{t:this.text_14}]},1).to({state:[{t:this.text_14}]},1).to({state:[{t:this.text_14}]},1).to({state:[{t:this.text_14}]},1).to({state:[{t:this.text_19,p:{scaleX:0.7938,scaleY:0.7938,x:207.5368,y:118.7117,text:"It's a \nSand Bubbler Crab ",font:"24px 'Arial'",color:"#0C2D41",lineHeight:28.85,lineWidth:274}},{t:this.text_18,p:{scaleX:0.773,scaleY:0.773,x:207.15,y:198.2,text:"These are small crabs that live on sandy beaches in the tropical Indo-Pacific region",font:"24px 'Arial'",color:"#0C2D41",lineHeight:28.85,lineWidth:271}},{t:this.text_17,p:{x:207.2,y:166.5,text:"Scopimera globosa ",font:"italic 19px 'Arial'",color:"#0C2D41",lineHeight:23.25,lineWidth:216}},{t:this.text_14}]},1).to({state:[{t:this.text_14},{t:this.instance_18}]},1).to({state:[{t:this.instance_19},{t:this.text_14}]},1).to({state:[{t:this.text_14}]},1).to({state:[{t:this.text_19,p:{scaleX:0.5813,scaleY:0.5813,x:293.2,y:352.8448,text:"These snails look alike but are not the same species! Can you spot at least 3 differences?",font:"25px 'Arial'",color:"#0D3147",lineHeight:29.95,lineWidth:506}},{t:this.instance_21},{t:this.instance_20,p:{x:888.7,y:72.05}},{t:this.answer_box_q2},{t:this.text_18,p:{scaleX:1,scaleY:1,x:316.45,y:457.4,text:"1.",font:"bold 20px 'Arial'",color:"#FFFFFF",lineHeight:24.35,lineWidth:100}},{t:this.answer_box_q2_2},{t:this.text_17,p:{x:316.45,y:498.05,text:"2.",font:"bold 20px 'Arial'",color:"#FFFFFF",lineHeight:24.35,lineWidth:100}},{t:this.answer_box_q2_3},{t:this.text_14}]},1).to({state:[]},1).to({state:[{t:this.instance_20,p:{x:90.75,y:28.4}}]},7).to({state:[{t:this.instance_20,p:{x:549.85,y:95.2}},{t:this.speechBubbleThank}]},56).to({state:[{t:this.instance_20,p:{x:549.85,y:95.2}},{t:this.text_14}]},1).to({state:[{t:this.instance_22}]},25).to({state:[]},15).to({state:[]},8).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.text_14).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,scaleX:0.7993,scaleY:0.7993,x:252.25,y:167.5687,text:"What animal creates these patterns?",font:"31px 'Arial'",color:"#333333",lineHeight:36.6,lineWidth:248},0).wait(1).to({scaleX:0.8218,scaleY:0.8218,x:633.4555,y:197.1,text:"Wrong Answer\nTry Again!",font:"33px 'Arial'",color:"#16454E",lineHeight:38.85,lineWidth:263},0).wait(1).to({scaleX:0.8953,scaleY:0.8953,x:668.0029,y:165.3709,text:"Yes! \nIt's a crab",font:"41px 'Arial'",color:"#0A3337",lineHeight:47.8,lineWidth:275},0).wait(1).to({scaleX:0.8839,scaleY:0.8839,x:687.5,y:181.35,text:"Let's see what's hiding in the burrow…",font:"25px 'Arial'",lineHeight:29.95,lineWidth:202},0).wait(1).to({scaleX:1,scaleY:1,x:206.8,y:165.55,text:"(                                ) ",font:"19px 'Arial'",color:"#0C2D41",lineHeight:23.25,lineWidth:215},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,x:220.3284,y:175.1,text:"How do you think the sand bubbler crab created this pattern?",color:"#0D3147",lineWidth:213},0).wait(1).to({scaleX:1,scaleY:1,x:-122.25,y:117.1,text:"",font:"19px 'ArialMT'",color:"#FFFFFF",lineWidth:100},0).wait(1).to({scaleX:0.8701,scaleY:0.8701,x:211.95,y:155.45,text:"Look!\n There are other animals besides crabs living here! \nLet's have a closer look…",font:"24px 'Arial'",color:"#333333",lineHeight:28.85,lineWidth:217},0).wait(1).to({scaleX:1,scaleY:1,x:316.45,y:539.75,text:"3.",font:"bold 20px 'Arial'",color:"#FFFFFF",lineHeight:24.35,lineWidth:100},0).to({_off:true},1).wait(64).to({_off:false,scaleX:0.9143,scaleY:0.9143,x:538.65,y:191.25,text:"Please go and visit Starfish Bay, enjoy the marine life that you can find there and share this hidden Hong Kong treasure with others!",font:"25px 'Arial'",color:"#0D3147",lineHeight:29.95,lineWidth:407},0).to({_off:true},25).wait(97));

	// speechBubble
	this.instance_23 = new lib.Symbol3();
	this.instance_23.setTransform(219.2,238.05,0.8449,0.7309,0,0,0,242.2,242.2);
	this.instance_23.shadow = new cjs.Shadow("rgba(47,47,47,0.498)",0,7,11);

	this.speechBubble = new lib.speechBubble_1();
	this.speechBubble.name = "speechBubble";
	this.speechBubble.setTransform(232.85,216,0.7597,0.7628,0,0,0,196,221.7);
	this.speechBubble.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,6,4);

	this.speechBubble2 = new lib.frame6SB();
	this.speechBubble2.name = "speechBubble2";
	this.speechBubble2.setTransform(721.45,242.2,0.7453,0.7257,0,0,0,195.8,159.7);
	this.speechBubble2.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.speechBubble3 = new lib.frame6SB();
	this.speechBubble3.name = "speechBubble3";
	this.speechBubble3.setTransform(236.8,241.15,0.7023,0.7164,0,0,0,195.7,159.4);
	this.speechBubble3.shadow = new cjs.Shadow("rgba(102,102,102,0.459)",0,7,11);

	this.instance_24 = new lib.Symbol4();
	this.instance_24.setTransform(621.5,234.05,0.7615,0.8126,0,0,0,195.8,159.3);
	this.instance_24.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,7,11);

	this.speechBubble3_2 = new lib.frame9SB();
	this.speechBubble3_2.name = "speechBubble3_2";
	this.speechBubble3_2.setTransform(663.5,224.7,0.8531,0.8531,0,0,0,195.7,159.3);
	this.speechBubble3_2.shadow = new cjs.Shadow("rgba(102,102,102,0.518)",0,7,11);

	this.speechBubble4 = new lib.frame10SB();
	this.speechBubble4.name = "speechBubble4";
	this.speechBubble4.setTransform(692.95,233.6,0.6566,0.7841,0,0,0,195.7,159.6);
	this.speechBubble4.shadow = new cjs.Shadow("rgba(84,72,67,0.459)",0,7,11);

	this.instance_25 = new lib.Symbol5();
	this.instance_25.setTransform(198.75,224.9,0.7938,0.7207,0,0,0,209,221.3);
	this.instance_25.shadow = new cjs.Shadow("rgba(50,50,50,0.498)",0,7,11);

	this.speechBubble12 = new lib.Symbol6();
	this.speechBubble12.name = "speechBubble12";
	this.speechBubble12.setTransform(217.2,260.6,0.8634,0.8618,0,0,0,275.1,204.6);
	this.speechBubble12.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.instance_26 = new lib.Symbol8();
	this.instance_26.setTransform(625.9,262.5,0.8705,0.7998,0,0,0,456.9,235.2);
	this.instance_26.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.instance_27 = new lib.Symbol11();
	this.instance_27.setTransform(211.9,250.1,0.8701,0.8701,0,0,0,226.3,212.1);
	this.instance_27.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.instance_28 = new lib.Symbol10();
	this.instance_28.setTransform(296.85,374.7,0.7595,0.7401,0,0,0,238.5,66.1);
	this.instance_28.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.text_20 = new cjs.Text("", "18px 'MicrosoftJhengHeiBold'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 26;
	this.text_20.lineWidth = 100;
	this.text_20.parent = this;
	this.text_20.setTransform(-420.35,-102.4);

	this.text_21 = new cjs.Text("There is actually \na total of four visual differences between these two species. These can be seen when you compare the ends of their shells, the shoulder, the opening and the colouration!", "17px 'Arial'", "#0D3147");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 21;
	this.text_21.lineWidth = 208;
	this.text_21.parent = this;
	this.text_21.setTransform(166.45,179.3,0.9468,0.9468);

	this.speechBubble_1 = new lib.Symbol9();
	this.speechBubble_1.name = "speechBubble_1";
	this.speechBubble_1.setTransform(169.25,278.95,0.7956,0.7249,0,0,0,240.2,241.8);
	this.speechBubble_1.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.text_22 = new cjs.Text("Soldier crabs!", "23px 'Arial'", "#0D3147");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 28;
	this.text_22.lineWidth = 264;
	this.text_22.parent = this;
	this.text_22.setTransform(253.9,219.9208,0.9468,0.9468);

	this.speechBubble_2 = new lib.Symbol4();
	this.speechBubble_2.name = "speechBubble_2";
	this.speechBubble_2.setTransform(723.1,250.25,0.8318,0.9236,0,0,0,195.9,159.5);
	this.speechBubble_2.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,7,11);

	this.text_23 = new cjs.Text("A Clam! \nThis is the Chinese Wedge Clam", "27px 'Arial'", "#0C2D41");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 32;
	this.text_23.lineWidth = 282;
	this.text_23.parent = this;
	this.text_23.setTransform(283.8368,169.3117,0.7938,0.7938);

	this.speechBubble_3 = new lib.sb3();
	this.speechBubble_3.name = "speechBubble_3";
	this.speechBubble_3.setTransform(586.1,276,1,1,0,0,0,312.5,191.8);

	this.instance_29 = new lib.movingSadCrab();
	this.instance_29.setTransform(450.85,432.8,0.4047,0.4047,0,0,0,-3.1,-1);

	this.photo65 = new lib.Symbol9();
	this.photo65.name = "photo65";
	this.photo65.setTransform(214.2,243.3,1.0003,0.845,0,0,0,240.4,242.3);
	this.photo65.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.speechBubble}]},1).to({state:[{t:this.speechBubble2}]},1).to({state:[{t:this.speechBubble3}]},1).to({state:[{t:this.instance_24,p:{regX:195.8,scaleX:0.7615,scaleY:0.8126,x:621.5,y:234.05}}]},1).to({state:[{t:this.speechBubble3_2,p:{regX:195.7,regY:159.3,scaleX:0.8531,x:663.5,y:224.7}}]},1).to({state:[{t:this.speechBubble4,p:{regX:195.7,scaleX:0.6566,scaleY:0.7841,x:692.95,y:233.6}}]},1).to({state:[{t:this.instance_25,p:{regY:221.3,scaleY:0.7207,x:198.75,y:224.9}}]},1).to({state:[{t:this.speechBubble12}]},1).to({state:[{t:this.instance_26,p:{regX:456.9,regY:235.2,scaleX:0.8705,scaleY:0.7998,x:625.9,y:262.5}}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.2,regY:241.8,scaleX:0.7956,scaleY:0.7249,x:169.25,y:278.95}},{t:this.text_21,p:{scaleX:0.9468,scaleY:0.9468,x:166.45,y:179.3,text:"There is actually \na total of four visual differences between these two species. These can be seen when you compare the ends of their shells, the shoulder, the opening and the colouration!",font:"17px 'Arial'",lineWidth:208,color:"#0D3147",lineHeight:21}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:-420.35,y:-102.4,text:"",font:"18px 'MicrosoftJhengHeiBold'",color:"#000000",lineHeight:25.95,lineWidth:100,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.3,regY:241.9,scaleX:0.9345,scaleY:0.8293,x:209.4,y:240}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:213.35,y:134.35,text:" The Middle Shore environment is submerged for a longer period of time than the Upper Shore. Therefore, the sand is usually firmer and wetter, and contains more burrowing animals! Let’s see what lives here…",font:"17px 'Arial'",color:"#0D3147",lineHeight:21,lineWidth:208,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.3,regY:241.8,scaleX:0.9345,scaleY:0.6318,x:556.2,y:277.7}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:552.15,y:205.2,text:"Which intertidal animal is blue and moves fast across the sand in large numbers?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:208,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.4,regY:241.8,scaleX:0.8457,scaleY:0.5597,x:257.5,y:258.85}},{t:this.text_22,p:{scaleX:0.9468,scaleY:0.9468,x:253.9,y:219.9208,text:"Soldier crabs!",font:"23px 'Arial'",color:"#0D3147",lineHeight:27.65,lineWidth:264}},{t:this.text_21,p:{scaleX:1,scaleY:1,x:253.65,y:247,text:"Mictyris longicarpus",font:"italic 17px 'Arial'",lineWidth:204,color:"#0D3147",lineHeight:21}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:254.15,y:246.15,text:"(                                 )",font:"17px 'Arial'",color:"#0D3147",lineHeight:21,lineWidth:188,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.3,regY:241.8,scaleX:0.8555,scaleY:0.5597,x:225.05,y:259.9}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:225.5,y:224.0708,text:"Why are these crabs \ncalled soldier crabs?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.instance_24,p:{regX:195.7,scaleX:0.7453,scaleY:0.8179,x:626.25,y:261.55}},{t:this.text_20,p:{scaleX:0.8218,scaleY:0.8218,x:633.4555,y:230.25,text:"Wrong Answer\nTry Again!",font:"33px 'Arial'",color:"#16454E",lineHeight:38.85,lineWidth:263,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_2,p:{regX:195.9,regY:159.5,scaleX:0.8318,scaleY:0.9236,x:723.1,y:250.25}},{t:this.text_20,p:{scaleX:0.8218,scaleY:0.8218,x:732.8555,y:181.75,text:"Yes! They form large groups that resemble an army!",font:"32px 'Arial'",color:"#16454E",lineHeight:37.75,lineWidth:263,textAlign:"center"}}]},1).to({state:[{t:this.instance_25,p:{regY:221.2,scaleY:0.7938,x:270.4,y:224.7}},{t:this.text_22,p:{scaleX:0.8218,scaleY:0.8218,x:271.3055,y:127.2,text:"Solider crabs form these large groups when they are feeding. This behaviour is called ",font:"22px 'Arial'",color:"#16454E",lineHeight:26.55,lineWidth:260}},{t:this.text_21,p:{scaleX:1,scaleY:1,x:271.5,y:215.85,text:"collective foraging. ",font:"bold 18px 'Arial'",lineWidth:213,color:"#16454E",lineHeight:22.1}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:271.9,y:239.4,text:"What are two advantages of feeding in a large group?",font:"18px 'Arial'",color:"#16454E",lineHeight:22.1,lineWidth:214,textAlign:"center"}}]},1).to({state:[{t:this.instance_26,p:{regX:456.8,regY:235.6,scaleX:0.8759,scaleY:0.7875,x:309.35,y:245.8}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:90.85,y:164.8,text:"Answer: \n1) Feeding in a large group means that each crab is less likely to be eaten by a predator!\n2) Feeding in a large group is also the most efficient way for these animals to feed since they are less likely to miss food hidden in the sand!”",font:"17px 'Arial'",color:"#333333",lineHeight:21,lineWidth:453,textAlign:""}}]},1).to({state:[{t:this.speechBubble4,p:{regX:195.6,scaleX:0.7387,scaleY:0.8185,x:707.55,y:255.2}},{t:this.text_20,p:{scaleX:0.8839,scaleY:0.8839,x:703.6,y:196.55,text:"Let’s see what else is hidden in the wet sand!",font:"27px 'Arial'",color:"#0A3337",lineHeight:32.15,lineWidth:231,textAlign:"center"}}]},1).to({state:[{t:this.instance_25,p:{regY:221.2,scaleY:0.7055,x:280.25,y:239.8}},{t:this.text_23,p:{scaleX:0.7938,scaleY:0.7938,x:283.8368,y:169.3117,text:"A Clam! \nThis is the Chinese Wedge Clam",font:"27px 'Arial'",color:"#0C2D41",lineHeight:32.15,lineWidth:282}},{t:this.text_22,p:{scaleX:1,scaleY:1,x:285.4,y:249.35,text:"Coecella chinensis",font:"italic 20px 'Arial'",color:"#0C2D41",lineHeight:24.35,lineWidth:167}},{t:this.text_21,p:{scaleX:1,scaleY:1,x:194.45,y:242.3,text:"(",font:"27px 'Arial'",lineWidth:9,color:"#0C2D41",lineHeight:32.15}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:376.05,y:242.3,text:")",font:"27px 'Arial'",color:"#0C2D41",lineHeight:32.15,lineWidth:100,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.4,regY:242,scaleX:0.9243,scaleY:0.6175,x:261.05,y:234.35}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:260.05,y:179.9708,text:"Which taxonomic group or biological classification do clams belong to?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:221,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_2,p:{regX:195.8,regY:159.4,scaleX:0.8207,scaleY:0.8823,x:595.65,y:271.85}},{t:this.text_20,p:{scaleX:0.8218,scaleY:0.8218,x:605.6555,y:235.65,text:"Wrong Answer\nTry Again!",font:"36px 'Arial'",color:"#16454E",lineHeight:42.25,lineWidth:314,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble3_2,p:{regX:195.8,regY:159.5,scaleX:0.78,x:642.35,y:227.45}},{t:this.text_20,p:{scaleX:0.8953,scaleY:0.8953,x:649.8029,y:182.6709,text:"Yes! \nIt's a Mollusc!",font:"34px 'Arial'",color:"#0A3337",lineHeight:40,lineWidth:294,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242,scaleX:0.8532,scaleY:0.6175,x:291.3,y:204.5}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:293.15,y:141.0708,text:"Look! \nPeople are digging for clams in the sand!",font:"26px 'Arial'",color:"#0D3147",lineHeight:31.05,lineWidth:246,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.1,scaleX:0.9243,scaleY:0.7757,x:291.8,y:222.65}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:286.55,y:132.1708,text:"Unregulated clam-digging is not good for the sandy-shore environment because it can lead to overharvesting! ",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:227,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.7,regY:242.1,scaleX:0.8613,scaleY:0.7407,x:240.1,y:223.15}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:240.0084,y:130.9406,text:"This can cause an imbalance in the food chain and have many ecological consequences!",font:"24px 'Arial'",color:"#0D3147",lineHeight:28.85,lineWidth:187,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.9562,scaleY:0.7398,x:276.55,y:240.5}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:274.8,y:153.3208,text:"As well as being an important part of the food chain, why else do you think clams are important for the sandy-shore environment of Starfish Bay?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.7534,x:254,y:237.5}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:251.85,y:138.2708,text:"Answer:\n They are important because they are filter feeders and so they help to remove harmful nutrients from seawater!",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:243,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.7568,x:214.9,y:260.9}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:213.05,y:171.8208,text:"The Lower Shore environment is primarily marine as it is only exposed to air during low tide and is fully submerged in seawater most of the time. ",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.6767,x:219.25,y:277.65}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:219.2,y:224.6208,text:"In this zone the sand is very wet and muddy and contains lots of intriguing animals!",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.937,scaleY:0.6321,x:267.45,y:231.05}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:266.9,y:183.7708,text:"Come closer! \nThere is something under the muddy sand!",font:"23px 'Arial'",color:"#0D3147",lineHeight:27.65,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.8994,scaleY:0.5939,x:247.3,y:253.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:249,y:207.8708,text:"What is this thick red-coloured worm?",font:"25px 'Arial'",color:"#0D3147",lineHeight:29.95,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.7266,x:241.3,y:257.05}},{t:this.text_23,p:{scaleX:0.9468,scaleY:0.9468,x:235.75,y:175.6071,text:"It’s a species of Spoon Worm! ",font:"24px 'Arial'",color:"#0D3147",lineHeight:28.85,lineWidth:217}},{t:this.text_22,p:{scaleX:1,scaleY:1,x:235.75,y:232.25,text:"Ochetostoma \nerythrogrammon",font:"italic 21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:205}},{t:this.text_21,p:{scaleX:1,scaleY:1,x:166.35,y:229.65,text:"(",font:"21px 'Arial'",lineWidth:100,color:"#0D3147",lineHeight:25.45}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:320.85,y:256.5,text:")",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:100,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.3,scaleX:0.9297,scaleY:0.5399,x:236.4,y:241.35}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:236.4,y:209.5208,text:"Why do these worms appear red in colour?",font:"22px 'Arial'",color:"#0D3147",lineHeight:26.55,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.6098,x:561.9,y:238.7}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:562.2,y:205.4208,text:"Try again",font:"37px 'Arial'",color:"#0D3147",lineHeight:43.35,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.2,scaleX:1,scaleY:0.723,x:230,y:247.6}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:228.45,y:173.4708,text:"Yes! \nBecause they have a large number of haemoglobin-containing cells!",font:"23px 'Arial'",color:"#0D3147",lineHeight:27.65,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.1,scaleX:0.9062,scaleY:0.7334,x:208.5,y:244.85}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:208.4846,y:168.9708,text:" Look! \nThere are eyes and legs peeping out from these shells. Let’s see who they belong to…",font:"22px 'Arial'",color:"#0D3147",lineHeight:26.55,lineWidth:234,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.2,scaleX:0.9562,scaleY:0.8979,x:207.4,y:248.9}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:201.8,y:139.6994,text:"They belong to hermit crabs! \nBut it looks like these two crabs are different species…Can you spot the major difference between these two species of hermit crab?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:239,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.1,scaleX:0.9562,scaleY:0.6889,x:201.75,y:234.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:197.35,y:172.1208,text:"The major difference between these two species of hermit crab is the size of their claws!",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.7646,x:199.25,y:240.25}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:203.35,y:149.1208,text:"This hermit crab has confused a plastic bottle cap for its shell. Unfortunately, hermit crabs often become trapped in plastic waste and end up dying!",font:"20px 'Arial'",color:"#0D3147",lineHeight:24.35,lineWidth:244,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.1,scaleX:0.9562,scaleY:0.7093,x:196.6,y:226.75}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:194.85,y:164.8208,text:"Make sure you always take away your plastic waste from the beach or find a bin to dispose of it safely!",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:264,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.9562,scaleY:0.7089,x:214.7,y:226.7}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:212.65,y:154.6708,text:"Hermit crabs are also filter feeders which means they are susceptible to feeding on tiny pieces of plastic called microplastics. ",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:261,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.5,scaleX:1.0339,scaleY:0.8895,x:204.75,y:239.85}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:204.35,y:141.0708,text:"Eating too much microplastic can change the behaviour of hermit crabs and cause them to make unwise decisions, such as to choose smaller, weaker shells to live in. This can lead to their death and in turn can threaten the stability of the food chain!",font:"19px 'Arial'",color:"#0D3147",lineHeight:23.25,lineWidth:281,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.5,regY:242.2,scaleX:0.9562,scaleY:0.7732,x:208.15,y:232.45}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:204.6,y:147.4208,text:"Microplastics form when larger plastic items break down into smaller pieces, so by removing large pieces of plastic from the beach you can also reduce the amount of microplastic!",font:"19px 'Arial'",color:"#0D3147",lineHeight:23.25,lineWidth:247,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.9562,scaleY:0.8179,x:207.55,y:253.05}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:207.3,y:164.4708,text:"Again, by making sure you take away all your plastic waste from the beach you can help to reduce the number of animals that are affected by plastic! ",font:"20px 'Arial'",color:"#0D3147",lineHeight:24.35,lineWidth:255,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.2,regY:242.4,scaleX:0.922,scaleY:0.6826,x:205.7,y:264.35}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:203.95,y:207.4708,text:"Now I will introduce you to the intertidal mangrove habitat that can also be found at Starfish Bay! ",font:"20px 'Arial'",color:"#0D3147",lineHeight:24.35,lineWidth:234,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.6,scaleX:1.0954,scaleY:0.6613,x:223.15,y:257.5}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:221.9,y:188.1804,text:"Did you know that mangroves occur worldwide throughout the tropics and subtropics and have many impressive adaptations that allow them to survive in saltwater?!",font:"19px 'Arial'",color:"#0D3147",lineHeight:23.25,lineWidth:314,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.845,scaleY:0.6753,x:612.7,y:274.65}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:616.3,y:225.4708,text:"Wow! Unlike many tree species, mangroves grow in saltwater!",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:228,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.7,regY:242.1,scaleX:0.9101,scaleY:0.6753,x:293.45,y:230.8}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:291.9,y:186.2208,text:"What is one adaptation that allows these trees to grow in saltwater?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:238,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.652,x:665.45,y:274.4}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:663.1,y:241.4208,text:"Try Again!",font:"30px 'Montserrat Medium'",color:"#0D3147",lineHeight:43.35,lineWidth:228,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.9562,scaleY:0.6753,x:250.65,y:259.05}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:250.25,y:194.3708,text:"Yes! \nThey have specialised leaves that excrete salt!",font:"23px 'Arial'",color:"#0D3147",lineHeight:27.65,lineWidth:228,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.905,scaleY:0.6753,x:372.65,y:236}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:370.9,y:177.3208,text:"Why is it important that we try to protect Hong Kong’s mangrove ecosystem?",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:228,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_3,p:{scaleX:1,scaleY:1,x:586.1,y:276}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:303.3,y:134.6208,text:"Answer:\n\nIt is important to protect Hong Kong’s mangrove ecosystem for many reasons! Here are three:\n\n1) Mangroves act as shelters and feeding grounds for many marine species and so   \n    play a crucial role in maintaining Hong Kong’s fish populations.\n\n2) Mangrove forests form a natural coastline defence system, they protect areas \n    behind the mangroves from typhoons and storm surges.\n\n3) Mangroves are also home to many other animal species, such as birds, insects \n    and reptiles. Therefore, by protecting mangroves we can protect a whole variety \n    of Hong Kong’s wildlife!",font:"16px 'Arial'",color:"#0D3147",lineHeight:17.9,lineWidth:598,textAlign:""}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.755,x:275.3,y:239.15}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:278.15,y:157.3208,text:"Look closely! \nThere are big holes in the muddy sand surrounding the mangroves! I wonder what might be living in them…",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:250,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.1,scaleX:0.9562,scaleY:0.6766,x:257.7,y:255.25}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:257.9,y:185.8047,text:"It’s a Fiddler Crab!\n Fiddler Crabs are really interesting animals that have a bunch of cool adaptions!”",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.6627,x:248.35,y:234.3}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:249.35,y:178.6208,text:"Why do male Fiddler Crabs have one very large claw?",font:"25px 'Arial'",color:"#0D3147",lineHeight:29.95,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.speechBubble_1,p:{regX:240.6,regY:242.2,scaleX:0.9562,scaleY:0.6903,x:250.15,y:239.7}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:249.4622,y:177.3208,text:"Yes!\nTo attract female crabs!",font:"27px 'Arial'",color:"#0D3147",lineHeight:32.15,lineWidth:222,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.4,scaleX:1.0003,scaleY:0.845,x:214.2,y:243.3,regY:242.3}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:214.7635,y:149.4208,text:"The Subtidal Zone is the region of water immediately after the lower intertidal zone. This zone is continuously covered by water and therefore it has an exciting selection of marine animals that inhabit it!",font:"19px 'Arial'",color:"#0D3147",lineHeight:23.25,lineWidth:250,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.2,scaleX:0.8567,scaleY:0.6085,x:189.7,y:244.7,regY:242.3}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:185.2,y:207.5208,text:" What spiny subtidal species is this?",font:"25px 'Arial'",color:"#0D3147",lineHeight:29.95,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.8641,scaleY:0.6067,x:235.8,y:232.2,regY:242.2}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:234.65,y:199.7708,text:"Try again",font:"42px 'Arial'",color:"#0D3147",lineHeight:48.9,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.5,scaleX:0.8773,scaleY:0.6534,x:191.55,y:213.3,regY:242.2}},{t:this.text_21,p:{scaleX:0.9468,scaleY:0.9468,x:192,y:161.6927,text:"Yes! It’s a Decorator Urchin ",font:"22px 'Arial'",lineWidth:216,color:"#0D3147",lineHeight:26.55}},{t:this.text_20,p:{scaleX:1,scaleY:1,x:83.4,y:217.55,text:"(Salmacis sphaeroides)",font:"italic 21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:220,textAlign:""}}]},1).to({state:[{t:this.photo65,p:{regX:240.5,scaleX:0.9562,scaleY:0.7102,x:220.6,y:227,regY:242.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:219.55,y:159.8708,text:"Why does this shallow subtidal urchin decorate its spines with rocks and shells?",font:"22px 'Arial'",color:"#0D3147",lineHeight:26.55,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.6547,x:633.85,y:241.6,regY:242.3}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:632.7,y:198.5708,text:"Try again",font:"37px 'Arial'",color:"#0D3147",lineHeight:43.35,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.7,scaleX:0.8936,scaleY:0.6578,x:257.8,y:246.9,regY:242.2}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:256.8,y:187.0208,text:"Yes! \nTo protect itself from sunlight!",font:"26px 'Arial'",color:"#0D3147",lineHeight:31.05,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.6493,x:252.7,y:242.3,regY:242.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:251.55,y:171.2208,text:"Look! \nThere’s an octopus living in the subtidal zone!\n",font:"27px 'Arial'",color:"#0D3147",lineHeight:32.15,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.6819,x:237.15,y:244.65,regY:242.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:236,y:190.8708,text:" What taxonomic group do Octopuses belong to?",font:"26px 'Arial'",color:"#0D3147",lineHeight:31.05,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.8474,scaleY:0.6257,x:267.7,y:237.35,regY:242.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:190.25,y:203.5708,text:"Try again",font:"34px 'Arial'",color:"#0D3147",lineHeight:40,lineWidth:241,textAlign:""}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.7241,x:275.3,y:253.1,regY:242.2}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:275.25,y:205.1708,text:"Yes! Octopuses are a type of Cephalopod!",font:"25px 'Arial'",color:"#0D3147",lineHeight:29.95,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.7633,x:275.3,y:239.9,regY:242.2}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:274.15,y:159.8708,text:"Octopuses have some incredibly weird cool facts about them. Which answer below is NOT true about Octopuses!?",font:"23px 'Arial'",color:"#0D3147",lineHeight:27.65,lineWidth:241,textAlign:"center"}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.6,x:598.95,y:258.15,regY:242.1}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:518.15,y:229.0708,text:"Try Again",font:"35px 'Arial'",color:"#0D3147",lineHeight:41.1,lineWidth:241,textAlign:""}}]},1).to({state:[{t:this.photo65,p:{regX:240.6,scaleX:0.9562,scaleY:0.7303,x:275.3,y:241.55,regY:242.3}},{t:this.text_20,p:{scaleX:0.9468,scaleY:0.9468,x:274.15,y:173.2708,text:"Yes! C is NOT true, which means all the other facts about Octopuses are true!",font:"21px 'Arial'",color:"#0D3147",lineHeight:25.45,lineWidth:241,textAlign:"center"}}]},1).to({state:[]},1).to({state:[{t:this.speechBubble_3,p:{scaleX:0.691,scaleY:0.691,x:536.3,y:257.9}}]},1).to({state:[]},1).to({state:[]},47).wait(74));

	// EFFECT
	this.instance_30 = new lib.rainDrops();
	this.instance_30.setTransform(311.9,296.6,0.7281,0.7281,0,0,0,48,54);
	this.instance_30._off = true;

	this.flower = new lib.flowers();
	this.flower.name = "flower";
	this.flower.setTransform(432.25,321.3,0.8688,0.8688,0,0,0,219.9,80.2);
	this.flower._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(7).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:302.15,y:335.9},0).to({_off:true},1).wait(6).to({_off:false,x:248.85,y:329.4},0).to({_off:true},1).wait(2).to({_off:false,x:156.8,y:389.4},0).to({_off:true},2).wait(13).to({_off:false,x:133.2,y:375.65},0).to({_off:true},4).wait(24).to({_off:false,x:167.2,y:364.3},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.flower).wait(8).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false,x:249.65,y:377.05},0).to({_off:true},1).wait(2).to({_off:false,regX:220.1,scaleX:0.739,scaleY:0.739,x:591.35,y:405.25},0).to({_off:true},1).wait(6).to({_off:false,regX:219.9,scaleX:0.8688,scaleY:0.8688,x:343.7,y:349.35},0).to({_off:true},1).wait(7).to({_off:false,scaleX:0.7821,scaleY:0.7821,x:255.9,y:366.75},0).to({_off:true},1).wait(1).to({_off:false,x:239.05,y:388.1},0).to({_off:true},1).wait(2).to({_off:false,regX:220.1,scaleX:0.6083,scaleY:0.6083,x:231.75,y:407.6},0).to({_off:true},1).wait(14).to({_off:false,scaleX:0.6784,scaleY:0.6784,x:250.1,y:402.55},0).to({_off:true},1).wait(3).to({_off:false,scaleX:0.6424,scaleY:0.6424,x:237.45,y:384.5},0).to({_off:true},1).wait(2).to({_off:false,x:249.05,y:400.8},0).to({_off:true},1).wait(3).to({_off:false,x:201.6,y:400.4},0).to({_off:true},1).wait(3).to({_off:false,x:207.05,y:415.65},0).to({_off:true},1).wait(2).to({_off:false,x:271.05,y:400.6},0).to({_off:true},1).wait(2).to({_off:false,x:252.8,y:420.65},0).wait(1).to({x:265.55,y:409.75},0).to({_off:true},41).wait(82));

	// backBtn
	this.backBtn = new lib.BackBtn();
	this.backBtn.name = "backBtn";
	this.backBtn.setTransform(800.3,548.6,0.8384,0.8384);
	this.backBtn._off = true;
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(7).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false,x:810.45,y:545.35},0).to({_off:true},1).wait(6).to({_off:false,x:802.9,y:548.15},0).to({_off:true},1).wait(12).to({_off:false,regX:0.1,regY:0.1,scaleX:0.6665,scaleY:0.6665,x:820.3,y:554.85},0).to({_off:true},1).wait(14).to({_off:false,x:807.15,y:544.9},0).to({_off:true},1).wait(6).to({_off:false,x:826.95,y:561.6},0).to({_off:true},1).wait(3).to({_off:false,x:829.3,y:560.6},0).to({_off:true},1).wait(2).to({_off:false,x:836.8,y:570.8},0).to({_off:true},1).wait(3).to({_off:false,x:828.3,y:557.3},0).to({_off:true},1).wait(2).to({_off:false,x:828.6,y:564.7},0).to({_off:true},1).wait(124));

	// credits
	this.credit2 = new lib.credit2();
	this.credit2.name = "credit2";
	this.credit2.setTransform(248.55,449.35,0.862,0.862,0,0,0,13.8,29.2);

	this.credit2_2 = new lib.credit2();
	this.credit2_2.name = "credit2_2";
	this.credit2_2.setTransform(768.45,374.1,0.7427,0.7427,0,0,0,13.8,29.2);

	this.credit4 = new lib.credit3();
	this.credit4.name = "credit4";
	this.credit4.setTransform(308.45,530.05,1,1,0,0,0,164.2,39.6);

	this.credit7 = new lib.credit4();
	this.credit7.name = "credit7";
	this.credit7.setTransform(762.4,437.35,0.8678,0.8678,0,0,0,154.2,47);

	this.credit12 = new lib.credit4();
	this.credit12.name = "credit12";
	this.credit12.setTransform(775.9,395.9,0.7467,0.7467,0,0,0,154.2,47.1);

	this.credit14 = new lib.credit5();
	this.credit14.name = "credit14";
	this.credit14.setTransform(776.65,455.2,0.8179,0.8179,0,0,0,162.9,46.4);

	this.credit16 = new lib.credit16();
	this.credit16.name = "credit16";
	this.credit16.setTransform(800.5,447.6,0.8391,0.8391,0,0,0,118.8,39.8);

	this.credit19 = new lib.credit19();
	this.credit19.name = "credit19";
	this.credit19.setTransform(783.95,451.15,1,1,0,0,0,86.8,39.6);

	this.credit20 = new lib.credit19();
	this.credit20.name = "credit20";
	this.credit20.setTransform(802.2,334.05,1,1,0,0,0,89.5,20.1);

	this.credit22 = new lib.creditp11();
	this.credit22.name = "credit22";
	this.credit22.setTransform(214.4,437.8,1,1,0,0,0,123.4,60.8);

	this.credit23 = new lib.creditp11();
	this.credit23.name = "credit23";
	this.credit23.setTransform(753.8,381.85,1,1,0,0,0,123.4,60.8);

	this.credit25 = new lib.credit3();
	this.credit25.name = "credit25";
	this.credit25.setTransform(235.25,522.9,0.9102,0.9102,0,0,0,164.2,39.6);

	this.credit26 = new lib.creditp13();
	this.credit26.name = "credit26";
	this.credit26.setTransform(777.25,446.1,1,1,0,0,0,103.2,42.4);

	this.credit30 = new lib.creditp14();
	this.credit30.name = "credit30";
	this.credit30.setTransform(809.15,457.85,1,1,0,0,0,107.5,35.4);

	this.credit37 = new lib.credit3();
	this.credit37.name = "credit37";
	this.credit37.setTransform(774,494,0.9102,0.9102,0,0,0,164.2,39.6);

	this.credit38 = new lib.creditp17();
	this.credit38.name = "credit38";
	this.credit38.setTransform(721,450.25,1,1,0,0,0,117.8,43);

	this.credit46 = new lib.creditp21();
	this.credit46.name = "credit46";
	this.credit46.setTransform(786.65,324.1,1,1,0,0,0,106.8,36);

	this.credit61 = new lib.creditp25();
	this.credit61.name = "credit61";
	this.credit61.setTransform(780.8,419.75,1,1,0,0,0,111,30.5);

	this.credit66 = new lib.credit_p26();
	this.credit66.name = "credit66";
	this.credit66.setTransform(812.7,412.25,1,1,0,0,0,91.5,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.credit2}]},5).to({state:[{t:this.credit2_2}]},1).to({state:[]},1).to({state:[{t:this.credit4}]},2).to({state:[{t:this.credit7}]},1).to({state:[{t:this.credit12}]},1).to({state:[]},1).to({state:[{t:this.credit14}]},1).to({state:[]},1).to({state:[{t:this.credit16}]},1).to({state:[]},1).to({state:[{t:this.credit19}]},2).to({state:[{t:this.credit20}]},1).to({state:[]},1).to({state:[{t:this.credit22}]},1).to({state:[{t:this.credit23,p:{x:753.8,y:381.85}}]},1).to({state:[{t:this.credit23,p:{x:788.1,y:411.4}}]},1).to({state:[{t:this.credit25}]},1).to({state:[{t:this.credit26,p:{x:777.25,y:446.1}}]},1).to({state:[{t:this.credit26,p:{x:820.15,y:374.6}}]},1).to({state:[]},1).to({state:[{t:this.credit30}]},2).to({state:[]},5).to({state:[{t:this.credit37}]},2).to({state:[{t:this.credit38,p:{x:721,y:450.25}}]},1).to({state:[{t:this.credit38,p:{x:791.85,y:355.45}}]},2).to({state:[]},1).to({state:[{t:this.credit38,p:{x:754.75,y:438.8}}]},1).to({state:[]},1).to({state:[{t:this.credit46,p:{y:324.1}}]},3).to({state:[]},4).to({state:[{t:this.credit46,p:{y:309.3}}]},1).to({state:[]},1).to({state:[{t:this.credit61,p:{x:780.8,y:419.75}}]},9).to({state:[]},2).to({state:[{t:this.credit61,p:{x:745.55,y:437.9}}]},1).to({state:[]},1).to({state:[{t:this.credit66,p:{x:812.7,y:412.25}}]},1).to({state:[]},1).to({state:[{t:this.credit66,p:{x:812.3,y:351.9}}]},2).to({state:[]},1).to({state:[]},55).wait(77));

	// photo1
	this.photo2 = new lib.Symbol3_1();
	this.photo2.name = "photo2";
	this.photo2.setTransform(324.35,263.3,0.9808,0.9808,0,0,0,204.2,157.3);

	this.photo2_2 = new lib.Photo2();
	this.photo2_2.name = "photo2_2";
	this.photo2_2.setTransform(651.25,240.3,0.7051,0.7051,0,0,0,263.8,193.5);

	this.photo4 = new lib.photo3();
	this.photo4.name = "photo4";
	this.photo4.setTransform(333.9,236.95,0.8732,0.8732,0,0,0,264.2,174.3);

	this.photo7 = new lib.photo4();
	this.photo7.name = "photo7";
	this.photo7.setTransform(633.8,243.45,0.8332,0.8332,0,0,0,300.9,169.5);

	this.photo12 = new lib.photo4();
	this.photo12.name = "photo12";
	this.photo12.setTransform(632.9,234.75,0.7936,0.7936,0,0,0,301,169.5);

	this.photo14 = new lib.photo5();
	this.photo14.name = "photo14";
	this.photo14.setTransform(645.3,272.1,0.8317,0.8317,0,0,0,299.3,200.5);

	this.photo16 = new lib.photo16();
	this.photo16.name = "photo16";
	this.photo16.setTransform(684.5,281.1,0.9885,0.9885,0,0,0,313.7,190.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.4)").s().p("AupC2QhkAAAAhkIAAijQAAhkBkAAIdTAAQBkAAAABkIAACjQAABkhkAAg");
	this.shape_3.setTransform(816.425,49.1);

	this.instance_31 = new lib.Photo9min();
	this.instance_31.setTransform(0,0,0.5387,0.5387);

	this.photo19 = new lib.photo19();
	this.photo19.name = "photo19";
	this.photo19.setTransform(659.05,251.8,1,1,0,0,0,211.7,159.7);

	this.photo20 = new lib.photo20();
	this.photo20.name = "photo20";
	this.photo20.setTransform(632.7,217.1,1,1,0,0,0,181.7,137.1);

	this.photo22 = new lib.photo22();
	this.photo22.name = "photo22";
	this.photo22.setTransform(306.8,239.65,1,1,0,0,0,215.8,143.6);

	this.photo23 = new lib.photo22();
	this.photo23.name = "photo23";
	this.photo23.setTransform(660.5,223.95,1,1,0,0,0,215.8,143.6);

	this.photo25 = new lib.photo3();
	this.photo25.name = "photo25";
	this.photo25.setTransform(275.45,240.05,0.8732,0.8732,0,0,0,264.2,174.3);

	this.photo26 = new lib.photo13();
	this.photo26.name = "photo26";
	this.photo26.setTransform(673.85,255.8,1,1,0,0,0,197.2,147.8);

	this.photo30 = new lib.photo14();
	this.photo30.name = "photo30";
	this.photo30.setTransform(659.7,258.75,1,1,0,0,0,163.7,163.7);

	this.photo37 = new lib.photo3();
	this.photo37.name = "photo37";
	this.photo37.setTransform(696.05,230.65,0.7839,0.7839,0,0,0,264.4,174.5);

	this.photo38 = new lib.photo17();
	this.photo38.name = "photo38";
	this.photo38.setTransform(627.9,266.6,1,1,0,0,0,210.9,140.6);

	this.photo43 = new lib.photo18192();
	this.photo43.name = "photo43";
	this.photo43.setTransform(623.5,254,1,1,0,0,0,247.5,139);

	this.photo45 = new lib.photo1819_detail();
	this.photo45.name = "photo45";
	this.photo45.setTransform(639.4,256.2,1,1,0,0,0,263.4,148.2);

	this.photo46_2 = new lib.photo29();
	this.photo46_2.name = "photo46_2";
	this.photo46_2.setTransform(587,460,1,1,0,0,0,178,100);

	this.photo46 = new lib.photo21();
	this.photo46.name = "photo46";
	this.photo46.setTransform(643.95,206.6,1.0316,1.0316,0,0,0,270,124.5);

	this.instance_32 = new lib.photop30();
	this.instance_32.setTransform(636.6,257.7,1,1,0,0,0,257.6,151.7);

	this.instance_33 = new lib.Bitmap2();
	this.instance_33.setTransform(437,345);

	this.instance_34 = new lib.photop31();
	this.instance_34.setTransform(662,268,1,1,0,0,0,205,154);

	this.photo60 = new lib.photo24();
	this.photo60.name = "photo60";
	this.photo60.setTransform(663.7,281.8,1,1,0,0,0,215.7,161.8);

	this.photo61 = new lib.photo25();
	this.photo61.name = "photo61";
	this.photo61.setTransform(651.3,257,1,1,0,0,0,201.3,151);

	this.photo66 = new lib.photo27();
	this.photo66.name = "photo66";
	this.photo66.setTransform(613.9,258.5,1,1,0,0,0,209.9,157.5);

	this.instance_35 = new lib.an_Video({'id': 'instance_35', 'src':'videos/Video%201-2.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_35.setTransform(670.8,265.7,0.9986,1.3315,0,0,0,200.2,150.1);

	this.photo76 = new lib.photo28();
	this.photo76.name = "photo76";
	this.photo76.setTransform(662.1,229.1,1,1,0,0,0,111.1,148.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.photo2}]},5).to({state:[{t:this.photo2_2}]},1).to({state:[]},1).to({state:[{t:this.photo4}]},2).to({state:[{t:this.photo7}]},1).to({state:[{t:this.photo12}]},1).to({state:[]},1).to({state:[{t:this.photo14}]},1).to({state:[]},1).to({state:[{t:this.photo16}]},1).to({state:[{t:this.instance_31},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.photo19}]},1).to({state:[{t:this.photo20}]},1).to({state:[]},1).to({state:[{t:this.photo22}]},1).to({state:[{t:this.photo23,p:{scaleX:1,scaleY:1,x:660.5,y:223.95}}]},1).to({state:[{t:this.photo23,p:{scaleX:0.7639,scaleY:0.7639,x:745.75,y:247.15}}]},1).to({state:[{t:this.photo25}]},1).to({state:[{t:this.photo26}]},1).to({state:[]},2).to({state:[{t:this.photo30}]},2).to({state:[]},5).to({state:[{t:this.photo37}]},2).to({state:[{t:this.photo38,p:{x:627.9,y:266.6}}]},1).to({state:[{t:this.photo38,p:{x:653.35,y:230.8}}]},2).to({state:[]},1).to({state:[{t:this.photo38,p:{x:660.95,y:255.15}}]},1).to({state:[{t:this.photo43}]},1).to({state:[]},1).to({state:[{t:this.photo45}]},1).to({state:[{t:this.photo46},{t:this.photo46_2}]},1).to({state:[{t:this.photo46},{t:this.photo46_2}]},1).to({state:[{t:this.photo46},{t:this.photo46_2}]},1).to({state:[{t:this.photo46},{t:this.photo46_2}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.photo46},{t:this.instance_33}]},1).to({state:[]},1).to({state:[{t:this.instance_34}]},5).to({state:[]},1).to({state:[{t:this.photo60}]},2).to({state:[{t:this.photo61,p:{x:651.3,y:257}}]},1).to({state:[]},2).to({state:[{t:this.photo61,p:{x:648,y:260.25}}]},1).to({state:[]},1).to({state:[{t:this.photo66,p:{regX:209.9,scaleX:1,scaleY:1,x:613.9,y:258.5}}]},1).to({state:[{t:this.photo66,p:{regX:210.1,scaleX:0.889,scaleY:0.889,x:665.55,y:217.55}}]},3).to({state:[]},1).to({state:[{t:this.photo66,p:{regX:209.9,scaleX:1,scaleY:1,x:644.95,y:273.1}}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.photo76,p:{scaleX:1,scaleY:1,x:662.1,y:229.1}}]},4).to({state:[]},1).to({state:[{t:this.photo76,p:{scaleX:1.198,scaleY:1.198,x:669.35,y:298.75}}]},1).to({state:[]},1).to({state:[]},50).wait(73));

	// Layer_3
	this.instance_36 = new lib.border_waterCol();
	this.instance_36.setTransform(-22,-15,0.9079,0.8171);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.247)").s().p("EhF4AtqMAAAhbTMCLxAAAMAAABbTg");
	this.shape_4.setTransform(480.15,319.175);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,102,102,0.4)").s().p("AupC2QhkAAAAhkIAAijQAAhkBkAAIdTAAQBkAAAABkIAACjQAABkhkAAg");
	this.shape_5.setTransform(808.375,48.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.247)").s().p("EhF4AtqMAAAhbTMCLxAAAMAAABKNMg6hAAAIAAAeMA6hAAAIAAQog");
	this.shape_6.setTransform(480.15,319.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.298)").s().p("AupC2QhkAAAAhkIAAijQAAhkBkAAIdTAAQBkAAAABkIAACjQAABkhkAAg");
	this.shape_7.setTransform(812.325,49.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.639)").s().p("EhCJAi2MAAAhFrMCETAAAMAAABFrg");
	this.shape_8.setTransform(480.975,330.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36}]}).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:808.375,y:48.75}}]},1).to({state:[{t:this.shape_4}]},2).to({state:[]},11).to({state:[{t:this.shape_4}]},1).to({state:[]},17).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5,p:{x:808.325,y:48.45}}]},15).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5,p:{x:809.225,y:49.1}}]},8).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},13).to({state:[{t:this.shape_8}]},41).to({state:[]},2).to({state:[]},6).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},11).wait(1).to({_off:false},0).to({_off:true},17).wait(2).to({_off:false},0).to({_off:true},15).wait(3).to({_off:false,x:481.2,y:317.925},0).wait(2).to({x:480.15,y:319.175},0).to({_off:true},8).wait(137));

	// Background
	this.instance_37 = new lib.droneshot__compressed7();
	this.instance_37.setTransform(-83,0,0.8766,0.7654);

	this.instance_38 = new lib.photo_compressed1();
	this.instance_38.setTransform(-83,-5,1.0309,0.9002);

	this.instance_39 = new lib.droneshot__compressed11();
	this.instance_39.setTransform(-36,0,0.8228,0.7503);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E2BF91").s().p("EhQPALkIAA3HMCgfAAAIAAXHg");
	this.shape_9.setTransform(-24.2759,161.8128,0.189,0.189);

	this.instance_40 = new lib.droneshot__compressed3();
	this.instance_40.setTransform(1,-1,0.7561,0.7561);

	this.instance_41 = new lib.droneshot__compressed8();
	this.instance_41.setTransform(0,-22,0.7761,0.7761);

	this.instance_42 = new lib.photo_compressed14();
	this.instance_42.setTransform(-5,-7,0.8987,0.8987);

	this.instance_43 = new lib.droneshot__compressed10();
	this.instance_43.setTransform(0,0,0.7502,0.7502);

	this.instance_44 = new lib.photo_compressed21();
	this.instance_44.setTransform(-6,-8,0.9017,0.9017);

	this.instance_45 = new lib.droneshot__compressed9();
	this.instance_45.setTransform(0,0,0.76,0.76);

	this.instance_46 = new lib.photo32_compressed();
	this.instance_46.setTransform(0,0,0.76,0.76);

	this.instance_47 = new lib.photo_compressed25();
	this.instance_47.setTransform(0,0,0.8967,0.8967);

	this.instance_48 = new lib.droneshot__compressed5();
	this.instance_48.setTransform(0,0,0.76,0.76);

	this.instance_49 = new lib.photo33_cp();
	this.instance_49.setTransform(0,0,0.7503,0.7503);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37,p:{scaleX:0.8766,scaleY:0.7654,x:-83}}]}).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.shape_9},{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},4).to({state:[{t:this.instance_41}]},4).to({state:[]},3).to({state:[{t:this.instance_37,p:{scaleX:0.7569,scaleY:0.7569,x:0}}]},1).to({state:[{t:this.instance_42}]},17).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},15).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},4).to({state:[{t:this.instance_47}]},7).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},13).to({state:[]},41).to({state:[]},8).wait(74));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1039,686.9);
// library properties:
lib.properties = {
	id: 'CF5783475C6FCB4DB1193D8026298DF2',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Photo27min.jpg", id:"Photo27min"},
		{src:"images/Photo28min.jpg", id:"Photo28min"},
		{src:"images/StarFishBayGame_atlas_1.png", id:"StarFishBayGame_atlas_1"},
		{src:"images/StarFishBayGame_atlas_2.png", id:"StarFishBayGame_atlas_2"},
		{src:"images/StarFishBayGame_atlas_3.png", id:"StarFishBayGame_atlas_3"},
		{src:"images/StarFishBayGame_atlas_4.png", id:"StarFishBayGame_atlas_4"},
		{src:"images/StarFishBayGame_atlas_5.png", id:"StarFishBayGame_atlas_5"},
		{src:"images/StarFishBayGame_atlas_6.png", id:"StarFishBayGame_atlas_6"},
		{src:"images/StarFishBayGame_atlas_7.png", id:"StarFishBayGame_atlas_7"},
		{src:"images/StarFishBayGame_atlas_8.png", id:"StarFishBayGame_atlas_8"},
		{src:"images/StarFishBayGame_atlas_9.png", id:"StarFishBayGame_atlas_9"},
		{src:"images/StarFishBayGame_atlas_10.png", id:"StarFishBayGame_atlas_10"},
		{src:"images/StarFishBayGame_atlas_11.png", id:"StarFishBayGame_atlas_11"},
		{src:"images/StarFishBayGame_atlas_12.png", id:"StarFishBayGame_atlas_12"},
		{src:"images/StarFishBayGame_atlas_13.png", id:"StarFishBayGame_atlas_13"},
		{src:"images/StarFishBayGame_atlas_14.png", id:"StarFishBayGame_atlas_14"},
		{src:"images/StarFishBayGame_atlas_15.png", id:"StarFishBayGame_atlas_15"},
		{src:"images/StarFishBayGame_atlas_16.png", id:"StarFishBayGame_atlas_16"},
		{src:"images/StarFishBayGame_atlas_17.png", id:"StarFishBayGame_atlas_17"},
		{src:"images/StarFishBayGame_atlas_18.png", id:"StarFishBayGame_atlas_18"},
		{src:"images/StarFishBayGame_atlas_19.png", id:"StarFishBayGame_atlas_19"},
		{src:"images/StarFishBayGame_atlas_20.png", id:"StarFishBayGame_atlas_20"},
		{src:"images/StarFishBayGame_atlas_21.png", id:"StarFishBayGame_atlas_21"},
		{src:"images/StarFishBayGame_atlas_22.png", id:"StarFishBayGame_atlas_22"},
		{src:"images/StarFishBayGame_atlas_23.png", id:"StarFishBayGame_atlas_23"},
		{src:"images/StarFishBayGame_atlas_24.png", id:"StarFishBayGame_atlas_24"},
		{src:"images/StarFishBayGame_atlas_25.png", id:"StarFishBayGame_atlas_25"},
		{src:"images/StarFishBayGame_atlas_26.png", id:"StarFishBayGame_atlas_26"},
		{src:"images/StarFishBayGame_atlas_27.png", id:"StarFishBayGame_atlas_27"},
		{src:"images/StarFishBayGame_atlas_28.png", id:"StarFishBayGame_atlas_28"},
		{src:"images/StarFishBayGame_atlas_29.png", id:"StarFishBayGame_atlas_29"},
		{src:"images/StarFishBayGame_atlas_30.png", id:"StarFishBayGame_atlas_30"},
		{src:"images/StarFishBayGame_atlas_31.png", id:"StarFishBayGame_atlas_31"},
		{src:"images/StarFishBayGame_atlas_32.png", id:"StarFishBayGame_atlas_32"},
		{src:"images/StarFishBayGame_atlas_33.png", id:"StarFishBayGame_atlas_33"},
		{src:"images/StarFishBayGame_atlas_34.png", id:"StarFishBayGame_atlas_34"},
		{src:"images/StarFishBayGame_atlas_35.png", id:"StarFishBayGame_atlas_35"},
		{src:"images/StarFishBayGame_atlas_36.png", id:"StarFishBayGame_atlas_36"},
		{src:"images/StarFishBayGame_atlas_37.png", id:"StarFishBayGame_atlas_37"},
		{src:"images/StarFishBayGame_atlas_38.png", id:"StarFishBayGame_atlas_38"},
		{src:"images/StarFishBayGame_atlas_39.png", id:"StarFishBayGame_atlas_39"},
		{src:"images/StarFishBayGame_atlas_40.png", id:"StarFishBayGame_atlas_40"},
		{src:"images/StarFishBayGame_atlas_41.png", id:"StarFishBayGame_atlas_41"},
		{src:"images/StarFishBayGame_atlas_42.png", id:"StarFishBayGame_atlas_42"},
		{src:"images/StarFishBayGame_atlas_43.png", id:"StarFishBayGame_atlas_43"},
		{src:"images/StarFishBayGame_atlas_44.png", id:"StarFishBayGame_atlas_44"},
		{src:"images/StarFishBayGame_atlas_45.png", id:"StarFishBayGame_atlas_45"},
		{src:"images/StarFishBayGame_atlas_46.png", id:"StarFishBayGame_atlas_46"},
		{src:"images/StarFishBayGame_atlas_47.png", id:"StarFishBayGame_atlas_47"},
		{src:"images/StarFishBayGame_atlas_48.png", id:"StarFishBayGame_atlas_48"},
		{src:"images/StarFishBayGame_atlas_49.png", id:"StarFishBayGame_atlas_49"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF5783475C6FCB4DB1193D8026298DF2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;