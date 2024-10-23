

//nav-submenu
let mainName = document.querySelectorAll('.main_menu ul li a');
let subMenu = document.querySelector('.sub_menu');

//console.log(mainName, subMenu)
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
    });
    //클릭한 아코디언 내용만 표시
    content.style.display = 'block'
  });
});
})




//main-visual 스와이퍼
var swiper = new Swiper(".mainSwiper", {
  slidesPerview: 'auto',
  loop:Infinity,
  autoplay:{delay : 3000}
})

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


// Education
// 큰 탭
let Tab = document.querySelectorAll('.edu_tap_menu01 a');
let tabContent = document.querySelectorAll('#edu_tap_content01 > div');

for(let i = 0; i < Tab.length; i++){
  Tab[i].addEventListener('click',function(t){
    t.preventDefault(); //a의 기본속성 없애기 //클릭했을 때 페이지 이동 방지
    
    //클릭된 링크의 href속성에서 id값을 추출
    let orgTarget = t.target.getAttribute('href');
    //초기화 시키고
    let tabTarget = orgTarget.replace('#','');
    for(let x = 0; x < tabContent.length; x++){
      tabContent[x].style.display = 'none';
    }
    //클릭된 탭에 해당하는 콘텐츠만 보이게함
    document.getElementById(tabTarget).style.display = 'block';
    
    //탭 이동시 말주머니 모양
    for(let j = 0; j < Tab.length; j++){
      Tab[j].classList.remove('active'); //모든 클래스 삭제
      t.target.classList.add('active'); //클릭한 요소만 클래스 추가

    }
  });//메뉴를 클릭하면 할 일
  
}

//작은 탭01 법정무교육(집체)
let tabTab01 = document.querySelectorAll('.tabs_1_box>.edu_tap_menu02 a'); //링크선택
let tabtabContent01 = document.querySelectorAll('.tabs_1_box>#edu_tap_content02 > div'); //탭 콘텐츠
//console.log(tabTab01);
//console.log(tabtabContent01);

for(let i = 0; i < tabTab01.length; i++){
  tabTab01[i].addEventListener('click',function(e){
    e.preventDefault(); //a의 기본속성 없애기 //클릭했을 때 페이지 이동 방지
    
    //클릭된 링크의 href속성에서 id값을 추출
    let orgTarget = e.target.getAttribute('href');
    //초기화 시키고
    let tabTarget = orgTarget.replace('#','');
    for(let x = 0; x < tabtabContent01.length; x++){
      tabtabContent01[x].style.display = 'none';
    }
    //클릭된 탭에 해당하는 콘텐츠만 보이게함
    document.getElementById(tabTarget).style.display = 'block';
    
    //탭 이동시 흰배경 생성
    for(let j = 0; j < tabTab01.length; j++){
      tabTab01[j].classList.remove('activeSub'); //모든 클래스 삭제
      e.target.classList.add('activeSub'); //클릭한 요소만 클래스 추가
    }
    
  });
}

//작은 탭02 국가기간전략훈련
let tabTab02 = document.querySelectorAll('.tabs_2_box>.edu_tap_menu02 a'); //링크선택
let tabtabContent02 = document.querySelectorAll('.tabs_2_box>#edu_tap_content02 > div'); //탭 콘텐츠
console.log(tabTab02);
console.log(tabtabContent02);
for(let i = 0; i < tabTab02.length; i++){
  tabTab02[i].addEventListener('click',function(e){
    e.preventDefault(); //a의 기본속성 없애기 //클릭했을 때 페이지 이동 방지
    
    //클릭된 링크의 href속성에서 id값을 추출
    let orgTarget = e.target.getAttribute('href');
    //초기화 시키고
    let tabTarget = orgTarget.replace('#','');
    for(let x = 0; x < tabtabContent02.length; x++){
      tabtabContent02[x].style.display = 'none';
    }
    //클릭된 탭에 해당하는 콘텐츠만 보이게함
    document.getElementById(tabTarget).style.display = 'block';
    
    //탭 이동시 흰배경 생성
    for(let j = 0; j < tabTab02.length; j++){
      tabTab02[j].classList.remove('activeSub'); //모든 클래스 삭제
      e.target.classList.add('activeSub'); //클릭한 요소만 클래스 추가
    }
    
  });
}

//작은 탭03 기능인력양성교육
let tabTab03 = document.querySelectorAll('.tabs_3_box>.edu_tap_menu02 a'); //링크선택
let tabtabContent03 = document.querySelectorAll('.tabs_3_box>#edu_tap_content02 > div'); //탭 콘텐츠
//console.log(tabTab03);
//console.log(tabtabContent03);
for(let i = 0; i < tabTab03.length; i++){
  tabTab03[i].addEventListener('click',function(e){
    e.preventDefault(); //a의 기본속성 없애기 //클릭했을 때 페이지 이동 방지
    
    //클릭된 링크의 href속성에서 id값을 추출
    let orgTarget = e.target.getAttribute('href');
    //초기화 시키고
    let tabTarget = orgTarget.replace('#','');
    for(let x = 0; x < tabtabContent03.length; x++){
      tabtabContent03[x].style.display = 'none';
    }
    //클릭된 탭에 해당하는 콘텐츠만 보이게함
    document.getElementById(tabTarget).style.display = 'block';
    
    //탭 이동시 흰배경 생성
    for(let j = 0; j < tabTab03.length; j++){
      tabTab03[j].classList.remove('activeSub'); //모든 클래스 삭제
      e.target.classList.add('activeSub'); //클릭한 요소만 클래스 추가
    }
    
  });
}

//첫 번째 탭 콘텐츠를 기본적으로 보이게 설정
document.getElementById('tabs_1').style.display = 'block';
document.getElementById('tabs_tabs_1').style.display = 'block';




//info-faq
//baaner 슬라이드
var swiper = new Swiper(".bannerSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop : true,
  autoplay:{delay : 3000}
});


//아코디언
const accordionHeads = document.querySelectorAll('.accordion_head');

accordionHeads.forEach(function(head) {
  head.addEventListener('click', function() {
    let content = head.nextElementSibling; // 바로 다음 요소 선택
    let arrowIcon = head.querySelector('i.fa-angle-up');

    // 모든 아코디언을 접음
    document.querySelectorAll('.accordion_text').forEach(function(text) {
      text.style.height = '0';
    });
    document.querySelectorAll('.accordion_head i.fa-angle-up').forEach(function(icon) {
      icon.classList.remove('active');
    });

    // 클릭한 항목만 펼침
    if (content.style.height === '0px' || content.style.height === '') {
      content.style.height = content.scrollHeight + 'px';
      arrowIcon.classList.add('active');
    } else {
      content.style.height = '0';
      arrowIcon.classList.remove('active');
    }
  });
});

//두 번째 질문 보이기
document.querySelector('.info-faq_accordion>div:nth-child(3) .accordion_text').style.height = '244px'





//news
//news 스와이퍼
var swiper = new Swiper(".newsSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView : 'auto',
  spaceBetween : 32,
  loop : true,
  initialSlide : 0,
  
});

// 큰 탭
let newsTab = document.querySelectorAll('.news_tap_menu a');
let newsContent = document.querySelectorAll('#news_tap_content > div');


for(let i = 0; i < newsTab.length; i++){
  newsTab[i].addEventListener('click',function(m){
    m.preventDefault(); //a의 기본속성 없애기 //클릭했을 때 페이지 이동 방지

    //클릭된 링크의 href속성에서 id값을 추출
    let orgTarget = m.target.getAttribute('href');
    //초기화 시키고
    let tabTarget = orgTarget.replace('#','');
    for(let x = 0; x < newsContent.length; x++){
      newsContent[x].style.display = 'none';
    }
    //클릭된 탭에 해당하는 콘텐츠만 보이게함
    document.getElementById(tabTarget).style.display = 'block';

    for(let j = 0; j < newsTab.length; j++){
      newsTab[j].classList.remove('active'); //모든 클래스 삭제
      m.target.classList.add('active'); //클릭한 요소만 클래스 추가
    }
  });//메뉴를 클릭하면 할 일
  
}
//첫 번째 탭 콘텐츠를 기본적으로 보이게 설정
document.getElementById('news_tabs_1').style.display = 'block';
