(this.webpackJsonppassword_generator_v2=this.webpackJsonppassword_generator_v2||[]).push([[0],{16:function(e,t){e.exports=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},21:function(e,t){e.exports=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},22:function(e,t){e.exports=["!","@","#","$","%","^","&","*","=","-","_"]},28:function(e,t){e.exports=[1,2,3,4,5,6,7,8,9,0]},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),s=n.n(a),c=n(9),i=n(16),o=n.n(i),l=n(21),j=n.n(l),u=n(28),b=n.n(u),d=n(22),h=n.n(d),p=n(61),O=n(1);function x(e){var t=e.setPassword,n=e.setShowPass,r=e.options;return Object(O.jsx)(p.a,{onClick:function(e){return function(e){e.preventDefault();var a=[],s=[];if("true"===r.lower)for(var c=0;c<o.a.length;c++)a.push(o.a[c]);if("true"===r.upper)for(var i=0;i<j.a.length;i++)a.push(j.a[i]);if("true"===r.number)for(var l=0;l<b.a.length;l++)a.push(o.a[l]);if("true"===r.special)for(var u=0;u<h.a.length;u++)a.push(h.a[u]);for(var d=0;d<r.length;d++){var p=a[Math.floor(Math.random()*a.length)];s.push(p)}0!==s.length?(console.log(s),t(s.join("")),n(!0)):n(!0)}(e)},size:"lg",variant:"success",children:"Generate Password"})}function f(){return Object(O.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsxs)("a",{className:"navbar-brand",href:"/",children:[Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Eo_circle_pink_letter-p.svg/480px-Eo_circle_pink_letter-p.svg.png",alt:"",width:"30",height:"30",className:"d-inline-block align-text-top"}),"Password Generator"]})})})}var v=n(35),g=n(59),y=n(60);function C(e){var t=e.setOptions,n=Object(r.useState)(0),a=Object(c.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)("false"),l=Object(c.a)(o,2),j=l[0],u=l[1],b=Object(r.useState)("false"),d=Object(c.a)(b,2),h=d[0],x=d[1],f=Object(r.useState)("false"),C=Object(c.a)(f,2),m=C[0],w=C[1],k=Object(r.useState)("false"),S=Object(c.a)(k,2),N=S[0],_=S[1],P=Object(r.useState)(!1),A=Object(c.a)(P,2),D=A[0],Y=A[1],z=function(){return Y(!1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.a,{variant:"info",size:"lg",style:{color:"white"},onClick:function(){return Y(!0)},children:"Password Options"}),Object(O.jsxs)(g.a,{show:D,onHide:z,children:[Object(O.jsx)(g.a.Header,{closeButton:!0,children:Object(O.jsx)(g.a.Title,{children:"Options"})}),Object(O.jsx)(g.a.Body,{children:Object(O.jsxs)(y.a,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Password Length"}),Object(O.jsx)(v.a,{min:5,max:100,step:1,value:s,onChange:i})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Lowercase Letters"}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"Yes",value:"true",onClick:function(e){return u(e.target.value)}}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"No",value:"false",onClick:function(e){return u(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Uppercase Letters"}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"Yes",value:"true",onClick:function(e){return x(e.target.value)}}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"No",value:"false",onClick:function(e){return x(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Numbers"}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"Yes",value:"true",onClick:function(e){return w(e.target.value)}}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"No",value:"false",onClick:function(e){return w(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Special Characters"}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"Yes",value:"true",onClick:function(e){return _(e.target.value)}}),Object(O.jsx)(y.a.Check,{inline:!0,type:"radio",label:"No",value:"false",onClick:function(e){return _(e.target.value)}})]})]})}),Object(O.jsxs)(g.a.Footer,{style:{justifyContent:"center"},children:[Object(O.jsx)(p.a,{variant:"primary",onClick:function(e){return function(e){e.preventDefault(),t({length:s,lower:j,upper:h,number:m,special:N}),console.log(s,j,h,m,N),Y(!1)}(e)},children:"Save Options"}),Object(O.jsx)(p.a,{variant:"secondary",onClick:z,children:"Cancel"})]})]})]})}n(51);var m=n(55),w=n(56),k=n(57),S=n(32),N=n(58),_=n(31);n(52);function P(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("div",{className:"footerContainer",children:Object(O.jsxs)("p",{children:["Copyright \xa9 ",Object(O.jsx)("a",{href:"https://github.com/jmasone15",children:"Jordan Masone"})," ",(new Date).getFullYear(),"."]})})})}var A=function(){var e=Object(r.useState)("Oops! Set your password options before generating."),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(c.a)(s,2),o=i[0],l=i[1],j=Object(r.useState)({text:"Copy",variant:"outline-secondary"}),u=Object(c.a)(j,2),b=u[0],d=u[1],h=Object(r.useState)({length:0,lower:!0,upper:!0,number:!0,special:!0}),v=Object(c.a)(h,2),g=v[0],y=v[1];return Object(O.jsxs)("div",{style:{minHeight:"calc(100vh - 70px)"},children:[Object(O.jsx)(f,{}),Object(O.jsx)(m.a,{children:Object(O.jsx)(w.a,{style:{marginTop:"100px"},children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(k.a,{children:Object(O.jsxs)(S.a,{style:{textAlign:"center"},children:[Object(O.jsx)("h1",{children:"Password Generator"}),Object(O.jsx)("p",{children:"Choose your desired password options and then generate a password!"})]})}),Object(O.jsxs)(k.a,{children:[Object(O.jsx)(S.a,{style:{textAlign:"right"},children:Object(O.jsx)(C,{options:g,setOptions:y})}),Object(O.jsx)(S.a,{style:{textAlign:"left"},children:Object(O.jsx)(x,{setPassword:a,setShowPass:l,options:g,password:n})})]}),Object(O.jsx)(k.a,{style:{justifyContent:"center",marginTop:"20px"},children:!0===o&&Object(O.jsx)(S.a,{sm:"6",style:{textAlign:"center"},children:Object(O.jsxs)(N.a,{size:"lg",children:[Object(O.jsx)(_.a,{"aria-describedby":"inputGroup-sizing-sm",value:n}),"Oops! Set your password options before generating."!==n&&Object(O.jsxs)(N.a.Append,{children:[Object(O.jsx)(p.a,{variant:b.variant,onClick:function(e){return function(e){e.preventDefault(),navigator.clipboard.writeText(n),d({text:"Copied",variant:"outline-success"})}(e)},children:b.text}),Object(O.jsx)(p.a,{variant:"outline-danger",onClick:function(e){return function(e){e.preventDefault(),a("Oops! Set your password options before generating."),l(!1),d({text:"Copy",variant:"secondary"})}(e)},children:"Reset"})]})]})})})]})})}),Object(O.jsx)(m.a,{fixed:"bottom",style:{textAlign:"center"},children:Object(O.jsx)(P,{})})]})};s.a.render(Object(O.jsx)(A,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2dbe4acc.chunk.js.map