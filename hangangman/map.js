 // 네이버 지도 초기화 함수
let map;
let markers = []; // 마커를 저장할 배열

      const facilities = 
      [
    {
        "FCLTY_NM": "강남스포츠문화센터골프연습장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "골프연습장",
        "PROGRM_NM": "오후골프07",
        "FCLTY_ADDR": "강남구 수서동718",
        "latitude": 37.4889732,
        "longitude": 127.105346,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "강남스포츠문화센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "아쿠아로빅E",
        "FCLTY_ADDR": "서울특별시 강남구 밤고개로1길 52 (수서동)",
        "latitude": 37.4890024,
        "longitude": 127.1052805,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "강북웰빙스포츠센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "풋살(초등1~3)A 16시 [화목]",
        "FCLTY_ADDR": "서울특별시 강북구 오현로31길 51 (번동)",
        "latitude": 37.6304351,
        "longitude": 127.0378089,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "개운산스포츠센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "[NEW토수영]초등학생(10시)",
        "FCLTY_ADDR": "서울특별시 성북구 북악산로 949-60 (종암동)",
        "latitude": 37.5968739,
        "longitude": 127.0261159,
        "PROGRM_TY_NM": "수영, 복합문화취미교실, 스포츠문화교실, 헬스"
    },
    {
        "FCLTY_NM": "개웅산생활체육관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "21소도구필라테스B",
        "FCLTY_ADDR": "서울특별시 구로구 개봉로3길 108-20 (개봉동)",
        "latitude": 37.4853424,
        "longitude": 126.8497562,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "거제국민체육센터",
        "CTPRVN_NM": "경상남도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "헬스",
        "FCLTY_ADDR": "경상남도 거제시 거제면 거제남서로 3485-17",
        "latitude": 34.8518556,
        "longitude": 128.5815338,
        "PROGRM_TY_NM": "헬스"
    },
    {
        "FCLTY_NM": "경주국민체육센터",
        "CTPRVN_NM": "경상북도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "초등학생반 16시 중급",
        "FCLTY_ADDR": "경상북도 경주시 유림로5번길 85-15 (황성동)",
        "latitude": 35.8790444,
        "longitude": 129.2170901,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "계남근린공원테니스장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "간이운동장",
        "PROGRM_NM": "평일A(월목 배상윤)09:30",
        "FCLTY_ADDR": "서울특별시 양천구 신정로 260 (신정동, 신트리4단지아파트)",
        "latitude": 37.5111069,
        "longitude": 126.8506317,
        "PROGRM_TY_NM": "계남테니스장"
    },
    {
        "FCLTY_NM": "고양국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "헬스 월화수목금토일06:00~22:00",
        "FCLTY_ADDR": "경기도 고양시 덕양구 호국로 876 (성사동)",
        "latitude": 37.6622044,
        "longitude": 126.8438746,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "고양어울림누리내 꽃우물수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "아쿠아로빅(토)-주말아쿠아로빅A반 토10:00~10:50",
        "FCLTY_ADDR": "경기도 고양시 덕양구 어울림로 33 (성사동)",
        "latitude": 37.6495942,
        "longitude": 126.8345322,
        "PROGRM_TY_NM": "수영, 자유수영, 아쿠아로빅"
    },
    {
        "FCLTY_NM": "고양체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "골프(화목)-새벽4반(초,중,상급) 화목07:30~08:50",
        "FCLTY_ADDR": "경기도 고양시 일산서구 중앙로 1601 (대화동)",
        "latitude": 37.6764626,
        "longitude": 126.7430695,
        "PROGRM_TY_NM": "G.X룸, 골프, 아쿠아로빅, 수영, 스쿼시, 라켓볼, 서킷트레이닝, 요가, 필라테스, 다이빙, 월자유수영, 헬스, 스피닝"
    },
    {
        "FCLTY_NM": "고천다목적실내체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "고천 09시 월수금 배구",
        "FCLTY_ADDR": "경기도 의왕시 오전로 18 (왕곡동)",
        "latitude": 37.3479032,
        "longitude": 126.9823557,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "과천시민회관다목적체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "PT10회+종일반(토:06~18시)",
        "FCLTY_ADDR": "경기도 과천시 통영로 5 (중앙동)",
        "latitude": 37.4282679,
        "longitude": 126.9892375,
        "PROGRM_TY_NM": "헬스, 요가및필라테스, 기타체육프로그램, 댄스프로그램(발레,줌바 등), 볼링, 무도프로그램, 실내골프"
    },
    {
        "FCLTY_NM": "관문실내체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "관문헬스(장애인스포츠강좌이용권)",
        "FCLTY_ADDR": "경기도 과천시 중앙로 294 (관문동)",
        "latitude": 37.4414931,
        "longitude": 126.9969731,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "관악구민종합체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "피아노B(13)",
        "FCLTY_ADDR": "서울특별시 관악구 낙성대로3길 37 (봉천동)",
        "latitude": 37.4730839,
        "longitude": 126.9603185,
        "PROGRM_TY_NM": "교육문화프로그램, 헬스, 에어로빅, 복합프로그램, 스쿼시, 배드민턴, 검도, 다이어트댄스, 어린이농구교실, 탁구"
    },
    {
        "FCLTY_NM": "관악청소년센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "초등수영 토요일 상급 17시",
        "FCLTY_ADDR": "서울특별시 관악구 신림로23길 17 (신림동)",
        "latitude": 37.4701725,
        "longitude": 126.9351783,
        "PROGRM_TY_NM": "수영프로그램"
    },
    {
        "FCLTY_NM": "광교웰빙국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "스포츠",
        "FCLTY_ADDR": "경기도 수원시 영통구 웰빙타운로 71 (이의동)",
        "latitude": 37.3050326,
        "longitude": 127.0430984,
        "PROGRM_TY_NM": "스포츠 > SNPE바른자세척추운동, 다목적체육관 > 방학특강, 스포츠 > 훌라댄스, 스포츠 >필라테스, 스포츠 > 트로트댄스, 스포츠 > 타바타, 스포츠 > 줌바, 스포츠 > 요가&필라테스, 스포츠 > 요가, 스포츠 > 에어로빅, 스포츠 > 방송댄스, 스포츠 > 라인댄스, 수영 > 종합반, 수영 > 저녁, 수영 > 자유수영, 수영 > 오전, 수영 > 어린이, 수영 > 아쿠아워킹, 수영 > 아쿠아로빅, 수영 > 소그룹, 수영 > 새벽, 수영 > 방학특강, 다목적체육관 > 성장운동, 다목적체육관 > 배드민턴"
    },
    {
        "FCLTY_NM": "광장동 실내배드민턴장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "주3회강습반(월수금)2부",
        "FCLTY_ADDR": "서울특별시 광진구 천호대로140길 40 (광장동)",
        "latitude": 37.5444253,
        "longitude": 127.1001957,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "광주시문화스포츠센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "11시/B(기간)_뮤직복싱2",
        "FCLTY_ADDR": "경기도 광주시 회안대로 891 (송정동)",
        "latitude": 37.4268685,
        "longitude": 127.2547061,
        "PROGRM_TY_NM": "[문화스포츠센터] 체육관, [문화스포츠센터] 수영, [문화스포츠센터] 수영 방학특강"
    },
    {
        "FCLTY_NM": "광진구민체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "골프연습장",
        "PROGRM_NM": "영재 종이접기(자격증대비반)",
        "FCLTY_ADDR": "서울특별시 광진구 구천면로 14 (광장동)",
        "latitude": 37.5460078,
        "longitude": 127.106854,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "광진문화예술회관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "골프연습장",
        "PROGRM_NM": "토요 골프 15",
        "FCLTY_ADDR": "서울특별시 광진구 능동로 76 (자양동)",
        "latitude": 37.5374246,
        "longitude": 127.070453,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "구로구민체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "17기구필라테스A",
        "FCLTY_ADDR": "서울특별시 구로구 고척로45길 39 (고척동)",
        "latitude": 37.506597,
        "longitude": 126.8532878,
        "PROGRM_TY_NM": "통합"
    },
    {
        "FCLTY_NM": "구리국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "06시양지클럽_월정기배드민턴",
        "FCLTY_ADDR": "인창동 622-28번지 일원",
        "latitude": 37.6050932,
        "longitude": 127.1297959,
        "PROGRM_TY_NM": "배드민턴프로그램"
    },
    {
        "FCLTY_NM": "구리시멀티스포츠센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "06B(월수금)스쿼시강습(중급)",
        "FCLTY_ADDR": "경기도 구리시 체육관로 137-25 (교문동)",
        "latitude": 37.5961644,
        "longitude": 127.1351567,
        "PROGRM_TY_NM": "스쿼시프로그램, 다용도장프로그램, 볼링장프로그램"
    },
    {
        "FCLTY_NM": "구리실내배드민턴장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "20시하나로클럽_월정기배드민턴",
        "FCLTY_ADDR": "교문동 3-2번지 일원",
        "latitude": 37.5956691,
        "longitude": 127.1364754,
        "PROGRM_TY_NM": "배드민턴프로그램"
    },
    {
        "FCLTY_NM": "구리청소년수련관수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "아쿠아로빅E[월수금18시]",
        "FCLTY_ADDR": "인창동 673-4번지",
        "latitude": 37.6037998,
        "longitude": 127.1418304,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "국민생활관",
        "CTPRVN_NM": "강원특별자치도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "주말수영",
        "FCLTY_ADDR": "강원특별자치도 춘천시 효자상길5번길 11 (효자동)",
        "latitude": 37.8731654,
        "longitude": 127.7284523,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "(15)-댄스스포츠(중급)_월수금",
        "FCLTY_ADDR": "부산광역시 동래구 미남로 110 (온천동)",
        "latitude": 35.2036114,
        "longitude": 129.0698392,
        "PROGRM_TY_NM": "다목적실[I] 프로그램, 다목적실[II] 프로그램, 다목적실［III］, 헬스 프로그램"
    },
    {
        "FCLTY_NM": "국민체육센터 다목적체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "웰빙요가_18시(화,목)",
        "FCLTY_ADDR": "경기도 시흥시 하중로 226 (하중동)",
        "latitude": 37.3915031,
        "longitude": 126.8053207,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "국민체육센터 수영장",
        "CTPRVN_NM": "강원특별자치도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "어린이수영",
        "FCLTY_ADDR": "강원특별자치도 춘천시 우석로 102-3 (석사동)",
        "latitude": 37.8626344,
        "longitude": 127.7566898,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "군포시청소년수련관수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "화목20교정상(중-고-성인)",
        "FCLTY_ADDR": "경기도 군포시 산본로 322 (금정동)",
        "latitude": 37.3598091,
        "longitude": 126.9347135,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "근로자종합복지관 수영장",
        "CTPRVN_NM": "강원특별자치도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "중급",
        "FCLTY_ADDR": "강원특별자치도 춘천시 후석로440번길 9 (후평동)",
        "latitude": 37.88924,
        "longitude": 127.7439562,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "금곡공원국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "기구필라테스_월수금_15시",
        "FCLTY_ADDR": "경기도 성남시 분당구 금곡로 302 (정자동)",
        "latitude": 37.3571429,
        "longitude": 127.1097677,
        "PROGRM_TY_NM": "필라테스, 아쿠아로빅, 헬스, 기구필라테스, 수영, 요가, 탁구, 배드민턴, 기천문"
    },
    {
        "FCLTY_NM": "금천구민문화체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "번지핏/토09시~09시50분/4회수업기준/1층다목적룸  회원구분:단체레슨반  장소:1층다목적룸",
        "FCLTY_ADDR": "서울특별시 금천구 독산로54길 188 (독산동)",
        "latitude": 37.4700675,
        "longitude": 126.907373,
        "PROGRM_TY_NM": "체육프로그램, 기구필라테스, 라켓볼, 유아 및 어린이 체육, 바디핏"
    },
    {
        "FCLTY_NM": "금천구민문화체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "실버수영(마스터)/화,목(14:00~14:50)강습+토(12:00~13:50)자유수영  회원구분:마스터(접영이상)  장소:수영장",
        "FCLTY_ADDR": "금천구 독산4동371-2",
        "latitude": 37.4701567,
        "longitude": 126.9072651,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "기장군국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "11시 스피닝(수,금)(2024)",
        "FCLTY_ADDR": "부산광역시 기장군 일광면 체육공원1로 29",
        "latitude": 35.3050082,
        "longitude": 129.2429354,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "기장군국민체육센터수영장",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "07시 자유수영(2024)",
        "FCLTY_ADDR": "부산광역시 기장군 일광읍 체육공원1로 29",
        "latitude": 35.3050082,
        "longitude": 129.2429354,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "기장생활체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "NEW 06시30분 요가(수,금)",
        "FCLTY_ADDR": "부산광역시 기장군 기장읍 차성서로109번길 24",
        "latitude": 35.2436645,
        "longitude": 129.2081997,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "김천국민체육센터",
        "CTPRVN_NM": "경상북도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "월수금 오후탁구",
        "FCLTY_ADDR": "경상북도 김천시 운동장길 1 (삼락동)",
        "latitude": 36.1398039,
        "longitude": 128.0864924,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "김포생활체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "배드민턴(월,수,금)09시~13시",
        "FCLTY_ADDR": "경기도 김포시 김포한강8로 198-3 (마산동)",
        "latitude": 37.6404091,
        "longitude": 126.6447177,
        "PROGRM_TY_NM": "배드민턴, 탁구, 테니스"
    },
    {
        "FCLTY_NM": "까치산체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "골프연습장",
        "PROGRM_NM": "골프연습장이용료(09시)",
        "FCLTY_ADDR": "서울특별시 관악구 행운10길 23 (봉천동)",
        "latitude": 37.4819707,
        "longitude": 126.9624721,
        "PROGRM_TY_NM": "골프"
    },
    {
        "FCLTY_NM": "남구 빙상장",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "빙상장",
        "PROGRM_NM": "스피드_성인17",
        "FCLTY_ADDR": "부산광역시 남구 백운포로 106 (용호동)",
        "latitude": 35.1041011,
        "longitude": 129.1100054,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "남구국민체육센터 1관(실내체육관)",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "배드민턴1350(개인레슨)_월수금",
        "FCLTY_ADDR": "부산광역시 남구 백운포로 110 (용호동)",
        "latitude": 35.1039604,
        "longitude": 129.1081414,
        "PROGRM_TY_NM": "생활체육, 댄스, 요가"
    },
    {
        "FCLTY_NM": "남동국민체육센터",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "수영",
        "FCLTY_ADDR": "인천광역시 남동구 백범로124번길 94 (만수동)",
        "latitude": 37.4579476,
        "longitude": 126.7363472,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "남양주시청소년수련관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "수영단기속성F(수금) 수영단기속성F(수금)",
        "FCLTY_ADDR": "경기도 남양주시 다산지금로 51-47 (이패동)",
        "latitude": 37.6089511,
        "longitude": 127.1780908,
        "PROGRM_TY_NM": "수영/아쿠아로빅"
    },
    {
        "FCLTY_NM": "남양주체육문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "건강·문화(GX) 성인/청소년건강.문화   남양주체육문화센터 건강·문화(GX)-성인/청소년건강.문화 10/A탁구프로그램   남양주체육문화센터 건강·문화(GX)-성인/청소년건강.문화 10/A탁구프로그램 탁구(컨퍼런스장) 탁구(컨퍼런스장)",
        "FCLTY_ADDR": "경기도 남양주시 다산지금로 91 (이패동)",
        "latitude": 37.6052842,
        "longitude": 127.1767454,
        "PROGRM_TY_NM": "건강·문화(GX), 헬스, 기구필라테스"
    },
    {
        "FCLTY_NM": "남양주체육문화센터수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "10/E(월-금)성인/청소년 수영주5회(성인)",
        "FCLTY_ADDR": "경기도 남양주시 다산지금로 51-27 (이패동)",
        "latitude": 37.6099008,
        "longitude": 127.1756116,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "능곡 어울림센터 다목적체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "09:30<배드민턴>월수금",
        "FCLTY_ADDR": "경기도 시흥시 능곡로 140 (능곡동)",
        "latitude": 37.3664199,
        "longitude": 126.8159456,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "능평스포츠센터-수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "10시/A(교정)_기간수료-(1000M이상)1개월차",
        "FCLTY_ADDR": "경기도 광주시 창뜰아랫길 14-3 (능평동)",
        "latitude": 37.3489573,
        "longitude": 127.1667783,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "달성군국민체육센터",
        "CTPRVN_NM": "대구광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "수영",
        "FCLTY_ADDR": "대구광역시 달성군 현풍면 현풍동로 180",
        "latitude": 35.701692,
        "longitude": 128.4418206,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "달성문화센터수영장",
        "CTPRVN_NM": "대구광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "수영강습",
        "FCLTY_ADDR": "대구광역시 달성군 다사읍 대실역북로2길 188",
        "latitude": 35.8654751,
        "longitude": 128.4609555,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "도봉실내수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "20시저녁수영A(초급)",
        "FCLTY_ADDR": "서울특별시 도봉구 도봉로180나길 41 (도봉동)",
        "latitude": 37.6843208,
        "longitude": 127.0499431,
        "PROGRM_TY_NM": "저녁수영, 어린이수영, 새벽수영, 오전수영, 아쿠아로빅"
    },
    {
        "FCLTY_NM": "동구 국민체육문예센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "한국무용",
        "FCLTY_ADDR": "부산광역시 동구 구청로 8 (수정동)",
        "latitude": 35.1289241,
        "longitude": 129.0447756,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "동구문화체육센터 수영장",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "월수금 상급반 저녁2부(20:00~20:50)",
        "FCLTY_ADDR": "인천광역시 동구 송림로110번길 5-8(송림동)",
        "latitude": 37.475774,
        "longitude": 126.6475516,
        "PROGRM_TY_NM": "수영강습, 월자유수영, 아쿠아로빅"
    },
    {
        "FCLTY_NM": "동대문구민체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "06시 마스터즈-화목",
        "FCLTY_ADDR": "대전광역시 서구 장안동  장안로 587",
        "latitude": NaN,
        "longitude": NaN,
        "PROGRM_TY_NM": "수영프로그램"
    },
    {
        "FCLTY_NM": "동래구국민체육센터실내수영장",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "(13)-어린이소그룹수영_고급(평영이상)",
        "FCLTY_ADDR": "부산광역시 동래구 미남로116번길 3 (온천동)",
        "latitude": 35.2045413,
        "longitude": 129.0697166,
        "PROGRM_TY_NM": "수영 프로그램"
    },
    {
        "FCLTY_NM": "동부여성문화회관실내수영장",
        "CTPRVN_NM": "대구광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "11.월수금 아쿠아로빅 13:20~14:10",
        "FCLTY_ADDR": "대구광역시 동구 신암북로11길 54-2 (신암동)",
        "latitude": 35.8904493,
        "longitude": 128.6222921,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "동작구민체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "풋볼/특화 그룹/6세~7세   동작구민체육센터 풋볼/특화-그룹/6세~7세 17시[수]어린이/football/6세~7세 주1회[6세~7세]   동작구민체육센터 풋볼/특화-그룹/6세~7세 17시[수]어린이/football/6세~7세 주1회[6세~7세]",
        "FCLTY_ADDR": "서울특별시 동작구 여의대방로16길 53 (신대방동)",
        "latitude": 37.4947228,
        "longitude": 126.9167552,
        "PROGRM_TY_NM": "풋 볼 / 특화, 헬 스, 골 프, 체육관, 바디핏 / 특화, 기구필라테스 / 특화, 서킷나이트 / 특화, 재키사이클 / 특화, 다목적실 2층, 탁 구, 당구[신규불가,25년운영방법변경종합검토], 퍼스널[P.T] 헬스비별도"
    },
    {
        "FCLTY_NM": "동작구민체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "수영[소수정예]특화 금   동작구민체육센터 수영[소수정예]특화-금 금15시중급[평영발~한팔접영]/중등생~성인 성인수영소수C   동작구민체육센터 수영[소수정예]특화-금 금15시중급[평영발~한팔접영]/중등생~성인 성인수영소수C",
        "FCLTY_ADDR": "신대방동 460-1",
        "latitude": 37.4947228,
        "longitude": 126.9167802,
        "PROGRM_TY_NM": "수 영[소수정예]특화, 수 영[단체:강습], 아쿠아로빅 주2회 추첨제, 아쿠아로빅 주1회 추첨제, 아쿠아핏[테크] / 특화"
    },
    {
        "FCLTY_NM": "두류수영장",
        "CTPRVN_NM": "대구광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "수영_화목토_교정B반(11시10분)",
        "FCLTY_ADDR": "대구광역시 달서구 공원순환로 237 (성당동)",
        "latitude": 35.8462696,
        "longitude": 128.5622922,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "마장국민체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "테라피 요가07B(생명안전배움터)",
        "FCLTY_ADDR": "서울특별시 성동구 마조로11길 6 (마장동)",
        "latitude": 37.5621277,
        "longitude": 127.0407835,
        "PROGRM_TY_NM": "생활스포츠, 헬스 PT, 헬스"
    },
    {
        "FCLTY_NM": "문학박태환수영장",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "(20)저녁2반_주2회(초급)",
        "FCLTY_ADDR": "인천광역시 남구 매소홀로 618 (문학동)",
        "latitude": 37.4352191,
        "longitude": 126.6907208,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "미추홀구 국민체육센터",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "19시 직장인_기초",
        "FCLTY_ADDR": "인천광역시 미추홀구 경인로42번길 57 (숭의동)",
        "latitude": 37.4620281,
        "longitude": 126.6495438,
        "PROGRM_TY_NM": "수영 프로그램, 전체"
    },
    {
        "FCLTY_NM": "백운커뮤니티센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "19시 화목 입문(성인남녀/청소년)",
        "FCLTY_ADDR": "경기도 의왕시 백운중앙로 74 (학의동)",
        "latitude": 37.3700313,
        "longitude": 127.0076491,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "백운포체육공원 (테니스장)",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "테니스장",
        "PROGRM_NM": "테니스개인레슨08시20분",
        "FCLTY_ADDR": "부산광역시 남구 백운포로 108 (용호동)",
        "latitude": 35.1038691,
        "longitude": 129.1093425,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "보령국민체육센터수영장",
        "CTPRVN_NM": "충청남도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "10시 오전수영[중급반]",
        "FCLTY_ADDR": "충청남도 보령시 남포면 보령남로 347",
        "latitude": 36.3137807,
        "longitude": 126.6039428,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "부곡다목적실내체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "부곡 10시 화목 배구",
        "FCLTY_ADDR": "경기도 의왕시 부곡공원길 6 (월암동)",
        "latitude": 37.3146454,
        "longitude": 126.958754,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "부곡스포츠센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "09시 화목 멀티근력댄스",
        "FCLTY_ADDR": "경기도 의왕시 부곡시장길 77 (삼동)",
        "latitude": 37.3186034,
        "longitude": 126.9572101,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "부산국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "직장인요가 A반",
        "FCLTY_ADDR": "부산광역시 서구 대신로 150 (서대신동3가)",
        "latitude": 35.1173274,
        "longitude": 129.0157781,
        "PROGRM_TY_NM": "요가, 성인·어린이 배드민턴, 체조댄스, 헬스, 필라테스, 탁구,농구,축구"
    },
    {
        "FCLTY_NM": "부산진구 국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "새벽수영 06_새벽수영A",
        "FCLTY_ADDR": "부산광역시 부산진구 진남로328번길 35 (전포동)",
        "latitude": 35.1554298,
        "longitude": 129.0738176,
        "PROGRM_TY_NM": "수영강습, 주말프로그램, 헬스, 생활체육-체육관, 생활체육-스튜디오"
    },
    {
        "FCLTY_NM": "북구국민체육센터",
        "CTPRVN_NM": "울산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "바디체인지(A) 15시(수,금)",
        "FCLTY_ADDR": "울산광역시 북구 호계로 416-31 (신천동)",
        "latitude": 35.6427671,
        "longitude": 129.3470136,
        "PROGRM_TY_NM": "스튜디오, 수영강습프로그램, 헬스, 체육관, 초등수영"
    },
    {
        "FCLTY_NM": "북구국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "에어로빅(A) 21시",
        "FCLTY_ADDR": "부산광역시 북구 화명대로94번길 83 (화명동)",
        "latitude": 35.2318692,
        "longitude": 129.017753,
        "PROGRM_TY_NM": "스튜디오, 수영강습프로그램, 헬스, 체육관, 초등수영"
    },
    {
        "FCLTY_NM": "분당야탑청소년수련관수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "(성인)월자유수영(월-금20시)",
        "FCLTY_ADDR": "경기도 성남시 분당구 벌말로30번길 35(야탑동)",
        "latitude": 37.4102383,
        "longitude": 127.1418618,
        "PROGRM_TY_NM": "수영월자유수영, 수영교실"
    },
    {
        "FCLTY_NM": "사당문화회관수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "[19시월수]상급반/양팔접영이상/중등생~성인 *성인수영(월수)",
        "FCLTY_ADDR": "사당동 248-6",
        "latitude": 37.4847259,
        "longitude": 126.9696277,
        "PROGRM_TY_NM": "강습수영(단체), 1:7소수정예(특화), 아쿠아로빅(금요일)/추첨제, 아쿠아로빅(주2회)/추첨제, 아쿠아 핏(특화)"
    },
    {
        "FCLTY_NM": "사하구국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "09시 다이어트댄스",
        "FCLTY_ADDR": "부산광역시 사하구 감천로 68 (감천동)",
        "latitude": 35.0895016,
        "longitude": 128.9988349,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "삼각산문화예술회관수영장(구.강북구민회관수영장)",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "저녁수영 19시 [월수금] 신규",
        "FCLTY_ADDR": "서울특별시 강북구 삼각산로 85 (수유동)",
        "latitude": 37.6408544,
        "longitude": 127.0133421,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "서대문체육회관수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "아쿠아_토_13시",
        "FCLTY_ADDR": "홍은3동 산26-155",
        "latitude": NaN,
        "longitude": NaN,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "서부산권장애인스포츠센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "18시 직장인수영[월수금]_고급",
        "FCLTY_ADDR": "부산광역시 사하구 낙동남로1233번길 20 (하단동)",
        "latitude": 35.1094432,
        "longitude": 128.9469,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "서울여성능력개발원수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "기타시설",
        "PROGRM_NM": "S13오후3시수영강습",
        "FCLTY_ADDR": "서울특별시 광진구 아차산로30길 36 (자양동)",
        "latitude": 37.5394028,
        "longitude": 127.0667178,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "서재문화체육센터",
        "CTPRVN_NM": "대구광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "(20)요가테스(주3회)",
        "FCLTY_ADDR": "대구광역시 달성군 다사읍 다사로 750",
        "latitude": 35.8842881,
        "longitude": 128.5032013,
        "PROGRM_TY_NM": "GX프로그램, 탁구"
    },
    {
        "FCLTY_NM": "선학국제빙상경기장",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "빙상장",
        "PROGRM_NM": "일)14시~16시스피드_기초반(신규모집)",
        "FCLTY_ADDR": "인천광역시 연수구 경원대로 526 (선학동)",
        "latitude": 37.4309078,
        "longitude": 126.7018293,
        "PROGRM_TY_NM": "정규강습프로그램"
    },
    {
        "FCLTY_NM": "성동구립용답체육센터 수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "저녁수영19-C",
        "FCLTY_ADDR": "서울특별시 성동구 천호대로78길 15-48(용답동)",
        "latitude": 37.5618304,
        "longitude": 127.057059,
        "PROGRM_TY_NM": "소그룹 수영, 수영"
    },
    {
        "FCLTY_NM": "성동구민종합체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "아쿠아테라피14C",
        "FCLTY_ADDR": "성수1가 685-20",
        "latitude": NaN,
        "longitude": NaN,
        "PROGRM_TY_NM": "소그룹 수영교실, 수영, 생존수영"
    },
    {
        "FCLTY_NM": "성북구민체육관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "자율탁구(월,수,금)",
        "FCLTY_ADDR": "서울특별시 성북구 화랑로13길 144 (하월곡동)",
        "latitude": 37.6086213,
        "longitude": 127.0423063,
        "PROGRM_TY_NM": "스포츠문화교실, 헬스, 체육관"
    },
    {
        "FCLTY_NM": "성북종합레포츠타운수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "월자유수영18A",
        "FCLTY_ADDR": "서울특별시 성북구 한천로58길 307 (석관동)",
        "latitude": 37.61021,
        "longitude": 127.0700052,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "성서국민체육센터",
        "CTPRVN_NM": "대구광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "수영",
        "FCLTY_ADDR": "대구광역시 달서구 선원로 133 (이곡동)",
        "latitude": 35.8615739,
        "longitude": 128.5058644,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "소사국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "10시 수영 월수금 연수B",
        "FCLTY_ADDR": "경기도 부천시 소사로 108 (소사본동)",
        "latitude": 37.4684543,
        "longitude": 126.7983776,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "속초국민체육센터",
        "CTPRVN_NM": "강원특별자치도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "새벽수영고급반(B)",
        "FCLTY_ADDR": "강원특별자치도 속초시 조양로 89 (조양동)",
        "latitude": 38.1866803,
        "longitude": 128.5908199,
        "PROGRM_TY_NM": "수영, 에어로빅, 필라테스, 요가"
    },
    {
        "FCLTY_NM": "송도스포츠센터수영장",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "\\ (화목)\"",
        "FCLTY_ADDR": "부산광역시 서구 송도해변로 121 (암남동)",
        "latitude": 35.0780719,
        "longitude": 129.0201148,
        "PROGRM_TY_NM": "수영프로그램"
    },
    {
        "FCLTY_NM": "수영구 국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "기타시설",
        "PROGRM_NM": "월자유수영A_16 16시",
        "FCLTY_ADDR": "부산광역시 수영구 수영로521번길 77 (광안동)",
        "latitude": 35.1529382,
        "longitude": 129.1074595,
        "PROGRM_TY_NM": "수영, 헬스, 체육프로그램, 요가, 필라테스, 댄스프로그램"
    },
    {
        "FCLTY_NM": "수영구 스포츠클럽",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "07필라테스 월~금",
        "FCLTY_ADDR": "부산광역시 수영구 광남로257번길 12 (민락동)",
        "latitude": 35.160864,
        "longitude": 129.1269854,
        "PROGRM_TY_NM": "필라테스(본관), 댄스(본관), 배드민턴(본관), 어린이 수영선수반(본관), 근력스트레칭(별관), 벨리댄스(별관), 라인댄스(별관), 댄스스포츠(별관), 헬스(본관), 요가(본관)"
    },
    {
        "FCLTY_NM": "수원시체육회관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "기타시설",
        "PROGRM_NM": "성인C_상급(교정,핀)",
        "FCLTY_ADDR": "경기도 수원시 장안구 정조로 998 (조원동)",
        "latitude": 37.2960881,
        "longitude": 127.0092722,
        "PROGRM_TY_NM": "성인수영, 어린이수영, 자유수영, 헬스, 아쿠아로빅, 골프, 파워댄스로빅"
    },
    {
        "FCLTY_NM": "수원청소년문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "토-가족주말인라인B(청소년)",
        "FCLTY_ADDR": "경기도 수원시 팔달구 권광로 293 (인계동)",
        "latitude": 37.2739402,
        "longitude": 127.0349868,
        "PROGRM_TY_NM": "체육관"
    },
    {
        "FCLTY_NM": "신도림생활체육관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "20 골프정기권_A",
        "FCLTY_ADDR": "서울특별시 구로구 경인로67길 149 (신도림동)",
        "latitude": 37.5137813,
        "longitude": 126.883235,
        "PROGRM_TY_NM": "통합"
    },
    {
        "FCLTY_NM": "신림체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "줌바댄스A",
        "FCLTY_ADDR": "서울특별시 관악구 난곡로58길 13 (신림동)",
        "latitude": 37.4800726,
        "longitude": 126.9160396,
        "PROGRM_TY_NM": "문화/취미교육, 에어로빅, 헬스클럽"
    },
    {
        "FCLTY_NM": "신월문화체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "오전10시A[접영이상]",
        "FCLTY_ADDR": "충청북도 제천시 신월동   987",
        "latitude": 37.1595563,
        "longitude": 128.1799268,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "아차산배수지인조잔디축구장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "축구장",
        "PROGRM_NM": "축구교실 초등반B(월요일)",
        "FCLTY_ADDR": "서울특별시 광진구 천호대로 731 (구의동)",
        "latitude": 37.5489665,
        "longitude": 127.0965158,
        "PROGRM_TY_NM": "축구교실"
    },
    {
        "FCLTY_NM": "양천구민체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "어린이소그룹수영18B(성인풀강습)",
        "FCLTY_ADDR": "신정동322-10",
        "latitude": 37.5163872,
        "longitude": 126.8646048,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "여성문화회관 수영장",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "12월-아쿠아로빅1",
        "FCLTY_ADDR": "인천광역시 부평구 길주로 539 (갈산동)",
        "latitude": 37.5080681,
        "longitude": 126.7225181,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "연제구국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "오후수영주3회17시반",
        "FCLTY_ADDR": "부산광역시 연제구 쌍미천로 132 (연산동)",
        "latitude": 35.1842151,
        "longitude": 129.0874305,
        "PROGRM_TY_NM": "수영, 체육관프로그램, 다목적실(2) 프로그램, 다목적실(1)프로그램, 헬스"
    },
    {
        "FCLTY_NM": "열린금호교육문화관체육관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "오후헬스(12~18시)",
        "FCLTY_ADDR": "서울특별시 성동구 금호산12길 3(금호동2가, 성덕빌라)",
        "latitude": 37.5519685,
        "longitude": 127.0197594,
        "PROGRM_TY_NM": "생활스포츠, 헬스"
    },
    {
        "FCLTY_NM": "열우물경기장",
        "CTPRVN_NM": "인천광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "(19)저녁수영_주3회(연수)",
        "FCLTY_ADDR": "인천광역시 부평구 열우물로 164 (십정동)",
        "latitude": 37.4801052,
        "longitude": 126.6915931,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "영도구국민체육센터",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "[08시]새아침수영 A",
        "FCLTY_ADDR": "부산광역시 영도구 함지로79번길 6 (동삼동)",
        "latitude": 35.0752297,
        "longitude": 129.0663893,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "영등포제1스포츠센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "기구필라테스11B 무",
        "FCLTY_ADDR": "서울특별시 영등포구 신풍로 1 (신길동)",
        "latitude": 37.5005379,
        "longitude": 126.9062946,
        "PROGRM_TY_NM": "기구필라테스, 트램폴린, 에어로빅, 스피닝, 발레, 댄스, 요가/필라테스/단전호흡, 풋살, 탁구, 인라인, 농구, 골프, 헬스, 검도"
    },
    {
        "FCLTY_NM": "영등포제2스포츠센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "★시니어발레12B 유",
        "FCLTY_ADDR": "서울특별시 영등포구 국회대로 615 (당산동4가)",
        "latitude": 37.5266954,
        "longitude": 126.9027816,
        "PROGRM_TY_NM": "댄스강좌, 필라테스, 요가, 헬스교실, 휘트니스, 구기종목"
    },
    {
        "FCLTY_NM": "오남체육문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "파워스피닝 파워스피닝   오남체육문화센터 파워스피닝-파워스피닝 19B파워스피닝(이수연)   오남체육문화센터 파워스피닝-파워스피닝 19B파워스피닝(이수연) 주2회_성인(스피닝) 주2회_성인(스피닝)",
        "FCLTY_ADDR": "경기도 남양주시 오남읍 진건오남로577번길 11",
        "latitude": 37.6848694,
        "longitude": 127.2098432,
        "PROGRM_TY_NM": "성인건강, 건강, 파워스피닝, 헬스, 어린이건강"
    },
    {
        "FCLTY_NM": "오남체육문화센터수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "10/B1(화목)성인/청소년 주2회_성인",
        "FCLTY_ADDR": "경기도 남양주시 오남읍 양지로 156-19",
        "latitude": 37.6929656,
        "longitude": 127.2022266,
        "PROGRM_TY_NM": "수영"
    },
    {
        "FCLTY_NM": "오산스포츠센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "골프강습08부(월수금,16:30) 우타석",
        "FCLTY_ADDR": "경기도 오산시 경기동로 33 (오산동)",
        "latitude": 37.1586968,
        "longitude": 127.0756636,
        "PROGRM_TY_NM": "다목적실 프로그램, 실내체육관 프로그램, 실내 골프연습장, 소그룹 프로그램, 헬스, 요가장 프로그램"
    },
    {
        "FCLTY_NM": "오정레포츠센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "아쿠아테크 15시(2부)",
        "FCLTY_ADDR": "경기도 부천시 상오정로 169 (오정동)",
        "latitude": 37.5290273,
        "longitude": 126.7965,
        "PROGRM_TY_NM": "휘트니스프로그램, 재키스피닝, 아쿠아프로그램, 체육관프로그램, 헬스프로그램"
    },
    {
        "FCLTY_NM": "올림픽기념국민생활관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "웨이트로빅 09시 화목",
        "FCLTY_ADDR": "서울특별시 종로구 성균관로 91 (혜화동)",
        "latitude": 37.5904911,
        "longitude": 126.9988244,
        "PROGRM_TY_NM": "건강, 웨이트로빅, 검도, 점핑피트니스, 역도, 무용/댄스, 배드민턴, 인라인, 리듬체조, 음악줄넘기, 탁구, 에어로빅, 헬스, 농구, 축구, 체육, 종합, 골프, 주니어골프, 댄스&발레, 테니스"
    },
    {
        "FCLTY_NM": "올림픽기념국민생활관",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "에어로빅 C",
        "FCLTY_ADDR": "부산광역시 해운대구 APEC로 68 (우동)",
        "latitude": 35.167448,
        "longitude": 129.1376836,
        "PROGRM_TY_NM": "건강, 웨이트로빅, 검도, 점핑피트니스, 역도, 무용/댄스, 배드민턴, 인라인, 리듬체조, 음악줄넘기, 탁구, 에어로빅, 헬스, 농구, 축구, 체육, 종합, 골프, 주니어골프, 댄스&발레, 테니스"
    },
    {
        "FCLTY_NM": "와부체육문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "다목적강좌(1개월) 문화교실강좌(1개월)   와부체육문화센터 다목적강좌(1개월)-문화교실강좌(1개월) 10/A소수정예>SNPE바른자세운동(청소년~성인)   와부체육문화센터 다목적강좌(1개월)-문화교실강좌(1개월) 10/A소수정예>SNPE바른자세운동(청소년~성인) 바른자세척추운동(주2회) 바른자세척추운동(주2회)",
        "FCLTY_ADDR": "경기도 남양주시 와부읍 월문천로 51",
        "latitude": 37.5858473,
        "longitude": 127.2180159,
        "PROGRM_TY_NM": "건강강좌, 다목적강좌"
    },
    {
        "FCLTY_NM": "용산문화체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "SNPE(바른자세) 16_월수",
        "FCLTY_ADDR": "서울특별시 용산구 백범로 350 (문배동)",
        "latitude": 37.5372185,
        "longitude": 126.9676811,
        "PROGRM_TY_NM": "생활체육, 패키지(수영+헬스), 헬스"
    },
    {
        "FCLTY_NM": "용산청소년수련관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "리듬체조초급(토)09:00바른몸사용,리듬감각키우기",
        "FCLTY_ADDR": "서울특별시 용산구 이촌로71길 24 (이촌동)",
        "latitude": 37.5214167,
        "longitude": 126.9732,
        "PROGRM_TY_NM": "청소년 생활체육, 성인 생활체육"
    },
    {
        "FCLTY_NM": "원주국민체육센터",
        "CTPRVN_NM": "강원특별자치도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "수영_상급반_09시_일반",
        "FCLTY_ADDR": "강원특별자치도 원주시 남원로 551 (명륜동)",
        "latitude": 37.3338289,
        "longitude": 127.9463923,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "은평구민체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "탁구(월수금10시)",
        "FCLTY_ADDR": "서울특별시 은평구 진관1로 40 (진관동)",
        "latitude": 37.6304258,
        "longitude": 126.9236902,
        "PROGRM_TY_NM": "다목적체육관(탁구,배드민턴)프로그램, 수영 프로그램, 생활체육 프로그램, 기구필라테스, 대체육관(농구,배드민턴) 프로그램, 헬스 프로그램, 골프 프로그램, 테니스 프로그램, 어린이축구 프로그램"
    },
    {
        "FCLTY_NM": "의왕시국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "20시 월수금 탁구",
        "FCLTY_ADDR": "경기도 의왕시 복지로 27 (내손동)",
        "latitude": 37.3820259,
        "longitude": 126.9751456,
        "PROGRM_TY_NM": "내손탁구장(체육시설3팀), 2층 다목적체육관 프로그램, 1층 G.X 프로그램, 1층 헬스장"
    },
    {
        "FCLTY_NM": "의왕청소년수련관체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "엔트리코딩 토14시",
        "FCLTY_ADDR": "경기도 의왕시 문화공원로 33 (고천동)",
        "latitude": 37.3419045,
        "longitude": 126.9718585,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "이문체육문화센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "스쿼시 21시 고급B(화,목)",
        "FCLTY_ADDR": "서울특별시 동대문구 한천로58길 81-49 (이문동)",
        "latitude": 37.6022444,
        "longitude": 127.0686973,
        "PROGRM_TY_NM": "스쿼시프로그램, 골프프로그램, 성인휘트니스, 테니스프로그램, 헬스프로그램, 공동사업프로그램, 어린이체육, 체육프로그램"
    },
    {
        "FCLTY_NM": "장유스포츠센터",
        "CTPRVN_NM": "경상남도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "신규_17시 [1.기초] 수영 처음 배우는분",
        "FCLTY_ADDR": "경상남도 김해시 번화2로 72 (삼문동)",
        "latitude": 35.1957256,
        "longitude": 128.8049437,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "정관아쿠아드림파크",
        "CTPRVN_NM": "부산광역시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "11시 05분 월자유수영6반(화~금)",
        "FCLTY_ADDR": "부산광역시 기장군 정관읍 모전로 7",
        "latitude": 35.3412901,
        "longitude": 129.163139,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "정자청소년수련관체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "(성인)바리스타 자격증과정A(3개월과정)(목)10시",
        "FCLTY_ADDR": "경기도 성남시 분당구 성남대로407번길 12 (정자동)",
        "latitude": 37.3729088,
        "longitude": 127.1061807,
        "PROGRM_TY_NM": "생활스포츠"
    },
    {
        "FCLTY_NM": "종로구민회관",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "스피닝(월수금,19시)",
        "FCLTY_ADDR": "서울특별시 종로구 지봉로5길 7-5 (창신동)",
        "latitude": 37.573459,
        "longitude": 127.0144451,
        "PROGRM_TY_NM": "스피닝, 무용/댄스, 헬스, 에어로빅, 건강교실, 검도, 인라인"
    },
    {
        "FCLTY_NM": "종로문화체육센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "토요수영09D(성인중상급)(평영~접영)",
        "FCLTY_ADDR": "서울특별시 종로구 인왕산로1길 21 (사직동)",
        "latitude": 37.5742531,
        "longitude": 126.9646648,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "중곡문화체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "[특화]바른자세&다이어트 위한 발레 피트니스 A",
        "FCLTY_ADDR": "서울특별시 광진구 능동로 433 (중곡동)",
        "latitude": 37.5678607,
        "longitude": 127.0849273,
        "PROGRM_TY_NM": "건강문화[1개월과정], 토요강좌, 생활체육[1개월과정], 헬스프로그램, 문화강좌"
    },
    {
        "FCLTY_NM": "진접체육문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "실내체육관 실내체육관/성인   진접체육문화센터 실내체육관-실내체육관/성인 10/A탁구(월수금/김성희)   진접체육문화센터 실내체육관-실내체육관/성인 10/A탁구(월수금/김성희) 실내체육관_건강주3회(성인) 실내체육관_건강주3회(성인)",
        "FCLTY_ADDR": "경기도 남양주시 진접읍 금강로 1509-24",
        "latitude": 37.7271077,
        "longitude": 127.1897584,
        "PROGRM_TY_NM": "건강강좌, 실내체육관, 30분순환운동"
    },
    {
        "FCLTY_NM": "천안국민체육센터",
        "CTPRVN_NM": "충청남도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "월수금반16시",
        "FCLTY_ADDR": "충청남도 천안시 서북구 번영로 208 (백석동)",
        "latitude": 36.8188164,
        "longitude": 127.1151481,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "천안축구센터",
        "CTPRVN_NM": "충청남도",
        "FCLTY_TY_NM": "축구장",
        "PROGRM_NM": "초등1학년(목요일)",
        "FCLTY_ADDR": "충청남도 천안시 서북구 축구센터로 150 (성정동)",
        "latitude": 36.8211395,
        "longitude": 127.1466999,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "청담평생학습관골프연습장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "골프연습장",
        "PROGRM_NM": "골프저녁08",
        "FCLTY_ADDR": "강남구 청담동35-10",
        "latitude": 37.5191161,
        "longitude": 127.0464574,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "충무아트홀스포츠센터수영장",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "건강수영G",
        "FCLTY_ADDR": "서울특별시 중구 퇴계로 387(흥인동)",
        "latitude": 37.5659304,
        "longitude": 127.0148052,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "충주국민체육센터수영장",
        "CTPRVN_NM": "충청북도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "09시 오전2반 중급[화목]",
        "FCLTY_ADDR": "충청북도 충주시 중원대로 3306 (호암동)",
        "latitude": 36.9627192,
        "longitude": 127.9269064,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "탄천스포츠센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "구기체육관",
        "PROGRM_NM": "[07시] 기간수료_연수반_주4회",
        "FCLTY_ADDR": "경기도 성남시 분당구 탄천로 215 (야탑동)",
        "latitude": 37.4102033,
        "longitude": 127.1212797,
        "PROGRM_TY_NM": "50M기간수료제수영, 요가, 헬스, 한국무용, 핏밸런스, 필라테스, 탁구, 여성건강교실, 에어로빅, 어린이성장체조, 아쿠아로빅, 스트레칭(강습, 에어로빅장), 스쿼시(월자유), 스쿼시, 스케이트(강습_피겨), 스케이트(강습_스피드), 살사댄스, 배드민턴(개인강습), 배드민턴, 발레핏, 라지볼(강습), 라인댄스, 댄스스포츠(강습)_에어로빅장, 댄스스포츠(강습)_다목적강습실, 단전호흡(국선도), 농구, 기구필라테스, 골프, 검도, 50M수영(월자유), 50M수영, 어린이(수영)"
    },
    {
        "FCLTY_NM": "탄천종합운동장 체육회관 수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "[11시] 1개월차_기초반(대기)_주4회",
        "FCLTY_ADDR": "분당구야탑동 탄천로 215",
        "latitude": NaN,
        "longitude": NaN,
        "PROGRM_TY_NM": "50M수영, 50M수영(월자유), 어린이(수영), 50M기간수료제수영"
    },
    {
        "FCLTY_NM": "탄천종합운동장체육회관빙상장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "빙상장",
        "PROGRM_NM": "[17시] 스피드 (토)",
        "FCLTY_ADDR": "야탑동 486번지",
        "latitude": 37.4104367,
        "longitude": 127.1206569,
        "PROGRM_TY_NM": "스케이트(강습_피겨), 스케이트(강습_스피드)"
    },
    {
        "FCLTY_NM": "태전국민체육센터-생활체육관",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "07시/A_모닝힐링요가[다목적1실]",
        "FCLTY_ADDR": "경기도 광주시 벼루개길42번길 20 (태전동)",
        "latitude": 37.3813467,
        "longitude": 127.2331108,
        "PROGRM_TY_NM": "다목적실프로그램, 헬스프로그램"
    },
    {
        "FCLTY_NM": "평생학습관",
        "CTPRVN_NM": "충청남도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "기초배드민턴(오후)",
        "FCLTY_ADDR": "충청남도 아산시 남부로 92 (용화동)",
        "latitude": 36.7709276,
        "longitude": 126.9921971,
        "PROGRM_TY_NM": "건강/스포츠"
    },
    {
        "FCLTY_NM": "평생학습관 수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "14시 월수금 아쿠아로빅",
        "FCLTY_ADDR": "경기도 의왕시 오전로 122 (오전동)",
        "latitude": 37.3550512,
        "longitude": 126.9754516,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "포항국민체육센터",
        "CTPRVN_NM": "경상북도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "(※!추첨제)에어로빅오후반",
        "FCLTY_ADDR": "경상북도 포항시 북구 양학로 166 (학잠동)",
        "latitude": 36.0354837,
        "longitude": 129.3415271,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "포항생활야구장",
        "CTPRVN_NM": "경상북도",
        "FCLTY_TY_NM": "야구장",
        "PROGRM_NM": "리틀야구장(일요일)",
        "FCLTY_ADDR": "경상북도 포항시 남구 중흥로162번길 42-4 (상도동)",
        "latitude": 36.0163823,
        "longitude": 129.3583749,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "포항실내수영장",
        "CTPRVN_NM": "경상북도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "F5.오전_심화반(11시00분)",
        "FCLTY_ADDR": "경상북도 포항시 남구 희망대로 810 (대도동)",
        "latitude": 36.0086103,
        "longitude": 129.3638275,
        "PROGRM_TY_NM": "수영강습프로그램, 월자유수영"
    },
    {
        "FCLTY_NM": "해동이국민체육센터",
        "CTPRVN_NM": "경상남도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "(新)11시30분 아쿠아로빅[화,목]",
        "FCLTY_ADDR": "경상남도 김해시 삼계로 132 (삼계동)",
        "latitude": 35.2583233,
        "longitude": 128.8803631,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "해오름휘트니스센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "해오름 헬스",
        "FCLTY_ADDR": "서울특별시 성북구 성북로4길 52 (돈암동, 한신한진아파트)",
        "latitude": 37.5958787,
        "longitude": 127.0104756,
        "PROGRM_TY_NM": "헬스, 스포츠문화교실"
    },
    {
        "FCLTY_NM": "호평체육문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "파워엘빅D 성인(주3회)",
        "FCLTY_ADDR": "경기도 남양주시 늘을2로 67 (호평동)",
        "latitude": 37.6588611,
        "longitude": 127.242293,
        "PROGRM_TY_NM": "건강(1개월), 헬스, 기구필라테스, 스피닝, 체육"
    },
    {
        "FCLTY_NM": "화도체육문화센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "여성건강공요가 주3회(성인)",
        "FCLTY_ADDR": "경기도 남양주시 화도읍 수레로 1259",
        "latitude": 37.6496462,
        "longitude": 127.3012197,
        "PROGRM_TY_NM": "건강강좌, 점핑피트니스, 기구필라테스, 생활체육, 헬스"
    },
    {
        "FCLTY_NM": "화성국민체육센터 체육시설",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "기타시설",
        "PROGRM_NM": "06B 새벽반_마스터(15개월기간수료)",
        "FCLTY_ADDR": "경기도 화성시 봉담읍 동화길 18",
        "latitude": 37.2207526,
        "longitude": 126.9516667,
        "PROGRM_TY_NM": "No Data"
    },
    {
        "FCLTY_NM": "환경에너지시설내테니스장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "테니스장",
        "PROGRM_NM": "테니스(화목)-단체오후2반 화목15:00~15:50",
        "FCLTY_ADDR": "경기도 고양시 일산동구 경의로 115 (백석동)",
        "latitude": 37.6433289,
        "longitude": 126.7961586,
        "PROGRM_TY_NM": "테니스"
    },
    {
        "FCLTY_NM": "환경에너지시설수영장",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "수영장",
        "PROGRM_NM": "수영(화목)-오전4반(기초,초급) 화목10:00~10:50",
        "FCLTY_ADDR": "경기도 고양시 일산동구 경의로 84 (백석동)",
        "latitude": 37.6410814,
        "longitude": 126.7951562,
        "PROGRM_TY_NM": "수영, 자유수영"
    },
    {
        "FCLTY_NM": "황새울국민체육센터",
        "CTPRVN_NM": "경기도",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "헬스_월,화,수,목,금_15시30분",
        "FCLTY_ADDR": "경기도 성남시 분당구 황새울로 273(수내동)",
        "latitude": 37.382543,
        "longitude": 127.116739,
        "PROGRM_TY_NM": "필라테스, 수영, 요가, 다목적체육관, 헬스, 아쿠아로빅"
    },
    {
        "FCLTY_NM": "흑석체육센터",
        "CTPRVN_NM": "서울특별시",
        "FCLTY_TY_NM": "생활체육관",
        "PROGRM_NM": "체육관 배드민턴   흑석체육센터 체육관-배드민턴 배드민턴개인레슨회원체육관비용결제/민턴개인레슨결제회원 체육관사용료(성인)   흑석체육센터 체육관-배드민턴 배드민턴개인레슨회원체육관비용결제/민턴개인레슨결제회원 체육관사용료(성인)",
        "FCLTY_ADDR": "서울특별시 동작구 현충로 73 (흑석동)",
        "latitude": 37.5100566,
        "longitude": 126.963469,
        "PROGRM_TY_NM": "체육관, 기구필라테스, 트램폴린, 서킷나이트, 다목적실, 헬 스, 퍼스널"
    }
];
// 현재 위치를 지도 중심으로 설정하는 함수
function setCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const currentLat = position.coords.latitude;
      const currentLng = position.coords.longitude;

      // 현재 위치를 지도 중심으로 설정
      const currentLocation = new naver.maps.LatLng(currentLat, currentLng);
      map.setCenter(currentLocation);
      const myLocationIcon = {
            url: 'img/my_location_icon.png', // 내 위치 아이콘 이미지 URL
            size: new naver.maps.Size(40, 40), // 아이콘 크기
            anchor: new naver.maps.Point(20, 40) // 아이콘의 앵커 포인트 설정 (아이콘의 기준점)
          };

      // 현재 위치에 마커 추가
      new naver.maps.Marker({
        position: currentLocation,
        map: map,
        icon: myLocationIcon, // 사용자 정의 아이콘 적용
        title: '현재 위치'
      });
    }, function(error) {
      alert("현재 위치를 가져올 수 없습니다.");
    });
  } else {
    alert("이 브라우저는 Geolocation을 지원하지 않습니다.");
  }
}

// 지도 초기화 함수
function initMap() {
  const mapOptions = {
    center: new naver.maps.LatLng(37.4889732, 127.1053460),
    zoom: 12
  };

  map = new naver.maps.Map('map', mapOptions);
   // 현재 위치 표시 함수 호출
  setCurrentLocation();

  // 시설 데이터를 기반으로 초기 마커 추가
  markers = facilities.map(facility => {
    const position = new naver.maps.LatLng(facility.latitude, facility.longitude);

    const marker = new naver.maps.Marker({
      position: position,
      map: map,
      title: facility.FCLTY_NM
    });

    const infoWindow = new naver.maps.InfoWindow({
      content: `
        <div class="naver-info-window">
          <strong>${facility.FCLTY_NM}</strong><br>
          <div class="program-type"><strong>프로그램 유형:</strong> ${facility.PROGRM_TY_NM}</div>
          <div class="address"><strong>주소:</strong> ${facility.FCLTY_ADDR}</div>
          <a href="facility_detail.html?id=${facility.FCLTY_NM}" target="_blank">상세보기</a>
        </div>`,
      maxWidth: 400
    });

    naver.maps.Event.addListener(marker, 'click', function () {
      infoWindow.open(map, marker);
    });

    return { marker, facility };
  });
}
const urlParams = new URLSearchParams(window.location.search);
const resultPS = urlParams.get("resultPS");
console.log(resultPS); // 콘솔에 해당 값 출력
const selectElement = document.getElementById("test_type");
selectElement.value = resultPS; // "resultPS" 옵션을 초기 선택값으로 설정



/////////////////////
function applyFilters() {
    const region = document.getElementById('regionFilter').value;
    const facilityType = document.getElementById('facilityTypeFilter').value;
    let arr_exe = []; // 비어 있는 배열
    if (selectElement.value === '순발력+사회형') {
    arr_exe.push('단전',' gx룸', '빙상', '요가/필라테스/단전호흡', '단전호흡(국선도)', '2층 G.X 프로그램'); // a가 1일 때 추가할 단어들
} else if (selectElement.value === '순발력+목표지향형') {
    arr_exe.push('탁구', '골프', '교육문화프로그램', '배드민턴/탁구', '다목적체육관(탁구,배드민턴)프로그램', '내손탁구장(체육시설3팀)', '골프프로그램', '골프교실', '주니어골프', '골프 프로그램'); // a가 2일 때 추가할 단어들
} else if (selectElement.value === '순발력+자기계발형') {
    arr_exe.push('배드민턴+', '스쿼시', '에어로빅', '스쿼시프로그램', '스쿼시+헬스', '스쿼시(월자유)', '스포츠 > 에어로빅', "스트레칭(강습, 에어로빅장)"); // a가 2일 때 추가할 단어들
}else if (selectElement.value === '순발력+트렌드 추종형') {
    arr_exe.push('헬스', '라켓볼', '복합프로그램', '헬스 프로그램', '헬스장 프로그램', '퍼스널[P.T] 헬스비별도', '헬스 PT', '헬스교실', '스쿼시+헬스', '헬스(본관)', '헬스클럽', '헬스프로그램', '패키지(수영+헬스)', '1층 헬스장', '복합', '복합문화취미교실'); // a가 2일 때 추가할 단어들
}
else if (selectElement.value === '지구력+사회형') {
    arr_exe.push('퓨전', '서킷트레이닝', '검도', '서킷나이트 / 특화', '서킷나이트');
}else if (selectElement.value === '지구력+자기계발형') {
    arr_exe.push('수영', '필라테스', '수영프로그램', '수영 > 종합반', '수영 > 저녁', '수영 > 자유수영', '수영 > 오전', '수영 > 어린이', '수영 > 아쿠아워킹', '수영 > 아쿠아로빅', '수영 > 소그룹', '수영 > 새벽', '수영 > 방학특강', '[문화스포츠센터] 수영', '[문화스포츠센터] 수영 방학특강', '수영장프로그램', '수영/아쿠아로빅', '저녁수영', '어린이수영', '새벽수영', '오전수영', '수영강습', '수영 프로그램', '소그룹 수영', '오후 성인 수영', '오전 성인 수영', '어린이 수영', '아쿠아 로빅', '수영강습프로그램', '초등수영', '수영월자유수영', '수영교실', '강습수영(단체)', '소그룹 수영교실', '생존수영', '어린이 수영선수반(본관)', '성인수영', '영유아수영', '수영-성인여성(청소년여자포함)', '수영-성인남녀', '수영-성인남성(청소년남자포함)', '요가및필라테스', '스포츠 >필라테스', '스포츠 > 요가&필라테스', '요가/필라테스', '기구필라테스', '필라테스/댄스', '기구필라테스 / 특화', '기구필라테스(특화)', '필라테스교실', '필라테스(본관)', '요가/필라테스/단전호흡');
}else if (selectElement.value === '지구력+목표지향형') {
    arr_exe.push('배드민턴', '요가', '다이어트댄스', '다목적체육관 > 배드민턴', '배드민턴프로그램', '배드민턴/탁구', '성인·어린이 배드민턴', '배드민턴(본관)', "다목적체육관(탁구,배드민턴)프로그램", "대체육관(농구,배드민턴) 프로그램", '배드민턴(개인강습)', '요가및필라테스', '스포츠 > 요가&필라테스', '스포츠 > 요가', '요가/필라테스', '요가/댄스', '요가교실', '요가(본관)', '요가/필라테스/단전호흡', '요가장 프로그램');
}else if (selectElement.value === '지구력+트렌드 추종형') {
    arr_exe.push('복합문화취미교실', '다이빙', '수영프로그램', '수영 > 종합반', '수영 > 저녁', '수영 > 자유수영', '수영 > 오전', '수영 > 어린이', '수영 > 아쿠아워킹', '수영 > 아쿠아로빅', '수영 > 소그룹', '수영 > 새벽', '수영 > 방학특강', '[문화스포츠센터] 수영', '[문화스포츠센터] 수영 방학특강', '수영장프로그램', '수영/아쿠아로빅', '저녁수영', '어린이수영', '새벽수영', '오전수영', '수영강습', '수영 프로그램', '소그룹 수영', '오후 성인 수영', '오전 성인 수영', '어린이 수영', '아쿠아 로빅', '수영강습프로그램', '초등수영', '수영월자유수영', '수영교실', '강습수영(단체)', '소그룹 수영교실', '생존수영', '어린이 수영선수반(본관)', '성인수영');
}
else if (selectElement.value === '유연성+사회형') {
    arr_exe.push('스포츠문화교실', '월자유수영', '수영 > 종합반', '수영 > 저녁', '수영 > 자유수영', '수영 > 오전', '수영 > 어린이', '수영 > 아쿠아워킹', '수영 > 아쿠아로빅', '수영 > 소그룹', '수영 > 새벽','수영 > 방학특강', '[문화스포츠센터] 수영', '[문화스포츠센터] 수영 방학특강', '수영장프로그램', '수영/아쿠아로빅', '저녁수영', '어린이수영', '새벽수영', '오전수영', '수영강습', '수영 프로그램', '소그룹 수영', '오후 성인 수영', '오전 성인 수영', '어린이 수영', '아쿠아 로빅', '수영강습프로그램', '초등수영', '수영월자유수영', '수영교실', '강습수영(단체)', '소그룹 수영교실');
}else if (selectElement.value === '유연성+목표지향형') {
    arr_exe.push('계남테니스장', '스피닝', '파워스피닝', '재키스피닝', '테니스', '테니스레슨', '테니스 프로그램', '테니스프로그램');
}else if (selectElement.value === '유연성+자기계발형') {
    arr_exe.push('자유수영', '요가및필라테스', '스포츠 > 요가&필라테스', '스포츠 > 요가', '요가/필라테스', '요가교실', '요가(본관)', '요가/필라테스/단전호흡', '필라테스', '스포츠 >필라테스','기구필라테스','기구필라테스 / 특화', '기구필라테스(특화)', '필라테스교실', '필라테스(본관)', '요가/필라테스/단전호흡', '수영 > 종합반', '수영 > 저녁', '수영 > 자유수영', '수영 > 오전', '수영 > 어린이', '수영 > 아쿠아워킹', '수영 > 아쿠아로빅', '수영 > 소그룹', '수영 > 새벽', '수영 > 방학특강', '[문화스포츠센터] 수영', '[문화스포츠센터] 수영 방학특강', '수영장프로그램', '수영/아쿠아로빅', '저녁수영', '어린이수영', '새벽수영', '오전수영', '수영강습', '수영 프로그램', '소그룹 수영', '오후 성인 수영', '오전 성인 수영', '어린이 수영', '아쿠아 로빅', '수영강습프로그램', '초등수영', '수영월자유수영', '수영교실', '강습수영(단체)', '소그룹 수영교실');
}else if (selectElement.value === '유연성+트렌드 추종형') {
    arr_exe.push('아쿠아로빅', '기타체육프로그램', '수영 > 아쿠아워킹', '수영 > 아쿠아로빅', '수영/아쿠아로빅', '아쿠아로빅 주2회 추첨제', '아쿠아로빅 주1회 추첨제', '아쿠아 로빅', '아쿠아로빅(금요일)/추첨제', '아쿠아로빅(주2회)/추첨제', '아쿠아프로그램', '아쿠아로빅(주2회)', '아쿠아로빅(주1회)(금)');
}
else if (selectElement.value === '피지컬+사회형') {
    arr_exe.push('풋살축구', '댄스프로그램(발레,줌바 등)', "탁구,농구,축구", '축구교실', '축구', '풋살', '라인댄스', '댄스스포츠', '다이어트댄스', '스포츠 > 방송댄스', '스포츠 > 라인댄스', '댄스교실', '댄스', '댄스프로그램', '댄스(본관)', '댄스스포츠(별관)', '댄스강좌', '무용/댄스'); 
}else if (selectElement.value === '피지컬+목표지향형') {
    arr_exe.push('라인댄스', '볼링', '볼링장프로그램','스포츠 > 라인댄스', '라인댄스(별관)'); // a가 2일 때 추가할 단어들
}else if (selectElement.value === '피지컬+자기계발형') {
    arr_exe.push('농구', '무도프로그램',"탁구,농구,축구", "대체육관(농구,배드민턴) 프로그램"); // a가 2일 때 추가할 단어들
}else if (selectElement.value === '피지컬+트렌드 추종형') {
    arr_exe.push('댄스스포츠', '실내골프', '골프프로그램', '골프교실', '실내 골프연습장', '골프 프로그램', '스포츠 > 방송댄스', '댄스교실', '댄스', '댄스스포츠(별관)', '댄스강좌', '무용/댄스', '댄스&발레', '댄스스포츠(강습)_에어로빅장', '댄스스포츠(강습)_다목적강습실'); 
}else{
	arr_exe.push("true")
}

//console.log(contains_exe);
		
    // 필터 조건에 맞는 시설 데이터를 필터링
    const filteredFacilities = facilities.filter(facility => {
        const matchesRegion = region ? facility.CTPRVN_NM === region : true; // 지역명 기준 필터
        const matchesFacilityType = facilityType ? facility.FCLTY_TY_NM === facilityType : true; // 시설 유형 기준 필터
        let contains_exe;
        if(arr_exe.includes("true")){
        	contains_exe = true;
        }else{
        	contains_exe = arr_exe.some(word => facility.PROGRM_TY_NM.includes(word)); // 운동유형 기준 필터
        }
        console.log(contains_exe);
        return matchesRegion && matchesFacilityType && contains_exe;
    });

    // 기존 마커들을 제거
    markers.forEach(markerObj => {
        markerObj.marker.setMap(null);  // markerObj.marker로 마커 객체에 접근하여 지도에서 제거
    });

    // markers 배열을 비우기
    markers.length = 0;  // 기존 마커들을 배열에서 제거

    // 필터링된 시설에 대한 마커 다시 추가
    filteredFacilities.forEach(facility => {
        const position = new naver.maps.LatLng(facility.latitude, facility.longitude);
        const marker = new naver.maps.Marker({
            position: position,
            map: map,
            title: facility.FCLTY_NM // 시설 이름으로 마커에 제목 설정
        });

        const infoWindow = new naver.maps.InfoWindow({
            content: `
                <div class="naver-info-window">
          <strong>${facility.FCLTY_NM}</strong><br>
          <div class="program-type"><strong>프로그램 유형:</strong> ${facility.PROGRM_TY_NM}</div>
          <div class="address"><strong>주소:</strong> ${facility.FCLTY_ADDR}</div>
          <a href="facility_detail.html?id=${facility.FCLTY_NM}" target="_blank">상세보기</a>
        </div>`,
            maxWidth: 300
        });

        naver.maps.Event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });

        // 마커와 시설 정보를 함께 markers 배열에 저장
        markers.push({ marker, facility });
    });
}
// 페이지 로딩 후 지도 초기화
window.onload = initMap; // 페이지 로드 시 지도 초기화