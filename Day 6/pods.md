# Introduction to Kubernetes Pods – DevOps Tutorial

This guide provides a comprehensive overview of **Kubernetes Pods**, covering their **fundamental role, lifecycle, and practical deployment methods**, based on the *Code With Gauri* tutorial.

---

## 1. What is a Pod?

A **Pod** is the **smallest deployable unit** within a Kubernetes (K8s) cluster.  
While **Docker manages containers**, **Kubernetes manages Pods**.

### 🔑 Key Characteristics

- **Encapsulation**  
  A Pod acts as a logical wrapper for one or more containers.

- **Shared Resources**  
  Containers within the same Pod share:
  - The same **network namespace** (IP address & ports)
  - **Storage volumes** (if defined)

- **Communication**  
  Containers inside a Pod can communicate with each other using `localhost`.

- **Ephemeral Nature**  
  Pods are temporary.  
  If a Pod fails or is deleted, its internal data is lost unless **external volumes** are used.

- **Single Node Scheduling**  
  All containers inside a Pod are always scheduled on the **same worker node**.

---

## 2. Pod Life Cycle Stages

Every Pod goes through distinct phases during its lifecycle:

| Stage       | Description |
|------------|-------------|
| **Pending** | Pod is accepted by the cluster but is waiting for scheduling or image pulling |
| **Running** | Pod is bound to a node and at least one container is running |
| **Succeeded** | All containers terminated successfully (exit code `0`) |
| **Failed** | At least one container terminated with a failure (non-zero exit code) |
| **Unknown** | Pod state cannot be determined due to node communication issues |

---

## 3. Hands-on: Deploying Pods

There are **two primary ways** to create and manage Pods in Kubernetes.

---

### A. Imperative Way (Quick Commands)

Used for **testing, learning, or one-time tasks**.

#### ▶ Run a Pod
```bash
kubectl run nginx-test --image=nginx
```

### Declarative Way (Manifest Files)

Used in real-world projects and production.
Desired state is defined in YAML and stored in version control.

```
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    env: development
spec:
  containers:
    - name: nginx-container
      image: nginx:latest
      ports:
        - containerPort: 80
```
