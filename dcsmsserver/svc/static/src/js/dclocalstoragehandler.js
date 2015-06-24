/*
 * Module to help maintain state in local storage.
 * Provides helper functions to save a key-value pair in the local storage
 * and read it back.
 * Author : Sudhir Murthy
 * Date   : 27-Apr-2015.
 * Uses   : Yahoo JS Module pattern.
 * (c) DigiCollect GIS. All Rights Reserved.
 */
var localStorageHandler = function () {
    var localStorageAvailable = false;
 	return {
 		isLocalStorageAvailable: function(){
 			if (typeof(localStorage) == 'undefined'){
				console.log("Your Browser does not support HTML5 localstorage.");
				localStorageAvailable = false;
				return localStorageAvailable;
			}
			else{
				localStorageAvailable = true;
				return localStorageAvailable;
			}
		},
		getValue : function(key){
			return localStorage.getItem(key);
		},
		setValue : function(key,value){
			try{
				localStorage.setItem(key,value);
			}catch(e){
				if (e == QUOTA_EXCEEDED_ERR){
					console.log("Local storage quota exceeded. save failed..");
					return false;
				}
			}
			return true;
		}
 	};
}();