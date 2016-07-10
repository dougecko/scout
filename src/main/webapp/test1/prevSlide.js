var constructPrevSlideButton = function(){
    if (shouldModifyConversationFunction()){
        return $("<button/>",{
            id: "addSlideButton",
            class:"toolbar fa fa-plus btn-icon nmt",
            name: "addSlideButton",
            type: "button"
        }).append($("<div class='icon-txt'>Add Slide</div>")).on("click",bounceAnd(function(){
            var currentJid = currentConversation.jid;
            var currentSlideIndex = currentConversation.slides.filter(function(slide){return slide.id == currentSlide;})[0].index;
            var newIndex = currentSlideIndex + 1;
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
        }));
    } else {
        return $("<div/>");
    }
}