# 🚀 Types of Services in Kubernetes

Kubernetes Services provide stable networking and service discovery for Pods.  
Since Pods are ephemeral and their IP addresses can change, Services ensure reliable communication.

---

# 📌 Why Do We Need Services?

- Pods are dynamic (IP changes on restart)
- Provide stable virtual IP (ClusterIP)
- Enable internal & external communication
- Load balance traffic across Pods
- DNS-based service discovery

---

# 🔥 Types of Services in Kubernetes

1. ClusterIP (Default)
2. NodePort
3. LoadBalancer
4. ExternalName
5. Headless Service

---

# 1️⃣ ClusterIP (Default Service)

### ✅ Use Case
- Internal communication within the cluster
- Microservice-to-microservice communication

### 📄 Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  type: ClusterIP
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
```

### 🔎 Key Points
- Exposed only inside the cluster
- Gets a virtual IP
- Load balances traffic across Pods

---

# 2️⃣ NodePort

### ✅ Use Case
- Expose application externally (basic setup)
- Development or testing

### 📄 Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-nodeport
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
      nodePort: 30007
```

### 🔎 Key Points
- Opens a port (30000–32767) on every node
- Access using: NodeIP:NodePort
- Not ideal for production

---

# 3️⃣ LoadBalancer

### ✅ Use Case
- Production environments
- Cloud providers (AWS, Azure, GCP)

### 📄 Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-lb
spec:
  type: LoadBalancer
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 8080
```

### 🔎 Key Points
- Creates external cloud load balancer
- Provides public IP
- Recommended for production

---

# 4️⃣ ExternalName

### ✅ Use Case
- Connect to external services
- DNS aliasing

### 📄 Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-db
spec:
  type: ExternalName
  externalName: mydatabase.example.com
```

### 🔎 Key Points
- No ClusterIP created
- Pure DNS CNAME mapping
- No kube-proxy involvement

---

# 5️⃣ Headless Service

### ✅ Use Case
- StatefulSets
- Direct Pod communication
- Databases (MongoDB, Kafka, Cassandra)

### 📄 Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mongodb-headless
spec:
  clusterIP: None
  selector:
    app: mongodb
  ports:
    - port: 27017
      targetPort: 27017
```

### 🔎 Key Points
- No ClusterIP
- Returns Pod IPs directly
- No load balancing
- Used for stable network identity

---

# 📊 Comparison Table

| Feature | ClusterIP | NodePort | LoadBalancer | ExternalName | Headless |
|----------|------------|-----------|--------------|--------------|-----------|
| Internal Access | ✅ | ✅ | ✅ | ❌ | ✅ |
| External Access | ❌ | ✅ | ✅ | ❌ | ❌ |
| Load Balancing | ✅ | ✅ | ✅ | ❌ | ❌ |
| Cloud Provider Required | ❌ | ❌ | ✅ | ❌ | ❌ |
| Stable Pod Identity | ❌ | ❌ | ❌ | ❌ | ✅ |

---

# 🎯 Interview Summary

- ClusterIP → Default internal service  
- NodePort → Exposes app on node port  
- LoadBalancer → Production external exposure  
- ExternalName → DNS alias for external services  
- Headless → Direct Pod communication (Stateful apps)  

---

# 📚 Conclusion

Kubernetes Services abstract networking complexity and ensure reliable, scalable, and stable communication between Pods and external systems.
