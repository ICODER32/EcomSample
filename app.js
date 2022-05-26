const wrapper=document.querySelector('.slideWrapper');

const menuItems=document.querySelectorAll('.menuItems');
let openbtn=document.querySelector('.productBtn');
let closebtn=document.querySelector('.close');
let modal=document.querySelector('.payment');

openbtn.addEventListener('click',()=>{
    modal.style.display='flex'

})
closebtn.addEventListener('click',()=>{
    modal.style.display='none'
})

const products=[
{
    id : 1,
    title: 'Air Force',
    price : 119,
    colors:[
        {
            code: 'black',
            img : './img/air.png'
        },{
            code: 'blue',
            img : './img/air2.png'
        }
    ],
},
{
    id : 2,
    title: 'Blazer',
    price : 110,
    colors:[
        {
            code: 'lightgray',
            img : './img/jordan2.png'
        },{
            code: 'green',
            img : './img/jordan.png'
        }
    ],
},{
    id : 3,
    title: ' Crater',
    price : 100,
    colors:[
        {
            code: 'lightgray',
            img : './img/crater.png'
        },{
            code: 'green',
            img : './img/crater2.png'
        }
    ],
},{
    id : 4,
    title: 'Jordan',
    price : 90,
    colors:[
        {
            code: 'black',
            img : './img/jordan2.png'
        },{
            code: 'lightgray',
            img : './img/jordan.png'
        }
    ],
},{
    id : 5,
    title: 'Hippie',
    price : 80,
    colors:[
        {
            code: 'gray',
            img : './img/hippie.png'
        },{
            code: 'black',
            img : './img/hippie2.png'
        }
    ],
}
]

let choosenProduct = products[0]
let currentImg=document.querySelector('.productImg');
let currentTitle=document.querySelector('.productTitle');
let currentPrice=document.querySelector('.productPrice');
let currentColor=document.querySelectorAll('.color');
let currentSize=document.querySelectorAll('.size');

menuItems.forEach((items,index)=>{
    items.addEventListener('click', function(){
        wrapper.style.transition=`all 1s ease-in-out`
        wrapper.style.transform=`translateX(${-100*index}vw)`
        let choosenProduct = products[index];


        currentTitle.textContent=choosenProduct.title;
        currentPrice.textContent="$"+choosenProduct.price;
        currentImg.src=choosenProduct.colors[0].img;

        // assign colors
      currentColor.forEach((color,index)=>{
          color.style.background=choosenProduct.colors[index].code;
          currentImg.src=choosenProduct.colors[index].img;
      })
      currentColor.forEach((color,index)=>{
        color.addEventListener('click',()=>{
            currentImg.src=choosenProduct.colors[index].img
        })
    })
        
    })
})




currentSize.forEach((size)=>{
    size.addEventListener('click', ()=>{
            currentSize.forEach((size)=>{

                
                        size.style.background='white'
                        size.style.color='black'
            })


        size.style.background='black'
        size.style.color='white'
    })
})

