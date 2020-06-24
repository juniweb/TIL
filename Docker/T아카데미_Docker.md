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

```bash
$ docker run -it --name=git  ubuntu:16.04 /bin/bash

root@1884b1cfcfe8:/# apt-get update

root@1884b1cfcfe8:/# apt-get install git
```


[참고]
  - [Windows 10 Docker Desktop 설치 방법](https://luckygg.tistory.com/165)
  - [Docker 기본 사용법](http://pyrasis.com/Docker/Docker-HOWTO)