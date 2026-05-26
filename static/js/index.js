const demoGroups = [
  {
    targetId: "physiq-grid",
    tag: "PhysIQ",
    items: [
      {
        title: "Mirror Teapot Rotate",
        caption: "A teapot on a rotating display base that rotates in front of a mirror.",
        baseline: "./static/videos/physIQ/baseline/0122_perspective-center_trimmed-mirror-teapot-rotate_1.mp4",
        optimized: "./static/videos/physIQ/optimised/0122_perspective-center_trimmed-mirror-teapot-rotate_0.mp4"
      },
      {
        title: "Solid Ball Peekaboo",
        caption: "A woven basket is hanging from a rope with a strong magnet. An orange tennis ball is placed on a table beneath it.",
        baseline: "./static/videos/physIQ/baseline/0170_perspective-center_trimmed-solid-ball-peakaboo_4.mp4",
        optimized: "./static/videos/physIQ/optimised/0170_perspective-center_trimmed-solid-ball-peakaboo_1.mp4"
      },
      {
        title: "Match",
        caption: "A lit match is being lowered into a glass of water.",
        baseline: "./static/videos/physIQ/baseline/0109_perspective-left_trimmed-match_7.mp4",
        optimized: "./static/videos/physIQ/optimised/0109_perspective-left_trimmed-match_1.mp4"
      },
      {
        title: "Mirror Ball Fall",
        caption: "A tennis ball attached to a magnet and string is hanging in front of a mirror.",
        baseline: "./static/videos/physIQ/baseline/0117_perspective-right_trimmed-mirror-ball-fall_7.mp4",
        optimized: "./static/videos/physIQ/optimised/0117_perspective-right_trimmed-mirror-ball-fall_6.mp4"
      },
      {
        title: "Rolling Reflection",
        caption: "A 30lb kettlebell resting on a wooden table next to a mirror. A tennis ball rolls towards the kettlebell.",
        baseline: "./static/videos/physIQ/baseline/0154_perspective-left_trimmed-rolling-reflection_1.mp4",
        optimized: "./static/videos/physIQ/optimised/0154_perspective-left_trimmed-rolling-reflection_2.mp4"
      },
      {
        title: "Blow Balloon",
        caption: "Air is being pumped in the balloon.",
        baseline: "./static/videos/physIQ/baseline/0039_perspective-right_trimmed-blow-balloon_1.mp4",
        optimized: "./static/videos/physIQ/optimised/0039_perspective-right_trimmed-blow-balloon_4.mp4"
      },
      {
        title: "Ball Hits Nothing",
        caption: "An orange ball rolls out of a black pipe that is sitting on the table towards the right side.",
        baseline: "./static/videos/physIQ/baseline/0011_perspective-center_trimmed-ball-hits-nothing_4.mp4",
        optimized: "./static/videos/physIQ/optimised/0011_perspective-center_trimmed-ball-hits-nothing_3.mp4"
      },
      {
        title: "Light on Mug",
        caption: "A yellow mug is placed on a rotating turntable that rotates illuminated by a spotlight.",
        baseline: "./static/videos/physIQ/baseline/0076_perspective-left_trimmed-light-on-mug_2.mp4",
        optimized: "./static/videos/physIQ/optimised/0076_perspective-left_trimmed-light-on-mug_0.mp4"
      },
      {
        title: "Light on Mug Block",
        caption: "A yellow mug and a blue wooden block are placed on a rotating turntable that rotates. ",
        baseline: "./static/videos/physIQ/baseline/0079_perspective-left_trimmed-light-on-mug-block_5.mp4",
        optimized: "./static/videos/physIQ/optimised/0079_perspective-left_trimmed-light-on-mug-block_6.mp4"
      },
      {
        title: "Cut Tangerine",
        caption: "A knife is slicing through the tangerine.",
        baseline: "./static/videos/physIQ/baseline/0041_perspective-center_trimmed-cut-orange_0.mp4",
        optimized: "./static/videos/physIQ/optimised/0041_perspective-center_trimmed-cut-orange_1.mp4"
      },
      {
        title: "Teapot Rotates",
        caption: "A teapot is placed on a wooden table. a piece of silk fabric is lowered on the teapot to cover it.",
        baseline: "./static/videos/physIQ/baseline/0177_perspective-right_trimmed-teapot-rotates_4.mp4",
        optimized: "./static/videos/physIQ/optimised/0177_perspective-right_trimmed-teapot-rotates_5.mp4"
      },
      {
        title: "Potato in Water",
        caption: "A potato is held by a grabber tool and dropped into a tall glass containing blue liquid.",
        baseline: "./static/videos/physIQ/baseline/0142_perspective-left_trimmed-potato-in-water_7.mp4",
        optimized: "./static/videos/physIQ/optimised/0142_perspective-left_trimmed-potato-in-water_1.mp4"
      },
      {
        title: "Silk Cover",
        caption: "A teapot is placed on a wooden table. a piece of silk fabric is lowered on the teapot to cover it.",
        baseline: "./static/videos/physIQ/baseline/0158_perspective-center_trimmed-silk-cover_2.mp4",
        optimized: "./static/videos/physIQ/optimised/0158_perspective-center_trimmed-silk-cover_1.mp4"
      },
      {
        title: "Stable Blocks",
        caption: "A pink block is being lowered towards a simple structure made of colorful blocks resembling a gate.",
        baseline: "./static/videos/physIQ/baseline/0173_perspective-center_trimmed-stable-blocks_2.mp4",
        optimized: "./static/videos/physIQ/optimised/0173_perspective-center_trimmed-stable-blocks_3.mp4"
      }
    ]
  },
  {
    targetId: "vp2-grid",
    tag: "VP2",
    items: [
      {
        title: "Syrup on Pancakes",
        caption: "Syrup is poured onto pancakes from a bottle.",
        baseline: "./static/videos/vp2/baseline/Syrup is poured onto pancakes from a bottle, the syrup coating the surface._2.mp4",
        optimized: "./static/videos/vp2/optimised/Syrup is poured onto pancakes from a bottle, the syrup coating the surface._1.mp4"
      },
      {
        title: "Baker Cutting Dough",
        caption: "Using a knife, a baker cuts a loaf of pre-shaped dough into smaller rolls.",
        baseline: "./static/videos/vp2/baseline/Using a knife, a baker cuts a loaf of pre-shaped dough into smaller rolls, making visible cuts._1.mp4",
        optimized: "./static/videos/vp2/optimised/Using a knife, a baker cuts a loaf of pre-shaped dough into smaller rolls, making visible cuts._2.mp4"
      },
      {
        title: "A child's toy hammer smashes a small plastic egg, breaking it open.",
        caption: "Impact-driven prompt emphasizing contact and visible breakage.",
        baseline: "./static/videos/vp2/baseline/A child's toy hammer smashes a small plastic egg, breaking it open._1.mp4",
        optimized: "./static/videos/vp2/optimised/A child's toy hammer smashes a small plastic egg, breaking it open._2.mp4"
      },
      {
        title: "Circular Saw Cutting Foam",
        caption: "A circular saw cuts through a block of foam, leaving a clean.",
        baseline: "./static/videos/vp2/baseline/A circular saw cuts through a block of foam, leaving a clean, relatively smooth cut._0.mp4",
        optimized: "./static/videos/vp2/optimised/A circular saw cuts through a block of foam, leaving a clean, relatively smooth cut._0.mp4"
      },
      {
        title: "Crane Lifting Bricks",
        caption: "A crane gently lifts a pallet of bricks.",
        baseline: "./static/videos/vp2/baseline/A crane gently lifts a pallet of bricks, the bricks remain stacked._3.mp4",
        optimized: "./static/videos/vp2/optimised/A crane gently lifts a pallet of bricks, the bricks remain stacked._2.mp4"
      },
      {
        title: "Finger Poking Clay",
        caption: "A finger pokes a hole in a soft clay sculpture, leaving a distinct indentation.",
        baseline: "./static/videos/vp2/baseline/A finger pokes a hole in a soft clay sculpture, leaving a distinct indentation._2.mp4",
        optimized: "./static/videos/vp2/optimised/A finger pokes a hole in a soft clay sculpture, leaving a distinct indentation._1.mp4"
      },
      {
        title: "Hoverboard Spin",
        caption: "A hoverboard rider performs a 360-degree spin on a polished wooden floor.",
        baseline: "./static/videos/vp2/baseline/A hoverboard rider performs a 360-degree spin on a polished wooden floor._2.mp4",
        optimized: "./static/videos/vp2/optimised/A hoverboard rider performs a 360-degree spin on a polished wooden floor._0.mp4"
      },
      {
        title: "Axe Splitting Wooden Beam",
        caption: "A large, thick wooden beam is broken in two with a powerful overhead axe swing.",
        baseline: "./static/videos/vp2/baseline/A large, thick wooden beam is broken in two with a powerful overhead axe swing, showing a clean, straight break._3.mp4",
        optimized: "./static/videos/vp2/optimised/A large, thick wooden beam is broken in two with a powerful overhead axe swing, showing a clean, straight break._3.mp4"
      },
      {
        title: "Segway Package Delivery",
        caption: "A package is secured to a Segway's platform; the Segway travels a short distance, delivering the package.",
        baseline: "./static/videos/vp2/baseline/A package is secured to a Segway's platform; the Segway travels a short distance, delivering the package._1.mp4",
        optimized: "./static/videos/vp2/optimised/A package is secured to a Segway's platform; the Segway travels a short distance, delivering the package._2.mp4"
      },
      {
        title: "Paint Roller on Staircase",
        caption: "A paint roller is used to apply a coat of brown paint to a section of a wooden staircase.",
        baseline: "./static/videos/vp2/baseline/A paint roller is used to apply a coat of brown paint to a section of a wooden staircase, showing the paint being spread evenly along the stairs._4.mp4",
        optimized: "./static/videos/vp2/optimised/A paint roller is used to apply a coat of brown paint to a section of a wooden staircase, showing the paint being spread evenly along the stairs._0.mp4"
      },
      {
        title: "Punching Bag Combo",
        caption: "A person punching a boxing bag.",
        baseline: "./static/videos/vp2/baseline/A person uses a jab to strike a punching bag, followed by a hook, showing both impacts._0.mp4",
        optimized: "./static/videos/vp2/optimised/A person uses a jab to strike a punching bag, followed by a hook, showing both impacts._2.mp4"
      },
      {
        title: "Skateboard Somersault",
        caption: "A person uses a skateboard to perform a somersault trick, landing on the board.",
        baseline: "./static/videos/vp2/baseline/A person uses a skateboard to perform a somersault trick, landing on the board._1.mp4",
        optimized: "./static/videos/vp2/optimised/A person uses a skateboard to perform a somersault trick, landing on the board._1.mp4"
      },
      {
        title: "Slip Applied to Clay Bowl",
        caption: "A potter applies a thin layer of slip to a clay bowl, using a brush to create an even coat.",
        baseline: "./static/videos/vp2/baseline/A potter applies a thin layer of slip to a clay bowl, using a brush to create an even coat._1.mp4",
        optimized: "./static/videos/vp2/optimised/A potter applies a thin layer of slip to a clay bowl, using a brush to create an even coat._1.mp4"
      },
      {
        title: "Potter Removing Water",
        caption: "A potter uses a sponge to gently remove excess water from the surface of a clay piece.",
        baseline: "./static/videos/vp2/baseline/A potter uses a sponge to gently remove excess water from the surface of a clay piece._1.mp4",
        optimized: "./static/videos/vp2/optimised/A potter uses a sponge to gently remove excess water from the surface of a clay piece._0.mp4"
      },
      {
        title: "Rolling Pin and Cookie Dough",
        caption: "A rolling pin flattens a sphere of cookie dough into a disc.",
        baseline: "./static/videos/vp2/baseline/A rolling pin flattens a sphere of cookie dough into a disc, with the edges of the disc thinning._0.mp4",
        optimized: "./static/videos/vp2/optimised/A rolling pin flattens a sphere of cookie dough into a disc, with the edges of the disc thinning._3.mp4"
      },
      {
        title: "Jetskis and Wake Collision",
        caption: "Two jetskis race side-by-side.",
        baseline: "./static/videos/vp2/baseline/Two jetskis race side-by-side, their wakes colliding in a visible spray of water._3.mp4",
        optimized: "./static/videos/vp2/optimised/Two jetskis race side-by-side, their wakes colliding in a visible spray of water._0.mp4"
      }
    ]
  }
];

function createVideoPanel(label, src, variant) {
  const panel = document.createElement("article");
  panel.className = `video-panel video-panel--${variant}`;

  const frame = document.createElement("div");
  frame.className = "video-frame";

  const badge = document.createElement("div");
  badge.className = "video-badge";
  badge.textContent = label;

  const video = document.createElement("video");
  video.src = src;
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = "metadata";

  frame.appendChild(badge);
  frame.appendChild(video);
  panel.appendChild(frame);

  return { panel, video };
}

function createComparisonCard(item) {
  const card = document.createElement("article");
  card.className = "comparison-card";

  const caption = document.createElement("p");
  caption.className = "comparison-card__caption";
  caption.textContent = item.title ? `${item.title}: ${item.caption}` : item.caption;

  const videoGrid = document.createElement("div");
  videoGrid.className = "comparison-card__videos";

  const baselinePanel = createVideoPanel("Baseline", item.baseline, "baseline");
  const optimizedPanel = createVideoPanel("Proprio", item.optimized, "optimized");

  videoGrid.appendChild(baselinePanel.panel);
  videoGrid.appendChild(optimizedPanel.panel);
  card.appendChild(caption);
  card.appendChild(videoGrid);

  card._videos = [baselinePanel.video, optimizedPanel.video];
  return card;
}

function renderGroups() {
  demoGroups.forEach((group) => {
    const container = document.getElementById(group.targetId);
    if (!container) {
      return;
    }

    group.items.forEach((item) => {
      container.appendChild(createComparisonCard(item));
    });
  });
}

function setupVideoObservers() {
  const cards = Array.from(document.querySelectorAll(".comparison-card"));
  if (!cards.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const videos = entry.target._videos || [];
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          videos.forEach((video) => {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          });
        } else {
          videos.forEach((video) => video.pause());
        }
      });
    },
    { threshold: 0.35 }
  );

  cards.forEach((card) => observer.observe(card));
}

function setupBenchmarkSwitcher() {
  const buttons = Array.from(document.querySelectorAll(".benchmark-switcher__button"));
  const panels = Array.from(document.querySelectorAll(".benchmark-panel"));
  if (!buttons.length || !panels.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const benchmark = button.dataset.benchmark;

      buttons.forEach((item) => item.classList.toggle("is-active", item === button));
      panels.forEach((panel) => {
        const isActive = panel.id === `panel-${benchmark}`;
        panel.classList.toggle("is-active", isActive);

        if (!isActive) {
          panel.querySelectorAll("video").forEach((video) => video.pause());
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGroups();
  setupVideoObservers();
  setupBenchmarkSwitcher();
});
