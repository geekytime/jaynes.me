export default [{
  id: "portals",
  year: 2020,
  type: "pressplay",
  name: "Pressplay: Portals",
  techs: ["nodejs", "gcp", "redis"],
  description: "A 24-hour mini-game experience that awarded cash prizes to winners."
}, {
  id: "slots",
  year: 2020,
  type: "pressplay",
  name: "Pressplay: Slots",
  techs: ["nodejs", "gcp", "websockets", "heroku"],
  description: "An online slot-machine and skill game that awarded cash prizes to top players."
}, {
  id: "levis",
  year: 2020,
  type: "levis",
  name: "Levi Strauss & Co - Various Apps",
  techs: ["vue", "sass", "nodejs", "aws", "lambda", "cloud-front"],
  description: "Replaced existing legacy systems with modern web front-ends."
}, {
  id: "lightboard",
  year: 2019,
  type: "opensource",
  name: "lightboard",
  techs: ["vue", "vuex", "less", "webpack"],
  description: "A touch-sensitive light-board, inspired by an interactive table my kids saw at a restaurant.",
  links: [{
    to: "https://geekytime.itch.io/lightboard-vue",
    text: "demo"
  }, {
    to: "https://github.com/geekytime/lightboard",
    text: "View Source"
  }]
}, {
  id: "privacy-armor",
  year: 2019,
  type: "infoarmor",
  name:" PrivacyArmor",
  techs: ["react", "mobx", "sass", "webpack", "babel"],
  description: "Personal Privacy Protection, provided by InfoArmor.",
  links: [{
    to: "https://www.infoarmor.com/employee-protection-solutions",
    text: "Product Info"
  }]
}, {
  id: "lace",
  year: 2018,
  type: "onlinelasercutting",
  name: "Laser Cutting Estimator",
  techs: ["nodejs"],
  description: "LaCE - Estimates laser-cutting time for customer-uploaded SVG files."
}, {
  id: "sf-soa",
  year: "2018",
  type: `statefarm`,
  name: `SOA Checkout App`,
  techs: ["react", "redux", "less", "webpack", "nodejs", "postgresql", "websockets"],
  description: "Automated checkout of dependency services for large SOA applications. Invokes services and records uptime metrics."
}, {
  id: "count",
  year: "2018",
  type: `qaline`,
  name: `Count`,
  techs: ["react", "redux", "less", "webpack", "nodejs", "postgresql", "websockets"],
  description: "A timer application for food-testing laboratories. Technicians can track multiple timers with visual feedback as deadlines approach."
}, {
  id: "tiny-heap",
  year: "2017",
  type: `opensource`,
  name: `tiny-heap`,
  techs: ["javascript"],
  description: "A tiny, pure JavaScript implementation of a `heap` data structure.",
  links: [{
    to: "https://github.com/geekytime/tiny-heap",
    text:"View Source"
  },{
    to: "https://npm.runkit.com/tiny-heap",
    text:"Try It"
  }]
}, {
  id: "chippy-sprites",
  year: "2017",
  type: "opensource",
  name: "chippy-sprites",
  techs: ["javascript"],
  description: "Add game-style animated sprites to any page, without a game framework.",
  links: [{
    to: "https://github.com/geekytime/chippy-sprites",
    text:"View Source"
  },{
    to: "https://npm.runkit.com/chippy-sprites",
    text:"Try It"
  }]
},{
  id: "quizblocks",
  year: "2016",
  type: "opensource",
  name: "Quiz Blocks",
  techs: ["unity", "c#"],
  description: "Kids can practice their math facts while playing a cute platformer game. Coins earned can be used to upgrade the player's character and home.",
  links: [{
    to: "https://github.com/geekytime/quiz-blocks",
    text:"View Source"
  },{
    to: "https://geekytime.itch.io/quiz-blocks",
    text:"Play It"
  }]
}, {
  id: "tangrams",
  year: "2016",
  type: "opensource",
  name: "Stained Glass Tangrams",
  techs: ["unity", "c#"],
  description: "The classic Tangrams puzzle game, using colorful stained glass pieces. Can you solve all ten puzzles?",
  links: [{
    to: "https://github.com/geekytime/StainedGlassTangrams",
    text:"View Source"
  },{
    to: "https://geekytime.itch.io/stained-glass-tangrams",
    text:"Try It"
  }]
}, {
  id: "sf-mts",
  year: "2016",
  type: "statefarm",
  name: "Massive Test System",
  techs: ["react", "flux", "nodejs", "webpack", "redis", "couchdb", "webdriverjs"],
  description: "Next-level test automation has saved thousands of hours of manual testing. System could generate test data, drive browsers across multiple workstations, and report results with screenshots in a central results repo."
}, {
  id: "yola-tg",
  year: "2014",
  type: `yola`,
  name: `Template Gallery`,
  techs: ["backbone", "jquery", "less", "grunt", "requirejs"],
  description: "Entry page for users to build their own websites. Displays templates and previews filtered by category."
}]
