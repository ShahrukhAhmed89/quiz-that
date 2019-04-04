window.onload=function(){(function(b){function c(F,G){d3.selectAll(".feature").on("click",null),e(F,G)}function e(F,G){var H=G.getAttribute("value"),I=q[count].toLocaleLowerCase().replace(/ /g,"_");H==q[count]?(score++,d3.select(G).attr("data-value","checked").attr("class","ansCorrect").style("fill","#77dd77").on("click",null),text="Correct",color="green",classed="resultanimationright"):(d3.select("#id_"+I).attr("data-value","checked").style("fill","#ff6961").attr("class","ansWrong"),text="No, this is "+F.properties.name,color="#d00316",classed="resultanimationwrong"),count++,C.attr("class",classed).style("color",color).text(text).style("transform","scale(1)").style("opacity",1).transition().duration(2500).style("transform","scale(0)").style("opacity",0),setTimeout(h,2500)}function f(F){var G=this.getAttribute("data-value");G&&(label=F.properties.name,D.classed("hidden",!1).style("top",event.pageY-180+"px").style("left",event.pageX-115+"px").style("opacity",.9).html(label))}function h(){count>=q.length?(d3.selectAll(".non-feature").attr("class","feature").on("click",null),y.style("opacity",1).transition().duration(500).style("opacity",0),z.attr("class","geoquestion fade-in").html("<span class='showScoreBackground' style='color:white'>Check Your Score <i class='fa fa-play'></span>").on("click",l)):(d3.selectAll(".feature").on("click",function(F){target=this,c(F,target)}),i(q[count]))}function i(F){y.text("Where is  ").append("span").text(F+"?")}function k(){A.transition().duration(750).call(w.transform,d3.zoomIdentity)}function l(){d3.select("#root").remove(),d3.select(".geoquestion").remove();var F=d3.select(".quiz-wrapper").append("div").attr("class","display-result fade-in").text("You Scored "),G=F.append("div").attr("class","result");G.append("span").text(score),G.append("span").text(" / "+q.length);var H=d3.select(".display-result").append("div").attr("class","play-next").append("div").attr("class","replay-quiz").append("a").attr("href",window.location.href).append("div").attr("class","replay-icon").text("\u21BA"),I=d3.select(".replay-quiz").append("div").attr("style","margin-top:6%;text-align:center").text("Replay Quiz")}function m(){var G=this.getAttribute("class");("ansCorrect"!=G||"ansWrong"!=G)&&d3.select(this).attr("class","feature mouseOver")}function n(){var G=this.getAttribute("class");("ansCorrect"!=G||"ansWrong"!=G)&&d3.select(this).attr("class","feature mouseOut"),D.classed("hidden",!0)}var q=JSON.parse(b),r=window.innerHeight,s=window.innerWidth,t=960,u={height:1025>s?.65*r:500,scale:768>s?600:400,center:1025>s?-25:-25};count=0,score=0;var v=d3.geoMercator().center([-65,u.center]).scale(u.scale).translate([t/2,u.height/2]),w=d3.zoom().scaleExtent([1,8]).on("zoom",function(){E.style("stroke-width",1.5/d3.event.transform.k+"px"),E.attr("transform",d3.event.transform)}),x=d3.geoPath().projection(v),y=d3.select("#root").insert("h2",":first-child").attr("class","geoquestion"),z=d3.select("#root").insert("h2",":first-child").attr("class","geoquestion"),A=d3.select("#root").append("svg").attr("width","100%").attr("height",u.height).attr("viewBox","0 0 "+t+" "+u.height+" ").attr("style","overflow:hidden").on("click",function(){d3.event.defaultPrevented&&d3.event.stopPropagation()},!0),k=d3.select("#root").append("button").classed("resetMap",!0).on("click",k).text("Zoom Out"),B=d3.select("#root").append("div").attr("class","quizHelp").append("p").text("**Zoom-In/Zoom-Out feature available for the map. Chrome Desktop Recommended**");A.append("rect").attr("class","overlay").attr("width",t).attr("height",u.height);var C=d3.select("#root").append("div"),D=d3.select("#root").append("div").attr("class","tooltip").style("opacity",0),E=A.append("g");A.call(w),d3.json("/static/interactives/fcomsa/sa.json",function(F,G){if(F)throw F;d3.select("#loader").remove();var H=topojson.feature(G,G.objects.subunits),I=E.selectAll(".subunits").data(H.features).enter().append("path").attr("class","feature").attr("value",function(J){return J.properties.name}).attr("id",function(J){return"id_"+J.properties.name.toLocaleLowerCase().replace(/ /g,"_")}).attr("d",x).on("mouseover",m).on("mouseout",n).on("click",function(J){target=this,c(J,target)}).on("mousemove",f);i(q[count])})})(blarb)};