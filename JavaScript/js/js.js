`use strict`
//Task#1
// it will output true 
/////////////////////////////////////////////////
//Task#2
let correct = `ECMAScript`
let question = prompt(`whats the name of js ` , `? `)
 if(question===correct)
  alert(`correct`)
else
alert(`Wrong , its ECMAScript`)
///////////////////////////////////////////////
//Task#3
let score = 75 
let grade = (score>=90 ) ?  `A` : (score>=80) ? `B`: (score>=70)? `C`: (score>=60)? `D` : `F`;
console.log(`your grade is : `+ grade)
//////////////////////////////////////////////////////////
//Task#4 
let check = prompt(`enter a number `, ` ...`)
alert( check>0 ? '1' : check<0 ? `-1` : `0` )
///////////////////////////////////////////////////////
// Task#5
let resultt = a+b<4 ? `not enough`:`Alot`
////////////////////////////////////////////
// Task#6
let login = prompt(`enter name `)
let message = login==`employee`? `hello`: login==`Director`? ` hello`: login=``? `no login`: ``
///////////////////////////////////////////////////////////////////////////////////////////
//Task#7
//True
//False
//True
//False
//True
//True
//True
//True
//True
//////////////////////////////////////////////////////////////////////////////
//LOOPS//
//Task#1
let num = 1 ;
let sum =0
while(num<=100)
{sum+=num;
  num++

}
 console.log(sum)
//////////////////////////////////////
//Task#2
let input
do {
   input = prompt(`enter a number `)

} while (isNaN(input));
console.log(input)
////////////////////////////////////////////////////////////
//Task#3
 let number = 7 
 let result
 for(let i =1 ; i<=10;i++)
 { 
   console.log(number*i)

 }
 ////////////////////////////////////////////////////////////////////////
 //Task#4
 const secret =7 
 let guess
 for(;;)
 {
   guess=prompt(`guess the number ! `)
   if(guess===secret)
   {alert(`correct ! `)
    break
   }

 }
 
 ///////////////////////////////////////////////////////////////
 //Task#5
 for(let i =1 ;i<=30;i++)
 { if(i%3==0)
    continue

   console.log(i)

 }
/////////////////////////////////////////////////////
//Task#6
// the last output will be the number 1 because 1 is considered to be true and when it reaches 0 it turns into false
/////////////////////////////////////////////////////////////////////
//Task#7
// no the first will will type from 1-4
// the second one will type from 0-4 
///////////////////////////////////////////////////////
//Task#8
// yes because in the for loop the increment is always done last so doesnot matter 
///////////////////////////////////////////////
//Task#9
for(let i =2 ; i<=10;++i)
{ if(i%2!=0)
  continue
  console.log(i)

}
/////////////////////////////////////////////////////////////////////
//Task#10
let i =0
while(i<3)
{
  alert(`number ${i}!`)
  i++
}