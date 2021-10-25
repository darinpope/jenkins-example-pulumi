import * as pulumi from "@pulumi/pulumi";
import * as linode from "@pulumi/linode";

const primary = linode.getObjectStorageCluster({
    id: "us-east-1",
});
const foobar = new linode.ObjectStorageBucket("foobar", {
    cluster: primary.then(primary => primary.id),
    label: `%s`,
});
