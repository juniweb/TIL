## Q1 문자열 바꾸기
# 다음과 같은 문자열이 있다.

# ```
# a:b:c:d
# ```

# 문자열의 split와 join 함수를 사용하여 위 문자열을 다음과 같이 고치시오.

# ```
# a#b#c#d
# ```
print('# Q1')
str1 = "a:b:c:d"
list1 = str1.split(":")
print("#".join(list1))
print('')

## Q2 딕셔너리 값 추출하기
# 다음은 딕셔너리의 a에서 'C'라는 key에 해당하는 value를 출력하는 프로그램이다.

# ```
# >>> a = {'A':90, 'B':80}
# >>> a['C']
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 'C'
# ```

# a 딕셔너리에는 'C'라는 key가 없으므로 위와 같은 오류가 발생한다. 'C'에 해당하는 key 값이 없을 경우 오류 대신 70을 얻을 수 있도록 수정하시오.
print('# Q2')
dic2 = {'A':90, 'B':80}
print(dic2.get('C', 70))
print('')

## Q3 리스트의 더하기와 extend 함수
# 다음과 같은 리스트 a가 있다.

# ```
# >>> a = [1, 2, 3]
# ```

# 리스트 a에 [4, 5]를 + 기호를 사용하여 더한 결과는 다음과 같다.

# ```
# >>> a = [1, 2, 3]
# >>> a = a + [4,5]
# >>> a
# [1, 2, 3, 4, 5]
# ```

# 리스트 a에 [4,5]를 extend를 사용하여 더한 결과는 다음과 같다.

# ```
# >>> a = [1, 2, 3]
# >>> a.extend([4, 5])
# >>> a
# [1, 2, 3, 4, 5]
# ```

# + 기호를 사용하여 더한 것과 extend한 것의 차이점이 있을까? 있다면 그 차이점을 설명하시오.
print('# Q3')
list3_plus = [1, 2, 3]
print(id(list3_plus))

list3_plus = list3_plus + [4, 5]
print(list3_plus)
print(id(list3_plus)) # list 에 + 를 하면 id(주소)가 변경된다

print('')

list3_extend = [1, 2, 3]
print(id(list3_extend))

list3_extend.extend([4, 5])
print(list3_extend)
print(id(list3_extend)) # list 에 extend 를 하면 id(주소)가 변경되지 않는다

print('')

## Q4 리스트 총합 구하기
# 다음은 A학급 학생의 점수를 나타내는 리스트이다. 다음 리스트에서 50점 이상 점수의 총합을 구하시오.

# ```
# A = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
# ```
print('# Q4')
list4 = [20, 55, 67, 82, 45, 33, 90, 87, 100, 25]
score_sum = 0
list4_filter = list(filter(lambda score: score >= 50, list4))
for score in list4_filter:
    score_sum += score

print(score_sum)
print('')

## Q5 피보나치 함수
# 첫 번째 항의 값이 0이고 두 번째 항의 값이 1일 때, 이후에 이어지는 항은 이전의 두 항을 더한 값으로 이루어지는 수열을 피보나치 수열이라고 한다.

# ```
# 0, 1, 1, 2, 3, 5, 8, 13, ...
# ```

# 입력을 정수 n으로 받았을 때, n 이하까지의 피보나치 수열을 출력하는 함수를 작성해 보자.
print('# Q5')
fib_n = input('피보나치를 계산할 정수 n을 입력하세요:')
print('fib_n:' + fib_n)
fib_nums = []

def fib(num):
    if num == 0 or num == 1: 
        return num
    else:
        return fib(num-2) + fib(num-1)

for i in range(0,int(fib_n)):
    fib_nums.append(fib(i))

print(fib_nums)
print('')

## Q6 숫자의 총합 구하기
# 사용자로부터 다음과 같은 숫자를 입력받아 입력받은 숫자의 총합을 구하는 프로그램을 작성하시오. (단 숫자는 콤마로 구분하여 입력한다.)

# ```
# 65,45,2,3,45,8
# ```
print('# Q6')
input6 = input('총합을 구할 숫자를 입력하세요(숫자는 콤마로 구분):')
print('input6:' + input6)
list6 = input6.split(",")
list6 = list(map(lambda num: num.replace(' ',''),list6))
print(list6)
total_sum = 0
for num in list6:
    total_sum += int(num)

print(total_sum)    
print('')

## Q7 한 줄 구구단
#사용자로부터 2~9의 숫자 중 하나를 입력받아 해당 숫자의 구구단을 한 줄로 출력하는 프로그램을 작성하시오.

# 실행 예)

# ```
# 구구단을 출력할 숫자를 입력하세요(2~9): 2
# 2 4 6 8 10 12 14 16 18
# ```
print('# Q7')
def gugu(num):
    i = 1
    while i < 10:
        print(i*num, end=' ')
        i += 1

input7 = input('구구단을 출력할 숫자를 입력하세요(2~9):')

gugu(int(input7))

print('')

## Q8 역순 저장
# 다음과 같은 내용의 파일 abc.txt가 있다.

# ```
# AAA
# BBB
# CCC
# DDD
# EEE
# ```

# 이 파일의 내용을 다음과 같이 역순으로 바꾸어 저장하시오.

# ```
# EEE
# DDD
# CCC
# BBB
# AAA
# ```
print('# Q8')
f8 = open('abc.txt', 'r')
lines8 = f8.readlines()
f8.close()

lines8.reverse()

f8 = open('abc.txt', 'w')
for line in lines8:
    print(line)
    line = line.strip()  # 포함되어 있는 줄 바꿈 문자 제거
    f8.write(line)
    f8.write('\n')

f8.close()

print('')

## Q9 평균값 구하기
# 다음과 같이 총 10줄로 이루어진 sample.txt 파일이 있다. sample.txt 파일의 숫자 값을 모두 읽어 총합과 평균 값을 구한 후 평균 값을 result.txt 파일에 쓰는 프로그램을 작성하시오.

# ```
# 70
# 60
# 55
# 75
# 95
# 90
# 80
# 80
# 85
# 100
# ```
print('# Q9')
f9 = open('sample.txt', 'r')
lines9 = f9.readlines()
f9.close()

tot9 = 0
avg9 = 0

for line in lines9:
    line = line.strip()  # 포함되어 있는 줄 바꿈 문자 제거
    tot9 += int(line)

avg9 = tot9/len(lines9)

print('total: ' + str(tot9))
print('average: ' + str(avg9))

f9 = open('result.txt', 'w')
f9.write('total:' + str(tot9))
f9.write('\n')
f9.write('average:' + str(avg9))
f9.close()

print('')

## Q10 사칙연산 계산기
# 다음과 같이 동작하는 클래스 Calculator를 작성하시오.

# ```
# >>> cal1 = Calculator([1,2,3,4,5])
# >>> cal1.sum() # 합계
# 15
# >>> cal1.avg() # 평균
# 3.0
# >>> cal2 = Calculator([6,7,8,9,10])
# >>> cal2.sum() # 합계
# 40
# >>> cal2.avg() # 평균
# 8.0
# ```
print('# Q10')
class Calculator:
    def __init__(self, numbers):
        self.numbers = numbers
        self.total = 0

    def sum(self):
        result = 0
        for num in self.numbers:
            result += num
        self.total = result
        return self.total

    def avg(self):
        return self.total / len(self.numbers)

cal1 = Calculator([1,2,3,4,5])
print('cal1.sum: ' + str(cal1.sum())) # 합계
print('cal1.avg: ' + str(cal1.avg())) # 평균

cal2 = Calculator([6,7,8,9,10])
print('cal2.sum: ' + str(cal2.sum())) # 합계
print('cal2.avg: ' + str(cal2.avg())) # 평균

print('')
