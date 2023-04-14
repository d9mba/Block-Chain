"use strict";

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
        return volume;
    }
};

class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    getVolume() {
        const volume = ((4/3) * Math.PI * Math.pow(this.radius, 3)).toFixed(4);
        return volume;
    }
}

class Cone {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = (Math.PI * Math.pow(this.radius, 2) * this.height / 3).toFixed(4);
        return volume;
    }
}

const cylinder = new Cylinder(5, 8);
const volumeCylinder = cylinder.getVolume();
console.log(volumeCylinder); // 628.3185

const sphere = new Sphere(12);
const volumeSphere = sphere.getVolume();
console.log(volumeSphere); // 7238.2295

let cone = new Cone(2, 3); 
const volumeCone = cone.getVolume();
console.log(volumeCone); // 12.5664
