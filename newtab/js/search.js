(function(){
    const searchInput = document.getElementById("search-input");

    //검색 결과 페이지로 이동
    const showSearchResult =()=>{
        let searchWord = searchInput.value;
        window.location.href=`https://www.google.co.kr/search?q=${searchWord}`
        searchWord="";
    }

    const enterKey = (event)=>{
        if(event.code === "Enter"){
            showSearchResult();
        }
    }

    searchInput.addEventListener("keypress",(event)=>{
        enterKey(event);
    })

})();
