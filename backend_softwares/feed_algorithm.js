window.onload = function()
{
    // Foreach post box on home page.

    getElementsByQuery(classname="feed-box");
    
    let postDiv = document.getElementByID("defaultPostTemplate");

    postDiv.src = "IMAGE LINK";
    
    document.getElementByID("feed").innerHTML = postDiv;
};
