//9.3 Command line

interface  calculateBmi{
    height:number
    weight:number

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



const calculateBmi=(height:number, weight:number):number=>{
    var Bmi=weight/(height/100*height/100) //kg/m2
      if(Bmi < 18.5){
  
      console.log("Very severely underweight", Bmi) 
       return Bmi
          }      
          if(Bmi > 15 && Bmi<16 ){       
            console.log("Severely underweight", Bmi)
            return Bmi
              }
              if(Bmi > 16 && Bmi<18.5 ){  
                console.log("Underweight", Bmi)
                return Bmi
                  }
                  if(Bmi > 18.5 && Bmi<25 ){
                    console.log("Normal healthy weight", Bmi)
                    return Bmi
                      }
                      if(Bmi > 25 && Bmi<30){
                        console.log("Overweight", Bmi)
                        return Bmi
                          }
                          if(Bmi > 30 && Bmi<35){
                            console.log("Obese Class I (Moderately obese)", Bmi)
                            return Bmi
                              }
                    
                              if(Bmi > 35 && Bmi<40){
                                console.log("Obese Class II (Severely obese)", Bmi)
                                return Bmi
                                  }
                                  
                                  if(Bmi > 40){
                                    console.log("Obese Class III (Very severely obese)",Bmi)
                                    return Bmi
                                      }
                                      else{
                                        console.log("something went wrong)")
                                        return 0
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