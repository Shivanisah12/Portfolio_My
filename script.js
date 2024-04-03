const submit = document.getElementById("hello_submit");
const form1 = document.getElementById("name");
const form2 = document.getElementById("email");
const form3 = document.getElementById("msg");

submit.addEventListener("click", () => {
    if (form1.value === "") {
        alert("Please fill out Name❗");
    } else if(form2.value === "") {
        alert("Please fill out Email❗"); 
    }else if(form3.value === "") {
        alert("Please fill out message❗"); 
    }else{
        alert("SUCCESFULLY✅")
    }
});
