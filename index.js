function sendmail(){
    var params={
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        message :document.getElementById("message").value,
    };

const serviceID ="service_0l29bek";
const templateID="template_2c4042n"
emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("sent");
    }
    );
}