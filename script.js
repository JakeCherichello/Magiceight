function shakeMagic8Ball() {
    const question = prompt(`Ask the Magic 8-ball a question:`);
    if (question === null) {
        document.getElementById('response-text').innerText = `MUST ASK A QUESTION`
        document.getElementById('response-text').classList = `lead text-danger`
        document.getElementById('response-image').src = `#badimage`// fix this
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
            image = "yes-image.jpg"
            color = "text-success"
            break

        case 1:
            answer = "No"
            image = "yes-image.jpg"
            color = "text-danger"
            break

        case 2:
            answer = "It is certain"
            image = "yes-image.jpg"
            color = "text-success"
            break

        case 3:
            answer = "Reply hazy try again"
            image = "yes-image.jpg"
            color = "text-success"
            break

        case 3:
            answer = "Cannot predict now"
            image = "yes-image.jpg"
            color = "text-success"
            break

        case 4:
            answer = "Do not count on it"
            image = "yes-image.jpg"
            color = "text-danger"
            break

        case 5:
            answer = "My sources say no"
            image = "yes-image.jpg"
            color = "text-success"
            break

        case 6:
            answer = "Outlook not so good"
            image = "yes-image.jpg"
            color = "text-danger"
            break

        case 7:
            answer = "Signs point to yes"
            image = "yes-image.jpg"
            color = "text-success"
            break
    }
    const responseText = document.getElementById(`response-text`)
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById(`response-image`).src = image;


}



