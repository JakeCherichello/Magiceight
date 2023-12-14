function shakeMagic8Ball(){
    const question = prompt(`Ask the Magic 8-ball a question:`);
    if (question === null){
        document.getElementById('response-text').innerText = `MUST ASK A QUESTION`
        document.getElementById('response-text').classList =`lead text-danger`
        document.getElementById('response-image').src = `#badimage`// fix this
    }
    if(!question.trim()){
        alert(`Enter a Valid Question`)
        return
    }
}