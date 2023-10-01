function doPost(e) {
    //urlとトークンを指定
    const line = 'https://api.line.me/v2/bot/message/reply';
    const token ="token"

    //ユーザからのメッセージを取得
    const eventData = JSON.parse(e.postData.contents).events[0];
    const replyToken = eventData.replyToken;
    const userMessage = eventData.message.text;

    //取得したメッセージをスプレッドシートに記録
    var myApp = SpreadsheetApp.openById("sheet_id");
    var mySheet = myApp.getSheetByName('sheet_name');
    mySheet.getRange(mySheet.getLastRow() + 1, 1).setValue(userMessage);

}