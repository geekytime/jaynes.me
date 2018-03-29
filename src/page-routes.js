export default [{
  path: ["", "/", "/index", "/home"],
  page: "home",
  transIndex: 0
},{
  path: "/about",
  page: "about",
  transIndex: 1
},{
  path: ["/blog", "/blog/:post"],
  page: "blog",
  transIndex: 2
},{
  path: ["/projects", "/projects/:name"],
  page: "projects",
  transIndex: 3
},{
  path: "/contact",
  page: "contact",
  transIndex: 4
}]
