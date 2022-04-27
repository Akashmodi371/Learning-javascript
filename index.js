//ways to print in javsa script
// console.log("Yeah i am working here");
// console.warn("this is warning");
// console.error("this is error ");
// console.assert("yes assertion here");



//3. Javascript Variables

// var number1=39;
// var number2=33;
// console.log(number1+number2);

// var marks={
//     ravi:39,
//     shubham:33,
//     aakash:99
// }
// var und;
// var a=null;
// console.log(marks)
// console.log(und)
// console.log(a)

// var arr=[3,"bablu",6,67,]

// console.log(true && true)
// console.log(false && true)
// console.log(true || false)
// let mydate=new Date()
// console.log(mydate)
// console.log(mydate.getTime())
// console.log(mydate.getFullYear());
// console.log(mydate.getUTCMilliseconds())

// d=document.querySelector('.container')
// console.log(d)

// function clicked(){
//     console.log("you click thebutton");
// }


// firstcontainer.addEventListener('mouseover',function(){
//     console.log('mouse over here')
// })

// firstcontainer.addEventListener('click',function(){
//     console.log('click here')
// })

// likho = ()=>{
//     console.log("likh rahe hai")
// }
// // setTimeout and Setinterval
// setTimeout=(likho,2000);

// summ=(a,b)=>{
//     return a+b;
// }

// setInterval(summ(4,5),2000);

// obj={name:'aakash',lenght:2,a:{this:'yeshtisis'}}
// jso=JSON.stringify(obj)
// console.log(obj)
// console.log(jso)

// const main = document.querySelector('main');
// function headingfactory(colour){
//     const closure=function(text){
//         const headings=document.createElement('h1');
//         headings.setAttribute('style','color:' + colour);
//         headings.textContent=text;
//         return headings;
//     }
//     return closure;
// }

// const createheading=headingfactory('red');
// const creategreyheading=headingfactory('grey')
// const head1=createheading('Hey there ');
// const head2=creategreyheading('yes bro i am grey')
// main.appendChild(head1);
// main.appendChild(head2);

// const copybutton=document.getElementById('btn-copy');

// copybutton.addEventListener('click',async(event)=>{
//     const content=document.getElementById('content-copy').textContent;
//     await navigator.clipboard.writeText(content)
//     const copied=await navigator.clipboard.readText();
//     console.log(copied)
// }
// )

const url='https://api.covid19api.com/countries';
fetch(url,{
    method:'GET',
    headers: {
        'accept':'application/json',
    }
}).then((response)=>{
    return response.json();
}).then((response)=>{
    console.log(response);
})