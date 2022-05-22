const wrapper = document.querySelector(".wrapper"),
header = wrapper.querySelector("header");

function onDrag({movementX, movementY}) {
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt( getStyle.top);
    // console.log(typeof left,typeof top);
    // console.log(e);
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${left + movementY}px`;

}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag );
});

document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag );
});
