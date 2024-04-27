const decrypt = (data)=>{

    const DecryptedString = [];
 for(let i =0; i <data.length; i++){
    DecryptedString.push(String.fromCharCode(data.charCodeAt(i) - 1));
}

    return console.log(DecryptedString.join(""));


}

export default decrypt;
// decrypt("Ebojti!libo!jt!hppe!qfstpo");






