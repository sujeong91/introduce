import etri from '../img/etri.png';
import hancom from '../img/hancomsledger.png';
import andusExplore from '../img/explorer.png';
import arPlayer from '../img/ar_player.jpg';
import plasticSurgery from '../img/coordi1.jpg';
import b1pay from '../img/b1pay.jpg';
import kb from '../img/free_kb.jpg';
import shingihannara from '../img/free_tv.jpg';
import socar from '../img/socar.jpg';

export const skills = [
  {
    title: 'HTML',
    desc: [
      'symentic mark-up에 대한 이해',
      'html5 사용',
      'video, svg태그 사용 경험 있음',
    ]
  },
  {
    title: 'CSS',
    desc: [
      'float, flex를 활용한 레이아웃 설계 가능',
      '컴포넌트적이고 유지보수가 가능한 CSS 설계 가능',
      '애니메이션 기능 활용',
      'scss 사용',
      '웹폰트 사용 가능',
      '반응형/적응형 가능',
    ]
  },
  {
    title: 'JavaScript',
    desc: [
      'es6기반 react 개발 가능',
      'redux 사용가능',
      'axios를 활용한 ajax 가능',
      'jQuery를 활용한 UI스크립팅 가능',
    ]
  },
  {
    title: 'TOOL',
    desc: [
      'tortoise, git 사용 가능 (커밋, 푸쉬 외 브랜치도 사용 가능)',
      'slack, jira, confluence, zeplin 사용 경험 있음',
    ]
  },
  {
    title: 'DB',
    desc: [
      'heidiSQL을 활용한 DB, table생성 및 데이터 조작',
      'insert, select, update, delete query문 간단하게 작성 가능',
      'mySQL과 php 연동해서 사용한 경험 있음',
    ]
  },
  {
    title: 'SERVER',
    desc: [
      'codeignighter를 활용한 php어플리케이션 제작 경험',
      'MVC패턴 기반, iframe을 활용한 게시판 유지보수 경험',
    ]
  }
];

export const works = [
  {
    title: 'ETRI',
    thumbSrc: etri,
    alt: 'etri',
    desc: '태양광 전기 p2p 플랫폼',
    feature: 'react. 이더리움 기반. 앤드어스에서 백엔드, 프론트 전부 구현.',
    contribution: '\n프론트엔드를 전담하여 환경구성부터 틀을 계획함.\nreact-dom-router로 라우터 구성, 리덕스 연결,\naxios를 활용해 api 연동 등 틀을 구성',
    buttonUrl: '#!',
  },
  {
    title: 'hancomSLedger',
    thumbSrc: hancom,
    alt: 'hancome',
    desc: '한컴 블록체인 사업부 하이퍼레져 솔루션',
    feature: '하이퍼레져 기반. 앤드어스에서 프론트 담당, 한컴에서 백엔드 담당. \n테마변경, 다국어지원 기능',
    contribution: '\n오더러, 멤버쉽, 체인, 체인코드 페이지 담당.\nreact기반의 UI, 데이터 바인딩 경험. ',
    buttonUrl: '#!',
  },
  {
    title: 'andus explorer',
    thumbSrc: andusExplore,
    alt: 'explorer',
    desc: '다온코인 탐색기',
    feature: 'andus에서 발행하는 다온 코인의 상황을 볼 수 있는 탐색기',
    contribution: '\n첫 react 프로젝트. react기반의 UI 100%',
    buttonUrl: '#!',
  },
  {
    title: '해외수출용 의술 학습 플랫폼 및 동영상 제작',
    thumbSrc: arPlayer,
    alt: 'ar_player',
    desc: '의사교육용 학습동영상 제작',
    feature: '동영상에 가상태그를 심어 편집동영상을 넘어선 실시간 학습기능 제공.\n360˚ view',
    contribution: '\nphp기반. 촬영, 스크립팅 계획서 작성, 플랫폼 마크업 100%\nUI Scripting 100%, 동영상 action scripting 100%',
    buttonUrl: '#!',
  },
  {
    title: '성형외과 홈페이지 제작 및 유지보수',
    thumbSrc: plasticSurgery,
    alt: 'coordi1',
    desc: '성형외과 홈페이지 4~5개 리뉴얼 및 유지보수',
    feature: '코드이그나이터기반, 게시판연동, 예약서비스기능',
    contribution: '\n마크업 100%, UI Scripting 100%, 게시판 유지보수',
    buttonUrl: '#!',
  },
  {
    title: 'b1pay 프론트 개발',
    thumbSrc: b1pay,
    alt: 'b1pay',
    desc: '선정산 서비스 플랫폼 개발',
    feature: '백은 java기반, 프론트는 jquery기반 구성',
    contribution: '\n퍼블리싱 및 UI scripting, ajax를 활용한 데이터 바인딩 100%',
    buttonUrl: '#!',
  },
  {
    title: 'KB증권 교육 퍼블리싱',
    thumbSrc: kb,
    alt: 'free_kb',
    desc: 'KB증권 교육사이트 퍼블리싱 외주',
    feature: '모바일/PC 적응형 작업.',
    contribution: '\n마크업 100%, UI Scripting 100%',
    buttonUrl: '#!',
  },
  {
    title: '신기한나라 관리자페이지 퍼블리싱',
    thumbSrc: shingihannara,
    alt: 'free_tv',
    desc: '신기한나라 관리자페이지 퍼블리싱 외주',
    feature: 'pc적응형.',
    contribution: '\n마크업 100%, UI Scripting 100%',
    buttonUrl: '#!',
  },
  {
    title: 'SOCAR 관리자페이지 퍼블리싱',
    thumbSrc: socar,
    alt: 'socar',
    desc: 'socar 관리자페이지 퍼블리싱 외주',
    feature: '백엔드, js 기능이 구현되어 있는 페이지에 디자인과 마크업만 변경',
    contribution: '\n기존 구현기능을 건들이지 않으면서 html, css변경 100%, 디자인 0%',
    buttonUrl: '#!',
  },
];