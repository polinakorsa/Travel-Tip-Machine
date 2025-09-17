let canvas = document.getElementById("canvas");

class Fog {
    constructor(x, y, tamanho, direction, velocity, color) {
        this.x = x;
        this.y = y; // fixed vertical position
        this.width = tamanho.w;
        this.height = tamanho.h;
        this.me = document.createElement("div");
        this.direction = direction; // 0 = left, 1 = right
        this.velocity = velocity;
        this.color = color;
    }

    create() {
        this.me.style.width = this.width + "px";
        this.me.style.height = this.height + "px";
        this.me.style.backgroundColor = this.color;
        this.me.style.position = "absolute";
        this.me.style.opacity = 0.8;
        this.me.style.filter = "blur(80px)";
        this.me.style.borderRadius = "120%";
        canvas.appendChild(this.me);
    }

    animation() {
        // horizontal movement
        if (this.direction === 0) {
            this.x -= this.velocity;
            if (this.x + this.width < 0) this.x = canvas.clientWidth + this.width;
        } else {
            this.x += this.velocity;
            if (this.x > canvas.clientWidth) this.x = -this.width;
        }

        // fixed vertical position
        this.me.style.left = this.x + "px";
        this.me.style.top = this.y + "px";
    }
}

function CreateNeb() {
    array.forEach((ele) => {
        ele.create();
        ele.animation();
    });
    requestAnimationFrame(CreateNeb);
}

// Fog clouds flying horizontally, 200px higher, light blue-grey color
const array = [
    new Fog(200, 200 - 200, { w: 400, h: 400 }, 0, 3, "rgba(179,184,187,0.7)"),
    new Fog(600, 120 - 200, { w: 350, h: 300 }, 1, 3.5, "rgba(179,184,187,0.6)"),
    new Fog(70, 140 - 200, { w: 500, h: 450 }, 0, 4, "rgba(179,184,187,0.65)"),
    new Fog(300, 20 - 200, { w: 300, h: 300 }, 1, 3.2, "rgba(179,184,187,0.7)"),
    new Fog(500, 250 - 200, { w: 350, h: 350 }, 0, 2.5, "rgba(179,184,187,0.6)"),
    new Fog(150, 300 - 200, { w: 400, h: 400 }, 1, 3, "rgba(179,184,187,0.7)")
];

CreateNeb();