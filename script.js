function sendMessage(){
    const userInput = document.getElementById("userInput");
    createchatmessage(userInput.value,"user");
    userInput.value="";
    // godown();
}

function createchatmessage(message,sender){
    const chatmassage =document.createElement("div");
    const senderimg =document.createElement("img");
    const para = document.createElement("p");
    senderimg.src = sender === "user" ? "src/user.png" : "src/logo.png";
    chatmassage.classList.add(sender);
    senderimg.classList.add('logo')
    chatmassage.classList.add("chatmessage");
    para.classList.add("message");
    para.innerText=message;
    chatmassage.appendChild(para);
    chatmassage.appendChild(senderimg);
    const container =document.querySelector(".chatMessage");
    container.appendChild(chatmassage);
    chatBotResponse(message);
}
function chatBotResponse(message){
    fetch("http://localhost:5000/api/chat")
    
    .then(response => response.json())
    .then(data => {
        createchatmessage(data.reply, "bot");
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function godown(){
    const container = document.querySelector(".chatMessage");
    container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth"
    });
}
