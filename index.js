const textInp=document.getElementById("textInp")
const countBtn=document.getElementById("countBtn")
const toLowerBtn=document.getElementById("toLowerBtn")
const toUpperBtn=document.getElementById("toUpperBtn")
const substringBtn=document.getElementById("substringBtn")
const result_box=document.getElementById("result_box")

// Words Count
const countWordsFun=()=>{
    result_box.innerHTML=""
    let textInpValue=textInp.value.trim()

    let textInpValueLength=0
    if (textInpValue!==""){
        textInpValueLength=textInpValue.split(" ").length
    }
    const res=document.createElement("p")
    res.textContent=`Words Count: ${textInpValueLength}`
    result_box.appendChild(res)
}
countBtn.addEventListener("click", countWordsFun)

// Convert into lowercase
const toLowercaseFun=()=>{
    result_box.innerHTML=""
    let textInpValue=textInp.value.trim()

    let tempText=""
    for (let i=0; i<textInpValue.length; i++){
        tempText+=(textInpValue[i].toLowerCase())
    }
    
    const res=document.createElement("p")
    res.textContent=`To Lowercase: ${tempText}`
    result_box.appendChild(res)
}
toLowerBtn.addEventListener("click", toLowercaseFun)

// Convert into uppercase
const toUppercaseFun=()=>{
    result_box.innerHTML=""
    let textInpValue=textInp.value.trim()

    let tempText=""
    for (let i=0; i<textInpValue.length; i++){
        tempText+=(textInpValue[i].toUpperCase())
    }
    
    const res=document.createElement("p")
    res.textContent=`To Uppercase: ${tempText}`
    result_box.appendChild(res)
}
toUpperBtn.addEventListener("click", toUppercaseFun)

// Check substring presence
const checkSubstring=()=>{
    result_box.innerHTML=""
    let textInpValue=textInp.value.trim()
    const userInput=prompt("Enter you text: ")
    
    const res=textInpValue.includes(userInput)? "Found" : "Not Found"
    
    const showRes=document.createElement("p")
    showRes.textContent=`Substring (${userInput}) ${res} in text.`
    result_box.appendChild(showRes)
}
substringBtn.addEventListener("click", checkSubstring)