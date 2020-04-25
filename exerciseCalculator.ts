//9.3 Command line

interface Exercises{
   exercises:number[]
  }
interface Result {
    periodLength:number,
    trainingDays:number,
    target:number,
    average:number,
    success:boolean,
    rating:number,
    ratingDescription:string
  }
  var targ=0

  const parseArgumentss = (args: Array<string>): Exercises =>{
    if (args.length < 3) throw new Error('Not enough arguments')
      //  console.log(args) 
    var ex =[]

     for (var i = 3; i < args.length; i++) {
          if (!isNaN(Number(args[i]))) {  
           //   console.log( Number(args[i])+"tää")
                ex.push(Number(args[i]))
            }
            else {
                throw new Error('All provided values were not numbers!');
              }
        }    
    console.log( ex)  
     var exercises=ex
    targ= Number(args[2])
      return {     
       exercises
 
    }
  }


const calculateExercises=(exercises:number[]):Result=>{
var predicate = (x:number) => x > 0;
const trainingDays= exercises.filter(predicate)

var sum = exercises.reduce(function(a, b) { return a + b; }, 0);

const average=sum/ exercises.length

const ratingDescription=()=>{
if(average<1){
 return  'Where is yor MOTIVATION!!!'
 }
 if (average<targ){
return 'Not too bad but could be better'

}
 else {
return    'Well done'
 }}




 const succes =()=>{
    if(average<1){
      return false
     }
    else if (average<targ){
      return false
    }
     else {
    return true
     }}
    
     const rate =()=>{
        if(average<1){
          return 0
         }
        else if (average<targ){
          return 2
        }
         else {
        return 3
         }}
        
    

    var result={
        periodLength: exercises.length,
        trainingDays:trainingDays.length,
        target:targ,
        average:average,
        success:succes(),
        rating:rate(),
        ratingDescription:ratingDescription(),
    }
    console.log(result)
    return result
  
}
try {
    const { exercises } = parseArgumentss(process.argv);
   calculateExercises(exercises)
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }



////9.2 Exercise calculator

// interface Result {
//     periodLength:number,
//     trainingDays:number,
//     target:number,
//     average:number,
//     success:boolean,
//     rating:number,
//     ratingDescription:string
//   }

// const calculateExercises=(exercises:number[]):Result=>{

// var predicate = (x:number) => x > 0;
// const trainingDays= exercises.filter(predicate)

// var sum = exercises.reduce(function(a, b) { return a + b; }, 0);

// const average=sum/ exercises.length

// const ratingDescription=()=>{
// if(average<1){
//  return  'Where is yor MOTIVATION!!!'
//  }
//  if (average<2){
// return 'Not too bad but could be better'

// }
//  else {
// return 'Well done'
//  }}


//  const succes =()=>{
//     if(average<1){
//       return false
//      }
//     else if (average<2){
//       return false
//     }
//      else {
//     return true
//      }}
    

//     var result={
//         periodLength: exercises.length,
//         trainingDays:trainingDays.length,
//         target:2,
//         average:average,
//         success:succes(),
//         rating:1,
//         ratingDescription:ratingDescription(),
//     }
//     return  result
  
// }

// let list: number[] = [3, 0, 2, 4.5, 0, 3, 1];

// console.log(calculateExercises(list))