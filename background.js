'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    //console.log("The color is green.");
	alert("lulu");
  });
});

//chrome.windows.onRemoved.addListener(function(windowId) {
	//alert(windowId);
	//createBookmarkFolder(windowId);
//});

chrome.browserAction.onClicked.addListener(function(tab) { 

chrome.windows.getCurrent(function(window){
	//alert(window.id);
	createBookmarkFolder(window.id);
});

	//alert('icon clicked')
	//createABookmarkFolder();
	//getWindowId();
});

function createBookmarkFolder(windowId){
    chrome.bookmarks.create({
      title: "" + windowId,
      url: null
    }, function(bookmarkItem){
//			alert(windowId);
		  	createBookmarks(windowId, bookmarkItem);
	});
}

function onBookmarkFolderAdded(bookmarkItem, windowId) {
  	createBookmarks(windowId, bookmarkItem);
}

function createBookmarks(windowId, bookmarkItem){
	//alert(bookmarkItem);
	
		chrome.tabs.query({
			currentWindow: true
		},function(tabs) {
		//alert(tabs);
		
		var i;
			for(i=0; i<tabs.length; i++){
				createSingleBookmark(bookmarkItem, tabs[i]);
			}
		});
}

function createSingleBookmark(bookmarkItem, tab) {
		chrome.bookmarks.create({
		parentId: bookmarkItem.id,
		  title: tab.title,
		  url: tab.url
    }, onSingleBookmarkAdded);
	
}



function onSingleBookmarkAdded(bookmarkItem) {
  	//createBookmarks(windowId, bookmarkItem);
}
function getWindowId(){
	chrome.windows.getCurrent(function(window){
	alert(window.id);

	});
}