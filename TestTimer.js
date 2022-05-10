'use strict';

//未来時刻から現在時刻を引く関数
function countdown(due){
    //定数nowに現在時刻を代入
    const now = new Date();
    //定数restに未来時刻-現在時刻の計算結果を代入
    //なおgetTime()メソッドでは返り値はミリ秒
    const rest = due.getTime() - now.getTime();
    //秒・分・時についてそれぞれ定数に代入
    const sec = Math.floor(rest/1000) % 60;
    const min = Math.floor(rest/1000/60) % 60;
    const hour = Math.floor(rest/1000/60/24) % 24;
    //配列として返す
    const count = [hour, min, sec];
    return count;
}

//未来時刻を設定してコンソールに出力する
let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);

//再計算を最終行に追加
function recalc(){
    //〇時間〇分〇秒の形で表示する
    const counter = countdown(goal);
    const time = `${counter[0]}時間${counter[1]}分${counter[2]}秒`;
    //HTMLからidを通してデータを渡す
    document.getElementById('timer').textContent = time;
    //繰り返しrefresh()を呼び出す
    refresh();
}
//1秒ごとにrecalc()を呼び出すための関数
function refresh() {
    setTimeout(recalc, 1000);
}

//初回の実行
recalc();