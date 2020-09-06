# 생활코딩 - 머신러닝 야학 (tensorflow)

바로가기 [텐서플로우1](https://opentutorials.org/module/4966/) 

## Tensorflow 학습 과정 
1. 과거의 데이터를 준비합니다.
```python
파일경로 = 'https://raw.githubusercontent.com/blackdew/tensorflow1/master/csv/lemonade.csv'
레모네이드 = pd.read_csv(파일경로)

독립 = 레모네이드[['온도']]
종속 = 레모네이드[['판매량']]

print(독립.columns, 종속.columns)
```
2. 모델의 구조를 만듭니다.
```python
X = tf.keras.layers.Input(shape=[1])  # 독립변수
Y = tf.keras.layers.Dense(1)(X) # 종속변수
model = tf.keras.models.Model(X, Y)
model.compile(loss='mse')
```
3. 데이터로 모델을 합습(FIT)합니다.
```python
model.fit(독립, 종속, epochs=10)
```
4. 모델을 이용합니다.
```python
model.predict(독립)
```


## 심화 학습 필요

  - PandasPandas (Python Data Analysis Library)
  - Perceptron
    - [퍼셉트론 Perceptron](https://sacko.tistory.com/10)
  - sigmoid, softmax


## 참고
