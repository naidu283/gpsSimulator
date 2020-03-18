
let ipAddress = "localhost";
let port  = 3000;
let heartBeatPacketReq;
function sendRequest(){

  
   let loginPacket = document.getElementById("logingRequest").value;
             

   if (loginPacket == '')
   {
    alert("Please fill the login field");
   }
  else 
  {
      let url  = `http://localhost:3000/loginPacket`;
    $.ajax({
        url: url,
        type: "post",
        async: false,
        data: JSON.stringify({
            loginRequest: loginPacket
        }),
        headers: {
            "Content-Type": "application/json",
        },
        dataType: "json",
        success: function (data) {
       

        console.log(data);
        let {status, loginResponse} = data;
        document.getElementById("loginResponse").value = loginResponse;

        document.getElementById("loginStatus").value = status;
        
            
        },
        error: function (data) {
            console.error(data);
            $.growl.error({
                title: "",
                message: "Services not working.Please check your internet connection."
            });
        }
    });
    
  }
}


function sendGPSRequest()
{
    let GPSLocationPacket = document.getElementById("GPSLocationPacket").value;
             

    if (GPSLocationPacket == '')
    {
     alert("Please fill required  field");
    }
   else 
   {
      
       let url  = `http://localhost:3000/gpsPacket`;
     $.ajax({
         url: url,
         type: "post",
         async: false,
         data: JSON.stringify({
            gpsRequest: GPSLocationPacket
         }),
         headers: {
             "Content-Type": "application/json",
         },
         dataType: "json",
         success: function (data) {
        
 
         console.log(data);
         let {status, response} = data;
         document.getElementById("gpsResponse").value = response;
 
         document.getElementById("gpsStatus").value = status;
         
             
         },
         error: function (data) {
             console.error(data);
             $.growl.error({
                 title: "",
                 message: "Services not working.Please check your internet connection."
             });
         }
     });
     
   }
}

function sendHeartbeatRequest()
{
    let heartBeatPacket = document.getElementById("heartbeatPacket").value;
             

    if (heartBeatPacket == '')
    {
     alert("Please fill required  field");
    }
   else 
   {

    heartBeatPacketReq = heartBeatPacket;
       let url  = `http://localhost:3000/heartbeatPacket`;
     $.ajax({
         url: url,
         type: "post",
         async: false,
         data: JSON.stringify({
            heartbeatRequest: heartBeatPacketReq
         }),
         headers: {
             "Content-Type": "application/json",
         },
         dataType: "json",
         success: function (data) {
        
 
         console.log(data);
         let {status, response} = data;
         document.getElementById("heartbeatResponse").value = response;
 
         document.getElementById("heartbeatStatus").value = status;
         
             
         },
         error: function (data) {
             console.error(data);
             $.growl.error({
                 title: "",
                 message: "Services not working.Please check your internet connection."
             });
         }
     });
     
   }
}

function automate()
{



    setInterval(()=>{
     
   
        sendGPSRequest2();
        sendHeartbeatRequest();

    }, 3000)
}

