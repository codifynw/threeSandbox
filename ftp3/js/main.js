window.addEventListener("pageshow", function () {
  var tl_intro = gsap.timeline({
    delay: 0,
    paused: true,
  });
  tl_intro.to("html", 0.8, {
    autoAlpha: 1,
    ease: Power1.easeOut,
  });

  tl_intro.play();

  var tl = gsap.timeline({
    delay: 0.8,
    paused: true,
  });
  tl.staggerFromTo(
    ".stagger",
    1.0,
    {
      y: "150%",
      skewY: 5,
      autoAlpha: 0,
    },
    {
      y: "0%",
      skewY: 0,
      autoAlpha: 1,
      ease: Circ.easeOut,
    },
    0.3
  );

  tl.play();

  [...document.querySelectorAll(".work_item")].forEach(function (item) {
    var this_inner = item.querySelector(".work_item_inner");

    var staggers = item.querySelectorAll(".stagger_body");

    var tl02 = gsap.timeline({
      paused: true,
    });
    tl02.staggerFromTo(
      staggers,
      1.0,
      {
        y: "200%",
        skewY: 10,
        autoAlpha: 0,
      },
      {
        y: "0%",
        skewY: 0,
        autoAlpha: 1,
        ease: Power4.easeOut,
      },
      0.3
    );

    ScrollTrigger.create({
      trigger: item,
      start: "center bottom",
      onEnter: () => tl02.play(),
    });

    ScrollTrigger.create({
      trigger: item,
      start: "top bottom",
      onLeaveBack: () => tl02.pause(0),
    });

    this_inner.addEventListener("mousemove", function () {
      show_cursor.play();
    });

    this_inner.addEventListener("mouseleave", function () {
      show_cursor.reverse();
    });
  }); /*close forEach*/

  gsap.ticker.fps(50);

  //underline animations

  [...document.querySelectorAll(".underline_trigger")].forEach(function (item) {
    var this_underline = item.querySelector(".underline");

    item.addEventListener("mouseover", function () {
      gsap.fromTo(
        this_underline,
        0.4,
        {
          width: 0,
        },
        { width: "100%", ease: Power4.easeOut, overwrite: true }
      );
    });

    item.addEventListener("mouseleave", function () {
      gsap.to(this_underline, 0.4, {
        width: "0%",
        ease: Power4.easeOut,
        overwrite: true,
      });
    });
  }); /*close forEach*/
}); /*close on pageview load*/

//transitions

var tl_transition01 = gsap.timeline({
  paused: true,
  overwrite: true,
});
tl_transition01.to("html", 0.5, {
  autoAlpha: 0,
  ease: Power2.easeInOut,
});

tl_transition01.timeScale(0.5);

var info_link = document.querySelector(".info-link");
info_link.addEventListener("click", function () {
  event.stopPropagation();

  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "info.html";
  }, 1000);
});

var medium_homepages_link = document.querySelector(".medium-homepages-link");
medium_homepages_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "medium-homepages.html";
  }, 1000);
});

var medium_brand_redesign_link = document.querySelector(
  ".medium-brand-redesign-link"
);
medium_brand_redesign_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "medium-brand-redesign.html";
  }, 1000);
});

var new_yorker_documentary_link = document.querySelector(
  ".new-yorker-documentary-link"
);
new_yorker_documentary_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "new-yorker-documentary.html";
  }, 1000);
});

var new_yorker_cannabis_link = document.querySelector(
  ".new-yorker-cannabis-link"
);
new_yorker_cannabis_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "new-yorker-california-cannabis.html";
  }, 1000);
});

var new_yorker_moon_hours_link = document.querySelector(
  ".new-yorker-moon-hours-link"
);
new_yorker_moon_hours_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "new-yorker-moon-hours.html";
  }, 1000);
});

var new_yorker_la_dreaming_link = document.querySelector(
  ".new-yorker-la-dreaming-link"
);
new_yorker_la_dreaming_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "new-yorker-la-dreaming.html";
  }, 1000);
});

var new_yorker_touchstones_link = document.querySelector(
  ".new-yorker-touchstones-link"
);
new_yorker_touchstones_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "new-yorker-touchstones.html";
  }, 1000);
});

var mtv_news_link = document.querySelector(".mtv-news-link");
mtv_news_link.addEventListener("click", function () {
  tl_transition01.play();

  setTimeout(function () {
    window.location.href = "mtv-news.html";
  }, 1000);
});

gsap.set(".cursor", {
  autoAlpha: 0,
  scale: 0.8,
});

var work_button = document.querySelector(".work_button");

work_button.addEventListener("click", function () {
  event.stopPropagation();
  gsap.to(window, {
    duration: 0.5,
    scrollTo: ".work_section",
    ease: Circ.easeOut,
  });
});

//three.js
var camera, scene, renderer, loadedSphere01, copy01, copy02;

var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var clock = new THREE.Clock();

init();
animate();

const newColor1 = new THREE.Color("rgb(102, 178, 154)");
const newColor2 = new THREE.Color("rgb(162, 84, 255)");
const newColor3 = new THREE.Color("rgb(99, 180, 255)");
const newColor4 = new THREE.Color("rgb(192, 62, 62)");
const newColor5 = new THREE.Color("rgb(255, 229, 127)");
const newColor6 = new THREE.Color("rgb(114, 125, 255)");
const newColor7 = new THREE.Color("rgb(255, 148, 106)");
const newColor8 = new THREE.Color("rgb(211, 236, 103)");
const newColor9 = new THREE.Color("rgb(236, 103, 103)");
const newColor10 = new THREE.Color("rgb(75, 196, 247)");

var material01 = new THREE.MeshLambertMaterial({
  color: 0x7d0040,
  transparent: true,
  opacity: 1.0,
});

var material02 = new THREE.MeshLambertMaterial({
  // color: 0xffc960,
  color: 0x00457d,
  transparent: true,
  opacity: 1.0,
});

var material03 = new THREE.MeshLambertMaterial({
  // color: 0xfe5d5d,
  color: 0xffffff,
  transparent: true,
  opacity: 1.0,
});

function init() {
  // basic scene
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  var width = window.innerWidth;
  var height = window.innerHeight;

  renderer.setSize(width, height);

  //renderer.setClearColor(0x000000, 0);

  document.getElementById("webgl_wrapper").appendChild(renderer.domElement);

  scene = new THREE.Scene();

  // near = 100;
  //far = 2000;
  // fogColor = '#000000';
  //  scene.fog = new THREE.Fog(fogColor, near, far);
  //  scene.background = new THREE.Color(fogColor);

  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.y = 0;
  camera.position.z = 150;

  var manager = new THREE.LoadingManager();
  //manager.onProgress = function(item, loaded, total) {

  //console.log(item, loaded, total);

  //};

  var loader = new THREE.OBJLoader(manager);

  loader.load("obj/half_sphere.obj", function (loadedobject01) {
    loadedobject01.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material01;
      }
    });

    copy01 = loadedobject01.clone();
    copy02 = loadedobject01.clone();

    copy01.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material02;
      }
    });

    copy02.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material03;
      }
    });

    loadedSphere01 = loadedobject01;

    loadedobject01.scale.set(50, 50, 50);
    loadedobject01.position.set(-40, 20, 0);
    loadedobject01.rotation.z = -45;

    copy01.scale.set(50, 50, 50);
    copy01.position.set(-30, -30, 0);

    copy02.scale.set(50, 50, 50);
    copy02.position.set(40, 0, -20);
    copy02.rotation.z = 45;

    scene.add(loadedobject01);

    scene.add(copy01);
    scene.add(copy02);
  });

  var dl02 = new THREE.DirectionalLight(0xffffff, 1.0);
  scene.add(dl02);
  dl02.position.set(40, 200, 200);
} /*close init*/

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 10;
  mouseY = (event.clientY - windowHalfY) / 10;
}

var windowWidth = window.innerWidth;
if (windowWidth > 540) {
  window.addEventListener("resize", onWindowResize, false);
}

function animate() {
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 1000 / 25);
  render();
}

function render() {
  var delta = clock.getDelta();

  if (loadedSphere01) loadedSphere01.rotation.y -= 0.5 * delta;
  if (loadedSphere01) loadedSphere01.rotation.z += 0.3 * delta;

  if (copy01) copy01.rotation.z += 0.5 * delta;

  if (copy02) copy02.rotation.y += 0.3 * delta;
  if (copy02) copy02.rotation.z -= 0.4 * delta;

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  camera.position.x += (mouseX - camera.position.x) / 20;
  camera.position.y += (mouseY - camera.position.y) / 20;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
