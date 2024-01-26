// 34. 부족한 금액 계산

// Description
// 놀이공원의 이 새로운 놀이기구는 매우 인기가 있으며 논스톱으로 운행됩니다. 이 놀이기구의 원래 요금은 이지만, N번째 놀이기구를 이용할 경우 원래 요금의 N배로 요금이 인상되는 것으로 결정되어 있습니다. 즉, 원래 요금이 100인 경우 두 번째는 200, 세 번째는 300이 됩니다.
// 라이드가 사용 될 때 부족을 반환하는 함수를 작성하십시오.
// 그러나 빚진 금액이 충분하면 0을 반환합니다.price solution money count

// 제약 조건
// 승차 요금 : 자연수 2,500 미만.price
// 초기 보유 금액 : 1,000,000,000 미만의 자연수.money
// 놀이기구 수 : 자연수 2,500 미만.count

function solution(price, money, count) {
  var answer = -1;
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
    if (money >= result) {
      answer = 0;
    } else {
      answer = result - money;
    }
  }
  return answer;
}
