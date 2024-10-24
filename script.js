//네비게이션
let mainName = document.querySelectorAll('.main_menu ul li a');
let subMenu = document.querySelector('.sub_menu');

console.log(mainName, subMenu)


mainName.forEach(function(menu){
  menu.addEventListener('mouseenter', function(){
    subMenu.classList.add('active');
  })
  menu.addEventListener('mouseleave', function(){
    subMenu.classList.remove('active');
  })
  
  //서브 메뉴에 마우스 들어오면 서브메뉴 유지
  subMenu.addEventListener('mouseenter',function(){
    subMenu.classList.add('active');
  });
  subMenu.addEventListener('mouseleave',function(){
    subMenu.classList.remove('active');
  });
  
})


//반응형
let mobileBtn = document.querySelector('.mobile_tab_btn');

let accordionHd = document.querySelector('.hd_accordion');
let accordionItems = document.querySelectorAll('.hd_accordion_item');


mobileBtn.addEventListener('click', function(){

  accordionHd.classList.toggle('active');

  if (accordionHd.classList.contains('active')) {
    document.querySelector('.mobile_tab_btn>em:first-child').style.transform = 'translateY(8px) rotate(45deg)';
    document.querySelector('.mobile_tab_btn>em:last-child').style.transform = 'translateY(-8px) rotate(-45deg)';
    document.querySelector('.mobile_tab_btn>em:first-child').style.transition = '0.2s';
    document.querySelector('.mobile_tab_btn>em:last-child').style.transition = '0.2s';
    
  } else {
    document.querySelector('.mobile_tab_btn>em:first-child').style.transform = 'rotate(0deg)';
    document.querySelector('.mobile_tab_btn>em:last-child').style.transform = 'rotate(0deg)';
  }
  //첫 번째 아코디언을 열어놓음
  accordionItems[0].querySelector('.hd_accordion_content').style.display = 'block'
  accordionItems.forEach(function(item){
    const title = item.querySelector('.hd_accordion_title');
    const content = item.querySelector('.hd_accordion_content');
    title.addEventListener('click', function(){
    //모든 아코디언 내용을 숨김
    accordionItems.forEach(function(i){
      i.querySelector('.hd_accordion_content').style.display = 'none';
      i.querySelector('.hd_accordion_content').style.transition = '0.5s';
    });
    //클릭한 아코디언 내용만 표시
    content.style.display = 'block'
    content.style.transition = '0.3s'
  });
});
})


//팝업창
let topBtn = document.querySelector('.top');
let popUp = document.querySelector('.pop_up');
let popUpBtn = document.querySelector('.pop_up_inner button');

console.log(topBtn, popUp)

topBtn.addEventListener('click', function(){
  popUp.classList.add('active');
});

popUpBtn.addEventListener('click', function(){
  popUp.classList.remove('active');
});


/* pagination */
const rowsPerPage = 15;
const rows = document.querySelectorAll('#subNews_table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount/rowsPerPage);
const numbers = document.querySelector('#number');

//console.log(rows, rowsCount)
for(let i=1; i<=pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}

const numberBtn = numbers.querySelectorAll('a');

numberBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    for(let nb of numberBtn){
      nb.classList.remove('active');
    }
    e.target.classList.add('active');
    displayRow(idx);
  })
})

numberBtn[0].classList.add('active');
//클릭ㅇ이벤트 active 추가
//클릭 될 때마다 해당 idx에 있는 목록만 보여주기

function displayRow(idx){
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;

  let rowArray = [...rows];

  for(let ra of rowArray){
    ra.style.display = 'none'
  }
  newRows = rowArray.slice(start, end);

  for(let nr of newRows){
    nr.style.display = '';
  }
}
displayRow(0)