function sendmessage(){
    const userInput = document.getElementById("userInput");
    
    createchatmessage(userInput.value,"user");
    userInput.value="";
}

function createchatmessage(message,sendre){
    const chatmassage =document.createElement("div");
    const senderimg =document.createElement("img");
    const para = document.createElement("p");
    senderimg.src = sendre === "user" ? "src/user.png" : "src/logo.png";
    senderimg.classList.add("logo")
    chatmassage.classList.add("chatmessage");
    para.classList.add("message");
    para.innerText=message;
    chatmassage.appendChild(para);
    chatmassage.appendChild(senderimg);
    const container =document.querySelector(".chatMessage");
    container.appendChild(chatmassage);
}

