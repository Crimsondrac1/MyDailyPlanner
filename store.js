// $(document).ready (function () {
//     $("*[data-store]").each(function () {
//       $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
//     });

//     $("*[data-store]").on("keyup", function (itm) {
//       localStorage.setItem ("item-" + $(this).attr("data-store"), $(this).val());
//     })
//   })

// $(document).ready (function () {
//     $(".task").each(function () {
//       $(this).val(localStorage.getItem($(this).attr("id")));
//     });

//     $("saveBtn").on("click", function (itm) {
//       localStorage.setItem ($(this).attr("id"), $(this).val());
//     })
//   })


$(document).ready (function () {
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    $("*[data-store]").on("keyup", function (itm) {
      localStorage.setItem ("item-" + $(this).attr("data-store"), $(this).val());
    })
  })