window.onload = function()
{
    let postDiv = document.getElementByID("defaultPostTemplate");

    postDiv.src = "IMAGE LINK";
    
    document.getElementByID("feed").innerHTML = postDiv;
};
