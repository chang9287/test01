

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

//<i class="fa-solid fa-angle-up"></i>
//아코디언
let accordionData = [
  {
    title: `<div><span>Q</span></div> <div>건설기술인 법정직무교육이란 무엇인가요?</div> `,
    content: `
    <div><span>A</span></div>
    <div>
    · 건설기술인 법정직무교육이란 「건설기술진흥법」과 관계법령에 따라<br>
      &nbsp;&nbsp;&nbsp;&nbsp;‘건설기술인’으로서 업무를 수행하려면 의무적으로 받아야 하는 교육입니다.<br><br>

    · 관계법령<br>
    ① 「건설기술진흥법」 제2조 제8호, 제20조<br>
    ② 「건설기술진흥법 시행령」 제42조, 제43조, 제121조, 별표3, 별표4<br>
    ③ 「건설기술진흥법 시행규칙」 제16조, 제17조
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>구직등록확인증은 어디서 발급받나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    구직등록확인증은 가까운 고용노동부 고용센터를 방문하셔서<br>
    신청하시면 바로 발급이 가능하며, 워크넷에서도 회원가입 후 발급이 가능합니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>거주지가 지방인데 교육을 받을 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    지방거주자를 위해 합숙시설을 완비하고 있어 이용이 가능합니다.<br><br>
    
    이용할 수 있는 대상은<br>
    ⁕ 이용대상 : 국가기간·전략산업직종 (장기 주간과정) 훈련 교육희망자<br>
    ⁕ 이&nbsp; 용&nbsp;  료 : 무료 (전액)<br>
    ⁕ 이용방법 : 교육신청시 사전에 신청 또는 입교후 신청가능<br>
    ⁕ 혜 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;택 : 3식 제공 및 숙소(4인 1실) 제공
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>정말 무료인가요? 본인 부담금은 없습니까?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    전액 국비지원 또는 단체에서 지원이 가능한 교육은<br>
    ⁕ 국가기간·전략산업직종훈련(장기, 5개월 주간과정)<br>
    &nbsp;&nbsp;&nbsp;- 특수용접, 건축설비, 건축목공, 건축리모델링<br><br>
    ⁕ 건설일용근로자 기능향상지원 훈련<br>
    &nbsp;&nbsp;&nbsp;- 배관(1개월 주간과정)<br>
    &nbsp;&nbsp;&nbsp;- 배관 + 일반용접(2개월, 야간과정)
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>실습시 작업복이 지급되나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    실습시 착용할 작업복은 아래 교육대상자에게 만 지급됩니다.<br><br>

    ⁕ 대상 : 국가기간전략산업직종훈련(5개월 장기/주간과정)<br>
    ⁕ 개인 락커룸 제공<br><br>

    야간에 실시하는 계좌제 훈련(내일배움카드제) 또는 <br>
    기타 1~2개월 단기교육에 참가자에게는 지급되지 않습니다.(개별 지참)
    </div>
    `
  }
]
let accordionContainer = document.getElementById('accordion_container');
let openedAccordion = null;

accordionData.forEach(function(item, index){
  let accordionBox = document.createElement('div');
  accordionBox.classList.add('accordion_text');
  if(index===0){
    accordionBox.classList.add('active');
    openedAccordion = accordionBox;
  }
  let accordionHeader = document.createElement('div');
  accordionHeader.classList.add('accordion_header');
  accordionHeader.innerHTML = item.title;

  let accordionContent = document.createElement('div');
  accordionContent.classList.add('accordion_content');
  accordionContent.innerHTML = item.content;

  accordionHeader.addEventListener('click', function(){
    if(openedAccordion && openedAccordion !== accordionBox){
      openedAccordion.classList.remove('active');
    }
    accordionBox.classList.toggle('active');
    if(accordionBox.classList.contains('active')){
      openedAccordion = accordionBox;
    }else{
      openedAccordion = null;
    }
  });
  accordionBox.appendChild(accordionHeader);
  accordionBox.appendChild(accordionContent);
  accordionContainer.appendChild(accordionBox);
})








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



