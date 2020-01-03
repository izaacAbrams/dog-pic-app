'use strict';

function submitForm() {
    $('form').submit(e => {
        e.preventDefault();
        getDogImages()
        $('.dog-group').html('');
    })
}

function getDogImages(){
    let dogNum = $('#dog-num').val();
    console.log(dogNum)
     fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
     .then(response => response.json())
     .then(responseJson => displayTheDogs(responseJson));
}

function displayTheDogs(responseJson){
    const dogArray = responseJson.message;
    for(let i = 0; i < dogArray.length; i++){
        console.log(dogArray[i]);
        $('.dog-group').append(
            `<img src="${dogArray[i]}" class="dog-pic" alt="Dog Pictures">`
        )
    }  
    $('.dogs-display').removeClass('hidden');
}

$(submitForm())