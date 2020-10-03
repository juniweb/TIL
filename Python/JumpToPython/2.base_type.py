## Q1
# 홍길동 씨의 과목별 점수는 다음과 같다. 홍길동 씨의 평균 점수를 구해 보자.

# 과목	점수
# -----------
# 국어	80
# 영어	75
# 수학	55
print('# Q1')
score = [80, 75, 55]
print('평균점수 :', (score[0]+score[1]+score[2])/len(score))
print('')

## Q2
# 자연수 13이 홀수인지 짝수인지 판별할 수 있는 방법에 대해 말해 보자.
print('# Q2')
num1 = 13
print(num1 % 2) # 나머지가 1 이므로 홀수
print('')

## Q3
# 홍길동 씨의 주민등록번호는 881120-1068234이다. 홍길동 씨의 주민등록번호를 연월일(YYYYMMDD) 부분과 그 뒤의 숫자 부분으로 나누어 출력해 보자.
# ※ 문자열 슬라이싱 기법을 사용해 보자.
print('# Q3')
pin="881120-1068234"
print(pin[:6]) # 년월일
print(pin[7:]) # 뒤의 숫자부분
print('')

## Q4
# 주민등록번호 뒷자리의 맨 첫 번째 숫자는 성별을 나타낸다. 주민등록번호에서 성별을 나타내는 숫자를 출력해 보자.

# >>> pin = "881120-1068234"
# ※ 문자열 인덱싱을 사용해 보자.
print('# Q4')
print(pin[7]) # 남자 1, 여자 2
print('')

## Q5
# 다음과 같은 문자열 a:b:c:d가 있다. 문자열의 replace 함수를 사용하여 a#b#c#d로 바꿔서 출력해 보자.

# >>> a = "a:b:c:d"
print('# Q5')
str1 = "a:b:c:d"
print(str1.replace(":","#"))
print('')

## Q6
# [1, 3, 5, 4, 2] 리스트를 [5, 4, 3, 2, 1]로 만들어 보자.
# ※ 리스트의 내장 함수를 사용해 보자.
print('# Q6')
list1 = [1, 3, 5, 4, 2]
list1.sort()
list1.reverse()
print(list1)
print('')

## Q7
# ['Life', 'is', 'too', 'short'] 리스트를 Life is too short 문자열로 만들어 출력해 보자.
# ※ 문자열의 join 함수를 사용하면 리스트를 문자열로 쉽게 만들 수 있다.
print('# Q7')
list2 = ['Life', 'is', 'too', 'short']
print(' '.join(list2))
print('')

## Q8
# (1,2,3) 튜플에 값 4를 추가하여 (1,2,3,4)를 만들어 출력해 보자.
# ※ 더하기(+)를 사용해 보자.
print('# Q8')
tuple1 = (1,2,3)
tuple2 = (4,)
tuple3=tuple1+tuple2
print(tuple3)
print('')

## Q9
# 다음과 같은 딕셔너리 a가 있다.
# >>> a = dict()
# >>> a
# {}

# 다음 중 오류가 발생하는 경우를 고르고, 그 이유를 설명해 보자.

# a['name'] = 'python'
# a[('a',)] = 'python'
# a[[1]] = 'python'
# a[250] = 'python'
print('# Q9')
dic1 = dict()
dic1['name'] = 'python'
dic1[('a',)] = 'python'
# dic1[[1]] = 'python'  # 리스트는 Key 불가
dic1[250] = 'python'
print(dic1)
print('')


## Q10
# 딕셔너리 a에서 'B'에 해당되는 값을 추출해 보자.

# >>> a = {'A':90, 'B':80, 'C':70}
# ※ 딕셔너리의 pop 함수를 사용해 보자.
print('# Q10')
dic2 = {'A':90, 'B':80, 'C':70}
value1=dic2.pop('B')
print(value1)
print(dic2)
print('')

## Q11
# a 리스트에서 중복 숫자를 제거해 보자.

# >>> a = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]
# ※ 집합 자료형의 요솟값이 중복될 수 없다는 특징을 사용해 보자.
print('# Q11')
list3 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]
set1 = set(list3)
print(set1)
print('')


## Q12
# 파이썬은 다음처럼 동일한 값에 여러 개의 변수를 선언할 수 있다. 다음과 같이 a, b 변수를 선언한 후 a의 두 번째 요솟값을 변경하면 b 값은 어떻게 될까? 그리고 이런 결과가 오는 이유에 대해 설명해 보자.

# >>> a = b = [1, 2, 3]
# >>> a[1] = 4
# >>> print(b)
print('# Q12')
list_a = list_b = [1, 2, 3]
list_a[1] = 4
print(list_a)
print(id(list_a))
print(list_b)
print(id(list_b)) # 동일한 리스트 객체를 가리킨다
print('')
