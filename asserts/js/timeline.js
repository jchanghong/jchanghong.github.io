/**
 * 作者: jchanghong
 * 时间: 2016-11-16
 * 描述:  博客 时间线页面
 */
(function(win) {
	var timeline = {
		/**
		 * @description 监听滑动
		 */
		listenersScroll: function() {
			var eventMarks = document.querySelectorAll('.timeline-mark');
			//激活某一个mark dom
			var currPoint = function(dom) {
				for(var i = 0, len = eventMarks.length; i < len; i++) {
					eventMarks[i].parentNode.classList.remove('curr');
				}
				dom.parentNode.classList.add('curr');
//				if(dom.parentNode.classList.contains('closed')){
//					dom.parentNode.classList.remove('closed');
//					app.animate.animate(dom.parentNode.querySelector('.event-content'), {
//						display: 'show'
//					});
//				}
			};
			//监听滑动
			document.addEventListener('scroll', function() {
				//console.log("y:" + getScrollTop());
				var currTop = app.dimensions.getScrollTop();
				if(eventMarks) {
					var yArray = [];
					for(var i = 0, len = eventMarks.length; i < len; i++) {
						yArray[i] = app.offset.getTop(eventMarks[i]);
					}
					//分析哪一个更近
					var curr = 0;
					for(var i = 0, len = yArray.length; i < len; i++) {
						if(i >= 1) {
							if(yArray[i] > currTop && yArray[i - 1] < currTop) {
								curr = i;
							}
						}
					}
					currPoint(eventMarks[curr]);
				}
				//console.log("firsty:" + getdomY(document.querySelector('.timeline-mark')));
			});
			
		},
		/**
		 * @description 初始化book
		 */
		initAllItems: function() {
			var self = this;
			//绑定每一个的点击,显示和隐藏
			var eventThings = document.querySelectorAll('.event-title,.timeline-mark');
			app.event.bindEvent(eventThings, function(e) {
				var parent = this.parentNode;
				if(parent) {
					if(parent.classList.contains('closed')) {
						//已经关闭
						parent.classList.remove('closed');
						app.animate.animate(parent.querySelector('.event-content'), {
							display: 'show'
						});
					} else {
						parent.classList.add('closed');
						app.animate.animate(parent.querySelector('.event-content'), {
							display: 'hide'
						});
					}
				};
			});
			//年份的点击与隐藏
			var majorMarks = document.querySelectorAll('.timeline-marker-major');
			if(majorMarks) {
				app.event.bindEvent(majorMarks, function(el) {
					var eventContent = this.parentNode.querySelectorAll('.timeline-event');
					if(eventContent) {
						var isAllClosed = true;
						Array.prototype.forEach.call(eventContent, function(el) {
							if(el.classList.contains('closed')) {
								isAllClosed = false;

							}
						});
						Array.prototype.forEach.call(eventContent, function(el) {
							if(isAllClosed) {
								if(!el.classList.contains('closed')) {
									el.classList.add('closed');
									app.animate.animate(el.querySelector('.event-content'), {
										display: 'hide'
									});
								}

							} else {
								if(el.classList.contains('closed')) {
									el.classList.remove('closed');
									app.animate.animate(el.querySelector('.event-content'), {
										display: 'show'
									});
								}
							}
						});
					}
				});
			}
			//初始化
			var eventContent = document.querySelectorAll('.timeline-event');
			if(eventContent) {
				for(var i = 0, len = eventContent.length; i < len; i++) {
					if(eventContent[i].classList.contains('closed')) {
						app.animate.animate(eventContent[i].querySelector('.event-content'), {
							display: 'hide'
						});
					}
				}
			}
			//监听滑动
			self.listenersScroll();

		},
		/**
		 * @description 创建时间轴
		 */
		createTimeLine: function(){
			var data = [{
				"time":"现今",
				"event":[{
					"year":"2017",
					"date":"6.20",
					"title":"基于gitub pages的个人博客web和安卓版启用",
					//数组,每一个item都是p标签里的内容
					"content":[
						"基于jekyll目标搭建博客，由github托管。开始整理自己的知识体系，开启一个新的旅程。",
						"参与开源项目，完善jekyll安卓，随时随地发随笔，再也不怕丢失。"
					],
					//图片数组
					"media":[
//						"/asserts/images/timeline/img_2016_11_18_1.png",
//						"/asserts/images/timeline/img_2016_11_18_2.png",
//						"/asserts/images/timeline/img_2016_11_18_3.png"
					]
				},{
					"year":"2016",
					"date":"10.30",
					"title":"数据库",
					//数组,每一个item都是p标签里的内容
					"content":[
//						"这一天，终于下定决心了，不再思前想后，开始行动起来，每天业余时间不再像以前一样悠闲的度过，而是为自己的目标而努力",
//						"预计划，先完成个人博客网站，再完成一些已掌握知识的总结，再开始基础知识的巩固，同时业余时间口琴，吉他不放弃，晚上睡前阅读英文读本，坚持下去，几年后再分晓",
						"分布式数据库的研究和开发"
					]
				}]
			},{
				"time":"2015",
				"event":[{
					"year":"2015",
					"date":"10.11",
					"title":"mysql的研究和开发",
					//数组,每一个item都是p标签里的内容
					"content":[

						"主要是图形化的工具的开发和mysql的学习"
					]
				},{
					"year":"2015",
					"date":"09.01",
					"title":"开始研究僧生活",
					//数组,每一个item都是p标签里的内容
					"content":[
						"期间主要课程学习和英语考试准备",

					]
				},{
					"year":"2015",
					"date":"07.01",
					"title":"大学毕业",
					//数组,每一个item都是p标签里的内容
					"content":[
						"毕业了，继续本校读研究生。",
						"希望更加充实自己"
					],
					//图片数组
					"media":[
//						"/asserts/images/graduate/img_2015_07_01_1.jpg",
//						"/asserts/images/graduate/img_2015_07_01_3.jpg",
//						"/asserts/images/graduate/img_2015_07_01_4.jpg",
//						"/asserts/images/graduate/img_2015_07_01_5.jpg"
					]
				}]
			},{
				"time":"2011",
				"event":[{
					"year":"2011",
					"date":"09.01",
					"title":"我的大学",
					//数组,每一个item都是p标签里的内容
					"content":[
						"进入了电子科技大学，开启成都4年生活。",
						""
					]
				}]
			}];
			var createTimeLineHtml = function(timeLineArray){
				var html = '';
				for(var i=0,len = timeLineArray.length;i<len;i++){
					var tmp = timeLineArray[i];
					var mtClass = (i===0)?'':'mt80';
					html += '<div class="timeline-date '+mtClass+'">';
					html += '<div class="timeline-marker-major">';
					html += '<div class="mask"></div>';
					html += '<div class="major-content"><div thisyear="" class="timeblock">'
					html += tmp.time;
					html += '</div></div>';	
					html += '<div class="clock"><span>';
					html += tmp.time;
					html += '</span></div>';
					html += '</div>';
					//开始创建事件
					html += createEventArray(tmp.event);
					html += '</div>';
				}
				return html;
			};
			var createEventArray = function(eventArray){
				var html = '';
				for(var i=0,len = eventArray.length;i<len;i++){
					var tmp = eventArray[i];
					var mtClass = (i===0)?'mt80':'mt40';
					html += '<div class="timeline-minor '+mtClass+' clearfix ">';
					html += '<h3>'+tmp.date+'<span>'+tmp.year+'</span></h3>';
					html += '<div class="timeline-event  ">';
					html += '<div class="timeline-mark"></div>';
					html += '<h3 class="event-title">'+tmp.title+'</h3>';
					html += '<div class="event-content ">';
					if(tmp.media){
						html += '<div class="media">';
						for(var j=0,len2=tmp.media.length;j<len2;j++){
							html += '<img src="'+tmp.media[j]+'" />';
						}
						html += '</div>';
					}
					if(tmp.content){	
						for(var j=0,len2=tmp.content.length;j<len2;j++){
							html += '<p>'+tmp.content[j]+'</p>';
						}
					}								
					html += '</div>';
					html += '</div>';
					html += '</div>';
				}
				return html;
			};
			
			var html = createTimeLineHtml(data);
			document.querySelector('.timeline-container').innerHTML = html;
		},
		/**
		 * @description book页面初始化
		 */
		init: function() {
			var self = this;
			self.createTimeLine();
			self.initAllItems();
		}
	};

	//初始化
	timeline.init();
})(window);