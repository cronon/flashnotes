(this.webpackJsonpflashnotes=this.webpackJsonpflashnotes||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),c=a(10),r=a.n(c),i=(a(17),a(4)),o=(a(18),a(12)),d=a(2);function u(e){var t=e.note,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=o.a.Flow,n=document.querySelector("#stave"),s=new e.Renderer(n,e.Renderer.Backends.SVG);s.resize(150,200);var c=s.getContext(),r=new e.Stave(10,40,100);r.addClef("treble"),r.setContext(c).draw();var i=new e.StaveNote({clef:"treble",keys:[t.note+"/"+t.octave],duration:"1"});t.accidental&&i.addAccidental(0,new e.Accidental(t.accidental)),i.x_shift=9;var d=new e.Voice({num_beats:4,beat_value:4}).setMode(e.Voice.Mode.SOFT);d.addTickables([i]);(new e.Formatter).joinVoices([d]).format([d],150);return d.draw(c,r),function(){if(a.current){var e=a.current.querySelector("svg");e&&e.remove()}}}),[t]),Object(d.jsx)("div",{className:"stave",id:"stave",ref:a})}var y=a(9),k=a.n(y),l=a(11),j=a(0),f=a(1),v=a(6),m=a.n(v),b={C:1,"C#":2,Db:2,D:3,"D#":4,Eb:4,E:5,F:6,"F#":7,Gb:7,G:8,"G#":9,Ab:9,A:10,"A#":11,Bb:11,B:12},h=m.a.range(60,84).map((function(e){return{note:e,times:0}}));var O=function(){function e(t,a,n,s,c){Object(j.a)(this,e),this.midi=t,this.str=a,this.accidental=n,this.note=s,this.octave=c}return Object(f.a)(e,[{key:"eq",value:function(e){return this.midi===e.midi}},{key:"toString",value:function(){return this.str}}],[{key:"fromNumber",value:function(t){var a=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][t%12],n=Math.floor(t/12)-1;return new e(t,a+n,a[1]||null,a,n)}},{key:"fromString",value:function(t){var a=3===t.length?t[0]+t[1]:t[0],n=b[a]-1,s=+t[t.length-1];return new e(n+12*(s+1),t,"b"===t[1]||"#"===t[1]?t[1]:null,a,s)}}]),e}(),w=[];function p(e,t){var a=document.querySelector('audio[data-note="'.concat(e.toString(),'"]'));if(!a)throw new Error("Cannot find <audio> for note "+e.toString());t(a)}function x(e){p(e,(function(t){w.find((function(t){return t.eq(e)}))||(w.push(e),t.currentTime=0,t.play())}))}function N(e){(e=e||m.a.last(w))&&p(e,(function(t){t.currentTime=0,t.pause(),m.a.remove(w,(function(t){return t.eq(e)}))}))}function C(e){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(t),e.abrupt("return",new Promise((function(e){setTimeout((function(){N(t),e()}),500)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(23);function g(e){var t={65:"C4",87:"C#4",83:"D4",69:"D#4",68:"E4",70:"F4",84:"F#4",71:"G4",89:"G#4",72:"A4",85:"A#4",74:"B4",75:"C5",79:"C#5",76:"D5",80:"D#5",186:"E5"}[e];if(t)return O.fromString(t);throw new Error("Undefined key pressed "+e)}function E(e){var t=e.onKey;Object(n.useEffect)((function(){function e(e){var t=document.querySelector('.key[data-key="'.concat(e.keyCode,'"]'));t&&(t.classList.add("playing"),x(g(e.keyCode)))}function a(e){var a=document.querySelector('.key[data-key="'.concat(e.keyCode,'"]'));if(a){a.classList.remove("playing");var n=g(e.keyCode);N(n),t(n)}}return window.addEventListener("keydown",e),window.addEventListener("keyup",a),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",a)}}),[t]);var a=Object(n.useCallback)((function(e){var a=e.target,n=a.dataset.note;if(n){var s=O.fromString(n);x(s),a.classList.add("playing"),s,C(s).then((function(){a.classList.remove("playing"),t(s)}))}}),[t]);return Object(d.jsx)("section",{id:"main",children:Object(d.jsxs)("div",{className:"keys",onMouseDown:a,children:[Object(d.jsx)("div",{"data-key":"65",className:"key key-white","data-note":"C4"}),Object(d.jsx)("div",{"data-key":"87",className:"key key-sharp","data-note":"C#4"}),Object(d.jsx)("div",{"data-key":"83",className:"key key-white","data-note":"D4"}),Object(d.jsx)("div",{"data-key":"69",className:"key key-sharp","data-note":"D#4"}),Object(d.jsx)("div",{"data-key":"68",className:"key key-white","data-note":"E4"}),Object(d.jsx)("div",{"data-key":"70",className:"key key-white","data-note":"F4"}),Object(d.jsx)("div",{"data-key":"84",className:"key key-sharp","data-note":"F#4"}),Object(d.jsx)("div",{"data-key":"71",className:"key key-white","data-note":"G4"}),Object(d.jsx)("div",{"data-key":"89",className:"key key-sharp","data-note":"G#4"}),Object(d.jsx)("div",{"data-key":"72",className:"key key-white","data-note":"A4"}),Object(d.jsx)("div",{"data-key":"85",className:"key key-sharp","data-note":"A#4"}),Object(d.jsx)("div",{"data-key":"74",className:"key key-white","data-note":"B4"}),Object(d.jsx)("div",{"data-key":"75",className:"key key-white","data-note":"C5"}),Object(d.jsx)("div",{"data-key":"79",className:"key key-sharp","data-note":"C#5"}),Object(d.jsx)("div",{"data-key":"76",className:"key key-white","data-note":"D5"}),Object(d.jsx)("div",{"data-key":"80",className:"key key-sharp","data-note":"D#5"}),Object(d.jsx)("div",{"data-key":"186",className:"key key-white","data-note":"E5"}),Object(d.jsx)("div",{className:"key key-white","data-note":"F5"}),Object(d.jsx)("div",{className:"key key-sharp","data-note":"F#5"}),Object(d.jsx)("div",{className:"key key-white","data-note":"G5"}),Object(d.jsx)("div",{className:"key key-sharp","data-note":"G#5"}),Object(d.jsx)("div",{className:"key key-white","data-note":"A5"}),Object(d.jsx)("div",{className:"key key-sharp","data-note":"A#5"}),Object(d.jsx)("div",{className:"key key-white","data-note":"B5"})]})})}var A=function(){var e=Object(n.useState)(O.fromString("C4")),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)("?"),r=Object(i.a)(c,2),o=r[0],y=r[1];Object(n.useEffect)((function(){C(a)}),[a]);var k=Object(n.useCallback)((function(e){e.eq(a)&&(y(a.toString()),setTimeout((function(){y("?");var e=function(){var e=h.reduce((function(e,t){return t.times<e?t.times:e}),h[0].times),t=h.filter((function(t){return e+2>t.times})).map((function(e){return e.note})).concat(60),a=m.a.sample(t);return h.find((function(e){return e.note===a})).times+=1,O.fromNumber(a)}();s(e)}),500))}),[a]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{note:a}),Object(d.jsx)("h1",{children:o}),Object(d.jsx)(E,{onKey:k})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fa3a9aa4.chunk.js.map