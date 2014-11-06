var blockStyle = "width: 150px;height: 150px;margin: 20px;float: left;display: block";

var listItems = [];

var grabImageFromListItem = function(listItem){
	return listItem.children[0].getAttribute('href');
}

var createImageBlock = function(image){
	var anchorTag = document.createElement("a");
	anchorTag.setAttribute("href", image);
	var imageTag = document.createElement("img");
	imageTag.setAttribute("src", image);
	imageTag.setAttribute("style", blockStyle);
	anchorTag.appendChild(imageTag);
	return anchorTag;
}

var init = function(){
	listItems = document.getElementsByTagName('li');
	
	if(listItems[0].children[0].innerHTML.indexOf("Parent") != -1)
		listItems = Array.prototype.slice.call(listItems).slice(1);

	var body = document.getElementsByTagName('body')[0];
	body.innerHTML = "";

	listItems.forEach(function(item){
		var imgUri = grabImageFromListItem(item);
		var block = createImageBlock(imgUri);
		body.appendChild(block);
	});
}