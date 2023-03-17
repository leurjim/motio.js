const ball = document.querySelector(".ball");
popmotion.animate({
    from: "0px",
    to: "400px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        ball.style.top = update;
    }
});

//# sourceMappingURL=index.e48f4539.js.map
