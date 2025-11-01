window.onload = () => {
  const menuBtn = $("._header-right");
  const contentContainer = $("._content-container");
  const contentModal = $("._content-modal");
  const moreBtn = $("._more");
  const logoBtn = $("._logo");
  const loading = $("._loading");

  const parentMenu = $("._parent-menu");
  const subMenu = $("._sub-menu");
  const mentBack = $("._menu-back");
  const menuContainer = $("._menu");

  $(document).ready(() => {
    contentModal.hide();
    setTimeout(() => {
      loading.addClass("_hidden");
    }, 2000);
  });

  logoBtn.click(() => {
    location.href = "https://www.tourguidetraining.ae";
  });

  menuBtn.click(() => {
    menuContainer.removeClass("_hidden");
    contentContainer.removeClass("_show").addClass("_hidden");
    contentModal.show();
  });

  contentModal.click(() => {
    menuContainer.addClass("_hidden");
    contentModal.hide();
    contentContainer.removeClass("_hidden").addClass("_show");
  });

  moreBtn.click(() => {
    parentMenu.removeClass("_show").addClass("_hidden");
    subMenu.removeClass("_hidden").addClass("_show");
  });

  mentBack.click(() => {
    parentMenu.removeClass("_hidden").addClass("_show");
    subMenu.removeClass("_show").addClass("_hidden");
  });
};
