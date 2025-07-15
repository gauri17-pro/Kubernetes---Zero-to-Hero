# Docker Notes

## What is virtualization?
Virtualization is the process of creating a virtual version of something—most commonly, a computer system, including its operating system, storage, and hardware resources. It allows multiple virtual machines or environments to run on a single physical machine.

#### Both Virtual Machines and Containers work on the principle of Virtualization

## What is a Virtual Machine?
A virtual machine (VM) is a software-based emulation of a physical computing environment that runs an operating system and applications just like a physical computer. It is created and managed by a hypervisor, which abstracts and allocates the host machine’s hardware resources to one or more isolated guest environments.

## What is a container?
Container is a standard unit of software that packages application and its dependencies so the application runs quickly and reliably from one computing environment to another. A container is a lightweight, standalone, and executable package that includes everything needed to run a piece of software—such as the code, runtime, system tools, libraries, and settings.

## What is Docker?
Docker is an open-source platform designed to help developers build, ship, and run applications inside containers. It simplifies application deployment by packaging the app and all its dependencies into a single, portable unit that runs reliably in different environments. It is a platform that provides easy way to containerize your applications, which means, using Docker you can build container images, run the images to create containers and also push these containers to container registries such as DockerHub. 

## Virtual Machines vs Containers

![containers-vs-virtual-machines](https://github.com/user-attachments/assets/362a5506-e3b6-46c0-beb0-02e15a50e754)

## Docker Concepts

- Dockerfile: A Dockerfile is a plain-text script that contains a set of instructions used to build a Docker image
- Image: A Docker image is a read-only, layered blueprint for creating a Docker container. It contains everything needed to run a piece of software—code, runtime, libraries, environment variables, configuration files, and dependencies.
- Container: A container is a lightweight, standalone, and executable package that includes everything needed to run a piece of software—such as the code, runtime, system tools, libraries, and settings
- Registry: A Docker registry is a storage and distribution system for Docker images. It allows users to push (upload) and pull (download) container images to/from a central location, making it easy to share and deploy containers across environments.

## Docker Architecture

<img width="1024" height="519" alt="0_kDJEckrqtk653KL_" src="https://github.com/user-attachments/assets/be8af32e-aaa8-45ee-aec2-919231bfd9e3" />

#### Docker Client
The Docker client (docker command line interface) is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these request to docker daemon, which carries them out. The docker command uses the Docker API. The Docker client can communicate with more than one daemon.

#### Docker Daemon
A background service (dockerd) that handles requests from the Docker client. The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

#### Docker Registry
A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry. When you use the docker pull or docker run commands, the required images are pulled from your configured registry. When you use the docker push command, your image is pushed to your configured registry.

## Docker installation

#### Installing docker on ubuntu

1. Set up Docker's apt repository

```sh
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2. Install the Docker packages

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3. Verify that the installation is successful by running the hello-world image

```sh
sudo docker run hello-world
```
