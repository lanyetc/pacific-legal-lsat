(this.webpackJsonppleo=this.webpackJsonppleo||[]).push([[0],{100:function(e,t,n){e.exports=n(190)},105:function(e,t,n){},110:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(24),i=n.n(r),o=(n(105),n(223)),l=n(88),c=n.n(l)()(),u=n(60),d=n.n(u),m=n(89),p=n(22),h=n(6),f=n(8),v=n(18),g=n(19),y=n(12),b=n(20),E=(n(110),n(43)),k=n(224),I=n(214),x=n(215),O=n(222),N=n(93),w=n.n(N);n(65),n(66);function S(e){var t=s.a.useState(!1),n=Object(E.a)(t,2),a=n[0],r=n[1],i=e.rightLinks,o=e.leftLinks,l=e.brand,c=e.toolTitle,u=e.brandName,d=s.a.createElement("div",null,s.a.createElement("img",{className:"navBrand",src:l,alt:"brand icon"}),s.a.createElement("span",{className:"brandTitle"},u),s.a.createElement("span",{className:"navTitle"},c));return s.a.createElement(k.a,{className:"appBar white"},s.a.createElement(I.a,{className:"navContainer"},void 0!==o?{brandComponent:d}:null,s.a.createElement("div",{className:"flex"},void 0!==o?s.a.createElement(O.a,{smDown:!0,implementation:"css"},o):d),s.a.createElement(O.a,{smDown:!0,implementation:"css"},i),s.a.createElement(O.a,{mdUp:!0},s.a.createElement(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!a)}},s.a.createElement(w.a,null)))))}S.defaultProp={color:"white"};var M=n(216),j=n(225),R=n(217);function L(){return s.a.createElement(M.a,{className:"navList"},s.a.createElement(j.a,{className:"navListItem"},s.a.createElement(R.a,{className:"navLink"},"Contact")))}function _(){return s.a.createElement("div",{className:"progress-container"})}var T,C=n(29),D=n.n(C);function Q(e){return s.a.createElement("div",{className:"chat-block bot"},s.a.createElement("div",{className:"chat-avatar"},s.a.createElement("img",{src:D.a,alt:"chatbot avator"})),s.a.createElement("div",{className:"bubble white round"},e.content))}!function(e){e[e.singleSelect=0]="singleSelect",e[e.multiSelect=1]="multiSelect",e[e.autoPlayMessage=2]="autoPlayMessage"}(T||(T={}));var A=function(){function e(t,n,a,s,r,i,o){Object(h.a)(this,e),this.responseMatcher=t,this._id=n,this._content=a,this._options=s,this._triggers=r,this._defaultTrigger=i,this._extraInfo=o}return Object(f.a)(e,[{key:"findTrigger",value:function(e){var t=!0,n=!1,a=void 0;try{for(var s,r=this.triggers[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var i=s.value,o=i.expectedResponses;if(this.responseMatcher.matchOptions(o,e))return i}}catch(l){n=!0,a=l}finally{try{t||null==r.return||r.return()}finally{if(n)throw a}}return this.defaultTrigger}},{key:"id",get:function(){return this._id}},{key:"content",get:function(){return this._content}},{key:"options",get:function(){return this._options}},{key:"extraInfo",get:function(){return this._extraInfo}},{key:"triggers",get:function(){return this._triggers}},{key:"defaultTrigger",get:function(){return this._defaultTrigger}}]),e}(),P=function(){function e(t,n){Object(h.a)(this,e),this._id=t,this._label=n}return Object(f.a)(e,[{key:"id",get:function(){return this._id}},{key:"label",get:function(){return this._label}}]),e}(),F=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"createOptionsFromData",value:function(e){var t=[];return e.forEach((function(e){var n=e.id,a=e.label;t.push(new P(n,a))})),t}}]),e}(),B=function(){function e(t,n){Object(h.a)(this,e),this._messageId=t,this._optionIds=n}return Object(f.a)(e,[{key:"findResponseOption",value:function(e){return this.optionIds.indexOf(e)>=0}},{key:"addResponseItem",value:function(e){}},{key:"messageId",get:function(){return this._messageId}},{key:"optionIds",get:function(){return this._optionIds}}]),e}(),q=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"createResponseItemFromData",value:function(e){var t=e.messageId,n=e.optionIds;return new B(t,n)}}]),e}(),W=function(){function e(t,n,a,s,r,i){Object(h.a)(this,e),this._expectedResponses=t,this._action=n,this._resultReport=a,this._todo=s,this._reminder=r,this._reply=i}return Object(f.a)(e,[{key:"expectedResponses",get:function(){return this._expectedResponses}},{key:"reply",get:function(){return this._reply}},{key:"action",get:function(){return this._action}},{key:"resultReport",get:function(){return this._resultReport}},{key:"todo",get:function(){return this._todo}},{key:"reminder",get:function(){return this._reminder}}]),e}(),U=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"createTriggersFromData",value:function(e){var t=[];return e.forEach((function(e){var n=e.action,a=e.resultReport,s=e.todo,r=e.reminder,i=e.reply,o=q.createResponseItemFromData(e.expectedResponses);t.push(new W(o,n,a,s,r,i))})),t}},{key:"createTriggerFromData",value:function(e){var t=e.action,n=e.resultReport,a=e.todo,s=e.reminder,r=e.reply,i=q.createResponseItemFromData(e.expectedResponses);return new W(i,t,n,a,s,r)}}]),e}(),Y=function(e){function t(e,n,a,s,r,i,o){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e,n,a,s,r,i,o))}return Object(b.a)(t,e),t}(A),J=function(e){function t(e,n,a,s,r,i,o){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e,n,a,s,r,i,o))}return Object(b.a)(t,e),t}(A),H=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,[{key:"matchOptions",value:function(e,t){var n=e.messageId,a=!0,s=!1,r=void 0;try{for(var i,o=e.optionIds[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var l=i.value;if(!t.findMessageResponse(n,l))return!1}}catch(f){s=!0,r=f}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}var c=!0,u=!1,d=void 0;try{for(var m,p=t.getMessageOptions(n)[Symbol.iterator]();!(c=(m=p.next()).done);c=!0){var h=m.value;if(!e.findResponseOption(h))return!1}}catch(f){u=!0,d=f}finally{try{c||null==p.return||p.return()}finally{if(u)throw d}}return!0}}]),e}(),$=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,[{key:"matchOptions",value:function(e,t){var n=e.messageId,a=!0,s=!1,r=void 0;try{for(var i,o=e.optionIds[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var l=i.value;if(t.findMessageResponse(n,l))return!0}}catch(c){s=!0,r=c}finally{try{a||null==o.return||o.return()}finally{if(s)throw r}}return!1}}]),e}(),z=function(e){function t(e,n,a,s,r,i,o){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).call(this,e,n,a,s,r,i,o))}return Object(b.a)(t,e),t}(A),G=function(){function e(){Object(h.a)(this,e)}return Object(f.a)(e,null,[{key:"ok",value:function(){console.log("ok")}},{key:"createMessageFromData",value:function(e){var t=e.id,n=e.type,a=e.content,s=e.extraInfo,r=void 0===s?null:s,i=U.createTriggersFromData(e.triggers),o=U.createTriggerFromData(e.defaultTrigger),l=F.createOptionsFromData(e.options);if(n==T.singleSelect){var c=new $;return new Y(c,t,a,l,i,o,r)}if(n==T.multiSelect){var u=new H;return new J(u,t,a,l,i,o,r)}if(n==T.autoPlayMessage){var d=new $;return new z(d,t,a,l,i,o,r)}throw new Error}}]),e}(),K=function(){function e(){Object(h.a)(this,e),this._responseList=void 0,this._responseMap=void 0,this._responseList=[],this._responseMap={}}return Object(f.a)(e,[{key:"findMessageResponse",value:function(e,t){return!(!this.responseMap[e]||!this.responseMap[e].findResponseOption(t))}},{key:"addResponseItem",value:function(e){this.responseList.push(e),this.responseMap[e.messageId]=e}},{key:"getMessageOptions",value:function(e){if(this.responseMap[e])return this.responseMap[e].optionIds;throw new Error}},{key:"responseList",get:function(){return this._responseList}},{key:"responseMap",get:function(){return this._responseMap}}]),e}();function V(e){var t,n=e.message,a=n.message,r=n.selectedOptionIds,i=n.showExtraInfo,o=a.options,l=a.id,c=a.extraInfo,u=[];function d(){return c?s.a.createElement(j.a,{className:"nav-list-item"},s.a.createElement(R.a,{className:i?"nav-link selected":"nav-link",onClick:function(){return e.handleShowExtraInfo(l)}},c.title)):null}return a instanceof J?(u=o.map((function(t){return s.a.createElement(j.a,{className:"nav-list-item",id:t.id,key:t.id},s.a.createElement(R.a,{className:r.includes(t.id)?"nav-link selected":"nav-link",onClick:function(){return e.handleMultiSelectOptions(l,t.id)}},t.label))})),t=s.a.createElement(M.a,null,u,d(),s.a.createElement(j.a,{className:"nav-list-item"},s.a.createElement(R.a,{className:"nav-link",onClick:function(){return e.handleMultiSelectSubmit(l)}},"SUBMIT")))):(u=o.map((function(t){return s.a.createElement(j.a,{className:"nav-list-item",id:t.id,key:t.id},s.a.createElement(R.a,{className:r.includes(t.id)?"nav-link selected":"nav-link",onClick:function(){return e.handleSelectOptions(l,t.id)}},t.label))})),t=s.a.createElement(M.a,null,u,d()),console.log(t)),s.a.createElement("div",{className:"chat-block user"},s.a.createElement("div",{className:"bubble round"},t))}function X(e){var t=e.displayedMessages.map((function(t,n){var a=t.message,r=t.showExtraInfo,i=(t.selectedOptionIds,t.reply);return a.content?s.a.createElement("div",{key:n},s.a.createElement(Q,{content:a.content}),a.options&&a.options.length>0&&s.a.createElement(V,{message:t,handleShowExtraInfo:e.handleShowExtraInfo,handleSelectOptions:e.handleSelectOptions,handleMultiSelectOptions:e.handleMultiSelectOptions,handleMultiSelectSubmit:e.handleMultiSelectSubmit}),i&&s.a.createElement(Q,{content:i}),r&&s.a.createElement(Q,{content:a.extraInfo.content})):null}));return s.a.createElement("div",{className:"content-container"},s.a.createElement("div",{className:"chat-area",id:"chatbot-scroller"},t))}function Z(e){var t=e.todoList,n=e.reminderList;return s.a.createElement("div",{className:"chat todo-container round grey"},s.a.createElement("div",{className:"chat donow-container round white"},s.a.createElement("div",{className:"donow-titile-box"},s.a.createElement("div",{className:"container"},s.a.createElement("span",null,"DO NOW"))),s.a.createElement("div",{className:"list-container "},s.a.createElement(M.a,null,t.map((function(e,t){return s.a.createElement(j.a,{key:t},s.a.createElement("div",{className:"todo-item-bullet"}),s.a.createElement("span",{className:"item-label"},e))}))))),s.a.createElement("div",{className:"chat dolater-container round white"},s.a.createElement("div",{className:"dolater-titile-box"},s.a.createElement("div",{className:"container"},s.a.createElement("span",null,"DO LATER"))),s.a.createElement("div",{className:"list-container "},s.a.createElement(M.a,null,n.map((function(e,t){return s.a.createElement(j.a,{key:t},s.a.createElement("div",{className:"reminder-item-bullet"}),s.a.createElement("span",{className:"item-label"},e))}))))))}function ee(){return[{name:"Privacy Policy",nodes:te()}]}function te(){return[G.createMessageFromData({id:0,type:T.singleSelect,content:"Question 0: Does your org have a privacy policy?",options:[{id:101,label:"Yes"},{id:100,label:"No"}],triggers:[{expectedResponses:{messageId:0,optionIds:[100]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"this trigger runs when you press no",todo:"todo item 1",reminder:"reminder item 1"}],defaultTrigger:{expectedResponses:{messageId:0,optionIds:[101]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"this is the default trigger. it runs when you click yes",reply:"good job!",todo:"todo item 1",reminder:"reminder item 1"},extraInfo:{title:"What is a privacy policy?",content:"A privacy policy is a document which describes whose personal information we are collecting: why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."}}),G.createMessageFromData({id:1,type:T.multiSelect,content:"Question 1: Does your org have a privacy policy? Selesct all that apply",options:[{id:101,label:"Yes"},{id:100,label:"No"},{id:102,label:"maybe"}],triggers:[{expectedResponses:{messageId:1,optionIds:[100,100]},action:{type:"nextQuestion",nextQuestionId:0},resultReport:"multiselect that goes to q 0",todo:"todo item 1",reminder:"reminder item 1"}],defaultTrigger:{expectedResponses:{messageId:1,optionIds:[101,102]},action:{type:"nextQuestion",nextQuestionId:2},resultReport:"multiselect that goes to q2.",reply:"good job!"}}),G.createMessageFromData({id:2,type:T.singleSelect,content:"Question 2: Does your org have a privacy policy?",options:[{id:101,label:"Yes"},{id:100,label:"No"}],triggers:[{expectedResponses:{messageId:2,optionIds:[100]},action:{type:"nextQuestion",nextQuestionId:1},resultReport:"some result report.",todo:"todo item 1",reminder:"reminder item 1"}],defaultTrigger:{expectedResponses:{messageId:2,optionIds:[101]},action:{type:"nextQuestion",nextQuestionId:0},resultReport:"some result report.",reply:"good job!"},extraInfo:{title:"What is a privacy policy?",content:"A privacy policy is a document which describes whose personal information we are collecting: why we are collecting it, what we use it for, how and when we have to disclose it, and how a person can review what we are doing."}})]}var ne={moduleResults:{},todos:[],reminders:[]},ae=s.a.createContext({context:ne,updateContext:function(e,t){}}),se=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).updateContext=function(e,t){var a=n.state.context;a.moduleResults[e]?(t.todo&&a.moduleResults[e].todos.push(t.todo),t.reminder&&a.moduleResults[e].reminders.push(t.reminder),t.result&&a.moduleResults[e].results.push(t.result),a.moduleResults[e].path.push(t.path)):a.moduleResults[e]={name:t.name,todos:[t.todos],reminders:[t.reminders],results:[t.result],path:[t.path]},t.todo&&a.todos.push(t.todo),t.reminder&&a.reminders.push(t.reminder),n.setState({context:a})},n.state={context:ne,updateContext:n.updateContext},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement(ae.Provider,{value:this.state},this.props.children)}}]),t}(s.a.Component),re=ae.Consumer,ie=n(94),oe=n.n(ie),le=function(e){function t(e){var n;Object(h.a)(this,t),(n=Object(v.a)(this,Object(g.a)(t).call(this,e))).survey=void 0,n.modules=void 0,n.state=void 0,n.survey=te(),n.modules=ee();var a=new K;return n.state={currentMessage:n.survey[0],currentModuleId:0,responsePath:a,displayedMessages:[],todoList:[],reminderList:[]},n.handleSingleSelectResponse=n.handleSingleSelectResponse.bind(Object(y.a)(n)),n.handleMultiSelectSubmit=n.handleMultiSelectSubmit.bind(Object(y.a)(n)),n.handleShowExtraInfo=n.handleShowExtraInfo.bind(Object(y.a)(n)),n.handleMultiSelectClick=n.handleMultiSelectClick.bind(Object(y.a)(n)),n.getNextAction=n.getNextAction.bind(Object(y.a)(n)),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.displayNextMessage({moduleId:0,messageId:0})}},{key:"displayNextMessage",value:function(e){var t=this,n=this.modules[e.moduleId].nodes[e.messageId],a={message:n,selectedOptionIds:[],showExtraInfo:!1};this.setState((function(t,s){return{currentModuleId:e.moduleId,currentMessage:n,displayedMessages:t.displayedMessages.concat(a)}}),(function(){t.scrollToBottom()}));var s=n.defaultTrigger;n instanceof z&&this.displayNextMessage(this.getNextAction(s))}},{key:"updateResponsePath",value:function(e){this.setState((function(e){return{responsePath:e.responsePath}}))}},{key:"updateState",value:function(e,t,n){this.setState((function(a,s){var r=a.displayedMessages.length-1;return r<0&&(r=0),a.displayedMessages[r].reply=e,t&&a.todoList.push(t),n&&a.reminderList.push(n),{messageList:Object(p.a)(a.displayedMessages),todoList:a.todoList,reminderList:a.reminderList}}))}},{key:"handleMultiSelectClick",value:function(e,t){this.isInactiveQuestion(e)||this.markOptionIdSelected(t)}},{key:"markOptionIdSelected",value:function(e){this.setState((function(t){var n=t.displayedMessages.length-1;return n<0&&(n=0),t.displayedMessages[n].selectedOptionIds.includes(e)||t.displayedMessages[n].selectedOptionIds.push(e),{displayedMessages:t.displayedMessages}}))}},{key:"handleMultiSelectSubmit",value:function(e){if(!this.isInactiveQuestion(e)&&!this.isEmptySelection()){var t=this.state.displayedMessages.length-1;this.processSelectedOptions(e,this.state.displayedMessages[t].selectedOptionIds)}}},{key:"isEmptySelection",value:function(){var e=this.state.displayedMessages.length-1;return e<0&&(e=0),this.state.displayedMessages[e].selectedOptionIds.length<=0}},{key:"handleSingleSelectResponse",value:function(e,t){this.isInactiveQuestion(e)||(this.markOptionIdSelected(t),this.processSelectedOptions(e,t))}},{key:"processSelectedOptions",value:function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,s,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new B(this.state.currentMessage.id,n),e.next=3,this.updateResponsePath(a);case 3:return s=this.state.currentMessage.findTrigger(this.state.responsePath),r={path:a,todo:s.todo?s.todo:null,reminder:s.reminder?s.reminder:null,resultReport:s.resultReport},this.context.updateContext(this.state.currentModuleId,r),e.next=8,this.updateState(s.reply,r.todo,r.reminder);case 8:i=this.getNextAction(s.action),this.displayNextMessage(i);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleShowExtraInfo",value:function(e){var t=this;this.isInactiveQuestion(e)||this.setState((function(e,n){var a=t.state.displayedMessages.length-1;a<0&&(a=0);var s=oe()(e.displayedMessages[a]);return e.displayedMessages[a].showExtraInfo=!0,{displayedMessages:[].concat(Object(p.a)(e.displayedMessages),[s])}}))}},{key:"getNextAction",value:function(e){if("exit"==e.type)c.push("/result");else{if("nextQuestion"==e.type)return{moduleId:this.state.currentModuleId,messageId:e.nextQuestionId};if("nextModule"==e.type)return{moduleId:e.nextModuleId,messageId:e.nextQuestionId}}}},{key:"scrollToBottom",value:function(){try{var e=document.getElementById("chatbot-scroller");e.scrollTop=e.scrollHeight}catch(t){console.log("scroll exception")}}},{key:"isCorrectTrigger",value:function(e,t,n){return e.optionId===n&&e.questionId===t}},{key:"isInactiveQuestion",value:function(e){return e!==this.state.currentMessage.id}},{key:"render",value:function(){return s.a.createElement("div",{className:"full-screen-container grey chatbot-page"},s.a.createElement(S,{brand:D.a,brandName:"LSALT 2.0 |",toolTitle:"Non-Profit Self Assessment",fixed:!0,color:"white",rightLinks:s.a.createElement(L,null),absolute:!0}),s.a.createElement("div",{className:"main-container"},s.a.createElement(_,null),s.a.createElement(X,{displayedMessages:this.state.displayedMessages,handleMultiSelectOptions:this.handleMultiSelectClick,handleMultiSelectSubmit:this.handleMultiSelectSubmit,handleShowExtraInfo:this.handleShowExtraInfo,handleSelectOptions:this.handleSingleSelectResponse}),s.a.createElement(Z,{todoList:this.state.todoList,reminderList:this.state.reminderList})))}}]),t}(s.a.Component);le.contextType=ae;var ce=n(218),ue=n(221);n(186);function de(e){var t=e.tabList,n=s.a.useState(0),a=Object(E.a)(n,2),r=a[0],i=a[1];console.log(t);var o=t.map((function(e,t){return!e.title||s.a.createElement(ce.a,{label:e.title,key:t,className:"tab"})}));return s.a.createElement("div",{className:"container"},s.a.createElement(ue.a,{value:r,onChange:function(e,t){i(t)},"aria-label":"simple tabs example",variant:"fullWidth",className:"tab-nav"},o),t.map((function(e,t){return t===r?s.a.createElement("div",{key:t,className:"container"},e.tabContent):null})))}var me=n(219),pe=n(191);function he(e){var t=e.todoList;return s.a.createElement("div",{className:"list-container round"},s.a.createElement(M.a,null,t.map((function(e,t){return s.a.createElement(j.a,{className:"list-item",key:t},s.a.createElement("div",{className:"todo-item-bullet"}),s.a.createElement("span",{className:"item-label"},e.title),s.a.createElement(me.a,null,s.a.createElement("div",{className:"btn-group"},s.a.createElement(R.a,{variant:"outlined"},"more info"))))}))))}function fe(e){var t=e.reminderList;return s.a.createElement("div",{className:"list-container "},s.a.createElement(M.a,null,t.map((function(e,t){return s.a.createElement(j.a,{key:t,className:"list-item"},s.a.createElement("div",{className:"reminder-item-bullet"}),s.a.createElement("span",{className:"item-label"},e.title),s.a.createElement(me.a,null,s.a.createElement("div",{className:"btn-group"},s.a.createElement(R.a,{variant:"outlined"},"more info"))))}))))}function ve(e){var t=e.context;return s.a.createElement("div",{className:"overview-container"},s.a.createElement("div",{className:"result todo-container"},s.a.createElement("div",{className:"title-container"},s.a.createElement(pe.a,{variant:"h4",component:"h4",className:"title bold"},s.a.createElement("span",{className:"title"},"DO NOW")),s.a.createElement(pe.a,{variant:"body2",component:"span"},"Take Care of the task on this list ASAP. This might put you in legal risk")),s.a.createElement(he,{todoList:t.todos})),s.a.createElement("div",{className:"result reminder-container"},s.a.createElement("div",{className:"title-container"},s.a.createElement(pe.a,{variant:"h4",component:"h4",className:"title bold"},s.a.createElement("span",{className:"title"},"Do Later"))),s.a.createElement(fe,{reminderList:t.reminders})))}var ge=n(220);function ye(e){var t=e.resultList,n=e.questionList;return console.log(n),s.a.createElement("div",{className:"repo-container"},t.map((function(e,t){var a;return s.a.createElement("div",{className:"repo-item",key:t},s.a.createElement("div",{className:"question-container"},s.a.createElement(pe.a,{variant:"body2",component:"p",className:"title",gutterBottom:!0},n[e.questionId].content),s.a.createElement(pe.a,{variant:"body2",component:"p"},"because you answered: ",null===(a=n[e.questionId].options.find((function(t){return t.id===e.optionId})))||void 0===a?void 0:a.label),s.a.createElement(pe.a,{variant:"body2",component:"p",className:"link"},s.a.createElement(ge.a,null,"Change my answer"))),s.a.createElement("div",{className:"info-container"},s.a.createElement(pe.a,{variant:"body2",component:"p",className:"title",gutterBottom:!0},e.repo),s.a.createElement(pe.a,{variant:"body2",component:"p",className:"link"},s.a.createElement(ge.a,null,"Learn more"))))})))}function be(e){console.log(e.context);var t=ee(),n=e.context;console.log(n.modules[1]);var a=function(){var e=[];return e.push({title:"OUTCOME",tabContent:s.a.createElement(ve,{context:n})}),n.modules&&Object.keys(n.modules).forEach((function(a){e.push({title:n.modules[a].name,tabContent:s.a.createElement(ye,{questionList:t[a],resultList:n.modules[a].results})})})),e}();return s.a.createElement("div",{className:"result-detail-container"},s.a.createElement(de,{tabList:a}))}n(187);function Ee(){return s.a.createElement("div",{className:"full-screen-container white result-page"},s.a.createElement(S,{brand:D.a,brandName:"LSALT 2.0 | ",toolTitle:"Non-profit Self Assessment",fixed:!0,color:"white",rightLinks:s.a.createElement(L,null),absolute:!0}),s.a.createElement("div",{className:"main-container"},s.a.createElement(re,null,(function(e){var t=e.context;return s.a.createElement(be,{context:t})}))))}n(188);var ke=function(){return s.a.createElement(o.b,{history:c},s.a.createElement(se,null,s.a.createElement(o.c,null,s.a.createElement(o.a,{path:"/assessment",component:le}),s.a.createElement(o.a,{path:"/result",component:Ee}),s.a.createElement(o.a,{path:"/",component:le}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,n){e.exports=n.p+"static/media/botavator.308830c4.svg"},65:function(e,t,n){},66:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.71d84171.chunk.js.map