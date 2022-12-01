document.addEventListener("DOMContentLoaded", function() {

    // ------------------ loading hide ------------------
    // document.querySelector(".loading").style.visibility = "hidden";


    // -------------------------------------------------------
    const arrowAll = document.createElement("div");
    arrowAll.setAttribute("class", "arrowAll");

    document.querySelector('.mainBanner_right').insertAdjacentHTML('afterend', `
        <div class='arrowAll'>
            <div class='chevron'></div>
            <div class='chevron'></div>
            <div class='chevron'></div>
        </div>
    `);

    // ------------------ scroll move ------------------------------
    document.querySelector('.headBI').onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.querySelector('.arrowAll').onclick = function () {
        window.scrollTo({
            top: 692,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.querySelector('#menu0').onclick = function () {
        window.scrollTo({
            top: 2176,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.querySelector('#menu1').onclick = function () {
        window.scrollTo({
            top: 2994,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.querySelector('#menu2').onclick = function () {
        window.scrollTo({
            top: 5187,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.querySelector('#menu3').onclick = function () {
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

    // ------------------- DOM element 추가  ----------------------

    const todoFrameAll = document.querySelector('.todoFrameAll');
    todoFrameAll.insertAdjacentHTML('afterbegin', `
        <div class='todoFrame0'>
            <img class='todoImg todo0' src='./source/todoFrame0.png' alt='투두리스트 기능 메뉴1'>
            <p class='leftLine todo0_txt0'>쉽게 투두 리스트를 실천하고 포인트를 모아봅시다!</p>
            <p class='leftLine todo0_txt1'>쉽게 추가하고 수정할 수 있어요!</p>
        </div>
        <div class='todoFrame1'>
            <img class='todoImg todo1' src='./source/todoFrame1.png' alt='투두리스트 기능 메뉴1'>
            <p class='leftLine todo1_txt'>처음에 뭘 할지 모르겠으면 추천리스트를 해보세요!</p>
        </div>
        <div class='todoFrame2'>
            <img class='todoImg todo2' src='./source/todoFrame2.png' alt='투두리스트 기능 메뉴1'>
            <p class='rightLine todo2_txt0'>친구들과 함께라면 좀 더 열심히 할 수 있어요!</p>
            <p class='rightLine todo2_txt1'>이미 달성한 친구를 보고 경쟁해봅시다!</p>
            <p class='leftLine todo2_txt2'>힘내라고 하트를 눌러줘요! 모두 함께 힘내봅시다!</p>
        </div>
        <div class='todoFrame3'>
            <img class='todoImg todo3' src='./source/todoFrame3.png' alt='투두리스트 기능 메뉴1'>
            <p class='rightLine todo3_txt'>와! 벌써 이렇게 했다니! 내가 해낸 리스트를 보고 성취감을 느낄 수 있어요!</p>
        </div>
    `);

    // document.getElementById("easyVegan").innerText = "쉬운 비건, 쉬운 실천!";

});

$(document).ready(function() {
    // $('.single-item').slick();
    $('.testBtn button').click( function() {
        $('.testImg').css('left', '100px')
    })
})