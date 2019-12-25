import $ from 'jquery';
import { skills, works } from './constant';
import logoBlack from '../img/header-logo.png';
import logoWhite from '../img/header-logo-white.png';

/**
 * [func] underlineMenu : 해당 메뉴 아래에 언더라인 효과
 */
const underlineMenu = () => {
    let $navItem = null;            // 메뉴
    let $section = null;            // section
    let $window = null;             // window
    let $currentNavItem = null;     // 현재 메뉴
    let $sectionLocation = null;    // 이동하는 섹션의 위치
    let winSct = 0;                 // 현재 윈도우의 top위치
    let activeScroll = true;        // 스크롤 이벤트 작동여부
  
    function start() {
      init();
      initEvent();
    }
  
    function init() {
      $navItem = $(".header-nav-item");
      $section = $("section");
      $window = $(window);
    }
  
    function initEvent() {
      $navItem.on("click", function(event){
        event.preventDefault();
        const that = $(this);
        activeScroll = false;
        underlineEffect(that);
        linkSection();
      });
  
      $window.scroll(function(){
        if ( activeScroll == true ) {
          winSct = $window.scrollTop();
          currentNav();
        }
      });
    }
  
    function underlineEffect(that) {
      if ( $currentNavItem ) $currentNavItem.removeClass("on");
  
      $currentNavItem = that;
      $currentNavItem.addClass("on");
    }
  
    function linkSection() {
      $sectionLocation = $("#" + $currentNavItem.attr("href")).offset().top;
      $('html,body').stop().animate({scrollTop : $sectionLocation - 55}, 1000, function() {
        activeScroll = true;
      });
    }
  
    function currentNav() {
      $section.each(function () {
        const $self = $(this),
              selfValue = $self.attr("id"),
              selfNav = $(".header-nav-item[href=" + selfValue + "]"),
              secOft = $self.offset().top,
              checkCurrent = secOft - winSct;
  
        if ( checkCurrent < 300 ) {
          underlineEffect(selfNav);
        }
      });
    }
  
    start();
};

/*
 * [func] scrollChangeHeader : 지정한 포인트에 스크롤이 지나가면 header 변환
 */
const scrollChangeHeader = () => {
    let $header = null;
    let $headerLogo = null;
    let windowScrollTop = 0;
    let point = 0;
  
    function start() {
      init();
      initEvent();
    }
  
    function init() {
      $header = $("header");
      $headerLogo = $(".header-logo img");
      point = 100;
    }
  
    function initEvent() {
      $(document).scroll(function() {
        windowScrollTop = $(window).scrollTop();
        
        if ( windowScrollTop > point ) {
          $header.addClass("scrollOn");
          $headerLogo.attr("src", logoBlack);
        } else {
          $header.removeClass("scrollOn");
          $headerLogo.attr("src", logoWhite);
        }
      });
    }
  
    start();
}

/**
 * [func] makeSkillItem : 기술 스택 항목 만들기
 */
const makeSkillItem = () => {
    const skillBox = document.querySelector('.skill-box');
    const skillItem = skills.map((skill) => {
        return `
            <li class="l-col l-col-4">
                <p class="skill-title">${skill.title}</p>
                ${
                    skill.desc.map(desc => {
                        return `<p class="skill-desc">- ${desc}</p>`;
                    }).join('')
                }
            </li>
        `;
    }).join('');
    skillBox.innerHTML = skillItem;
};

/**
 * [func] makeWoksItem : 항목 만들기
 */
const makeWoksItem = () => {
    const worksBox = document.querySelector('.works-box');
    const worksItem = works.map((work) => {
      return `
          <li class="l-col l-col-6">
              <div class="works-frame">
                  <div class="works-frame-imgBox">
                    <img class="works-frame-img" src=${work.thumbSrc} alt=${work.alt}>
                  </div>
                  <div class="works-hiddenFrame">
                      <div class="works-hiddenFrame-textbox">
                          <p><span class="works-hiddenFrame-title">설명</span>: ${work.desc}</p>
                          <p><span class="works-hiddenFrame-title">특징</span>: ${work.feature}</p>
                          <p><span class="works-hiddenFrame-title">본인기여도</span>: ${work.contribution}</p>
                      </div>
                      <!-- <a href=${work.buttonUrl} target="_blank"><div class="btn_narrow blue_btn works_btn">more</div></a> -->
                  </div>
              </div>
              <p class="works-title">${work.title}</p>
          </li>
      `;
    }).join('');
    worksBox.innerHTML = worksItem;
};
  
/*
 * [func] showWorksDetail : works 마우스 오버 시 상세보기 효과
 */
const showWorksDetail = () => {
    const works = document.querySelectorAll('.works-frame');

    works.forEach((workItem) => {
        workItem.addEventListener("mouseenter", (event) => {
            const worksDetail = event.currentTarget.getElementsByClassName('works-hiddenFrame')[0];
            worksDetail.style.display = 'block';
        });
    });

    works.forEach((workItem) => {
        workItem.addEventListener("mouseleave", (event) => {
            const worksDetail = event.currentTarget.getElementsByClassName('works-hiddenFrame')[0];
            worksDetail.style.display = 'none';
        });
    });
}

// entry
$(() => {
    underlineMenu();
    scrollChangeHeader();
    makeSkillItem();
    makeWoksItem();
    showWorksDetail();
});