CatchKorea (HelloKorea Service Guide)

외국인 관광객 및 국내 거주 외국인의 편리한 한국 생활 정착을 돕기 위해 RAG 기반 AI 챗봇과 맞춤형 모바일 생활 정보 서비스를 제공하는 웹 프로젝트입니다.

📌 프로젝트 개요

프로젝트 명: CatchKorea (HelloKorea)

개발 기간: 2023년 8월 ~ (해커톤 및 보완 개발)

플랫폼: Mobile Web (Next.js)

주요 역할: 프론트엔드 개발 참여 (RAG 챗봇 UI 연동, 화면 구성 및 사용자 흐름 설계)

저장소 링크:

프론트엔드 클라이언트: CatchKorea_client

해커톤 프론트엔드: Hackathon_FE

💡 기획 배경 및 의도

한국에 처음 온 외국인들은 대중교통, 공공서비스, 금융, 음식 배달 등 일상에 필수적인 디지털 서비스와 앱들을 찾고 활용하는 데 높은 정보 장벽을 느낍니다.

RAG 기반 맞춤형 Q&A 지원: 단순 정보 나열을 넘어, 사용자 상황에 맞는 질문(예: "외국인 신분증 발급법", "지하철 환승 안내")에 정확한 지식 베이스 기반 답변을 제공하는 RAG AI 챗봇을 탑재했습니다.

정보의 파편화 해소: 행정, 교통, 금융, 쇼핑 등 필수 앱과 서비스를 주제별로 분류하여 한눈에 파악할 수 있도록 구성했습니다.

직관적인 사용자 경험: 복잡한 탐색 과정을 줄이고, 첫 화면에서 필요한 서비스 카테고리와 긴급 연락망, AI 챗봇에 즉시 접근할 수 있도록 설계했습니다.

🛠 Tech Stack

Frontend & Client

Core: Next.js (v12), React (v17)

Styling: Emotion, CSS Modules

Network & State: Axios, Fetch API, Web Share API

AI & Chatbot (RAG)

LLM & Architecture: RAG (Retrieval-Augmented Generation) 기반 지식 검색 챗봇

Knowledge Base: 한국 생활 가이드/공공/교통 데이터셋 인덱싱 & LLM 응답 연동

✨ 주요 기능 및 화면 구성

1. RAG 기반 AI 챗봇 (AI Assistant) 🤖

실시간 맞춤 질문/답변: 사용자 질의에 대해 지식 베이스(Knowledge Base)에서 관련 정보를 검색한 후, LLM이 신뢰도 높은 한국 생활 가이드 답변을 생성합니다.

자연스러운 대화형 인터페이스: 공공기관 이용 방법, 대중교통 이용 팁 등 복잡한 절차도 대화 형태로 손쉽게 안내받을 수 있습니다.

2. 메인 화면 (Home)

사용자가 자주 찾는 서비스 카테고리(공공서비스, 교통, 생활 앱)와 AI 챗봇, 긴급 연락처, FAQ로 빠르게 이동할 수 있는 대시보드 화면을 제공합니다.

3. 카테고리 메뉴 (Menu)

행정, 교통, 문화생활, 금융, 배달, 구직 등 필수 애플리케이션 카테고리를 체계적으로 탐색할 수 있습니다.

4. 공공서비스 가이드 (Public Service)

정부24, 모바일 신분증, PASS, 홈택스 등 필수 행정 및 인증 서비스의 상세 정보와 스토어 다운로드 연결을 지원합니다.

5. 교통 및 지도 서비스 (Map & Traffic)

네이버 지도, 카카오 지도 등 필수 내비게이션 앱 안내와 실생활에 유용한 대중교통 이용 팁을 안내합니다.

6. 긴급전화 및 의료 핫라인 (Emergency Hotline)

위급 상황 시 대처 가능한 119 등 필수 응급 연락처와 가이드를 아코디언 UI 형태로 신속하게 확인할 수 있습니다.

📱 전체 서비스 시연 (Demo)

홈 화면 진입부터 카테고리 탐색, AI 챗봇 대화 및 긴급 안내 확인까지의 사용자 흐름입니다.

📂 프로젝트 구조 (Directory Structure)

📦 CatchKorea
 ┣ 📂 components/     # UI 컴포넌트 (Header, MenuBox, ChatBotUI 등)
 ┣ 📂 pages/          # Next.js 페이지 라우팅 (홈, 카테고리, 챗봇, 상세)
 ┣ 📂 public/         # 정적 자원 및 아이콘
 ┣ 📂 styles/         # 글로벌 및 Emotion 스타일
 ┗ 📜 package.json


📝 회고 및 성과 (Retrospective)

RAG 도입으로 답변 신뢰성 강화: 단순 LLM의 환각(Hallucination) 현상을 방지하기 위해 한국 생활 정보 데이터셋을 구축하고 RAG 방식을 채택함으로써 정확한 정보를 안내하도록 설계했습니다.

도메인 특화 UX/UI: 한국 생활이 낯선 외국인 관점에서 공공서비스/교통/긴급 안내 등의 핵심 기능을 최상단 배치를 통해 접근성을 극대화했습니다.

향후 과제: 다국어 번역 AI 파이프라인 연동 및 챗봇 검색 속도(Latency) 최적화 작업 추진 예정.
