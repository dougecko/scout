var constructAddSlideButton = function(name,desc,faIcon,increment){
    if (shouldModifyConversationFunction()){
        return $("<button/>",{
            id: name,
            class:"toolbar fa " + faIcon + " btn-icon nmt",
            name: name,
            type: "button"
        }).append($("<div class='icon-txt'/>" + desc + "</div>")).on("click",bounceAnd(function(increment2){
            var currentJid = currentConversation.jid;
            var currentSlideIndex = currentConversation.slides.filter(function(slide){return slide.id == currentSlide;})[0].index;
            var newIndex = currentSlideIndex + increment2;
            addSlideToConversationAtIndex(currentConversation.jid,newIndex);
            Progress.conversationDetailsReceived["JoinAtIndexIfAvailable"] = function(incomingDetails){
                if ("jid" in incomingDetails && incomingDetails.jid == currentJid){
                    if ("slides" in incomingDetails){
                        var newSlide = _.find(incomingDetails.slides,function(s){
                            return s.index == newIndex && s.id != currentSlide;
                        });
                        doMoveToSlide(newSlide.id.toString());
                    }
                }
            };
        }(increment)));
    } else {
        return $("<div/>");
    }
};
var constructAddPrevSlideButton = function(){constructAddSlideButton("prevSlideButton","Prev Slide","fa-minus",-1)};
var constructAddNextSlideButton = function(){constructAddSlideButton("nextSlideButton","Next Slide","fa-plus",1)};