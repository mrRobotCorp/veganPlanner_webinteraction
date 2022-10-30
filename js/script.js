window.onload = function(){

    // ------------------ loading hide ------------------
    document.querySelector(".loading").style.visibility = "hidden";


    // ------------------ scroll move ------------------------------
    document.getElementById("bi").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("down").onclick = function () {
        window.scrollTo({
            top: 692,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("menu0").onclick = function () {
        window.scrollTo({
            top: 2176,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("menu1").onclick = function () {
        window.scrollTo({
            top: 2994,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("menu2").onclick = function () {
        window.scrollTo({
            top: 5187,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("menu3").onclick = function () {
        window.scrollTo({
            top: 5955,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("scrollTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // --------------------- todo list --------------------
    var addButton = document.getElementById('addButton');
    var addInput = document.getElementById('itemInput');
    var todoList = document.getElementById('todoList');
    var listArray = [];

    function listItemObj(content, status) {
        this.content = '';
        this.status = 'incomplete';
    }
    var changeToComp = function(){
        var parent = this.parentElement;
        parent.className = 'uncompleted well';
        this.removeEventListener('click',changeToComp);
        this.addEventListener('click',changeToInComp);
        changeListArray(parent.firstChild.innerText,'complete');
    }

    var changeToInComp = function(){
        var parent = this.parentElement;
        parent.className = 'completed well';
        this.removeEventListener('click',changeToInComp);
        this.addEventListener('click',changeToComp);

        changeListArray(parent.firstChild.innerText,'incomplete');
    }

    var removeItem = function(){
        var parent = this.parentElement.parentElement;
        parent.removeChild(this.parentElement);

        var data = this.parentElement.firstChild.innerText;

        for(var i=0; i < listArray.length; i++){
            if(listArray[i].content == data){
                listArray.splice(i,1);
                refreshLocal();
                break;
            }
        }
    }

    var changeListArray = function(data,status){

        for(var i=0; i < listArray.length; i++){
            if(listArray[i].content == data){
                listArray[i].status = status;
                refreshLocal();
                break;
            }
        }
    }

    var createItemDom = function(text,status){
        var listItem = document.createElement('li');
        var itemLabel = document.createElement('label');
        var itemCompBtn = document.createElement('button');
        var itemIncompBtn = document.createElement('button');

        listItem.className = (status == 'incomplete')?'completed well':'uncompleted well';

        itemLabel.innerText = text;
        itemCompBtn.className = 'btn btn-success';
        if(status == 'incomplete'){
            itemCompBtn.addEventListener('click',changeToComp);
        }else{
            itemCompBtn.addEventListener('click',changeToInComp);
        }

        itemIncompBtn.className = 'btn btn-danger';
        itemIncompBtn.addEventListener('click',removeItem);
        listItem.appendChild(itemLabel);
        listItem.appendChild(itemCompBtn);
        listItem.appendChild(itemIncompBtn);

        return listItem;
    }

    var refreshLocal = function(){
        var todos = listArray;
        localStorage.removeItem('todoList');
        localStorage.setItem('todoList', JSON.stringify(todos));
    }

    var addToList = function(){
        var newItem = new listItemObj();
        newItem.content = addInput.value;
        listArray.push(newItem);
        refreshLocal();

        var item = createItemDom(addInput.value,'incomplete');
        todoList.appendChild(item);
        addInput.value = '';
    }

    var clearList = function(){
        listArray = [];
        localStorage.removeItem('todoList');
        todoList.innerHTML = '';
    }

    var list = localStorage.getItem('todoList');

    if (list != null) {
        todos = JSON.parse(list);
        listArray = todos;

        for(var i=0; i<listArray.length;i++){
            var data = listArray[i].content;
            var item = createItemDom(data,listArray[i].status);
            todoList.appendChild(item);
        }
    }

    addButton.addEventListener('click', addToList);
    clearButton.addEventListener('click', clearList);

    // ------------------- innerText ----------------------
    document.getElementById("easyVegan").innerText = "쉬운 비건, 쉬운 실천!";
    
    document.querySelector(".logoInfo1").innerText = "비건플래너는 둥근 형태와 Sandoll 티비스켓 서체를 활용하여 친근감을 나타냅니다. 미소 짓는 입과 이파리를 응용한 형태는 즐겁게 비건을 실천하는 이용자를 표현합니다. 또한 새싹은 새로이 도전하는 사람들을 상징합니다. 마지막으로 투두노트를 상징하는 네모에 새싹, 즉 이용자의 즐거움과 도전이 기록됨을 상징합니다.";
    document.querySelector(".logoInfo2").innerText = "비건과 플래너를 합친 단어와 비건하는 피플(people)의 줄임말로 이중적인 의미가 담겼습니다. 이러한 의미들을 담은 ‘비플’이이라는 글자에 자라나는 이파리를 달아 목표를 달성하는  깃발처럼 보이게 제작했습니다.";
    document.querySelector(".colorInfo").innerText = "전체적으로 푸릇푸릇하고 시원안 비주얼을 컨셉으로하여 부드러운 화이트톤으로 안정감 있어 보이게했습니다.  시원한 녹색과 남색을 포인트 컬러로 사용했습니다.";

    document.querySelector(".keyword1").innerText = "생기있는";
    document.querySelector(".keyword2").innerText = "친근한";
    document.querySelector(".keyword3").innerText = "부드러운";

    document.querySelector(".fontInfo").innerText = "Noto Sans로 가독성이 높은 서체로 전체 본문에 사용하였습니다.";

    document.querySelector(".testTxt").innerText = "진단테스트로 나의 비건 성향에 대해 알아보자";
    document.querySelector(".todoTxt").innerText = "투두리스트를 통해 실생활에서 직접 비건을 실천해보자!";
    document.querySelector(".communityTxt").innerText = "모두와 서로 도우며 비건 생활을 더욱 윤택하게 만들어보자!";
    document.querySelector(".pointTxt").innerText = "모두와 서로 도우며 비건 생활을 더욱 윤택하게 만들어보자!";   

}

$(document).ready(function() {
    $('.single-item').slick();
})