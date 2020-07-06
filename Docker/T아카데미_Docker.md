# 1 도커 개요 및 소개

# 2 도커 컨테이너 만들기

### 도커 설치하기 (Windows 10 Pro )

Windows 10 Pro 버전(x64)인 경우, Docker 공식 사이트에 접속하여 [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows) 파일을 다운로드 하여 설치를 합니다.

***Docker 설치 전 확인 사항***
  1. Windows 10 x64 Pro, Enterprize, Education 버전
  2. CPU 가상화 기능 활성화
  3. **Windows 기능 켜기/끄기** 에서 `Hyper-V` 기능 활성화


### 도커 설치 확인

```
# 버전 확인
$ docker version

# 정보 확인
$ docker info
```

### 컨체이너 실행하기

```bash
$ docker run [OPTIONS] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]
```
| 옵션 | 설명 |
|---:|---:|
| -d | detached mode 흔히 말하는 백그라운드 모드 |
| -p | 호스트와 컨테이너의 포트를 연결(포워딩) |
| -v | 호스트와 컨테이너의 디렉토리를 연결(마운트) |
| -e | 컨테이너 내에서 사용할 환경변수 설정 |
| --name | 컨테이너 이름 설정 |
| --rm | 프로세스 종료시 컨테이너 자동 제거 |
| -it | -i와 -t를 동시에 사용한 것으로 터미널 입력을 위한 옵션 |
| --network | 네트워크 연결 |


### 컨테이너 목록 확인하기
실행중인 컨테이너 목록 확인
```bash
$ docker ps
```

중지된 컨테이너 포함하여 컨테이너 목록 확인
```bash
$ docker ps -a
```

### 컨테이너 중지하기
```bash
$ docker stop [OPTIONS] CONTAINER [CONTAINER...]
```

**Example**
```bash
$ docker stop d81 f47
```
> - 띄어쓰기로 여러개 컨테이너를 중지할 수있다. 
> - 컨테이너 ID는 일부만 입력해도 된다.

### 컨테이너 제거하기
```bash
$ docker rm [OPTIONS] CONTAINER [CONTAINER...]
```

### 컨테이너 로그보기
```bash
$ docker logs [OPTIONS] CONTAINER
```

### 이미지 목록 확인하기
```bash
$ docker images [OPTIONS] [REPOSITORY[:TAG]]
```

### 이미지 다운로드 하기
```bash
$ docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

### 이미지 삭제하기
```bash
$ docker rmi [OPTIONS] IMAGE [IMAGE...]
```

### 네트워크 만들기

### 볼륨 마운트

### Docker Compose


# 3 이미지 만들고 배포하기

### 이미지 만들기

```bash
$ docker commit CONTAINER_ID IMAGE_NAME
```

```bash
$ docker run -it --name=git  ubuntu:16.04 /bin/bash

$ winpty docker run -it ubuntu:16.04

# apt-get update

# apt-get install -y git

# git version
```

Windows gitbash 에서 다음과 같은 오류 발생.  
[[Docker] the input device is not a TTY. If you are using mintty, try prefixing the command with 'winpty'](https://forgiveall.tistory.com/471) 참고하여 해결
```bash
$ docker run -it --name=git  ubuntu:16.04 /bin/bash

the input device is not a TTY.  If you are using mintty, try prefixing the command with 'winpty'
```

```bash
$ docker ps

$ docker diff <CONTAINER_ID>

$ docker commit <CONTAINER_ID> ubuntu:git

$ docker run -it ubuntu:git bash

# git
```


### Dockerfile

```bash
FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y git
```

```bash
$ docker build -t ununtu:git02 .
```
> `.` 은 현재 디렉토리를 의미함


**FROM**  
베이스 이미지 지정
```bash
FROM <이미지 이름>

ex)
FROM ubuntu:16.04
```

**ADD**  
파일추가
```bash
ADD <추가할 파일><파일이 추가될 경로>

ex)
ADD data.txt /tmp/data.txt
```
> 추가할 파일은 현재 디렉토리 파일만 가능

**RUN**  
명령어 실행
```bash
RUN <명령어>

ex)
RUN apt-get install -y git
```

**WORKDIR**  
작업 디렉토리 변경
```bash
WORKDIR <디렉토리>

ex)
WORKDIR /tmp
```

**ENV**  
환경변수 기본값 지정
```bash
ENV <환경변수> <값>

ex)
ENV AWESOME_VAR FOOBAR
```

**EXPOSE**  
컨테이너로 실행 시 노출시킬 포트
```bash
EXPOSE <포트>

ex)
EXPOSE 3000
```
> `-p` 옵션은 같이 사용해야 함

**CMD**  
이미지의 기본 실행 명령어 지정
```bash
CMD <명령어>

ex)
CMD /run.sh
```


# 4 도커 이미지 자동 배포하기

### Jenkins

**Jenkins 실행**
```bash
# windows
docker run -u root --rm -p 8080:8080 --name jenkins \ -v $(데이터디렉토리):/var/jenkins_home \ subicura/jenkins:2

ex)
docker run -u root --rm -p 8080:8080 --name jenkins \ -v //c/jenkins:/var/jenkins_home \ subicura/jenkins:2
```

> 일반적으로 Docker 명령어보다는 **Docker Compose** 를 사용



[참고]
  - [Windows 10 Docker Desktop 설치 방법](https://luckygg.tistory.com/165)
  - [Docker 기본 사용법](http://pyrasis.com/Docker/Docker-HOWTO)