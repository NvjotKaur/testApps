(function(g){var window=this;var cCa=function(a,b,c,d){var e=b.Yb();g.U(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.fd(c,d?d:"mqdefault.jpg");var k=b instanceof g.xO&&b.lengthSeconds?g.bV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.yQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.xO?b.Ka:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.Ml||g.$G("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,
url:b.Am(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.AQ&&(c.playlist_length=b.getLength());a.update(c)},y5=function(a,b){g.zH.call(this,{I:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.B=a;this.created=!1},z5=function(a){g.V.call(this,{I:"div",
M:"ytp-upnext",U:{"aria-label":"{{aria_label}}"},P:[{I:"div",M:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-upnext-top",P:[{I:"span",M:"ytp-upnext-header",da:"Up Next"},{I:"span",M:"ytp-upnext-title",da:"{{title}}"},{I:"span",M:"ytp-upnext-author",da:"{{author}}"}]},{I:"a",M:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},P:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},P:[{I:"circle",M:"ytp-svg-autoplay-circle",
U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",M:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",M:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",M:"ytp-upnext-bottom",P:[{I:"span",M:"ytp-upnext-cancel"},{I:"span",M:"ytp-upnext-paused",da:"Autoplay is paused"}]}]});this.D=null;
var b=this.o["ytp-upnext-cancel"];this.D=new g.V({I:"button",ea:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},da:"Cancel"});g.N(this,this.D);this.D.W("click",this.iS,this);this.D.wa(b);this.B=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.F=null;this.J=new g.ku(this.Ko,5E3,this);g.N(this,this.J);this.K=0;this.R(this.o["ytp-upnext-autoplay-icon"],"click",this.tU);this.KD();this.R(a,"autonavvisibility",this.KD);this.R(a,"mdxnowautoplaying",
this.HT);this.R(a,"mdxautoplaycanceled",this.IT);this.R(a,"mdxautoplayupnext",this.vG);3==this.B.Sa()&&(a=(a=g.bU(g.VT(this.B)))?a.kL():null)&&this.vG(a)},dCa=function(a,b){a.F=b;
cCa(a,b,g.X(a.B),"hqdefault.jpg")},A5=function(a,b){if(!a.C){g.YF("a11y-announce","Up Next "+a.F.title);
a.K=g.iG();a.C=new g.ku((0,g.B)(a.us,a,b),25);a.us(b);var c=b||g.X(a.B).experiments.A("autoplay_time")||1E4;a.B.ya("onAutonavCoundownStarted",c)}g.yq(a.element,"ytp-upnext-autoplay-paused")},C5=function(a){B5(a);
a.K=g.iG();a.us();g.T(a.element,"ytp-upnext-autoplay-paused")},B5=function(a){a.C&&(a.C.dispose(),a.C=null)},D5=function(a,b){b=void 0===b?!1:b;
var c=g.X(a.B);if(c.experiments.o("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.F.Yb(),a.Ko(),a.G=new window.Notification("Up Next",{body:d.title,icon:d.fd(c)}),a.H=a.R(a.G,"click",a.jU),a.J.start())}B5(a);a.B.Uk(!1,b)},eCa=function(a){y5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.C=new g.V({I:"div",M:"ytp-subscribe-card",P:[{I:"img",M:"ytp-author-image",U:{src:b.profilePicture}},{I:"div",M:"ytp-subscribe-card-right",P:[{I:"div",M:"ytp-author-name",da:b.author},{I:"div",M:"html5-subscribe-button-container"}]}]});g.N(this,this.C);this.C.wa(this.element);this.D=new g.LZ("Subscribe",null,"Unsubscribe",null,!0,!1,b.Rn,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.D);this.D.wa(this.C.o["html5-subscribe-button-container"]);this.hide()},E5=
function(a){var b=g.X(a),c=g.lI||g.pf?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.V.call(this,{I:"a",ea:e,U:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{I:"div",M:"ytp-videowall-still-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-videowall-still-info",P:[{I:"span",M:"ytp-videowall-still-info-bg",P:[{I:"span",M:"ytp-videowall-still-info-content",U:c,P:[{I:"span",M:"ytp-videowall-still-info-title",da:"{{title}}"},{I:"span",
M:"ytp-videowall-still-info-author",da:"{{author_and_views}}"},{I:"span",M:"ytp-videowall-still-info-live",da:"Live"},{I:"span",M:"ytp-videowall-still-info-duration",da:"{{duration}}"}]}]}]},{I:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{I:"span",M:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",M:"ytp-videowall-still-listlabel-length",P:[" (",{I:"span",da:"{{playlist_length}}"},")"]}]},{I:"span",ea:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
P:[{I:"span",M:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",M:"ytp-videowall-still-listlabel-length",da:" (50+)"}]}]});this.F=d;this.B=a;this.C=null;this.D=new g.GF(this);g.N(this,this.D);this.W("click",this.H);this.W("keypress",this.J);this.D.R(a,"videodatachange",this.G);g.X(a).Y&&(a=a.app.ma,b=this.element,g.Na(a.o,b),g.Qa(a.o,b),c=String(a.H++),b.setAttribute("data-visual-id",c),g.kf(this,(0,g.B)(a.F,a,b)));this.G()},F5=function(a){y5.call(this,a,"videowall-endscreen");
this.L=a;this.H=0;this.D=[];this.J=this.G=this.F=null;this.K=this.Y=!1;this.Z=new g.GF(this);g.N(this,this.Z);this.N=new g.ku(g.Da(g.T,this.element,"ytp-show-tiles"),0);g.N(this,this.N);var b=new g.V({I:"button",ea:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},P:[g.XU()]});g.N(this,b);b.wa(this.element);b.W("click",this.hQ,this);this.O=new g.tH({I:"div",M:"ytp-endscreen-content"});g.N(this,this.O);this.O.wa(this.element);b=new g.V({I:"button",ea:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Next"},P:[g.YU()]});g.N(this,b);b.wa(this.element);b.W("click",this.gQ,this);this.C=new z5(a);g.N(this,this.C);g.uU(this.B,this.C.element,4);this.hide()},G5=function(a){return g.wU(a.B)&&a.Zy()&&!a.J},fCa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.GX(g.X(a.L),b);
g.N(a,b);return b})},H5=function(a){var b=a.vv();
b!=a.Y&&(a.Y=b,a.B.V("autonavvisibility"))},I5=function(a){g.EU.call(this,a);
this.A=null;this.B=new g.GF(this);g.N(this,this.B);this.C=g.X(a);gCa(a)?this.A=new F5(this.o):this.C.Ha?this.A=new eCa(this.o):this.A=new y5(this.o);g.N(this,this.A);g.uU(this.o,this.A.element,4);this.gF();this.B.R(a,"videodatachange",this.gF,this);this.B.R(a,"crn_endscreen",this.fO,this);this.B.R(a,"crx_endscreen",this.gO,this)},gCa=function(a){a=g.X(a);
return a.pd&&!a.Ha};
g.r(y5,g.zH);y5.prototype.create=function(){this.created=!0};
y5.prototype.destroy=function(){this.created=!1};
y5.prototype.Zy=function(){return!1};
y5.prototype.vv=function(){return!1};g.r(z5,g.V);g.h=z5.prototype;g.h.Ko=function(){this.G&&(this.J.stop(),this.Ga(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.KD=function(){g.yH(this,g.WT(this.B))};
g.h.jU=function(){window.focus();this.Ko()};
g.h.hide=function(){g.V.prototype.hide.call(this)};
g.h.us=function(a){a=a||g.X(this.B).experiments.A("autoplay_time")||1E4;var b=Math.min(g.iG()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.B.Sa()?D5(this,!0):this.C&&this.C.start()};
g.h.tU=function(a){!g.Zd(this.D.element,g.uF(a))&&g.HW(a,this.B)&&D5(this)};
g.h.iS=function(){g.ZT(this.B,!0)};
g.h.HT=function(a){this.B.Sa();this.show();A5(this,a)};
g.h.vG=function(a){this.B.Sa();this.F&&this.F.Yb().videoId==a.Yb().videoId||dCa(this,a)};
g.h.IT=function(){this.B.Sa();B5(this);this.hide()};
g.h.X=function(){B5(this);this.Ko();g.V.prototype.X.call(this)};g.r(eCa,y5);g.r(E5,g.V);E5.prototype.ql=function(){g.zU(this.B,this.element);var a=this.C.Yb().videoId,b=this.C.getPlaylistId();g.a0(this.B.app,a,this.C.Xd,b,void 0,void 0,void 0)};
E5.prototype.H=function(a){g.HW(a,this.B,this.F,this.C.Xd||void 0)&&this.ql()};
E5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.zF(a)||(this.ql(),g.yF(a))}};
E5.prototype.G=function(){var a=this.B.getVideoData(),b=g.X(this.B);this.F=a.isDni?!1:b.o};g.r(F5,y5);g.h=F5.prototype;g.h.create=function(){y5.prototype.create.call(this);var a=this.B.getVideoData();a&&(this.F=fCa(this,a),this.G=a);this.hh();this.Z.R(this.B,"appresize",this.hh);this.Z.R(this.B,"onVideoAreaChange",this.hh);this.Z.R(this.B,"videodatachange",this.iQ);this.Z.R(this.B,"autonavchange",this.GC);this.Z.R(this.B,"autonavcancel",this.fQ);this.Z.R(this.element,"transitionend",this.LV)};
g.h.destroy=function(){g.IF(this.Z);g.mf(this.D);this.D=[];this.F=null;y5.prototype.destroy.call(this);g.yq(this.element,"ytp-show-tiles");this.N.stop()};
g.h.Zy=function(){return 1!=this.G.autonavState};
g.h.show=function(){y5.prototype.show.call(this);g.yq(this.element,"ytp-show-tiles");g.X(this.B).B?g.mu(this.N):this.N.start();(this.K||this.J&&this.J!=this.G.clientPlaybackNonce)&&g.ZT(this.B,!1);G5(this)?(H5(this),2==this.G.autonavState?g.X(this.B).experiments.o("fast_autonav_in_background")&&3==this.B.tj()?D5(this.C,!0):A5(this.C):3==this.G.autonavState&&C5(this.C)):(g.ZT(this.B,!0),H5(this))};
g.h.hide=function(){y5.prototype.hide.call(this);C5(this.C);H5(this)};
g.h.LV=function(a){g.uF(a)==this.element&&this.hh()};
g.h.hh=function(){if(this.F&&this.F.length){g.T(this.element,"ytp-endscreen-paginate");var a=g.lU(this.L,!0),b=g.NH(this.L);b&&(b=b.jd()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.F.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,w=b<=f-2&&n>=t*m,A=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&A)n-=q*m,e+=2;else if(w)n-=t*m,b+=2;else if(A)n-=q*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.ld(a.width/m||1,1,1.21);n*=g.ld(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.Ph(a,m,n);g.wh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});dCa(this.C,this.F[0]);g.U(this.element,"ytp-endscreen-takeover",G5(this));H5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&
2>f?0==k&&0==f&&(t=2):t=2),q=g.md(q+this.H,l),0!=t){w=this.D[c];w||(w=new E5(this.B),this.D[c]=w,a.appendChild(w.element));A=Math.floor(n*k/e);var E=Math.floor(m*f/b),J=Math.floor(n*(k+t)/e)-A-4,Q=Math.floor(m*(f+t)/b)-E-4;g.Dh(w.element,E,A);g.Ph(w.element,Q,J);g.wh(w.element,"transitionDelay",(k+f)/20+"s");g.U(w.element,"ytp-videowall-still-mini",1==t);g.U(w.element,"ytp-videowall-still-large",2<t);t=w;q=this.F[q];t.C!=q&&(t.C=q,cCa(t,q,g.X(t.B),g.wq(t.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),w=(q=q.Xd)&&q.itct)&&(q=t.B,g.X(q).Y&&(q=q.app.ma,t=t.element,A=t.getAttribute("data-visual-id"),g.Na(q.o,t),g.xU(q,"onLogServerVeCreated",{id:A,tracking_params:w})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.D.length-1;b>=c;b--)e=this.D[b],g.Td(e.element),g.lf(e);this.D.length=c}};
g.h.iQ=function(){var a=this.B.getVideoData();this.G!=a&&(this.H=0,this.F=fCa(this,a),this.G=a,this.hh())};
g.h.gQ=function(){this.H+=this.D.length;this.hh()};
g.h.hQ=function(){this.H-=this.D.length;this.hh()};
g.h.nN=function(){return!!this.C.C};
g.h.GC=function(a){1==a?(this.K=!1,this.J=this.G.clientPlaybackNonce,B5(this.C),this.A&&this.hh()):(this.K=!0,this.A&&G5(this)&&(2==a?A5(this.C):3==a&&C5(this.C)))};
g.h.fQ=function(a){if(a){for(a=0;a<this.D.length;a++)g.AU(this.L,this.D[a].element,!0);this.GC(1)}else this.J=null,this.K=!1;this.hh()};
g.h.vv=function(){return this.A&&G5(this)};g.r(I5,g.EU);g.h=I5.prototype;g.h.hC=function(){var a=this.o.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!gCa(this.o)||b;a=g.ZO(a,"ypc_module");var c=g.E_(this.o.app);return b&&!a&&!c};
g.h.gC=function(){return this.A.vv()};
g.h.jN=function(){return this.gC()?this.A.nN():!1};
g.h.X=function(){g.sU(this.o,"endscreen");g.EU.prototype.X.call(this)};
g.h.load=function(){g.EU.prototype.load.call(this);this.A.show()};
g.h.unload=function(){g.EU.prototype.unload.call(this);this.A.hide();this.A.destroy()};
g.h.fO=function(a){this.hC()&&(this.A.created||this.A.create(),"load"==a.getId()&&this.load())};
g.h.gO=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.gF=function(){g.sU(this.o,"endscreen");var a=Math.max(1E3*(this.o.getVideoData().lengthSeconds-10),0);a=new g.vQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.vQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.oU(this.o,[a,b])};g.AX.endscreen=I5;})(_yt_player);