const btn = document.getElementById('btn');

//Enter 이벤트
function enter(event){
    if(window.event.keyCode === 13) {
        const date = document.getElementById('date');
        const todo = document.getElementById('todo');

        if(date.value !== '' && todo.value != '') { 
            const lists = document.createElement('li');
            const check = document.createElement('input');
            const dates = document.createElement('span');
            const contents = document.createElement('span');

            lists.appendChild(check);
            lists.appendChild(dates);
            lists.appendChild(contents);

            check.setAttribute('type', 'checkbox');
            dates.textContent = date.value;
            contents.textContent = todo.value;
            
            const result = document.getElementById('result-area');
            result.appendChild(lists);

            todo.value = "";
            todo.focus();
            
            check.addEventListener('change',function(){
                if(check.checked === true) {
                    console.log(contents.innerText);
                    contents.style.textDecoration = "line-through";
                } else {
                    contents.style.textDecoration = "none";
                }
            })

            } else {
                alert("날짜와 내용을 모두 입력해주세요! (❁´◡`❁)");
                todo.focus();
            }  
    }
}

//버튼 이벤트
btn.addEventListener('click',()=>{
    const date = document.getElementById('date');
    const todo = document.getElementById('todo');

    if(date.value !== '' && todo.value != '') { 
        const lists = document.createElement('li');
        const check = document.createElement('input');
        const dates = document.createElement('span');
        const contents = document.createElement('span');

        //li 안에 담기 위해 appendChild 메소드 사용
        lists.appendChild(check);
        lists.appendChild(dates);
        lists.appendChild(contents);

        check.setAttribute('type', 'checkbox');
        const date = document.getElementById('date');
        dates.textContent = date.value;
        const todo = document.getElementById('todo');
        contents.textContent = todo.value;
        
        
        const result = document.getElementById('result-area');
        result.appendChild(lists);

        //할일 적으면 iunput값 비우고 포커스 옮기기
        todo.value = "";
        todo.focus();

        //완료한 일 라인 속성
        check.addEventListener('change',function(){
            if(check.checked === true) {
                console.log(contents.innerText);
                contents.style.textDecoration = "line-through";
            } else {
                contents.style.textDecoration = "none";
            }
        })

    } else {
        alert("날짜와 내용을 모두 입력해주세요! (❁´◡`❁)");
        todo.focus();
    }
   
})

