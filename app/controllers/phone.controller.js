
var pairArrA
var pairArrB

exports.pairs = function(request, response){

    var phoneNumber = request.params.phoneNumber

    if(checkFormatNumber(phoneNumber)){
        getPairNumbersA(phoneNumber)
        getPairNumbersB(phoneNumber)
        response.json({pairA: pairArrA, pairB: pairArrB})

    }else{
        response.json({xMessage: "format number is wrong XXXXXXXX"})
    }       

}



function getPairNumbersA(phoneNumber){
  
    var mPhoneNum = phoneNumber
        pairArrA = []
        pairArrA.push(mPhoneNum.substr(0,2))
        pairArrA.push(mPhoneNum.substr(2,2))
        pairArrA.push(mPhoneNum.substr(4,2))
        pairArrA.push(mPhoneNum.substr(6,2))
        pairArrA.push(mPhoneNum.substr(8,2))

        return true


}

function getPairNumbersB(phoneNumber){
    
      var mPhoneNum = phoneNumber 
          pairArrB = []
          pairArrB.push(mPhoneNum.substr(1,2))
          pairArrB.push(mPhoneNum.substr(3,2))
          pairArrB.push(mPhoneNum.substr(5,2))
          pairArrB.push(mPhoneNum.substr(7,2)) 

  
  }

function checkFormatNumber(mPhone){
        if(mPhone.length === 10){
            for(i=0; i < 10; i++){       
            
                    var pair = parseInt(mPhone.substr(i, 1))
                    //console.log(pair)
            
                    if(!Number.isInteger(pair)){
                        console.log('FULSE BY CHAR')
                        return false
                    }
                }
                console.log('TRUE')
                return true
                
            }
        console.log('FULSE BY NUMBERIC')
    return false   
}