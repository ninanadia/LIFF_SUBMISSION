window.onload = function(){
    const defaultLiffId = "1653721951-VRbmaYay";
    let myLiffId = "";
    myLiffId = defaultLiffId;
    initializeLiffOrDie(myLiffId);
};

function initializeLiffOrDie(myLiffId) {
    if (!myLiffId) {
        window.alert("error");
    } else {
        initializeLiff(myLiffId);
    }
}

function initializeLiff(myLiffId){
    liff
        .init({
            liffId: myLiffId
        })
        .then(()=> {
            // start to use LIFF's api
            intializeApp();
        })
        .catch((error)=>{
            document.getElementById("liffAppContent").classList.add('hidden');
            document.getElementById("liffInitErrorMessage").classList.remove('hidden');
        });
}

function intializeApp(){
    playerButtonHandlers();
    browserButtonHandlers();
    
}

function playerButtonHandlers(){
document.getElementById('liff_profile').addEventListener('click',function(){
liff.getProfile().then(profile => {
    liff.sendMessages([
    {
        type: 'text',
        text: 'Player : ' + profile.displayName
    }
    ]).then(function(){
        liff.closeWindow();
    }).catch(function(error){
        window.alert("error getting profile");
    });
});
});
}

function browserButtonHandlers(){
document.getElementById('liff').addEventListener('click',function(){    
liff.openWindow({
  url:'https://crosswordnnliff.herokuapp.com/',
  external:true
})
});
}