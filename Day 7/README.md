# Kubernetes Notes: ReplicationController vs ReplicaSet vs Deployment

------------------------------------------------------------------------

## 1️⃣ ReplicationController (RC)

### What is it?

ReplicationController ensures that a specified number of Pod replicas
are running at all times.

### Key Features:

-   Maintains desired number of Pods
-   Supports equality-based label selectors only
-   Automatically replaces failed Pods

### Limitations:

-   Does NOT support set-based selectors
-   No support for rolling updates
-   Mostly replaced by ReplicaSet

### Example YAML:

``` yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: nginx-rc
spec:
  replicas: 3
  selector:
    app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
```

------------------------------------------------------------------------

## 2️⃣ ReplicaSet (RS)

### What is it?

ReplicaSet ensures a stable set of replica Pods running at any given
time.

### Key Features:

-   Maintains desired number of Pods
-   Supports set-based label selectors
-   Used by Deployments internally

### Why ReplicaSet over RC?

-   More flexible label selectors (matchExpressions)
-   More advanced and recommended over RC

### Example YAML:

``` yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
```

------------------------------------------------------------------------

## 3️⃣ Deployment

### What is it?

Deployment provides declarative updates for Pods and ReplicaSets.

### Key Features:

-   Manages ReplicaSets automatically
-   Supports rolling updates
-   Supports rollbacks
-   Declarative configuration
-   Self-healing

### Why Use Deployment?

In real-world production environments, you rarely create ReplicaSets
directly. Deployments manage ReplicaSets and provide advanced features
like versioning and rollback.

### Example YAML:

``` yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
  strategy:
    type: RollingUpdate
```

------------------------------------------------------------------------

# 🔥 Comparison Table

  Feature                        ReplicationController   ReplicaSet        Deployment
  ------------------------------ ----------------------- ----------------- ------------
  Maintains Pod replicas         ✅                      ✅                ✅
  Supports set-based selectors   ❌                      ✅                ✅
  Rolling updates                ❌                      ❌                ✅
  Rollback support               ❌                      ❌                ✅
  Manages ReplicaSet             ❌                      ❌                ✅
  Recommended for production     ❌                      ❌ (direct use)   ✅

------------------------------------------------------------------------

# 📌 Summary

-   ReplicationController → Old and limited.
-   ReplicaSet → Improved version of RC.
-   Deployment → Production-grade controller that manages ReplicaSets
    and enables rolling updates & rollback.

------------------------------------------------------------------------

💡 Interview Tip: If asked what to use in production → Always say
**Deployment**, because it provides versioning, rollout strategy, and
rollback capabilities.
