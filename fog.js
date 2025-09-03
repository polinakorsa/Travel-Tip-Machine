let canvas = document.getElementById("canvas");
class Fog {
    constructor(x, y, tamanho, direction, velocity) {
        this.x = x;
        this.y = y;
        this.width = tamanho.w;
        this.height = tamanho.h;
        this.me = document.createElement("div");
        this.direction = direction;
        this.velocity = velocity;
    }
    create() {
        this.me.style.width = this.width + "px";
        this.me.style.height = this.height + "px";
        this.me.style.backgroundColor = "#b3b8bb";
        this.me.style.position = "absolute";
        this.me.style.opacity = 0.7;
        this.me.style.filter = "blur(40px)";
        canvas.appendChild(this.me);
        this.me.style.borderRadius = "120%";
    }
    animation() {
        this.me.style.left = this.x + "px";
        this.me.style.top = this.y + "px";
        switch (this.direction) {
            case 0:
                this.x -= this.velocity;
                if (this.x + this.width < 0) {
                    this.x = canvas.clientWidth + this.width;
                }
                break;
            case 1:
                this.x += this.velocity;
                if (this.x + this.width > canvas.width) {
                    this.me.style.left = -this.width + "px";
                }
                break;
        }
    }
}
function CreateNeb() {
    array?.forEach((ele) => {
        ele.create();
        ele.animation();
    });
    requestAnimationFrame(CreateNeb);
}
const array = [
    new Fog(200, 200, { w: 200, h: 200 }, 0, 2),
    new Fog(600, 120, { w: 100, h: 150 }, 0, 2.2),
    new Fog(70, 140, { w: 230, h: 210 }, 0, 2.4),
    new Fog(300, 20, { w: 100, h: 100 }, 0, 2.1)
];
CreateNeb();

