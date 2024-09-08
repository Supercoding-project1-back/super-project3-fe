# REACT-Project-자취N톡

## 프로젝트 소개
- 1인 가구 사용자들이 일상 생활에서 발생하는 다양한 고민들을 고민하고 해결하기 위한 커뮤니티 사이트
- 거주지를 중심으로 사람들과 연결되어 실제로 필요한 정보를 주고받는 현실적인 연결망을 형성하는 것을 목표로 합니다.
- 혼자서 해결하기 어려운 일상적인 문제들을 다른 사람들과 나누며 쉽고 빠르게 해결책을 찾을 수 있습니다.

## 시작 가이드

    git clone https://github.com/Supercoding-project1-back/super-project3-fe.git
    cd super-project3-fe
    npm start


## 기술 스택
### Environment & Config
<div>
<img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=GIT&logoColor=white">
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=GITHUB&logoColor=white">
<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=white">
</div>

### Development
<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SCSS&logoColor=white">
<img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=AXIOS&logoColor=white">
</div>

### Deploy
<img src="https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=VERCEL&logoColor=white">

### Communication
<div>
<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
</div>
<br>

## 멤버 구성
- 김지안(FE) : 상세페이지(CRUD), 글쓰기페이지(CRUD)
- 박금정(FE) : 로그인, 회원가입, 메인페이지, 프로필페이지, ppt 제작

## 화면 구성
이미지 추가 예정

## 아키텍처
이미지 추가 예정

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

#### 게시글 상세페이지
- 제목, 내용, 지도 및 이미지, 조회수, 작성시간 조회
- 댓글 작성 및 삭제

#### 글쓰기 페이지
- 카테고리별 제목, 내용 작성, 지도 및 이미지 첨부
- 게시글 수정, 삭제

#### 마이페이지
- 유저 개인정보 조회 및 수정 (닉네임, 거주지, 자기소개)
- 유저가 작성한 전체 게시글 조회



