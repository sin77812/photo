# 이미지 최적화 가이드

## 현재 상황
- 이미지 파일들이 4-6MB로 매우 큼
- 로딩 속도 개선 필요

## 권장 최적화 방법

### 1. 이미지 압축 도구 사용
**온라인 도구:**
- https://tinypng.com/
- https://compressor.io/
- https://imagecompressor.com/

**추천 설정:**
- 히어로 이미지: 1920x1080px, 80% 품질
- 서비스 이미지: 800x600px, 75% 품질  
- 포트폴리오 이미지: 600x900px (프로필), 800x600px (기타), 75% 품질
- About 이미지: 1200x800px, 80% 품질

### 2. WebP 포맷 변환
```bash
# ImageMagick 사용 예시
convert image.png -quality 80 image.webp
```

### 3. 목표 파일 크기
- 히어로 이미지: 200-300KB
- 서비스/포트폴리오 이미지: 100-200KB
- About 이미지: 150-250KB

## 구현된 최적화 기능
1. ✅ Lazy Loading - 화면에 보일 때만 로드
2. ✅ Image Preloading - 중요 이미지 미리 로드
3. ✅ CSS 최적화 - 렌더링 개선

## 사용법
1. 위 도구들로 이미지 압축
2. 기존 파일과 교체
3. 웹사이트 성능 향상 확인