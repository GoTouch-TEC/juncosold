(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3YMO":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),a=u("c6VM"),b=function(){function n(n,l){this.firestoreService=n,this.route=l,this.id=this.route.snapshot.paramMap.get("id")}return n.prototype.ngOnInit=function(){var n=this;this.firestoreService.getEvent(this.id).subscribe(function(l){n.event={id:l.payload.id,data:l.payload.data()}})},n}(),i=function(){},o=u("pMnS"),e=u("ra/t"),r=u("ntG5"),c=u("Ip0R"),p=u("ZYCi"),s=t.pb({encapsulation:0,styles:[[""]],data:{}});function d(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,6,"ion-header",[],null,null,null,e.x,e.g)),t.qb(1,49152,null,0,r.y,[t.l],null,null),(n()(),t.rb(2,0,null,0,4,"ion-toolbar",[],null,null,null,e.H,e.p)),t.qb(3,49152,null,0,r.xb,[t.l],null,null),(n()(),t.rb(4,0,null,0,2,"ion-title",[],null,null,null,e.G,e.q)),t.qb(5,49152,null,0,r.yb,[t.l],null,null),(n()(),t.Eb(-1,0,["single-match"])),(n()(),t.rb(7,0,null,null,3,"ion-content",[["padding",""]],null,null,null,e.w,e.f)),t.qb(8,49152,null,0,r.r,[t.l],null,null),(n()(),t.Eb(9,0,[" ","\n"])),t.Cb(0,c.e,[])],null,function(n,l){var u=l.component;n(l,9,0,t.Fb(l,9,0,t.Bb(l,10).transform(u.event)))})}var f=t.nb("app-single-match",b,function(n){return t.Gb(0,[(n()(),t.rb(0,0,null,null,1,"app-single-match",[],null,null,null,d,s)),t.qb(1,114688,null,0,b,[a.a,p.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),h=u("gIcY"),z=u("95zI"),g=u("9opb"),v=u("apKv"),m=u("B4/3");u.d(l,"SingleMatchPageModuleNgFactory",function(){return w});var w=t.ob(i,[],function(n){return t.yb([t.zb(512,t.k,t.db,[[8,[o.a,f]],[3,t.k],t.z]),t.zb(4608,c.k,c.j,[t.w,[2,c.r]]),t.zb(4608,h.c,h.c,[]),t.zb(4608,z.a,z.a,[t.B,t.g]),t.zb(4608,g.a,g.a,[z.a,t.k,t.s]),t.zb(4608,v.a,v.a,[z.a,t.k,t.s]),t.zb(1073742336,c.b,c.b,[]),t.zb(1073742336,h.b,h.b,[]),t.zb(1073742336,h.a,h.a,[]),t.zb(1073742336,m.a,m.a,[]),t.zb(1073742336,p.m,p.m,[[2,p.s],[2,p.l]]),t.zb(1073742336,i,i,[]),t.zb(1024,p.j,function(){return[[{path:"",component:b},{path:":id",component:b}]]},[])])})}}]);