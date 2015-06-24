/*
 * Module to help maintain state in local session.
 * Provides helper functions to save a key-value pair into the local session.
 * and read it back.
 * The only big difference between a local session and local storage to consider is, 
 * local session gets purged after the user closes the browser.
 * Author : Sudhir Murthy
 * Date   : 27-Apr-2015.
 * Uses   : Yahoo JS Module pattern.
 * (c) DigiCollect GIS. All Rights Reserved.
 */
var localSessionHandler = function () {
	return{
		setSession : function(key,value){
			sessionStorage.key = value;
		},
		getSession : function(key){
			return sessionStorage.key;
		}
	};
}();