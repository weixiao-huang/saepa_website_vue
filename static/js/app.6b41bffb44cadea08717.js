webpackJsonp([1,0],[function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var a=i(3),n=s(a),r=i(4),c=s(r),o=i(56),l=s(o);new n.default({router:c.default,render:function(t){return t(l.default)}}).$mount("#app")},function(t,e,i){t.exports=i.p+"static/img/logo.9effeed.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.677516d.jpg"},,function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(3),n=s(a),r=i(80),c=s(r),o=i(60),l=s(o),d=i(58),u=s(d),p=i(64),f=s(p),v=i(62),h=s(v);n.default.use(c.default);var m=function(t,e,i){if(i)return i;var s={};return t.hash&&(s.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(s.x=0,s.y=0),s};e.default=new c.default({mode:"history",scrollBehavior:m,hashbang:!1,routes:[{path:"/home",component:l.default},{path:"/contact",component:u.default},{path:"/projects",component:f.default},{path:"/mooc",component:h.default},{path:"/:id?",redirect:"/home"}]})},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(63),n=s(a),r=i(59),c=s(r),o=i(65),l=s(o);e.default={name:"app",components:{Navbar:n.default,Footers:c.default,StretchyNav:l.default},data:function(){return{scroll:!1}},created:function(){var t=this;document.addEventListener("scroll",function(){t.scroll=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop>400})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title","src"],name:"backtitle",data:function(){var t="url(",e=")";return{img:t.concat(this.src).concat(e)}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(57),n=s(a),r=i(66),c=s(r);e.default={name:"mooc",components:{BackTitle:n.default,Timeline:c.default},data:function(){return{time:{title:"协会时间轴",src:i(28)},saepa11:{title:"11.0团队",src:i(29)}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",data:function(){return{socials:[{title:"社会认可",texts:["北极光-清华全国大学生公益创业实践赛银奖","清华百年树人德年公益文化奖","北京高校优秀学生社团称号","阿克苏诺贝尔奖","北京市志愿服务大赛金奖"]},{title:"媒体报道",texts:["社会媒体专题报道超过20篇，人物采访超过10篇。包含《参考消息》、《新京报》、《京华时报》、《中国青年报》、《中国教育报》、《紫荆报》、清华主页、新浪教育和网易公益等媒体报道。","《清华最帅工科男》视频新浪播放次数达2,496,817，被酷6等各大视频网站、洛阳晚报等各大报纸转载报道。"]},{title:"合作单位",texts:["清华大学扶贫办公室","曾宪备基金会","智行基金会","途梦公益","金雅拓","萝卜太辣"]}]}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(61),n=s(a);e.default={name:"home",components:{Jumbotron:n.default},data:function(){return{items:[{url:i(30),alt:"公益创造快乐",text1:"公益——是一门",text2:"社会必修课"},{url:i(31),alt:"知识改变命运",text1:"　知识改变命运，",text2:"　实践检验真知！"},{url:i(32),alt:"一个团队，一起努力",text1:"　一个团队，",text2:"　一起努力！"}]}}}},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(67),n=s(a);e.default={name:"jumbotron",components:{Slider:n.default},data:function(){var t=[i(38),i(39),i(40),i(41)],e="url(",s=")";return{someList:[{title:"",style:{background:e.concat(t[0]).concat(s)}},{title:"",style:{background:e.concat(t[1]).concat(s)}},{title:"",style:{background:e.concat(t[2]).concat(s)}},{title:"",style:{background:e.concat(t[3]).concat(s)}}],sliderinit:{currentPage:0,thresholdDistance:500,thresholdTime:100,autoplay:4e3,loop:!0,direction:"horizontal"}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mooc",components:{},data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navbar",data:function(){return{items:[{text:"主页",path:"/home"},{text:"项目介绍",path:"/projects"},{text:"MOOC",path:"/mooc"},{text:"学方论坛",path:"http://ixuefang.cn/"},{text:"联系我们",path:"/contact"}]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{projects:[{title:"周末支教",subtitle:"用周末不长的时间，做一生难忘的事情",text:"在清华大学教育扶贫办公室的帮助下，协会与河南滑县抗大初中、河南滑县新区实验小学、河北魏县一中、河北行唐一中、河北宣化四中、河北平乡二中等共十余所中小学建立了长期合作关系，组织清华志愿者在学期中用周末的时间在当地开展支教活动。",boxes:[{url:i(53),alt:"周末支教",title:"项目成果",text:'<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',order:!0}]},{title:"享读计划",subtitle:"愿你们能以书为伴，生活充满阳光",text:"2013年始，周末支教部策划推出了将短期支教影响长期化的子项目——“享读计划”。这是一项以阅读为主题的系列性支教活动，我们在每年暑假期间为学校建立小型图书室或建立班级图书角，并依托这一载体开展一系列阅读类课程与活动，旨在帮助当地学生培养良好阅读习惯，拓展学生视野，提高学生独立思考与自我表达能力，并引导其形成积极向上、开放进取的人生观与世界观。",boxes:[{url:i(52),alt:"享读计划",title:"项目成果",text:'<div>截至2016年暑期，已开展三期享读活动，受益学生千余人，累计给学生带去数千张教学材料，为河南商丘宁陵赵村一中建立图书室并得到学生充分利用；为河北灵寿中学和河北平乡二中增添班级图书角，拓展阅读面。</div><div class="bold">2014年获“清华大学实践梦想计划”支持。</div>',order:!1}]},{title:"梦想课堂",subtitle:"梦想，是给孩子最好的礼物。",text:"梦想课堂项目源起于2011年电脑传爱部的一次调研，发现有很多农民工子弟在周末得不到父母的陪伴，同时他们的教育结构中也缺乏素质教育、兴趣教育等必须的内容，因而怀着为孩子播种梦想、为公益搭建平台、帮助大学生更多地了解社会的初衷，逐步形成了现在规模较大、运作规范的梦想课堂活动。梦想课堂活动主要致力于运用周末的时间，利用清华大学班级素拓的形式，对没有父母在侧的农民工孩子起到一个陪伴的作用；同时，通过开展音乐、美术、体育、棋类、团队合作、自信力培养、科技创新、英语口语等丰富多彩的课程，以实现素质教育的理念和目标。",boxes:[{url:i(2),alt:"周末支教",title:"项目成果",text:'<div>从2011年起，我们已在五年中成功举办约<span class="bold">80次活动</span>，受益学生<span class="bold">超三千人</span>，并且和明圆小学、京顺学校等农民工子弟小学建立了稳定的合作关系，学校和学生对清华学生的到来均表现出很大的热情。</div><div>梦想课堂项目迄今为止已多次获得<span class="bold">清华大学校级素拓项目金奖</span>，并获得<span class="bold">2013阿克苏诺贝尔中国大学生社会公益奖金奖</span>。在清华大学校方与学生之中影响力颇为深远。 </div>',order:!0}]},{title:"筑梦清华",subtitle:"寻梦，追梦！",text:"筑梦清华作为梦想课堂的子项目,围绕“寻梦、追梦”的核心,带领孩子们走进清华,感受清华独特的学术氛围,领略清华百年名校的人文气息。志愿者一对一地带领孩子游览清华校园,讲述清华历史,分享清华名人的励志故事,组织各种游戏等等。我们想用爱去感染孩子们,让他们相信“心有多大,舞台就有多大”，让他们在清华园中,感受“自强不息,厚德载物”的清华精神,感受“行胜于言”的务实学风。同时激励孩子们努力学习,积极向上,奋力拼搏,让“清华梦”入驻孩子们的心间。与清华志愿者们的零距离接触，也可以潜移默化地对他们产生积极向上的影响。此外，筑梦清华也在尝试在校外的科技馆开展活动，帮助孩子们了解科技的发展历程，感受科技的神秘魅力，增加对科技的热爱，也增进志愿者与孩子们的互动交流。",boxes:[{url:i(2),alt:"筑梦清华",title:"项目成果",text:'<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',order:!1}]},{title:"创新工作室",subtitle:"公益，需要我们去创新",text:"创新工作室在协会中扮演着公益孵化器、实验室和先驱者的角色。创新工作室致力于实践新的公益想法，探索公益的新领域。目前，创新工作室下属任务魔方、直播支教、春风计划三个子项目。",boxes:[{url:i(44),alt:"春风计划",title:"春风计划",text:"<div>春风计划致力于打造一个有成效、有特点、可持久的大学生社会帮教活动。就项目本身而言，我们希望通过和狱方合作，找到既能有效帮助服刑人员改邪归正，又适合大学生参与的社会帮教模式。<div>通过这项活动，我们一方面希望帮助服刑人员树立正确的意识形态，感受到社会的温暖，促进服刑人员积极改造；另一方面，希望能够借助协会和清华大学的社会影响力，促进社会对帮教活动的重视，最终帮助服刑人员更好地回归社会。</div><div>目前，春风计划和北京市第二监狱取得了合作关系，将主要针对参加入监教育的人员进行心理辅导，以更好地帮助他们度过适应期。第一期活动将于2016年11月—12月推出。</div>",order:!0},{url:i(46),alt:"直播支教",title:"直播支教",text:"<div>直播支教致力于解决支教过程中空间的距离，更好地方便志愿者进行支教。本学期SAEPA直播支教项目组与途梦（Tomoroe）课堂进行合作，联合开展了“途梦-清华SAEPA学霸分享”活动。这个活动面对贫困地区在校的中学生，以线上直播的方式，为远方的孩子们带来一场学习经验分享谈。志愿者将通过QQ视频的方式对学生们进行远程直播支教。每次授课面向3所学校（约200名学生），讲解控制在40分钟左右，并预留20分钟进行答疑。另外，志愿者亦可以通过线上QQ群答疑的方式对同学们进行学习方法的指导。途梦邀请各行业优秀的职场人士，通过在线视频方式（QQ视频电话会议系统），向偏远地区学生分享自己的成长经历和职场奋斗故事。从2015年10月28日起，截至目前为止，途梦已经开展了超过100期分享，跨越13个省区，40所学校，影响超过10000名学生。在本次活动中，途梦的老师会对同学们的课件和演讲稿进行修改，并帮助我们联系对口学校。</div>",order:!1},{url:i(45),alt:"任务魔方",title:"任务魔方",text:"<div>任务魔方是清华大学学生教育扶贫协会的线上活动。项目依托微信平台，借鉴微公益理念，力图打造校园线上微公益平台。通过微公益极大降低公益的门槛，提升同学们的公益参与度，及时反馈公益成果和提升公益感受，促进同学们养成公益的习惯，从而使增强校园的公益氛围。任务魔方目前正在运行公益助跑项目，即参与同学可以用自己跑步的里程兑换成捐献金额或火车票里程的方式，来为孩子们献出一份爱心。该项目现借助线上的公益平台和线下的集体助跑活动收集里程，并与多个学生组织进行合作，为筑梦清华、撒爱励志奖学金等活动进行前期宣传。目前任务魔方已获得清华大学萌芽计划支持。公益助跑活动自2015年11起已圆满完成三期。</div>",order:!0}]},{title:"S-Lab",subtitle:"S-Lab一句话简介",text:"S-lab 介绍",boxes:[{url:i(51),alt:"雅韵心传",title:"雅韵心传",text:"<div>雅韵心传是由梦想课堂延伸出的一种较为长期和体系性的支教尝试，主要是针对农民工子弟小学开展一学期的支教活动，希望实现“寓教于乐”的目标，也帮助志愿者与孩子建立较深的友谊，将活动的影响程度深化、长久化。现在承担的课程是传统文化课，我们想用传统文化知识去感染孩子们，帮助他们形成良好的品德，培养他们的人文底蕴，鼓励他们树立远大的志向和人生理想。 </div>",order:!1},{url:i(50),alt:"心愿认领",title:"心愿认领",text:" <div>心愿认领作为一种创新的活动方式，致力于帮助孩子们实现心愿，为其送去快乐与温暖，并同时让他们感受到来自社会的关注，以此激励他们努力学习，回馈社会。活动方式主要是收集农民工子弟学校学生的心愿，进行整理并分析心愿的可实现性，然后在固定时间及场所，通过心愿墙的形式面向清华全校学生开展心愿认领活动，最后确保心愿的实现。 </div>",order:!0}]},{title:"电脑传爱",subtitle:"用周末不长的时间，做一生难忘的事情",text:"<div>在互联网与科技高速发展的今天，我们致力于“互联网+科技+公益”的公益模式的探索与推行，捐献微机室，机器人普及教育，MOOC教学……我们不断探索新的理念与新的模式，我们让高新技术不再遥远。</div><div>SAEPA电脑传爱部成立于2010年，历年来，电脑传爱部曾与戴尔公司、国维芯达科技有限公司、美克美家家居连锁有限公司、中视协(北京)演艺文化有限公司、新浪公司、金雅拓（北京）智能卡科技有限公司等知名企业合作，在内蒙古、贵州、云南和北京周边等地区为贫困子弟学校捐赠多达13个微机室，多次获得校级与国家级实践奖项。</div>然而，随着实践年复一年的进行，捐赠微机室的局限性逐渐显露出来。在捐献微机室之后的多次回访中我们发现，所捐献的微机室的使用情况并不乐观，微机室的使用率不高，甚至被闲置。于是，在陈朝松学长的建议下，电脑传爱部决定进行转型。<div></div><div>鉴于相当一部分同协会合作的贫困学校对教学资源的需求远胜于对硬件资源的需求，部分学校的硬件设施也足以支持网络课程甚至直播支教，且考虑到此前电脑传爱项目捐建的微机室，在2016年4月到5月的调研后，我们决定将工作重心转移到MOOC教学上。2016年下半年，萝卜太辣与SAEPA再次合作，电脑传爱部将在萝卜太辣的支持下，以MOOC结合线下实践课为形式，在合适的中学推行机器人教育，迈出转型的第一步。</div>",boxes:[{url:i(47),alt:"周末支教",title:"项目成果",text:'<div>截至2016年10月，累计期数逾140次，累计培训清华志愿者超过1200人次，累计受益学生逾十四万人，累计给当地孩子带去超过数万页的教学材料。</div><div class="bold">2016年获北京市志愿服务项目大赛金奖</div><div class="bold">2015年获“北京市小微志愿服务项目支持计划”支持</div><div class="bold">2014-2015学年清华大学学生社团十佳活动（撒爱·支教故事大赛）</div>',order:!1}]},{title:"撒爱论坛",subtitle:"撒爱论坛一句话简介",text:"撒爱论坛为支教志愿者、社会公益组织、基金会等公益力量搭建了 交流的平台，在交流与讨论中，使各方形成了对大学生支教现状的 共识，并在此基础上对支教中存在的问题进行了总结反思，提出了 切实可行的解决方案，有利于志愿者的不断成长，推进公益组织发 展形式的改进与创新。 此外，“撒爱论坛”希望能通过论坛的交流，一定程度上化解部分志 愿者对公益的质疑，鼓励更多的人参与教育扶贫、关注社会公益事业。",boxes:[{url:i(49),alt:"撒爱论坛",title:"项目成果",text:"求文案",order:!0}]}]}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["scroll"],name:"strechynav",data:function(){return{items:[{text:"主页",path:"/home"},{text:"项目介绍",path:"/projects"},{text:"MOOC",path:"/mooc"},{text:"学方论坛",path:"http://ixuefang.cn/"},{text:"联系我们",path:"/contact"}],toggle:!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"timeline",data:function(){return{title:"This is my Timeline!"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["sliderinit","pages"],data:function(){return{basicdata:{poswidth:"0",posheight:"0",start:{},end:{},tracking:!1,animation:{"animation-ease":!1},containerClass:{"swiper-container-vertical":!1},setIntervalid:""}}},computed:{styleobj:function(){return{transform:"translate3D("+this.basicdata.poswidth+","+this.basicdata.posheight+",0)"}},pagenums:function(){return this.pages.length},currentWidth:{get:function(){var t=0,e=void 0,i=this.sliderinit.currentPage-1;this.sliderinit.loop&&(i=this.sliderinit.currentPage);for(var s in this.$el.children)/slider-wrapper/gi.test(this.$el.children[s].className)&&(e=this.$el.children[s]);var a=e.children;for(var n in a)n<=i&&(t+=a[n].offsetWidth,t+=parseInt(a[n].style.marginRight.length?a[n].style.marginRight:0),t+=parseInt(a[n].style.marginLeft.length?a[n].style.marginLeft:0));return t},set:function(t){return t}},currentHeight:function(){var t=0,e=void 0,i=this.sliderinit.currentPage-1;this.sliderinit.loop&&(i=this.sliderinit.currentPage);for(var s in this.$el.children)/slider-wrapper/gi.test(this.$el.children[s].className)&&(e=this.$el.children[s]);var a=e.children;for(var n in a)n<=i&&(t+=a[n].offsetHeight,t+=parseInt(a[n].style.marginTop.length?a[n].style.marginTop:0),t+=parseInt(a[n].style.marginBottom.length?a[n].style.marginBottom:0));return t}},mounted:function(){var t=this,e=this;e.slide(this.sliderinit.currentPage,"animationnone"),e.$on("slideTo",function(e){t.slide(e)}),e.$on("slideNext",function(){t.next()}),e.$on("slidePre",function(){t.pre()}),e.clock().begin(e),"vertical"==this.sliderinit.direction&&(this.basicdata.containerClass["swiper-container-vertical"]=!0)},methods:{swipeStart:function(t){var e=this;if(this.basicdata.animation["animation-ease"]=!1,this.sliderinit.autoplay){var i=this;this.clock().stop(i)}if(document.addEventListener("touchmove",e.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return void(this.basicdata.tracking=!1);this.basicdata.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY}else this.basicdata.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY},swipeMove:function(t){if(this.basicdata.tracking){if("touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),"vertical"==this.sliderinit.direction)return void(this.basicdata.posheight=-this.currentHeight+this.basicdata.end.y-this.basicdata.start.y+"px");this.basicdata.poswidth=-this.currentWidth+this.basicdata.end.x-this.basicdata.start.x+"px"}},swipeEnd:function(t){var e=this,i=this;this.basicdata.tracking=!1;var s=(new Date).getTime(),a=s-this.basicdata.start.t,n=this.basicdata.end.x-this.basicdata.start.x,r=this.basicdata.end.y-this.basicdata.start.y;return this.sliderinit.autoplay&&!function(){var t=e;setTimeout(function(){t.clock().begin(t)},350)}(),document.removeEventListener("touchmove",i.preventDefault(t)),a>this.sliderinit.thresholdTime?void this.slide(this.sliderinit.currentPage):"vertical"!=this.sliderinit.direction?n>this.sliderinit.thresholdDistance&&Math.abs(r)<this.sliderinit.thresholdDistance?void this.pre():-n>this.sliderinit.thresholdDistance&&Math.abs(r)<this.sliderinit.thresholdDistance?void this.next():void this.slide(this.sliderinit.currentPage):r>this.sliderinit.thresholdDistance&&Math.abs(n)<this.sliderinit.thresholdDistance?void this.pre():-r>this.sliderinit.thresholdDistance&&Math.abs(n)<this.sliderinit.thresholdDistance?void this.next():void this.slide(this.sliderinit.currentPage)},pre:function(){0!=this.sliderinit.currentPage?(this.sliderinit.currentPage-=1,this.slide()):this.sliderinit.loop?(this.sliderinit.currentPage-=1,this.slide(this.sliderinit.currentPage,"loop")):this.slide()},next:function(){this.sliderinit.currentPage!=this.pagenums-1?(this.sliderinit.currentPage+=1,this.slide()):this.sliderinit.loop?(this.sliderinit.currentPage+=1,this.slide(this.sliderinit.currentPage,"loop")):this.slide()},slide:function(t,e){var i=this;return this.basicdata.animation["animation-ease"]=!0,"animationnone"==e&&(this.basicdata.animation["animation-ease"]=!1),(t||0==t)&&(this.sliderinit.currentPage=t),"vertical"==this.sliderinit.direction?this.basicdata.posheight=-this.currentHeight+"px":this.basicdata.poswidth=-this.currentWidth+"px","loop"==e?void setTimeout(function(){i.sliderinit.currentPage==-1?i.slide(i.pagenums-1,"animationnone"):i.slide(0,"animationnone")},200):void this.$emit("slide",this.sliderinit.currentPage)},clock:function(){return{begin:function(t){t.sliderinit.autoplay&&(t.setIntervalid=setInterval(function(){t.next(),t.sliderinit.currentPage!=t.pagenums-1||t.sliderinit.loop||clearInterval(t.setIntervalid)},t.sliderinit.autoplay))},stop:function(t){clearInterval(t.setIntervalid)}}},preventDefault:function(t){t.preventDefault()}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"static/img/1.c8b090b.jpg"},function(t,e,i){t.exports=i.p+"static/img/2.6cabec8.jpg"},function(t,e,i){t.exports=i.p+"static/img/5.367fa0a.png"},function(t,e,i){t.exports=i.p+"static/img/6.bac0ca3.png"},function(t,e,i){t.exports=i.p+"static/img/7.fc37814.png"},function(t,e,i){t.exports=i.p+"static/img/qrcode.a5a0c75.jpg"},function(t,e,i){t.exports=i.p+"static/img/cx1.811d26d.png"},function(t,e,i){t.exports=i.p+"static/img/cx2.1bed56e.png"},function(t,e,i){t.exports=i.p+"static/img/dnca1.283737b.png"},function(t,e,i){t.exports=i.p+"static/img/dnca2.27c422d.png"},function(t,e,i){t.exports=i.p+"static/img/4.0c1b83f.jpg"},function(t,e,i){t.exports=i.p+"static/img/5.b7991d8.jpg"},function(t,e,i){t.exports=i.p+"static/img/6.7e7d3cd.jpg"},function(t,e,i){t.exports=i.p+"static/img/7.110e000.jpg"},function(t,e,i){t.exports=i.p+"static/img/mxkt1.de9e353.png"},function(t,e,i){t.exports=i.p+"static/img/mxkt2.5a7669e.png"},function(t,e,i){t.exports=i.p+"static/img/cfjh.dc6bfb0.jpg"},function(t,e,i){t.exports=i.p+"static/img/rwmf.15b7d10.png"},function(t,e,i){t.exports=i.p+"static/img/zbzj.1c19949.png"},function(t,e,i){t.exports=i.p+"static/img/1.20be02a.jpg"},function(t,e,i){t.exports=i.p+"static/img/jumb.9a56592.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.4b1204c.jpg"},function(t,e,i){t.exports=i.p+"static/img/xyrl.78cae9f.jpg"},function(t,e,i){t.exports=i.p+"static/img/yyxc.3b423c7.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.c8664d9.jpg"},function(t,e,i){t.exports=i.p+"static/img/1.d9e5572.png"},function(t,e,i){t.exports=i.p+"static/img/zmzj1.ff61d71.png"},function(t,e,i){t.exports=i.p+"static/img/zmzj2.55a3c5c.png"},function(t,e,i){var s,a;i(19),s=i(5);var n=i(70);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,t.exports=s},function(t,e,i){var s,a;i(22),s=i(6);var n=i(73);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-75fdee90",t.exports=s},function(t,e,i){var s,a;i(18),s=i(7);var n=i(69);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-0d5c2b65",t.exports=s},function(t,e,i){var s,a;i(26),s=i(8);var n=i(78);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-f9241fb8",t.exports=s},function(t,e,i){var s,a;i(27),s=i(9);var n=i(79);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-fb64d4b0",t.exports=s},function(t,e,i){var s,a;s=i(10);var n=i(74);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,t.exports=s},function(t,e,i){var s,a;i(25),s=i(11);var n=i(77);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-e5fe0f82",t.exports=s},function(t,e,i){var s,a;i(23),s=i(12);var n=i(75);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-827cbb2c",t.exports=s},function(t,e,i){var s,a;i(17),s=i(13);var n=i(68);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-035f997a",t.exports=s},function(t,e,i){var s,a;i(21),s=i(14);var n=i(72);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-48863a94",t.exports=s},function(t,e,i){var s,a;i(20),s=i(15);var n=i(71);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._scopeId="data-v-1caeb38a",t.exports=s},function(t,e,i){var s,a;i(24),s=i(16);var n=i(76);a=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(a=s=s.default),"function"==typeof a&&(a=a.options),a.render=n.render,a.staticRenderFns=n.staticRenderFns,t.exports=s},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"projects"}},[t._m(0),e("div",{staticClass:"container"},[t._l(t.projects,function(i){return e("div",{staticClass:"project"},[e("div",{staticClass:"intro"},[e("div",{staticClass:"titleBox"},[e("div",{staticClass:"title"},[t._s(i.title)]),e("div",{staticClass:"subtitle"},[t._s(i.subtitle)])]),e("div",{staticClass:"project_text",domProps:{innerHTML:t._s(i.text)}})]),t._l(i.boxes,function(i){return e("div",{staticClass:"flex_boxes"},[i.order?[e("div",{staticClass:"p_box order-1"},[e("img",{attrs:{src:i.url,alt:i.alt}})]),e("div",{staticClass:"t_box order-2"},[e("div",{staticClass:"box box_title"},[t._s(i.title)]),e("div",{staticClass:"box box_text",domProps:{innerHTML:t._s(i.text)}})])]:[e("div",{staticClass:"p_box order-2"},[e("img",{attrs:{src:i.url,alt:i.alt}})]),e("div",{staticClass:"t_box order-1"},[e("div",{staticClass:"box box_title"},[t._s(i.title)]),e("div",{staticClass:"box box_text",domProps:{innerHTML:t._s(i.text)}})])]])})])})])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"jumb"},[e("img",{attrs:{src:i(48),alt:"我们用精品的项目充实公益"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"contact"},[e("back-title",{attrs:{src:t.time.src,title:t.time.title}})," ",e("timeline")," ",e("back-title",{attrs:{src:t.saepa11.src,title:t.saepa11.title}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("navbar",{class:t.navbar}),e("stretchy-nav",{class:{show:t.scroll,hidden:!t.scroll},attrs:{scroll:t.scroll}}),e("transition",{attrs:{namd:"fade",mode:"out-in"}},[e("router-view",{staticClass:"view"})]),e("footers")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"timeline"},[e("div",[t._s(t.title)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"no-touch"},[e("div",{staticClass:"cd-stretchy-nav",class:{"nav-is-visible":t.toggle&&t.scroll}},[e("a",{staticClass:"cd-nav-trigger",attrs:{href:"#0"},on:{click:function(e){t.toggle=!t.toggle}}},[e("span",{attrs:{"aria-hidden":"true"}})]),e("ul",[t._l(t.items,function(i,s){return["学方论坛"==i.text?[e("li",[e("a",{attrs:{href:i.path,target:"_blank"}},[e("span",[t._s(i.text)])])])]:[e("li",[e("router-link",{attrs:{to:i.path}},[e("span",[t._s(i.text)])])])]]})]),e("span",{staticClass:"stretchy-nav-bg",attrs:{"aria-hidden":"true"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("div",{staticClass:"titleBox",style:{background:t.img+" no-repeat center center"}},[e("div",{staticClass:"arrow-up"})," ",e("div",{staticClass:"title"},["\n      "+t._s(t.title)+"\n    "])," ",e("div",{staticClass:"arrow-down"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"jumbotron"},[e("slider",{attrs:{pages:t.someList,sliderinit:t.sliderinit}})])},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("nav",[e("div",{staticClass:"left_box"}),e("ul",{staticClass:"nav_container"},[e("input",{attrs:{id:"toggle",type:"checkbox",name:"toggle"}}),t._m(0),t._m(1),t._l(t.items,function(i,s){return[e("li",{staticClass:"point"},["·"]),"学方论坛"==i.text?[e("li",{staticClass:"normal"},[e("a",{attrs:{href:i.path,target:"_blank"}},[t._s(i.text)])])]:[e("router-link",{staticClass:"normal",attrs:{to:i.path,tag:"li"}},[t._s(i.text)])]]}),e("li",{staticClass:"point"},["·"])]),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("li",{staticClass:"nav_toggle"},[e("label",{staticClass:"nav_icon",attrs:{for:"toggle"}})])},function(){var t=this,e=t.$createElement;return e("li",{staticClass:"logo"},[e("img",{attrs:{src:i(1)}})])},function(){var t=this,e=t.$createElement;return e("div",{staticClass:"right_img"},[e("img",{attrs:{src:i(1)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"slider-container",class:t.basicdata.containerClass},[e("div",{staticClass:"slider-wrapper",class:t.basicdata.animation,style:t.styleobj,on:{touchmove:t.swipeMove,touchstart:t.swipeStart,touchend:t.swipeEnd,mousedown:t.swipeStart,mouseup:t.swipeEnd,mousemove:t.swipeMove}},[t.sliderinit.loop?t._e():[t._l(t.pages,function(i){return[e("div",{staticClass:"slider-item",style:i.style},["\n        \t"+t._s(i.title)+"\n       \t  "])]})]," "," ",t.sliderinit.loop?[e("div",{staticClass:"slider-item",style:t.pages[t.pages.length-1].style},[t._s(t.pages[t.pages.length-1].title)])," ",t._l(t.pages,function(i){return[e("div",{staticClass:"slider-item",style:i.style},[t._s(i.title)])]})," ",e("div",{staticClass:"slider-item",style:t.pages[0].style},[t._s(t.pages[0].title)])]:t._e()])," ",e("div",{staticClass:"slider-pagination slider-pagination-bullets"},[t._l(t.pagenums,function(i){return[e("span",{staticClass:"slider-pagination-bullet",class:i-1==t.sliderinit.currentPage?"slider-pagination-bullet-active":"",on:{click:function(e){t.slide(i-1)}}})]})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"mooc"})},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._l(t.socials,function(i){return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._s(i.title)]),e("div",{staticClass:"text"},[t._l(i.texts,function(i){return e("div",[t._s(i)])})])])}),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},["联系我们"]),e("div",{staticClass:"text contactBox"},[e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:i(33)}})]),e("div",["邮箱: saepa_thu@163.com"]),e("div",["微博: 清华SAEPA"])])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"home"}},[e("div",{staticClass:"triangle"}),e("jumbotron",{staticClass:"jumbotron"}),e("div",{staticClass:"container"},[e("div",{staticClass:"icon_container"},[t._l(t.items,function(i){return e("div",{staticClass:"icon_box"},[e("img",{attrs:{src:i.url,alt:i.alt}}),e("div",{staticClass:"icon_text"},[e("p",[t._s(i.text1)]),e("p",[t._s(i.text2)]),e("p",["—"])])])})]),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"projects"},[e("div",{staticClass:"intro"},[e("div",{staticClass:"achievements"},[e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(34),alt:"创新工作室"}})]),e("div",{staticClass:"textSide"},["实践公益新想法\n探索公益新领域"]),e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(35),alt:"创新工作室"}})])]),e("div",{staticClass:"achievements"},[e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(36),alt:"电脑传爱"}})]),e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(37),alt:"电脑传爱"}})]),e("div",{staticClass:"textSide"},["互联网+科技+公益"])]),e("div",{staticClass:"achievements"},[e("div",{staticClass:"textSide"},["梦想\n是给孩子最好的礼物"]),e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(42),alt:"梦想课堂"}})]),e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(43),alt:"梦想课堂"}})])]),e("div",{staticClass:"achievements"},[e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(54),alt:"周末支教"}})]),e("div",{staticClass:"textSide"},["用周末不长的时间\n做一生难忘的事情"]),e("div",{staticClass:"picSide"},[e("img",{attrs:{src:i(55),alt:"周末支教"}})])])])])}]}}]);
//# sourceMappingURL=app.6b41bffb44cadea08717.js.map