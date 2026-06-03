$(function () {
  // 대상.on("이벤트종류", 함수)

  // this로 마우스오버한 h1, h2만 파랗게
  // $("h1, h2").on("mouseover", function () {
  //   $(this).css({ color: "blue" });
  // });
  // $("h1, h2").on("mouseout", function () {
  //   $(this).css({ color: "black" });
  // });

  // + 메서드 체이닝
  // $("h1, h2")
  //   .on("mouseover", function () {
  //     $(this).css({ color: "blue" });
  //   })
  //   .on("mouseout", function () {
  //     $(this).css({ color: "black" });
  //   });

  // + on대신 이벤트종류
  // $("h1, h2")
  //   .mouseover(function () {
  //     $(this).css({ color: "blue" });
  //   })
  //   .mouseout(function () {
  //     $(this).css({ color: "black" });
  //   });

  // $("h1, h2")
  //   .mouseover(function () {
  //     $(this).css({ color: "blue" });
  //   })
  //   .mouseout(function () {
  //     $(this).css({ color: "black" });
  //   });

  // hover로 통합
  $("h1, h2").hover(
    function () {
      $(this).css({ color: "blue" });
    },
    function () {
      $(this).css({ color: "black" });
    },
  );

  //
  const myForm = $("form");
  const select = myForm.find("#favorite_color");
  const submitBtn = myForm.find("button");

  //
  myForm.on("submit", function (e) {
    e.preventDefault();
    let selectedColor = select.val();
    if (selectedColor !== null) {
      $("h3").css({ background: selectedColor });
    } else {
      alert("값을 선택해주세요");
      select.focus();
    }
  });
}); //document ready 할일
