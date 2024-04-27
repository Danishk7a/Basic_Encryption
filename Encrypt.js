const encrypt = (data) => {
    let encryptedString = '';
    for (let i = 0; i < data.length; i++) {
        encryptedString += String.fromCharCode(data.charCodeAt(i) + 1);
    }
    console.log(encryptedString);
}

export default encrypt;
// encrypt("Danish khan");
