var getname = document.getElementById("username");
var getmail = document.getElementById("usermail");
var getfeedback = document.getElementById("feedback");

function mydata() { 
    const name = getname.value
    const mail = getmail.value  
    alert("Received your feedback, thank you !");
} 

function addmsg() {
    let table = document.getElementById("tablefeedback");         // 獲取table標籤元素
    let newrow = table.insertRow();                               // 建立新行
    newrow.insertCell().innerHTML = new Date().toLocaleString();  //顯示年月日時間
    newrow.insertCell().innerHTML = getname.value;                //取得name值 
    newrow.insertCell().innerHTML = getmail.value;                //取得mail值
    newrow.insertCell().innerHTML = getfeedback.value;            //取得feedback內容
    newrow.insertCell().innerHTML = '<input type="button" value="Delete" onclick="delRow(this)"></input>'
                                    //同時生出delete按鈕,按下時觸發delRow()函式
    getname.value = '';             //生出表格時為空白
    getmail.value = '';
    getfeedback.value = '';
}

function delRow(r) {  
    var i = r.parentNode.parentNode.rowIndex;               // 指定i=r(this)的父節點+父節點(回到tablefeedback階層)  
    document.getElementById("tablefeedback").deleteRow(i);  // 刪除指定階層
    alert("Post deleted !");
    }