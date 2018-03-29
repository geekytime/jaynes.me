/* eslint-env node */
const {Template} = require("@yocode/stacks")

const websiteConfiguration = {
  "IndexDocument": "index.html",
  "ErrorDocument": "index.html"
}

module.exports = (context) => {
  const t = new Template(context)

  const bucketName = `jaynes-me`

  const bucket = t.bucket({bucketName, websiteConfiguration})
  t.output({key: "WebsiteUrl", type: "s3WebUrl", args: {bucket} })
  t.output({key: "BucketName", type: "bucketName", args: {bucket} })
  return t.build("jaynes.me")
}
