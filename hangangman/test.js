function calculateResults() {
            // 각 성향별 점수 초기화
            let scoresP = {
                "순발력": 0,
                "유연성": 0,
                "피지컬": 0,
                "지구력": 0,
            };
            let scoresS = {
                "사회형": 0,
                "목표지향형": 0,
                "자기계발형": 0,
                "트렌드 추종형": 0
            };

            // 각 질문에 대해 점수 추가
            for (let i = 1; i <= 23; i++) { // 여기서는 예시로 23개 질문만 처리
                const answers = document.getElementsByName('question' + i);
                for (let j = 0; j < answers.length; j++) {
                    if (answers[j].checked) {
                        // 각 성향별로 점수 계산
                        switch (i) {
                            case 1: //키
                                break;
                            case 2: //몸무게
                                break;
                            case 3: //성별
                                break;
                            case 4: // 선택
                                if (answers[j].value == "1") {
                                    scoresP["순발력"] += 3.2;
                                    scoresS["목표지향형"] += 1.1;
                                }
                                break;
                            case 5: 
                                if (answers[j].value == "1") {
                                    scoresP["피지컬"] += 2.6;
                                    scoresS["사회형"] += 3.4;
                                }
                                break;
                            case 6: 
                                if (answers[j].value == "1") {
                                    scoresP["순발력"] += 1.9;
                                    scoresS["트렌드 추종형"] += 3.7;
                                }
                                break;
                            case 7: 
                                if (answers[j].value == "1") {
                                    scoresP["지구력"] += 3.4;
                                    scoresS["자기계발형"] += 2.5;
                                }
                                break;
                            case 8: 
                                if (answers[j].value == "1") {
                                    scoresP["피지컬"] += 3.2;
                                    scoresS["목표지향형"] += 3.3;
                                }
                                break;
                            case 9: 
                                if (answers[j].value == "1") {
                                    scoresP["유연성"] += 4.0;
                                    scoresS["자기계발형"] += 1.1;
                                }
                                break;
                            case 10:
                            if (answers[j].value == "1") {
                                scoresP["순발력"] += 5.0;
                                scoresS["목표지향형"] += 2.2;
                                }
                                break;
                            case 11:
                            if (answers[j].value == "1") {
                                scoresP["유연성"] += 1.7;
                                scoresS["사회형"] += 4.3;
                                }
                                break;
                            case 12:
                            if (answers[j].value == "1") {
                                scoresP["피지컬"] += 2.9;
                                scoresS["트렌드 추종형"] += 4.0;
                                }
                                break;
                            case 13: 
                            if (answers[j].value == "1") {
                                scoresP["지구력"] += 4.2;
                                scoresS["목표지향형"] += 2.3;
                                }
                                break;
                            case 14:
                            if (answers[j].value == "1") {
                                scoresP["피지컬"] += 1.5;
                                scoresS["목표지향형"] += 5.1;
                                }
                                break;
                            case 15: 
                            if (answers[j].value == "1") {
                                scoresP["유연성"] += 2.3;
                                scoresS["트렌드 추종형"] += 5.2;
                                }
                                break;
                            case 16: 
                            if (answers[j].value == "1") {
                                scoresP["순발력"] += 4.5;
                                scoresS["목표지향형"] += 2.0;
                                }
                                break;
                            case 17: 
                            if (answers[j].value == "1") {
                                scoresP["유연성"] += 1.5;
                                scoresS["트렌드 추종형"] += 3.6;
                                }
                                break;
                            case 18: 
                            if (answers[j].value == "1") {
                                scoresP["지구력"] += 1.5;
                                scoresS["자기계발형"] += 3.0;
                                }
                                break;
                            case 19: 
                            if (answers[j].value == "1") {
                                scoresP["순발력"] += 1.5;
                                scoresS["사회형"] += 4.6;
                                }
                                break;
                            case 20: 
                            if (answers[j].value == "1") {
                                scoresP["유연성"] += 3.4;
                                scoresS["자기계발형"] += 4.2;
                                }
                                break;
                            case 21: 
                            if (answers[j].value == "1") {
                                scoresP["피지컬"] += 5.1;
                                scoresS["목표지향형"] += 2.0;
                                }
                                break;
                            case 22: 
                            if (answers[j].value == "1") {
                                scoresP["지구력"] += 4.5;
                                scoresS["자기계발형"] += 1.5;
                                }
                                break;
                            case 23: 
                            if (answers[j].value == "1") {
                                scoresP["유연성"] += 4.0;
                                scoresS["자기계발형"] += 1.0;
                                }
                                break;

                            // 추가적인 질문들에 대한 성향 점수 계산
                        }
                    }
                }
            }
            //bmi 계산
            const height = parseFloat(document.getElementById("numInput_height").value); // 키 (m)
            const weight = parseFloat(document.getElementById("numInput_weight").value); // 체중 (kg)
            const bmi = weight / (height * height);
            let resultText ="";

            if (bmi < 18.5) {
                resultText += "저체중";
                scoresP["피지컬"] += 1;
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                resultText += "정상 체중";
                scoresP["피지컬"] += 2;
            } else if (bmi >= 25 && bmi <= 29.9) {
                resultText += "과체중";
                scoresP["피지컬"] += 1;
            } else {
                resultText += "비만";
            }

            // 최종 점수 출력
            // 점수가 가장 높은 성향 두 개 찾기
            let sortedScoresP = Object.entries(scoresP).sort((a, b) => b[1] - a[1]);
            let highestTypesP = sortedScoresP.slice(0, 1).map(item => item[0]);
            let highestScoreP = sortedScoresP[0][1]; // 가장 높은 점수

            let sortedScoresS = Object.entries(scoresS).sort((a, b) => b[1] - a[1]);
            let highestTypesS = sortedScoresS.slice(0, 1).map(item => item[0]);
            let highestScoreS = sortedScoresS[0][1]; // 가장 높은 점수
            


            // 결과 표시
            //document.getElementById("finalScore").textContent = "최종 점수: " + totalScore;
            document.getElementById("highestTypesP").textContent = "가장 높은 점수 피지컬: " + highestTypesP.join(", ") + " (" + highestScoreP + "점)";
            document.getElementById("highestTypesS").textContent = "가장 높은 점수 성향: " + highestTypesS.join(", ") + " (" + highestScoreS + "점)";
            document.getElementById("result").style.display = "block";

            const url = new URL("test_result.html", window.location.href);
            url.searchParams.append("highestP", highestTypesP.join(","));
            url.searchParams.append("highestS", highestTypesS.join(","));
            url.searchParams.append("highestScoreP", highestScoreP);
            url.searchParams.append("result_bmi",resultText);
            window.location.href = url; // test_result.html 페이지로 이동
        }