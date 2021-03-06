// 9.3 Command line

 interface  calculateBmi{
    height:number
    weight:number
}
    interface Result {
     weight:number,
     height:number,
     bmi:string 
    }

const parseArguments = (args: Array<string>):calculateBmi => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
       height:Number(args[2]),
       weight:Number(args[3])  
      
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }



  export const calculateBmi=(height:number, weight:number):Result | any =>{


    var Bmi=weight/(height/100*height/100) //kg/m2    
    


      if(Bmi < 18.5){
  
      console.log("Very severely underweight", Bmi)    
    
      var result={
      weight:weight,
      height:height,
      bmi:"Very severely underweight"
      }
       return result
          }      
          if(Bmi > 15 && Bmi<16 ){       
            console.log("Severely underweight", Bmi)
            var result={
              weight:weight,
              height:height,
              bmi:"Severely underweight"
              }
            return result
              }
              if(Bmi > 16 && Bmi<18.5 ){  
                console.log("Underweight", Bmi)
                  var result={
                  weight:weight,
                  height:height,
                  bmi:"Underweight"
                  }
                return result
                  }
                  if(Bmi > 18.5 && Bmi<25 ){
                    console.log("Normal healthy weight", Bmi)
                    var result={
                      weight:weight,
                      height:height,
                      bmi:"Normal healthy weight"
                      }
                    return result
                      }
                      if(Bmi > 25 && Bmi<30){
                        console.log("Overweight", Bmi)
                        var result={
                          weight:weight,
                          height:height,
                          bmi:"Overweight"
                          }
                        return result
                          }
                          if(Bmi > 30 && Bmi<35){
                            console.log("Obese Class I (Moderately obese)", Bmi)
                            var result={
                              weight:weight,
                              height:height,
                              bmi:"Overweight"
                              }
                            return result
                              }
                    
                              if(Bmi > 35 && Bmi<40){
                                console.log("Obese Class II (Severely obese)", Bmi)
                                var result={
                                  weight:weight,
                                  height:height,
                                  bmi:"Obese Class II (Severely obese)"
                                  }
                                return result
                                  }
                                  
                                  if(Bmi > 40){
                                    console.log("Obese Class III (Very severely obese)",Bmi)
                                    var result={
                                      weight:weight,
                                      height:height,
                                      bmi:"Obese Class III (Very severely obese)"
                                      }
                                    return result
                                      }
                                      else{
                                        try {
                                          const { height, weight } = parseArguments(process.argv)
                                          calculateBmi (height, weight)
                                        } catch (e) {
                                        //  console.log('Error, something bad happened, message: ', e.message)           
                                        var errorResult={
                                         // weight:weight,
                                        //  height:height,
                                        error: JSON. stringify(e.message)
                                          }
                                        return errorResult
                                      }
   }
                        
  }
  

  try {
    const { height, weight } = parseArguments(process.argv)
    calculateBmi (height, weight)
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message)
  
  }

  
/* 
//9.1 Body mass index
const calculateBmi=(height:number, weight:number):number| string=> {
  var Bmi=weight/(height/100*height/100) //kg/m2
    if(Bmi < 18.5){
        return "Very severely underweight"
        }
        if(Bmi > 15 && Bmi<16 ){
            return "Severely underweight"
            }
            if(Bmi > 16 && Bmi<18.5 ){
                return "Underweight"
                }
                if(Bmi > 18.5 && Bmi<25 ){
                    return "Normal healthy weight"
                    }
                    if(Bmi > 25 && Bmi<30){
                        return "Overweight"
                        }
                        if(Bmi > 30 && Bmi<35){
                            return "Obese Class I (Moderately obese)"
                            }
                  
                            if(Bmi > 35 && Bmi<40){
                                return "Obese Class II (Severely obese)"
                                }
                                
                                if(Bmi > 40){
                                    return "Obese Class III (Very severely obese)"
                                    }
                      
}


console.log(calculateBmi(180, 74)) */