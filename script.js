function shakeMagic8Ball() {
    const question = prompt(`Ask the Magic 8-ball a question:`);
    if (question === null) {
        document.getElementById('response-text').innerText = `MUST ASK A QUESTION`
        document.getElementById('response-text').classList = `lead text-danger`
        document.getElementById('response-image').src = "images/Angry-Man.webp"
    }
    if (!question.trim()) {
        alert(`Enter a Valid Question`)
        return
    }

    const randomNumber = Math.floor(Math.random() * 8);
    let answer, image, color;


    switch (randomNumber) {
        case 0:
            answer = "Yes"
            image = "images/happy.avif"
            color = "text-success"
            break

        case 1:
            answer = "No"
            image = "images/sad.jpg"
            color = "text-danger"
            break

        case 2:
            answer = "It is certain"
            image = "images/happy.jpg"
            color = "text-success"
            break

        case 3:
            answer = "Reply hazy try again"
            image = "images/confused.jpg"
            color = "text-warning"
            break

        case 3:
            answer = "Cannot predict now"
            image = "images/confused1.avif"
            color = "text-warning"
            break

        case 4:
            answer = "Do not count on it"
            image = "images/sad1.jpg"
            color = "text-danger"
            break

        case 5:
            answer = "My sources say no"
            image = "images/sad2.jpg"
            color = "text-danger"
            break

        case 6:
            answer = "Outlook not so good"
            image = "images/SAD3.jpg"
            color = "text-danger"
            break

        case 7:
            answer = "Signs point to yes"
            image = "images/happy2.jpg"
            color = "text-success"
            break
    }
    const responseText = document.getElementById(`response-text`)
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById(`response-image`).src = image;

}



