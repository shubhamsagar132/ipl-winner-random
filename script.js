let arr=[{
    team:'Mumbai',
    primary:'blue',
    secondary:'orange'

},
{team:'KKR',
    primary:'purple',
    secondary:'gold'},

    {
    team:'CSK',
    primary:'yellow',
    secondary:'blue'},

    { team:'RCB',
    primary:'red',
    secondary:'yellow'},

    { team:'Rajasthan',
    primary:'pink',
    secondary:'white'},

    { team:'LSG',
    primary:'blue',
    secondary:'green'},

    { team:'Punjab',
    primary:'red',
    secondary:'white'},


    { team:'Gujrat',
    primary:'blue',
    secondary:'gold'},

{team:'Delhi',
primary:'red',
secondary:'blue'},

{team:'SRH',
primary:'orange',
secondary:'black'}]

let btn=document.querySelector('button')
let h1=document.querySelector('h1')
    btn.addEventListener('click',function(){
    let numb =Math.floor(Math.random()*arr.length)
    let winner=arr[numb]
    h1.innerHTML=winner.team
    h1.style.backgroundColor=winner.primary
    h1.style.color=winner.secondary
    console.log(winner);

})

