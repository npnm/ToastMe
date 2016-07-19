# ToastMe (A Toast Notification Popup)
ToastMe is jQuery plugin to show toast notification popup in html just like the toast notification in Android 

Try a Demo:
[Demo1](https://rawgit.com/npnm/ToastMe/master/examples/toast-popup-demo.html)
[Demo2](https://rawgit.com/npnm/ToastMe/master/examples/toast-popup-demo2.html)

## How to use

1. Add toastme stylesheet
   
      ```HTML
      <link href="dist/css/toastme.css" rel="stylesheet" />
      ```
   
2. Add jquery and toastme.js into the html page

      ```HTML
      <script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
      <script src="dist/js/toastme.js"></script>
      ```
      
3. Insert a div tag with CSS class “toast-popup” and provide an appropriate id also.

   Eg:
      ```HTML
      <div id="myToast" class="toast-popup"></div>
      ```
4.	Now you done with setup of toast popup plugin.

   You can use this toastme to show any kind of status message to user and it will be more useful when you are dealing with an ajax request in your page.

   After you setup the plugin, you can call showToast() method anytime whenever you want to show a notification to user. 
   
   Eg:
      ```javascript
      $('#myToast').showToast({
         message: 'The table got updated successfully',
         duration: 3000,
         mode: 'success'
      });
      ```
   ### Syntax
      ```javascript
      $('<selector for toast-popup div tag>').showToast([options]);
      ````
      
   	* **options**  
   	Type: PlainObject  
   	A set of key/value that configure the toast popup. All are optional.  
   	  
		* **message** (default: 'This is toast notification!')  
		Type: String  
		The message to be shown to user using toast popup. If it is emply the default message will shown  

		* **duration** (default: 1500ms)  
		Type: Number  
		The number of milliseconds determining how long the popup has to be displayed on screen  

		* **mode** (default: 'info')  
		Type: String  
		A pre-defined value determining the color of popup. You can show any kind of messages to user using these different modes of toast popup.  
		Possible values are: __*'info'*__, __*'success'*__, __*'warning'*__, __*'error'*__   

 
  
Refer the demo code for further reference.
