const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random() * 20 ) + 1;

input.addEventListener("keydown", (e) => {
    if(e.keyCode === 13){
        e.preventDefault()
        button.click();
    }
})


button.addEventListener("click", () => {
    const userNumber = document.querySelector("#guess").value;
    if(userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `This number can't be choosen`,
        })
    }

    else if( isNaN (userNumber)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Please, choose a number!`,
        })
    }

    else {
        if(userNumber < answer) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Choose a bigger number!`,
            })
        }

        else if(userNumber > answer) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Choose a smaller number!`,
            })
        }

        else{
            Swal.fire({
                title: 'Congradulations!',
                text: 'You win this game!!!',
                imageUrl: 'https://media.istockphoto.com/id/144274470/photo/celebration-of-light.jpg?s=1024x1024&w=is&k=20&c=q75AutnNC8elxCX20Bc31DBPuO-j8whriYJMcWZQvaw=',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Custom image',
              })
        }
     }
        
})
