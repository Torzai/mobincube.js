
////////////////////////////////////////// Define Actions //////////////////////////////////////////
function Action(){    }
Action.prototype.setWindowLocation = function(uri){
    window.location = "mobincube://action/" + uri;
}
Action.prototype.openSection = function(sectionName){
    this.setWindowLocation("section/"+encodeURIComponent(sectionName));
}
Action.prototype.openView = function (viewName) {
    this.setWindowLocation("view/"+encodeURIComponent(viewName));
}
Action.prototype.call = function (phone) {
    this.setWindowLocation("call/"+encodeURIComponent(phone));
}
Action.prototype.openBrowser = function (URL) {
    this.setWindowLocation("browser/"+encodeURIComponent(URL));
}
Action.prototype.sendSMS = function (phone, text) {
    this.setWindowLocation("sms/"+encodeURIComponent(phone + " " + text));
}
Action.prototype.route = function (latitude, longitude, label) {
    this.setWindowLocation("route/"+encodeURIComponent(latitude+","+longitude+ " " +label));
}
Action.prototype.share = function (text) {
    this.setWindowLocation("share/"+encodeURIComponent(text));
}
Action.prototype.nextItem = function () {
    this.setWindowLocation("next");
}
Action.previousItem = function () {
    this.setWindowLocation("previous");
}
Action.prototype.openInterstitial = function () {
    this.setWindowLocation("interstitial");
}
Action.prototype.play = function (resourceName, boolean) {
    var on = false;
    if(boolean === true){   on = true;  };
    this.setWindowLocation('play/{"resource":"'+encodeURIComponent(resourceName)+'","loop":"'+on+'"}');
}
Action.prototype.stop = function (resourceName) {
    this.setWindowLocation('stop/{"resource":"'+encodeURIComponent(resourceName)+'"}');
}
Action.prototype.openPlayer = function (URL) {
    this.setWindowLocation('player/{"resource":"'+encodeURIComponent(URL)+'"}');
};


///////////////////////////////////////////// Define Params ///////////////////////////////////////////

function Params(){
        this.appId,          this.deviceInfo,   this.adminArea,      this.subAdminArea,     this.dataConnection, this.postalCode,
        this.deviceType,     this.osVersion,    this.locality,       this.subLocality,      this.density,        this.country,
        this.language,       this.screenSize,   this.postalCode,     this.address,          this.subLocality,    this.subAdminArea,
        this.sectionName,    this.country,      this.ISOCountry,     this.dataConnection,   this.address,        this.locality,
        this.density,        this.session,      this.location

        this.callParams();
                };

Params.prototype.getParams = function(instance,idApp,deviceInfo,deviceType,osVersion,language,screenSize,sectionName,IP, token,carrierName, bundleID,appBuildTime, appVersion, location){
        this.instance = instance;           this.appId = idApp;                this.carrierName = carrierName;     this.bundleID = bundleID;
        this.deviceInfo = deviceInfo;       this.deviceType = deviceType;      this.IP = IP;                       this.token = token;
        this.osVersion = osVersion;         this.language = language;          this.screenSize = screenSize;       this.sectionName = sectionName;
        this.appBuildTime = appBuildTime;   this.appVersion = appVersion;      this.location   = location;
    };

Params.prototype.getLocationParams= function(country,ISOCountry,dataConnection, postalCode, address,locality,subLocality,adminArea,subAdminArea,density,session){
        this.country =  country;                   this.ISOCountry =  ISOCountry;   this.dataConnection = dataConnection;      this.postalCode = postalCode;
        this.address = address;                    this.locality = locality;        this.subLocality = subLocality;            this.adminArea =  adminArea;
        this.subAdminArea = subAdminArea;          this.density =  density;         this.session =  session;
    };

Params.prototype.callParams = function() {
    window.location.href = "mobincube://javascript/mobincube.params.getParams('{instance}','{idApp}', '{deviceInfo}', '{deviceType}','{osVersion}','{language}','{screenSize}', '{sectionName}', '{IP}', '{token}','{carrierName}', '{bundleID}', '{appBuildTime}','{appVersion}', '{location}')";
};
Params.prototype.callLocationParams = function(){
    window.location.href = "mobincube://javascript/mobincube.params.getLocationParams('{country}','{ISOCountry}', '{dataConnection}', '{postalCode}', '{address}','{locality}', '{subLocality}','{adminArea}', '{subAdminArea}', '{density}', '{session}')";
};


//////////////////////////////////////  Module Login /////////////////////////////////////////////


function Login() {

    
//////////////////////////////////// Import ParseJS Library //////////////////////////////////////
    var script = document.createElement("script");
    script.src = "http://www.parsecdn.com/js/parse-1.4.2.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);


/////////////////////////////////// Create a Template /////////////////////////////////////////////

    
    this.loginTemplate  = '<style>html,body{width:100%;height:100%;font-family:Tahoma, Geneva, sans-serif;} .login{ width:285px; height:285px; overflow:hidden; background:#DDDDDD;border-radius:6px;position:absolute;left:50%;top:50%;margin-left:-150px;margin-top:-142px;} .login  .title{width:298px;height:14px;padding-top:13px;padding-bottom:13px;font-size:14px;text-align:center;color:#FFFFFF;font-weight:bold;background:#d40066;margin-bottom:30px;border-top-right-radius:6px;border-top-left-radius:6px;} .login form{width:240px;height:auto;overflow:hidden;margin-left:auto;margin-right:auto;}.login form input[type=text], .login form input[type=password]{width:200px;font-size:12px;padding-top:14px;padding-bottom:14px;padding-left:40px;border:none;color:#bfbfbf; background:#FFFFFF; outline:none; margin:0;} .login form input[type=text]{border-top-left-radius:6px;border-top-right-radius:6px;margin-left: 15px;}.login form input[type=password]{border-bottom-left-radius:6px;border-bottom-right-radius:6px;margin-left: 15px;}.login form .enviar{width:240px;height:12px;display:block;padding-top:14px;padding-bottom:14px;border-radius:6px;background:#d40066;text-align:center;text-decoration:none;font-size:12px;font-weight:bold;color:#FFF;}.login .accountoptions{ width:240px; height:auto; overflow:hidden;padding-top:25px;padding-bottom:25px;font-size:10px;text-align:center;}.login .accountoptions .col{ width:100%;height:auto;float:left;} .login .accountoptions .col a{color:#676767;text-decoration:none;}</style><body><section class="login"><div class="title"></div><form action="#" method="post" enctype= "application/x-www-form-urlencoded"><input type="text" id="username" required placeholder="Username" data-icon="U"><input type="password" id="password" required placeholder="Password" data-icon="x"><div class="accountoptions"><div class="col"><a href="#" onclick="signup()">Create account</a></div></div><a href="#" class="enviar" id="enviar">Entrar</a></form></section></body>';

    this.success;
        
////////////////////////////////  Default error login template ///////////////////////////
    this.error   = this.loginTemplate;
}

///////////////////////////////// Inicialize Parse Library ///////////////////////////////

Login.prototype.initialize = function (api, key, template, error){
    Parse.initialize(api,key);
    this.success = template;
    if(error === null){
    this.error   = this.loginTemplate;
    }else {
    this.error = error;
    }
    document.body.innerHTML = this.loginTemplate;
};

/////////////////////////////  Login Function  //////////////////////////////////////////

Login.prototype.logIn = function (username, password){
    Parse.User.logIn( username , password,{
        success: function(user) {       mobincube.action.openSection(mobincube.modules.login.success);  },
        error: function(user, error) {  mobincube.action.openSection(mobincube.modules.login.error);    }
    });
};
/////////////////////////////// Create Account //////////////////////////////////////////

Login.prototype.signUp = function(){
    try{
        var user = new Parse.User();
        user.set("username", document.getElementById("login").value );
        user.set("password", document.getElementById("password").value );
        user.signUp(null, {
            success: function(user) {        alert("User "+user.get("username")+" created!");      },
            error: function(user, error) {   alert("Error: " + error.code + " " + error.message);  }
        });
    }catch(err) {}
}

////////////////////////////Declare Modules ////////////////////////////////////////////

function Modules() {
    this.login = new Login();
}

function Mobincube() {
    this.action = new Action();
    this.params   = new Params();
    this.modules  = new Modules();
}


//////////////////////////////////////



/*
    {isappnstalled:bundleApp}
    yes / no

*/
