window.Stem={Collections:{},Models:{},Routers:{},Views:{},config:{donorsChooseApiKey:"DONORSCHOOSE",oae:{host:"stemincubator.oae-qa1.oaeproject.org",protocol:"http:"}},init:function(){"use strict";new Stem.Routers.App}},$(document).ready(function(){"use strict";Stem.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/completedProposalAsFeaturedDetailsItem.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<div class="featured__details__image">\n    <img src="'+(null==(__t=thumbImageURL)?"":__t)+'" width="100" height="100"/>\n</div>\n<div class="featured__details__text">\n    <h4 class="featured__details__title">'+(null==(__t=title)?"":__t)+"</h4>\n    <p>"+(null==(__t=shortDescription)?"":__t)+'</p>\n    <p>\n        <a href="'+(null==(__t=proposalURL)?"":__t)+'" class="button button--link">\n            $',print(Math.round(+totalPrice)),__p+=" funded\n        </a>\n    </p>\n</div>\n";return __p},this.JST["app/scripts/templates/completedProposalsAsFeaturedDetails.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+='<h3 class="featured__details__heading">Successful Projects in Georgia</h3>\n<div class="featured__details__listing"></div>\n<p>\n    <a class="button button--large button--link"\n       href="http://www.donorschoose.org/donors/search.html?max=10&state=GA&subject4=-4&historical=true">\n        Show me more\n    </a>\n<p>\n';return __p},this.JST["app/scripts/templates/contentAsFeaturedDetails.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<h3 class="featured__details__heading">Selected Content</h3>\n<div class="featured__details__listing"></div>\n<p class="featured__details__action">\n    <a class="button button--large button--link"\n       href="',print(Stem.config.oae.protocol+"//"+Stem.config.oae.host+"/search/?types=content"),__p+='"\n       data-featured__details__more >\n        Show me more\n    </a>\n<p>\n';return __p},this.JST["app/scripts/templates/contentAsFeaturedDetailsItem.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<div class="featured__details__image">\n    <img src="',print(Stem.config.oae.protocol+"//"+Stem.config.oae.host+thumbnailUrl),__p+='"\n         width="100" height="100"/>\n</div>\n<div class="featured__details__text">\n    <h4 class="featured__details__title">'+(null==(__t=displayName)?"":__t)+"</h4>\n    <p>"+(null==(__t=description)?"":__t)+'</p>\n    <p>\n        <a href="',print(Stem.config.oae.protocol+"//"+Stem.config.oae.host+profilePath),__p+='"\n           class="button button--link">\n            More Details\n        </a>\n    </p>\n</div>\n\n';return __p},this.JST["app/scripts/templates/groupAsFeaturedDetailsItem.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<div class="featured__details__image">\n    <img src="',print(Stem.config.oae.protocol+"//"+Stem.config.oae.host+thumbnailUrl),__p+='"\n         width="100" height="100"/>\n</div>\n<div class="featured__details__text">\n    <h4 class="featured__details__title">'+(null==(__t=displayName)?"":__t)+"</h4>\n    <p>"+(null==(__t=description)?"":__t)+'</p>\n    <p>\n        <a href="',print(Stem.config.oae.protocol+"//"+Stem.config.oae.host+profilePath),__p+='"\n           class="button button--link">\n            More Details\n        </a>\n    </p>\n</div>';return __p},this.JST["app/scripts/templates/groupsAsFeaturedDetails.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<h3 class="featured__details__heading">Selected Groups</h3>\n<div class="featured__details__listing"></div>\n<p class="featured__details__action">\n    <a class="button button--large button--link"\n       href="',print(Stem.config.oae.protocol+"//"+Stem.config.oae.host+"/search/?types=group"),__p+='"\n       data-featured__details__more >\n        Show me more\n    </a>\n<p>\n';return __p},this.JST["app/scripts/templates/proposalAsHighlight.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<div class="img-highlight"><img src="'+(null==(__t=imageURL)?"":__t)+'"></div>\n<h4>'+(null==(__t=title)?"":__t)+"</h4>\n<p>"+(null==(__t=shortDescription)?"":__t)+"</p>\n<p>"+(null==(__t=fulfillmentTrailer)?"":__t)+'</p>\n<div class="well well-sm">\nTotal cost: $',print(Math.round(+totalPrice)),__p+=" / $",print(Math.round(+costToComplete)),__p+=" to go <br/>\n"+(null==(__t=schoolName)?"":__t)+"<br/>\n",povertyLevel&&print("("+povertyLevel+")<br/>"),__p+="\n"+(null==(__t=city)?"":__t)+", GA\n</div>\n<p><a href="+(null==(__t=proposalURL)?"":__t)+'">Give to this class »</a></p>';return __p},this.JST["app/scripts/templates/proposalsAsHighlights.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+="\n";return __p},this.JST["app/scripts/templates/tagAsHorizontalSelectionItem.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<input type="checkbox" id="'+(null==(__t=id)?"":__t)+'" ',selected&&print("checked"),__p+=' />\n<label class="horizontal-selection__item-label" for="'+(null==(__t=id)?"":__t)+'">'+(null==(__t=label)?"":__t)+"</label>\n";return __p},this.JST["app/scripts/templates/tagAsVerticalSelectionItem.ejs"]=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=(_.escape,Array.prototype.join);with(obj)__p+='<input type="checkbox" id="'+(null==(__t=id)?"":__t)+'" ',selected&&print("checked"),__p+=' />\n<label class="vertical-selection__item-label" for="'+(null==(__t=id)?"":__t)+'">'+(null==(__t=label)?"":__t)+"</label>\n";return __p},this.JST["app/scripts/templates/tagSetAsHorizontalSelection.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<form class="horizontal-selection">\n    <fieldset>\n        <label class="horizontal-selection__label">'+(null==(__t=title)?"":__t)+":</label>\n   </fieldset>\n</form>\n";return __p},this.JST["app/scripts/templates/tagSetAsVerticalSelection.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<form class="vertical-selection">\n    <fieldset>\n        <label class="vertical-selection__label">'+(null==(__t=title)?"":__t)+":</label>\n   </fieldset>\n</form>\n";return __p},this.JST["app/scripts/templates/tagsAsHorizontalSelection.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+="<span>\n</span>\n";return __p},this.JST["app/scripts/templates/tagsAsVerticalSelection.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+="<div>\n</div>\n";return __p},function(a){"use strict";function b(b,e){this.element=b,this.settings=a.extend({},d,e),this._defaults=d,this._name=c,this.init()}var c="featured",d={};a.extend(b.prototype,{init:function(){var b=a(this.element).hasClass("featured")?a(this.element):a(this.element).find(".featured");b.find("[data-featured-toggle]").on("click",function(){var c=a(this).attr("data-featured-toggle");return"0"===b.attr("data-featured-selection")&&b.find('[data-featured-details="'+c+'"]').each(function(){var b=a(this).outerHeight();a(this).css("height",0).animate({height:b},400,function(){a(this).css("height","auto")})}),b.attr("data-featured-selection",c),!1}),b.find("[data-featured-close]").on("click",function(){var c=a(this).parents("[data-featured-details]").attr("data-featured-details");return b.find('[data-featured-details="'+c+'"]').animate({height:"0"},400,function(){a(this).css("height","auto"),b.attr("data-featured-selection","0")}),!1})}}),a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})},a(".featured").featured()}(jQuery,window,document),$(document).ready(function(){"use strict";$("#nav-toggle").on("change",function(){$("main").attr("data-nav-expanded",$("#nav-toggle").prop("checked"))})}),Stem.Models=Stem.Models||{},function(){"use strict";Stem.Models.Content=Backbone.Model.extend({url:function(){return Stem.config.oae.protocol+"//"+Stem.config.oae.host+"/api/content/"+this.id},parse:function(a){a.description=a.description||"",a.displayName=a.displayName||"",a.thumbnailUrl=a.thumbnailUrl||"",a.profilePath=a.profilePath||"";var b=["primary","elementary","middle","high"];if(a.displayName){var c=a.displayName.split(" - ").map(function(a){return a.trim()});if(a.displayName=c[0],c.length>1){var d=c[1].split(",").map(function(a){return a=a.trim().toLowerCase(),"k-2"===a?a="primary":"3-5"===a?a="elementary":"6-8"===a?a="middle":"9-12"===a&&(a="high"),a});b.forEach(function(b){a[b]=d.some(function(a){return-1!==a.indexOf(b)})})}b.some(function(b){return a[b]})||b.forEach(function(b){a[b]=!0}),a.tags=[],c.length>2&&c[2].split(",").forEach(function(b){a.tags.push(b.trim())})}return a}})}(),Stem.Models=Stem.Models||{},function(){"use strict";Stem.Models.Group=Backbone.Model.extend({url:function(){return Stem.config.oae.protocol+"//"+Stem.config.oae.host+"/api/group/"+this.id},parse:function(a){a.description=a.description||"",a.displayName=a.displayName||"",a.thumbnailUrl=a.thumbnailUrl||"",a.profilePath=a.profilePath||"";var b=["elementary","middle","high"];if(a.displayName){var c=a.displayName.split(" - ").map(function(a){return a.trim()});if(a.displayName=c[0],c.length>1){var d=c[1].split(",").map(function(a){return a.trim().toLowerCase()});b.forEach(function(b){a[b]=d.some(function(a){return-1!==a.indexOf(b)})})}b.some(function(b){return a[b]})||b.forEach(function(b){a[b]=!0}),a.tags=[],c.length>2&&c[2].split(",").forEach(function(b){a.tags.push(b.trim())})}return a}})}(),Stem.Models=Stem.Models||{},function(){"use strict";Stem.Models.Proposal=Backbone.Model.extend({sync:function(a,b,c){if("read"!==a)throw"Attempt to write read-only Proposal model";return c.dataType="jsonp",Backbone.sync(a,b,c)},url:function(){return"http://api.donorschoose.org/common/json_feed.html?APIKey="+Stem.config.donorsChooseApiKey+"&id="+this.get("id")},initialize:function(){},defaults:{},validate:function(a){return _(a.title).isString()?_(a.thumbImageURL).isString()?_(a.imageURL).isString()?_(a.shortDescription).isString()?_(a.schoolName).isString()?_(a.city).isString()?_(a.fulfillmentTrailer).isString()?_(a.proposalURL).isString()?_(a.povertyLevel).isString()?_(a.totalPrice).isString()?_(a.costToComplete).isString()?_(a.gradeLevel).isObject()&&_(a.gradeLevel.id).isString()?"5"===a.gradeLevel.id?"Proposal is for adult education":void 0:"Proposal doesn't have a valid grade level":"Proposal doesn't have a valid cost to complete":"Proposal doesn't have a valid total price":"Proposal doesn't have a valid poverty level":"Proposal doesn't have a valid proposal URL":"Proposal doesn't have a valid fulfillment trailer":"Proposal doesn't have a valid city":"Proposal doesn't have a valid school":"Proposal doesn't have a valid description":"Proposal doesn't have a valid image":"Proposal doesn't have a valid thumbnail image":"Proposal doesn't have a valid title"},parse:function(a){return a.proposals&&_(a.proposals).isArray()?a.proposals[0]:a}})}(),Stem.Models=Stem.Models||{},function(){"use strict";Stem.Models.Tag=Backbone.Model.extend({defaults:{selected:!1}})}(),Stem.Models=Stem.Models||{},function(){"use strict";Stem.Models.TagSet=Backbone.Model.extend({defaults:{tags:[],title:"Tags"},getSelectedTags:function(){return this.get("tags").getSelectedTags()}})}(),Stem.Collections=Stem.Collections||{},function(){"use strict";Stem.Collections.Content=Backbone.Collection.extend({model:Stem.Models.Content,initialize:function(a,b){var c=b||{};this.options={},this.options.limit=c.limit,this.options.keywords=c.keywords},url:function(){return Stem.config.oae.protocol+"//"+Stem.config.oae.host+"/api/search/general?resourceTypes=content&scope=_tenant"+(this.options.limit?"&limit="+this.options.limit:"")+(this.options.keywords?"&q="+this.options.keywords:"")},parse:function(a){return a.results?a.results:a},getTags:function(){var a=[];return this.models.forEach(function(b){b.get("tags").forEach(function(b){a.some(function(a){return a===b})||a.push(b)})}),a}})}(),Stem.Collections=Stem.Collections||{},function(){"use strict";Stem.Collections.Groups=Backbone.Collection.extend({model:Stem.Models.Group,initialize:function(a,b){var c=b||{};this.options={},this.options.limit=c.limit,this.options.keywords=c.keywords},url:function(){return Stem.config.oae.protocol+"//"+Stem.config.oae.host+"/api/search/general?resourceTypes=group&scope=_tenant"+(this.options.limit?"&limit="+this.options.limit:"")+(this.options.keywords?"&q="+this.options.keywords:"")},parse:function(a){return a.results?a.results:a},getTags:function(){var a=[];return this.models.forEach(function(b){b.get("tags").forEach(function(b){a.some(function(a){return a===b})||a.push(b)})}),a}})}(),Stem.Collections=Stem.Collections||{},function(){"use strict";Stem.Collections.Proposals=Backbone.Collection.extend({model:Stem.Models.Proposal,initialize:function(a,b){var c=b||{};this.options={};var d={"Health & Life Science":"4","Applied Science":"6","Environmental Science":"7",Mathematics:"8"};this.options.subject=c.subject&&d[c.subject]?d[c.subject]:"-4";var e={primary:"1",elementary:"2",middle:"3",high:"4",adult:"5"};c.grade&&e[c.grade]&&(this.options.grade=e[c.grade]);var f={urgency:"0",poverty:"1",cost:"2",popularity:"4",expiration:"5",newest:"7"};c.sortBy&&f[c.sortBy]&&(this.options.sortBy=f[c.sortBy]),this.options.maxSize=c.maxSize,this.options.keywords=c.keywords,this.options.historical=c.historical},sync:function(a,b,c){if("read"!==a)throw"Attempt to write read-only Proposals collection";return c.dataType="jsonp",Backbone.sync(a,b,c)},url:function(){return"http://api.donorschoose.org/common/json_feed.html?APIKey="+Stem.config.donorsChooseApiKey+"&state=GA&subject4="+this.options.subject+(this.options.grade?"&gradeType="+this.options.grade:"")+(this.options.keywords?'&keywords="'+encodeURIComponent(this.options.keywords)+'"':"")+(this.options.maxSize?"&max="+this.options.maxSize:"")+(this.options.historical?"&historical=true":"")+(this.options.sortBy?"&sortBy="+this.options.sortBy:"")},fetch:function(a){return Backbone.Collection.prototype.fetch.call(this,_({}).extend(a,{validate:!0}))},parse:function(a){return a.proposals}})}(),Stem.Collections=Stem.Collections||{},function(){"use strict";Stem.Collections.Tags=Backbone.Collection.extend({model:Stem.Models.Tag,getSelectedTags:function(){return this.filter(function(a){return a.get("selected")}).map(function(a){return a.get("label")})}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.CompletedProposalAsFeaturedDetailsItem=Backbone.View.extend({template:JST["app/scripts/templates/completedProposalAsFeaturedDetailsItem.ejs"],tagName:"div",id:"",className:"featured__details__item",events:{},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.CompletedProposalsAsFeaturedDetails=Backbone.View.extend({template:JST["app/scripts/templates/completedProposalsAsFeaturedDetails.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.collection,"reset sync",this.render)},render:function(){var a=this.$el;return a.html(this.template()),this.collection.each(function(b){var c=new Stem.Views.CompletedProposalAsFeaturedDetailsItem({model:b});c.render(),a.find(".featured__details__listing").append(c.el)}),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.ContentAsFeaturedDetailsItem=Backbone.View.extend({template:JST["app/scripts/templates/contentAsFeaturedDetailsItem.ejs"],tagName:"div",id:"",className:"featured__details__item",events:{},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.ContentAsFeaturedDetails=Backbone.View.extend({template:JST["app/scripts/templates/contentAsFeaturedDetails.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.collection,"reset sync",this.render)},render:function(){var a=this.$el;return a.html(this.template()),this.collection.each(function(b){var c=new Stem.Views.ContentAsFeaturedDetailsItem({model:b});c.render(),a.find(".featured__details__listing").append(c.el)}),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.GroupAsFeaturedDetailsItem=Backbone.View.extend({template:JST["app/scripts/templates/groupAsFeaturedDetailsItem.ejs"],tagName:"div",id:"",className:"featured__details__item",events:{},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.GroupsAsFeaturedDetails=Backbone.View.extend({template:JST["app/scripts/templates/groupsAsFeaturedDetails.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.listenTo(this.collection,"reset sync",this.render)},render:function(){var a=this.$el;return a.html(this.template()),this.collection.each(function(b){var c=new Stem.Views.ContentAsFeaturedDetailsItem({model:b});c.render(),a.find(".featured__details__listing").append(c.el)}),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.TagAsVerticalSelectionItem=Backbone.View.extend({template:JST["app/scripts/templates/tagAsVerticalSelectionItem.ejs"],events:{"change input":"change"},change:function(){var a=this.$el.find("input").is(":checked");this.model.set("selected",a)},initialize:function(){return this.listenTo(this.model,"change",this.render),this},render:function(){return this.$el.html(this.template(_(this.model.toJSON()).extend({id:_.uniqueId()}))),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.TagsAsVerticalSelection=Backbone.View.extend({template:JST["app/scripts/templates/tagsAsVerticalSelection.ejs"],initialize:function(){this.listenTo(this.collection,"sync reset",this.render)},render:function(){var a=this.$el;return a.html(this.template()),this.collection.each(function(b){var c=new Stem.Views.TagAsVerticalSelectionItem({model:b});c.render(),a.append(c.el)}),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.TagSetAsVerticalSelection=Backbone.View.extend({template:JST["app/scripts/templates/tagSetAsVerticalSelection.ejs"],render:function(){var a=this.$el;a.html(this.template(this.model.toJSON()));var b=new Stem.Views.TagsAsVerticalSelection({collection:this.model.get("tags")});return b.render(),a.find("fieldset").append(b.el),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.TagAsHorizontalSelectionItem=Backbone.View.extend({template:JST["app/scripts/templates/tagAsHorizontalSelectionItem.ejs"],tagName:"span",events:{"change input":"change"},change:function(){var a=this.$el.find("input").is(":checked");this.model.set("selected",a)},initialize:function(){return this.listenTo(this.model,"change",this.render),this},render:function(){return this.$el.html(this.template(_(this.model.toJSON()).extend({id:_.uniqueId()}))),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.TagsAsHorizontalSelection=Backbone.View.extend({template:JST["app/scripts/templates/tagsAsHorizontalSelection.ejs"],tagName:"span",initialize:function(){this.listenTo(this.collection,"sync reset",this.render)},render:function(){var a=this.$el;return a.html(this.template()),this.collection.each(function(b){var c=new Stem.Views.TagAsHorizontalSelectionItem({model:b});c.render(),a.append(c.el)}),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.TagSetAsHorizontalSelection=Backbone.View.extend({template:JST["app/scripts/templates/tagSetAsHorizontalSelection.ejs"],tagName:"span",render:function(){var a=this.$el;a.html(this.template(this.model.toJSON()));var b=new Stem.Views.TagsAsHorizontalSelection({collection:this.model.get("tags")});return b.render(),a.find("fieldset").append(b.el),this}})}(),Stem.Views=Stem.Views||{},function(){"use strict";Stem.Views.Teachers=Backbone.View.extend({filters:{grade:[],content:{tags:[]},group:{tags:[]}},filterModel:function(a,b){var c=this.gradeTagSet.getSelectedTags(),d=0===c.length||a.get("primary")&&-1!==_(c).indexOf("K-2")||a.get("elementary")&&-1!==_(c).indexOf("3-5")||a.get("middle")&&-1!==_(c).indexOf("6-8")||a.get("high")&&-1!==_(c).indexOf("9-12"),e=!_.isArray(b)||0===b.length||_(a.get("tags")).any(function(a){return-1!==b.indexOf(a)});return d&&e},setupContent:function(){this.content=new Stem.Collections.Content([],{limit:99}),this.contentTags=new Stem.Collections.Tags,this.contentTagSet=new Stem.Models.TagSet({tags:this.contentTags,title:"Subjects"}),this.content.on("sync reset",this.updateContentTags,this),this.contentTags.on("change",this.updateContentFilters,this),this.content.fetch()},updateContentTags:function(){this.contentTags.reset(this.content.getTags().map(function(a){return new Stem.Models.Tag({selected:!1,label:a})}))},updateContentFilters:function(){this.filters.content.tags=this.contentTagSet.getSelectedTags(),this.filteredContent.refilter()},setupGroups:function(){this.groups=new Stem.Collections.Groups([],{limit:99}),this.groupTags=new Stem.Collections.Tags,this.groupTagSet=new Stem.Models.TagSet({tags:this.groupTags,title:"Topics"}),this.groups.on("sync reset",this.updateGroupTags,this),this.groupTags.on("change",this.updateGroupFilters,this),this.groups.fetch()},updateGroupTags:function(){this.groupTags.reset(this.groups.getTags().map(function(a){return new Stem.Models.Tag({selected:!1,label:a})}))},updateGroupFilters:function(){this.filters.group.tags=this.groupTagSet.getSelectedTags(),this.filteredGroups.refilter()},setupProposals:function(){this.completedProposals=new Stem.Collections.Proposals([],{historical:!0,maxSize:5}),this.completedProposals.fetch()},setupGradeLevels:function(){this.gradeTags=new Stem.Collections.Tags([new Stem.Models.Tag({selected:!1,label:"K-2"}),new Stem.Models.Tag({selected:!1,label:"3-5"}),new Stem.Models.Tag({selected:!1,label:"6-8"}),new Stem.Models.Tag({selected:!1,label:"9-12"})]),this.gradeTagSet=new Stem.Models.TagSet({tags:this.gradeTags,title:"Grade level"}),this.gradeTags.on("change",this.updateContentFilters,this).on("change",this.updateGroupFilters,this)},initialize:function(){var a=this;this.setupContent(),this.setupGroups(),this.setupProposals(),this.setupGradeLevels(),this.filteredContent=new FilteredCollection(this.content),this.filteredContent.filterBy(function(b){return a.filterModel(b,a.filters.content.tags)}),this.filteredGroups=new FilteredCollection(this.groups),this.filteredGroups.filterBy(function(b){return a.filterModel(b,a.filters.group.tags)})},render:function(){new Stem.Views.TagSetAsHorizontalSelection({el:$("#grade-selection")[0],model:this.gradeTagSet}).render().$el.find("label.horizontal-selection__label").text("I teach:"),new Stem.Views.TagSetAsVerticalSelection({el:$("#content-tags")[0],model:this.contentTagSet}).render(),new Stem.Views.TagSetAsVerticalSelection({el:$("#content-grades")[0],model:this.gradeTagSet}).render(),new Stem.Views.ContentAsFeaturedDetails({collection:this.filteredContent,el:$("#content-details")[0]}).render(),new Stem.Views.TagSetAsVerticalSelection({el:$("#group-tags")[0],model:this.groupTagSet}).render(),new Stem.Views.TagSetAsVerticalSelection({el:$("#group-grades")[0],model:this.gradeTagSet}).render(),new Stem.Views.GroupsAsFeaturedDetails({collection:this.filteredGroups,el:$("#group-details")[0]}).render(),new Stem.Views.CompletedProposalsAsFeaturedDetails({collection:this.completedProposals,el:$("#proposals-details")[0]}).render()}})}(),Stem.Routers=Stem.Routers||{},function(){"use strict";Stem.Routers.App=Backbone.Router.extend({routes:{"":"landing",teachers:"teachers",schools:"schools",industry:"industry"},loadPage:function(a){$("section").not("#"+a+"_page").removeClass("show").addClass("hide"),$("section#"+a+"_page").removeClass("hide").addClass("show"),$(".header").attr("data-section",a),$("#nav-toggle").prop("checked",0),$("main").attr("data-nav-expanded",!1),_.defer(window.scrollTo,0,0)},landing:function(){this.loadPage("landing")},teachers:function(){this.loadPage("teachers")},schools:function(){this.loadPage("schools")},industry:function(){this.loadPage("industry")},initialize:function(){$("section").each(function(){var a=$(this).attr("id");$(this).attr("id",a+"_page")}),Backbone.history.start(),this.teacher=(new Stem.Views.Teachers).render()}})}();