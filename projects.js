const popovers = document.querySelectorAll("[popover]");

popovers.forEach((popover) => {
  const closeButton = popover.querySelector("button");

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();

    popover.classList.add("closing");

    setTimeout(() => {
      popover.hidePopover();
      popover.classList.remove("closing");
    }, 300);
  });
});
