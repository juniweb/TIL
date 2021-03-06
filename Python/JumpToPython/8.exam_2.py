## Q11 모듈 사용 방법
# C:\doit 디렉터리에 mymod.py 파이썬 모듈이 있다고 가정해 보자. 명령 프롬프트 창에서 파이썬 셸을 열어 이 모듈을 import해서 사용할 수 있는 방법을 모두 기술하시오. (즉 다음과 같이 import mymod를 수행할 때 오류가 없어야 한다.)

# ```
# >>> import mymod
# >>>
# ```
print('# Q11')
print('1. sys 모듈 사용')
print('2. 환경변수(PYTHONPATH) 에 디렉토리(C:\doit) 추가')
print('3. 현재 디렉토리 사용')

# ```
# 1. sys 모듈 사용
# >>> import sys
# >>> sys.path.append('C:\doit')
# >>> import mymod
# 
# 2. 환경변수(PYTHONPATH) 에 디렉토리(C:\doit) 추가
# C:\Users\home>set PYTHONPATH=c:\doit
# C:\Users\home>python
# >>> import mymod
# 
# 3. 현재 디렉토리 사용
# C:\Users\home>cd c:\doit
# C:\doit>python
# >>> import mymod
# ```

print('')

## Q12 오류와 예외 처리
# 다음 코드의 실행 결과를 예측하고 그 이유에 대해 설명하시오.

# ```
# result = 0
# 
# try:
#     [1, 2, 3][3]
#     "a"+1
#     4 / 0
# except TypeError:
#     result += 1
# except ZeroDivisionError:
#     result += 2
# except IndexError:
#     result += 3
# finally:
#     result += 4
# 
# print(result)
# ```
print('# Q12')
result = 0
try:
    [1,2,3][3] # IndexError
    "a" + 1    # TypeError
    4 / 0      # TypeError
except TypeError:
    result += 1
except ZeroDivisionError:
    result += 2
except IndexError:
    result += 3
finally:
    result += 4

print(result) # 7 - IndexError 발생하여(+3), finally(+4)
print('')

## Q13 DashInsert 함수
# DashInsert 함수는 숫자로 구성된 문자열을 입력받은 뒤 문자열 안에서 홀수가 연속되면 두 수 사이에 - 를 추가하고, 
# 짝수가 연속되면 * 를 추가하는 기능을 갖고 있다. DashInsert 함수를 완성하시오.

# ```
# 입력 예시: 4546793
# 출력 예시: 454*67-9-3
# ```
print('# Q13')
def DashInsert(numbers):
    result_list = []
    num_list = list(map(int,numbers))
    prev_num = 0
    for i, num in enumerate(num_list):
        if i != 0:
            if prev_num % 2 == 1 and  num % 2 == 1:
                result_list.append('-')
            elif prev_num % 2 == 0 and  num % 2 == 0:
                result_list.append('*')

        result_list.append(str(num))
        prev_num = num

    return ''.join(result_list)
        

print(DashInsert('4546793'))
print('')

## Q14 문자열 압축하기
# 문자열을 입력받아 같은 문자가 연속적으로 반복되는 경우에 그 반복 횟수를 표시해 문자열을 압축하여 표시하시오.

# ```
# 입력 예시: aaabbcccccca
# 출력 예시: a3b2c6a1
# ```
print('# Q14')
def CompressString(data):
    result = ''
    prev_alpha = ''
    cnt = 1
    for alpha in data:
        if prev_alpha != alpha:
            if cnt > 1 : result += str(cnt)
            result += alpha
            cnt = 1
        else:
            cnt += 1

        prev_alpha = alpha

    return result
        

print(CompressString('aaabbcccccca'))
print('')

## Q15 Duplicate Numbers
# 0~9의 문자로 된 숫자를 입력받았을 때, 이 입력값이 0~9의 모든 숫자를 각각 한 번씩만 사용한 것인지 확인하는 함수를 작성하시오.

# ```
# 입력 예시: 0123456789 01234 01234567890 6789012345 012322456789
# 출력 예시: true false false true false
# ```
print('# Q15')
def IsDuplicateNumbers(data):
    result = True
    data_list = sorted(data)
    print(data_list)

    for i, num in enumerate(data_list):
        if i != int(num):
            result = False
            break

    return result

print(IsDuplicateNumbers('012322456789'))
print('')

## Q16 모스 부호 해독
# 문자열 형식으로 입력받은 모스 부호(dot:. dash:-)를 해독하여 영어 문장으로 출력하는 프로그램을 작성하시오.
#  - 글자와 글자 사이는 공백 1개, 단어와 단어 사이는 공백 2개로 구분한다.
#  - 예를 들어 다음 모스 부호는 "HE SLEEPS EARLY"로 해석해야 한다.

# ```
# .... .  ... .-.. . . .--. ...  . .- .-. .-.. -.--
# ```

# 모스부호 규칙 표

# 문자 부호 문자 부호
# A  .-      N  -.
# B  -...    O  ---
# C  -.-.    P  .--.
# D  -..     Q  --.-
# E  .       R  .-.
# F  ..-.    S  ...
# G  --.     T  -
# H  ....    U  ..-
# I  ..      V  ...-
# J  .---    W  .--
# K  -.-     X  -..-
# L  .-..    Y  -.--
# M  --      Z  --..
print('# Q16')
def MorseCode(data):
    morse_dic = {
        '.-'    : 'A',
        '-...'  : 'B',
        '-.-.'  : 'C',
        '-..'   : 'D',
        '.'     : 'E',
        '..-.'  : 'F',
        '--.'   : 'G',
        '....'  : 'H',
        '..'    : 'I',
        '.---'  : 'J',
        '-.-'   : 'K',
        '.-..'  : 'L',
        '--'    : 'M',
        '-.'    : 'N',
        '---'   : 'O',
        '.--.'  : 'P',
        '--.-'  : 'Q',
        '.-.'   : 'R',
        '...'   : 'S',
        '-'     : 'T',
        '..-'   : 'U',
        '...-'  : 'V',
        '.--'   : 'W',
        '-..-'  : 'X',
        '-.--'  : 'Y',
        '--..'  : 'Z',
    }
   
    word_list = data.split('  ')
    print(word_list)

    word_result = []

    for word in word_list:
        alpha_list = word.split(' ')
        print('')
        print(alpha_list)

        alpha_result = []

        for alpha in alpha_list:
            alpha = morse_dic[alpha]
            alpha_result.append(alpha)

        word_result.append(''.join(alpha_result))
        print(alpha_result)

    return ' '.join(word_result)

print(MorseCode('.... .  ... .-.. . . .--. ...  . .- .-. .-.. -.--'))
print('')

## Q17 기초 메타 문자
# 다음 중 정규식 a[.]{3,}b과 매치되는 문자열은 무엇일까?

# 1.acccb
# 2.a....b
# 3.aaab
# 4.a.cccb
print('# Q17')
import re

p17 = re.compile("a[.]{3,}b")

print (p17.match("acccb"))    # None
print (p17.match("a....b"))   # 매치 객체 출력
print (p17.match("aaab"))     # None
print (p17.match("a.cccb"))   # None

print('')

## Q18 문자열 검색
# 다음 코드의 결괏값은 무엇일까?

# ```
# >>> import re
# >>> p = re.compile("[a-z]+")
# >>> m = p.search("5 python")
# >>> m.start() + m.end()
# ```
print('# Q18')
p18 = re.compile("[a-z]+")
m = p18.search("5 python")
print(m.start() + m.end()) # 10
print('')

## Q19 그루핑
# 다음과 같은 문자열에서 휴대폰 번호 뒷자리인 숫자 4개를 ####로 바꾸는 프로그램을 정규식을 사용하여 작성하시오.

# ```
# """
# park 010-9999-9988
# kim 010-9909-7789
# lee 010-8789-7768
# """
# ```
print('# Q19')

s = """
park 010-9999-9988
kim 010-9909-7789
lee 010-8789-7768
"""

pat19 = re.compile("(\d{3}[-]\d{4})[-]\d{4}")
result = pat19.sub("\g<1>-####", s)

print(result)
print('')

## Q20 전방 탐색
# 다음은 이메일 주소를 나타내는 정규식이다. 이 정규식은 park@naver.com, kim@daum.net, lee@myhome.co.kr 등과 매치된다. 긍정형 전방 탐색 기법을 사용하여 .com, .net이 아닌 이메일 주소는 제외시키는 정규식을 작성하시오.

# ```
# .*[@].*[.].*$
# ```
print('# Q20')
pat20 = re.compile(".*[@].*[.](?=com$|net$).*$")

print(pat20.match("pahkey@gmail.com"))
print(pat20.match("kim@daum.net"))
print(pat20.match("lee@myhome.co.kr"))
print('')