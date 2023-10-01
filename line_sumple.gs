function doPost(e) {
    const line = 'https://api.line.me/v2/bot/message/reply';
    const token ="token"

    const eventData = JSON.parse(e.postData.contents).events[0];
    const replyToken = eventData.replyToken;
    const userMessage = eventData.message.text;

    var myApp = SpreadsheetApp.openById("sheet_id");
    var mySheet = myApp.getSheetByName('sheet_name');
    
}