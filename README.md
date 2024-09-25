# REACT-Project-자취N톡

## 프로젝트 소개
- 1인 가구 사용자들이 일상 생활에서 발생하는 다양한 고민들을 공유하고 해결하기 위한 커뮤니티 사이트
- 거주지를 중심으로 연결되어 실제로 필요한 정보를 주고받는 연결망을 형성하는 것을 목표로 합니다.
- 혼자서 해결하기 어려운 일상적인 문제들을 다른 사람들과 나누며 쉽고 빠르게 해결책을 찾을 수 있습니다.


### 프로젝트 노션 방문하기
<a href="https://www.notion.so/yjjuc4109/N-1ce8fde80a2643b4ae10295e863f87e5" target="_blank">
  <img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white" alt="Notion Badge" width="80">
</a>

## 멤버 구성
- 김지안(FE) : 상세페이지(CRUD), 글쓰기페이지(CRUD), 투표 및 이미지 첨부
- 박금정(FE) : 로그인, 회원가입, 메인페이지, 프로필페이지, 프론트엔드 배포, ppt 제작

## 시작 가이드

    git clone https://github.com/Supercoding-project1-back/super-project3-fe.git
    cd super-project3-fe
    npm start


## 기술 스택 & 아키텍처
<img width="1823" alt="아키텍처" src="https://github.com/user-attachments/assets/b09c4956-33f3-4b8f-86f3-9f3f5d8f5784">

## 화면 구성
|로그인 페이지|주소 정보 추가|메인 페이지|
|:---:|:---:|:---:|
|<img width="300" alt="로그인화면" src="https://github.com/user-attachments/assets/10baa97d-75a4-4042-a6d0-97aeacee1e04">|<img width="300" alt="주소입력" src="https://github.com/user-attachments/assets/e50e09c1-082c-4fd2-9885-c1f481641dbd">|<img width="300" alt="메인" src="https://github.com/user-attachments/assets/8b495202-0de1-45a9-9d1f-bcfe7837d21f">|
|상세 페이지|상세페이지(댓글 리스트)|글쓰기 페이지|
|<img width="300" alt="상세게시글" src="https://github.com/user-attachments/assets/870fc142-c295-4910-b7e5-2d6d9985314d">|<img width="300" alt="상세게시글(댓글)" src="https://github.com/user-attachments/assets/29181808-d8f4-4c20-a727-515133b9a077">|<img width="300" alt="상세게시글(글쓰기)" src="https://github.com/user-attachments/assets/b455c11e-5217-45ba-9afe-7233f690e91e">|
|프로필 페이지|프로필 페이지(유저 정보 수정)||
|<img width="300" alt="프로필" src="https://github.com/user-attachments/assets/b037c1a9-b844-4ad3-8f50-f180d17835cf">|<img width="300" alt="프로필" src="https://github.com/user-attachments/assets/ad328ba1-ce6d-4a24-9b7f-dc9edc0b02af">||

<br>

## 주요 기능
#### 카카오 소셜 로그인
- Oauth 2.0 기반 카카오 소셜 로그인 및 회원가입
- 부가적인 유저 정보 (거주지역) 추가
- 로그인시 jwt 토큰을 로컬스토리지에 저장

#### 메인 페이지
- 게시글 제목, 이미지, 글 내용, 조회수, 작성시간 조회 리스트
- 전체글/질문글/일상글/구매글 카테고리별 게시글 조회
- 각 카테고리별 조회수가 가장 높은 게시글 최대 3개 조회
- intersection observer api를 사용하여 무한스크롤 구현

#### 게시글 상세 페이지
- 메인게시판에서 불러온 제목, 내용, 지도 및 이미지, 조회수, 작성시간 조회
- 개인 유저가 작성한 게시글 수정, 삭제
- 우측 상단 햄버거 아이콘 클릭시 하단 모달을 팝업하여 게시글 수정, 삭제
- 글쓰기 페이지에서 작성한 투표 목록 조회
- 유저들이 작성한 댓글 리스트 조회
- 개인 유저가 작성한 댓글 수정, 삭제

#### 글쓰기 페이지
- 카테고리, 제목, 내용 게시글 입력
- 사진 이미지 첨부, 삭제 (최대 2개)
- 투표 첨부
  - 투표첨부창은 fullscreen모달 형태로 구현
  - 기본 항목 2개~최대 총 4개까지 추가 가능 (항목이 최대 4개가 되면 항목 추가버튼 비활성화)
  - 등록 버튼 시, 글쓰기페이지에 투표 첨부

#### 마이 페이지
- 유저 개인정보 조회 및 수정 (닉네임, 거주지, 자기소개)
- 유저가 작성한 전체 게시글 조회



