var fichero;
var app = {  
  

    initialize: function() {  
        this.bindEvents();  
    },  
     
    bindEvents: function() {  
        var takePhoto = document.getElementById('takePhoto');  
        takePhoto.addEventListener('click', app.takePhoto, false);  
        var sendPhoto  = document.getElementById('sendPhoto');  
       sendPhoto.addEventListener('click', app.sendPhoto, false);        
        var win = document.getElementById('win');
        win.addEventListener('click', app.win, false); 
    },  
  
    sendPhoto: function() {  
        
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fichero.substr(fichero.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
   
    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();

    ft.upload(fichero, encodeURI("http://192.168.56.1:8080/phonegapserver/index.php"), app.win, app.fail, options);

    },  
    
    win: function()
    {
        alert("Upload success");
    },
    fail: function()
    {
        alert("Upload error");
    },
    takePhoto: function(){  
        navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20,   
            allowEdit: true, destinationType: navigator.camera.DestinationType.FILE_URL ,sourceType: Camera.PictureSourceType.PHOTOLIBRARY});  
    },  
  
    onPhotoDataSuccess: function(imageData) {  
     
      var photo = document.getElementById('photo');  
  
      photo.style.display = 'block';  
  
      photo.src =  imageData;  
      fichero= photo.src;
      var sendPhoto = document.getElementById('sendPhoto');  
      sendPhoto.style.display = 'block';  
        
    },  
  
    onFail: function(message) {  
      alert('Failed because: ' + message);  
    }  
  
};  