// JavaScript element to validate the form information

function emailcheck(){    /* email check function to make sure the email and confirm email information matches*/
var n = document.getElementById("name").value
var s = document.getElementById("surname").value
var c = document.getElementById("comm").value
                
var e1 = document.getElementById("email_1").value
var e2 = document.getElementById("email_2").value
        
if(n != "" && s != "" && c != ""){ 
    if (e1 != e2){
        alert("Emails are not the same! Please make sure both emails match!") /*if emails do not match an alert that says emails are not the same will show*/
    }else{
        alert("Thank you for messaging us! We will get back to you as soon as we can.") /* if emails match an alert that says your message has been received successfully will show*/
    }
}else{
    alert("Please fill out the form!") /* if left incomplete an alert that says please fill out the form will display*/
}
                
}