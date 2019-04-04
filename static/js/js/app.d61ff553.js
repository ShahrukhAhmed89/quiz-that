(function(t){function e(e){for(var s,o,r=e[0],l=e[1],u=e[2],d=0,p=[];d<r.length;d++)o=r[d],a[o]&&p.push(a[o][0]),a[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0e55":function(t,e,i){},"22d7":function(t,e,i){"use strict";var s=i("0e55"),a=i.n(s);a.a},"42ae":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-view")],1)])},n=[],o=i("2877"),r={},l=Object(o["a"])(r,a,n,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,c=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.quizData?i("div",{staticClass:"quiz-wrapper"},[i("quizForm",{attrs:{title:t.title,description:t.description,quizData:t.quizData,publish:t.publish},on:{inputText:function(e){t.title=e},inputDescription:function(e){t.description=e}}}),i("quizFooter",{attrs:{title:t.title,description:t.description,quizData:t.quizData,publish:t.publish},on:{inputPublish:function(e){t.publish=e}}})],1):t._e()},p=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",{staticClass:"quiz__form"},[i("input",{staticClass:"quiz__title",attrs:{type:"text",name:"title",placeholder:"Add Quiz Title",id:"quiz_title"},domProps:{value:t.title},on:{input:function(e){t.$emit("inputText",e.target.value)}}}),i("span",{staticClass:"aria-title-warning hide",attrs:{id:"title-arai-warn"}},[t._v("⚠ Title is Compulsory")]),i("textarea",{staticClass:"quiz__description",attrs:{maxlength:"500",placeholder:"Add Description...",id:"quiz_description"},domProps:{value:t.description},on:{input:function(e){t.$emit("inputDescription",e.target.value)}}}),t._l(t.quizData,function(e,s){return i("fieldset",{key:s,staticClass:"quiz__set"},[i("header",{staticClass:"set__header"},[t._v("Question\n\t\t\t\t\t\t"),i("span",{staticClass:"set__number"},[i("strong",[t._v(t._s(s+1))])])]),i("div",{staticClass:"set__delete",attrs:{title:"Delete the question"},on:{click:function(e){t.deletePrompt(s)}}}),i("div",{staticClass:"set__question"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question.question"}],attrs:{type:"text",name:"title",placeholder:"Enter Question","data-qid":s},domProps:{value:e.question},on:{input:function(i){i.target.composing||t.$set(e,"question",i.target.value)}}}),i("span",{staticClass:"aria-form-warning hide",attrs:{"data-ariawarn-qid":""+s}},[t._v("⚠ Make sure you add a question.\n\t\t\t\t\t\t")])]),i("div",{staticClass:"set__option",attrs:{"data-osid":s}},t._l(e.options,function(a,n){return i("div",{key:n,staticClass:"option__unit"},[i("div",{staticClass:"option__unit__text"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.options[n].text,expression:"question.options[optionIndex].text"}],staticClass:"text__option",attrs:{type:"text",name:"option",placeholder:"Enter option",maxlength:"100","data-oid":s+"_"+n},domProps:{value:e.options[n].text},on:{input:function(i){i.target.composing||t.$set(e.options[n],"text",i.target.value)}}}),n>1?i("span",{staticClass:"text__option__delete",on:{click:function(e){t.deleteOption(s,n)}}}):t._e(),i("span",{staticClass:"aria-form-warning hide",attrs:{"data-ariawarn-oid":s+"_"+n}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t⚠ Please enter an option.\n\t\t\t\t\t\t\t\t\t\t")]),i("span",{staticClass:"character-count"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.charactersLeft(s,n))+"\n\t\t\t\t\t\t\t\t\t\t")])]),a?i("div",{staticClass:"option__correct-selector"},[i("label",{staticClass:"correct-selector__label"},[t._v("Correct\n\t\t\t\t\t\t\t\t\t\t\t\t"),i("input",{directives:[{name:"model",rawName:"v-model",value:a.isAnswer,expression:"option.isAnswer"}],attrs:{type:"checkbox",name:"radio-correct"},domProps:{value:a.isAnswer,checked:Array.isArray(a.isAnswer)?t._i(a.isAnswer,a.isAnswer)>-1:a.isAnswer},on:{click:function(e){t.correctOptions(s,n)},change:function(e){var i=a.isAnswer,s=e.target,n=!!s.checked;if(Array.isArray(i)){var o=a.isAnswer,r=t._i(i,o);s.checked?r<0&&t.$set(a,"isAnswer",i.concat([o])):r>-1&&t.$set(a,"isAnswer",i.slice(0,r).concat(i.slice(r+1)))}else t.$set(a,"isAnswer",n)}}}),i("span",{staticClass:"correct-selector__button"})])]):t._e()])}),0),e.options.length<4?i("button",{staticClass:"set__add-option",on:{click:function(e){e.preventDefault(),t.addOption(s)}}},[i("span",[t._v(" + ")]),t._v("Add Option\n\t\t\t\t")]):t._e(),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.explanation,expression:"question.explanation"}],staticClass:"set__answer",attrs:{maxlength:"500",name:"explaination",placeholder:"Got an Explaination?"},domProps:{value:e.explanation},on:{keyup:t.textAreaHeight,input:function(i){i.target.composing||t.$set(e,"explanation",i.target.value)}}})])})],2),t.quizData.length<25?i("button",{staticClass:"quiz__add-set",on:{click:function(e){return e.preventDefault(),t.addQuestion(e)}}},[i("span",[t._v(" + ")]),t._v("Add Question\n\t\t")]):t._e(),t.promptShow?i("modal",[i("div",{staticClass:"alert__text",attrs:{slot:"message"},slot:"message"},[t._v("Are you sure you want to delete the question?")]),i("button",{staticClass:"alert__cancel",attrs:{slot:"cancel"},on:{click:function(e){t.promptShow=!1}},slot:"cancel"},[t._v("Cancel")]),i("button",{staticClass:"alert__delete",attrs:{slot:"delete"},on:{click:function(e){t.deleteQuestion(t.questionSelect),t.promptShow=!1}},slot:"delete"},[t._v("Delete")])]):t._e()],1)},v=[],m=i("2909"),f=(i("ac6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"modal"}},[i("div",{staticClass:"alert-wrapper alert-wrapper-show"},[i("div",{staticClass:"alert-message"},[t._t("message"),i("div",{staticClass:"alert__button"},[t._t("cancel"),t._t("delete")],2)],2)])])}),_=[],b={},q=b,g=(i("22d7"),Object(o["a"])(q,f,_,!1,null,null,null));g.options.__file="Modal.vue";var w=g.exports,z={props:["quizData","title","description","publish"],data:function(){return{questionSelect:null,promptShow:!1,titleText:this.title,descriptionText:this.description}},components:{modal:w},methods:{charactersLeft:function(t,e){var i=this.quizData[t].options[e].text;if(void 0===i)return"100 / 100 characters remaining";var s=i.length,a=100,n=100;return n=a-s,"".concat(n," / ").concat(a," characters remaining")},addOption:function(t){var e=this.quizData[t];if(e.options.length<4){var i=[{text:"",isAnswer:!1}];e.options=e.options.concat(i)}},addQuestion:function(){var t=this.quizData.length;if(t<25){var e={question:"",options:[{text:"",isAnswer:!1},{text:"",isAnswer:!1}],explanation:""};this.quizData.push(e)}},deletePrompt:function(t){this.questionSelect=t,this.promptShow=!0},deleteOption:function(t,e){this.quizData[t].options.splice(e,1)},correctOptions:function(t,e){var i=this.quizData[t].options[e];i.isAnswer=!i.isAnswer},deleteQuestion:function(t){this.quizData.splice(t,1)},textAreaHeight:function(t){var e=t.target||t;e.style.overflow="hidden",e.style.height=0,e.style.height=e.scrollHeight+"px"}},mounted:function(){var t=this;Object(m["a"])(document.getElementsByClassName("set__answer")).forEach(function(e){t.textAreaHeight(e)})}},y=z,x=Object(o["a"])(y,h,v,!1,null,null,null);x.options.__file="QuizForm.vue";var C=x.exports,P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-wrapper"},[i("div",{staticClass:"form-errors"},[t.errorMessage?i("div",[i("span",{staticClass:"form-errors__holder"},[t._v("Error: ")]),t._v(t._s(t.errorMessage))]):t._e()]),i("div",{staticClass:"action"},[i("div",{staticClass:"action__item action__delete"},[i("button",{attrs:{id:"delete",title:"Delete quiz"},on:{click:t.deletePostPrompt}},[t._v("Delete")])]),i("div",{staticClass:"action__item action__publish"},[i("label",{staticClass:"publish_quiz",attrs:{for:"publish_quiz",title:"Publish quiz"}},[t._v("publish\n\t\t\t\t\t\t"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shouldPublish,expression:"shouldPublish"}],attrs:{type:"checkbox",id:"publish_quiz",value:"publish"},domProps:{checked:Array.isArray(t.shouldPublish)?t._i(t.shouldPublish,"publish")>-1:t.shouldPublish},on:{input:function(e){t.$emit("inputPublish",e.target.checked)},change:function(e){var i=t.shouldPublish,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n="publish",o=t._i(i,n);s.checked?o<0&&(t.shouldPublish=i.concat([n])):o>-1&&(t.shouldPublish=i.slice(0,o).concat(i.slice(o+1)))}else t.shouldPublish=a}}}),i("span",{staticClass:"checkmark"})])]),i("div",{staticClass:"action__item action__save"},["save"===t.saveStatus?i("button",{attrs:{id:"save"},on:{click:t.submitQuiz}},[t._v("\n\t\t\t\t\t\tSave\n\t\t\t\t")]):t._e(),"saving"===t.saveStatus?i("button",{attrs:{id:"save",disabled:""},on:{click:t.submitQuiz}},[t._v("\n\t\t\t\t\tSaving "),i("span",{staticClass:"spinner"})]):t._e(),"saved"===t.saveStatus?i("button",{attrs:{id:"save",disabled:""},on:{click:t.submitQuiz}},[t._v("\n\t\t\t\t\t\tSaved\n\t\t\t\t")]):t._e()])]),t.deleteModal?i("modal",[i("div",{staticClass:"alert__text",attrs:{slot:"message"},slot:"message"},[t._v("Are you sure you want to delete this quiz?")]),i("button",{staticClass:"alert__cancel",attrs:{slot:"cancel"},on:{click:function(e){t.deleteModal=!1}},slot:"cancel"},[t._v("Cancel")]),i("button",{staticClass:"alert__delete",attrs:{slot:"delete"},on:{click:function(e){t.deletePost(t.postId),t.deleteModal=!1}},slot:"delete"},[t._v("Delete")])]):t._e()],1)},S=[],D=(i("28a5"),i("6762"),{props:["quizData","title","description","postId","publish"],data:function(){return{dataChange:!0,saveStatus:"save",hasSaved:!1,errorMessage:"",deleteModal:!1,shouldPublish:this.publish}},components:{modal:w},methods:{validateForm:function(){var t=this.quizData,e=!1;for(var i in this.errorMessage="",document.querySelectorAll(".warning-border").forEach(function(t){return t.classList.remove("warning-border")}),document.querySelectorAll(".set__option--warning").forEach(function(t){return t.classList.remove("set__option--warning")}),document.querySelectorAll(".aria-form-warning").forEach(function(t){return t.classList.add("hide")}),document.getElementById("title-arai-warn").classList.add("hide"),this.title||(document.getElementById("quiz_title").classList.add("warning-border"),document.getElementById("title-arai-warn").classList.remove("hide")),t){t[i].question.trim()||(e=!0,this.errorMessage="Make sure you correct the form errors.",document.querySelector("[data-qid='".concat(i,"']")).classList.add("warning-border"),document.querySelector("[data-ariawarn-qid='".concat(i,"']")).classList.remove("hide"));var s=t[i].options,a=[];for(var n in s)s[n].text.trim()||(e=!0,this.errorMessage="Make sure you correct the form errors.",document.querySelector("[data-oid='".concat(i,"_").concat(n,"']")).classList.add("warning-border"),document.querySelector("[data-ariawarn-oid='".concat(i,"_").concat(n,"']")).classList.remove("hide")),a.push(s[n].isAnswer);a.includes(!0)||(e=!0,this.errorMessage="Make sure you correct the form errors.",document.querySelector("[data-osid='".concat(i,"']")).classList.add("set__option--warning"))}return e&&(this.saveStatus="save"),e},submitQuiz:function(t){var e=this,i=!1;if(e.saveStatus="saving",e.hasSaved=!0,i=this.validateForm(),!i){var s,a=e.postId;s=a?"http://localhost:8000/quiz/save/".concat(a):"http://localhost:8000/quiz/submit",fetch(s,{method:"post",credentials:"same-origin",headers:{"X-CSRFToken":this.getcsrf("csrftoken"),"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:JSON.stringify({quizData:e.quizData,title:e.title,description:e.description,publish:e.publish})}).then(function(t){return t.json()}).then(function(t){"true"===t.redirect&&e.$router.push({name:"quizEdit",params:{id:t.id,dataFromProps:{quizData:e.quizData,title:e.title,description:e.description,postId:t.id,publish:e.publish}}}),e.saveStatus="saved"}).catch(function(t){e.errorMessage="Error while saving the form. Please try again",e.saveStatus="save"})}},deletePostPrompt:function(){this.deleteModal=!0},deletePost:function(t){var e=this;t?fetch("http://localhost:8000/quiz/delete/".concat(t),{method:"post",credentials:"same-origin",headers:{"X-CSRFToken":this.getcsrf("csrftoken"),"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:{}}).then(function(t){return t.json()}).then(function(t){window.location.href="http://localhost:8000/quiz/"}).catch(e.errorMessage="Error while saving the form. Please try again"):window.location.href="http://localhost:8000/quiz/"},getcsrf:function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var i=document.cookie.split(";"),s=0;s<i.length;s++){var a=i[s].trim();if(a.substring(0,t.length+1)===t+"="){e=decodeURIComponent(a.substring(t.length+1));break}}return e}},watch:{quizData:{handler:function(t,e){this.saveStatus="save",this.hasSaved&&this.validateForm()},deep:!0},title:{handler:function(){this.saveStatus="save",this.hasSaved&&this.validateForm()}},description:{handler:function(){this.saveStatus="save",this.hasSaved&&this.validateForm()}},publish:{handler:function(){this.saveStatus="save",this.hasSaved&&this.validateForm()}}}}),k=D,A=Object(o["a"])(k,P,S,!1,null,null,null);A.options.__file="QuizFooter.vue";var F=A.exports,M={data:function(){return{quizData:[{question:"",options:[{text:"",isAnswer:!1},{text:"",isAnswer:!1}],explanation:""}],title:"",description:"",publish:!1}},components:{quizForm:C,quizFooter:F}},E=M,O=Object(o["a"])(E,d,p,!1,null,null,null);O.options.__file="QuizCreate.vue";var j=O.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.quizData?i("div",{staticClass:"quiz-wrapper"},[i("quizForm",{attrs:{title:t.title,description:t.description,quizData:t.quizData,publish:t.publish},on:{inputText:function(e){t.title=e},inputDescription:function(e){t.description=e}}}),i("quizFooter",{attrs:{title:t.title,description:t.description,quizData:t.quizData,postId:t.postId,publish:t.publish},on:{inputPublish:function(e){t.publish=e}}})],1):t._e()},I=[],Q={props:["dataFromProps"],data:function(){return{quizData:null,title:null,description:null,publish:null,postId:document.getElementById("datahub").dataset.quizid||null}},components:{quizForm:C,quizFooter:F},mounted:function(){if(this.dataFromProps)this.quizData=this.dataFromProps.quizData,this.title=this.dataFromProps.title,this.description=this.dataFromProps.description,this.publish=this.dataFromProps.publish,this.postId=this.dataFromProps.postId;else{var t=this;fetch("http://localhost:8000/quiz/fetch/".concat(t.postId)).then(function(t){return t.json()}).then(function(e){t.quizData=e.quizData,t.title=e.title,t.description=e.description,t.publish=e.publish})}}},T=Q,L=(i("aab0"),Object(o["a"])(T,$,I,!1,null,null,null));L.options.__file="QuizEdit.vue";var N=L.exports;s["a"].use(c["a"]);var R=new c["a"]({mode:"history",base:"/",routes:[{path:"/quiz/create",name:"quizCreate",component:j,props:!0},{path:"/quiz/edit/:id",name:"quizEdit",component:N,props:!0}]}),H=i("2f62");s["a"].use(H["a"]);var X=new H["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:R,store:X,render:function(t){return t(u)}}).$mount("#app")},aab0:function(t,e,i){"use strict";var s=i("42ae"),a=i.n(s);a.a}});
//# sourceMappingURL=app.d61ff553.js.map