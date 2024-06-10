Education Managing Site

Fuse-React에서 deprecated, 교육만을 위한 부분을 제외
사용한 기법을 전부 흡수하여 제작

방향
-> 2개 테마, 2개 레이아웃 사용
-> CreateAPI, Slices사용
-----------------------------
template화 후 batch 파일로
mock API 적용 후, 적용 전 부분으로 git repo를 참조 때릴 예정 

제외할 부분
-> 언어방향 캐싱 (실용성 x , 테마와 코드 같음 테마 캐싱으로 대체)
-> mui/styles (deprecated)
->  
->

주요 변경 점
-> App.tsx, withAppProvider, AppContext를 한파일로 묶음
: 코드가 길지도 않고 코드 직관성이 떨어짐
-> 폴더 및 파일구조
: 조금 더 이해하기 쉽게 많이 바꿈
