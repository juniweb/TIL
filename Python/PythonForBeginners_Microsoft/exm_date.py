from datetime import datetime, timedelta

today = datetime.now()

print('Today is: ' + str(today))

one_day = timedelta(days=1)
yesterday = today - one_day
print('Yesterday was: ' + str(yesterday))

print('Year is: ' + str(today.year))
print('Month is: ' + str(today.month))
print('Day is: ' + str(today.day))
print('Hour is: ' + str(today.hour))
print('Minute is: ' + str(today.minute))
print('Second is: ' + str(today.second))

# strftime - datetime -> 문자열
# strptime - 문자열 -> datetime

print(today.strftime('%Y년 %m월 %d일 %H시 %M분 %S초'))

birthday_date = datetime.strptime('20200912', '%Y%m%d')

print('Birthday: ' + str(birthday_date))

two_weeks = timedelta(weeks=2)
before_two_weeks_day = today - two_weeks
print('Yesterday was: ' + str(before_two_weeks_day))