const ToSentenceCase = (streeng) => {

    let i = 0;
    let splitStringArray =  streeng.split(" ");

    if(splitStringArray.length === 1){

      return splitStringArray[0].charAt(0).toUpperCase()+splitStringArray[0].substring(1, splitStringArray[0].length);

      }
     else {
        let newString='';
      let i = 0;
       for(i; i < splitStringArray.length; i++){
         newString += splitStringArray[i].charAt(0).toUpperCase()+ splitStringArray[i].substring(1, splitStringArray[i].length)+" ";
    }

    return newString;
}


}
  module.exports = ToSentenceCase;
