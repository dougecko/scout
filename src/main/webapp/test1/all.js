var constructAddSlideButton = function(name,desc,faIcon,increment){
    if (shouldModifyConversationFunction()){
        var classy = jQuery.validator.format("toolbar fa {0} btn-icon nmt",faIcon);
        return $("<button/>",{
            id: name,
            class:classy,
            name: name,
            type: "button"
        }).append($("<div/>",{text:desc, "class":"icon-txt"})).on("click",bounceAnd(function(increment2){
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