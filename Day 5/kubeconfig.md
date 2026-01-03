# What is Kubeconfig?

- A Kubeconfig is a YAML file with all the Kubernetes cluster details, certificates, and secret tokens to authenticate the cluster. 
  You might get this config file directly from the cluster administrator or from a cloud platform if you are using a managed Kubernetes cluster.

- When you use kubectl, it uses the information in the kubeconfig file to connect to the Kubernetes cluster API.
- The default location of the Kubeconfig file is `$HOME/.kube/config`




