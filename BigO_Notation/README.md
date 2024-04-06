# 빅오 표기법 (Big O Notation)
* 가장 빠르게 증가하는 항만을 고려하는 표기법
* 함수의 상한을 나타냄
* 차수가 가장 큰 항에서 계수를 제외하여 표기

## 시간 복잡도/공간 복잡도
### `시간 복잡도` (time complexity)
특정 크기의 입력에 대해서 알고리즘의 수행 시간 분석

아래로 갈수록 성능이 나쁜 알고리즘
- `O(1)`
    * 상수 시간(constant time)
    * 예시) 사칙연산 수행하는 알고리즘
- `O(logN)`
    * 로그 시간(log time)
    * 예시) 절반 씩 쪼개는 연산을 수행하는 알고리즘 ex) 이분 탐색
- `O(N)`
    * 선형 시간 (linear time)
    * 예시) 배열의 원소를 하나씩 확인해서 어떤 원소가 존재하는지 찾고자 할 때 사용하는 알고리즘
- `O(NlogN)`
    * 로그 선형 시간 (log-linear time)
    * 예시) 병합정렬, 힙정렬
- `O(N^2)`
    * 이차 시간 (quadratic time)
    * ex) 동적계산법 - 넵셋 문제
- `O(N^3)`
    * 삼차 시간 (cublic time)
    * ex) 플로이드 워셜
- `O(2^N)`
    * 지수 시간 (exponential time)

### `공간 복잡도` (space somplexity)
