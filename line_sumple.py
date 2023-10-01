import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ['https://spreadsheets.google.com/feeds','https://www.googleapis.com/auth/drive']

#ダウンロードしたjsonファイルをドライブにアップデートした際のパス
json = 'json'

credentials = ServiceAccountCredentials.from_json_keyfile_name(json, scope)

gc = gspread.authorize(credentials)

#書き込み先のスプレッドシートキーを追加
SPREADSHEET_KEY = '1kXuWe8R_8fVOJpr2XuIhFnIne-ckpMwkNzF6cDynCIU'

#共有設定したスプレッドシートの1枚目のシートを開く
worksheet = gc.open_by_key(SPREADSHEET_KEY).sheet1

#読み込んだ文字列を表示
gettext =worksheet.col_values(1)
print(gettext)