(function(){
    const API_URL = "https://random-quote.hyobb.com/"
    const quoteElement = document.getElementById("quote")
    const quoteItem = localStorage.getItem("quote");

    const nowDate = new Date();
    const month = nowDate.getMonth()+1;
    const date = nowDate.getDate();
   
    //하루에 한 번씩 명언이 바뀌도록 설정하기
    const setQuote = (result)=>{
        let quote = {createDate: `${month}-${date}`, quoteData: result }
        localStorage.setItem("quote",JSON.stringify(quote));
        //localStorage의 quote라는 키값의 데이터가 존재하고 데이터의 createDate값이 오늘 날짜가 동일하다면 getQuote함수 호출하지 않고
        //그렇지 않을 경우면 getQuote함수호출
        quoteElement.textContent = `"${result}"`;
    }

    const getQuote = async ()=>{
        try{
            const data = await fetch(API_URL).then((res)=>res.json())
            //console.log(data);
            const result = data[1].respond;
            //배열의 0번쨰는 success의 result값이 1번째는 respond 명언ㅂ갓이 담겨있음
            //console.log(result);
            setQuote(result);
        }catch(err){
            console.log(`err:${err}`);
            setQuote("만약 하루를 성공하고 싶다면, 반드시 첫 한 시간을 성공해야 한다.");
            //에러났을떄 보여줄 문구
        }
    }

    if(quoteItem){ //quote 아이템이 있다면 
        let{createDate, quoteData} = JSON.parse(quoteItem);
        if(createDate === `${month}-${date}`){ //createDate가 오늘 날짜와 동일하다면
            quoteElement.textContent = `"${quoteData}"`;
        } 
        else {
            getQuote();
        }
    } else {
        getQuote();
    }


//then 메서드로 결과값 json 메서드를 사용하여 자바스크립트 객체형태로 변환
//fetch 함수는 promise 객체를 반환하는 비동기 함수이기 때문에 앞에 await 작성해주고
//await 키워드는 async가 붙은 함수의 내부에서만 사용 가능하므로 async 작성
})();