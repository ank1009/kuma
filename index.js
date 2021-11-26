<p id="scroll">テキスト</p>

<script type="text/javascript">

scrollBG();

//背景画像を横スクロール
function scrollBG() {
	document.getElementById("scroll").style.height = "100px"; //*1 表示の高さ
	document.getElementById("scroll").style.backgroundImage = "url(building.png)"; //*2 画像ファイル
	document.getElementById("scroll").style.backgroundRepeat = "repeat-x"; //*3 横に連続して表示
	
	count = 0; //カウントの初期値
	timerID = setInterval('scrollBG_countup()',500); //*4 0.5秒毎に呼び出し
}

function scrollBG_countup() {
	count++; //増分
	if (count > 99) count = 0; //カウントをリセット
	document.getElementById("scroll").style.backgroundPosition = count + "px 0px"; //表示位置を変更
}
</script>

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });
  //線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
  $('.timeline li').each(function(){// それぞれのli要素の
    var elemPos = $(this).offset().top;// 上からの高さ取得
    var scroll = $(window).scrollTop();// スクロール値取得
    var windowHeight = $(window).height();// windowの高さ取得
    var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
    if (scroll >= elemPos - windowHeight-startPoint){
      var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
      //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
      var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

      // 100% を超えたらずっと100%を入れ続ける
      if(percent  > 100){
        percent  = 100;
      }
      // ボーダーの長さをセット
      $(this).children('.border-line').css({
        height: percent + "%", //CSSでパーセント指定
      });
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
  ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});
