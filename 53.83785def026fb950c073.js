(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{WyJI:function(e,n,i){"use strict";i.r(n),i.d(n,"IonInfiniteScroll",function(){return l}),i.d(n,"IonInfiniteScrollContent",function(){return s});var t=i("B5Ai"),o=i("cBjU"),r=i("HHlg"),l=function(){function e(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return e.prototype.thresholdChanged=function(e){e.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(e)/100):(this.thrPx=parseFloat(e),this.thrPc=0)},e.prototype.disabledChanged=function(e){this.enableScrollEvents(!e)},e.prototype.componentDidLoad=function(){return t.a(this,void 0,void 0,function(){var e,n,i=this;return t.c(this,function(t){switch(t.label){case 0:return(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,3];case 1:return t.sent(),n=this,[4,e.getScrollElement()];case 2:n.scrollEl=t.sent(),t.label=3;case 3:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write(function(){i.scrollEl&&(i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight)}),[2]}})})},e.prototype.componentDidUnload=function(){this.scrollEl=void 0},e.prototype.onScroll=function(){var e=this.scrollEl;if(!e||!this.canStart())return 1;var n=this.el.offsetHeight;if(0===n)return 2;var i=e.scrollTop,t=e.offsetHeight,o=0!==this.thrPc?t*this.thrPc:this.thrPx;if(("bottom"===this.position?e.scrollHeight-n-i-o-t:i-n-o)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},e.prototype.complete=function(){var e=this,n=this.scrollEl;if(this.isLoading&&n&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var i=n.scrollHeight-n.scrollTop;requestAnimationFrame(function(){e.queue.read(function(){var t=n.scrollHeight-i;requestAnimationFrame(function(){e.queue.write(function(){n.scrollTop=t,e.isBusy=!1})})})})}},e.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},e.prototype.enableScrollEvents=function(e){this.scrollEl&&this.enableListener(this,"scroll",e,this.scrollEl)},e.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(e,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){}return e.prototype.componentDidLoad=function(){void 0===this.loadingSpinner&&(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},e.prototype.hostData=function(){return{class:Object(r.k)(this.mode,"infinite-scroll-content")}},e.prototype.render=function(){return Object(o.b)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(o.b)("div",{class:"infinite-loading-spinner"},Object(o.b)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(o.b)("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(e,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-infinite-scroll-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}()}}]);