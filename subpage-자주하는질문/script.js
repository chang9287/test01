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


//아코디언
let accordionData = [
  {
    title: `<div><span>Q</span></div> <div>중식제공 안내_강남분원</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    강남분원에서 진행하는 교육 참여시, ‘식신E식권’(노란색) APP을 통해 전자식권 형태로 식사를 제공합니다. <br>
    교육 참석 전, 해당 애플리케이션을 다운로드 해오시기 바랍니다. <br><br>
    
    교육과정 1일당 식권 포인트 10,000원을 지급하고 있습니다. <br><br>

    식권 포인트는 사용 시간 내, 조회되는 가맹점에서 분할 사용 가능하며, <br>
    사용 가능 시간은 09:30~ 15:00 까지 입니다. 사용 가능 시간이 지나면 잔여 포인트는 자동으로 소멸됩니다. <br><br>
    
    기타 로그인 및 사용방법 안내는 입교 당일 오리엔테이션 진행시 자세하게 안내드리오니 참고바랍니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육과정별 담당 부서 연락처 안내</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    · 법정직무교육(집체/원격)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;TEL : 032-463-4901 (인천), 02-565-0162 (강남)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;FAX : 032-461-6524/032-463-5336 (인천), 02-565-0160 (강남)<br><br>
      
    · 산업안전보건법/시설물안전보건교육/기타법정교육<br>
    &nbsp;&nbsp;&nbsp;&nbsp;TEL : 032-460-0253<br>
    &nbsp;&nbsp;&nbsp;&nbsp;FAX : 032-468-3672<br><br>
    
    · 직업훈련교육(건축리모델링, 건축설비, 건축목공, 특수용접 등)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;TEL : 032-460-0274<br>
    &nbsp;&nbsp;&nbsp;&nbsp;FAX : 032-460-0270<br><br>
    
    · 정부시책교육(플랜트, BIM, 스마트건설, 모듈러건축)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;TEL : 032-460-0251(국제협력사업), 0245, 0256, 0268(플랜트, BIM, 스마트건설, 모듈러건축)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;FAX : 032-460-0132
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>온라인교육 FAQ 관련 안내</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    · 법정직무교육(집체/원격) <br>
    &nbsp;&nbsp;&nbsp;&nbsp;TEL : 032-463-4901 (인천), 02-565-0162 (강남)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;FAX : 032-461-6524/032-463-5336 (인천), 02-565-0160 (강남)<br><br>
    
    · 산업안전보건법/시설물안전보건교육/기타법정교육 <br>
    &nbsp;&nbsp;&nbsp;&nbsp;TEL : 032-460-0253<br>
    &nbsp;&nbsp;&nbsp;&nbsp;FAX : 032-468-3672<br>
    </div>
    
    `
  },
  {
    title: `<div><span>Q</span></div> <div>건설기술인 법정직무교육이란 무엇인가요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    · 건설기술인 법정직무교육이란 「건설기술진흥법」과 관계법령에 따라<br>
      &nbsp;&nbsp;‘건설기술인’으로서 업무를 수행하려면 의무적으로 받아야 하는 교육입니다.<br><br>

    · 관계법령<br>
    ① 「건설기술진흥법」 제2조 제8호, 제20조<br>
    ② 「건설기술진흥법 시행령」 제42조, 제43조, 제121조, 별표3, 별표4<br>
    ③ 「건설기술진흥법 시행규칙」 제16조, 제17조<br><br>

    · 행정규칙<br>
    &nbsp;&nbsp;&nbsp;&nbsp;-「건설기술인 등급 인정 및 교육·훈련 등에 관한 기준」(국토교통부 고시)
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
    ⁕ 이 용  료 : 무료 (전액)<br>
    ⁕ 이용방법 : 교육신청시 사전에 신청 또는 입교후 신청가능<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(참고) 합숙신청에서 출퇴근으로 추후 변경 가능<br>
    ⁕ 혜     택 : 3식 제공 및 숙소(4인 1실) 제공<br>
    &nbsp;&nbsp;&nbsp;&nbsp;(참고) 지방거주자는 교육시작일 전에 입실이 가능합니다.<br>
    자세한 사항은 아래 문의처로 연락주시기 바랍니다.<br>
    ⁕ 문     의 : 032-460-0274 행정실<br>
    &nbsp;&nbsp;&nbsp;&nbsp;건설기술교육원 기능인력양성센터<br><br>
    
    (단, 내일배움카드제 훈련 및 건설일용근로자 기능향상지원 훈련은 합숙이 불가합니다.)
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>정말 무료인가요? 본인 부담금은 없습니까?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    교육유형에 따라 차이가 있습니다.<br><br>
    
    전액 국비지원 또는 단체에서 지원이 가능한 교육은<br>
    ⁕ 국가기간·전략산업직종훈련(장기, 5개월 주간과정)<br>
    - 특수용접, 건축설비, 건축목공, 건축리모델링<br><br>
    ⁕ 건설일용근로자 기능향상지원 훈련<br>
    - 배관(1개월 주간과정)<br>
    - 배관 + 일반용접(2개월, 야간과정)<br><br>

    계좌제훈련(내일배움카드제)의 경우 대상에 따라 0~100% 본인부담금이 있습니다.<br><br>

    자세한 상담은 가까운 고용노동부 고용센터<br>
    또는 건설기술교육원 기능인력양성센터 행정실  032-460-0274로 문의해주세요
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>생활관(기숙사) 이용예정자입니다. 챙겨야 할 준비물이 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    ⁕ 생활관에는 침대, 침구, 옷장, 책상, 공동샤워장, 공동세탁실이 구비되어 있습니다.<br>
    &nbsp;&nbsp;&nbsp;개인 세면도구, 수건 등은 별도 준비하셔야합니다.
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
  },
  {
    title: `<div><span>Q</span></div> <div>숙식 신청을 했는데, 주말에 미리 입실할 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    네, 주말에 사전 입실이 가능합니다.<br>
    일요일 저녁 7시~11시까지 생활관 당직실로 가시면 방배정을 받을 수 있습니다.<br><br>
    
    단, 주말은 식사제공이 불가하니 참고하시기 바랍니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육 받는 동안 숙박이 가능한가요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    네, 생활관(기숙사)이 마련되어 있습니다.<br><br>

    다만, 생활관(기숙사)은 인천본원만 이용 가능하며, 숙식비를 과정별로 일괄 납부하셔야 이용 가능합니다.<br><br>

    ⁕ 2일과정(1박)<br>
      숙식비 : 25,000원<br>
    ⁕ 4일과정(3박)<br>
      숙식비 : 75,000원<br>
    ⁕ 5일과정(4박)<br>
      숙식비 : 100,000원<br><br>

    모든 생활관은 4인 1실입니다.<br>
    또한, 조, 석식 제공됩니다(첫날 조식, 마지막날 석식 미제공)<br><br>

    ⁕ 환급과정신청자는 중간퇴실 시 환불불가

    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>자차로 출퇴근할 예정입니다. 주차가 가능한지, 주차비는 있는지 알고 싶습니다.</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    인천본원의 경우 주차공간이 마련되어 있으나, 서울(강남)분원은 주차가 불가합니다.<br><br>

    ※ 교육장소별 주차장 이용안내<br>
    인천본원 : 1일(2000원), 정기비(5일,8000원) / 2시간 무료<br>
    강남분원 : 타 사업장에서 운영하는 별도 주차장 시설이며<br>
    <em></em>주차장이 매우 협소하니, 가급적 대중교통을 이용해 주시기 바랍니다.<br>
    <em></em>강남 분원(강남역 12번출구) 3분 이내

    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육비에 식사비는 포함인가요? 점심을 안먹으면 환불해주나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    네, 중식은 무료제공 됩니다. <br>
    단, 교육수강생 분들게 제공되는 서비스이므로 중식을 드시지 않는다고 중식비를 환불해 드릴 수 없으니 양해해주시기 바랍니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>식당에서 아침, 저녁도 먹을 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    네, 식권을 구매하여 아침, 저녁 식사를 하실 수 있으며,<br>
    숙식신청대상자는 숙식비에 조식, 석식이 모두 포함되어 있습니다.<br><br>

    단, 월(조식), 금(석식)은 식당이용이 불가하니 유의하시기 바랍니다.<br><br>

    - 판매처 : 카페(별관)<br>
    - 가 격 : 1식 5,000원<br><br>

    ※ 식당은 인천본원만 있음
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육비 환불 신청을 하고 싶은데 어떻게 해야 하나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    교육비 환불 규정에 따라 환불 가능대상에 한해서 가능합니다.<br>
    오프라인교육(<a href="#none">www.kicte.or.kr</a>)<br>
    홈페이지 [환불요청] 또는 [마이페이지] → [수강정보] → [결제내역]에서 취소<br><br>

    온라인교육(<a href="#none">www.ekicte.or.kr</a>)<br>
    1) 학습대기 중인 과정<br>
    온라인교육센터 [나의 강의실] → [학습현황] → [학습대기과정] → [결제]에서 취소<br><br>

    2) 학습 중인 과정 (시작일로부터 10일 이내, 진도율 50% 미만일 경우만 환불 가능)<br>
    온라인교육센터 [나의 강의실] → [학습현황] → [학습중과정] → [결제취소]에서 취소<br><br>

    ☎ 문의 032-460-0118, 0119<br><br>

    * 환불 소요기간 : 카드(카드사에 따라 1~2주), 가상계좌(2~3일) 소요예정<br>
    * 강의를 이미 수강한 경우, 환불규정에 의거 교육개시일 및 진도율에 따른 환불액의 변동이 있을 수 있습니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육비 납부했습니다. 입금확인은 어떻게 하죠?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    교육비 입금확인(대표계좌 입금 시)은 납부일 기준 익일 오전 10시 이후 전화로 문의주세요. (☎ 032-460-0118, 0119)<br>
    카드결제 및 가상계좌로 입금 시, 즉시 확인가능합니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육비 결제를 입교 당일에 할 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    교육비는 입교 당일에 결제 가능합니다.<br>
    단, 현금결제는 불가하며 카드 및 계좌이체만 가능합니다.<br><br>

    ※ 환급대상은 법인카드 또는 회사에서 계좌이체 필수
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육 수료 후 협회 통보까지 얼마나 걸리나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    수료일 기준으로 2주 이내에 경력관리수탁기관으로 통보해드립니다.<br>
    따라서 수료 이후 최종반영 및 조회까지는 2~3주 정도 소요될 수 있습니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>영문으로 된 수료증이 필요합니다. 어떻게 받을 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    영문수료증은 제증명신청서를 작성하여 팩스발송 후 문의주시면 발급받을 수 있습니다.<br>
    (비고란에 ‘영문수료증’ 기재)<br><br>
    - 첨부파일 : <a href="#none">제증명신청서.hwp</a><br>
    - 팩 스 : 인천 032-461-6524 / 서울(강남) 02-565-0160 <br>
    - 연 락 처 : 인천 032-463-4901 / 서울(강남) 02-565-0162
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>수료증 발급 메뉴에서 출력이 안됩니다. 어떻게 해야 되나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    수료증 발급이 안되는 경우 아래의 상황별 조치사항을 실시해보시기 바랍니다.<br>
    ① 수료증 출력 버튼은 있는데 출력이 안되는 경우 : 032-460-0214 문의<br><br>
    ② 수료한 과정 자체가 나오지 않는 경우<br>
    홈페이지 지원불가 수료증이 일부 있습니다. <br>
    제증명신청서를 작성하여 팩스발송 후 문의주시면 발급받을 수 있습니다.<br><br>
    - 첨부파일 : <a href="#none">제증명신청서.hwp</a><br>
    - 팩 스 : 인천 032-461-6524 / 서울(강남) 02-565-0160<br>
    - 연 락 처 : 인천 032-463-4901 / 서울(강남) 02-565-0162<br><br>
    ※ 온라인 교육 이수자는 온라인교육센터에 로그인하여 출력하셔야 합니다.<br>
    <a href="#none">"온라인 교육센터 바로가기"</a>
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>수료증은 교육이 끝나면 바로 받을 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    수료증은 교육종료일, 종료시간 이후에 현장에서 발급받거나, 익일 홈페이지 수료증 발급메뉴에서 출력 가능합니다. <br>
    ※ 수료기준을 모두 충족한 인원에 한함 (① 출석시간 80%이상, ② 시험 합격)<br><br>

    · 1주(35시간) = 월~금 수강과정의 경우, 금요일 마지막 수업시간까지 계신분에 한하여 수료증 현장발급<br><br><br>

    온라인교육으로 이수한 경우 : 수료일 기준으로 온라인교육센터 로그인 후 ‘수료증 출력’ 버튼 클릭 후 출력가능<br><br>
    ※ 수료기준을 모두 충족한 인원에 한함<br>
    ① 온라인 교육 90%이상 수강<br>
    ② 과제제출<br>
    ③ 집체교육 7시간 참석(100% 출석 필수)<br>
    ④ 시험 합격(60점 이상)<br>
    ⑤ 총점 70점 이상 획득(진도 20% + 과제 20% + 시험 60%)
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>1주(35시간) 교육에 참여하고 싶은데, 사정상 자리를 잠깐 비워야 할 수도 있습니다. 수료에 문제가 없나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    1주(35시간) 과정에 대해 최대 6시간까지 결강(지각, 조퇴, 외출, 결석)이 허용됩니다.<br>
    단, 최대 결강시간 초과 시에는 수료 불가하니 유의하시기 바랍니다.<br><br>

    ※ 2일(16시간)교육과정은 총 3시간 등 과정별 상이하니 별도 확인요망 
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>회사(사업장)정보가 현재와 다릅니다. 어떻게 변경하죠?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    최신화된 사업자등록증 사본을 팩스로 보낸 후, 유선 문의를 주시면 변경해드립니다.<br><br>
    
    팩   스 : 032-461-6524 또는 032-463-5336<br>
    유선문의 : 032-463-4901 
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>온라인교육은 신청기간과 수강기간이 정해져있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    온라인교육과정은 신청기간이 정해져있지 않으며, 상시신청이 가능합니다.<br>
    수강기간은 총 90일이며, 교육신청 시 선택하신 ‘학습시작일’로부터 자동 90일로 설정됩니다.<br><br>

    반드시 90일을 모두 채우셔야 하는 것은 아니며, 수료기준을 빨리 충족시킬수록 수료처리는 빨리 이루어지니 참고하시기 바랍니다.<br><br>

    단 1일 최대 학습시간이 10시간으로 제한되어 있어, 아무리 빨라도 1가지 과정 수료를 위해서는 최소 4~5일의 시간이 소요됩니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>아직 초급이 아닌데 교육을 받을 수 있나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    네, 역량지수가 ‘미달’로 초급이 아니더라도 교육을 미리 받을 수 있습니다.<br>
    교육신청 시 등급은 ‘초급’으로 설정하여 교육이수를 해주시면 됩니다.<br><br>
    
    단, 교육을 미리 받는 개념이기 때문에 교육 인정처리는 즉시 이루어지지 않으며,<br>
    향후 교육가점 및 경력이 추가되어 역량지수가 초급이상 달성될 때, 정상 인정처리 되니 참고하시기 바랍니다.
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>협회에 가입을 해야만 교육을 받을 수 있나요? 가입하지 않으면 교육을 받지 않아도 되나요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    협회에 가입하지 않은 상태에도 교육을 받을 수 있습니다.<br>
    또한 협회에 가입하지 않더라도 <b>교육대상</b>이라면 법령에서 정한 교육·훈련을 이수하셔야 합니다.<br><br>
    
    ※ 교육대상 : 건설기술진흥법 제20조 및 시행령 제42조에 따라 건설관련업체(발주청 포함)에 소속되어 근무하는 건설기술인
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>PQ가점교육(기타교육)이란 무엇인가요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    PQ가점(기타)교육이란<br>
    소속된 기술인이 건설기술진흥법에 의거한 교육을 이수한 경우, 사업수행능력(PQ) 평가에 가점을 적용해주는 것을 의미합니다.<br><br>
    
    최초, 승급, 계속교육으로 받는 교육과정 또한 건설기술진흥법 제20조 2항에 의거한 교육과정으로 PQ가점이 적용 됩니다.<br><br>
    
    단, PQ 심사는 발주청의 권한이기 때문에 인정여부는 별도 확인 필요<br><br>

    ※ 주택법상 PQ는 전문교육만 인정
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육가점이 사라져 등급이 하락할 예정이라고 합니다. 어떻게 해야하죠?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    교육가점이 사라지더라도 경력등록, 추가교육이수 등을 통해 역량지수를 충족하신다면 등급을 유지할 수 있습니다.<br><br>
    
    등급유지 방법은 아래를 참고하시기 바랍니다.<br><br>
    
    ① 경력을 등록하여 역량지수 충족 (경력지수)<br>
    ② 자격증을 취득한 경우 등록하여 역량지수 충족 (자격지수)<br>
    ③ 학위증을 취득한 경우 등록하여 역량지수 충족 (학력지수)<br>
    ④ 위의 방법 모두 해당이 되지 않으면 추가 교육이수를 통해 역량지수 충족 (교육가점)
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>PQ가점교육(기타교육)이란 무엇인가요?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    PQ가점(기타)교육이란<br>
    소속된 기술인이 건설기술진흥법에 의거한 교육을 이수한 경우, 사업수행능력(PQ) 평가에 가점을 적용해주는 것을 의미합니다.<br><br>
    
    최초, 승급, 계속교육으로 받는 교육과정 또한 건설기술진흥법 제20조 2항에 의거한 교육과정으로 PQ가점이 적용 됩니다.<br><br>
    
    단, PQ 심사는 발주청의 권한이기 때문에 인정여부는 별도 확인 필요<br><br>

    ※ 주택법상 PQ는 전문교육만 인정
    </div>
    `
  },
  {
    title: `<div><span>Q</span></div> <div>교육가점이란 무엇인가요? 어떻게 얻을 수 있죠?</div>`,
    content: `
    <div><span>A</span></div>
    <div>
    · 교육가점이란 해당직무분야 교육을 이수하시면 역량지수에 일부 가점을 부여하는 제도입니다.<br>
    역량지수 = 자격지수(40점이내) + 학력지수(20점이내) + 경력지수(40점이내) + 교육지수(5점이내)<br><br>
    ※ 교육지수 : 해당직무분야 교육에 대해 35시간당 1~2점 가점(단, 3년간 최대 5점, 3년만 유효함)<br><br>
    
    · 교육가점은 선택하신 업무분야 및 직무분야에 따라 별도 적용되고, 직무분야별 최대 5점까지 획득 가능합니다.<br><br>

    · 일반직무교육 35시간 이수 시, 교육가점 1점, 건설정책역량강화과정 35시간 이수 시, 교육가점 2점을 부여하고 있습니다.
    </div>
    `
  }
];
let accordionContainer = document.getElementById('accordion_container');
let openedAccordion = null;
accordionData.forEach(function (item, index) {
  let accordionBox = document.createElement('div');
  accordionBox.classList.add('accordion_text');
  if (index === 0) {
    accordionBox.classList.add('active');
    openedAccordion = accordionBox;
  }
  let accordionHeader = document.createElement('div');
  accordionHeader.classList.add('accordion_header');
  accordionHeader.innerHTML = item.title;
  let accordionContent = document.createElement('div');
  accordionContent.classList.add('accordion_content');
  accordionContent.innerHTML = item.content;
  accordionHeader.addEventListener('click', function () {
    if (openedAccordion && openedAccordion !== accordionBox) {
      openedAccordion.classList.remove('active');
    }
    accordionBox.classList.toggle('active');
    if (accordionBox.classList.contains('active')) {
      openedAccordion = accordionBox;
    } else {
      openedAccordion = null;
    }
    
  });
  accordionBox.appendChild(accordionHeader);
  accordionBox.appendChild(accordionContent);
  accordionContainer.appendChild(accordionBox);
});

/* let questionMark = document.querySelectorAll('.accordion_header>div:first-child>span');
//console.log(questionMark);
accordionHeader.addEventListener('click',function(){
  if(accordionBox.classList.contains('active')){
    questionMark.classList.add('behavior');
  }else{
    questionMark.classList.remove('behavior');
  }
})
 */













/* pagination */

const rowsPerPage = 10;
const rows = document.querySelectorAll('#accordion_container .accordion_text');
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
//클릭 이벤트 active 추가
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