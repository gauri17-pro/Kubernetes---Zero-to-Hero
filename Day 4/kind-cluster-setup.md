# How to setup a Kind cluster ?

## 1. On Windows

#### Pre-requisites:

- Download Docker desktop on windows
- Install Chocolatey

#### Installation steps

- Install kind using chocolatey package manager 
```
choco install kind
```

- Create a cluster using an image
```
kind create cluster --image kindest/node:v1.33.1@sha256:050072256b9a903bd914c0b2866828150cb229cea0efe5892e2b644d5dd3b34f name k8s-cluster1
```

- Create a cluster using config file to create a multi-node cluster
    - config.yaml
    ```
    kind: Cluster
    apiVersion: kind.x-k8s.io/v1alpha4
    nodes:
    - role: control-plane
    - role: worker
    - role: worker
    ```
    - Using the command below create a multi-node cluster
    ```
    kind create cluster --image kindest/node:v1.33.1@sha256:050072256b9a903bd914c0b2866828150cb229cea0efe5892e2b644d5dd3b34f --config config.yml --name k8s-cluster2
    ```
