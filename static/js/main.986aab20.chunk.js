(this.webpackJsonplucy=this.webpackJsonplucy||[]).push([[0],{126:function(e,t,a){e.exports=a(430)},130:function(e,t,a){},131:function(e,t,a){e.exports=a.p+"static/media/malaGreen.f4ca7de2.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/malaBlack.b35459d3.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/malaGold.04134435.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/braceletMagnesite.50b27add.jpg"},135:function(e,t,a){e.exports=a.p+"static/media/braceletMixed.74d745ed.jpg"},136:function(e,t,a){e.exports=a.p+"static/media/braceletPeach.8cd14638.jpg"},137:function(e,t,a){e.exports=a.p+"static/media/braceletTurquoise.2518cbc4.jpg"},138:function(e,t,a){e.exports=a.p+"static/media/earringDiamond.9d86ef06.jpg"},139:function(e,t,a){e.exports=a.p+"static/media/earringFeather.8090e9cd.jpg"},140:function(e,t,a){e.exports=a.p+"static/media/earringGoldLeaf.4f036287.jpg"},141:function(e,t,a){e.exports=a.p+"static/media/earringPink.f85eb01e.jpg"},142:function(e,t,a){e.exports=a.p+"static/media/earringTan.5c53e178.jpg"},143:function(e,t,a){e.exports=a.p+"static/media/earringWhite.41389f3a.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/paintingPuffin.c055c514.jpg"},145:function(e,t,a){e.exports=a.p+"static/media/paintingRedBird.74fadae3.jpg"},146:function(e,t,a){e.exports=a.p+"static/media/paintingBlueBird2.2faa11fb.jpg"},152:function(e,t,a){},430:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),c=a.n(i),l=(a(130),a(117)),o=a(118),s=a(125),u=a(124),m=[{url:a(131)},{url:a(132)},{url:a(133)},{url:a(134)},{url:a(135)},{url:a(136)},{url:a(137)},{url:a(138)},{url:a(139)},{url:a(140)},{url:a(141)},{url:a(142)},{url:a(143)},{url:a(144)},{url:a(145)},{url:a(146)}],p=a(66),d=a.n(p);a(147);d.a.initializeApp({apiKey:"AIzaSyC9_ifzps_1DQ-2zArCIMANCwx8JWPuJWU",authDomain:"lucy-2b3db.firebaseapp.com",databaseURL:"https://lucy-2b3db.firebaseio.com",projectId:"lucy-2b3db",storageBucket:"lucy-2b3db.appspot.com",messagingSenderId:"1067313877074",appId:"1:1067313877074:web:cd0841155b5fe30c584f8b"});var f=d.a,h=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logoBox"},r.a.createElement("h1",null,"L")))},g=function(e){return r.a.createElement("div",{className:"individualItem",value:e.type},r.a.createElement("div",null,r.a.createElement("img",{src:e.image,alt:e.title})),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,"Price: ",e.price),r.a.createElement("button",{onClick:e.addToCart},"add to cart"))},E=a(119),v=a.n(E),b=function(e){return r.a.createElement("div",{className:"fakeItem"},r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("div",null,r.a.createElement("h4",null,e.title),r.a.createElement("p",null,"Price: ",e.price)),r.a.createElement("button",{onClick:e.cartRemove},r.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})))},y=(a(152),a(153),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleCart=function(){e.setState({show:!e.state.show})},e.displayImages=function(e){return m[e-1].url},e.handleJewelry=function(){f.database().ref().on("value",(function(t){var a=[];t.val().items.forEach((function(e){"jewelry"==e.type&&a.push(e)})),e.setState({items:a})}))},e.handlePaintings=function(){f.database().ref().on("value",(function(t){var a=[];t.val().items.forEach((function(e){"painting"==e.type&&a.push(e)})),e.setState({items:a})}))},e.handleAll=function(){f.database().ref().on("value",(function(t){var a=[];t.val().items.forEach((function(e){a.push(e)})),e.setState({items:a})}))},e.addToCart=function(e){f.database().ref("Cart").push(e)},e.priceTotal=function(){var t=e.state.cart.map((function(e){return e.price})),a=0;t.length>0&&(a=t.reduce((function(e,t){return e+t}))),e.setState({priceTotal:a})},e.removeFromCart=function(e){f.database().ref("Cart").child(e).remove()},e.state={cart:[],priceTotal:0,show:!1,items:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=[];t.val().items.forEach((function(e){a.push(e)})),e.setState({items:a})})),f.database().ref("Cart").on("value",(function(t){var a=[],n=t.val();for(var r in n)a.push({key:r,id:n[r].id,imageRef:n[r].imageRef,price:n[r].price,name:n[r].name,type:n[r].type});e.setState({cart:a},e.priceTotal)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("div",{className:"blogContainer"},r.a.createElement("div",{className:"gradient"},r.a.createElement("div",{className:"blogLink"},r.a.createElement("a",{href:"https://friends4trees4life.com/"},"Blog")))),r.a.createElement("div",{className:"cartDiv"},r.a.createElement("button",{onClick:function(){return e.handleCart()},className:"cartShowIcon"},r.a.createElement("i",{className:"fa fa-shopping-cart"})),r.a.createElement(v.a,{className:"cart",show:this.state.show},r.a.createElement("h2",null,"Your Cart"),this.state.cart.length>0?r.a.createElement("div",{className:"cartContainer"},this.state.cart.map((function(t){return r.a.createElement(b,{key:t.key,image:e.displayImages(t.id),title:t.name,price:t.price,type:t.type,cartRemove:function(){e.removeFromCart(t.key)}})})),r.a.createElement("div",{className:"priceTotal"},r.a.createElement("h4",null,"Total:"),r.a.createElement("h5",null,"$",this.state.priceTotal))):null))),r.a.createElement(h,null),r.a.createElement("main",{className:"wrapper"},r.a.createElement("h2",null,"View By"),r.a.createElement("ul",{className:"viewOptions"},r.a.createElement("li",null,r.a.createElement("button",{onClick:this.handlePaintings},"Paintings")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.handleAll},"All")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.handleJewelry},"Jewelry"))),r.a.createElement("div",{className:"mainDisplay"},this.state.items.map((function(t){return r.a.createElement("div",{className:"item",key:t.id},r.a.createElement(g,{key:t.key,image:e.displayImages(t.id),title:t.name,price:t.price,type:t.type,addToCart:function(){e.addToCart(t)}}))})))),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("img",{src:"",alt:""}),"\xa9"," Juno College by"," ",r.a.createElement("a",{href:"https://brennamacquarrie.dev"},"Brenna MacQuarrie"))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(429);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);
//# sourceMappingURL=main.986aab20.chunk.js.map