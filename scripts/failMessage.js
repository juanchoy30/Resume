// Function that handdles the error messages

export function failMessage(idEng, idSpa) {
    $(idEng).html('Sorry, We could not load the information at the moment. Please check out later');
    $(idSpa).html('Lo sentimos, la información no se encuentra disponible en estos momentos. Por favor revise más tarde');
}