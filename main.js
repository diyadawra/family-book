var images = ["family.jpg",
 "maa.jpg" , 
 "papa.jpeg", 
 "me.jpg", 
 "didi.jpg"];
var names = ["Fmaily Book","sara", "Diljeet Singh", "diya", "Alia Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5;
    if(i > numbers_of_family_member_in_array )
{
        i = 0;
}
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
