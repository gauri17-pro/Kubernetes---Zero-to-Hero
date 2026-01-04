# What is Kubeconfig?

- A Kubeconfig is a YAML file with all the Kubernetes cluster details, certificates, and secret tokens to authenticate the cluster. 
  You might get this config file directly from the cluster administrator or from a cloud platform if you are using a managed Kubernetes cluster.

- When you use kubectl, it uses the information in the kubeconfig file to connect to the Kubernetes cluster API.
- The default location of the Kubeconfig file is `$HOME/.kube/config`

- Commands for config

1. Get the context details
```
kubectl config get-contexts
```

2. To view merged config
```
KUBECONFIG=~/.kube/config:~/.kube/kubconfig2
```

3. To display the current-context
```
kubectl config current-context  
```

4. Set the default context
```
kubectl config use-context my-cluster-name  
```

## Authentication process 
<img width="1267" height="767" alt="image" src="https://github.com/user-attachments/assets/4eb4f737-fa6e-4acf-89f2-241f4750c2ec" />




