/* eslint-env node */
module.exports = {
  appName: "jaynes-me",
  bucket: {
    localPath: ".public",
    bucketName: {
      outputKey: "BucketName"
    }
  },
  actions: {
    deleteStack ({buckets, context, stacks}) {
      const stackName = context.stackName()
      const outputKey = "BucketName"
      const bucketName = stacks.getOutputValue({stackName, outputKey})
      buckets.empty({bucketName})
      buckets.delete({bucketName})
      stacks.delete({stackName})
    }
  }
}
